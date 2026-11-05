import assert from 'node:assert/strict';
import matter from 'gray-matter';
import { readFileSync, realpathSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const archive = JSON.parse(readFileSync(new URL('../content/expressions.json', import.meta.url)));
const intro = JSON.parse(readFileSync(new URL('../content/maipai.json', import.meta.url)));
const ids = new Set();
const lowercase = text => {
  assert.equal(text, text.toLowerCase(), `site copy must be lowercase: ${text}`);
  assert(!text.includes('—'), 'no em dashes in site copy');
};
lowercase(intro.paragraph);
assert(intro.paragraph.trim().length > 0);
assert(intro.paragraph.split(/\s+/).length <= 90, 'keep the welcome short');
assert(Number.isFinite(Date.parse(archive.lastSuccessfulCheck)));
assert.equal(typeof archive.coverage.complete, 'boolean');
assert(archive.coverage.complete || archive.coverage.gaps.length > 0);
for (const post of archive.posts) {
  assert(/^\d+$/.test(post.id));
  assert(!ids.has(post.id), `duplicate post: ${post.id}`);
  ids.add(post.id);
  assert.equal(post.url, `https://x.com/koopuluri/status/${post.id}`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(post.publishedDate));
  assert.equal(new Date(post.publishedDate).toISOString().slice(0, 10), post.publishedDate);
  lowercase(post.title);
  assert(post.title.trim().length > 0);
  assert(post.sourceContext.evidence && post.sourceContext.titleBasis);
  assert(['long_text', 'video_with_text'].includes(post.selectionType));
  if (post.selectionType === 'long_text') assert.equal(post.sourceContext.requiresExpansion, true);
  if (post.selectionType === 'video_with_text') assert(post.sourceContext.textAboveVideo?.trim());
  for (const id of post.threadPostIds) {
    assert(!ids.has(id), `duplicate thread post: ${id}`);
    ids.add(id);
  }
}
for (const id of intro.groundedInPostIds) assert(ids.has(id), `intro source missing: ${id}`);
for (const post of archive.excluded) assert(!ids.has(post.id), `excluded post included: ${post.id}`);
console.log(`content checks passed: ${archive.posts.length} expressions; coverage ${archive.coverage.complete ? 'complete' : 'partial'}`);

const selected = JSON.parse(readFileSync(new URL('../content/selected-essays.json', import.meta.url)));
const profile = JSON.parse(readFileSync(new URL('../content/profile.json', import.meta.url)));
const publishing = JSON.parse(readFileSync(new URL('../../ghost.publish.json', import.meta.url)));
const expressionRoot = realpathSync(fileURLToPath(new URL('../../expression', import.meta.url)));
const reservedSlugs = new Set([
  ...readdirSync(new URL('../app/', import.meta.url), { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('['))
    .map(entry => entry.name),
  ...readdirSync(new URL('../posts/', import.meta.url)).map(name => name.replace(/\.mdx?$/, '')),
  'personal-token', 'personal-manifesto',
]);
const slugs = new Set();
const sources = new Set();
for (const essay of selected) {
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(essay.slug), `invalid essay slug: ${essay.slug}`);
  assert(!slugs.has(essay.slug), `duplicate essay slug: ${essay.slug}`);
  assert(!sources.has(essay.source), `duplicate essay source: ${essay.source}`);
  slugs.add(essay.slug);
  sources.add(essay.source);
  assert(!reservedSlugs.has(essay.slug), `essay slug conflicts with an existing route: ${essay.slug}`);
  assert(!Object.hasOwn(essay, 'title'), 'essay title belongs in Markdown frontmatter');
  assert(essay.source.endsWith('.md'));
  const sourcePath = realpathSync(path.resolve(expressionRoot, essay.source));
  assert(sourcePath.startsWith(`${expressionRoot}${path.sep}`), 'essay source must remain inside expression/');
  const { data, content } = matter(readFileSync(sourcePath, 'utf8'));
  assert(typeof data.title === 'string' && data.title.trim(), `missing frontmatter title: ${essay.source}`);
  assert(data.date === undefined || (typeof data.date === 'string' && data.date.trim()), `date must be a nonempty quoted string: ${essay.source}`);
  assert(content.trim().length > 0, `empty essay: ${essay.source}`);
  assert(publishing.site.inputs.includes(`expression/${essay.source}`), `add expression/${essay.source} to ghost.publish.json site.inputs`);
}
lowercase(profile.name);
lowercase(profile.bio);
assert(profile.name.trim() && profile.bio.trim());
assert.equal(profile.xUrl, archive.profileUrl);
console.log(`site checks passed: ${selected.length} selected essays; sources and publishing inputs verified`);

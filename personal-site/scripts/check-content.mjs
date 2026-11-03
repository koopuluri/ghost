import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
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

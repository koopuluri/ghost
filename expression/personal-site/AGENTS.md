<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# koopuluri.com

This site now lives in Ghost's `expression/personal-site/`. Ghost is the canonical source;
the private `koopuluri/karthikuppu.com` repository is the preserved import origin.
Follow the root `AGENTS.md` authorship convention and `publish-ghost` skill for
publication. Site-specific copy stays here; future independent writing belongs
in Ghost's `expression/essays/`. Preserve existing posts and source evidence in place.

Read instructions.md, README.md, content/profile.json and content/selected-essays.json before editing.
Apply [Ghost design guidelines](../../DESIGN_GUIDELINES.md). Use the approved essay
page as the site-wide spacing reference, with shared tokens in app/globals.css.
Treat instructions.md as the persistent product and presentation preferences.
The current product has three top-level pages with icon-only navigation: personhood
(`/`, the default), personal artificial intelligence (`/ai`), and personal stock
(`/stock`). Use the original SVG geometry from `assets/manifesto-stack-icons.svg`, at 18px.
The active third has a sliding background; all icons use the same 2.2 stroke
width, with dark active and faded inactive colors and no underline. Keep the shared layout
mounted across section navigation and respect reduced motion.
All three top-level pages share a centered 48px portrait above
`karthik uppuluri (x)`, with x opening the X profile in a new tab and no visible bio. Below
the profile: a divider, three equal-width icon navigation segments, a divider,
then the section content. The heart section is titled `expressions` above the
explicitly selected essay titles. Keep the selection newest first and oldest last;
currently Personal Artificial Intelligence, Design principles, then The Personal Stack. Match the
measured benji.org typography/layout values in instructions.md: Inter, one 14px
body text size, 20px line-height, subtle dividers and weight/color hierarchy.
Essay headers are the exception: centered Georgia titles, 32px on desktop and
28px at widths up to 768px, below
the unchanged 14px muted date, separated by the shared 8px detail gap. Browser
tabs show only the essay title. Leave 3rem (48px) between the essay header and body.
Links use the user's ChatGPT reference blue, with an underline only on hover/focus.
Selection and display order live in `content/selected-essays.json`; source Markdown
stays in Ghost's `expression/`. Never auto-publish the directory or rewrite essays.
Keep their original capitalization, punctuation and π callouts. Add selected source
paths to `ghost.publish.json` site.inputs. The deeper essay view has a home link;
the three-icon navigation belongs to the top-level pages.
When asked to publish an essay, follow README.md's "when asked to publish an essay"
checklist. Keep URL availability and homepage inclusion coupled through the explicit
selection list for now; the proposed public-by-default/draft-flag architecture was
not adopted.

For site changes, run `npm run check:content` and `npm run build`, and verify desktop
and mobile layouts, keyboard navigation, the three active icons, and essay links.
Keep the homepage, top-level pages and selected essays statically rendered.
Preserve the historical X archive, Maipai copy and essay/video routes.

## when explicitly asked to update the historical X archive

This is no longer the homepage update workflow. Read `content/expressions.json`
and `content/maipai.json` before working on that archive.

1. Establish available browser control. Prefer a new Safari tab if supported;
   otherwise explain the available alternative. Inspect https://x.com/koopuluri
   through browser/computer interaction. Never claim inaccessible posts were read.
2. Compare with content/expressions.json. Include ONLY expandable long text posts
   (verify Show more/expansion) or original videos with verified text above them.
   Exclude short text, ordinary images, videos without text, bare reposts,
   incidental acknowledgments and ordinary replies. A quote-post wrapper does
   not qualify just because the quoted post has a video; inspect and link the
   qualifying original once. GIFs do not count as original videos. Native X Articles
   are currently deferred pending an explicit scope decision; do not silently add
   them or mistake an Article preview for expandable own text. A connected thread may be one entry linked to its
   opening only if it qualifies as an expandable long expression.
3. Inspect original post dates and text. Prefer the author's title/opening words.
   Generated titles must be short, faithful, descriptive and tentative where
   the post is tentative. Do not infer video content from an inaccessible video.
4. Add/update by stable post ID without duplicates, including thread IDs. Keep
   publication dates, URLs, selection type and source evidence. Record exclusions,
   last successful check and coverage gaps. A partial check is not a full archive;
   never silently truncate, remove older entries, or advance coverage past a gap.
5. Refresh content/maipai.json only when warranted. Maipai introduces itself as
   karthik's ai, helping keep track of him. Briefly describe actual recent activity
   provisionally, with warm playful informality and optional light exasperation.
   Preserve uncertainty and contradiction. No invented overarching thesis,
   permanent traits, marketing, chat invitation or em dashes. Keep it under 90 words.
   Do not restate titles or inventory the links; avoid filler about archive size.
6. ALL new/edited visitor-facing language must be lowercase, extremely informal,
   relaxed, playful and deliberately unpolished. Do not turn every line into a joke.
   This includes titles, metadata, dates and accessibility labels. Source excerpts
   and internal evidence may preserve original casing. Do not use CSS lowercase
   as a substitute for correctly authored copy.
7. Run npm run check:content and npm run build. Verify the actual homepage on
   desktop and mobile: lowercase copy, no overflow, clear focus/links, newest-first
   ordering, no visible dates, correct original URLs and evidence for every selection. Build must list
   / as static. Browser verification does not replace source selection review.
8. Publish through Ghost's `publish-ghost` skill. Propose the short lowercase
   commit message and wait for the user's confirmation before committing,
   uploading, pushing or deploying. The publisher targets the existing
   `karthikuppu.com` Vercel project in `homan-projects` only when site inputs change.
   Automatic Git deployments are disabled in `vercel.json`; do not push the
   preserved import repository as a second publication path. Verify
   https://koopuluri.com and the resulting www page after a deployment.
   Preserve unrelated project, environment and domain settings. Never commit
   credentials or .vercel state. Report deployed URL and any coverage/verification gaps.

The existing essay/video routes and their source are historical work, retained
without homepage navigation. Do not delete or rewrite them as part of an archive
update. Keep unrelated desktop and Expression iOS projects untouched.

Essay URLs live at `/<slug>` (for example `/personal-stack`), and source filenames
match their slugs. Preserve author-supplied essay title capitalization, including
“The Personal Stack”. The original manifesto URLs redirect to `/personal-stack`.

Essay titles and optional dates come from YAML frontmatter in the source Markdown,
not the selection JSON. Preserve their capitalization; quote dates and display
them verbatim above the essay title (14px Inter, muted color). Keep homepage links
title-only. Ordered list markers use `1)`, `2)`, etc. See README.md for the schema.

Internal pages (essays and video pages) use the shared `InternalPage` layout.
Its only navigation item is a fixed circular profile photo linking home (48px
on desktop, 36px at widths up to 768px),
24px from the desktop top/left edges. On mobile, align its left edge with the
content column, including centered tablet columns. Show the white fade only
when the photo horizontally overlaps the actual content column; measure that
overlap on resize and route changes, rather than using a desktop/mobile cutoff.
When the photo sits outside the content, the navbar background is transparent.
Reserve space above the content; keep this navigation off `/`, `/ai` and `/stock`.

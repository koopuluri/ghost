<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# koopuluri.com

This site now lives in Ghost's `personal-site/`. Ghost is the canonical source;
the private `koopuluri/karthikuppu.com` repository is the preserved import origin.
Follow the root `AGENTS.md` authorship convention and `publish-ghost` skill for
publication. Site-specific copy stays here; future independent writing belongs
in Ghost's `expression/`. Preserve existing posts and source evidence in place.

Read instructions.md, README.md, content/expressions.json and content/maipai.json before editing.
Treat instructions.md as the persistent product and presentation preferences.
The current product is one page: Maipai's short welcome, then title links to
selected X expressions, newest first, without visible dates or timestamps. No topic
headers, categories, cards, summaries, chatbot, personalization, live X
integration, schedules, runtime AI or database.

## when the user says “update my site”

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

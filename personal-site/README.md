# koopuluri.com

karthik's expressions, with a little help from maipai.

The homepage is a static, build-time rendered page in the existing Next.js
repository. It has one short paragraph and a newest-first list of X title links.
No runtime AI, database, live feed or scheduled update is used for this homepage.
Existing essay/video routes are retained for old links, without homepage navigation.

## content

- `content/expressions.json`: post IDs, original URLs, dates, display titles,
  strict selection types, source evidence, exclusions and coverage notes.
- `content/maipai.json`: independently editable welcome and the IDs grounding it.
- `app/page.tsx` and `app/page.module.css`: layout and homepage metadata.

Include only long text that requires expansion, or videos with verified text
above them. Exclude short posts, ordinary images, textless videos, bare reposts,
incidental acknowledgments and ordinary replies. Use the author's own words for
titles where possible. Everything shown on the homepage is lowercase, extremely
informal and playful. Read instructions.md for persistent writing/design preferences
and AGENTS.md for the full “update my site” workflow. Dates stay in the content file
for ordering, but are not displayed beside links.

## source coverage

The initial signed-out check on October 12, 2026 produced two expressions. After
Karthik signed into Chrome, the same day's signed-in review reached the bottom of
the loaded Posts timeline: 241 distinct entries, back to April 11, 2014.
The current list has 60 qualifying expressions (54 expandable text posts and 6
original captioned videos), published July 19 through October 12, 2026.

This is not an exhaustive account export. X may omit timeline entries; replies
and repost archives were not traversed. Five native X Articles are deferred under
the current strict selection rule, pending a user decision on including Articles.
Short text, ordinary images, a GIF, short quote wrappers, a textless video and a
bare Article quote were excluded. Video captions/player were inspected; footage
and speech were not interpreted. Exact evidence and gaps are in the content file.

## develop and verify

```sh
npm ci
npm run check:content
npm run build
npm run start -- --port 3100
```

The content check guards duplicate IDs, selection evidence, URLs, dates, lowercase
copy and introduction provenance. Editorial judgment still requires source review.
Verify desktop and mobile in a browser and confirm the `/` route is static in the
build output. The existing npm engine warning concerns a lint dependency; use a
current supported Node version if running lint.

## deployment

- Canonical source: Ghost's `personal-site/` directory.
- Imported from https://github.com/koopuluri/karthikuppu.com at
  `1aa1b2017fddb6b55be480725d173c6a61c8a608` on November 3, 2026.
  The original private repository and local checkout are preserved.
- Existing Vercel scope: `homan-projects`
- Existing project: `karthikuppu.com`
- Project ID: `prj_oQobkvUOSKGlPVgYlCIdvNLFYgtf`
- https://koopuluri.com redirects with 308 to https://www.koopuluri.com

Use Ghost's [publish workflow](../ghost-tools/publishing/README.md): prepare the
changes, approve the proposed commit message, then publish source, private media
and the changed site together. Automatic Git deployments are disabled in
`vercel.json`. The publisher uses a prebuilt deployment and a site fingerprint,
so unrelated Ghost changes do not deploy the site. Node 22 is pinned to match
Ghost's publishing runtime. Keep `.vercel`, credentials and environment files
ignored; preserve existing Vercel project, environment and domain settings.

The prior homepage remains in Git at `8ea6491`; prior deployments are retained in
Vercel. See `docs/DEPLOYMENT.md` for release verification and rollback reference.

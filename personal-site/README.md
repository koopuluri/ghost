# koopuluri.com

Karthik's personal site lives in Ghost's `personal-site/`. Ghost is the canonical
source; the private `koopuluri/karthikuppu.com` repository is the preserved import origin.

## pages

- `/`: personhood (heart). Small profile photo above karthik uppuluri, short bio,
  X link, divider, and
  selected essays as plain title links.
- `/ai`: personal artificial intelligence (π), with a placeholder paragraph.
- `/stock`: personal stock ($), with a placeholder paragraph.
- `/personal-stack`: The Personal Stack, matching the published X thread, with a link home.

The three top-level pages share icon-only navigation. The icons retain the paths
and medium stroke from `../assets/manifesto-stack-icons.svg`, adapted to inherit
the site's foreground color in `components/StackIcon.tsx`.

Typography and spacing follow [benji.org](https://benji.org/)'s measured CSS:
14px variable Inter throughout, 20px line height, -0.00563rem tracking, 550px
desktop content width and 24px mobile gutters below the 768px breakpoint.
Headings vary by weight, never size. Shared values are in `app/globals.css`.
Links use the blue sampled from the user's ChatGPT screenshot and underline on
hover/focus. See `instructions.md` for the complete persistent design decisions.

## content from Ghost

`content/profile.json` holds site-specific name, bio and X URL.
`content/selected-essays.json` is the explicit essay selection and display order:

```json
{
  "slug": "personal-stack",
  "source": "personal-stack.md"
}
```

Each essay is available at `/<slug>`, with a matching source filename. Previous
`/essays/` URLs redirect to root paths; the old manifesto slug redirects to
`/personal-stack`. The Personal Stack copy matches the [pinned X thread](https://x.com/koopuluri/status/2117755804237656161),
with the existing Markdown headings, dividers and emphasis retained.

Each source is relative to Ghost's `expression/` directory. The server reads that
original Markdown at build time and renders it as Markdown, without executing
MDX or rewriting source text. No essay copy or directory-wide feed is generated.
Unselected essay slugs return 404. Only selected sources have public essay routes.

This is the agreed setup for now: the same explicit selection controls both URL
availability and homepage inclusion. Do not automatically expose all of
`expression/`, introduce draft flags, or split homepage selection from route
availability unless Karthik asks to change this architecture. Essay titles and optional dates live
in YAML frontmatter in the source Markdown:

```yaml
---
title: "The Personal Stack"
date: "November 2026"
---
```

The title supplies the homepage link, essay heading and browser metadata. The date
is displayed exactly as written beneath the essay heading, at the same type size
in a muted color; dates remain absent from the homepage. Quote dates to keep YAML
from interpreting them as timestamps. The selection JSON only controls slug,
source and order. Numbered lists render with `1)` markers.

To add an essay, add its entry to that list and its exact Ghost-relative path
(e.g. `expression/personal-stack.md`) to `../ghost.publish.json` site.inputs.
The content check verifies that each selected source exists and participates in
the publishing fingerprint. Refresh the essay page after editing Markdown during
development; production content updates at build time.

Private media is not served. Any future essay images must be deliberately copied
to `public/` and linked with public site paths.

### videos in Markdown

Place a video anywhere in the essay body with a standard Markdown link whose
title is `"video"`:

```md
[The Personal Stack](/media/personal-stack.mp4 "video")
```

The essay renderer turns these explicit MP4/WebM links into responsive native
players with controls, inline playback and metadata-only preloading. Ordinary
links remain links. The link text names the player for accessibility. No video
frontmatter or raw HTML is required; move the Markdown line to move the player.

Keep originals in Ghost's private `assets/` archive and deliberately include
optimized public copies in `personal-site/public/media/`. These copies ship with
the site through Vercel; they do not expose the private archive. See
`public/media/README.md` for the current video's source and encoding.

## when asked to publish an essay

1. Use the requested essay's canonical Markdown in `expression/<slug>.md`.
   Set its `title` and optional quoted `date` in YAML frontmatter.
   Preserve its wording, formatting and author-supplied title unless edits are
   requested. Repair inbound references if renaming the source.
2. Add or update its `slug` and `source` in
   `content/selected-essays.json`. This gives it `/<slug>` and a homepage title
   link in the list's order. Preserve existing order unless directed otherwise;
   append a new selection by default. Avoid existing route names. If a published
   slug changes, redirect the old URL in `next.config.ts`.
3. Include `expression/<slug>.md` in `../ghost.publish.json` under `site.inputs`
   so future source edits trigger a site deployment.
4. Run `npm run check:content` and `npm run build`; verify the homepage link,
   essay copy and desktop/mobile rendering in the local preview.
5. For actual publication, follow
   [publish-ghost](../.agents/skills/publish-ghost/SKILL.md), including preparation
   and approval of the exact commit message before committing, uploading,
   pushing or deploying. A local preview alone is not a publication.

## develop and verify

Run from this directory within the Ghost checkout:

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Local preview: http://127.0.0.1:3100

```sh
npm run check:content
npm run build
```

Verify the three pages, active navigation, essay text, keyboard focus and mobile
layout. The build should render all new pages statically. Node 22 is pinned for
Ghost's publishing runtime.

## preserved work

`content/expressions.json` and `content/maipai.json` retain the former homepage's
60 selected X expressions and source evidence, but are not displayed on the new
homepage. Their original coverage gaps remain recorded in the JSON. Historical
essay/video routes and `posts/` remain intact. See AGENTS.md for the separate
workflow when explicitly asked to refresh that archive.

## deployment

- Canonical source: Ghost's `personal-site/` directory.
- Imported from https://github.com/koopuluri/karthikuppu.com at
  `1aa1b2017fddb6b55be480725d173c6a61c8a608` on November 3, 2026.
- Existing Vercel scope: `homan-projects`; project: `karthikuppu.com`.
- Project ID: `prj_oQobkvUOSKGlPVgYlCIdvNLFYgtf`.
- https://koopuluri.com redirects to https://www.koopuluri.com.

Use Ghost's [publish workflow](../ghost-tools/publishing/README.md). Prepare the
changes, approve the proposed commit message, then publish source, private media
and the changed site together. Automatic Git deployments are disabled in
`vercel.json`. The prebuilt deployment runs from the full Ghost checkout, so
selected essays are available during the build. The fingerprint includes site
code and explicitly selected Ghost sources.

Keep `.vercel`, credentials and environment files ignored; preserve the existing
Vercel project, environment and domain settings. See
[deployment notes](docs/DEPLOYMENT.md) for verification and rollback reference.

Internal pages (essays and video pages) use the shared `InternalPage` layout.
Its only navigation item is a fixed circular profile photo linking home (48px
on desktop, 36px at widths up to 768px),
24px from the desktop top/left edges. On mobile, align its left edge with the
content column, including centered tablet columns. Show the white fade only
when the photo horizontally overlaps the actual content column; measure that
overlap on resize and route changes, rather than using a desktop/mobile cutoff.
When the photo sits outside the content, the navbar background is transparent.
Reserve space above the content; keep this navigation off `/`, `/ai` and `/stock`.

# karthik's site preferences

These are persistent user decisions. Keep this file and AGENTS.md current when
Karthik changes a preference; do not ask him to repeat recorded decisions.

## structure

Three top-level pages, with a shared row of icons at the top:
- heart: personhood, the default homepage at `/`; title: `karthik uppuluri`.
- π: `/ai`; title: `personal artificial intelligence`.
- $: `/stock`; title: `personal stock`.

No visible category labels in the navigation. Reuse the coordinated, medium-weight
SVG geometry from Ghost's `assets/manifesto-stack-icons.svg`, including symmetrical π.
Indicate the current page and give links accessible names and keyboard focus.
The deeper essay view has a simple way back home; further nested navigation is
still to be designed.

## homepage

Small 48px circular profile photo above the full name, short bio, link to X,
divider, then a plain list of selected
essay titles as links. No dates, captions, summaries, cards or section labels.
Use `content/profile.json` for site-specific profile copy. The bio is
“i believe in human potential.”

Karthik explicitly chooses what appears. Selection and ordering live in
`content/selected-essays.json`. Initially only The Personal Stack is selected.
Essay text comes directly from Ghost's `expression/` directory; never duplicate
or rewrite it in the site. The AI and stock pages have placeholder paragraphs
for now. Preserve the former X archive and historical routes as source evidence.

## writing and appearance

Site-authored labels and metadata are lowercase, informal and relaxed. Preserve
essay source text exactly, including its capitalization, formatting and π notes.
No CSS lowercase transformation. New editorial annotations to the user's material
must be Markdown blockquotes starting with `> π:`.

Match [benji.org](https://benji.org/)'s restrained typography, colors and layout.
Measured from its CSS and computed desktop/mobile styles on November 3, 2026:

- Inter variable, 14px type, 20px line height, -0.00563rem (-0.09008px) tracking.
- Body weight 460; page titles 500; article section headings 560; strong text 600.
- Every text element stays the same 14px size, including headings, links, and
  smaller annotations. Use weight and color for hierarchy. Preserve source italics.
- Text #111, background #fdfdfc, secondary text black at 40% opacity.
- Full-width dividers: 1px solid #f2f2f2, matching Benji's writing list dividers.
- Outer column 36.375rem (582px), including 16px side padding: 550px content.
- At widths up to 768px, use 24px side padding. Outer top padding is 80px on
  desktop and 32px on mobile; bottom padding is 40px. The navigation occupies
  the start of this column, followed by a 32px gap before the page content.
- Paragraph gaps 16px, portrait-to-name gap 24px, gap before the homepage
  divider 48px. Essay links use 0.735rem vertical row padding.

Keep the Inter variable supplied by next/font/google: the Latin WOFF2 was verified
byte-for-byte identical to Benji's font. Do not override it with system sans-serif.
Shared measurements live in app/globals.css and apply on every viewport.

Links deliberately follow the supplied ChatGPT screenshot instead: #35579f blue
at rest and after visiting, no icon or underline at rest, #24447f and a 1px
underline on hover or keyboard focus. Keep the focus outline obvious. The core
icon navigation uses the neutral palette, with a thin active/hover indicator.

No chatbot, personalization, live X integration, runtime AI, database or schedule.

## publishing

Use Ghost's publish workflow. Prepare and show the exact short, lowercase commit
message; wait for approval before committing, uploading, pushing or deploying.
When selecting an essay, also add its exact source path to `ghost.publish.json`
site.inputs so changes to that essay trigger a future site deployment.

Essay URLs live at `/<slug>` (for example `/personal-stack`), and source filenames
match their slugs. Preserve author-supplied essay title capitalization, including
“The Personal Stack”. The original manifesto URLs redirect to `/personal-stack`.

Essay titles and optional dates come from YAML frontmatter in the source Markdown,
not the selection JSON. Preserve their capitalization; quote dates and display
them verbatim below the essay title (same size, muted color). Keep homepage links
title-only. Ordered list markers use `1)`, `2)`, etc. See README.md for the schema.

Place videos in the Markdown body using `[label](/media/file.mp4 "video")`, not
frontmatter. This explicit link title renders an inline native player at that
position. The Personal Stack video follows the three-item list and precedes the
first divider. Preserve originals in assets/ and serve optimized public copies
from personal-site/public/media/.

Essay spacing uses one consistent rhythm: title and date are consecutive 20px
lines with no extra gap; the header-to-body gap is 32px, matching the space below
a divider, and paragraph gaps are 16px. The essay title uses the exact section
heading style (weight 560, strong ink); the date is black at 32% opacity. Every
divider has 32px to the adjacent text line boxes, including the final “Onward.”
Media edges get optical compensation of half the line-height minus cap-height
to match text's internal line spacing (about 5px with this font).
Do not stack paragraph padding on top of divider spacing.

Internal pages (essays and video pages) use the shared `InternalPage` layout.
Its only navigation item is a fixed circular profile photo linking home (48px
on desktop, 36px at widths up to 768px),
24px from the desktop top/left edges. On mobile, align its left edge with the
content column, including centered tablet columns. Show the white fade only
when the photo horizontally overlaps the actual content column; measure that
overlap on resize and route changes, rather than using a desktop/mobile cutoff.
When the photo sits outside the content, the navbar background is transparent.
The overlapping treatment should feel like fading mist, never a rectangular bar:
use a continuous 144px feathered mask with gentle backdrop blur, no solid plateau
or hard bottom edge. Keep the photo sharp above that layer. Show the mist only
after scrolling so the initial essay title stays clear.
Reserve space above the content; keep this navigation off `/`, `/ai` and `/stock`.

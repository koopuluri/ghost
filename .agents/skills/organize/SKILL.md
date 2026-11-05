---
name: organize
description: Organize Ghost's repository to match its documented structure, moving loose media into assets and personal writing into expression while preserving content and repairing references. Use when asked to organize or clean up Ghost, and before preparing a Ghost publication.
---

# Organize Ghost

Resolve Ghost's root from this skill's location (`../../..`). Read the root `README.md` and `AGENTS.md`, then the instructions and READMEs relevant to the files being moved. Organization changes placement and references, not authorship or wording.

## Find the right homes

Inspect the working tree, including untracked root-level files, and identify misplaced artifacts by their contents and purpose rather than extension alone. Use the existing structure:

- `assets/`: loose images, audio, video, and other shared media.
- `expression/`: personal writing, thoughts, decisions, and creative expressions, including notes left at the repository root. Use the existing singular name, not `expressions/`.
- `chats/`: conversation transcripts; preserve their source records and metadata.
- `taste/`: deliberate captures and reflections.
- `events/`: timestamped observations, with browsing events in `events/browsing/`.
- `ai/`: generated work, under an appropriate existing function directory when available.
- `.agents/skills/`: reusable agent workflows.
- `ghost-tools/`: applications and supporting implementation.
- `personal-site/`: site implementation, design, and site-specific copy.

Prefer existing destinations. Create a directory only when actual material warrants it, with a concise README explaining its role. Keep root orientation files, repository configuration, and files required at their current paths in place. Leave application state, credentials, dependencies, and build outputs in their established locations; cleanup is not deletion or a code refactor.

Keep application-owned resources with their application, including explicitly public assets in `personal-site/public/`. Do not sweep every media file into the private archive or migrate existing site essays as incidental cleanup. If a destination is ambiguous, complete the clear moves and report the remaining items for clarification.

## Move without losing context

Preserve filenames where practical, file contents, user edits, annotations, and original media bytes. Never overwrite a destination or discard a file because its name matches another. Compare colliding files and choose a distinct destination when needed; do not introduce duplicate copies of an asset already stored in `assets/`.

Before moving files, locate their references and determine how those paths resolve. Repair incoming references and relative links inside moved documents, including Markdown links and images, Obsidian links and embeds, indexes, and active code or configuration paths. Preserve anchors, labels, and embed options. Change only the path portions needed for the move; do not rewrite historical transcript or quotation text. If a historical path must remain literal, preserve it and put any navigation aid outside the source record in a `> π:` callout.

Keep original titles and wording intact. Do not process notebook images, rewrite notes, summarize transcripts, or add editorial prose as a side effect. Any necessary new editorial annotation uses `> π:`.

Check publication dependencies when moving files consumed by the site: update affected imports or content references and `ghost.publish.json`'s `site.inputs` before a release plan is prepared. Preserve private-media exclusions. Let the publisher maintain `assets/manifest.json`; do not delete historical archive entries or alter remote objects during organization.

## Verify and finish

Review the diff and move list for accidental content changes or lost files. Verify affected links and embeds resolve from their new locations, and run relevant content or build checks if application inputs changed. A repeated run should leave already organized material in place.

Report the moves and any unresolved placements or references concisely. Organizing alone does not commit, upload, push, or deploy. When called by the publish skill, finish organization before returning to release preparation so the proposed message and approved plan cover the final layout.

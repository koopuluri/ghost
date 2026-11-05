# Ghost agent instructions

Follow the architecture and authorship conventions in `README.md`. Reusable workflows belong in `.agents/skills/`.

## π — personal artificial intelligence

The user's personal agent is **π** (pi). Across this project, all skills and future chats should label assistant-authored editorial notes, annotations, suggestions, critiques, and proposed additions to the user's material with π.

Use a Markdown blockquote starting with `> π:` so the agent's words are visually distinct from the user's:

> π: Missing beat: how does this connect to the next paragraph?

Keep multiline notes inside the blockquote. Do not blend assistant commentary into user-authored prose or attribute the user's own notes to π. Preserve historical transcripts and quotations as written; this convention applies to new editorial annotations, not rewriting source records. Ordinary conversational replies and operational status updates do not need this prefix.

## Notebook processing

When the user says "process notes" (or similar) about a document containing notebook images, read and apply `.agents/skills/process-notes/SKILL.md`. Produce a transcript below each image and a complete combined narrative above a divider. Reordering is permitted; omissions, rewrites, and unmarked additions are not. Put proposed wording and missing-beat suggestions in π callouts.

## Publishing Ghost

When asked to publish Ghost, apply `.agents/skills/publish-ghost/SKILL.md`. Prepare the changes and propose a short, informal, lowercase commit message (one or two sentences). Wait for the user to confirm that exact message before committing, uploading assets, pushing Git, or deploying the site. Changed source or publication scope requires a fresh prepared plan.

Ghost owns `personal-site/` and `ghost-tools/`. Site-specific copy belongs in the site; independent essays belong in `expression/`. The media archive is private. The user accepted R2 upload limits and billing alerts with the understanding that $20 is not a guaranteed hard cap.

## Video workflows and defaults

For every video, apply the organization, selective recording, and defaults in [.agents/skills/video-process/SKILL.md](.agents/skills/video-process/SKILL.md). That skill is the authoritative home for framing, grain, typography, and audio ceilings. Explicit user overrides take precedence; existing immutable artifacts retain their saved settings.

“Save chat” means apply `.agents/skills/save-chat/SKILL.md` and save a full transcript in `chats/`. Video process docs in `expression/videos/` retain only video-relevant discussion; they are not the destination for full chat saves or workflow-maintenance discussions.

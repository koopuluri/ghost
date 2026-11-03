
## ghost architecture

1. **artifacts**: things we create or collect — documents, chats, captures, media, and reports.
2. **events**: things that happen, with timestamps — opening a url, liking a post, or marking an artifact version.
3. **functions**: work ai does using this shared collection, defined as skills in `.agents/skills/`.

```text
ghost/
  .agents/
    skills/           descriptions and instructions for recurring work
      scout/          scout's SKILL.md and supporting resources
  expression/         my writing, thoughts, and decisions
  chats/              conversations with ai providers
  taste/              deliberate captures and my reflections
  events/
    browsing/         selected browsing signals
  ai/                 ai-generated work
    scout/            scout's reports, discoveries, and updates
  assets/             images, audio, video, and other media
  personal-site/      site implementation, design, and site-specific copy
  ghost-tools/        applications and publishing implementation
```

- i express myself freely; ai helps organize. organization does not authorize rewriting, and authorship stays clear.
- markdown files and linked assets are the source of truth. my notes and annotations must survive updates.
- create directories only when warranted, each with a concise readme. use existing tools and keep things simple.
- keep function definitions in `.agents/skills/`; there is no separate `ai/functions/`. agents can have their own output directories under `ai/`, such as `ai/scout/`.
- i choose meaningful artifact versions. events reference the relevant version; recording and public release are separate.
- tools and the personal site live inside ghost. their code, design, instructions, choices, and useful outputs are part of the collection.
- site-specific copy belongs in personal-site; essays and other independent writing belong in expression. existing site essays remain in place until their migration is explicitly planned.
- publish ghost proposes a short, lowercase commit message first. confirming that message authorizes the prepared git, private asset, and conditional site publication. source control does not include credentials or application sessions.
- media remains locally available and is backed up to private object storage through a tracked manifest. public site assets are explicitly included in personal-site/public; the site has no access to the private archive.

See [publishing](ghost-tools/publishing/README.md) for setup and current limitations.

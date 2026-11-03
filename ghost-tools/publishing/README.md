# publishing ghost

One workflow publishes the complete source collection to GitHub, backs up media to private R2, and deploys the personal site only when its declared inputs change. The user first approves the exact proposed commit message: one or two short, informal, lowercase sentences describing how Ghost evolved.

## everyday use

Ask π to **publish ghost**. The [skill](../../.agents/skills/publish-ghost/SKILL.md) inspects changes, prepares a snapshot and message, waits for message approval, and executes that exact plan. A changed source file, asset, destination, or publishing configuration invalidates the plan. No commit, GitHub push, asset upload, or site deployment precedes approval.

The implementation lives here; configuration is in `../../ghost.publish.json`. `assets/manifest.json` records local filenames, sizes, checksums, and private immutable object keys. It contains no access credentials or public media URLs. The archive includes assets and loose root-level media without moving or rewriting the originals. A missing local file retains its manifest entry for restoration; removing archived objects is a separate explicit operation.

```sh
python3 ghost-tools/publishing/publish.py prepare --message 'bring the site and tools into ghost'
# After the user approves that message and its exact prepared scope:
ghost-tools/publishing/.venv/bin/python ghost-tools/publishing/publish.py publish --approved-plan PLAN_ID
# Restore missing private media without overwriting local edits:
ghost-tools/publishing/.venv/bin/python ghost-tools/publishing/publish.py restore
```

Preparation uses an isolated Git index, leaves the user's staging untouched, and never commits. The plan and resumable receipts live in ignored `.ghost/`. Publish validates the plan, builds changed site inputs, verifies bucket privacy, uploads missing immutable objects, commits and pushes, then deploys. Concurrent publishers on this machine are excluded. Pushes never force-update remote history. An ambiguous deployment stops for inspection instead of blindly retrying.

## setup

- GitHub: the approved target is the public `koopuluri/ghost` repository on `main`. The publisher creates it if absent after approval. Git author details use the existing local configuration.
- Site foundation: `personal-site/` imports `koopuluri/karthikuppu.com` at `1aa1b2017fddb6b55be480725d173c6a61c8a608`, retaining the current homepage, content evidence, design preferences and historical routes. The original repository is preserved.
- Vercel: reuse project `karthikuppu.com`, scope `homan-projects` (the CLI-resolved owner of the existing project), serving `https://www.koopuluri.com`. Both the Ghost root and site `vercel.json` disable automatic Git deployments. The publisher uses its local Vercel CLI and a prebuilt site. No private archive files are needed by or uploaded with that build.
- R2: a dedicated **private Standard-storage** bucket named `ghost-private`. Disable `r2.dev`, attach no custom domains or Worker bindings, and do not issue public/presigned URLs. Set billing alerts at $10 and $20 in Cloudflare. The publisher checks the public-domain settings before every upload/restore; account administrators must also preserve the no-Worker-binding rule.
- Credentials: use the environment variables named in `.env.example`, or the ignored `.ghost/r2.env` file with owner-only permissions. Use a bucket-scoped R2 Object Read & Write credential and a Cloudflare API token with Account R2 Storage Read for privacy checks. Never paste keys into chat, source, or a command argument.
- Install dependencies locally: `npm ci --prefix ghost-tools/publishing`; `python3 -m venv ghost-tools/publishing/.venv`; then `.venv/bin/pip install -r requirements.txt` from this directory.

## budget and privacy

The user accepted private R2 with local limits and alerts on November 3, 2026, acknowledging that **$20 is not a guaranteed hard cap**. Cloudflare's documented spend policies currently cover Workers and Durable Objects, not R2. An alert does not stop usage or storage charges. The workflow refuses a configuration claiming an unverified provider hard cap.

Initial application limits: 100 GB total stored archive, 10 GB of new uploads per run, 10,000 stored objects, and 5,000 reserved S3 request attempts per run. Large single uploads above 5 GB stop before upload. Existing object versions count toward the archive limit. These limits only govern this publisher, not other clients or account-wide costs. Storage continues accruing while bytes remain stored. Normal publishing never deletes historical media to reduce a bill.

Media is private backup, not public website hosting. Site-specific images remain explicitly tracked under `personal-site/public`. Future public video should use a deliberate hosting choice such as an embed; do not expose the archive to make an image render.

## site inputs and recovery

The fingerprint includes tracked file paths, modes, and Git object IDs matching `site.inputs`. It currently covers `personal-site/**`. When the site reads an essay or shared dependency elsewhere in Ghost, add that input explicitly. Unrelated notes and browser events do not deploy the site. Losing `.ghost/published-site.json` causes one conservative deployment, not a false skip. Vercel environment changes require a deliberate redeploy; file fingerprints cannot detect remote settings.

If an upload or push fails, keep the approved plan and fix the external cause. A retry verifies uploaded objects and reuses an already-created commit. If source files or Git history change, prepare and approve a new plan. If a deployment's outcome is ambiguous, inspect Vercel and reconcile the receipt before retrying. Logs never need to contain access keys.

## verification

`python3 -m unittest discover -s ghost-tools/publishing -p 'test_*.py'` covers approval invalidation, independent Git staging, deployment dependency selection, private media exclusion, missing-file restoration records, privacy checks, budget rejection, and deduplicated uploads. The tests make no provider mutations.

References: [R2 pricing](https://developers.cloudflare.com/r2/pricing/), [Cloudflare spend policies](https://developers.cloudflare.com/api/resources/billing/), [Vercel Git configuration](https://vercel.com/docs/project-configuration/git-configuration).

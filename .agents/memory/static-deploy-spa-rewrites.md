---
name: Static deploy SPA rewrites
description: Published static site 404s on client-side routes without a rewrite rule.
---

Static deployments serve only real files; deep links / hard refreshes on SPA routes (e.g. /schedule) return 404 unless `.replit` has:

```
[[deployment.rewrites]]
from = "/*"
to = "/index.html"
```

**Why:** Users reported "changes not showing" / stale pages on the published site; the real cause was 404s on sub-routes mixing with cached pages. Added the rewrite Aug 2026.

**How to apply:** When the user says the published site looks stale or broken on a sub-page, curl the production sub-route first — a 404 means rewrites are missing. Config changes take effect only after a republish. Also note: `.replit` cannot be edited directly — write full TOML to a temp file and call `verifyAndReplaceDotReplit`.

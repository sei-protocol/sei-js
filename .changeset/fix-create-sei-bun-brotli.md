---
'@sei-js/create-sei': patch
---

Require Bun 1.4.4 for generated applications, the first Bun release outside the Brotli decoder advisory `GHSA-9v8h-qqgm-4m35` (CVE-2026-111497).

Bun vendors Google's Brotli library for `node:zlib` and for decompressing `fetch` responses. The `1.3.14` the template pinned ships Brotli 1.1.0, and Bun 1.4.3 still ships 1.2.0, both inside the advisory's 1.0.3 through 1.2.0 range. Bun 1.4.4 ships Brotli 1.2.1, and there is no fixed 1.3.x release.

The template's `packageManager` moves from `bun@1.3.14` to `bun@1.4.4`, and the generated README and this package's README name 1.4.4 as the minimum. The release smoke now runs on Bun 1.4.4, so that is the version the template's overrides are validated with.

No published dependency or peer range changes.

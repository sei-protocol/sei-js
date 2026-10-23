---
'@sei-js/mcp-server': patch
---

Raise the supported Node.js range to the releases that patch the Brotli decoder advisory `GHSA-9v8h-qqgm-4m35` (CVE-2026-111497).

Node.js bundles Google's Brotli library, and the decoder in Brotli 1.0.3 through 1.2.0 can be driven into an out-of-bounds write by a crafted compressed stream. Node fixed it in the [October 21, 2026 security releases](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases): 22.23.4, 24.22.1, and 26.12.1. Node 20 is end-of-life and gets no fix.

The server reaches that decoder through `fetch`, which decompresses Brotli-encoded responses automatically: viem's HTTP transport for the configured RPC endpoints, and the docs client for `https://docs.sei.io/mcp`. Its own HTTP transports do not, because Express 4's body parser only inflates gzip and deflate request bodies and rejects `Content-Encoding: br` with a 415.

`engines.node` moves from `>=20.0.0` to `^22.23.4 || ^24.22.1 || >=26.12.1`, and the README's requirement matches. npm reports an unsupported engine on older releases rather than refusing to install, unless `engine-strict` is set.

No dependency or peer range changes.

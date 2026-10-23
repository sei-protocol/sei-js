---
'@sei-js/mcp-server': patch
---

Raise the `@modelcontextprotocol/sdk` floor from `^1.23.0` to `^1.32.0` and the `zod` floor from `^4.0.5` to `^4.6.6`, so an in-place upgrade cannot keep a release inside their advisories.

A fresh install already resolved fixed releases of both, but the old floors let an existing lockfile keep vulnerable ones. Three of the advisories reach this server:

- `GHSA-46jr-4wx8-v453` — high, `@modelcontextprotocol/sdk` `>=1.3.0 <1.32.0`. The SDK put no limit on how many array elements and object keys it validated in one request, so one unauthenticated HTTP request could exhaust the server's memory. It affects the `streamable-http` and `http-sse` transports; stdio is not affected.
- `GHSA-mrhx-c7xc-m3w5` — high, `zod` `<4.6.6`. An array schema without a length constraint records an issue for every failing element, so one large array can exhaust memory. Tool arguments are validated with Zod.
- `GHSA-6prh-2h8m-c8cw` — moderate, `@modelcontextprotocol/sdk` `<1.32.0`. The SDK's HTTP client transports followed redirects to any origin and re-sent the `mcp-session-id` header, and on a `307` or `308` the request body. The docs client reaches `https://docs.sei.io/mcp` through `StreamableHTTPClientTransport`.

The other three SDK advisories fixed in 1.31.0 and 1.32.0 do not reach it: the server passes no `taskStore` (`GHSA-22jm-h49p-29qw`), uses no SDK OAuth client (`GHSA-6qxp-vccf-f47h`), and does not use `requireBearerAuth()` (`GHSA-rvq5-wwqv-78pq`).

No other dependency changes.

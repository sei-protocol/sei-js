---
'@sei-js/mcp-server': patch
---

Reject compressed request bodies on the `streamable-http` and `http-sse` transports, the documented workaround for the `body-parser` advisory `GHSA-27r3-jxmh-p828`.

`GHSA-27r3-jxmh-p828` (high, CVSS 7.5, published October 23) covers `body-parser` below `1.20.9`, and `2.x` below `2.4.0`. With default options, `body-parser` pipes a request that carries a `Content-Encoding` into a decompression stream and leaves that stream without an error listener, so a compressed frame followed by trailing bytes can raise an uncaught exception that terminates the process. Parsing runs before routing, so the request needs no valid session or route. Both HTTP transports parse JSON with Express 4's `express.json()`.

A fresh install resolves the fixed `body-parser@1.20.9`, but Express 4 accepts `~1.20.5`, so no dependency floor in this package can move an existing lockfile off a vulnerable copy. Both transports now pass `inflate: false`, so a request body with any `Content-Encoding` other than `identity` gets a 415 before a decompression stream exists, whichever `body-parser` is installed. The SDK's HTTP client transports send uncompressed JSON, and stdio is not affected.

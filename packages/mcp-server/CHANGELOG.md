# Changelog

## 1.0.2

### Patch Changes

- ce15c1d: Raise the supported Node.js range to the releases that patch the Brotli decoder advisory `GHSA-9v8h-qqgm-4m35` (CVE-2026-111497).

  **This drops support for Node.js 20, and for 22.x, 24.x, and 26.x releases before 22.23.4, 24.22.1, and 26.12.1.** npm only warns about the engine mismatch, but Yarn 1, and npm with `engine-strict` set, refuse to install this release on them.

  Node.js bundles Google's Brotli library, and the decoder in Brotli 1.0.3 through 1.2.0 can be driven into an out-of-bounds write by a crafted compressed stream. Node fixed it in the [October 21, 2026 security releases](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases): 22.23.4, 24.22.1, and 26.12.1. Node 20 is end-of-life and gets no fix.

  The server reaches that decoder through `fetch`, which decompresses Brotli-encoded responses automatically: viem's HTTP transport for the configured RPC endpoints, and the docs client for `https://docs.sei.io/mcp`. Its own HTTP transports do not, because they reject every compressed request body with a 415.

  `engines.node` moves from `>=20.0.0` to `^22.23.4 || ^24.22.1 || >=26.12.1`, and the README's requirement matches.

  No dependency or peer range changes.

- 8da8c09: Reject compressed request bodies on the `streamable-http` and `http-sse` transports, the documented workaround for the `body-parser` advisory `GHSA-27r3-jxmh-p828`.

  `GHSA-27r3-jxmh-p828` (high, CVSS 7.5, published October 23) covers `body-parser` below `1.20.9`, and `2.x` below `2.4.0`. With default options, `body-parser` pipes a request that carries a `Content-Encoding` into a decompression stream and leaves that stream without an error listener, so a compressed frame followed by trailing bytes can raise an uncaught exception that terminates the process. Parsing runs before routing, so the request needs no valid session or route. Both HTTP transports parse JSON with Express 4's `express.json()`.

  A fresh install resolves the fixed `body-parser@1.20.9`, but Express 4 accepts `~1.20.5`, so no dependency floor in this package can move an existing lockfile off a vulnerable copy. Both transports now pass `inflate: false`, so a request body with any `Content-Encoding` other than `identity` gets a 415 before a decompression stream exists, whichever `body-parser` is installed. The SDK's HTTP client transports send uncompressed JSON, and stdio is not affected.

- 8da8c09: Raise the `@modelcontextprotocol/sdk` floor from `^1.23.0` to `^1.32.0` and the `zod` floor from `^4.0.5` to `^4.6.6`, so an in-place upgrade cannot keep a release inside their advisories.

  A fresh install already resolved fixed releases of both, but the old floors let an existing lockfile keep vulnerable ones. Three of the advisories reach this server:

  - `GHSA-46jr-4wx8-v453` — high, `@modelcontextprotocol/sdk` `>=1.3.0 <1.32.0`. The SDK put no limit on how many array elements and object keys it validated in one request, so one unauthenticated HTTP request could exhaust the server's memory. It affects the `streamable-http` and `http-sse` transports; stdio is not affected.
  - `GHSA-mrhx-c7xc-m3w5` — high, `zod` `<4.6.6`. An array schema without a length constraint records an issue for every failing element, so one large array can exhaust memory. Tool arguments are validated with Zod.
  - `GHSA-6prh-2h8m-c8cw` — moderate, `@modelcontextprotocol/sdk` `<1.32.0`. The SDK's HTTP client transports followed redirects to any origin and re-sent the `mcp-session-id` header, and on a `307` or `308` the request body. The docs client reaches `https://docs.sei.io/mcp` through `StreamableHTTPClientTransport`.

  The other three SDK advisories fixed in 1.31.0 and 1.32.0 do not reach it: the server passes no `taskStore` (`GHSA-22jm-h49p-29qw`), uses no SDK OAuth client (`GHSA-6qxp-vccf-f47h`), and does not use `requireBearerAuth()` (`GHSA-rvq5-wwqv-78pq`).

  No other dependency changes.

## 1.0.1

### Patch Changes

- 5a40dc8: Keep each MCP runtime on the wallet configuration that passed its security check.

  A later programmatic `main()` could overwrite the process-wide config object while an HTTP listener started earlier was still serving requests. New sessions on that listener then built their tool list from the updated singleton, so a wallet-disabled HTTP server could expose signing tools after a trusted stdio start in the same process. No shipped CLI or host spawn does that, but the public lifecycle returned independent runtimes without isolating their keys.

  `parseArgs()` now returns a frozen `AppConfig` snapshot, and every transport handles requests against that snapshot. Stopping one runtime evicts only its provider cache entry, while other runtimes keep their original signer. HTTP transports require that snapshot and derive signing policy from it.

## 1.0.0

### Major Changes

- 29311bc: Migrate the monorepo to Bun and publish ESM-only packages.

  **Breaking:** all packages drop CommonJS (`require`) entry points and flatten `dist/`. Consumers must use ESM `import`. `@sei-js/precompiles` now ships an `exports` map with working `./ethers`, `./viem`, and `./precompiles` subpaths. `@sei-js/sei-global-wallet` keeps the `./solana` entrypoint.

  Install, build, and test with Bun (`bun install`, `bun run build`, `bun run test`). `@sei-js/mcp-server` now requires Node.js 20 or newer. The MCP server and precompiles development toolchain use Viem 2.55.16. Generated apps target the new `@sei-js/precompiles` major. Packages continue to publish to npm via Changesets.

- 96d9e1c: Remove Sei devnet support. The MCP server no longer accepts `sei-devnet`, chain ID `713715`, or `DEVNET_RPC_URL`. Registry exports now contain only `pacific-1` and `atlantic-2`, and `CHAIN_IDS.devnet` has been removed.

### Minor Changes

- 5d52ab3: Harden MCP transport lifecycle and startup behavior. Chain-info responses no longer expose `rpcUrl`, and credential-bearing RPC errors redact URLs and configured secrets. Unsupported networks now reject instead of falling back, while supported names and decimal/hex chain IDs normalize consistently.

  NFT ownership lookup failures now propagate instead of reporting `false`. ERC-721 transfers now use `safeTransferFrom`, so contract recipients must implement `onERC721Received`.

  Wallet-disabled servers retain the complete explicit read-only tool surface while signing and broadcasting tools remain hidden. HTTP listeners validate their host and concurrency limits, cap both SSE sessions and Streamable HTTP requests, and avoid allocating an unused bootstrap MCP server. Wallet-enabled HTTP still exits immediately before listen. For other startup failures, embedded `main()` callers receive the exception while the packaged `runCli()` path reports a sanitized error and exits nonzero.

- e0e4720: Remove the `search_sei_js_docs` tool and route the remaining `search_docs` tool through the official docs.sei.io MCP endpoint instead of the legacy Mintlify/Trieve backends. Reconnect and retry once when the remote docs session expires so callers do not see a transient 404 or 410 error. Remove the obsolete `docs/` rule from the package's `.npmignore`.

### Patch Changes

- 5b4bff7: Align `zod` with `@modelcontextprotocol/sdk` so both resolve the same schema types. Raise the SDK floor to `^1.23.0`, the first release that declares zod 4 support, so the pairing is unresolvable rather than silently broken.
- b730fba: Fix the HTTP start scripts to select their transports through `SERVER_TRANSPORT`, document the current Node.js, wallet, and HTTP configuration, and direct generated apps to the current package guide.
- d91053b: Return MCP validation errors for unsupported `compare_networks` entries instead of throwing an internal error.
- d626c0a: Return the current ERC-721 owner from NFT detail resources and expose owner lookup failures.
- da59b19: Standardize published package contents, licensing, and type resolution.

## 0.3.3

### Patch Changes

- bc17ace: Fix session binding and response isolation in the HTTP SSE transport.

  - POST handler now validates `sessionId` on every request — rejects missing session IDs (400) and unknown session IDs (404)
  - Each POST is routed to the transport instance that owns the matching session ID, preventing cross-client request injection
  - Session IDs now use the MCP SDK's `transport.sessionId` rather than `Date.now()`

- 2666156: Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

  This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

  No shipped code or public API changes in this package — this is a repository/CI hardening release.

## 0.3.2

### Patch Changes

- 571013a: Block wallet mode on HTTP transports to prevent CORS-based attacks

## 0.3.1

### Patch Changes

- 2df51c5: fix: update dev script to watch for changes in index.ts. useful during the development and debugging process.

## 0.3.0

### Minor Changes

- 9b32f5d: Added streamable-http transport and better environment variable configuration

## 0.2.7

### Patch Changes

- 977328b: Added ability to add custom RPC urls to each chain, removed the need for node-fetch, & updated docs for troubleshooting clarification

## 0.2.6

### Patch Changes

- 1f25b0d: Explicitly use node-fetch instead of relying on users node version to have fetch

## 0.2.5

### Patch Changes

- 411f4ec: fix:http-server/handlePostMessage

  https://github.com/modelcontextprotocol/typescript-sdk/issues/187#issuecomment-2765284408

## 0.2.4

### Patch Changes

- a64da08: Update README files in NPM

## 0.2.3

### Patch Changes

- d421249: Removed unnecessary dependencies

## 0.2.2

### Patch Changes

- 96d3a73: Added main docs search tool

## 0.2.1

### Patch Changes

- 29b8c15: Adds the ability to search the @sei-js docs when providing answers
- cab5074: Disable wallet based tools by default, add ability to add more wallet providers

## 0.2.0

### Minor Changes

- e1eb84a: Add deployContract tool

## 0.1.2

### Patch Changes

- 15a7bed: Move to Record type for writeContract params arg

## 0.1.1

### Patch Changes

- 4e2719c: Initial release of @sei-js/mcp-server

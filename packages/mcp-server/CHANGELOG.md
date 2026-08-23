# Changelog

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

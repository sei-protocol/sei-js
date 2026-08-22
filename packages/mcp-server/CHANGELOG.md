# Changelog

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

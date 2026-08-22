# @sei-js/global-wallet

## 2.0.0

### Major Changes

- 29311bc: Migrate the monorepo to Bun and publish ESM-only packages.

  **Breaking:** all packages drop CommonJS (`require`) entry points and flatten `dist/`. Consumers must use ESM `import`. `@sei-js/precompiles` now ships an `exports` map with working `./ethers`, `./viem`, and `./precompiles` subpaths. `@sei-js/sei-global-wallet` keeps the `./solana` entrypoint.

  Install, build, and test with Bun (`bun install`, `bun run build`, `bun run test`). `@sei-js/mcp-server` now requires Node.js 20 or newer. The MCP server and precompiles development toolchain use Viem 2.55.16. Generated apps target the new `@sei-js/precompiles` major. Packages continue to publish to npm via Changesets.

### Patch Changes

- da59b19: Standardize published package contents, licensing, and type resolution.

## 1.4.1

### Patch Changes

- 2666156: Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

  This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

  No shipped code or public API changes in this package — this is a repository/CI hardening release.

## 1.4.0

### Minor Changes

- b57f701: Bump global wallet and sync with upstream

## 1.3.5

### Patch Changes

- 1575dac: Update global wallet icon

## 1.3.4

### Patch Changes

- a64da08: Update README files in NPM

## 1.3.3

### Patch Changes

- 1ebf1b8: Bump dynamic version

## 1.3.2

### Patch Changes

- cd65a51: Fix broken NPM publish for all packages

## 1.3.1

### Patch Changes

- d6e74ed: Update package structure and building of all @sei-js packages

## 1.3.0

### Minor Changes

- a129406: Switch to a separate global wallets app

## 1.2.1

### Patch Changes

- da9b5b8: Update Dynamic to version 4.9.11

## 1.2.0

### Minor Changes

- 1c6c2f8: Rename to Sei Global Wallet

## 1.1.0

### Minor Changes

- 0233cac: Switch to SVG icon

## 1.0.0

### Major Changes

- c5d7c9e: Rename Global Wallet to Sei Account

## 0.1.0

### Minor Changes

- ce4e50d: Adding Dynamic Global Wallet support

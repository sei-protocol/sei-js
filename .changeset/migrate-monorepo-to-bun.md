---
"@sei-js/precompiles": major
"@sei-js/registry": major
"@sei-js/sei-global-wallet": major
"@sei-js/mcp-server": major
"@sei-js/create-sei": major
---

Migrate the monorepo to Bun and publish ESM-only packages.

**Breaking:** all packages drop CommonJS (`require`) entry points and flatten `dist/`. Consumers must use ESM `import`. `@sei-js/precompiles` now ships an `exports` map with working `./ethers`, `./viem`, and `./precompiles` subpaths. `@sei-js/sei-global-wallet` keeps the `./solana` entrypoint.

Install, build, and test with Bun (`bun install`, `bun run build`, `bun test`). Packages continue to publish to npm via Changesets.

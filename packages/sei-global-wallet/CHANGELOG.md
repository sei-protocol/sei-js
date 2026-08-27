# @sei-js/sei-global-wallet

## 2.0.1

### Patch Changes

- 66deb15: Document that `@dynamic-labs/ethereum-aa` has to match the `@dynamic-labs/global-wallet-client` version npm resolves, and keep the release checks on that resolved version instead of a constant.

  Dynamic declares `@dynamic-labs/ethereum-aa` as an exact peer of its client and pins its internal packages to the client's version, so the two move together on every patch. `@dynamic-labs/global-wallet-client` is a `^4.96.3` dependency here, which means a Dynamic patch inside that range changes the peer version consumers need. Pinning an older `@dynamic-labs/ethereum-aa` than the resolved client does not fail the install: npm cannot place the client's exact peer beside the older root copy, so it nests the client under this package and duplicates the whole Dynamic runtime. The [Optional peer versions](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#optional-peer-versions) table now states this and shows how to read the version the resolved client asks for.

  The consumer verifier resolved `4.96.3` regardless of what the range resolved to, so Dynamic publishing `@dynamic-labs/global-wallet-client@4.96.4` turned the nightly consumer run red on a duplicated Dynamic subtree rather than on any change in this repository. It now resolves the declared range against the registry, pins that client and the peer version it requests in each full consumer, and reports both, so a Dynamic patch is exercised the way an application receives it while a peer pin moving outside this package's published range still fails. A client that npm nests instead of hoisting is now reported as such, rather than as an unresolved dependency.

  No published dependency or peer range changes.

## 2.0.0

### Major Changes

- 29311bc: Migrate the monorepo to Bun and publish ESM-only packages.

  **Breaking:** all packages drop CommonJS (`require`) entry points and flatten `dist/`. Consumers must use ESM `import`. `@sei-js/precompiles` now ships an `exports` map with working `./ethers`, `./viem`, and `./precompiles` subpaths. `@sei-js/sei-global-wallet` keeps the `./solana` entrypoint.

  Install, build, and test with Bun (`bun install`, `bun run build`, `bun run test`). `@sei-js/mcp-server` now requires Node.js 20 or newer. The MCP server and precompiles development toolchain use Viem 2.55.16. Generated apps target the new `@sei-js/precompiles` major. Packages continue to publish to npm via Changesets.

### Minor Changes

- 5b4bff7: Harden Sei Global Wallet browser, EIP-6963, and packaging behavior without changing what existing installs resolve.

  New exports: `registerEIP6963Provider`, `unregisterEIP6963Provider`, `eip6963ProviderInfo`, and `registerSolanaStandard`.

  - Raise `@dynamic-labs/global-wallet-client` to `^4.96.3`, so applications inherit Dynamic's transitive fixes without waiting for a release here.
  - Initialize Dynamic's required `global` and `process` aliases before loading its modules in browsers and edge-like SSR runtimes, without consumer bundler configuration and without replacing consumer-defined values. Import mutates `globalThis` only when those values are absent. The `process` shim installed on `globalThis` is a copy, so the `process/browser.js` module singleton is not mutated. `process.env.NODE_ENV` defaults to `production` so libraries loaded afterwards do not take a development branch inside a production bundle.
  - Dispatch the initial EIP-6963 announcement, re-announce on every provider request, expose cleanup helpers, keep the EIP-6963 uuid equal to `environmentId` (the same identity Dynamic previously used), and replace the non-square wordmark with the unmodified square black mark from the official Sei brand kit.
  - Keep the root, `./eip6963`, and `./ethereum` entrypoints resolvable with no optional peer installed, including for types.
  - Verify real npm and Bun consumers, all five entrypoints, EIP-6963 and Solana registration, ZeroDev resolution, esbuild and Vite browser runtimes, SSR imports, types, audits, and package contents.

  Every optional peer range stays a superset of the 1.4.1 contract, and `@wallet-standard/wallet` stays a direct dependency, so no existing install changes how it resolves. The `events` dependency is present so bundlers can resolve the bare `events` specifier that `@zerodev/sdk` imports; browser builds of the `./zerodev` path fail without it. Dynamic 4.96.3's own peer contract is the version set this release is verified against; it is documented under [Optional peer versions](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#optional-peer-versions) as guidance rather than enforced through narrowed ranges.

  > [!WARNING]
  > This release carries a temporary consumer security waiver: Dynamic transitively pins vulnerable `axios` and `uuid`, and dependency overrides in a library do not propagate to applications. See [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) for the exact override blocks and the accepted advisory set.

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

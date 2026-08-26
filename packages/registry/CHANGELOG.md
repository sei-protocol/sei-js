# @sei-js/registry

## 2.0.0

### Major Changes

- 29311bc: Migrate the monorepo to Bun and publish ESM-only packages.

  **Breaking:** all packages drop CommonJS (`require`) entry points and flatten `dist/`. Consumers must use ESM `import`. `@sei-js/precompiles` now ships an `exports` map with working `./ethers`, `./viem`, and `./precompiles` subpaths. `@sei-js/sei-global-wallet` keeps the `./solana` entrypoint.

  Install, build, and test with Bun (`bun install`, `bun run build`, `bun run test`). `@sei-js/mcp-server` now requires Node.js 20 or newer. The MCP server and precompiles development toolchain use Viem 2.55.16. Generated apps target the new `@sei-js/precompiles` major. Packages continue to publish to npm via Changesets.

- 39c277f: Remove IBC and gas data from the registry package. `IBC_INFO`, `ChannelInfo`, `GAS_INFO`, `ChainGasInfo`, and `ModuleAdjustments` are no longer exported, and `TOKEN_LIST` no longer contains IBC or ICS-20 assets.

  Refresh the bundled chain registry data with current network endpoints, explorers, and wallets. `WALLETS` is now available from the package root.

  Align token metadata types with the community asset list: `Token.type_asset` replaces the non-runtime `Token.type_token` field, and `DenomUnit.aliases` is optional.

- 96d9e1c: Remove Sei devnet support. The MCP server no longer accepts `sei-devnet`, chain ID `713715`, or `DEVNET_RPC_URL`. Registry exports now contain only `pacific-1` and `atlantic-2`, and `CHAIN_IDS.devnet` has been removed.

### Minor Changes

- 1b38777: Refresh the community asset metadata from a reviewed upstream pin, including current non-IBC mainnet assets and retained image metadata.

  `TOKEN_LIST` entries now use `RegistryToken`, which narrows `type_asset` from the general optional string to a required upstream-schema asset type. `Token.pointer_contract` exposes optional, typed native/EVM pointer metadata.

  Keep source and bundle validation/filtering in sync, and add deterministic release checks for schema fidelity, generated data, submodule cleanliness, and retained image links.

### Patch Changes

- d12ad96: Stop running Git submodule commands when consumers install the registry package.
- da59b19: Standardize published package contents, licensing, and type resolution.

## 1.0.4

### Patch Changes

- 2666156: Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

  This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

  No shipped code or public API changes in this package — this is a repository/CI hardening release.

## 1.0.3

### Patch Changes

- cd65a51: Fix broken NPM publish for all packages

## 1.0.2

### Patch Changes

- d6e74ed: Update package structure and building of all @sei-js packages

## 1.0.1

### Patch Changes

- e6f88a4: Fix: Include registry files in NPM export

## 1.0.0

### Major Changes

- 53cc721: Intitial release of @sei-js/registry which contains exports from the official Sei chain registry as well as the community token list

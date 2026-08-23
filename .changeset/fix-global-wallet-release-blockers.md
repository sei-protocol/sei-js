---
'@sei-js/sei-global-wallet': minor
---

Harden Sei Global Wallet browser, EIP-6963, and packaging behavior without changing what existing installs resolve.

New exports: `registerEIP6963Provider`, `unregisterEIP6963Provider`, `eip6963ProviderInfo`, and `registerSolanaStandard`.

- Raise `@dynamic-labs/global-wallet-client` to `^4.96.3`, so applications inherit Dynamic's transitive fixes without waiting for a release here.
- Initialize Dynamic's required `global` and `process` aliases before loading its modules in browsers and edge-like SSR runtimes, without consumer bundler configuration and without replacing consumer-defined values. `process.env.NODE_ENV` defaults to `production` so libraries loaded afterwards do not take a development branch inside a production bundle.
- Dispatch the initial EIP-6963 announcement, re-announce on every provider request, expose cleanup helpers, use stable UUIDv4 provider metadata, and replace the non-square wordmark with the unmodified square black mark from the official Sei brand kit.
- Keep the root, `./eip6963`, and `./ethereum` entrypoints resolvable with no optional peer installed, including for types.
- Verify real npm and Bun consumers, all five entrypoints, EIP-6963 and Solana registration, ZeroDev resolution, esbuild and Vite browser runtimes, SSR imports, types, audits, and package contents.

Every optional peer range stays a superset of the 1.4.1 contract, and `@wallet-standard/wallet` stays a direct dependency, so no existing install changes how it resolves. The `events` dependency is present so bundlers can resolve the bare `events` specifier that `@zerodev/sdk` imports; browser builds of the `./zerodev` path fail without it. Dynamic 4.96.3's own peer contract is the version set this release is verified against; it is documented under [Optional peer versions](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#optional-peer-versions) as guidance rather than enforced through narrowed ranges.

> [!WARNING]
> This release carries a temporary consumer security waiver: Dynamic transitively pins vulnerable `axios` and `uuid`, and dependency overrides in a library do not propagate to applications. See [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) for the exact override blocks and the accepted advisory set.

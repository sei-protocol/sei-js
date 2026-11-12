---
'@sei-js/sei-global-wallet': patch
---

Verify consumers against `viem@2.57.19`, and drop Viem's two `ws` advisories from the Bun waiver.

Dynamic published `@dynamic-labs/global-wallet-client@4.104.0` inside this package's `^4.96.3` range on November 3, raising the `viem` peer of the client and of `@dynamic-labs/ethereum-aa` from `^2.45.3` to `^2.54.2`. The consumer verifier still installed `viem@2.45.3`, so every nightly consumer run since then failed with `ERESOLVE` rather than on any change in this repository. Its full consumers now install `viem@2.57.19`, and the [Optional peer versions](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#optional-peer-versions) table lists it as the verified version.

Every Viem inside `^2.54.2` depends on an Ox whose Tempo `VirtualMaster` miner loads `node:worker_threads` for its Node worker pool, which Vite resolves and reports as externalized for browser compatibility. No wallet path reaches the miner and it is tree-shaken out of the bundle, so the verifier now tolerates that one warning from `ox/_esm/tempo/internal/virtualMasterPool.js`. It still fails if Vite externalizes `node:worker_threads` for any other module, or if a browser or edge bundle contains a `worker_threads` path.

Viem 2.54.2 and later pin `ws@8.21.0`, outside both `GHSA-58qx-3vcg-4xpx` and `GHSA-96hv-2xvq-fx4p`, so the Bun AA consumer no longer reports them and they leave the Bun waiver. The scoped npm `ws` override stays in the [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) blocks for applications that still hold an older Viem; on current Viem it changes nothing.

No published dependency or peer range changes.

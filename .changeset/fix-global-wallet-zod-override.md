---
'@sei-js/sei-global-wallet': patch
---

Add `"zod": "4.6.7"` to the documented consumer overrides, clearing `GHSA-mrhx-c7xc-m3w5` on the wallet path.

`GHSA-mrhx-c7xc-m3w5` (high, CVSS 7.5) covers Zod's array validation: an array schema without a length constraint records an issue for every failing element, so one large array can exhaust memory. It was published on October 1, and since its October 23 update it reports the `zod@4.0.5` that `@dynamic-labs-sdk/client` and `@dynamic-labs/wallet-book` pin exactly. The newest `@dynamic-labs-sdk/client`, 1.45.0, still pins it. The wallet-only npm consumer, which is held to a strictly clean audit, reported `zod` plus the eight packages above it in the dependency chain, so the consumer smoke failed without any change in this repository.

All three [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) blocks now carry `"zod": "4.6.7"`, a minor-level move inside Zod 4. Nothing else in the wallet's dependency graph, including the optional AA path, needs Zod 3, so the override is safe as one of Bun's global overrides. Applications with a Zod 3 dependency of their own, such as the one wagmi's WalletConnect connector installs, can scope the override on npm instead, as the README describes.

No published dependency or peer range changes.

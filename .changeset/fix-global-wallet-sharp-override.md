---
'@sei-js/sei-global-wallet': patch
---

Override the newly advised `sharp` pin, and waive the one optional-AA advisory that no override can reach.

Two advisories published against the existing dependency graph, so the nightly consumer run went red without any change in this repository.

`GHSA-rgj7-g3m4-5g8c` covers `sharp` below `0.35.4`, and `@dynamic-labs/iconic` pins `sharp@0.35.0` exactly. That is the same shape as the existing Axios and UUID pins: the vulnerable copy is reachable from `@dynamic-labs/global-wallet-client`, overrides are root-only in both npm and Bun, and this package cannot propagate them to an application. A plain install reported nine high findings, one root advisory cascading up the Dynamic chain to `@sei-js/sei-global-wallet` itself. The [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) blocks now carry `"sharp": "0.35.4"`, a patch-level move inside the pinned minor. The advisory is a heap overflow in the bundled libheif decoder, so it needs untrusted HEIF input to trigger and `sharp` is a build-time dependency of the icon package that never reaches a browser bundle, but it is high severity with a compatible fix available, so it is corrected rather than waived.

`GHSA-528h-pc64-c93x` covers every `stream-json` up to `3.4.0`, which the Solana RPC client's `jayson` requires as CommonJS on the optional AA path. It cannot be overridden: `3.5.0` onward is ESM-only under a moved `src/` layout, so pointing `jayson` at a fixed version replaces the advisory with a `MODULE_NOT_FOUND` on its own require, and every CommonJS version is inside the advisory. It is now an accepted advisory for the full npm consumer, alongside the Bun waiver that already existed for advisories with no compatible fix. The finding is an `O(depth²)` slowdown in filters that no wallet path feeds, and the wallet-only npm consumer is still held to a strictly clean audit with no waiver, so a default install is unaffected.

Two verifier gaps that made this harder to read are closed as well. The npm audits ran without allowing a non-zero exit, so any finding surfaced as a raw spawn error carrying the whole audit JSON rather than the assertion naming the consumer; they now fail with the offending package and advisory URL. The "overrides still required" report and the Bun "overrides are taking effect" assertion are now derived from the override block instead of a hardcoded `axios`/`uuid` list, so a newly overridden package cannot be left out and let a partial upstream fix ask for the whole waiver to be dropped.

No published dependency or peer range changes.

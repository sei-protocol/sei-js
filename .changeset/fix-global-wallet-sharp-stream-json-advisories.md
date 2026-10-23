---
'@sei-js/sei-global-wallet': patch
---

Raise the documented `sharp` override to `0.35.5`, and accept the two new `stream-json` advisories that no override can reach.

Advisories published since October 5 turned the nightly consumer smoke red without any change in this repository.

`GHSA-wq5f-xc86-pv6w` covers `sharp` below `0.35.5`: a memory bug in the bundled librsvg (CVE-2026-96889) that can lead to remote code execution on glibc-based Linux when decoding untrusted SVG input. It reaches applications through `@dynamic-labs/iconic`'s exact `sharp@0.35.0` pin, the path the existing `0.35.4` override already corrects, so the wallet-only npm consumer, which is held to a strictly clean audit, reported `sharp` plus the eight packages above it in the dependency chain. The [Required consumer overrides](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#required-consumer-overrides) blocks now carry `"sharp": "0.35.5"`, a patch-level move inside the pinned minor, and the README's Sharp note covers both advisories.

`GHSA-hqr4-qq8f-hg3x` and `GHSA-mjw6-4jj6-33hc` cover `stream-json` below `3.6.0`, which the Solana RPC client's `jayson` requires as CommonJS on the optional AA path. `3.6.0` is still ESM-only under the moved `src/` layout, so like `GHSA-528h-pc64-c93x` they cannot be overridden without breaking `jayson`'s require, and both are now accepted for the npm and Bun AA consumers. Neither is reachable from a wallet. `stream-json@1.9.1` ships no JSONC parser, which the first covers, and `jayson` runs the `Assembler` the second covers only in its TCP and TLS transports, while the Solana RPC client uses `jayson/lib/client/browser`. The wallet-only npm consumer still has no waiver.

The verifier's browser consumer moves from `vite@8.2.2` to `8.2.4`, clearing six Vite and bundled `launch-editor` advisories published on October 20 and 21 against its own build tooling.

No published dependency or peer range changes.

---
'@sei-js/precompiles': minor
---

Export the Solo precompile from the `ethers` entrypoint. `ETHERS_SOLO_PRECOMPILE_ABI` and `getSoloPrecompileEthersV6Contract` were implemented but never re-exported from `src/ethers/index.ts`, so they were unreachable from the `@sei-js/precompiles` package root.

The `@sei-js/precompiles/ethers` subpath shown in the doc examples remains unresolvable and is unchanged here — the package still publishes no `exports` map. That is tracked separately.

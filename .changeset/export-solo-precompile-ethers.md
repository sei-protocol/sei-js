---
'@sei-js/precompiles': minor
---

Export the Solo precompile from the `ethers` entrypoint. `ETHERS_SOLO_PRECOMPILE_ABI` and `getSoloPrecompileEthersV6Contract` were implemented but never re-exported from `src/ethers/index.ts`, so they were unreachable from both `@sei-js/precompiles` and `@sei-js/precompiles/ethers`.

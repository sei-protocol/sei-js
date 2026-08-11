---
'@sei-js/precompiles': minor
---

**Breaking:** remove the IBC and Oracle precompiles. `IBC_PRECOMPILE_ADDRESS`, `IBC_PRECOMPILE_ABI`, `ETHERS_IBC_PRECOMPILE_ABI`, `getIbcPrecompileEthersV6Contract`, `VIEM_IBC_PRECOMPILE_ABI`, `ORACLE_PRECOMPILE_ADDRESS`, `ORACLE_PRECOMPILE_ABI`, `ETHERS_ORACLE_PRECOMPILE_ABI`, `getOraclePrecompileEthersV6Contract`, and `VIEM_ORACLE_PRECOMPILE_ABI` are no longer exported. Consumers still calling these precompiles must inline the address and ABI themselves.

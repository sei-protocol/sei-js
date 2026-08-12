---
'@sei-js/precompiles': major
---

**Breaking:** remove the IBC and Oracle precompiles. `IBC_PRECOMPILE_ADDRESS`, `IBC_PRECOMPILE_ABI`, `ETHERS_IBC_PRECOMPILE_ABI`, `getIbcPrecompileEthersV6Contract`, `VIEM_IBC_PRECOMPILE_ABI`, `ORACLE_PRECOMPILE_ADDRESS`, `ORACLE_PRECOMPILE_ABI`, `ETHERS_ORACLE_PRECOMPILE_ABI`, `getOraclePrecompileEthersV6Contract`, and `VIEM_ORACLE_PRECOMPILE_ABI` are no longer exported.

Neither precompile is supported on Sei any more, so calls to them fail on-chain regardless of where the address and ABI come from. There is no drop-in replacement: re-declaring them locally will not restore working calls, and code still depending on them needs to move off these precompiles.

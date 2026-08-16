---
'@sei-js/registry': major
---

Remove IBC and gas data from the registry package. `IBC_INFO`, `ChannelInfo`, `GAS_INFO`, `ChainGasInfo`, and `ModuleAdjustments` are no longer exported, and `TOKEN_LIST` no longer contains IBC or ICS-20 assets.

Refresh the bundled chain registry data with current network endpoints, explorers, and wallets. `WALLETS` is now available from the package root.

Align token metadata types with the community asset list: `Token.type_asset` replaces the non-runtime `Token.type_token` field, and `DenomUnit.aliases` is optional.

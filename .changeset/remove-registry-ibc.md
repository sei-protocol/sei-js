---
'@sei-js/registry': major
---

Remove IBC data from the registry package. `IBC_INFO` and `ChannelInfo` are no longer exported, and `TOKEN_LIST` no longer contains IBC or ICS-20 assets.

Refresh the bundled chain registry data with current network endpoints, explorers, wallets, and gas prices. `WALLETS` is now available from the package root. The obsolete `ModuleAdjustments` type and `ChainGasInfo.module_adjustments` field are no longer exported.

Align token metadata types with the community asset list: `Token.type_asset` replaces the non-runtime `Token.type_token` field, and `DenomUnit.aliases` is optional.

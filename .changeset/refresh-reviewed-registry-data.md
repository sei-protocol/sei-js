---
'@sei-js/registry': minor
---

Refresh the community asset metadata from a reviewed upstream pin, including current non-IBC mainnet assets and retained image metadata.

`TOKEN_LIST` entries now use `RegistryToken`, which narrows `type_asset` from the general optional string to a required upstream-schema asset type. `Token.pointer_contract` exposes optional, typed native/EVM pointer metadata.

Keep source and bundle validation/filtering in sync, and add deterministic release checks for schema fidelity, generated data, submodule cleanliness, and retained image links.

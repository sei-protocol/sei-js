# @sei-js/registry
Typed Sei network, wallet, chain, and asset metadata.

## Installation
```bash
bun add @sei-js/registry
```

## Usage
```typescript
import { TOKEN_LIST, NETWORKS, WALLETS } from '@sei-js/registry'

const sei = TOKEN_LIST['pacific-1'].find(asset => asset.base === 'usei')
const usdt = TOKEN_LIST['pacific-1'].find(asset => asset.symbol === 'USDT')
const nativePointer = usdt?.pointer_contract
const keplr = WALLETS.find(wallet => wallet.identifier === 'keplr')
```

`Token.pointer_contract` is optional. When present, it contains a typed `address` and a `type_asset` of `cw20` or `erc20`, describing the contract that points to the asset in Sei's other runtime. `TOKEN_LIST` entries use the `RegistryToken` subtype, whose `type_asset` is required and restricted to values from the reviewed upstream schema.

## Asset data policy
The community asset list is pinned to reviewed commit `964ca87f7cff8d8791ad1e994628fa410faae61e` from `Seitrace/sei-assetlist`, committed on 2026-02-01. The package does not follow the upstream `main` branch at build or release time.

Only `pacific-1` and `atlantic-2` are exported. Assets are excluded when their base denomination or any denomination unit starts with `ibc/`, or when `type_asset` is `ics20`. The source module and package build use the same validator and filter implementation.

At this pin:
- The upstream supported-network arrays contain 53 mainnet and 9 testnet entries.
- The package retains 46 mainnet and 7 testnet entries after filtering 7 mainnet and 2 testnet IBC/ICS-20 entries.
- The retained image metadata contains 48 unique HTTPS URLs.

This is a community-maintained list. Asset inclusion is not an endorsement; verify contract addresses and metadata for your application.

## Migration notes
The previous asset-list pin was `831406ba8cbe41f3f620c4e7a8ddca67405b5512`. The reviewed refresh is 186 commits ahead and increases the retained mainnet list from 19 to 46 assets while leaving the retained testnet count at 7.

Newly available mainnet metadata includes WSEI, native USDC, USDT0, Stargate WETH, fastUSD/sfastUSD, Frax assets, Fiamma BTC, and USDY. Existing non-IBC native and EVM assets remain available. IBC assets such as USDC.n, USDC.axl, and kavaUSDT remain intentionally absent from `TOKEN_LIST`.

Pointer metadata is now exposed for assets that provide `pointer_contract` upstream. Consumers should treat it as optional and continue identifying an asset by its network and base denomination. Consumers that model exported list entries can use `RegistryToken` for schema-validated `type_asset` values while the general `Token` wrapper remains compatible. Non-fungible assets can have an empty `denom_units` array; do not assume every retained entry has two fungible denomination units.

The reviewed upstream pin also restores the USDY SVG metadata and other retained image links. See [RUNBOOK.md](./RUNBOOK.md) for repinning, schema, artifact, package, and live image-link verification.

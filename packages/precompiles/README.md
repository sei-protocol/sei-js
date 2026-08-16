<div align="center">

# @sei-js/precompiles

[![npm version](https://badge.fury.io/js/@sei-js%2Fprecompiles.svg)](https://badge.fury.io/js/@sei-js%2Fprecompiles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

TypeScript ABIs, addresses, and Ethers/Viem helpers for Sei precompiles.

[GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/precompiles) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## Install

```bash
npm install @sei-js/precompiles
```

## Sei Chain compatibility

The exported ABIs match [Sei Chain v6.6.1](https://github.com/sei-protocol/sei-chain/tree/v6.6.1/precompiles). The `legacy/v66` directory is a frozen historical snapshot for that release, not a moving view of the current chain surface. Chain and package versions are independent; adopting a later Sei Chain minor snapshot is treated as at least a minor release of `@sei-js/precompiles`.

This package exports:

- Bank at `0x0000000000000000000000000000000000001001`
- CosmWasm at `0x0000000000000000000000000000000000001002`
- JSON at `0x0000000000000000000000000000000000001003`
- Address association at `0x0000000000000000000000000000000000001004`
- Staking at `0x0000000000000000000000000000000000001005`
- Governance at `0x0000000000000000000000000000000000001006`
- Distribution at `0x0000000000000000000000000000000000001007`
- Pointer view at `0x000000000000000000000000000000000000100A`
- Pointer registration at `0x000000000000000000000000000000000000100B`
- Solo migration at `0x000000000000000000000000000000000000100C`
- P256 verification at `0x0000000000000000000000000000000000001011`

Oracle and IBC are intentionally excluded: the [v6.6.1 Oracle implementation returns a retired error for every query](https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/oracle/oracle.go#L85-L104), and [SIP-03 disabled IBC in both directions](https://docs.sei.io/learn/sip-03-migration#ibc-is-disabled). Calls to either cannot succeed on live Sei. Some ABI methods can also be disabled by chain governance. Check the [Sei precompile docs](https://docs.sei.io/evm/precompiles/example-usage) before using a deprecated module or method.

## Usage

Addresses and raw `as const` ABIs are available from the package root and the `precompiles` and `viem` entrypoints. They work directly with Viem and preserve full type inference. Ethers factories are available from the `ethers` entrypoint.

```ts
import { STAKING_PRECOMPILE_ABI, STAKING_PRECOMPILE_ADDRESS } from '@sei-js/precompiles';
import { getStakingPrecompileEthersV6Contract } from '@sei-js/precompiles/ethers';
```

With a configured Viem public client, the v6.6 staking query methods can be called directly:

```ts
const result = await publicClient.readContract({
	address: STAKING_PRECOMPILE_ADDRESS,
	abi: STAKING_PRECOMPILE_ABI,
	functionName: 'validators',
	args: ['BOND_STATUS_BONDED', '0x']
});

console.log(result.validators, result.nextKey);
```

## Sei chain definitions

Import the canonical Sei mainnet and testnet definitions from the package root or the `viem` entrypoint:

```ts
import { sei, seiTestnet } from '@sei-js/precompiles';
// or: import { sei, seiTestnet } from '@sei-js/precompiles/viem';
```

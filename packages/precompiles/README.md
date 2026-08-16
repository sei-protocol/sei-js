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

The exported ABIs match the frozen precompile snapshot in [Sei Chain v6.6.1](https://github.com/sei-protocol/sei-chain/tree/v6.6.1/precompiles). Each ABI source links to its corresponding `legacy/v66/abi.json` file.

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

Oracle and IBC are intentionally excluded because they are no longer supported on live Sei. Some ABI methods can also be disabled by chain governance. Check the [Sei precompile docs](https://docs.sei.io/evm/precompiles/example-usage) before using a deprecated module or method.

## Usage

Addresses and raw ABIs are available from the package root and the `precompiles` entrypoint. Ethers factories and Viem-compatible ABIs have separate entrypoints.

```ts
import { STAKING_PRECOMPILE_ABI, STAKING_PRECOMPILE_ADDRESS } from '@sei-js/precompiles';
import { getStakingPrecompileEthersV6Contract } from '@sei-js/precompiles/ethers';
import { VIEM_STAKING_PRECOMPILE_ABI } from '@sei-js/precompiles/viem';
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

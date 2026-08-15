<div align="center">

# @sei-js/precompiles

[![npm version](https://badge.fury.io/js/@sei-js%2Fprecompiles.svg)](https://badge.fury.io/js/@sei-js%2Fprecompiles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

**TypeScript utilities for interacting with Sei's precompile contracts**

[GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/precompiles) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## 🚀 Quick Start

```bash
npm install @sei-js/precompiles
```

Works seamlessly with your favorite Ethereum development tools:
- **Viem** - Type-safe contract interactions
- **Ethers.js** - Contract factories and utilities
- **Wagmi** - React hooks for precompile contracts
- **Hardhat/Foundry** - Testing and deployment

## Sei chain definitions

Import the canonical Sei mainnet and testnet definitions from the package root or the `viem` entrypoint:

```ts
import { sei, seiTestnet } from '@sei-js/precompiles';
// or: import { sei, seiTestnet } from '@sei-js/precompiles/viem';
```

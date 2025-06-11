# @sei-js/precompiles

[![npm version](https://badge.fury.io/js/@sei-js%2Fprecompiles.svg)](https://badge.fury.io/js/@sei-js%2Fprecompiles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript utilities and helpers for interacting with Sei's precompile contracts. Provides seamless integration with popular Ethereum development tools like Viem and Ethers.js, offering typed interfaces, contract factories, ABI's, contract addresses, and utilities specifically designed for Sei's precompile ecosystem.

## 📦 Installation

```bash
npm install @sei-js/precompiles
```

```bash
yarn add @sei-js/precompiles
```

```bash
pnpm add @sei-js/precompiles
```

### Peer Dependencies

This package requires either `ethers` (v6+) or `viem` (v2+) as peer dependencies:

```bash
# For Ethers.js users
npm install ethers@^6.0.0

# For Viem users  
npm install viem@^2.0.0
```

## 🚀 Quick Start

### With Viem

```typescript
import { createPublicClient, http } from 'viem'
import { seiMainnet } from '@sei-js/precompiles/viem'
import { BANK_PRECOMPILE_ADDRESS, bankPrecompileAbi } from '@sei-js/precompiles'

const client = createPublicClient({
  chain: seiMainnet,
  transport: http()
})

// Read token balance
const balance = await client.readContract({
  address: BANK_PRECOMPILE_ADDRESS,
  abi: bankPrecompileAbi,
  functionName: 'balance',
  args: ['0x...', 'usei']
})
```

### With Ethers.js

```typescript
import { ethers } from 'ethers'
import { getBankPrecompileEthersV6Contract } from '@sei-js/precompiles/ethers'

const provider = new ethers.JsonRpcProvider('https://evm-rpc.sei-apis.com')
const bankContract = getBankPrecompileEthersV6Contract(provider)

// Read token balance
const balance = await bankContract.balance('0x...', 'usei')
```

## 📋 Available Precompiles

| Precompile | Address | Description |
|------------|---------|-------------|
| **Bank** | `0x0000000000000000000000000000000000001001` | Token operations and balance management |
| **Oracle** | `0x0000000000000000000000000000000000001002` | Price feeds and TWAP data |
| **JSON** | `0x0000000000000000000000000000000000001003` | JSON parsing utilities |
| **Address** | `0x0000000000000000000000000000000000001004` | Address association between EVM and Cosmos |
| **Staking** | `0x0000000000000000000000000000000000001005` | Validator operations and delegation |
| **Governance** | `0x0000000000000000000000000000000000001006` | Voting and proposal management |
| **Distribution** | `0x0000000000000000000000000000000000001007` | Reward distribution and claiming |
| **IBC** | `0x0000000000000000000000000000000000001009` | Cross-chain transfers |
| **Pointerview** | `0x000000000000000000000000000000000000100A` | Token pointer queries |
| **Pointer** | `0x000000000000000000000000000000000000100B` | Token pointer creation |
| **Confidential Transfers** | `0x0000000000000000000000000000000000001010` | Privacy-preserving transactions |
| **WASM** | `0x0000000000000000000000000000000000001002` | CosmWasm contract interaction |

## 📖 Documentation

For comprehensive guides, examples, and API reference, visit our documentation:

**📚 [Complete Documentation →](https://seilabs.mintlify.app/precompiles)**

### Quick Links

- **[Quick Start Guide](https://seilabs.mintlify.app/precompiles/quick-start)** - Get up and running in 5 minutes
- **[Viem Integration](https://seilabs.mintlify.app/precompiles/precompiles/viem)** - Type-safe precompile interactions with Viem
- **[Ethers.js Integration](https://seilabs.mintlify.app/precompiles/precompiles/ethers)** - Use precompile contract factories with Ethers.js

## 🏗️ Usage Examples

### Bank Precompile - Token Operations

```typescript
import { BANK_PRECOMPILE_ADDRESS, bankPrecompileAbi } from '@sei-js/precompiles'

// Send tokens
await writeContract({
  address: BANK_PRECOMPILE_ADDRESS,
  abi: bankPrecompileAbi,
  functionName: 'send',
  args: [fromAddress, toAddress, 'usei', amount]
})
```

### Oracle Precompile - Price Data

```typescript
import { ORACLE_PRECOMPILE_ADDRESS, oraclePrecompileAbi } from '@sei-js/precompiles'

// Get exchange rate
const rate = await readContract({
  address: ORACLE_PRECOMPILE_ADDRESS,
  abi: oraclePrecompileAbi,
  functionName: 'getExchangeRate',
  args: ['ATOM']
})
```

### Staking Precompile - Validator Operations

```typescript
import { STAKING_PRECOMPILE_ADDRESS, stakingPrecompileAbi } from '@sei-js/precompiles'

// Delegate to validator
await writeContract({
  address: STAKING_PRECOMPILE_ADDRESS,
  abi: stakingPrecompileAbi,
  functionName: 'delegate',
  args: [validatorAddress, amount]
})
```

## 🆘 Support

- **Documentation**: [https://seilabs.mintlify.app](https://seilabs.mintlify.app)
- **Discord**: [Sei Discord](https://discord.gg/sei)
- **GitHub Issues**: [Report a bug](https://github.com/sei-protocol/sei-js/issues)

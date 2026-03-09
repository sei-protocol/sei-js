<div align="center">

# @sei-js/registry

[![npm version](https://badge.fury.io/js/@sei-js%2Fregistry.svg)](https://badge.fury.io/js/@sei-js%2Fregistry)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

**Typed constants for Sei chain info, tokens, networks, IBC, and gas configuration**

[Documentation](https://sei-js.docs.sei.io/registry/introduction) • [GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/registry) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## 🚀 Quick Start

```bash
npm install @sei-js/registry
```

```typescript
import { TOKEN_LIST, NETWORKS, IBC_INFO, GAS_INFO } from '@sei-js/registry'

const uAtom = TOKEN_LIST.find(asset => asset.denom === 'uatom')
```

## 📚 Documentation

For complete documentation, examples, and guides, visit:
**[sei-js.docs.sei.io/registry](https://sei-js.docs.sei.io/registry/introduction)**

# @sei-js/registry
This package contains TypeScript typed exports for the Sei registry repository as well as the community asset-list repository.

## Installation
```bash
yarn add @sei-js/registry
```

## Usage
```typescript
import { TOKEN_LIST, NETWORKS, IBC_INFO, GAS_INFO } from '@sei-js/registry'

const uAtom = TOKEN_LIST.find(asset => asset.denom === 'uatom')
```

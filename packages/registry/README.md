# @sei-js/registry
This package contains TypeScript typed exports for the Sei registry repository as well as the community asset-list repository.

## Installation
```bash
bun add @sei-js/registry
```

## Usage
```typescript
import { TOKEN_LIST, NETWORKS, WALLETS } from '@sei-js/registry'

const sei = TOKEN_LIST['pacific-1'].find(asset => asset.base === 'usei')
const keplr = WALLETS.find(wallet => wallet.identifier === 'keplr')
```

# @sei-js/registry
This package contains TypeScript typed exports for the Sei registry repository as well as the community asset-list repository.

## Installation
```bash
yarn add @sei-js/registry
```

## Usage
```typescript
import { AssetList, Chain, IBCInfo, GasInfo } from '@sei-js/registry'

const uAtom = AssetList.find(asset => asset.denom === 'uatom')
```

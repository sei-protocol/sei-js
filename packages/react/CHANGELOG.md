# Changelog

## 3.0.2

### Patch Changes

- 908b5b5: Added polyfill, wallet, arbitrary signing, and address helper functions.
- Updated dependencies [908b5b5]
  - @sei-js/core@3.0.2

## 3.0.1

### Patch Changes

- cc3bf83: Bump proto version
- Updated dependencies [cc3bf83]
  - @sei-js/core@3.0.1

## 3.0.0

### Major Changes

- 43153ba: Bump all versions to 3.0.0

### Patch Changes

- Updated dependencies [43153ba]
  - @sei-js/core@3.0.0

## 2.0.0

### Major Changes

- 7229f87: Pacific-1 support and mobile/proto optimizations
  - Excludes unnecessary modules in proto codegen
  - Remove TM35 client (no longer used)
  - Clean up helper functions in favor of using Sei wallet interfaces
  - Update react hooks
  - Adds mobile wallet support through UI components and inside wallet interfaces
  - Adds support for Pacific-1
  - Adds support for mobile wallets

### Patch Changes

- Updated dependencies [7229f87]
  - @sei-js/core@0.0.0

## 2.1.0

### Minor Changes

- 4b51605: Updated @sei-js/core dependency and updated provider to use imported wallet configs

## 2.0.5

### Patch Changes

- 3efcde8: Build optimizations
  -Added babel instead of tsc to both /core and /react packages
  -Added source maps to the outputs
  -Remove unnecessary dependencies
  -Removed unused assets folder from /react
  -Fixed issue with the 'react-icons' package react-icons/react-icons#593
- Updated dependencies [3efcde8]
  - @sei-js/core@1.4.2

## 2.0.4

### Patch Changes

- @sei-js/core@1.4.1

## 2.0.3

### Patch Changes

- f00cb53: This fixes an issue where the wallet button menu pops up after connecting to a wallet, Fixes the sign arbitrary function on connected wallets, added an optional disconnect function to the useWallet hook.

## 2.0.2

### Patch Changes

- 05a1f56: Fixed an issue when wallets don't connect and the UI hangs, fixed an issue where the WalletConnectButton menu shows after selecting a wallet

## 2.0.1

### Patch Changes

- d410c48: Fixed css export issue during build so that css styles get included in the React components

## 2.0.0

### Major Changes

- 372506f: Refactored wallet provider and UI components, added hook to programatically open wallet connect modal, implemented a new wallet interface, replaced custom styles with tint colors

### Patch Changes

- Updated dependencies [372506f]
  - @sei-js/core@1.4.0

## 1.3.3

### Patch Changes

- d67e9f0: Add Compass Wallet
- Updated dependencies [d67e9f0]
  - @sei-js/core@1.3.6

## 1.3.2

### Minor Changes

- Add Fin Wallet

### Patch Changes

- Updated dependencies
  - @sei-js/core@1.3.5

## 1.3.1

### Patch Changes

- Updated dependencies [a8c06c0]
  - @sei-js/core@1.3.4

## 1.3.0

### Minor Changes

- 8c20cef: Added the ability to set the input wallets that show up when using the WalletConnectButton component

### Patch Changes

- e5308db: Fix react dependencies
- Updated dependencies [e5308db]
  - @sei-js/core@1.3.3

## 1.2.3

### Patch Changes

- Updated dependencies [aaa3d7c]
  - @sei-js/core@1.3.2

## 1.2.2

### Patch Changes

- Updated dependencies [84265e0]
- Updated dependencies [21958cc]
  - @sei-js/core@1.3.1

## 1.2.1

### Patch Changes

- a4ccd41: Suggest chain for leap before connecting
- 6a201ac: Fix wallet select modal and add wallet logos

## 1.2.0

### Minor Changes

- 7fc4ff2: Update dependencies for packages in monorepo
- f03475b: Update protos and add wallet provider

### Patch Changes

- 7fc4ff2: Fix dependencies for all packages
- 902715d: Add stargate and cosmwasm client hooks
- Updated dependencies [7fc4ff2]
- Updated dependencies [7fc4ff2]
- Updated dependencies [f03475b]
- Updated dependencies [267916d]
  - @sei-js/core@1.3.0

## 1.1.7

### Patch Changes

- bb52df2: Extend CosmJS clients to support Sei Tendermint
- Updated dependencies [bb52df2]
- Updated dependencies [4256836]
  - @sei-js/core@1.2.0

## 1.1.6

### Patch Changes

- cd00554: Refactored monorepo to be package-based
- Updated dependencies [cd00554]
  - @sei-js/core@1.1.6

## [1.1.5](https://github.com/sei-protocol/sei-js/compare/v1.1.4...v1.1.5) (2023-01-29)

### Bug Fixes

- add react library ([edb7f58](https://github.com/sei-protocol/sei-js/commit/edb7f58b8901d7df8857a5bb9f611a963d09b99f))
- copy hooks from old react package ([10c33e6](https://github.com/sei-protocol/sei-js/commit/10c33e6e73bcf384d752d27df2f5342cbaadda32))
- remove react library ([b7cb254](https://github.com/sei-protocol/sei-js/commit/b7cb2540101c3afff7bae1b7c62330c9403e8c27))

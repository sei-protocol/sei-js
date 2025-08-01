# @sei-js/precompiles

## 2.1.2

### Patch Changes

- c1667a9: Fixed oracle precompile address in @sei-js/precompiles and removed confidential transfers

## 2.1.1

### Patch Changes

- a64da08: Update README files in NPM

## 2.1.0

### Minor Changes

- b888b94: Rename @sei-js/evm to @sei-js/precompiles

<!-- Switched name to @sei-js/precompiles -->

## 2.0.5

### Patch Changes

- 475b27c: Added Solo functions for migration to EVM only

## 2.0.4

### Patch Changes

- c4f90d3: Add condiential transfers precompiles

## 2.0.3

### Patch Changes

- cd65a51: Fix broken NPM publish for all packages

## 2.0.2

### Patch Changes

- d6e74ed: Update package structure and building of all @sei-js packages

## 2.0.1

### Patch Changes

- ded69c2: Updates IBC precompile contract to be nonpayable

## 2.0.0

### Major Changes

- 747340b: Refactored exports in package.json for a more consistent experience across all node version and module resolution strategies

## 1.4.2

### Patch Changes

- 1554931: Added a new export to connect to a local chain (seid) with viem

## 1.4.1

### Patch Changes

- a56dc3c: Update addr precompiles

## 1.4.0

### Minor Changes

- 35c62d0: Adding new functions to distribution and staking precompiles

## 1.3.0

### Minor Changes

- c2a0a4e: Refactored EVM package so that viem and ethers are now peer dependencies.

## 1.2.0

### Minor Changes

- 2d0ab5e: add withdrawMultipleDelegationRewards method to distribution precompile

## 1.1.2

### Patch Changes

- 93ea230: Add wallets and ABI types fixes

## 1.1.1

### Patch Changes

- cbb2a4d: Add pacific-1 EVM chain config

## 1.1.0

### Minor Changes

- 3873d2e: adding memo support for IBC precompile

## 1.0.7

### Patch Changes

- b838b4c: Added new precompiles for pointer, pointerview, and oracle. Added feegrant to @sei-js/proto

## 1.0.6

### Patch Changes

- 62d37d3: Add missing ibc epxort statement
- 4a934b7: IBC precompile transfer with default timeout height/timestamp

## 1.0.5

### Patch Changes

- 4dfa9f6: Update name and symbol of Sei viem chain

## 1.0.4

### Patch Changes

- d79f2a1: Update with Atlantic-2 chain info

## 1.0.3

### Patch Changes

- 7d9b382: Moved peer dependencies to standard dependencies to avoid needing multiple packages installed

## 1.0.2

### Patch Changes

- f91e176: Replaced babel with tsc for building

## 1.0.1

### Patch Changes

- b780906: Release of Sei v2 packages which splits the old libraries into @sei-js/evm and @sei-js/cosmjs. Additionally this release updates the proto package to use newer packages and improves it's exports.

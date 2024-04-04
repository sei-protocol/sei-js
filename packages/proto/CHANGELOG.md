# Changelog

## 4.0.2

### Patch Changes

- 07951bc: Updated Telescope to latest version, changed build tool from babel to TSC, fixed typos in exports

## 4.0.1

### Patch Changes

- b780906: Release of Sei v2 packages which splits the old libraries into @sei-js/evm and @sei-js/cosmjs. Additionally this release updates the proto package to use newer packages and improves it's exports.

## 3.1.0

### Minor Changes

- 4446cdc: Adjusted package exports to include cjs and esm versions of each project, enables tree shaking by correctly exporting entry points for each build type and by declaring packages as side effect free

## 3.0.2

### Patch Changes

- 2183459: Loosened versioning of required @cosmjs dependencies

## 3.0.1

### Patch Changes

- e45bc24: Fix build

## 3.0.0

### Major Changes

- 43153ba: Bump all versions to 3.0.0

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

## 1.3.0

### Minor Changes

- 16ac1ab: Update proto to match 3.0.4

## 1.2.0

### Minor Changes

- 7fc4ff2: Update dependencies for packages in monorepo
- f03475b: Update protos and add wallet provider

### Patch Changes

- 7fc4ff2: Fix dependencies for all packages

## 1.1.6

### Patch Changes

- cd00554: Refactored monorepo to be package-based

# @sei-js/ledger

## 1.1.6

### Patch Changes

- 2666156: Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

  This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

  No shipped code or public API changes in this package — this is a repository/CI hardening release.

## 1.1.5

### Patch Changes

- a64da08: Update README files in NPM

## 1.1.4

### Patch Changes

- cd65a51: Fix broken NPM publish for all packages

## 1.1.3

### Patch Changes

- d6e74ed: Update package structure and building of all @sei-js packages

## 1.1.2

### Patch Changes

- 93b233c: Updated README.md to show all the available exported functions and their params, descriptions, usage and return values.

## 1.1.1

### Patch Changes

- 590bbcf: Update library versions

## 1.1.0

### Minor Changes

- c0cd7a0: Packge init + helper functions to work with Ledger in Cosmos Stargate client

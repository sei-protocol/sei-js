# @sei-js/registry

## 1.0.4

### Patch Changes

- 2666156: Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

  This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

  No shipped code or public API changes in this package — this is a repository/CI hardening release.

## 1.0.3

### Patch Changes

- cd65a51: Fix broken NPM publish for all packages

## 1.0.2

### Patch Changes

- d6e74ed: Update package structure and building of all @sei-js packages

## 1.0.1

### Patch Changes

- e6f88a4: Fix: Include registry files in NPM export

## 1.0.0

### Major Changes

- 53cc721: Intitial release of @sei-js/registry which contains exports from the official Sei chain registry as well as the community token list

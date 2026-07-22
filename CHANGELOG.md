# Changelog

## 2.0.1 — 2026-07-22

### Security

- Pin `@asyncapi/*` packages to non-compromised versions via `pnpm.overrides`, in
  response to the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident. Stops a
  fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the
  compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`).
  - Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`.
  - `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components`
    pinned preventively (not currently in the tree).
  - No published `@sei-js/*` package's code or public API changes. A coordinated
    patch release across all six packages carries this note for consumer visibility.

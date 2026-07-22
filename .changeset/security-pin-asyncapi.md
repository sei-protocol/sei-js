---
"@sei-js/create-sei": patch
"@sei-js/ledger": patch
"@sei-js/mcp-server": patch
"@sei-js/precompiles": patch
"@sei-js/registry": patch
"@sei-js/sei-global-wallet": patch
---

Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

No shipped code or public API changes in this package — this is a repository/CI hardening release.

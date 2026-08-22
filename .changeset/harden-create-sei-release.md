---
"@sei-js/create-sei": minor
---

Harden scaffolding against destination overwrites and extension traversal, propagate generation failures, and write the selected project name into generated manifests. Project names are now intentionally limited to unscoped lowercase npm-style directory names; scoped names, tildes, and other shell-significant characters are rejected.

Generate buildable base and precompiles apps with patched Next.js and React versions, an exact release-derived `@sei-js/precompiles` dependency, preserved Biome tooling, and a safe `.gitignore`.

Keep the secure Sharp 0.35 line while disabling Next 15's incompatible image optimizer. Dedicated local-candidate and staged-registry smoke modes validate clean installs, Biome checks, production builds, and production-server route and asset probes without coupling unrelated package releases to the scaffold audit.

Apply the official Sei lockup, app mark, and Powered by Sei artwork with the black-and-white base palette, restrained Maroon and Gold accents, and license-safe typography fallbacks.

Map Mantine neutrals to the accessible official ramp and pin React 19-compatible external-store synchronization.

Remove the stale Vercel deploy script and badge, and replace the MetaMask-specific default connector with the generic injected-wallet connector.

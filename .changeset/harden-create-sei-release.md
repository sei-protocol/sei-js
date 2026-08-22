---
"@sei-js/create-sei": patch
---

Harden scaffolding against destination overwrites and extension traversal, propagate generation failures, and write the selected project name into generated manifests.

Generate buildable base and precompiles apps with patched Next.js and React versions, exact wallet dependencies and `@sei-js/precompiles@3.0.0`, preserved Biome tooling, and a safe `.gitignore`.

Keep the secure Sharp 0.35 line while disabling Next 15's incompatible image optimizer. Until precompiles 3 is published and a real registry lockfile can be generated, the release workflow gates publishing on live clean installs, audits, Biome checks, production builds, and production-server route and asset probes.

Apply the official Sei lockup, app mark, and Powered by Sei artwork with the black-and-white base palette, restrained Maroon and Gold accents, and license-safe typography fallbacks.

Map Mantine neutrals to the accessible official ramp and pin React 19-compatible external-store synchronization.

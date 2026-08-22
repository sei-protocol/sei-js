---
"@sei-js/create-sei": minor
---

Harden scaffolding against destination overwrites and extension traversal, propagate generation failures, and write the selected project name into generated manifests. Project names are now intentionally limited to unscoped lowercase npm-style directory names; scoped names, tildes, and other shell-significant characters are rejected.

Generate buildable base and precompiles apps with patched Next.js and React versions, an exact independently validated `@sei-js/precompiles` dependency, preserved Biome tooling, conventional favicon handling, and a safe `.gitignore`.

Keep the secure Sharp 0.35 line while disabling Next 15's incompatible image optimizer. The dedicated smoke uses a local candidate only when its pending or already-versioned manifest matches the template pin; otherwise it checks the exact npm release. It validates clean Bun installs, reports low and moderate advisories, blocks candidate checks on high and critical advisories, and exercises Biome, production builds, routes, and assets without coupling unrelated package releases to the scaffold audit.

Apply the official Sei lockup, app mark, and Powered by Sei artwork with the black-and-white base palette, restrained Maroon and Gold accents, and license-safe typography fallbacks.

Map Mantine neutrals to the accessible official ramp and pin React 19-compatible external-store synchronization.

Remove the stale Vercel deploy script and badge, and replace the MetaMask-specific default connector with the generic injected-wallet connector.

Keep default CLI failures concise while exposing full errors and stacks when `DEBUG` is set.

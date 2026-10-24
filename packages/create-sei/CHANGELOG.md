# @sei-js/create-sei

## 2.0.2

### Patch Changes

- ce15c1d: Require Bun 1.4.4 for generated applications, the first Bun release outside the Brotli decoder advisory `GHSA-9v8h-qqgm-4m35` (CVE-2026-111497).

  Bun vendors Google's Brotli library for `node:zlib` and for decompressing `fetch` responses. The `1.3.14` the template pinned ships Brotli 1.1.0, and Bun 1.4.3 still ships 1.2.0, both inside the advisory's 1.0.3 through 1.2.0 range. Bun 1.4.4 ships Brotli 1.2.1, and there is no fixed 1.3.x release.

  The template's `packageManager` moves from `bun@1.3.14` to `bun@1.4.4`, and the generated README and this package's README name 1.4.4 as the minimum. The release smoke now runs on Bun 1.4.4, so that is the version the template's overrides are validated with.

  No published dependency or peer range changes.

- a61b860: Bump the Next template's `next` and `sharp` pins to clear five newly published advisories.

  Five advisories landed against the pinned `next@15.5.25` and the `sharp@0.35.4` override, so every generated app installed them without any change to the template:

  - `GHSA-2464-fhr4-w9xw` — critical, unauthenticated remote code execution in the Image Optimization API, `>=10.0.0 <=15.5.27`.
  - `GHSA-p3m5-59mp-jv5r` — high, denial of service in the App Router through Server Actions, `>=13.0.0 <=15.5.27`.
  - `GHSA-mcj8-r9mp-w47p` and `GHSA-4jqv-mc3x-m676` — moderate, cache poisoning of SSG and ISR pages, `>=15.0.0 <15.5.27`.
  - `GHSA-wq5f-xc86-pv6w` — high, a memory bug in Sharp's bundled librsvg (CVE-2026-96889) that can allow remote code execution on glibc-based Linux, `<0.35.5`.

  `next` moves `15.5.25` to `15.5.28` and the `sharp` override `0.35.4` to `0.35.5`, both inside their pinned minors.

  Next 15.5.28 declares Sharp `^0.34.3 || ^0.35.5`, so the override stays inside the range Next supports. The image notes in the template README and `next.config.mjs` now name `0.35.5` as the advisory floor, because the `0.34.x` half of Next's range is inside both Sharp advisories.

  Generated apps still report two advisories on install:

  - `GHSA-mrhx-c7xc-m3w5` — high, memory exhaustion in Zod's array validation, `<4.6.6`. It reaches every generated app through the `zod@3.22.4` that `@reown/appkit-wallet` pins exactly under wagmi's WalletConnect connector, and Reown's newest release, 1.8.24, still pins it. Zod published no fixed 3.x release, so the only override would move Reown onto Zod 4, a major it does not declare support for.
  - `GHSA-vcc3-ghjq-m6fr` — moderate, denial of service in `decode-uri-component`, `<=0.4.2`.

## 2.0.1

### Patch Changes

- cb882eb: Bump the Next template's `next` and `sharp` pins to clear three newly published advisories.

  The generated-app smoke audits every variant and fails on any high or critical finding. Three advisories landed against the pinned versions, so the check went red without any change to the template:

  - `GHSA-p293-qw3h-jr36` — critical, unauthenticated RCE on Windows-hosted Next.js servers, `>=13.4.0 <15.5.24`.
  - `GHSA-2xp9-vwfh-vxw4` — critical, unauthenticated RCE in the Image Optimization API when AVIF files are used, `>=10.0.0 <15.5.24`.
  - `GHSA-rgj7-g3m4-5g8c` — high, heap overflow in Sharp's bundled libheif decoder, `<0.35.4`.

  `next` moves `15.5.21` to `15.5.25` and the `sharp` override `0.35.3` to `0.35.4`, both inside their pinned minors.

  Next also widened its own Sharp declaration to `^0.34.3 || ^0.35.4`, so the pinned override now sits inside the range Next supports. The image notes in the template README and `next.config.mjs` said the opposite and are corrected: images stay unoptimized to avoid requiring a native Sharp build, which is a template choice rather than a security tradeoff. The `sharp` override itself still is one, and both notes now say so — the `0.34.x` half of Next's range remains inside the advisory, making `0.35.4` the floor rather than a free upgrade.

  The remaining `decode-uri-component` finding is moderate and does not block the smoke.

## 2.0.0

### Major Changes

- 29311bc: Migrate the monorepo to Bun and publish ESM-only packages.

  **Breaking:** all packages drop CommonJS (`require`) entry points and flatten `dist/`. Consumers must use ESM `import`. `@sei-js/precompiles` now ships an `exports` map with working `./ethers`, `./viem`, and `./precompiles` subpaths. `@sei-js/sei-global-wallet` keeps the `./solana` entrypoint.

  Install, build, and test with Bun (`bun install`, `bun run build`, `bun run test`). `@sei-js/mcp-server` now requires Node.js 20 or newer. The MCP server and precompiles development toolchain use Viem 2.55.16. Generated apps target the new `@sei-js/precompiles` major. Packages continue to publish to npm via Changesets.

### Minor Changes

- 6fade5f: Harden scaffolding against destination overwrites and extension traversal, propagate generation failures, and write the selected project name into generated manifests. Project names are now intentionally limited to unscoped lowercase npm-style directory names; scoped names, tildes, and other shell-significant characters are rejected.

  Generate buildable base and precompiles apps with patched Next.js and React versions, an exact independently validated `@sei-js/precompiles` dependency, preserved Biome tooling, conventional favicon handling, and a safe `.gitignore`.

  Keep the secure Sharp 0.35 line while disabling Next 15's incompatible image optimizer. The dedicated smoke uses a local candidate only when its pending or already-versioned manifest matches the template pin; otherwise it checks the exact npm release. It validates clean Bun installs, reports low and moderate advisories, blocks candidate checks on high and critical advisories, and exercises Biome, production builds, routes, and assets without coupling unrelated package releases to the scaffold audit.

  Apply the official Sei lockup, app mark, and Powered by Sei artwork with the black-and-white base palette, restrained Maroon and Gold accents, and license-safe typography fallbacks.

  Map Mantine neutrals to the accessible official ramp and pin React 19-compatible external-store synchronization.

  Remove the stale Vercel deploy script and badge, and replace the MetaMask-specific default connector with the generic injected-wallet connector.

  Keep default CLI failures concise while exposing full errors and stacks when `DEBUG` is set.

### Patch Changes

- 656e1d2: Add the documented `-n` app name option and correct the generated template documentation and Bank precompile link.
- b730fba: Fix the HTTP start scripts to select their transports through `SERVER_TRANSPORT`, document the current Node.js, wallet, and HTTP configuration, and direct generated apps to the current package guide.
- da59b19: Standardize published package contents, licensing, and type resolution.

## 1.0.1

### Patch Changes

- 2666156: Harden the workspace against the 2026-07-14 "Miasma RAT" AsyncAPI supply-chain incident by pinning `@asyncapi/*` packages to non-compromised versions via root `pnpm.overrides`.

  This stops a fresh install or lockfile regeneration from floating `@asyncapi/specs` up into the compromised `6.11.2` through the `mint` docs toolchain (`mint` → `@asyncapi/parser`). Resolved change: `@asyncapi/specs` `6.10.0` → `6.11.1`; `@asyncapi/generator`, `@asyncapi/generator-helpers`, and `@asyncapi/generator-components` are pinned preventively.

  No shipped code or public API changes in this package — this is a repository/CI hardening release.

- 9168186: Improve the `next-template` runtime defaults generated by `create-sei`.

  - Add a `prebuild` Biome check and include Biome in template dev dependencies.
  - Configure Next.js to allow Sei CDN images and skip ESLint during builds.
  - Update provider and shell setup for improved chain/image handling.
  - Align template config/docs with current defaults (`.env.example`, `README`, Biome, Tailwind v4 config).

## 1.0.0

### Major Changes

- 92fd8fd: Updated default template and added extensions

## 0.0.4

### Patch Changes

- 848c236: Remove cosmos from templates

## 0.0.3

### Patch Changes

- a64da08: Update README files in NPM

## 0.0.2

### Patch Changes

- cd65a51: Fix broken NPM publish for all packages

## 0.0.1

### Patch Changes

- d6e74ed: Update package structure and building of all @sei-js packages

## 0.0.0

### Major Changes

- e3a4c8e: First release

## 0.0.0-internal-20240718212746

### Major Changes

- test

## 0.0.0-internal-20240718212405

### Major Changes

- test ver final

## 0.0.0-internal-20240717005255

### Major Changes

- edit

## 0.0.0-internal-20240717005002

### Major Changes

- with options

## 0.0.0-internal-20240717003256

### Major Changes

- First version

## 0.0.0-internal-20240716075531

### Major Changes

- first v

## 0.0.0-internal-20240716074905

### Major Changes

- First version

## 0.0.0-internal-20240708205128

### Major Changes

- first release

## 0.0.0-internal-20240708184136

### Major Changes

- First release

## 0.0.0-internal-20240708170805

### Major Changes

- release create sei

## 0.0.0-internal-20240708163140

### Major Changes

- Update Templates
- 0917789: Major release

## 0.0.0-internal-20240701161539

### Major Changes

- 6b3cf5a: Instantiates the Create Sei App package

### Minor Changes

- changes

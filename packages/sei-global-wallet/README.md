<div align="center">

# @sei-js/sei-global-wallet

[![npm version](https://badge.fury.io/js/@sei-js%2Fsei-global-wallet.svg)](https://badge.fury.io/js/@sei-js%2Fsei-global-wallet)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

**Universal wallet connections using the EIP-6963 standard**

[GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/sei-global-wallet) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

> [!WARNING]
> **Temporary consumer security waiver:** Dynamic Global Wallet Client transitively pins vulnerable `axios` and `uuid` as of 4.96.3, the current floor.
> Dependency overrides are root-only in both npm and Bun; this package cannot propagate them to your application. Add the overrides below before installing, and drop them once your install resolves a Dynamic release that corrects those pins.

## Required consumer overrides

Dependency overrides are root-only; this package cannot propagate them to an application. npm and Bun require different policies.

Complete npm root overrides when the optional AA path is not enabled:
```json
{
	"overrides": {
		"axios": "1.18.0",
		"uuid": "11.1.1",
		"viem": {
			"ws": "8.21.0"
		}
	}
}
```

Complete Bun root overrides. The block is the same with or without the optional AA path, because Bun cannot do nested overrides and must not globally override `bn.js` or `ws`:
```json
{
	"overrides": {
		"axios": "1.18.0",
		"uuid": "11.1.1"
	}
}
```

The Axios and UUID overrides are temporary until Dynamic updates its exact transitive pins:

- The high-severity Axios issue is in the Node HTTP adapter and requires a prerequisite prototype-pollution/interceptor pattern. Browser wallet paths do not use that adapter, which reduces exploitability but does not make the vulnerable install acceptable.
- The UUID issue affects the v3, v5, and v6 buffer APIs. Dynamic's observed call sites use UUID v4, which reduces exploitability but does not clear the audit finding.

Applications using the optional `./zerodev` / Dynamic account-abstraction path must also replace the vulnerable exact `bn.js@4.11.6` copies used by `ethjs-unit` and `number-to-bn`. The complete npm root override block is:
```json
{
	"overrides": {
		"axios": "1.18.0",
		"ethjs-unit": {
			"bn.js": "4.12.5"
		},
		"number-to-bn": {
			"bn.js": "4.12.5"
		},
		"uuid": "11.1.1",
		"viem": {
			"ws": "8.21.0"
		}
	}
}
```

Bun 1.3.14 does not support nested overrides. Do **not** globally override `bn.js` or `ws`: Solana/borsh require bn5 while Jayson requires ws7. Bun's complete root override block is therefore the same with or without the optional AA path.

For npm, scoped `bn.js@4.12.5` stays on the legacy dependencies' expected major while Solana resolves `bn.js@5.2.5`. Scoped `ws@8.21.0` patches Viem's ws8 subtree while Jayson resolves `ws@7.5.13` from its `^7.5.10` range. The result is audit-clean.

The verifier builds its browser consumer against `viem@2.45.3`, because the previously tested 2.55.19 pulls Ox Tempo's `node:worker_threads` path into Vite resolution while 2.45.3 predates it. That is a property of the verifier's own bundle, not a constraint on applications: the published `viem` peer range stays `^2.7.12`. If your bundler externalizes `node:worker_threads` on a newer Viem, configure it in your application rather than downgrading.

For Bun, scoped overrides are unavailable. The selected waiver therefore accepts exactly these unresolved optional-AA advisories while preserving compatible majors:

- `GHSA-378v-28hj-76wf` on `bn.js@4.11.6` — moderate, CVSS 5.3.
- `GHSA-58qx-3vcg-4xpx` on Viem's `ws@8.18.3` — moderate, CVSS 4.4.
- `GHSA-96hv-2xvq-fx4p` on Viem's `ws@8.18.3` — high, CVSS 7.5.

Jayson remains on `ws@7.5.13`; globally forcing ws8 would violate that major contract. The verifier fails on any advisory outside this set, and reports rather than fails when one of them stops being reported, so an upstream fix or a withdrawn advisory never turns an unrelated pull request red.

## Quick start

```bash
npm install @sei-js/sei-global-wallet
```

Then import the side-effect entrypoint to register with EIP-6963:

```javascript
import '@sei-js/sei-global-wallet/eip6963';
```

This single import enables Sei Global Wallet across all compatible wallet libraries (RainbowKit, ConnectKit, Web3-React, Wagmi, etc.).

The entrypoint dispatches the required initial `eip6963:announceProvider` event and re-announces for every `eip6963:requestProvider` event. It is safe to import during SSR; registration occurs only in a browser.

## Entrypoints

- `@sei-js/sei-global-wallet` exports the configured wallet client and Dynamic wallet features.
- `@sei-js/sei-global-wallet/eip6963` registers the EIP-6963 provider and exports registration, cleanup, and stable provider-info helpers.
- `@sei-js/sei-global-wallet/ethereum` exports `createEIP1193Provider`.
- `@sei-js/sei-global-wallet/solana` registers the wallet-standard provider and exports `createSolanaWallet` and `registerSolanaStandard`.
- `@sei-js/sei-global-wallet/zerodev` exports `createKernelClient`.

All entrypoints are ESM-only. Consumers do not need Vite, esbuild, or other bundler shims.

### Globals installed on import

Dynamic 4.x reads Node-style globals, so importing any entrypoint of this package defines them on `globalThis` when they are absent:

- `globalThis.global`, aliased to `globalThis`.
- `globalThis.process`, set to a copy of the `process/browser.js` shim with `env.NODE_ENV` set to `production` (the `process/browser.js` module singleton is left unchanged).

Both are `configurable` and `writable`, and neither is installed when the consumer or runtime already defines it. `NODE_ENV` is set because the browser shim ships an empty `env`, and libraries that branch on `process.env.NODE_ENV !== 'production'` would otherwise take their development path inside a production bundle. These are true globals, so every library loaded afterwards observes them; if your application needs different values, define `global` and `process` before importing this package and they will be left alone.

## Optional peer versions

Install only the peers needed by the subpaths your application uses. The declared ranges stay deliberately wide, because an optional peer still fails `npm install` with `ERESOLVE` once your application has the package at a version outside the range. The **verified** column is Dynamic 4.96.3's own peer contract, which is the set this package's release checks run against.

| Peer | Declared range | Verified against | Needed by |
| --- | --- | --- | --- |
| `viem` | `^2.7.12` | `2.45.3` | `./zerodev`, Dynamic AA |
| `@dynamic-labs/ethereum-aa` | `^4.15.0` | `4.96.3` | `./zerodev` |
| `@zerodev/sdk` | `^5.4.36` | `5.5.7` | `./zerodev` |
| `@solana/web3.js` | `^1.92.1` | `1.98.1` | `./solana` |
| `@solana/wallet-standard-features` | `^1.2.0` | `^1.2.0` | `./solana` |
| `@wallet-standard/base` | `^1.0.1` | `^1.0.1` | `./solana` |
| `@wallet-standard/features` | `^1.0.3` | `^1.0.3` | `./solana` |
| `@wallet-standard/wallet` | `^1.1.0` | `^1.1.0` | `./solana` |

> [!NOTE]
> Dynamic 4.96.3 pins several of these exactly for itself, so a version outside the verified column can still be rejected by Dynamic's own peer contract during install, and is not covered by this package's checks. Prefer the verified versions; the wide ranges exist so that upgrading this package never breaks an install on its own.
>
> Dynamic also declares an optional `zksync-sso@0.2.0` peer for its zkSync path. This package does not redeclare it, so npm surfaces that requirement from Dynamic directly.

Two dependencies exist for transitive resolution rather than for this package's own source, so neither is removable despite nothing here importing them:

- `@wallet-standard/wallet`, because Dynamic's `./solana` module imports it, so `@sei-js/sei-global-wallet/solana` needs it present at runtime.
- `events`, because `@zerodev/sdk` imports the bare `events` specifier. Bundling the `./zerodev` path for the browser fails with `Could not resolve "events"` unless that polyfill is in the tree. This only helps hoisted layouts (npm, Bun). Under pnpm's default isolated `node_modules` or Yarn PnP, `events` installed for `@sei-js/sei-global-wallet` is not on `@zerodev/sdk`'s resolution path, so those users still need a bundler alias or an application-level `events` dependency.

The root, `./eip6963`, and `./ethereum` entrypoints need no optional peer at all, including for type resolution. The release verifier typechecks them with `skipLibCheck: false` in a consumer that installs nothing but this package, so a published declaration that referenced a type from an uninstalled peer would fail the check.

`@dynamic-labs/global-wallet-client` is a `^4.96.3` dependency rather than an exact pin, so applications inherit Dynamic's transitive fixes without waiting for a release here. This repository's lockfile pins the exact version it tests.

A full Bun lockfile regeneration showed that the previous isolated Dynamic 4.96.1 subtree beneath `@dynamic-labs-wallet/browser-wallet-client@1.0.92` was stale: its `^4.81.0` ranges resolve compatibly without it. The verifier now asserts that no `@dynamic-labs/*` package resolves to more than one version, in npm and Bun graphs and in browser bundles, which stays meaningful across Dynamic upgrades.

## Brand asset

The EIP-6963 and wallet-standard icon is an exact, unrecolored data-URI encoding of the square black
[official Sei mark](https://github.com/sei-protocol/sei-docs/blob/8710d6078058bdf67ec704b346f75ee9883e25ea/assets/brand/logo/sei-mark.svg)
from the [Sei brand kit](https://brand.sei.io/). Its proportions, paths, and `#000000` fill are unchanged.
The pinned source includes its terminal newline and has SHA-256 `e288cd08b510afbc19f1ea85c990397de2cad2077459a6833d64e26f86b761fa`.

## Release verification

The dedicated `Sei Global Wallet Consumer Smoke` workflow runs on wallet-related paths for pull requests and for pushes to `main` (so the publishing commit is gated too), daily on a schedule to catch registry and advisory drift, and on demand with `workflow_dispatch`. It executes `bun run test:sei-global-wallet-release`, including an audit-clean scoped npm consumer, a waiver-aware Bun consumer, declarations that resolve with no optional peer installed, native and bundled edge-like SSR, real local ZeroDev provider operations in esbuild/Vite, dependency graphs, and package contents. Regular package tests remain deterministic and do not perform clean consumer installs.

`SEI_GLOBAL_WALLET_FAST_CHECK=1` shortens the local loop by skipping the two clean npm consumers and the entire Bun consumer path, so a green run under that flag covers neither the audit waiver nor Bun. Release verification must run without it, which is what CI does.

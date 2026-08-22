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
> **Temporary consumer security waiver:** Dynamic Global Wallet Client 4.96.3 transitively pins vulnerable `axios@1.16.0` and `uuid@11.1.0`.
> Dependency overrides are root-only in both npm and Bun; this package cannot propagate them to your application. Add the overrides below before installing.

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

Complete Bun root overrides when the optional AA path is not enabled:
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

Bun 1.3.14 does not support nested overrides. Do **not** globally override `bn.js` or `ws`: Solana/borsh require bn5 while Jayson requires ws7. Bun AA consumers use the same complete safe root block shown above for Bun:
```json
{
	"overrides": {
		"axios": "1.18.0",
		"uuid": "11.1.1"
	}
}
```

For npm, scoped `bn.js@4.12.5` stays on the legacy dependencies' expected major while Solana resolves `bn.js@5.2.5`. Scoped `ws@8.21.0` patches Viem's ws8 subtree while Jayson resolves `ws@7.5.13` from its `^7.5.10` range. The result is audit-clean.

The browser path is temporarily pinned to `viem@2.45.3`: the previously tested 2.55.19 pulls Ox Tempo's `node:worker_threads` path into Vite resolution, while 2.45.3 predates that path.

For Bun, scoped overrides are unavailable. The selected waiver therefore accepts exactly these unresolved optional-AA advisories while preserving compatible majors:

- `GHSA-378v-28hj-76wf` on `bn.js@4.11.6` — moderate, CVSS 5.3.
- `GHSA-58qx-3vcg-4xpx` on Viem's `ws@8.18.3` — moderate, CVSS 4.4.
- `GHSA-96hv-2xvq-fx4p` on Viem's `ws@8.18.3` — high, CVSS 7.5.

Jayson remains on `ws@7.5.13`; globally forcing ws8 would violate that major contract. The verifier rejects every advisory outside this exact Bun set.

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

All entrypoints are ESM-only. The package installs missing `global` and `process` aliases before loading Dynamic code in browsers and edge-like SSR runtimes, while preserving consumer-defined values. Consumers do not need Vite, esbuild, or other bundler shims.

## Optional peer versions

The package mirrors Dynamic 4.96.3's optional peer contract. Install only the peers needed by the subpaths your application uses:

- `@dynamic-labs/ethereum-aa@4.96.3`
- `@solana/web3.js@1.98.1`
- `@solana/wallet-standard-features@^1.2.0`
- `@wallet-standard/base@^1.0.1`
- `@wallet-standard/features@^1.0.3`
- `@wallet-standard/wallet@^1.1.0`
- `@zerodev/sdk@5.5.7`
- `viem@2.45.3`
- `zksync-sso@0.2.0`

Dynamic's direct wallet and AA packages resolve to 4.96.3. A full Bun lockfile regeneration showed that the previous isolated Dynamic 4.96.1 subtree beneath `@dynamic-labs-wallet/browser-wallet-client@1.0.92` was stale: its `^4.81.0` ranges resolve compatibly without 4.96.1. Clean npm and Bun graphs now contain no Dynamic 4.96.1 packages, and browser metafile checks reject their return as direct runtime code.

## Brand asset

The EIP-6963 and wallet-standard icon is an exact, unrecolored data-URI encoding of the square black
[official Sei mark](https://github.com/sei-protocol/sei-docs/blob/8710d6078058bdf67ec704b346f75ee9883e25ea/assets/brand/logo/sei-mark.svg)
from the [Sei brand kit](https://brand.sei.io/). Its proportions, paths, and `#000000` fill are unchanged.
The pinned source includes its terminal newline and has SHA-256 `e288cd08b510afbc19f1ea85c990397de2cad2077459a6833d64e26f86b761fa`.

## Release verification

The dedicated `Sei Global Wallet Consumer Smoke` workflow runs on wallet-related pull-request paths and can be started manually with `workflow_dispatch` before release. It executes `bun run test:sei-global-wallet-release`, including an audit-clean scoped npm consumer, a waiver-aware Bun consumer, native and bundled edge-like SSR, real local ZeroDev provider operations in esbuild/Vite, dependency graphs, and package contents. Its output names the exact accepted Bun set: `GHSA-378v-28hj-76wf`, `GHSA-58qx-3vcg-4xpx`, and `GHSA-96hv-2xvq-fx4p`; the verifier fails if Bun reports any new, missing, or different advisory. Regular package tests remain deterministic and do not perform clean consumer installs.

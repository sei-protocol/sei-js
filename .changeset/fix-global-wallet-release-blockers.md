---
"@sei-js/sei-global-wallet": patch
---

Fix the Sei Global Wallet browser, peer-dependency, EIP-6963, and packaging release blockers.

- Pin `@dynamic-labs/global-wallet-client` to the audited 4.96.3 release and mirror its optional peer contract, including exact Dynamic AA, Solana web3, ZeroDev, and zkSync SSO versions plus the compatible Viem floor and wallet-standard ranges.
- Initialize Dynamic's required globals before loading its modules in browsers and edge-like SSR runtimes, without consumer bundler configuration and without replacing consumer-defined values.
- Dispatch the initial EIP-6963 announcement, re-announce on every provider request, expose cleanup helpers, use stable UUIDv4 provider metadata, and replace the non-square wordmark with the unmodified square black mark from the official Sei brand kit.
- Verify real npm and Bun consumers, all five entrypoints, EIP-6963 and Solana registration, ZeroDev resolution, esbuild and Vite browser runtimes, SSR imports, types, audits, and package contents.

> [!WARNING]
> This release has a temporary consumer security waiver. Dynamic 4.96.3 transitively pins vulnerable `axios@1.16.0` and `uuid@11.1.0`, and dependency overrides in a library do not propagate.

Complete npm root overrides without optional AA:

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

Complete Bun root overrides without optional AA:

```json
{
	"overrides": {
		"axios": "1.18.0",
		"uuid": "11.1.1"
	}
}
```

The high-severity Axios issue applies to the Node HTTP adapter and requires a prerequisite prototype-pollution/interceptor pattern; browser wallet paths avoid that adapter. The UUID issue applies to v3/v5/v6 buffer APIs, while Dynamic's observed usage is v4. Those constraints reduce exploitability but do not remove the audit findings or the root-override requirement.

Consumers enabling the optional ZeroDev / Dynamic AA path should use npm's package-scoped overrides to replace the exact vulnerable `bn.js@4.11.6` copies beneath `ethjs-unit` and `number-to-bn` with major-compatible `bn.js@4.12.5` (the GHSA fix floor is 4.12.3). This coexists with Solana's `bn.js@5.2.5` and produces a clean npm audit.

Bun 1.3.14 does not support those scoped overrides. Bun consumers must not globally downgrade bn.js or upgrade ws because that breaks Solana/borsh bn5 or Jayson ws7 contracts. With the safe Axios/UUID overrides, a Bun consumer enabling AA retains the documented bn.js and Viem ws advisories as part of this explicit waiver.

The ZeroDev browser path pins `viem@2.45.3` to avoid the `node:worker_threads` Vite externalization introduced by the previously tested Viem 2.55.19/Ox Tempo graph. npm scopes Viem's ws8 subtree to patched `ws@8.21.0` while preserving Jayson `ws@7.5.13` from its ws7 range. Bun preserves Viem `ws@8.18.3` and Jayson ws7 and accepts exactly GHSA-378v-28hj-76wf, GHSA-58qx-3vcg-4xpx, and GHSA-96hv-2xvq-fx4p. Browser checks invoke the released `./zerodev` export in both esbuild and Vite and reject worker externalization warnings.

Dynamic's direct wallet/AA graph is 4.96.3. Regenerating the Bun lockfile proved the previous nested Dynamic 4.96.1 logger/message-transport subtree was stale rather than required by `@dynamic-labs-wallet/browser-wallet-client@1.0.92`'s compatible ranges. Clean npm/Bun graph and browser-metafile checks now reject any remaining Dynamic 4.96.1 runtime.

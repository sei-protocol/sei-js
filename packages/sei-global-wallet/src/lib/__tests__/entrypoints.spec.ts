import { describe, expect, it } from 'bun:test';
import packageJson from '../../../package.json';

describe('public entrypoints', () => {
	it('imports the root and every non-AA subpath during SSR', async () => {
		const [root, eip6963, ethereum, solana] = await Promise.all([
			import('../../index'),
			import('../../eip6963'),
			import('../../ethereum'),
			import('../../solana')
		]);

		expect(root.default).toBe(root.Wallet);
		expect(typeof root.connect).toBe('function');
		expect(typeof eip6963.registerEIP6963Provider).toBe('function');
		expect(eip6963.eip6963ProviderInfo.name).toBe('Sei Global Wallet');
		expect(typeof ethereum.createEIP1193Provider).toBe('function');
		expect(typeof solana.createSolanaWallet).toBe('function');
		expect(typeof solana.registerSolanaStandard).toBe('function');
	});

	it('keeps the optional zerodev export for consumers that install Dynamic AA', () => {
		expect(packageJson.exports['./zerodev']).toEqual({
			types: './dist/zerodev.d.ts',
			import: './dist/zerodev.js',
			default: './dist/zerodev.js'
		});
		expect(packageJson.peerDependenciesMeta['@dynamic-labs/ethereum-aa']).toEqual({ optional: true });
	});

	// Optional peers only stop erroring when absent; once an application has one,
	// a narrower range than 1.4.1 published fails its install with ERESOLVE. Any
	// change here must stay a superset of these ranges.
	it('keeps every optional peer range compatible with the 1.4.1 contract', () => {
		expect(packageJson.peerDependencies).toEqual({
			'@dynamic-labs/ethereum-aa': '^4.15.0',
			'@solana/wallet-standard-features': '^1.2.0',
			'@solana/web3.js': '^1.92.1',
			'@wallet-standard/base': '^1.0.1',
			'@wallet-standard/features': '^1.0.3',
			'@wallet-standard/wallet': '^1.1.0',
			'@zerodev/sdk': '^5.4.36',
			viem: '^2.7.12'
		});
	});

	// Dynamic's ./solana module imports @wallet-standard/wallet directly, so the
	// solana entrypoint needs it installed rather than merely declared as a peer.
	it('keeps @wallet-standard/wallet installed for the solana entrypoint', () => {
		expect(packageJson.dependencies['@wallet-standard/wallet']).toBe('^1.1.0');
		expect(packageJson.devDependencies['@wallet-standard/wallet']).toBeUndefined();
	});

	// An exact pin would make every Dynamic transitive fix wait on a release here.
	it('declares the Dynamic dependency as a range', () => {
		expect(packageJson.dependencies['@dynamic-labs/global-wallet-client']).toBe('^4.96.3');
	});
});

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
		expect(packageJson.peerDependencies['@dynamic-labs/ethereum-aa']).toBe('4.96.3');
		expect(packageJson.peerDependenciesMeta['@dynamic-labs/ethereum-aa']).toEqual({ optional: true });
	});
});

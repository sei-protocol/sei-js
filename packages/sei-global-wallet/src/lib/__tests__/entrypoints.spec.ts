import { describe, expect, it } from 'bun:test';

describe('public entrypoints', () => {
	it('imports the root and every subpath during SSR', async () => {
		const [root, eip6963, ethereum, solana, zerodev] = await Promise.all([
			import('../../index'),
			import('../../eip6963'),
			import('../../ethereum'),
			import('../../solana'),
			import('../../zerodev')
		]);

		expect(root.default).toBe(root.Wallet);
		expect(typeof root.connect).toBe('function');
		expect(typeof eip6963.registerEIP6963Provider).toBe('function');
		expect(eip6963.eip6963ProviderInfo.name).toBe('Sei Global Wallet');
		expect(typeof ethereum.createEIP1193Provider).toBe('function');
		expect(typeof solana.createSolanaWallet).toBe('function');
		expect(typeof solana.registerSolanaStandard).toBe('function');
		expect(typeof zerodev.createKernelClient).toBe('function');
	});
});

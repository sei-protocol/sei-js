import { Wallet, WALLETS } from '../index';

describe('Wallet Extensions Configuration Tests', () => {
	it('contains an array of wallet extensions', () => {
		expect(Array.isArray(WALLETS)).toBeTruthy();
		WALLETS.forEach((extension: Wallet) => {
			expect(typeof extension.name).toBe('string');
			expect(typeof extension.identifier).toBe('string');
			expect(typeof extension.icon).toBe('string');
			expect(typeof extension.url).toBe('string');
			expect(Array.isArray(extension.capabilities)).toBeTruthy();
			extension.capabilities.forEach((capability) => {
				expect(['native', 'evm']).toContain(capability);
			});
		});
	});

	it('contains specific wallet extension by identifier', () => {
		const identifierToCheck = 'compass'; // Example identifier
		const extension = WALLETS.find((ext) => ext.identifier === identifierToCheck);
		expect(extension).toBeDefined();
		if (extension) {
			expect(extension.name).toBe('Compass Wallet');
			expect(extension.url).toBe('https://compasswallet.io/');
			expect(extension.capabilities).toContain('native');
		}
	});
});

import { WALLETS } from '../../index';

describe('Wallet Extensions Configuration Tests', () => {
	it('contains an array of wallet extensions', () => {
		expect(Array.isArray(WALLETS)).toBeTruthy();
		for (const extension of WALLETS) {
			expect(typeof extension.name).toBe('string');
			expect(typeof extension.identifier).toBe('string');
			expect(typeof extension.icon).toBe('string');
			expect(typeof extension.url).toBe('string');
			expect(Array.isArray(extension.capabilities)).toBeTruthy();
			for (const capability of extension.capabilities) {
				expect(['native', 'evm']).toContain(capability);
			}
		}
	});

	it('contains only the current wallet identifiers', () => {
		expect(WALLETS.map(({ identifier }) => identifier)).toEqual(['metamask', 'keplr', 'coin98']);
	});

	it('contains the Keplr wallet metadata', () => {
		const identifierToCheck = 'keplr';
		const extension = WALLETS.find((ext) => ext.identifier === identifierToCheck);
		expect(extension).toBeDefined();
		if (extension) {
			expect(extension.name).toBe('Keplr Wallet');
			expect(extension.url).toBe('https://www.keplr.app');
			expect(extension.capabilities).toContain('native');
			expect(extension.capabilities).toContain('evm');
		}
	});
});

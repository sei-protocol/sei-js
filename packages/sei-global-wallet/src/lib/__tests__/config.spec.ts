import { config } from '../config';

describe('sei-global-wallet config', () => {
	// These values intentionally pin the published EIP-6963 identity.
	it('matches the published wallet identity', () => {
		expect(config.walletName).toBe('Sei Global Wallet');
		expect(config.walletUrl).toBe('https://global-wallet.sei.io');
		expect(config.environmentId).toBe('36b63d10-7ba6-49a3-9614-22f471b9283c');
		expect(config.eip6963.rdns).toBe('io.sei.global-wallet');
	});

	it('walletIcon is an SVG data URI', () => {
		expect(typeof config.walletIcon).toBe('string');
		expect(config.walletIcon).toMatch(/^data:image\/svg\+xml;base64,.+/);
	});
});

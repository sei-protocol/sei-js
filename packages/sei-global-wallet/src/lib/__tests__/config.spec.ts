import { config } from '../config';

describe('sei-global-wallet config', () => {
	it('matches the published wallet identity', () => {
		expect(config.walletName).toBe('Sei Global Wallet');
		expect(config.walletUrl).toBe('https://global-wallet.sei.io');
		expect(config.environmentId).toBe('36b63d10-7ba6-49a3-9614-22f471b9283c');
		expect(config.eip6963.rdns).toBe('io.sei.global-wallet');
	});

	it('walletIcon is an SVG data URI', () => {
		if (typeof config.walletIcon !== 'string') {
			throw new TypeError('Expected walletIcon to be a string');
		}
		expect(config.walletIcon).toMatch(/^data:image\/svg\+xml;base64,.+/);
	});
});

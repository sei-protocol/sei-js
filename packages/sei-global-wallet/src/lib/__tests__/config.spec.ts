import { config } from '../config';

describe('sei-global-wallet config', () => {
	it('walletName is a non-empty string', () => {
		expect(typeof config.walletName).toBe('string');
		expect(config.walletName.trim().length).toBeGreaterThan(0);
	});

	it('walletUrl starts with https://', () => {
		expect(typeof config.walletUrl).toBe('string');
		expect(config.walletUrl).toMatch(/^https:\/\//);
	});

	it('environmentId is a non-empty string', () => {
		expect(typeof config.environmentId).toBe('string');
		expect(config.environmentId.trim().length).toBeGreaterThan(0);
	});

	it('eip6963.rdns matches the io.sei.* pattern', () => {
		expect(typeof config.eip6963.rdns).toBe('string');
		expect(config.eip6963.rdns).toMatch(/^io\.sei\./);
	});

	it('walletIcon is an SVG data URI', () => {
		expect(typeof config.walletIcon).toBe('string');
		if (typeof config.walletIcon !== 'string') {
			throw new TypeError('Expected walletIcon to be a string');
		}
		expect(config.walletIcon).toMatch(/^data:image\/svg\+xml;base64,.+/);
	});
});

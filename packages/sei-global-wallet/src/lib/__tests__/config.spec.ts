import { describe, expect, it } from 'bun:test';
import { createHash } from 'node:crypto';
import { config } from '../config';

describe('sei-global-wallet config', () => {
	// These values intentionally pin the published EIP-6963 identity.
	it('matches the published wallet identity', () => {
		expect(config.walletName).toBe('Sei Global Wallet');
		expect(config.walletUrl).toBe('https://global-wallet.sei.io');
		expect(config.environmentId).toBe('36b63d10-7ba6-49a3-9614-22f471b9283c');
		expect(config.eip6963.rdns).toBe('io.sei.global-wallet');
		expect(config.eip6963.uuid).toBe('36b63d10-7ba6-49a3-9614-22f471b9283c');
		expect(config.eip6963.uuid).toBe(config.environmentId);
		expect(config.eip6963.uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
	});

	it('uses the unmodified square official Sei mark', () => {
		expect(typeof config.walletIcon).toBe('string');
		expect(config.walletIcon).toMatch(/^data:image\/svg\+xml;base64,.+/);

		const bytes = Buffer.from(config.walletIcon.slice(config.walletIcon.indexOf(',') + 1), 'base64');
		const svg = bytes.toString('utf8');
		expect(svg.startsWith('<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 23.9965 23.9965" fill="#000000">')).toBe(true);
		expect(svg).toContain('<title>Sei mark</title>');
		expect(svg.endsWith('</svg>\n')).toBe(true);
		expect(svg).not.toContain('#9E1F19');
		expect(createHash('sha256').update(bytes).digest('hex')).toBe('e288cd08b510afbc19f1ea85c990397de2cad2077459a6833d64e26f86b761fa');
	});
});

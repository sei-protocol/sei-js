import type { Network } from '../../index';
import { type DenomUnit, TOKEN_LIST } from '../index';

describe('AssetList Tests', () => {
	it('should have the correct structure for each network', () => {
		const networks: Network[] = ['pacific-1', 'atlantic-2', 'arctic-1'];
		for (const network of networks) {
			expect(Array.isArray(TOKEN_LIST[network])).toBeTruthy();
			for (const asset of TOKEN_LIST[network]) {
				expect(asset).toHaveProperty('name');
				expect(asset).toHaveProperty('description');
				expect(asset).toHaveProperty('symbol');
				expect(asset).toHaveProperty('base');
				expect(asset).toHaveProperty('display');
				expect(asset).toHaveProperty('denom_units');
				expect(Array.isArray(asset.denom_units)).toBeTruthy();
				for (const denomUnit of asset.denom_units) {
					expect(denomUnit).toHaveProperty('denom');
					expect(denomUnit).toHaveProperty('exponent');
					expect(typeof denomUnit.denom).toBe('string');
					expect(typeof denomUnit.exponent).toBe('number');
				}
				if (asset.images) {
					if (asset.images.png) expect(typeof asset.images.png).toBe('string');
					if (asset.images.svg) expect(typeof asset.images.svg).toBe('string');
				}
				if (asset.coingecko_id) expect(typeof asset.coingecko_id).toBe('string');
				if (asset.type_token) expect(typeof asset.type_token).toBe('string');
			}
		}
	});
});

it('should contain the "sei" asset with correct properties in each network', () => {
	for (const network of Object.keys(TOKEN_LIST)) {
		const seiAsset = TOKEN_LIST[network as Network].find((asset) => asset.symbol === 'SEI');
		expect(seiAsset).toBeDefined();
		expect(seiAsset?.name).toBe('Sei');
		expect(seiAsset?.description).toBe('The native token of Sei');
		expect(seiAsset?.base).toBe('usei');
		expect(seiAsset?.denom_units.some((unit: DenomUnit) => unit.denom === 'sei' && unit.exponent === 6)).toBeTruthy();
		if (seiAsset?.images) {
			expect(seiAsset.images.png).toMatch(/^https?:\/\/.+/);
		}
	}
});

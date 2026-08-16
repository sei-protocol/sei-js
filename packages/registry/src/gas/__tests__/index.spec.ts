import type { Network } from '../../index';
import { GAS_INFO } from '../index';

describe('GasInfo Tests', () => {
	// Check if GasInfo contains all expected networks
	it('contains all required networks', () => {
		const expectedNetworks: Network[] = ['pacific-1', 'atlantic-2'];
		expect(Object.keys(GAS_INFO).sort()).toEqual([...expectedNetworks].sort());

		for (const network of expectedNetworks) {
			expect(GAS_INFO).toHaveProperty(network);
		}
	});

	// Validate the structure of GasInfo for each network
	it('validates structure for each network', () => {
		for (const info of Object.values(GAS_INFO)) {
			expect(typeof info.denom).toBe('string');
			expect(typeof info.min_gas_price).toBe('number');
			expect(info).not.toHaveProperty('module_adjustments');
		}
	});

	it('contains the current minimum gas prices', () => {
		const pacific1 = GAS_INFO['pacific-1'];
		expect(pacific1.denom).toBe('usei');
		expect(pacific1.min_gas_price).toBe(0.02);
		expect(GAS_INFO['atlantic-2'].min_gas_price).toBe(0.08);
	});
});

import type { Network } from '../../index';
import { type ChainGasInfo, GAS_INFO, type ModuleAdjustments } from '../index';

describe('GasInfo Tests', () => {
	// Check if GasInfo contains all expected networks
	it('contains all required networks', () => {
		const expectedNetworks: Network[] = ['pacific-1', 'atlantic-2', 'arctic-1'];
		for (const network of expectedNetworks) {
			expect(GAS_INFO).toHaveProperty(network);
		}
	});

	// Validate the structure of GasInfo for each network
	it('validates structure for each network', () => {
		for (const info of Object.values(GAS_INFO)) {
			expect(typeof info.denom).toBe('string');
			expect(typeof info.min_gas_price).toBe('number');
			expect(info).toHaveProperty('module_adjustments');
			expect(info.module_adjustments).toHaveProperty('dex');

			const { dex }: { dex: ModuleAdjustments['dex'] } = info.module_adjustments;
			expect(typeof dex.sudo_gas_price).toBe('number');
			expect(typeof dex.order_placement).toBe('number');
			expect(typeof dex.order_cancellation).toBe('number');
		}
	});

	// Example: Check specific values for a network (e.g., 'pacific-1')
	it('checks specific values for pacific-1', () => {
		const pacific1 = GAS_INFO['pacific-1'];
		expect(pacific1.denom).toBe('usei');
		expect(pacific1.min_gas_price).toBeGreaterThanOrEqual(0.01);
		expect(pacific1.module_adjustments.dex.sudo_gas_price).toBeLessThanOrEqual(0.02);
	});
});

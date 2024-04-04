import { Networks } from '../index';

describe('Networks configuration', () => {
	it('should contain configurations for all expected Sei networks', () => {
		const expectedNetworkIds = ['pacific-1', 'atlantic-2', 'arctic-1'];

		expectedNetworkIds.forEach((id) => {
			expect(Networks).toHaveProperty(id);
			const networkConfig = Networks[id];
			expect(networkConfig).toBeDefined();
			expect(networkConfig.chainId).toBe(id);
		});
	});

	it('should contain valid RPC endpoints for each network', () => {
		Object.values(Networks).forEach((networkConfig) => {
			expect(networkConfig.rpc).toBeDefined();
			expect(Array.isArray(networkConfig.rpc)).toBeTruthy();
			networkConfig.rpc.forEach((endpoint) => {
				expect(endpoint).toHaveProperty('provider');
				expect(typeof endpoint.provider).toBe('string');
				expect(endpoint).toHaveProperty('url');
				expect(typeof endpoint.url).toBe('string');
			});
		});
	});
});

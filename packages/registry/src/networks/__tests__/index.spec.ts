import { NETWORKS } from '../index';

describe('Networks configuration', () => {
	it('should contain configurations for all expected Sei networks', () => {
		const expectedNetworkIds = ['pacific-1', 'atlantic-2', 'arctic-1'];

		for (const id of expectedNetworkIds) {
			expect(NETWORKS).toHaveProperty(id);
			const networkConfig = NETWORKS[id];
			expect(networkConfig).toBeDefined();
			expect(networkConfig.chainId).toBe(id);
		}
	});

	it('should contain valid RPC endpoints for each network', () => {
		for (const networkConfig of Object.values(NETWORKS)) {
			expect(networkConfig.rpc).toBeDefined();
			expect(Array.isArray(networkConfig.rpc)).toBeTruthy();
			for (const endpoint of networkConfig.rpc) {
				expect(endpoint).toHaveProperty('provider');
				expect(typeof endpoint.provider).toBe('string');
				expect(endpoint).toHaveProperty('url');
				expect(typeof endpoint.url).toBe('string');
			}
		}
	});

	it('should have RPC URLs starting with https:// or wss://', () => {
		for (const [networkId, networkConfig] of Object.entries(NETWORKS)) {
			for (const endpoint of networkConfig.rpc) {
				const url = endpoint.url;
				const isValid = url.startsWith('https://') || url.startsWith('wss://');
				expect(isValid).toBe(true);
				if (!isValid) {
					throw new Error(`Network ${networkId} has invalid RPC URL: ${url}`);
				}
			}
		}
	});

	it('should have a non-empty provider name for each RPC endpoint', () => {
		for (const networkConfig of Object.values(NETWORKS)) {
			for (const endpoint of networkConfig.rpc) {
				expect(endpoint.provider.trim().length).toBeGreaterThan(0);
			}
		}
	});
});

import { NETWORKS } from '../index';

describe('Networks configuration', () => {
	it('should contain configurations for all expected Sei networks', () => {
		const expectedNetworkIds = ['pacific-1', 'atlantic-2'];

		expect(Object.keys(NETWORKS).sort()).toEqual([...expectedNetworkIds].sort());

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

	it('contains the current RPC, EVM, and explorer metadata', () => {
		const mainnet = NETWORKS['pacific-1'];
		expect(mainnet.rpc.some(({ provider, url }) => provider === 'Rhino' && url === 'https://rpc.sei-apis.com')).toBeTrue();
		expect(mainnet.evm_rpc?.some(({ provider, url }) => provider === 'dRPC' && url === 'https://sei.drpc.org')).toBeTrue();
		expect(mainnet.evm_ws?.some(({ provider, url }) => provider === 'dRPC' && url === 'wss://sei.drpc.org')).toBeTrue();
		expect(mainnet.explorers?.some(({ name }) => name === 'Seistream')).toBeTrue();

		const testnet = NETWORKS['atlantic-2'];
		expect(testnet.rpc.some(({ provider, url }) => provider === 'Sei' && url === 'https://rpc.atlantic-2.seinetwork.io')).toBeTrue();
		expect(testnet.evm_rpc?.some(({ provider, url }) => provider === 'dRPC' && url === 'https://sei-testnet.drpc.org')).toBeTrue();
		expect(testnet.evm_ws?.some(({ provider, url }) => provider === 'dRPC' && url === 'wss://sei-testnet.drpc.org')).toBeTrue();
		expect(testnet.explorers?.some(({ name }) => name === 'Seiscan')).toBeTrue();
	});
});

import { ChainInfo } from '../index';

describe('ChainInfo Tests', () => {
	it('has the required properties with correct types', () => {
		expect(typeof ChainInfo.chain_name).toBe('string');
		expect(['mainnet', 'testnet', 'devnet']).toContain(ChainInfo.network_type);
		expect(typeof ChainInfo.chain_id).toBe('string');
		expect(typeof ChainInfo.daemon_name).toBe('string');
		expect(typeof ChainInfo.bech32_prefix).toBe('string');
		expect(Array.isArray(ChainInfo.key_algos)).toBeTruthy();
		expect(typeof ChainInfo.slip44).toBe('number');
		expect(typeof ChainInfo.fee_token).toBe('string');
		expect(Array.isArray(ChainInfo.supported_wallets)).toBeTruthy();
	});

	it("includes 'secp256k1' in key_algos", () => {
		expect(ChainInfo.key_algos).toContain('secp256k1');
	});
});

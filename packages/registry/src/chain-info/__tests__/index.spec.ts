import { CHAIN_INFO } from '../index';

describe('ChainInfo Tests', () => {
	it('has the required properties with correct types', () => {
		expect(typeof CHAIN_INFO.chain_name).toBe('string');
		expect(['mainnet', 'testnet', 'devnet']).toContain(CHAIN_INFO.network_type);
		expect(typeof CHAIN_INFO.chain_id).toBe('string');
		expect(typeof CHAIN_INFO.daemon_name).toBe('string');
		expect(typeof CHAIN_INFO.bech32_prefix).toBe('string');
		expect(Array.isArray(CHAIN_INFO.key_algos)).toBeTruthy();
		expect(typeof CHAIN_INFO.slip44).toBe('number');
		expect(typeof CHAIN_INFO.fee_token).toBe('string');
		expect(Array.isArray(CHAIN_INFO.supported_wallets)).toBeTruthy();
	});

	it("includes 'secp256k1' in key_algos", () => {
		expect(CHAIN_INFO.key_algos).toContain('secp256k1');
	});
});

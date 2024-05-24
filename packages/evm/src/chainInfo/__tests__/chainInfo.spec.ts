// config.test.ts
import { SEI_CHAIN_INFO } from '../chainInfo';

describe('arctic-1 tests', () => {
	test('CHAIN ID should be correct', () => {
		expect(SEI_CHAIN_INFO.devnet.chainId).toBe(713715);
	});

	test('EVM RPC should be correct', () => {
		expect(SEI_CHAIN_INFO.devnet.defaultRpc).toBe('https://evm-rpc-arctic-1.sei-apis.com');
	});
});

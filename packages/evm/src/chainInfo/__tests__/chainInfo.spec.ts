// config.test.ts
import { ARCTIC_1_DEFAULT_EVM_RPC, ARCTIC_1_EVM_CHAIN_ID } from '../chainInfo';

describe('arctic-1 tests', () => {
	test('CHAIN ID should be correct', () => {
		expect(ARCTIC_1_EVM_CHAIN_ID).toBe(713715);
	});

	test('EVM RPC should be correct', () => {
		expect(ARCTIC_1_DEFAULT_EVM_RPC).toBe('https://evm-rpc-arctic-1.sei-apis.com');
	});
});

// config.test.ts
import { SeiChainInfo } from '../chainInfo';

describe('arctic-1 tests', () => {
	test('CHAIN ID should be correct', () => {
		expect(SeiChainInfo.devnet.chainId).toBe(713715);
	});

	test('EVM RPC should be correct', () => {
		expect(SeiChainInfo.devnet.defaultRpc).toBe('https://evm-rpc-arctic-1.sei-apis.com');
	});
});

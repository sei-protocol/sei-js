import { getChainSuggest } from '../utils';

describe('getChainSuggest', () => {
	it('should return a chain config', async () => {
		const chainId = 'pacific-1';
		const restUrl = 'https://rest-url';
		const rpcUrl = 'https://rpc-url';
		expect(getChainSuggest({ chainId, restUrl, rpcUrl })).toEqual({
			chainId,
			chainName: 'Sei',
			rpc: rpcUrl,
			rest: restUrl,
			bip44: {
				coinType: 118
			},
			bech32Config: {
				bech32PrefixAccAddr: 'sei',
				bech32PrefixAccPub: `seipub`,
				bech32PrefixValAddr: `seivaloper`,
				bech32PrefixValPub: `seivaloperpub`,
				bech32PrefixConsAddr: `seivalcons`,
				bech32PrefixConsPub: `seivalconspub`
			},
			currencies: [
				{
					coinDenom: 'SEI',
					coinMinimalDenom: 'usei',
					coinDecimals: 6
				}
			],
			feeCurrencies: [
				{
					coinDenom: 'SEI',
					coinMinimalDenom: 'usei',
					coinDecimals: 6,
					gasPriceStep: { low: 0.1, average: 0.2, high: 0.3 }
				}
			],
			stakeCurrency: {
				coinDenom: 'SEI',
				coinMinimalDenom: 'usei',
				coinDecimals: 6
			},
			coinType: 118,
			features: ['stargate', 'ibc-transfer', 'cosmwasm']
		});
	});
});

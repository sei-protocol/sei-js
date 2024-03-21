import { getVerifiedSuggestChain } from '../keplrVerification';

describe('getVerifiedSuggestChain function', () => {
	it('should return the correct chain data for a given chainId', () => {
		const chainId = 'testchain';
		const expectedOutput = {
			chainId: 'testchain',
			chainName: 'Sei (testchain)',
			rpc: 'https://rpc.wallet.testchain.sei.io',
			rest: 'https://rest.wallet.testchain.sei.io',
			bip44: {
				coinType: 118
			},
			bech32Config: {
				bech32PrefixAccAddr: 'sei',
				bech32PrefixAccPub: 'seipub',
				bech32PrefixValAddr: 'seivaloper',
				bech32PrefixValPub: 'seivaloperpub',
				bech32PrefixConsAddr: 'seivalcons',
				bech32PrefixConsPub: 'seivalconspub'
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
					gasPriceStep: {
						low: 0.001,
						average: 0.02,
						high: 0.03
					}
				}
			],
			stakeCurrency: {
				coinDenom: 'SEI',
				coinMinimalDenom: 'usei',
				coinDecimals: 6
			},
			coinType: 118,
			features: ['stargate', 'ibc-transfer', 'cosmwasm']
		};

		expect(getVerifiedSuggestChain(chainId)).toEqual(expectedOutput);
	});
});

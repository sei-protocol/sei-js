import { ChainConfig } from './index';

/**
 * Creates a ChainConfig object for the given chainId using a standard template.
 * @param chainId The chainId of the chain to create
 * @returns A standard template ChainConfig object that can be used to interact with the given chain.
 * @category Wallets (Advanced)
 */
export const getVerifiedSuggestChain = (chainId: string): ChainConfig => ({
	chainId: chainId,
	chainName: `Sei (${chainId})`,
	rpc: `https://rpc.wallet.${chainId}.sei.io`,
	rest: `https://rest.wallet.${chainId}.sei.io`,
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
});

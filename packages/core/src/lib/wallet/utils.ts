import { ChainConfig, ChainInfo, Currency } from './types';

const DEFAULT_CHAIN_INFO = {
	chainName: 'Sei',
	chainId: 'pacific-1',
	restUrl: 'https://rest.wallet.pacific-1.sei.io/',
	rpcUrl: 'https://rpc.wallet.pacific-1.sei.io/',
	gasPriceStep: { low: 0.1, average: 0.2, high: 0.3 }
};

/**
 * Returns a default chain configuration object with overrides from the supplied ChainInfo and any additional currencies.
 * @param chainInfo A ChainInfo object. Fields from this object will override the default chain info.
 * @param currencies A list of Currency objects to add to the created chain configuration.
 * @returns A chain configuration object with overrides from ChainInfo and any additional currencies.
 */
export const getChainSuggest = (chainInfo: ChainInfo = {}, currencies: Currency[] = []): ChainConfig => {
	const prefix = 'sei';
	const { chainId, chainName, rpcUrl, restUrl, gasPriceStep } = {
		...DEFAULT_CHAIN_INFO,
		...chainInfo
	};

	return {
		chainId: chainId,
		chainName: chainName,
		rpc: rpcUrl,
		rest: restUrl,
		bip44: {
			coinType: 118
		},
		bech32Config: {
			bech32PrefixAccAddr: prefix,
			bech32PrefixAccPub: `${prefix}pub`,
			bech32PrefixValAddr: `${prefix}valoper`,
			bech32PrefixValPub: `${prefix}valoperpub`,
			bech32PrefixConsAddr: `${prefix}valcons`,
			bech32PrefixConsPub: `${prefix}valconspub`
		},
		currencies: [
			{
				coinDenom: 'SEI',
				coinMinimalDenom: 'usei',
				coinDecimals: 6
			},
			...currencies
		],
		feeCurrencies: [
			{
				coinDenom: 'SEI',
				coinMinimalDenom: 'usei',
				coinDecimals: 6,
				gasPriceStep
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
};

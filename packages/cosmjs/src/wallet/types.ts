/**
 * @category Interfaces
 */
type GasPriceStep = {
	low: number;
	average: number;
	high: number;
};

/**
 * @category Interfaces
 */
export type ChainInfo = {
	chainName?: string;
	chainId?: string;
	restUrl?: string;
	rpcUrl?: string;
	gasPriceStep?: GasPriceStep;
};

/**
 * @category Interfaces
 */
export type FeeCurrency = {
	coinDenom: string;
	coinMinimalDenom: string;
	coinDecimals: number;
	gasPriceStep: GasPriceStep;
};

/**
 * @category Interfaces
 */
export type Currency = {
	coinDenom: string;
	coinMinimalDenom: string;
	coinDecimals: number;
	coinGeckoId?: string;
	coinImageUrl?: string;
};

/**
 * @category Interfaces
 */
export type ChainConfig = {
	rpc: string;
	rest: string;
	chainId: string;
	chainName: string;
	stakeCurrency: Currency;
	walletUrlForStaking?: string;
	bip44: {
		coinType: number;
	};
	coinType: number;
	bech32Config: {
		bech32PrefixAccAddr: string;
		bech32PrefixAccPub: string;
		bech32PrefixValAddr: string;
		bech32PrefixValPub: string;
		bech32PrefixConsAddr: string;
		bech32PrefixConsPub: string;
	};
	currencies: Currency[];
	feeCurrencies: FeeCurrency[];
	features?: string[];
};

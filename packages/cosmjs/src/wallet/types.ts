import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { OfflineAminoSigner, StdSignature } from '@cosmjs/amino';

/**
 * @category Interfaces
 */
export interface SeiWallet {
	walletInfo: {
		windowKey: string;
		name: string;
		icon: string;
		website: string;
	};
	getOfflineSigner: (chainId: string) => Promise<OfflineSigner | undefined>;
	getOfflineSignerAmino: (chainId: string) => Promise<OfflineAminoSigner | undefined>;
	getAccounts: (chainId: string) => Promise<readonly AccountData[]>;
	connect: (chainId: string) => Promise<void>;
	disconnect: (chainId: string) => Promise<void>;
	suggestChain?: (config: ChainConfig) => Promise<void>;
	signArbitrary?: (chainId: string, signer: string, message: string) => Promise<StdSignature | undefined>;
	verifyArbitrary?: (chainId: string, signingAddress: string, data: string, signature: StdSignature) => Promise<boolean>;
	isMobileSupported: boolean;
}

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

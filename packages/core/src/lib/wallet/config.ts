import { ChainInfo, Currency, WalletWindowKey } from './types';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { StdSignature } from '@cosmjs/amino';

export interface SeiWallet {
	walletInfo: {
		windowKey: string;
		name: string;
		icon: string;
		website: string;
	};
	getOfflineSigner: (chainId: string) => Promise<OfflineSigner | undefined>;
	getAccounts: (chainId: string) => Promise<readonly AccountData[]>;
	connect: (chainId: string) => Promise<void>;
	disconnect: (chainId: string) => Promise<void>;
	suggestChain?: (chainId: string) => void;
	signArbitrary?: (chainId: string, signer: string, message: string) => Promise<StdSignature | undefined>;
}

export const FIN_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['fin']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['fin']?.enable(chainId),
	disconnect: async (chainId) => await window?.['fin']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['fin']?.getOfflineSignerAuto(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['fin']?.signArbitrary(chainId, signer, message),
	walletInfo: {
		windowKey: 'fin',
		name: 'Fin',
		website: 'https://chrome.google.com/webstore/detail/fin-wallet-for-sei/dbgnhckhnppddckangcjbkjnlddbjkna',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/fin.png'
	}
};

export const COMPASS_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['compass']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['compass']?.enable(chainId),
	disconnect: async (chainId) => await window?.['compass']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['compass']?.getOfflineSignerAuto(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['compass']?.signArbitrary(chainId, signer, message),
	walletInfo: {
		windowKey: 'compass',
		name: 'Compass',
		website: 'https://chrome.google.com/webstore/detail/compass-wallet/anokgmphncpekkhclmingpimjmcooifb',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/compass.png'
	}
};

export const KEPLR_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['keplr']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['keplr']?.enable(chainId),
	disconnect: async (chainId) => await window?.['keplr']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['keplr']?.getOfflineSignerAuto(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['keplr']?.signArbitrary(chainId, signer, message),
	walletInfo: {
		windowKey: 'keplr',
		name: 'Keplr',
		website: 'https://www.keplr.app/download',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/keplr.png'
	}
};

export const LEAP_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['leap']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['leap']?.enable(chainId),
	disconnect: async (chainId) => await window?.['leap']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['leap']?.getOfflineSignerAuto(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['leap']?.signArbitrary(chainId, signer, message),
	walletInfo: {
		windowKey: 'leap',
		name: 'Leap',
		website: 'https://www.leapwallet.io/download',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/leap.png'
	}
};

export const SUPPORTED_WALLETS: SeiWallet[] = [COMPASS_WALLET, FIN_WALLET, LEAP_WALLET, KEPLR_WALLET];

const DEFAULT_CHAIN_INFO: ChainInfo = {
	chainName: 'Sei Testnet',
	chainId: 'atlantic-2',
	restUrl: 'https://rest.atlantic-2.seinetwork.io',
	rpcUrl: 'https://rpc.atlantic-2.seinetwork.io',
	gasPriceStep: { low: 0.1, average: 0.2, high: 0.3 }
};

export const getChainSuggest = (chainInfo: ChainInfo = {}, currencies: Currency[] = []) => {
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

export const suggestChain = async (inputWallet: WalletWindowKey, chainInfo?: ChainInfo) => {
	if (typeof window === 'undefined' || !window) {
		throw new Error('Window is undefined.');
	}

	const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
	const walletProvider = window[windowKey];
	if (!walletProvider) {
		throw new Error(`Wallet ${inputWallet} is not installed.`);
	}

	const config = getChainSuggest(chainInfo);
	await walletProvider.experimentalSuggestChain(config);
};

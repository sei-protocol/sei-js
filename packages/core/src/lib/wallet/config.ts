import { ChainInfo, WalletWindowKey } from './types';
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

const DEFAULT_CHAIN_INFO = {
	chainName: 'Sei Testnet',
	chainId: 'atlantic-2',
	restUrl: 'https://rest.atlantic-2.seinetwork.io',
	rpcUrl: 'https://rpc.atlantic-2.seinetwork.io'
};

export const getChainSuggest = (chainInfo: ChainInfo = {}) => {
	const prefix = 'sei';
	const { chainId, chainName, rpcUrl, restUrl } = {
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
			{
				coinDenom: 'USDC',
				coinMinimalDenom: 'uusdc',
				coinDecimals: 6,
				coinGeckoId: 'usd-coin'
			},
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos'
			},
			{
				coinDenom: 'WETH',
				coinMinimalDenom: 'ibc/C2A89D98873BB55B62CE86700DFACA646EC80352E8D03CC6CF34DD44E46DC75D',
				coinDecimals: 18,
				coinGeckoId: 'weth'
			},
			{
				coinDenom: 'WBTC',
				coinMinimalDenom: 'ibc/42BCC21A2B784E813F8878739FD32B4AA2D0A68CAD94F4C88B9EA98609AB0CCD',
				coinDecimals: 8,
				coinGeckoId: 'bitcoin'
			},
			{
				coinDenom: 'aUSDC',
				coinMinimalDenom: 'ibc/6D45A5CD1AADE4B527E459025AC1A5AEF41AE99091EF3069F3FEAACAFCECCD21',
				coinDecimals: 6,
				coinGeckoId: 'usd-coin'
			},
			{
				coinDenom: 'UST2',
				coinMinimalDenom: 'factory/sei1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjqpeheyc/uust2',
				coinDecimals: 6
			},
			{
				coinDenom: 'uCeler',
				coinMinimalDenom: 'factory/sei174t9p63nzlmsycmd9x9zxx3ejq9lp2y9f69rp9/uceler',
				coinDecimals: 6
			}
		],
		feeCurrencies: [
			{
				coinDenom: 'SEI',
				coinMinimalDenom: 'usei',
				coinDecimals: 6
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

import { ChainConfig, ChainInfo, Currency, SeiWallet } from './types';

export const FIN_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['fin']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['fin']?.enable(chainId),
	disconnect: async (chainId) => await window?.['fin']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['fin']?.getOfflineSignerAuto(chainId),
	getOfflineSignerAmino: async (chainId) => window?.['fin']?.getOfflineSignerOnlyAmino(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['fin']?.signArbitrary(chainId, signer, message),
	verifyArbitrary: async (chainId, signingAddress, data, signature) => window?.['fin']?.verifyArbitrary(chainId, signingAddress, data, signature),
	walletInfo: {
		windowKey: 'fin',
		name: 'Fin',
		website: 'https://finwallet.com',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/fin.png'
	},
	isMobileSupported: false
};

export const COMPASS_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['compass']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['compass']?.enable(chainId),
	disconnect: async (chainId) => await window?.['compass']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['compass']?.getOfflineSignerAuto(chainId),
	getOfflineSignerAmino: async (chainId) => window?.['compass']?.getOfflineSignerOnlyAmino(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['compass']?.signArbitrary(chainId, signer, message),
	verifyArbitrary: async (chainId, signingAddress, data, signature) => window?.['compass']?.verifyArbitrary(chainId, signingAddress, data, signature),
	walletInfo: {
		windowKey: 'compass',
		name: 'Compass',
		website: 'https://chrome.google.com/webstore/detail/compass-wallet/anokgmphncpekkhclmingpimjmcooifb',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/compass.png'
	},
	isMobileSupported: true
};

export const KEPLR_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['keplr']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['keplr']?.enable(chainId),
	disconnect: async (chainId) => await window?.['keplr']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['keplr']?.getOfflineSignerAuto(chainId),
	getOfflineSignerAmino: async (chainId) => window?.['keplr']?.getOfflineSignerOnlyAmino(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['keplr']?.signArbitrary(chainId, signer, message),
	verifyArbitrary: async (chainId, signingAddress, data, signature) => window?.['keplr']?.verifyArbitrary(chainId, signingAddress, data, signature),
	suggestChain: async (config) => window?.['keplr']?.experimentalSuggestChain(config),
	walletInfo: {
		windowKey: 'keplr',
		name: 'Keplr',
		website: 'https://www.keplr.app/download',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/keplr.png'
	},
	isMobileSupported: false
};

export const LEAP_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['leap']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['leap']?.enable(chainId),
	disconnect: async (chainId) => await window?.['leap']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['leap']?.getOfflineSignerAuto(chainId),
	getOfflineSignerAmino: async (chainId) => window?.['leap']?.getOfflineSignerOnlyAmino(chainId),
	signArbitrary: async (chainId, signer, message) => window?.['leap']?.signArbitrary(chainId, signer, message),
	verifyArbitrary: async (chainId, signingAddress, data, signature) => window?.['leap']?.verifyArbitrary(chainId, signingAddress, data, signature),
	suggestChain: async (config) => window?.['leap']?.experimentalSuggestChain(config),
	walletInfo: {
		windowKey: 'leap',
		name: 'Leap',
		website: 'https://www.leapwallet.io/download',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/leap.png'
	},
	isMobileSupported: true
};

export const SUPPORTED_WALLETS: SeiWallet[] = [COMPASS_WALLET, FIN_WALLET, LEAP_WALLET, KEPLR_WALLET];

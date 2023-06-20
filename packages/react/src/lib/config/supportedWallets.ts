import { SeiWallet } from '../provider';

export const FIN_WALLET: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = await window?.['fin']?.getOfflineSignerAuto(chainId);
		return offlineSigner?.getAccounts() || [];
	},
	connect: async (chainId) => await window?.['fin']?.enable(chainId),
	disconnect: async (chainId) => await window?.['fin']?.disable(chainId),
	getOfflineSigner: async (chainId) => window?.['fin']?.getOfflineSignerAuto(chainId),
	signArbitrary: window?.['fin']?.signArbitrary,
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
	signArbitrary: window?.['compass']?.signArbitrary,
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
	signArbitrary: window?.['keplr']?.signArbitrary,
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
	signArbitrary: window?.['leap']?.signArbitrary,
	walletInfo: {
		windowKey: 'leap',
		name: 'Leap',
		website: 'https://www.leapwallet.io/download',
		icon: 'https://sei-js-assets.s3.us-west-2.amazonaws.com/leap.png'
	}
};

export const findWalletByWindowKey = (windowKey: string): SeiWallet | undefined => {
	switch (windowKey) {
		case 'compass':
			return COMPASS_WALLET;
		case 'leap':
			return LEAP_WALLET;
		case 'keplr':
			return KEPLR_WALLET;
		case 'fin':
			return FIN_WALLET;
		default:
			return undefined;
	}
};

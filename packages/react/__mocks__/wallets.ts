import { SeiWallet } from '@sei-js/core';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

export const createTestWallet = (offlineSigner?: DirectSecp256k1HdWallet): SeiWallet => {
	return {
		getAccounts: async (chainId) => {
			const offlineSigner = await window?.['customWallet']?.getOfflineSignerAuto(chainId);
			return offlineSigner?.getAccounts() || [];
		},
		connect: jest.fn(),
		disconnect: jest.fn(),
		getOfflineSigner: offlineSigner ? async (_chainId) => offlineSigner : jest.fn(),
		getOfflineSignerAmino: jest.fn(),
		signArbitrary: jest.fn(),
		verifyArbitrary: jest.fn(),
		suggestChain: jest.fn(),
		walletInfo: {
			windowKey: 'customWallet',
			name: 'Custom Wallet',
			website: 'https://www.example.com',
			icon: 'https://example.com/icon.png'
		},
		isMobileSupported: false
	};
};

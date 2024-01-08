import { SeiWallet, CosmJSOfflineSigner, getSnapEthereumProvider, verifyArbitrary } from '@sei-js/core';
import Buffer from 'buffer';

// @ts-ignore
if (typeof window !== 'undefined') window.Buffer = Buffer;

export const getMetaMaskSnapSeiWallet = (snapId: string): SeiWallet => {
	return {
		getAccounts: async (chainId) => {
			const offlineSigner = new CosmJSOfflineSigner(chainId, snapId);
			return offlineSigner.getAccounts();
		},
		connect: async (_: string) => {
			const provider = await getSnapEthereumProvider();
			const installedSnaps: any = await provider.request({ method: 'wallet_getSnaps' });
			if (!installedSnaps || !installedSnaps[snapId]) {
				await provider.request({
					method: 'wallet_requestSnaps',
					params: {
						[snapId]: {}
					}
				});
			}
		},
		disconnect: async (_: string) => {
			throw new Error('Not implemented');
		},
		getOfflineSigner: async (chainId) => {
			return new CosmJSOfflineSigner(chainId, snapId);
		},
		getOfflineSignerAmino: async (chainId) => {
			// This signer includes both signDirect and signAmino, so just return it
			return new CosmJSOfflineSigner(chainId, snapId);
		},
		signArbitrary: async (chainId, signer, message) => {
			const offlineSigner = new CosmJSOfflineSigner(chainId, snapId);
			return offlineSigner.signArbitrary(signer, message);
		},
		verifyArbitrary: async (_: string, signingAddress, data, signature) => {
			if (!signingAddress || !data) {
				throw new Error('Invalid params');
			}
			return await verifyArbitrary(signingAddress, data, signature);
		},
		walletInfo: {
			windowKey: 'ethereum',
			name: 'Sei Metamask Snap',
			website: 'https://metamask.io/',
			icon: 'https://github.com/MetaMask/brand-resources/raw/master/SVG/SVG_MetaMask_Icon_Color.svg'
		},
		isMobileSupported: true
	};
};

export const isLocalSnap = (snapId: string) => snapId.startsWith('local:');

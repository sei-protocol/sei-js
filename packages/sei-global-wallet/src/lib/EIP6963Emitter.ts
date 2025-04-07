import type { DataURIImage } from '@dynamic-labs/global-wallet-client';
import { announceEip6963Provider, createEIP1193Provider } from '@dynamic-labs/global-wallet-client/ethereum';
import { config } from './config';
import Wallet from './wallet';

export const EIP6963Emitter = () => {
	announceEip6963Provider({
		info: {
			icon: config.walletIcon as DataURIImage,
			uuid: config.environmentId,
			name: config.walletName,
			rdns: config.eip6963.rdns
		},
		provider: createEIP1193Provider(Wallet)
	});
};

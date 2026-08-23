import type { WalletIcon } from '@wallet-standard/base';
import { config } from './config.js';
import { createSolanaWallet, registerWallet } from './dynamicSolana.js';
import Wallet from './wallet.js';

let registeredWallet: ReturnType<typeof createSolanaWallet> | undefined;

export const registerSolanaStandard = () => {
	if (typeof window === 'undefined') return undefined;
	if (registeredWallet) return registeredWallet;

	const wallet = createSolanaWallet(
		{
			icon: config.walletIcon as WalletIcon,
			name: config.walletName
		},
		Wallet
	);
	registerWallet(wallet);
	registeredWallet = wallet;

	return wallet;
};

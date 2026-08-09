import { createSolanaWallet, registerWallet } from '@dynamic-labs/global-wallet-client/solana';
import type { WalletIcon } from '@wallet-standard/base';
import { config } from './config.js';
import Wallet from './wallet.js';

export const registerSolanaStandard = () => {
	registerWallet(
		createSolanaWallet(
			{
				icon: config.walletIcon as WalletIcon,
				name: config.walletName
			},
			Wallet
		)
	);
};

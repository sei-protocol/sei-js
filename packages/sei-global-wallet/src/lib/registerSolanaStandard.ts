import { createSolanaWallet, registerWallet } from '@dynamic-labs/global-wallet-client/solana';
import type { WalletIcon } from '@wallet-standard/base';
import { config } from './config';
import Wallet from './wallet';

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

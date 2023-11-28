import { SeiWallet } from '@sei-js/core';

export type WalletSelectModalProps = {
	wallets?: SeiWallet[];
	classNameOverrides?: {
		background?: string;
		card?: string;
	};
};

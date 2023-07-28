import { SeiWallet } from '@sei-js/core';

export type WalletConnectButtonProps = {
	buttonClassName?: string;
	wallets?: SeiWallet[];
	primaryColor?: string;
	secondaryColor?: string;
	backgroundColor?: string;
};

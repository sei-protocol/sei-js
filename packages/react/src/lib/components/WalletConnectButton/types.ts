import { SeiWallet } from '../../provider';

export type WalletConnectButtonProps = {
	buttonClassName?: string;
	wallets?: SeiWallet[];
	primaryColor?: string;
	secondaryColor?: string;
	backgroundColor?: string;
};

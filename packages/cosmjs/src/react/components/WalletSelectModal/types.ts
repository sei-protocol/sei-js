import { SeiWallet } from '../../../wallet';

export type WalletSelectModalProps = {
	wallets?: SeiWallet[];
	classNameOverrides?: {
		background?: string;
		card?: string;
	};
};

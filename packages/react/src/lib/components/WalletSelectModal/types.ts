import { SeiWallet } from '../../provider';

export type WalletSelectModalProps = {
	setShowConnectModal: (show: boolean) => void;
	wallets?: SeiWallet[];
};

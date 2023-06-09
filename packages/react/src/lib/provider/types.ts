import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ChainConfiguration } from '../types';
import { StdSignature } from '@cosmjs/amino';

export type WalletProvider = {
	chainId: string;
	restUrl: string;
	rpcUrl: string;
	connectionError?: string;
	setConnectionError: Dispatch<SetStateAction<string | undefined>>;
	accounts: readonly AccountData[];
	offlineSigner?: OfflineSigner;
	connectedWallet?: SeiWallet;
	targetWallet?: SeiWallet;
	setTargetWallet: Dispatch<SetStateAction<SeiWallet | undefined>>;
	showConnectModal?: boolean;
	setShowConnectModal: Dispatch<SetStateAction<boolean>>;
	connect: (walletKey: SeiWallet) => void;
	wallets: SeiWallet[];
	disconnect: () => void;
};

export type SupportedWalletInput = 'compass' | 'leap' | 'fin' | 'keplr' | SeiWallet;

export interface SeiWallet {
	walletInfo: {
		windowKey: string;
		name: string;
		icon: string;
		website: string;
	};
	getOfflineSigner: (chainId: string) => Promise<OfflineSigner | undefined>;
	getAccounts: (chainId: string) => Promise<readonly AccountData[]>;
	connect: (chainId: string) => Promise<void>;
	disconnect: (chainId: string) => Promise<void>;
	suggestChain?: (chainId: string) => void;
	signArbitrary?: (chainId: string, signer: string, message: string) => Promise<StdSignature>;
}

export type SeiWalletProviderProps = {
	children: ReactNode;
	chainConfiguration: ChainConfiguration;
	wallets: SupportedWalletInput[];
	autoConnect?: SupportedWalletInput;
};

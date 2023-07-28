import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ChainConfiguration } from '../types';
import { SeiWallet } from '@sei-js/core';

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

export type SeiWalletProviderProps = {
	children: ReactNode;
	chainConfiguration: ChainConfiguration;
	wallets: SupportedWalletInput[];
	autoConnect?: SupportedWalletInput;
};

import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ChainConfiguration } from '../types';
import { SeiWallet } from '@sei-js/core';

/**
 * A generic interface for a wallet provider component. This is implemented by the SeiWalletProvider component.
 */
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

/**
 * A type representing currently accepted wallet inputs. Should either be a custom SeiWallet object, or the name of a supported wallet that we can generate from a template.
 * The mapping from wallet name to Wallet object is performed by {@link findWalletByWindowKey}
 */
export type SupportedWalletInput = 'compass' | 'leap' | 'fin' | 'keplr' | SeiWallet;

/**
 * Defines the properties passed down by the SeiWalletProvider component.
 * @param children The Child component that the SeiWalletProvider wraps
 * @param chainConfiguration A ChainConfiguration object that defines the chain the app is interacting with
 * @param wallets A list of currently connected wallets.
 */
export type SeiWalletProviderProps = {
	children: ReactNode;
	chainConfiguration: ChainConfiguration;
	wallets: SupportedWalletInput[];
	autoConnect?: SupportedWalletInput;
};

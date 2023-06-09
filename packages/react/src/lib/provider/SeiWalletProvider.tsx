import React, { createContext, useEffect, useState } from 'react';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { SeiWallet, SeiWalletProviderProps, WalletProvider } from './types';
import { findWalletByWindowKey } from '../config/supportedWallets';
import { WalletSelectModal } from '../components';

export const SeiWalletContext = createContext<WalletProvider>({
	accounts: [],
	connect: () => undefined,
	disconnect: () => undefined,
	setConnectionError: () => undefined,
	setTargetWallet: () => undefined,
	setShowConnectModal: () => undefined,
	wallets: []
});

const SeiWalletProvider = ({ children, chainConfiguration, wallets, autoConnect }: SeiWalletProviderProps) => {
	const autoConnectSeiWallet = typeof autoConnect === 'string' ? findWalletByWindowKey(autoConnect) : autoConnect;

	const [targetWallet, setTargetWallet] = useState<SeiWallet | undefined>(autoConnectSeiWallet);
	const [offlineSigner, setOfflineSigner] = useState<OfflineSigner>();
	const [connectionError, setConnectionError] = useState<string>();
	const [accounts, setAccounts] = useState<readonly AccountData[]>([]);
	const [showConnectModal, setShowConnectModal] = useState<boolean>(false);
	const [connectedWallet, setConnectedWallet] = useState<SeiWallet | undefined>();

	const filteredWallets = wallets.reduce((acc: SeiWallet[], wallet) => {
		const seiWallet = typeof wallet === 'string' ? findWalletByWindowKey(wallet) : wallet;
		if (seiWallet !== undefined) acc.push(seiWallet);
		return acc;
	}, []);

	const connectToChain = async () => {
		if (!targetWallet) return;

		try {
			if (!window[targetWallet.walletInfo.windowKey as never]) {
				setConnectionError(targetWallet.walletInfo.windowKey);
				return;
			}

			const fetchedOfflineSigner = await targetWallet.getOfflineSigner(chainConfiguration.chainId);
			const fetchedAccounts = await targetWallet.getAccounts(chainConfiguration.chainId);

			if (fetchedAccounts.length > 0 && fetchedOfflineSigner) {
				setShowConnectModal(false);
				setOfflineSigner(fetchedOfflineSigner);
				setAccounts(fetchedAccounts);
				setConnectedWallet(targetWallet);
			}
		} catch (e) {
			console.log('Error connecting to wallet', e);
			setConnectionError(targetWallet.walletInfo.windowKey);
			return;
		}
	};

	useEffect(() => {
		if (targetWallet) {
			connectToChain().then();
		} else {
			setOfflineSigner(undefined);
			setAccounts([]);
			setConnectedWallet(undefined);
		}
	}, [targetWallet, chainConfiguration.chainId]);

	const disconnect = () => {
		setTargetWallet(undefined);
	};

	const contextValue: WalletProvider = {
		chainId: chainConfiguration.chainId,
		restUrl: chainConfiguration.restUrl,
		rpcUrl: chainConfiguration.rpcUrl,
		wallets: filteredWallets,
		connect: setTargetWallet,
		disconnect,
		accounts,
		offlineSigner,
		connectedWallet,
		targetWallet,
		setTargetWallet,
		showConnectModal,
		setShowConnectModal,
		connectionError,
		setConnectionError
	};

	return (
		<SeiWalletContext.Provider value={contextValue}>
			{children}
			<WalletSelectModal />
		</SeiWalletContext.Provider>
	);
};

export default SeiWalletProvider;

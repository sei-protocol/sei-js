import React, { createContext, useEffect, useState } from 'react';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { SeiWalletProviderProps, WalletProvider } from './types';
import { WalletSelectModal } from '../components';
import { SeiWallet } from '@sei-js/core';
import { findWalletByWindowKey } from './helpers';

export const SeiWalletContext = createContext<WalletProvider>({
	chainId: '',
	restUrl: '',
	rpcUrl: '',
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

			// const enableResponse = await targetWallet.connect(chainConfiguration.chainId);
			const fetchedOfflineSigner = await targetWallet.getOfflineSigner(chainConfiguration.chainId);

			if (!fetchedOfflineSigner) {
				setConnectionError(targetWallet.walletInfo.windowKey);
				return;
			}
			const fetchedAccounts = await targetWallet.getAccounts(chainConfiguration.chainId);

			if (fetchedAccounts.length === 0) {
				setConnectionError(targetWallet.walletInfo.windowKey);
				return;
			} else {
				setShowConnectModal(false);
				setOfflineSigner(fetchedOfflineSigner);
				setAccounts(fetchedAccounts);
				setConnectedWallet(targetWallet);
			}
		} catch (e) {
			console.error('Error connecting to wallet', e);
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
		setOfflineSigner(undefined);
		setAccounts([]);
		setConnectedWallet(undefined);
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
			<WalletSelectModal wallets={filteredWallets} />
		</SeiWalletContext.Provider>
	);
};

export default SeiWalletProvider;

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SeiWalletProviderProps, WalletProvider } from './types';
import {
  WalletWindowKey,
  connect as connectWallet,
  SUPPORTED_WALLETS,
  ChainInfo,
  suggestChain,
} from '@sei-js/core';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';

const supportedWallets = SUPPORTED_WALLETS.map((wallet) => wallet.windowKey);

export const SeiWalletContext = createContext<WalletProvider>({
  supportedWallets,
  accounts: [],
  installedWallets: [],
});

const SeiWalletProvider = ({
  children,
  chainConfiguration,
}: SeiWalletProviderProps) => {
  const [inputWallet, setInputWallet] = useState<WalletWindowKey>();
  const [offlineSigner, setOfflineSigner] = useState<OfflineSigner>();
  const [accounts, setAccounts] = useState<readonly AccountData[]>([]);
  const [connectedWallet, setConnectedWallet] = useState<
    WalletWindowKey | undefined
  >();

  const connect = useCallback(async () => {
    if (!inputWallet) return;
    if (inputWallet === 'keplr') {
      await suggestChain('keplr', {
        chainName: `Sei ${chainConfiguration.chainId}`,
        chainId: chainConfiguration.chainId,
        rpc: chainConfiguration.rpcUrl,
        rest: chainConfiguration.restUrl,
      } as ChainInfo);
    }

    const connectedWallet = await connectWallet(
      inputWallet,
      chainConfiguration.chainId
    );
    if (!connectedWallet) return;
    setOfflineSigner(connectedWallet.offlineSigner);
    setAccounts(connectedWallet.accounts);
    if (connectedWallet.accounts.length > 0) {
      setConnectedWallet(inputWallet);
    }
  }, [
    inputWallet,
    chainConfiguration.chainId,
    chainConfiguration.restUrl,
    chainConfiguration.rpcUrl,
  ]);

  useEffect(() => {
    if (inputWallet) {
      connect().then(() => setConnectedWallet(inputWallet));
    } else {
      setConnectedWallet(undefined);
      setAccounts([]);
      setOfflineSigner(undefined);
    }
  }, [
    inputWallet,
    chainConfiguration.chainId,
    chainConfiguration.restUrl,
    chainConfiguration.rpcUrl,
  ]);

  const installedWallets = useMemo(
    () =>
      window
        ? SUPPORTED_WALLETS.filter((wallet) => window?.[wallet.windowKey]).map(
            (wallet) => wallet.windowKey
          )
        : [],
    [window]
  );

  const contextValue: WalletProvider = {
    chainId: chainConfiguration.chainId,
    restUrl: chainConfiguration.restUrl,
    rpcUrl: chainConfiguration.rpcUrl,
    supportedWallets,
    accounts,
    offlineSigner,
    connectedWallet,
    installedWallets,
    setInputWallet,
  };

  return (
    <SeiWalletContext.Provider value={contextValue}>
      {children}
    </SeiWalletContext.Provider>
  );
};

export default SeiWalletProvider;

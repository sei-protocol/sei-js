import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SeiWalletProviderProps } from './types';
import {
  WalletWindowKey,
  connect as connectWallet,
  SUPPORTED_WALLETS,
  getChainSuggest,
  ChainInfo,
  suggestChain,
} from '@sei-js/core';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';

export type WalletProvider = {
  chainId?: 'atlantic-1' | string;
  restUrl?: string;
  rpcUrl?: string;
  supportedWallets: WalletWindowKey[];
  accounts: readonly AccountData[];
  offlineSigner?: OfflineSigner;
  connectedWallet: WalletWindowKey | undefined;
  installedWallets: WalletWindowKey[];
  setInputWallet?: (inputWallet: WalletWindowKey | undefined) => void;
};

const supportedWallets = SUPPORTED_WALLETS.map((wallet) => wallet.windowKey);

export const SeiWalletContext = createContext<WalletProvider>({
  chainId: undefined,
  restUrl: undefined,
  rpcUrl: undefined,
  supportedWallets,
  accounts: [],
  offlineSigner: undefined,
  connectedWallet: undefined,
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
    try {
      const initConnection = async () => {
        if (!inputWallet) return;
        if (inputWallet === 'keplr') {
          await suggestChain('keplr', {
            chainName: `Sei ${chainConfiguration.chainId}`,
            chainId: chainConfiguration.chainId,
            rpc: chainConfiguration.rpcUrl,
            rest: chainConfiguration.restUrl,
          } as ChainInfo);
        }
        const ConnectWallet = await connectWallet(
          inputWallet,
          chainConfiguration.chainId
        );
        if (!ConnectWallet) return;
        const { offlineSigner, accounts } = ConnectWallet;
        setOfflineSigner(offlineSigner);
        setAccounts(accounts);
        if (accounts.length > 0) setConnectedWallet(inputWallet);
      };

      initConnection().then();
    } catch {
      console.error('error!');
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

  const contextValue = {
    chainId: chainConfiguration.chainId,
    restUrl: chainConfiguration.restUrl,
    rpcUrl: chainConfiguration.rpcUrl,
    supportedWallets,
    accounts,
    offlineSigner,
    connectedWallet,
    installedWallets,
    setInputWallet,
    setConnectedWallet,
    setAccounts,
    setOfflineSigner,
  };

  return (
    <SeiWalletContext.Provider value={contextValue}>
      {children}
    </SeiWalletContext.Provider>
  );
};

export default SeiWalletProvider;

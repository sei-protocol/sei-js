import { WalletWindowKey } from '@sei-js/core';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { ReactNode } from 'react';
import { ChainConfiguration } from '../types';

export type WalletProvider = {
  chainId?: string;
  restUrl?: string;
  rpcUrl?: string;
  supportedWallets: WalletWindowKey[];
  accounts: readonly AccountData[];
  offlineSigner?: OfflineSigner;
  connectedWallet?: WalletWindowKey;
  installedWallets: WalletWindowKey[];
  setInputWallet?: (inputWallet: WalletWindowKey | undefined) => void;
  connect: (walletKey: WalletWindowKey) => void;
  disconnect: () => void;
};

export type SeiWalletProviderProps = {
  children: ReactNode;
  chainConfiguration: ChainConfiguration;
};

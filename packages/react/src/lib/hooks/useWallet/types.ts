import { WalletWindowKey } from '@sei-js/core';
import {AccountData, OfflineSigner} from '@cosmjs/proto-signing';
import { ChainConfiguration } from '../../types';

export type UseWalletOptions = {
  autoConnect?: boolean;
  chainConfiguration: ChainConfiguration;
  inputWallet: WalletWindowKey;
};

export type UseWallet = {
  connectedWallet?: WalletWindowKey;
  connect: () => Promise<void>;
  disconnect: () => void;
  chainId: string;
  restUrl: string;
  rpcUrl: string;
  supportedWallets: WalletWindowKey[];
  installedWallets: WalletWindowKey[];
  error?: string;
  offlineSigner?: OfflineSigner;
  accounts?: readonly AccountData[];
};

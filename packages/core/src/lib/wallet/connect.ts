import { OfflineSigner } from '@cosmjs/proto-signing';
import { WalletConnect, WalletWindowKey } from './types';

declare global {
  interface Window {
    keplr?: {
      getOfflineSigner: (chainId: string) => Promise<OfflineSigner>;
      experimentalSuggestChain: (config: object) => Promise<void>;
      enable: (chainId: string) => Promise<void>;
    };
    leap?: {
      getOfflineSigner: (chainId: string) => Promise<OfflineSigner>;
      experimentalSuggestChain: (config: object) => Promise<void>;
      enable: (chainId: string) => Promise<void>;
    };
    coin98?: { cosmos: (chainId: string) => Promise<unknown> };
    falcon?: {
      getOfflineSigner: (chainId: string) => Promise<OfflineSigner>;
      experimentalSuggestChain: (config: object) => Promise<void>;
      enable: (chainId: string) => Promise<void>;
    };
  }
}

export const connect = async (
  inputWallet: WalletWindowKey,
  chainId: string
): Promise<WalletConnect> => {
  const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;

  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  const walletProvider = window[windowKey];
  if (!walletProvider) {
    throw new Error(`Wallet ${inputWallet} is not installed.`);
  }

  // Enable wallet before attempting to call any methods
  await walletProvider.enable(chainId);

  const offlineSigner = await walletProvider.getOfflineSigner(chainId);
  const accounts = await offlineSigner.getAccounts();

  return { offlineSigner, accounts };
};

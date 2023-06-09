import { Keplr as KeplrWindow } from '@keplr-wallet/types';
import { WalletConnect, WalletWindowInterface, WalletWindowKey } from './types';

declare global {
  interface Window {
    compass?: WalletWindowInterface;
    fin?: WalletWindowInterface;
    keplr?: KeplrWindow;
    leap?: WalletWindowInterface;
  }
}

export const connect = async (
  inputWallet: WalletWindowKey,
  chainId: string
): Promise<WalletConnect> => {
  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  const walletProvider =
    inputWallet === 'coin98' ? window[inputWallet]?.keplr : window[inputWallet];
  if (!walletProvider) {
    throw new Error(`Wallet ${inputWallet} is not installed.`);
  }

  // Enable wallet before attempting to call any methods
  await walletProvider.enable(chainId);

  const offlineSigner = await walletProvider.getOfflineSignerAuto(chainId);
  const accounts = await offlineSigner.getAccounts();

  return { offlineSigner, accounts };
};

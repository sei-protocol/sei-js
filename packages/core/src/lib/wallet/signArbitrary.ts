import { StdSignature } from '@cosmjs/amino';
import { WalletWindowKey } from './types';

export const signArbitrary = async (
  inputWallet: WalletWindowKey,
  chainId: string,
  signingAddress: string,
  data: Uint8Array
) => {
  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
  const walletProvider = window[windowKey];
  if (!walletProvider) {
    throw new Error(`Wallet ${inputWallet} is not installed.`);
  }
  return walletProvider.signArbitrary(chainId, signingAddress, data);
};

export const verifyArbitrary = async (
  inputWallet: WalletWindowKey,
  chainId: string,
  signingAddress: string,
  data: Uint8Array,
  signature: StdSignature
) => {
  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
  const walletProvider = window[windowKey];
  if (!walletProvider) {
    throw new Error(`Wallet ${inputWallet} is not installed.`);
  }
  return walletProvider.verifyArbitrary(
    chainId,
    signingAddress,
    data,
    signature
  );
};

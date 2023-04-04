import { StdSignature } from '@cosmjs/amino';
import { WalletWindowKey } from './types';
import { toAscii } from '@cosmjs/encoding';

export const walletSignArbitrary = async (
  inputWallet: WalletWindowKey,
  chainId: string,
  signingAddress: string,
  data: string | Uint8Array
) => {
  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  if (typeof data === 'string') {
    data = toAscii(data);
  }

  const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
  const walletProvider = window[windowKey];
  if (!walletProvider) {
    throw new Error(`Wallet ${inputWallet} is not installed.`);
  }
  return walletProvider.signArbitrary(chainId, signingAddress, data);
};

export const walletVerifyArbitrary = async (
  inputWallet: WalletWindowKey,
  chainId: string,
  signingAddress: string,
  data: string | Uint8Array,
  signature: StdSignature
) => {
  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  if (typeof data === 'string') {
    data = toAscii(data);
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

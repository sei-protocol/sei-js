import { StdSignature } from '@cosmjs/amino';
import { OfflineSigner, AccountData } from '@cosmjs/proto-signing';

export type WalletWindowInterface = {
  enable: (chainId: string) => Promise<void>;
  getOfflineSigner: (chainId: string) => Promise<OfflineSigner>;
  // Will return a signer that only supports Amino if the account is a Ledger-based account,
  // and returns a signer that is compatible for both Amino and Protobuf otherwise
  getOfflineSignerAuto(chainId: string): Promise<OfflineSigner>;
  experimentalSuggestChain: (config: object) => Promise<void>;
  // Request Signature for Arbitrary Message
  signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array
  ): Promise<StdSignature>;
  verifyArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature
  ): Promise<boolean>;
};

export type WalletConnect = {
  accounts: readonly AccountData[];
  offlineSigner: OfflineSigner;
};

export type WalletWindowKey =
  | 'keplr'
  | 'leap'
  | 'coin98'
  | 'falcon'
  | 'fin'
  | 'compass';

export type SupportedWallet = {
  windowKey: WalletWindowKey;
};

export type ChainInfo = {
  chainName?: string;
  chainId?: string;
  restUrl?: string;
  rpcUrl?: string;
};

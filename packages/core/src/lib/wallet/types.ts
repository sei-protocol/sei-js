import { OfflineSigner, AccountData } from '@cosmjs/proto-signing';

export type WalletConnect = {
  accounts: readonly AccountData[];
  offlineSigner: OfflineSigner;
};

export type WalletWindowKey = 'keplr' | 'leap' | 'coin98' | 'falcon';

export type SupportedWallet = {
  windowKey: WalletWindowKey;
};

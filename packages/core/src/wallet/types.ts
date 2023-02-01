export type WalletAccount = {
	address: string;
	algo: string;
	pubkey: Uint8Array;
};

export type WalletConnect = { accounts: WalletAccount[]; offlineSigner: any };

export type WalletWindowKey = 'keplr' | 'leap' | 'coin98' | 'falcon';

export type SupportedWallet = {
	windowKey: WalletWindowKey;
};

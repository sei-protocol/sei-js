import WalletsJSON from '../../chain-registry/wallets.json';

type Capability = 'native' | 'evm';

export interface Wallet {
	name: string;
	identifier: string;
	icon: string;
	url: string;
	capabilities: Capability[];
}

export interface WalletExtensions {
	extensions: Wallet[];
}

export const Wallets: WalletExtensions = WalletsJSON as WalletExtensions;

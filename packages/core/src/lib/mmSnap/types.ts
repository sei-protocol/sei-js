import { MetaMaskInpageProvider } from '@metamask/providers';

export type EthereumProvider = MetaMaskInpageProvider & {
	providers: MetaMaskInpageProvider[];
	detected: MetaMaskInpageProvider[];
	setProvider: (provider: MetaMaskInpageProvider) => void;
};

declare global {
	interface Window {
		ethereum: EthereumProvider;
	}
}

export type SignAminoOptions = {
	isADR36?: boolean;
	preferNoSetFee?: boolean;
	enableExtraEntropy?: boolean;
};

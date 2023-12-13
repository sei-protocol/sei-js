import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
	interface Window {
		ethereum: MetaMaskInpageProvider & {
			providers: MetaMaskInpageProvider[];
			detected: MetaMaskInpageProvider[];
			setProvider: (provider: MetaMaskInpageProvider) => void;
		};
	}
}

export type SignAminoOptions = {
	isADR36?: boolean;
	enableExtraEntropy?: boolean;
};

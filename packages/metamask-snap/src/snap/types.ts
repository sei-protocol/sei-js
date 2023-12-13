import { StdSignature, StdSignDoc } from '@cosmjs/amino';
import { SignDoc } from '@sei-js/proto/dist/types/codegen/cosmos/tx/v1beta1/tx';

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

export interface SnapRequest {
	account_index?: number;
}

export interface VerifyArbitraryRequest extends SnapRequest {
	readonly signer: string;
	readonly message: string;
	readonly signature: StdSignature;
}

export interface SignDirectRequest extends SnapRequest {
	readonly signDoc: SignDoc;
	readonly signerAddress: string;
}

export interface SignAminoRequest extends SnapRequest {
	readonly signDoc: StdSignDoc;
	readonly signerAddress: string;
	readonly chainId: string;
	readonly enableExtraEntropy?: boolean;
}

export type RawLong = { low: number; high: number; unsigned: boolean };

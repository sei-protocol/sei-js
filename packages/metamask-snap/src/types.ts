import { StdSignature, StdSignDoc } from '@cosmjs/amino';
import { SignDoc } from '@sei-js/proto/dist/types/codegen/cosmos/tx/v1beta1/tx';

import { MetaMaskInpageProvider } from '@metamask/providers';
import { NodeType } from '@metamask/snaps-ui/dist/types/nodes';

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

export interface SignDirectRequest extends SnapRequest {
	readonly signDoc: SignDoc;
	readonly signerAddress: string;
}

export interface SignAminoRequest extends SnapRequest {
	readonly signDoc: StdSignDoc;
	readonly signerAddress: string;
	readonly chainId: string;
	readonly enableExtraEntropy?: boolean;
	readonly isADR36?: boolean;
}

export type RawLong = { low: number; high: number; unsigned: boolean };

export type EthereumProvider = MetaMaskInpageProvider & {
	providers: MetaMaskInpageProvider[];
	detected: MetaMaskInpageProvider[];
	setProvider: (provider: MetaMaskInpageProvider) => void;
};

export type SignAminoOptions = {
	isADR36?: boolean;
	enableExtraEntropy?: boolean;
};

export type PanelOption =
	| {
			value: string;
			type: NodeType.Copyable;
	  }
	| {
			type: NodeType.Divider;
	  }
	| {
			value: string;
			type: NodeType.Heading;
	  }
	| {
			type: NodeType.Spinner;
	  }
	| {
			value: string;
			type: NodeType.Text;
			markdown?: boolean | undefined;
	  }
	| {
			value: string;
			type: NodeType.Image;
	  };

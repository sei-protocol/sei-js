import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { AccountData, AminoSignResponse, StdSignDoc } from '@cosmjs/amino';
import { DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';
import Long from 'long';
import { MM_SNAP_ORIGIN } from './config';
import { SignAminoOptions } from './types';
import { makeADR36AminoSignDoc } from '@sei-js/core';
import { getWallet } from './snapWallet';

export const sendReqToSnap = async (method: string, params: any): Promise<any> => {
	return window.ethereum.request({
		method: 'wallet_invokeSnap',
		params: {
			snapId: MM_SNAP_ORIGIN,
			request: {
				method,
				params
			}
		}
	});
};

export const requestSignature = async (
	chainId: string,
	signerAddress: string,
	signDoc: {
		bodyBytes?: Uint8Array | null;
		authInfoBytes?: Uint8Array | null;
		chainId?: string | null;
		accountNumber?: Long | null;
	}
) => {
	const signature = await sendReqToSnap('signDirect', {
		chainId,
		signerAddress,
		signDoc
	});

	const { accountNumber } = signDoc;

	const modifiedAccountNumber = new Long(accountNumber?.low || 0, accountNumber?.high, accountNumber?.unsigned);

	return {
		signature: signature.signature,
		signed: {
			...signature.signed,
			accountNumber: `${modifiedAccountNumber.toString()}`,
			authInfoBytes: new Uint8Array(Object.values(signature.signed.authInfoBytes)),
			bodyBytes: new Uint8Array(Object.values(signature.signed.bodyBytes))
		}
	};
};

export class CosmJSOfflineSigner implements OfflineDirectSigner {
	readonly chainId: string;

	constructor(chainId: string) {
		this.chainId = chainId;
	}

	async getAccounts(): Promise<AccountData[]> {
		const wallet = await getWallet(0);
		return wallet.getAccounts();
	}

	async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
		if (this.chainId !== signDoc.chainId) {
			throw new Error('Chain ID does not match signer chain ID');
		}
		const accounts = await this.getAccounts();

		if (accounts.find((account) => account.address !== signerAddress)) {
			throw new Error('Signer address does not match wallet address');
		}

		return requestSignature(this.chainId, signerAddress, signDoc) as Promise<DirectSignResponse>;
	}

	// This has been added as a placeholder.
	async signAmino(signerAddress: string, signDoc: StdSignDoc, options?: SignAminoOptions): Promise<AminoSignResponse> {
		if (this.chainId !== signDoc.chain_id) {
			throw new Error('Chain ID does not match signer chain ID');
		}
		const accounts = await this.getAccounts();

		if (accounts.find((account) => account.address !== signerAddress)) {
			throw new Error('Signer address does not match wallet address');
		}

		return requestSignAmino(this.chainId, signerAddress, signDoc, options) as unknown as Promise<AminoSignResponse>;
	}

	async signArbitrary(signer: string, data: string, signOptions?: { enableExtraEntropy?: boolean }) {
		const signDoc = makeADR36AminoSignDoc(signer, data);
		const result = await requestSignAmino(this.chainId, signer, signDoc, {
			isADR36: true,
			enableExtraEntropy: signOptions?.enableExtraEntropy
		});
		return result.signature;
	}
}

export const requestSignAmino = async (chainId: string, signerAddress: string, signDoc: StdSignDoc, options?: SignAminoOptions) => {
	const { isADR36 = false, enableExtraEntropy = false } = options || {};

	if (!isADR36 && chainId !== signDoc.chain_id) {
		throw new Error('Chain ID does not match signer chain ID');
	}

	return (await sendReqToSnap('signAmino', {
		chainId,
		signerAddress,
		signDoc,
		isADR36,
		enableExtraEntropy
	})) as AminoSignResponse;
};

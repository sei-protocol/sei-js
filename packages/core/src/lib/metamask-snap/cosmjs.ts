import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { AccountData, AminoSignResponse, StdSignDoc } from '@cosmjs/amino';
import { DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';
import Long from 'long';
import { SignAminoOptions } from './types';
import { getWallet } from './snapWallet';
import { sendReqToSnap } from './utils';
import { makeADR36AminoSignDoc } from '../utils';

export const requestSignature = async (
	chainId: string,
	signerAddress: string,
	signDoc: {
		bodyBytes?: Uint8Array | null;
		authInfoBytes?: Uint8Array | null;
		chainId?: string | null;
		accountNumber?: Long | null;
	},
	snapId: string
): Promise<DirectSignResponse> => {
	const signature = await sendReqToSnap(
		'signDirect',
		{
			chainId,
			signerAddress,
			signDoc
		},
		snapId
	);

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
	readonly snapId: string;
	readonly accountIndex: number;

	constructor(chainId: string, snapId: string, accountIndex?: number) {
		this.chainId = chainId;
		this.snapId = snapId;
		this.accountIndex = accountIndex || 0;
	}

	async getAccounts(): Promise<AccountData[]> {
		const wallet = await getWallet(this.accountIndex, this.snapId);
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

		return requestSignature(this.chainId, signerAddress, signDoc, this.snapId);
	}

	async signAmino(signerAddress: string, signDoc: StdSignDoc, options?: SignAminoOptions): Promise<AminoSignResponse> {
		if (this.chainId !== signDoc.chain_id) {
			throw new Error('Chain ID does not match signer chain ID');
		}
		const accounts = await this.getAccounts();

		if (accounts.find((account) => account.address !== signerAddress)) {
			throw new Error('Signer address does not match wallet address');
		}

		return requestSignAmino(this.chainId, signerAddress, signDoc, this.snapId, options);
	}

	async signArbitrary(signer: string, data: string, signOptions?: { enableExtraEntropy?: boolean }) {
		const signDoc = makeADR36AminoSignDoc(signer, data);
		const result = await requestSignAmino(this.chainId, signer, signDoc, this.snapId, {
			isADR36: true,
			enableExtraEntropy: signOptions?.enableExtraEntropy
		});
		return result.signature;
	}
}

export const requestSignAmino = async (
	chainId: string,
	signerAddress: string,
	signDoc: StdSignDoc,
	snapId: string,
	options?: SignAminoOptions
): Promise<AminoSignResponse> => {
	const { isADR36 = false, enableExtraEntropy = false } = options || {};

	if (!isADR36 && chainId !== signDoc.chain_id) {
		throw new Error('Chain ID does not match signer chain ID');
	}

	return (await sendReqToSnap(
		'signAmino',
		{
			chainId,
			signerAddress,
			signDoc,
			isADR36,
			enableExtraEntropy
		},
		snapId
	)) as AminoSignResponse;
};

import { sign as signSecp256k1, getPublicKey as getSecp256k1PublicKey } from '@noble/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { BIP44Node } from '@metamask/key-tree';
import { AccountData, encodeSecp256k1Signature, StdSignDoc } from '@cosmjs/amino';
import { Buffer } from 'buffer';
import { compressedPubKeyToAddress, serializeAminoSignDoc, serializeDirectSignDoc, SeiWallet } from '@sei-js/core';
import { CosmJSOfflineSigner, sendReqToSnap } from './cosmjs';
import { MM_SNAP_ORIGIN } from './config';

export class SnapWallet {
	constructor(private privateKey: Uint8Array, private compressedPubKey: Uint8Array, private address: string) {}

	static create(privateKey: string) {
		const sanitizedPvtKey = privateKey.replace('0x', '');
		const pvtKeyBytes = Buffer.from(sanitizedPvtKey, 'hex');

		const compressedPubKey = getSecp256k1PublicKey(pvtKeyBytes, true);
		const seiAddress = compressedPubKeyToAddress(compressedPubKey);
		return new SnapWallet(pvtKeyBytes, compressedPubKey, seiAddress);
	}

	getAccounts() {
		return [
			{
				address: this.address,
				algo: 'secp256k1',
				pubkey: this.compressedPubKey
			}
		] as AccountData[];
	}

	async signDirect(signerAddress: string, signDoc: SignDoc) {
		const accounts = this.getAccounts();
		const account = accounts.find((acc) => acc.address === signerAddress);

		if (!account) {
			throw new Error('Signer address does not match wallet address');
		}

		const hash = sha256(serializeDirectSignDoc(signDoc));
		const signature = await signSecp256k1(hash, this.privateKey, {
			canonical: true,
			extraEntropy: true,
			der: false
		});

		return {
			signed: { ...signDoc, accountNumber: signDoc.accountNumber.toString() },
			signature: encodeSecp256k1Signature(account.pubkey, signature)
		};
	}

	async signAmino(signerAddress: string, signDoc: StdSignDoc, options?: { extraEntropy: boolean }) {
		const accounts = this.getAccounts();
		const account = accounts.find((acc) => acc.address === signerAddress);
		if (!account) {
			throw new Error('Signer address does not match wallet address');
		}

		if (!account.pubkey) {
			throw new Error('Unable to derive keypair');
		}

		const hash = sha256(serializeAminoSignDoc(signDoc));
		const extraEntropy = options?.extraEntropy ? true : undefined;
		const signature = await signSecp256k1(hash, this.privateKey, {
			canonical: true,
			extraEntropy,
			der: false
		});

		return {
			signed: signDoc,
			signature: encodeSecp256k1Signature(account.pubkey, signature)
		};
	}
}

export async function getWallet(account_index = 0): Promise<SnapWallet> {
	const account: BIP44Node = await sendReqToSnap('getPrivateKey', { account_index });

	if (account.privateKey) {
		return SnapWallet.create(account.privateKey);
	}
	throw new Error(`Error creating sei wallet!`);
}

// Awaiting audit
export const experimental_SEI_METAMASK_SNAP: SeiWallet = {
	getAccounts: async (chainId) => {
		const offlineSigner = new CosmJSOfflineSigner(chainId);
		return offlineSigner.getAccounts();
	},
	connect: async (_: string) => {
		const provider = window.ethereum;
		const installedSnaps: any = await provider.request({ method: 'wallet_getSnaps' });
		if (!installedSnaps || !installedSnaps[MM_SNAP_ORIGIN]) {
			await provider.request({
				method: 'wallet_requestSnaps',
				params: {
					[MM_SNAP_ORIGIN]: {}
				}
			});
		}
	},
	disconnect: async (_: string) => {
		throw new Error('Not implemented');
	},
	getOfflineSigner: async (chainId) => {
		return new CosmJSOfflineSigner(chainId);
	},
	getOfflineSignerAmino: async (chainId) => {
		return new CosmJSOfflineSigner(chainId);
	},
	signArbitrary: async (chainId, signer, message) => {
		const offlineSigner = new CosmJSOfflineSigner(chainId);
		return offlineSigner.signArbitrary(signer, message);
	},
	verifyArbitrary: async (_: string, signingAddress, data, signature) => {
		return (await window.ethereum.request({
			method: 'wallet_invokeSnap',
			params: {
				snapId: MM_SNAP_ORIGIN,
				request: {
					method: 'verifyArbitrary',
					params: {
						signer: signingAddress,
						message: data,
						signature
					}
				}
			}
		})) as unknown as boolean;
	},
	walletInfo: {
		windowKey: 'ethereum',
		name: 'Sei Metamask Snap',
		website: 'https://metamask.io/',
		icon: 'https://github.com/MetaMask/brand-resources/raw/master/SVG/SVG_MetaMask_Icon_Color.svg'
	},
	isMobileSupported: true
};

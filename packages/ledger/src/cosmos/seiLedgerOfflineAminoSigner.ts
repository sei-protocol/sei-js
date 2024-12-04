import { AminoSignResponse, encodeSecp256k1Signature, OfflineAminoSigner, serializeSignDoc, StdSignDoc } from '@cosmjs/amino';
import { fromHex } from '@cosmjs/encoding';
import { AccountData } from '@cosmjs/proto-signing';
import { Secp256k1Signature } from '@cosmjs/crypto';
import { SeiApp } from '@zondax/ledger-sei';

/**
 *  A signer implementation that uses a Ledger device to sign transactions
 */
export class SeiLedgerOfflineAminoSigner implements OfflineAminoSigner {
	private readonly path: string;
	private readonly app: SeiApp;

	/**
	 * Creates a new SeiLedgerOfflineAminoSigner
	 * @param app Ledger Sei app instance
	 * @param path hd derivation path (e.g. "m/44'/60'/0'/0/0")
	 */
	constructor(app: SeiApp, path: string) {
		this.path = path;
		this.app = app;
	}

	public async getAccounts(): Promise<readonly AccountData[]> {
		const nativeAddress = await this.app.getCosmosAddress(this.path);
		return [
			{
				address: nativeAddress.address,
				algo: 'secp256k1',
				pubkey: fromHex(nativeAddress.pubKey)
			}
		];
	}

	public async signAmino(_signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
		const signature = await this.app.signCosmos(this.path, Buffer.from(serializeSignDoc(signDoc)));
		const sig = new Secp256k1Signature(removeLeadingZeros(signature.r), removeLeadingZeros(signature.s)).toFixedLength();
		const nativeAddress = await this.app.getCosmosAddress(this.path);
		return {
			signed: signDoc,
			signature: encodeSecp256k1Signature(fromHex(nativeAddress.pubKey), sig)
		};
	}
}

/**
 * Remove leading zeros from a Uint8Array and return a new Uint8Array
 * This is required for the Secp256k1Signature constructor in @cosmjs/crypto
 * @param uint8Array
 */
const removeLeadingZeros = (uint8Array: Uint8Array): Uint8Array => {
	let i = 0;
	while (i < uint8Array.length && uint8Array[i] === 0) {
		i++;
	}

	return new Uint8Array(uint8Array.slice(i));
};

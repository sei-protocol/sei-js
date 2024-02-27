import { StdSignature, StdSignDoc } from '@cosmjs/amino';
import { fromBase64 } from '@cosmjs/encoding';
import { compressedPubKeyToAddress, isValidSeiAddress, verifyDigest32 } from './address';
import { sha256 } from './hash';
import { serializeAminoSignDoc } from './serialize';

/**
 * Creates a StdSignDoc for an [ADR-36](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md) object.
 * @param signer A string representing the address of the signer.
 * @param data A string or byte array representing the payload of the tx to be signed.
 * Data is arbitrary bytes which can represent text, files, objects. It's applications developers decision how Data should be deserialized, serialized and the object it can represent in their context
 * It's applications developers decision how Data should be treated, by treated we mean the serialization and deserialization process and the Object Data should represent.
 * @returns A StdSignDoc object.
 */
export function makeADR36AminoSignDoc(signer: string, data: string | Uint8Array): StdSignDoc {
	// If data is already a base64 string, convert it to a Buffer and back to a string.
	data = Buffer.from(data).toString('base64');

	//According to ADR-36 specifications https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md
	return {
		// chain-id must be equal to “”
		chain_id: '',
		// must be invalid value
		account_number: '0',
		// nonce, sequence number must be equal to 0
		sequence: '0',
		fee: {
			// fee gas must be equal to 0
			gas: '0',
			//fee amount must be an empty array
			amount: []
		},
		msgs: [
			{
				type: 'sign/MsgSignData',
				value: {
					signer,
					// Data is arbitrary bytes which can represent text, files, objects. It's applications developers decision how Data should be deserialized, serialized and the object it can represent in their context
					// It's applications developers decision how Data should be treated, by treated we mean the serialization and deserialization process and the Object Data should represent.
					data
				}
			}
		],
		// the memo must be empty
		memo: ''
	};
}

function checkAndValidateADR36AminoSignDoc(signDoc: StdSignDoc): boolean {
	const hasOnlyMsgSignData = (() => {
		if (signDoc && signDoc.msgs && Array.isArray(signDoc.msgs) && signDoc.msgs.length === 1) {
			const msg = signDoc.msgs[0];
			return msg.type === 'sign/MsgSignData';
		} else {
			return false;
		}
	})();

	if (!hasOnlyMsgSignData) {
		return false;
	}

	if (signDoc.chain_id !== '') {
		throw new Error('Chain id should be empty string for ADR-36 signing');
	}

	if (signDoc.memo !== '') {
		throw new Error('Memo should be empty string for ADR-36 signing');
	}

	if (signDoc.account_number !== '0') {
		throw new Error('Account number should be "0" for ADR-36 signing');
	}

	if (signDoc.sequence !== '0') {
		throw new Error('Sequence should be "0" for ADR-36 signing');
	}

	if (signDoc.fee.gas !== '0') {
		throw new Error('Gas should be "0" for ADR-36 signing');
	}

	if (signDoc.fee.amount.length !== 0) {
		throw new Error('Fee amount should be empty array for ADR-36 signing');
	}

	const msg = signDoc.msgs[0];
	if (msg.type !== 'sign/MsgSignData') {
		throw new Error(`Invalid type of ADR-36 sign msg: ${msg.type}`);
	}
	if (!msg.value) {
		throw new Error('Empty value in the msg');
	}
	const signer = msg.value.signer;
	if (!signer) {
		throw new Error('Empty signer in the ADR-36 msg');
	}
	isValidSeiAddress(signer);
	const data = msg.value.data;
	if (!data) {
		throw new Error('Empty data in the ADR-36 msg');
	}
	const rawData = Buffer.from(data, 'base64');
	// Validate the data is encoded as base64.
	if (rawData.toString('base64') !== data) {
		throw new Error('Data is not encoded by base64');
	}
	if (rawData.length === 0) {
		throw new Error('Empty data in the ADR-36 msg');
	}

	return true;
}

function verifyADR36AminoSignDoc(signDoc: StdSignDoc, pubKey: Uint8Array, signature: Uint8Array): boolean {
	if (!checkAndValidateADR36AminoSignDoc(signDoc)) {
		throw new Error('Invalid sign doc for ADR-36');
	}

	const expectedSigner = compressedPubKeyToAddress(pubKey);
	const signer = signDoc.msgs[0].value.signer;
	if (expectedSigner !== signer) {
		throw new Error('Unmatched signer');
	}

	const msg = serializeAminoSignDoc(signDoc);

	return verifyDigest32(sha256(msg), signature, pubKey);
}

function verifyADR36Amino(signer: string, data: string | Uint8Array, pubKey: Uint8Array, signature: Uint8Array): boolean {
	const signDoc = makeADR36AminoSignDoc(signer, data);

	return verifyADR36AminoSignDoc(signDoc, pubKey, signature);
}

export const verifyArbitrary = async (signerAddress: string, expectedMessage: string, signatureToVerify: StdSignature): Promise<boolean> => {
	try {
		const { pub_key: pubKey, signature } = signatureToVerify;
		return verifyADR36Amino(signerAddress, expectedMessage, fromBase64(pubKey.value), fromBase64(signature));
	} catch (e) {
		console.log('error verifying signature', e);
		return false;
	}
};

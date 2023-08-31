import { fromBech32 } from '@cosmjs/encoding';
import CryptoJS from 'crypto-js';
import { ec as EllipticCurve } from 'elliptic';

export const isValidSeiAddress = (address: string) => {
	try {
		const { prefix } = fromBech32(address);
		return prefix && prefix === 'sei';
	} catch (e) {
		return false;
	}
};

export const pubKeyToKeyPair = (pubKey: Uint8Array): EllipticCurve.KeyPair => {
	const secp256k1 = new EllipticCurve('secp256k1');

	return secp256k1.keyFromPublic(Buffer.from(pubKey).toString('hex'), 'hex');
};

export const pubKeyToBytes = (pubKey: Uint8Array, uncompressed?: boolean): Uint8Array => {
	if (uncompressed && pubKey.length === 65) {
		return pubKey;
	}
	if (!uncompressed && pubKey.length === 33) {
		return pubKey;
	}

	const keyPair = pubKeyToKeyPair(pubKey);

	if (uncompressed) {
		return new Uint8Array(Buffer.from(keyPair.getPublic().encode('hex', false), 'hex'));
	} else {
		return new Uint8Array(Buffer.from(keyPair.getPublic().encodeCompressed('hex'), 'hex'));
	}
};

export const getAddressFromPubKey = (pubKey: Uint8Array): Uint8Array => {
	let hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(pubKeyToBytes(pubKey) as any)).toString();
	hash = CryptoJS.RIPEMD160(CryptoJS.enc.Hex.parse(hash)).toString();

	return new Uint8Array(Buffer.from(hash, 'hex'));
};

export const verifyDigest32 = (digest: Uint8Array, signature: Uint8Array, pubKey: Uint8Array): boolean => {
	if (digest.length !== 32) {
		throw new Error(`Invalid length of digest to verify: ${digest.length}`);
	}

	if (signature.length !== 64) {
		throw new Error(`Invalid length of signature: ${signature.length}`);
	}

	const secp256k1 = new EllipticCurve('secp256k1');

	const r = signature.slice(0, 32);
	const s = signature.slice(32);

	return secp256k1.verify(
		digest,
		{
			r: Buffer.from(r).toString('hex'),
			s: Buffer.from(s).toString('hex')
		},
		pubKeyToKeyPair(pubKey)
	);
};

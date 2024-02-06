import { fromBech32 } from '@cosmjs/encoding';
import { ec as EllipticCurve } from 'elliptic';
import { sha256 } from './hash';
import { ripemd160 } from '@cosmjs/crypto';
import { toBech32 } from './bech32';

/**
 * Returns a boolean representing if the given string is a valid Sei address.
 * @param address The string we wish to verify.
 * @returns True if a string is a valid Sei address
 */
export const isValidSeiAddress = (address: string) => {
  try {
    const { prefix } = fromBech32(address);
    return prefix && prefix === 'sei';
  } catch (e) {
    return false;
  }
};

/**
 * Creates a hex encoded ECC KeyPair given a public key.
 * @param pubKey A byte array representing a public key.
 * @returns A hex encoded ECC KeyPair.
 */
export const pubKeyToKeyPair = (pubKey: Uint8Array): EllipticCurve.KeyPair => {
  const secp256k1 = new EllipticCurve('secp256k1');

  return secp256k1.keyFromPublic(Buffer.from(pubKey).toString('hex'), 'hex');
};

/**
 * Converts the given public key to a bytestring
 * @param pubKey The public key to convert.
 * @param uncompressed Whether the public key has already been compressed.
 * @returns A byte array representing the converted public key.
 */
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

/**
 * Gets the corresponding address from a byte array representing a compressed public key.
 * @param publicKey A byte array representing a compressed public key.
 * @returns The corresponding address to the given compressed public key.
 */
export const compressedPubKeyToAddress = (publicKey: Uint8Array) => {
  return toBech32(getAddressHashFromPubKey(publicKey));
};

/**
 * Gets the corresponding sha256 hashed address to a given compressed public key.
 * @param compressedPublicKey A byte array representing a compressed public key.
 * @returns A sha256 hashed address that corresponds to the given public key.
 */
export const getAddressHashFromPubKey = (compressedPublicKey: Uint8Array): Uint8Array => {
  return ripemd160(sha256(compressedPublicKey));
};

/**
 * Verifies a digest signed with a private key using the corresponding public key.
 * @param digest A byte array representing the digest we wish to verify.
 * @param signature A byte array representing the digital signature.
 * @param pubKey A byte array representing the public key of the signer.
 * @returns True if the digest is verified to have been signed using the private key complementing the given public key.
 */
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

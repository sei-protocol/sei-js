import { randomBytes } from 'node:crypto';
import { describe, expect, it } from '@jest/globals';
import { secp256k1 } from '@noble/curves/secp256k1';
import { ec as EllipticCurve } from 'elliptic';
import { deriveAddressesFromPrivateKey, getAddressHashFromPubKey, isValidSeiCosmosAddress, pubKeyToBytes, pubKeyToKeyPair, verifyDigest32 } from '../address';
import { truncateSeiAddress } from '../address';
import { sha256 } from '../hash';

describe('truncateAddress', () => {
	it('should return the truncated address with first 3 and last 5 characters for valid sei contract addresses', () => {
		const address = 'sei1v02xglfgtf4dk6jf8xa92my49zs4395zjnf4hzpzrs944znzdztq56zrr0';
		const truncatedAddress = truncateSeiAddress(address);
		expect(truncatedAddress).toBe('sei....6zrr0');
	});

	it('should return the input address for invalid sei addresses', () => {
		const ethAddress = '0x32Be343B94f860124dC4fEe278FDCBD38C102D88';
		expect(truncateSeiAddress(ethAddress)).toBe(ethAddress);

		const shortAddress = 'sei14ae4g3422thcyuxler2ws3w25fpesrh';
		expect(truncateSeiAddress(shortAddress)).toBe(shortAddress);

		const osmoAddress = 'osmo14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9';
		expect(truncateSeiAddress(osmoAddress)).toBe(osmoAddress);
	});
});

const MOCK_PUB_KEY = new Uint8Array([
	4, 116, 1, 101, 176, 186, 244, 209, 5, 209, 19, 132, 244, 147, 197, 29, 25, 163, 111, 176, 167, 12, 14, 132, 111, 54, 27, 175, 58, 222, 9, 164, 17, 238, 10,
	125, 251, 27, 86, 34, 144, 170, 53, 1, 39, 215, 43, 232, 73, 1, 141, 150, 35, 103, 128, 242, 240, 169, 107, 169, 102, 44, 226, 126, 14
]);

const MOCK_PUB_KEY_ADDRESS = new Uint8Array([238, 39, 110, 158, 63, 196, 185, 243, 87, 44, 63, 181, 99, 247, 136, 235, 53, 144, 126, 40]);

describe('isValidSeiAddress', () => {
	it('should return true for a valid SEI address', () => {
		const validAddress = 'sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9';

		const result = isValidSeiCosmosAddress(validAddress);

		expect(result).toBe(true);
	});

	it('should return false for an invalid SEI address', () => {
		const invalidAddress = 'invalidSeiAddress';

		const result = isValidSeiCosmosAddress(invalidAddress);

		expect(result).toBe(false);
	});

	it('should return false for a non-SEI Bech32 address', () => {
		const nonSeiAddress = 'osmo1vx3456g8y9jqmg3yngw4thjc89ew6ukfcdr0hs';

		const result = isValidSeiCosmosAddress(nonSeiAddress);

		expect(result).toBe(false);
	});
});

describe('pubKeyToKeyPair', () => {
	it('should return a valid key pair for a given public key', () => {
		const keyPair = pubKeyToKeyPair(MOCK_PUB_KEY);

		expect(keyPair.getPublic('hex')).toBe(Buffer.from(MOCK_PUB_KEY).toString('hex'));
	});

	it('should throw an error for an invalid public key', () => {
		expect(() => pubKeyToKeyPair('string pub key' as never)).toThrow();
	});
});

describe('pubKeyToBytes', () => {
	it('should return uncompressed pubKey when given compressed key and uncompressed=true', () => {
		// Generate compressed public key from a random 32-byte private key
		const privateKey = Uint8Array.from({ length: 32 }, () => Math.floor(Math.random() * 256));
		const compressedPubKey = secp256k1.getPublicKey(privateKey, true); // 33-byte compressed key

		const uncompressedBytes = pubKeyToBytes(compressedPubKey, true);
		expect(uncompressedBytes.length).toBe(65); // uncompressed key should be 65 bytes
	});

	it('should return the same pubKey when uncompressed and length is 65', () => {
		// Generate a random 65-byte Uint8Array as a mock uncompressed public key
		const uncompressedPubKey = new Uint8Array(randomBytes(65));
		const result = pubKeyToBytes(uncompressedPubKey, true);
		expect(result).toEqual(uncompressedPubKey);
	});

	it('should return the same pubKey when compressed and length is 33', () => {
		// Generate a random 33-byte Uint8Array as a mock compressed public key
		const compressedPubKey = new Uint8Array(randomBytes(33));
		const result = pubKeyToBytes(compressedPubKey, false);
		expect(result).toEqual(compressedPubKey);
	});

	it('should return uncompressed pubKey when uncompressed is true', () => {
		// Convert the public key to uncompressed format
		const result = pubKeyToBytes(MOCK_PUB_KEY, true);
		// The result should be 65 bytes long
		expect(result.length).toBe(65);
	});

	it('should return compressed pubKey when uncompressed is false', () => {
		// Convert the public key to compressed format
		const result = pubKeyToBytes(MOCK_PUB_KEY, false);
		// The result should be 33 bytes long
		expect(result.length).toBe(33);
	});
});

describe('getAddressFromPubKey', () => {
	it('should return a valid address from a given public key', () => {
		const address = getAddressHashFromPubKey(MOCK_PUB_KEY);

		expect(address).toBeInstanceOf(Uint8Array);
		expect(address).toEqual(MOCK_PUB_KEY_ADDRESS);
	});
});

describe('verifyDigest32', () => {
	it('should throw an error if digest length is not 32', () => {
		const incorrectDigest = new Uint8Array(31);
		const signature = new Uint8Array(64);
		const pubKey = MOCK_PUB_KEY;

		expect(() => verifyDigest32(incorrectDigest, signature, pubKey)).toThrow('Invalid length of digest to verify: 31');
	});

	it('should throw an error if signature length is not 64', () => {
		const digest = new Uint8Array(32);
		const incorrectSignature = new Uint8Array(63);
		const pubKey = MOCK_PUB_KEY;

		expect(() => verifyDigest32(digest, incorrectSignature, pubKey)).toThrow('Invalid length of signature: 63');
	});

	it('should verify a valid digest and signature with corresponding pub key', () => {
		// Generate a private key
		const privateKey = Uint8Array.from({ length: 32 }, () => Math.floor(Math.random() * 256));

		// Create key pair and public key
		const ec = new EllipticCurve('secp256k1');
		const keyPair = ec.keyFromPrivate(Buffer.from(privateKey).toString('hex'));
		const pubKey = new Uint8Array(Buffer.from(keyPair.getPublic(true, 'hex'), 'hex')); // compressed

		// Create a digest
		const message = new TextEncoder().encode('test message');
		const digest = sha256(message);

		// Sign it
		const signature = keyPair.sign(digest, { canonical: true });
		const signatureBytes = new Uint8Array([...Buffer.from(signature.r.toArray('be', 32)), ...Buffer.from(signature.s.toArray('be', 32))]);

		// Run the verification
		const result = verifyDigest32(digest, signatureBytes, pubKey);
		expect(result).toBe(true);
	});
});

describe('deriveAddressesFromPrivateKey', () => {
	it('should derive a valid SEI address from a valid private key', () => {
		const privKey = '3c3a57a3575f3311c20766c55e5f5d99d5f6e14d3dfce7c80bdcb3c280783f88';
		const expectedPrefix = 'sei';

		const address = deriveAddressesFromPrivateKey(privKey);
		expect(address.startsWith(expectedPrefix)).toBe(true);
		expect(isValidSeiCosmosAddress(address)).toBe(true);
	});
});

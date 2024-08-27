import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { keccak_256 } from '@noble/hashes/sha3';
import { secp256k1 } from '@noble/curves/secp256k1';
import { bech32 } from 'bech32'; // Note the import statement
const encode = bech32.encode;
const decode = bech32.decode;
const toWords = bech32.toWords;


export interface AddressSet {
  seiAddress: string;
  evmAddress: string;
}

export function generateAddressesFromPrivateKey(privateKeyHex: string): AddressSet {
  const privateKey = Uint8Array.from(Buffer.from(privateKeyHex.padStart(64, '0'), 'hex'));
  if (privateKey.length !== 32) {
    throw new Error('Private key must be 32 bytes long.');
  }

  const publicKey = secp256k1.getPublicKey(privateKey, true);
  return deriveAddressesFromPublicKey(publicKey);
}

export function deriveAddressesFromPublicKey(publicKeyBytes: Uint8Array): AddressSet {
  // SHA-256 and RIPEMD-160 hashing for Bech32 addresses
  const sha256Digest = sha256(publicKeyBytes);
  const ripemd160Digest = ripemd160(sha256Digest);

  // Convert to 5-bit groups for Bech32 encoding
  const words = toWords(ripemd160Digest);

  // Bech32 address with "sei" prefix
  const seiAddress = encode('sei', words);

  // Ethereum-style hex address
  const publicKeyUncompressed = secp256k1.ProjectivePoint.fromHex(publicKeyBytes).toRawBytes(false).slice(1);
  const keccakHash = keccak_256(publicKeyUncompressed);
  const evmAddress = `0x${Buffer.from(keccakHash).slice(-20).toString('hex')}`;

  return { seiAddress, evmAddress };
}

export function isValidSeiAddress(address: string): boolean {
  try {
    const decoded = decode(address);
    return decoded.prefix === 'sei' && decoded.words.length === 32;
  } catch {
    return false;
  }
}

export function isValidEvmAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
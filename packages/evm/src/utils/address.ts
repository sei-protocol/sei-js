import { keccak_256 } from '@noble/hashes/sha3';
import { bytesToHex } from '@noble/hashes/utils';

const ADDRESS_LENGTH = 40;
const INVALID_CHARACTERS = /([^0-9a-fA-F])/;

const stripHexPrefix = (input: `0x${string}`) => {
	return input.slice(0, 2) === '0x' ? input.slice(2) : input;
};

const hasMixedCase = (input: string) => {
	return /([A-F])/.test(input) && /([a-f])/.test(input);
};

const validateCharacterSet = (inputSet: string) => {
	return !INVALID_CHARACTERS.test(inputSet);
};

const validateChecksum = (checksum: string) => {
	// either we have no mixed case, or we have a valid checksum.
	return !hasMixedCase(checksum) || `0x${checksum}` === toChecksumAddress(`0x${checksum}`);
};

/**
 * Takes a lowercase EVM address and returns the checksummed EVM address.
 * Checksummed addresses are used to verify that the address is valid.
 * @param inputAddress The 0x address to checksum
 * @returns A checksummed version of the address.
 * @category Utils
 */
export const toChecksumAddress = (inputAddress: `0x${string}`): string => {
	const address = stripHexPrefix(inputAddress).toLowerCase();
	// Hash the address and convert the hash to a hex string
	const hashHex = bytesToHex(keccak_256(new TextEncoder().encode(address)));

	let checksumAddress = '0x';
	for (let i = 0; i < address.length; i++) {
		// Compare each hex digit in the hash to decide on uppercase or lowercase
		const hashChar = parseInt(hashHex[i], 16);
		if (hashChar >= 8) {
			checksumAddress += address[i].toUpperCase();
		} else {
			checksumAddress += address[i];
		}
	}

	return checksumAddress;
};

/**
 * Validates an EVM address by checking its length, character set, and checksum.
 * @param address The 0x address to validate
 * @returns A boolean indicating if the input EVM address is valid.
 * @category Utils
 */
export const isValidEVMAddress = (address: `0x${string}`) => {
	let standardizedAddress = stripHexPrefix(address);

	if (!validateCharacterSet(standardizedAddress)) return false;
	if (!validateChecksum(standardizedAddress)) return false;

	return standardizedAddress.length === ADDRESS_LENGTH;
};

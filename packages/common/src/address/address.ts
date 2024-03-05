import { fromBech32 } from '@cosmjs/encoding';
import { keccak_256 } from '@noble/hashes/sha3';
import { bytesToHex } from '@noble/hashes/utils';

/**
 * Returns a boolean representing if the given string is a valid Sei address.
 * @param address The string we wish to verify.
 * @returns True if a string is a valid Sei address
 */
export const isValidSeiCosmosAddress = (address: string) => {
	try {
		const { prefix } = fromBech32(address);
		return prefix && prefix === 'sei';
	} catch (e) {
		return false;
	}
};

/**
 * Shortens a sei address to display it in the format sei...xxxxx where xxxxx is the last five characters of the address.
 * Used to display sei address in an easily identifiable way.
 * @param address The address to truncate
 * @returns A shortened version of the address in the format sei...xxxxx. Returns the input address if it is not a valid sei address.
 */
export const truncateCosmosAddress = (address: string) => {
	if (!isValidSeiCosmosAddress(address)) {
		return address;
	}
	return `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;
};

const ADDRESS_LENGTH = 40;
const INVALID_CHARACTERS = /([^0-9a-fA-F])/;

const stripHexPrefix = (input: string) => {
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
 * @param inputAddress The address to checksum
 * @returns A checksummed version of the address.
 */
export const toChecksumAddress = (inputAddress: string): string => {
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
 * Takes a lowercase EVM address and returns the checksummed EVM address.
 * Checksummed addresses are used to verify that the address is valid.
 * @param address The address to validate
 * @returns A boolean indicating if the input EVM address is valid.
 */
export const isValidEVMAddress = (address: string) => {
	let standardizedAddress = stripHexPrefix(address);

	if (!validateCharacterSet(standardizedAddress)) return false;
	if (!validateChecksum(standardizedAddress)) return false;

	return standardizedAddress.length === ADDRESS_LENGTH;
};

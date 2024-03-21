import { bech32 } from 'bech32';

/**
 * Converts a given address to Bech32 format.
 * @param address The address to convert.
 * @returns The bech32 formatted address.
 * @category Utils
 */
export const toBech32 = (address: Uint8Array): string => {
	if (!address.length) {
		throw new Error('Invalid address length');
	}
	const words = bech32.toWords(address);
	return bech32.encode('sei', words);
};

import { bech32 } from 'bech32';

export const toBech32 = (address: Uint8Array): string => {
	if (!address.length) {
		throw new Error('Invalid address length');
	}
	const words = bech32.toWords(address);
	return bech32.encode('sei', words);
};

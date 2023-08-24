import bech32 from 'bech32';

export const toBech32 = (address: Uint8Array): string => {
	const words = bech32.toWords(address);
	return bech32.encode('sei', words);
};

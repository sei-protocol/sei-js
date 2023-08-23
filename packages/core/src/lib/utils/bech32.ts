import bech32 from 'bech32';

export const toBech32 = (address: Uint8Array): string => {
	const words = bech32.toWords(address);
	return bech32.encode('sei', words);
};

export const validateBech32 = (bech32Address: string) => {
	const { prefix } = bech32.decode(bech32Address);
	if (prefix !== 'sei') {
		throw new Error(`Unexpected prefix (expected: 'sei', actual: ${prefix})`);
	}
};

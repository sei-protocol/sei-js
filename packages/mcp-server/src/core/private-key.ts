const SECP256K1_ORDER = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n;

export const formatPrivateKey = (key?: string): string | undefined => {
	if (!key) return undefined;
	return key.startsWith('0x') ? key : `0x${key}`;
};

export function isValidPrivateKey(key?: string): boolean {
	const formattedKey = formatPrivateKey(key);
	if (!formattedKey || !/^0x[0-9a-fA-F]{64}$/.test(formattedKey)) {
		return false;
	}

	const scalar = BigInt(formattedKey);
	return scalar > 0n && scalar < SECP256K1_ORDER;
}

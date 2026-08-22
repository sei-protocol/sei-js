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

export function validatePrivateKeyConfiguration(walletMode: 'private-key' | 'disabled', privateKey?: string): void {
	if (walletMode !== 'private-key') return;
	if (!privateKey) {
		throw new Error('PRIVATE_KEY is required when WALLET_MODE=private-key.');
	}
	if (!isValidPrivateKey(privateKey)) {
		throw new Error('PRIVATE_KEY must be a valid 32-byte secp256k1 private key.');
	}
}

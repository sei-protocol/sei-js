import { getWalletMode } from '../config.js';
import { DisabledWalletProvider } from './providers/disabled.js';
import { PrivateKeyWalletProvider } from './providers/private-key.js';
import type { WalletProvider } from './types.js';

// Cache wallet provider instance
let walletProviderInstance: WalletProvider | null = null;

/**
 * Get the wallet provider instance based on configuration
 */
export function getWalletProvider(): WalletProvider {
	if (walletProviderInstance) {
		return walletProviderInstance;
	}

	const mode = getWalletMode();

	switch (mode) {
		case 'private-key':
			walletProviderInstance = new PrivateKeyWalletProvider();
			break;
		case 'disabled':
			walletProviderInstance = new DisabledWalletProvider();
			break;
		default:
			throw new Error(`Unknown wallet mode: ${mode}`);
	}

	return walletProviderInstance;
}

/**
 * Reset the wallet provider instance (useful for testing)
 */
export function resetWalletProvider(): void {
	walletProviderInstance = null;
}

// Export types and classes
export * from './types.js';
export { PrivateKeyWalletProvider } from './providers/private-key.js';
export { DisabledWalletProvider } from './providers/disabled.js';

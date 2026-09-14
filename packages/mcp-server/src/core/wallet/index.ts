import { type AppConfig, getRuntimeConfig, getWalletMode, config as processConfig } from '../config.js';
import { DisabledWalletProvider } from './providers/disabled.js';
import { PrivateKeyWalletProvider } from './providers/private-key.js';
import type { WalletProvider } from './types.js';

const providersByConfig = new WeakMap<AppConfig, WalletProvider>();

// Cache for the process-global singleton only. Instance snapshots use the WeakMap.
let walletProviderInstance: WalletProvider | null = null;

function createWalletProvider(appConfig: AppConfig): WalletProvider {
	switch (appConfig.walletMode) {
		case 'private-key':
			return new PrivateKeyWalletProvider(appConfig.privateKey);
		case 'disabled':
			return new DisabledWalletProvider();
		default:
			throw new Error(`Unknown wallet mode: ${appConfig.walletMode}`);
	}
}

function providerForSnapshot(appConfig: AppConfig): WalletProvider {
	const cached = providersByConfig.get(appConfig);
	if (cached) return cached;
	const provider = createWalletProvider(appConfig);
	providersByConfig.set(appConfig, provider);
	return provider;
}

/**
 * Get the wallet provider instance based on configuration
 */
export function getWalletProvider(): WalletProvider {
	const runtime = getRuntimeConfig();
	if (runtime !== processConfig) {
		return providerForSnapshot(runtime);
	}

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

export { DisabledWalletProvider } from './providers/disabled.js';
export { PrivateKeyWalletProvider } from './providers/private-key.js';
// Export types and classes
export * from './types.js';

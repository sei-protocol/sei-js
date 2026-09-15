import { type AppConfigSnapshot, getRuntimeConfig, getScopedAppConfig, snapshotConfig } from '../config.js';
import { DisabledWalletProvider } from './providers/disabled.js';
import { PrivateKeyWalletProvider } from './providers/private-key.js';
import type { WalletProvider } from './types.js';

const providersByConfig = new WeakMap<AppConfigSnapshot, WalletProvider>();

function createWalletProvider(appConfig: AppConfigSnapshot): WalletProvider {
	switch (appConfig.walletMode) {
		case 'private-key':
			return new PrivateKeyWalletProvider({ privateKey: appConfig.privateKey });
		case 'disabled':
			return new DisabledWalletProvider();
		default:
			throw new Error(`Unknown wallet mode: ${appConfig.walletMode}`);
	}
}

function providerForSnapshot(appConfig: AppConfigSnapshot): WalletProvider {
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
	const runtime = getScopedAppConfig();
	if (runtime) {
		return providerForSnapshot(runtime);
	}

	return createWalletProvider(snapshotConfig(getRuntimeConfig()));
}

/**
 * Evict one runtime's cached provider.
 */
export function resetWalletProvider(appConfig: AppConfigSnapshot): void {
	providersByConfig.delete(appConfig);
}

export { DisabledWalletProvider } from './providers/disabled.js';
export { PrivateKeyWalletProvider } from './providers/private-key.js';
// Export types and classes
export * from './types.js';

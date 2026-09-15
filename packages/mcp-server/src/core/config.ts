import { AsyncLocalStorage } from 'node:async_hooks';
import { config as loadDotenv } from 'dotenv';
import type { Hex } from 'viem';
import { z } from 'zod';
import { formatPrivateKey, validatePrivateKeyConfiguration } from './private-key.js';

export { formatPrivateKey, isValidPrivateKey, validatePrivateKeyConfiguration } from './private-key.js';

// Loading .env is nonthrowing and must happen before RPC modules read process.env.
// Validation remains lazy and runs inside parseArgs/main.
loadDotenv();

// Wallet mode types
export type WalletMode = 'private-key' | 'disabled';

// Define environment variable schema
const envSchema = z.object({
	PRIVATE_KEY: z.string().optional(),
	WALLET_MODE: z.enum(['private-key', 'disabled']).default('disabled'),
	WALLET_API_KEY: z.string().optional() // Used for wallet providers
});

export interface AppConfig {
	privateKey: string | undefined;
	walletMode: WalletMode;
	walletApiKey: string | undefined;
}

export type AppConfigSnapshot = Readonly<AppConfig>;

export const loadConfig = (environment: Record<string, unknown> = process.env): AppConfig => {
	const env = envSchema.parse(environment);
	const privateKey = formatPrivateKey(env.PRIVATE_KEY);

	validatePrivateKeyConfiguration(env.WALLET_MODE, env.PRIVATE_KEY);

	return { privateKey, walletMode: env.WALLET_MODE, walletApiKey: env.WALLET_API_KEY };
};

// Module import is deliberately nonthrowing. parseArgs initializes this object
// only after all environment validation succeeds.
export const config: AppConfig = {
	privateKey: undefined,
	walletMode: 'disabled',
	walletApiKey: undefined
};

export function initializeConfig(environment: Record<string, unknown> = process.env): AppConfig {
	Object.assign(config, loadConfig(environment));
	return config;
}

const runtimeConfig = new AsyncLocalStorage<AppConfigSnapshot>();

/**
 * Copy of the process singleton as it existed at a given start.
 * Transports close over this object so a later initializeConfig() cannot
 * change an already-running runtime's tool policy or signer.
 */
export function snapshotConfig(source: Readonly<AppConfig> = config): AppConfigSnapshot {
	if (Object.isFrozen(source)) return source;
	return Object.freeze({
		privateKey: source.privateKey,
		walletMode: source.walletMode,
		walletApiKey: source.walletApiKey
	});
}

export function runWithAppConfig<T>(appConfig: AppConfigSnapshot, fn: () => T): T {
	if (!Object.isFrozen(appConfig)) throw new TypeError('runWithAppConfig requires a frozen AppConfig snapshot.');
	return runtimeConfig.run(appConfig, fn);
}

/**
 * Bind a callback to an AppConfig snapshot so later initializeConfig()
 * mutations cannot change wallet policy mid-request.
 */
export function wrapWithAppConfig<Args extends unknown[], Result>(appConfig: AppConfigSnapshot, fn: (...args: Args) => Result): (...args: Args) => Result {
	return (...args: Args): Result => runWithAppConfig(appConfig, () => fn(...args));
}

export function getScopedAppConfig(): AppConfigSnapshot | undefined {
	return runtimeConfig.getStore();
}

/**
 * Runtime request paths must establish an AsyncLocalStorage scope. The mutable
 * process config remains the fallback for direct configuration helpers.
 */
export function getRuntimeConfig(): Readonly<AppConfig> {
	const scopedConfig = getScopedAppConfig();
	if (scopedConfig) return scopedConfig;
	if (config.walletMode !== 'disabled') {
		console.error('Wallet configuration was read outside an MCP runtime scope; using the mutable process configuration.');
	}
	return config;
}

/**
 * Get the private key from environment variable as a Hex type for viem.
 * Returns undefined if the PRIVATE_KEY environment variable is not set.
 * @returns Private key from environment variable as Hex or undefined
 */
export function getPrivateKeyAsHex(): Hex | undefined {
	return getRuntimeConfig().privateKey as Hex | undefined;
}

/**
 * Check if wallet functionality is enabled based on configuration
 * @returns True if wallet functionality should be available
 */
export function isWalletEnabled(): boolean {
	return getRuntimeConfig().walletMode !== 'disabled';
}

/**
 * Get the current wallet mode
 * @returns The configured wallet mode
 */
export function getWalletMode(): WalletMode {
	return getRuntimeConfig().walletMode;
}

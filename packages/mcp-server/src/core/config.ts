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

/**
 * Get the private key from environment variable as a Hex type for viem.
 * Returns undefined if the PRIVATE_KEY environment variable is not set.
 * @returns Private key from environment variable as Hex or undefined
 */
export function getPrivateKeyAsHex(): Hex | undefined {
	return config.privateKey as Hex | undefined;
}

/**
 * Check if wallet functionality is enabled based on configuration
 * @returns True if wallet functionality should be available
 */
export function isWalletEnabled(): boolean {
	return config.walletMode !== 'disabled';
}

/**
 * Get the current wallet mode
 * @returns The configured wallet mode
 */
export function getWalletMode(): WalletMode {
	return config.walletMode;
}

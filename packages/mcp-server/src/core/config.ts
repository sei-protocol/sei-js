import dotenv from 'dotenv';
import type { Hex } from 'viem';
import { z } from 'zod';
import { formatPrivateKey, isValidPrivateKey } from './private-key.js';

export { formatPrivateKey, isValidPrivateKey } from './private-key.js';

// Load environment variables from .env file
dotenv.config();

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

	if (env.WALLET_MODE === 'private-key' && !env.PRIVATE_KEY) {
		throw new Error('PRIVATE_KEY is required when WALLET_MODE=private-key.');
	}
	if (env.WALLET_MODE === 'private-key' && !isValidPrivateKey(env.PRIVATE_KEY)) {
		throw new Error('PRIVATE_KEY must be a valid 32-byte secp256k1 private key.');
	}

	return { privateKey, walletMode: env.WALLET_MODE, walletApiKey: env.WALLET_API_KEY };
};

// Export validated environment variables with formatted private key
export const config = loadConfig();

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

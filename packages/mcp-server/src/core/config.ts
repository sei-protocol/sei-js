import dotenv from 'dotenv';
import type { Hex } from 'viem';
import { z } from 'zod';

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

// Parse and validate environment variables
const env = envSchema.safeParse(process.env);

// Format private key with 0x prefix if it exists
export const formatPrivateKey = (key?: string): string | undefined => {
	if (!key) return undefined;

	// Ensure the private key has 0x prefix
	return key.startsWith('0x') ? key : `0x${key}`;
};

// Export validated environment variables with formatted private key
export const config = {
	privateKey: env.success ? formatPrivateKey(env.data.PRIVATE_KEY) : undefined,
	walletMode: (env.success ? env.data.WALLET_MODE : 'disabled') as WalletMode,
	walletApiKey: env.success ? env.data.WALLET_API_KEY : undefined
};

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

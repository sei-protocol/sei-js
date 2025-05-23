import dotenv from 'dotenv';
import { z } from 'zod';
import { type Hex } from 'viem';

// Load environment variables from .env file
dotenv.config();

// Define environment variable schema
const envSchema = z.object({
  PRIVATE_KEY: z.string().optional(),
});

// Parse and validate environment variables
const env = envSchema.safeParse(process.env);

// Format private key with 0x prefix if it exists
const formatPrivateKey = (key?: string): string | undefined => {
  if (!key) return undefined;

  // Ensure the private key has 0x prefix
  return key.startsWith('0x') ? key : `0x${key}`;
};

// Export validated environment variables with formatted private key
export const config = {
  privateKey: env.success ? formatPrivateKey(env.data.PRIVATE_KEY) : undefined,
};

/**
 * Get the private key from environment variable as a Hex type for viem.
 * Returns undefined if the PRIVATE_KEY environment variable is not set.
 * @returns Private key from environment variable as Hex or undefined
 */
export function getPrivateKeyAsHex(): Hex | undefined {
  return config.privateKey as Hex | undefined;
}

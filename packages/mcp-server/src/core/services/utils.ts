import { type Address, parseEther } from 'viem';

/**
 * Utility functions for formatting and parsing values
 */
export const utils = {
	// Convert ether to wei
	parseEther,

	// Format an object to JSON with bigint handling
	formatJson: (obj: unknown): string => JSON.stringify(obj, (_, value) => (typeof value === 'bigint' ? value.toString() : value), 2),

	validateAddress: (address: string): Address => {
		// If it's already a valid Sei 0x address (0x followed by 40 hex chars), return it
		if (/^0x[a-fA-F0-9]{40}$/.test(address)) {
			return address as Address;
		}

		throw new Error(`Invalid address: ${address}`);
	}
};

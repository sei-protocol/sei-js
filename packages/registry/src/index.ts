export * from './tokens';
export * from './chain-info';
export * from './gas';
export * from './networks';
export * from './ibc';

/**
 * A TypeScript type representing the official Sei network chain identifiers.
 */
export type Network = 'pacific-1' | 'atlantic-2' | 'arctic-1';

/**
 * An object for referencing the official Sei network chain identifiers.
 */
export const CHAIN_IDS = {
	mainnet: 'pacific-1',
	testnet: 'atlantic-2',
	devnet: 'arctic-1'
};

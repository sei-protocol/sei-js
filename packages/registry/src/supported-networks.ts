/**
 * Official Sei network chain identifiers supported by this package.
 */
export const CHAIN_IDS = {
	mainnet: 'pacific-1',
	testnet: 'atlantic-2'
} as const;

/**
 * A supported Sei network chain identifier.
 */
export type Network = (typeof CHAIN_IDS)[keyof typeof CHAIN_IDS];

const SUPPORTED_NETWORKS: readonly Network[] = Object.values(CHAIN_IDS);

export function pickSupportedNetworks<T extends Record<Network, unknown>>(source: T): Pick<T, Network> {
	return Object.fromEntries(SUPPORTED_NETWORKS.map((network) => [network, source[network]])) as Pick<T, Network>;
}

import NetworksJSON from '../../chain-registry/chains.json';
import { Network } from '../index';

/**
 * Describes an endpoint with a provider name and its associated URL.
 * This can represent various services such as RPC, REST, or other APIs provided by the network.
 */
interface Endpoint {
	/** The name of the service provider for the endpoint. */
	provider: string;
	/** The URL of the service endpoint. */
	url: string;
}

/**
 * Represents a blockchain explorer service where transactions can be viewed and searched.
 */
interface Explorer {
	/** The name of the explorer service. */
	name: string;
	/** The base URL of the explorer. */
	url: string;
	/** The URL template for viewing a transaction, where `${txHash}` can be replaced by an actual transaction hash. */
	tx_page: string;
}

/**
 * Contains the configuration details for a specific Sei network,
 * including endpoints for various services and supported explorers.
 */
export interface NetworkConfig {
	/** The unique identifier of the Sei network. */
	chainId: string;
	/** The type of the network, which can be mainnet, testnet, or devnet. */
	network_type: 'mainnet' | 'testnet' | 'devnet';
	/** An array of RPC endpoints available for the network. */
	rpc: Endpoint[];
	/** An array of REST endpoints for accessing the network's RESTful services. */
	rest: Endpoint[];
	/** Optional array of gRPC endpoints, providing efficient, low-latency network communication. */
	grpc?: Endpoint[];
	/** Optional array of Ethereum Virtual Machine (EVM) compatible RPC endpoints. */
	evm_rpc?: Endpoint[];
	/** Optional array of WebSocket endpoints for EVM, supporting real-time data streaming. */
	evm_ws?: Endpoint[];
	/** Optional array of blockchain explorer that support this network. */
	explorers?: Explorer[];
	/** An array of faucet endpoints for obtaining test tokens on networks like testnets or devnets. */
	faucets?: Endpoint[];
}

/**
 * A mapping of Sei network identifiers to their corresponding `NetworkConfig`.
 */
type NetworksConfig = {
	/** Maps each network identifier to its `NetworkConfig`. */
	[key in Network]: NetworkConfig;
};

/**
 * A constant holding the network configurations for each network, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry)
 *
 * @example
 * ```tsx
 * import { NETWORKS } from '@sei-js/registry';
 *
 * const pacific1 = NETWORKS.find((network) => network.chainId === 'pacific-1');
 * ```
 */
export const NETWORKS: NetworksConfig = NetworksJSON as NetworksConfig;

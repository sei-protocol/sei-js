import NetworksJSON from '../../chain-registry/chains.json';
import { Network } from '../index';

interface Endpoint {
	provider: string;
	url: string;
}

interface Explorer {
	name: string;
	url: string;
	tx_page: string;
}

export interface NetworkConfig {
	chainId: string;
	network_type: 'mainnet' | 'testnet' | 'devnet';
	rpc: Endpoint[];
	rest: Endpoint[];
	grpc?: Endpoint[];
	evm_rpc?: Endpoint[];
	evm_ws?: Endpoint[];
	explorers?: Explorer[];
	faucets?: Endpoint[];
}

export type NetworksConfig = {
	[key in Network]: NetworkConfig;
};

export const Networks: NetworksConfig = NetworksJSON as NetworksConfig;

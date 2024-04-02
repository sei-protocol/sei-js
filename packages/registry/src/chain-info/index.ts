import ChainInfoJSON from '../../chain-registry/chain_info.json';

export interface ChainInfoType {
	chain_name: string;
	network_type: 'mainnet' | 'testnet' | 'devnet';
	chain_id: string;
	daemon_name: string;
	bech32_prefix: string;
	key_algos: string[];
	slip44: number;
	fee_token: string;
	supported_wallets: string[];
}

export const ChainInfo: ChainInfoType = ChainInfoJSON as ChainInfoType;

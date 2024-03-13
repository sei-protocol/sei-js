import { Chain, createPublicClient, createWalletClient, http } from 'viem';
import { ARCTIC_1_DEFAULT_EVM_RPC, ARCTIC_1_EVM_CHAIN_ID } from '../chainInfo/chainInfo';
import {
	ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS,
	ARCTIC_1_BANK_PRECOMPILE_ADDRESS,
	ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS,
	ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS,
	ARCTIC_1_JSON_PRECOMPILE_ADDRESS,
	ARCTIC_1_STAKING_PRECOMPILE_ADDRESS,
	ARCTIC_1_WASM_PRECOMPILE_ADDRESS
} from '../precompiles';

/**
 * Creates and returns a Viem Chain with the default arctic-1 configs and precompile contracts added.
 * @returns Viem Chain.
 * @category Viem
 */
export const ARCTIC_1_EVM_VIEM_CHAIN: Chain = {
	blockExplorers: {
		default: {
			name: 'SeiTrace',
			url: 'https://seitrace.com'
		}
	},
	contracts: {
		addressPrecompile: { address: ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS },
		bankPrecompile: { address: ARCTIC_1_BANK_PRECOMPILE_ADDRESS },
		distributionPrecompile: { address: ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS },
		governancePrecompile: { address: ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS },
		jsonPrecompile: { address: ARCTIC_1_JSON_PRECOMPILE_ADDRESS },
		stakingPrecompile: { address: ARCTIC_1_STAKING_PRECOMPILE_ADDRESS },
		wasmPrecompile: { address: ARCTIC_1_WASM_PRECOMPILE_ADDRESS }
	},
	fees: undefined,
	id: ARCTIC_1_EVM_CHAIN_ID,
	name: 'arctic-1',
	nativeCurrency: {
		name: 'usei',
		decimals: 18,
		symbol: 'USEI'
	},
	rpcUrls: {
		default: {
			http: [ARCTIC_1_DEFAULT_EVM_RPC]
		}
	},
	sourceId: ARCTIC_1_EVM_CHAIN_ID,
	testnet: true
};

/**
 * Creates and returns a Viem public client instance with the default arctic-1 chain and http transport.
 * @returns Viem public client.
 * @category Viem
 */
export const ARCTIC_1_VIEM_PUBLIC_CLIENT = createPublicClient({ chain: ARCTIC_1_EVM_VIEM_CHAIN, transport: http() });

/**
 * Creates and returns a Viem wallet client instance with the default arctic-1 chain and http transport.
 * @returns Viem wallet client.
 * @category Viem
 */
export const ARCTIC_1_VIEM_WALLET_CLIENT = createWalletClient({ chain: ARCTIC_1_EVM_VIEM_CHAIN, transport: http() });

import { Chain, createPublicClient, createWalletClient, http, PublicClient, WalletClient } from 'viem';
import { ARCTIC_1_DEFAULT_EVM_RPC, ARCTIC_1_EVM_CHAIN_ID } from '../chainInfo';
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
 * @example
 * Use with Wagmi in a React app:
 * ```tsx
 * import { ReactNode } from 'react';
 * import { WagmiProvider } from 'wagmi';
 * import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 * import { ARCTIC_1_EVM_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';
 *
 * const queryClient = new QueryClient();
 *
 * export const WalletProvider = ({ children }: { children: ReactNode }) => {
 *  return (
 *    <WagmiProvider config={createWagmiConfig(ARCTIC_1_EVM_VIEM_CHAIN)}>
 *      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
 *    </WagmiProvider>
 *  );
 * };
 * ```
 * @returns A 'viem' package chain compatible with Wagmi and Viem.
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
 * @param viemChain - A viem chain instance to create the public client with.
 * @returns PublicClient from 'viem'.
 * @category Viem
 */
export const createViemPublicClient = (viemChain: Chain): PublicClient => createPublicClient({ chain: viemChain, transport: http() });

/**
 * Creates and returns a Viem wallet client instance with the default arctic-1 chain and http transport.
 * @param viemChain - A viem chain instance to create the wallet client with.
 * @returns WalletClient from 'viem'.
 * @category Viem
 */
export const createViemWalletClient = (viemChain: Chain): WalletClient => createWalletClient({ chain: viemChain, transport: http() });

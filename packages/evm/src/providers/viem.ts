import { Chain } from 'viem';
import { SeiChainInfo } from '../chainInfo';
import {
	ADDRESS_PRECOMPILE_ADDRESS,
	BANK_PRECOMPILE_ADDRESS,
	DISTRIBUTION_PRECOMPILE_ADDRESS,
	GOVERNANCE_PRECOMPILE_ADDRESS,
	JSON_PRECOMPILE_ADDRESS,
	STAKING_PRECOMPILE_ADDRESS,
	WASM_PRECOMPILE_ADDRESS,
  IBC_PRECOMPILE_ADDRESS
} from '../precompiles';

/**
 * Creates and returns a Viem Chain with the default arctic-1 configs and precompile contracts added.
 * @example
 * React: Use with `createWagmiConfig` for use in a WagmiProvider:
 * ```tsx
 * import { ReactNode } from 'react';
 * import { WagmiProvider } from 'wagmi';
 * import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 * import { ARCTIC_1_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';
 *
 * const queryClient = new QueryClient();
 *
 * export const WalletProvider = ({ children }: { children: ReactNode }) => {
 *  return (
 *    <WagmiProvider config={createWagmiConfig(ARCTIC_1_VIEM_CHAIN)}>
 *      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
 *    </WagmiProvider>
 *  );
 * };
 * ```
 * @returns A 'viem' package chain compatible with Wagmi and Viem.
 * @category Viem
 */
export const ARCTIC_1_VIEM_CHAIN: Chain = {
	blockExplorers: {
		default: {
			name: 'SeiTrace',
			url: 'https://seitrace.com'
		}
	},
	contracts: {
		addressPrecompile: { address: ADDRESS_PRECOMPILE_ADDRESS },
		bankPrecompile: { address: BANK_PRECOMPILE_ADDRESS },
		distributionPrecompile: { address: DISTRIBUTION_PRECOMPILE_ADDRESS },
		governancePrecompile: { address: GOVERNANCE_PRECOMPILE_ADDRESS },
		jsonPrecompile: { address: JSON_PRECOMPILE_ADDRESS },
		stakingPrecompile: { address: STAKING_PRECOMPILE_ADDRESS },
		wasmPrecompile: { address: WASM_PRECOMPILE_ADDRESS },
		ibcPrecompile: { address: IBC_PRECOMPILE_ADDRESS }
	},
	fees: undefined,
	id: SeiChainInfo.devnet.chainId,
	name: 'Sei Devnet',
	nativeCurrency: {
		name: 'Sei',
		decimals: 18,
		symbol: 'SEI'
	},
	rpcUrls: {
		default: {
			http: [SeiChainInfo.devnet.defaultRpc]
		}
	},
	sourceId: SeiChainInfo.devnet.chainId,
	testnet: true
};

/**
 * Creates and returns a Viem Chain with the default atlantic-2 configs and precompile contracts added.
 * @example
 * React: Use with `createWagmiConfig` for use in a WagmiProvider:
 * ```tsx
 * import { ReactNode } from 'react';
 * import { WagmiProvider } from 'wagmi';
 * import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 * import { ATLANTIC_2_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';
 *
 * const queryClient = new QueryClient();
 *
 * export const WalletProvider = ({ children }: { children: ReactNode }) => {
 *  return (
 *    <WagmiProvider config={createWagmiConfig(ATLANTIC_2_VIEM_CHAIN)}>
 *      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
 *    </WagmiProvider>
 *  );
 * };
 * ```
 * @returns A 'viem' package chain compatible with Wagmi and Viem.
 * @category Viem
 */
export const ATLANTIC_2_VIEM_CHAIN: Chain = {
	blockExplorers: {
		default: {
			name: 'SeiTrace',
			url: 'https://seitrace.com'
		}
	},
	// Precompiles are at the same address.
	contracts: {
		addressPrecompile: { address: ADDRESS_PRECOMPILE_ADDRESS },
		bankPrecompile: { address: BANK_PRECOMPILE_ADDRESS },
		distributionPrecompile: { address: DISTRIBUTION_PRECOMPILE_ADDRESS },
		governancePrecompile: { address: GOVERNANCE_PRECOMPILE_ADDRESS },
		jsonPrecompile: { address: JSON_PRECOMPILE_ADDRESS },
		stakingPrecompile: { address: STAKING_PRECOMPILE_ADDRESS },
		wasmPrecompile: { address: WASM_PRECOMPILE_ADDRESS },
		ibcPrecompile: { address: IBC_PRECOMPILE_ADDRESS }
	},
	fees: undefined,
	id: SeiChainInfo.testnet.chainId,
	name: 'Sei Testnet',
	nativeCurrency: {
		name: 'Sei',
		decimals: 18,
		symbol: 'SEI'
	},
	rpcUrls: {
		default: {
			http: [SeiChainInfo.testnet.defaultRpc]
		}
	},
	sourceId: SeiChainInfo.testnet.chainId,
	testnet: true
};

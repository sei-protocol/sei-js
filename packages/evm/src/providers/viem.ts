import { Chain } from 'viem';
import { SeiChainInfo } from '../chainInfo';
import {
	ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS,
	ARCTIC_1_BANK_PRECOMPILE_ADDRESS,
	ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS,
	ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS,
	ARCTIC_1_JSON_PRECOMPILE_ADDRESS,
	ARCTIC_1_STAKING_PRECOMPILE_ADDRESS,
	ARCTIC_1_WASM_PRECOMPILE_ADDRESS
} from '../precompiles';
import { ARCTIC_1_IBC_PRECOMPILE_ADDRESS } from '../precompiles/ibc';

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
		addressPrecompile: { address: ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS },
		bankPrecompile: { address: ARCTIC_1_BANK_PRECOMPILE_ADDRESS },
		distributionPrecompile: { address: ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS },
		governancePrecompile: { address: ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS },
		jsonPrecompile: { address: ARCTIC_1_JSON_PRECOMPILE_ADDRESS },
		stakingPrecompile: { address: ARCTIC_1_STAKING_PRECOMPILE_ADDRESS },
		wasmPrecompile: { address: ARCTIC_1_WASM_PRECOMPILE_ADDRESS },
		ibcPrecompile: { address: ARCTIC_1_IBC_PRECOMPILE_ADDRESS }
	},
	fees: undefined,
	id: SeiChainInfo.devnet.chainId,
	name: 'arctic-1',
	nativeCurrency: {
		name: 'usei',
		decimals: 18,
		symbol: 'USEI'
	},
	rpcUrls: {
		default: {
			http: [SeiChainInfo.devnet.defaultRpc]
		}
	},
	sourceId: SeiChainInfo.devnet.chainId,
	testnet: true
};

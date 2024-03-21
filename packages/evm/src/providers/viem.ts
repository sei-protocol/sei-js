import { Chain } from 'viem';
import { SeiChainInfo } from '../chainInfo';

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
		// addressPrecompile: { address: ADDRESS_PRECOMPILE.devnet.contractAddress }
		// bankPrecompile: { address: PrecompileContracts.bank.contractAddress },
		// distributionPrecompile: { address: PrecompileContracts.distribution.contractAddress },
		// governancePrecompile: { address: PrecompileContracts.governance.contractAddress },
		// jsonPrecompile: { address: PrecompileContracts.json.contractAddress },
		// stakingPrecompile: { address: PrecompileContracts.staking.contractAddress },
		// wasmPrecompile: { address: PrecompileContracts.wasm.contractAddress }
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

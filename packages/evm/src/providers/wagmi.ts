import { Chain, createClient } from 'viem';
import { createConfig, http } from 'wagmi';

/**
 * Creates and returns a Wagmi config for the passed in Viem chain.
 *
 * @example
 * React: Use with arctic-1 'viem' Chain and WagmiProvider
 * ```typescript
 * import { ARCTIC_1_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';
 *
 * const queryClient = new QueryClient();
 *
 * export const WalletProvider = ({ children }: { children: ReactNode }) => {
 *   return (
 *       <WagmiProvider config={createWagmiConfig(ARCTIC_1_VIEM_CHAIN)}>
 *         <QueryClientProvider client={queryClient}>
 *           {children}
 *         </QueryClientProvider>
 *       </WagmiProvider>
 *   );
 * };
 * ```
 * @returns Helper function to create a wagmi config given a Viem Chain.
 * @param chain - Chain from 'viem'.
 * @category Wagmi
 */
export const createWagmiConfig = (chain: Chain) => {
	return createConfig({
		chains: [chain],
		client({ chain }) {
			return createClient({ chain, transport: http() });
		}
	});
};

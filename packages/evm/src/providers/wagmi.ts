import { Chain, createClient } from 'viem';
import { createConfig, http } from 'wagmi';

/**
 * Creates and returns a Wagmi config for the passed in Viem chain.
 *
 * @example
 * Use with Wagmi in a React app:
 * ```typescript
 * import { ARCTIC_1_EVM_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';
 *
 * const queryClient = new QueryClient();
 *
 * export const WalletProvider = ({ children }: { children: ReactNode }) => {
 *   return (
 *       <WagmiProvider config={createWagmiConfig(ARCTIC_1_EVM_VIEM_CHAIN)}>
 *         <QueryClientProvider client={queryClient}>
 *           {children}
 *         </QueryClientProvider>
 *       </WagmiProvider>
 *   );
 * };
 * ```
 * @returns helper function to create a wagmi config given a Viem Chain.
 * @param chain - Viem Chain.
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

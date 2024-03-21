import { Chain, createClient } from 'viem';
import { createConfig, http, CreateConnectorFn } from 'wagmi';
import { injected } from '@wagmi/connectors';

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
 *       <WagmiProvider config={createWagmiConfig([ARCTIC_1_VIEM_CHAIN])}>
 *         <QueryClientProvider client={queryClient}>
 *           {children}
 *         </QueryClientProvider>
 *       </WagmiProvider>
 *   );
 * };
 * ```
 * @returns Helper function to create a wagmi config given a Viem Chain.
 * @param chains - An array of Chains from 'viem'.
 * @param additionalConnectors - A list of additional connectors to add to the Wagmi config for other wallets
 * @category Wagmi
 */
export const createWagmiConfig = (chains: [Chain], additionalConnectors: CreateConnectorFn[] = []) => {
	return createConfig({
		chains: chains,
		client({ chain }) {
			return createClient({ chain, transport: http() });
		},
		connectors: [
			...additionalConnectors,
			injected({ target: 'metaMask' }),
			// TODO: Add fin here
			injected({
				target: {
					id: 'compassWalletProvider',
					name: 'Compass',
					// @ts-ignore
					provider: window.compassEvm,
					icon: 'https://lh3.googleusercontent.com/zMrH9Wrqlv5BG0w28woqEnopKhXBdSvpLhs-nHYft9BcAvseloVTZDfTJu97cGjWVFUKZ4dM12Y-lyvipJOlcbcAtQ=s120'
				}
			})
		]
	});
};

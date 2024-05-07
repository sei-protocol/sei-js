import { Chain, createClient, http } from 'viem';
import { Config, createConfig, CreateConnectorFn, injected } from '@wagmi/core';

/**
 * Creates and returns a Wagmi config for the passed in Viem chain. This config includes the injected connector for MetaMask and Compass. If you need to add additional parameters it is recommended that you extend the object returned from this function.
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
 *       <WagmiProvider config={getBaseSeiWagmiConfig([ARCTIC_1_VIEM_CHAIN])}>
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
export const getBaseSeiWagmiConfig = (chains: [Chain], additionalConnectors: CreateConnectorFn[] = []): Config => {
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
					provider: window['compassEvm'],
					icon: 'https://lh3.googleusercontent.com/zMrH9Wrqlv5BG0w28woqEnopKhXBdSvpLhs-nHYft9BcAvseloVTZDfTJu97cGjWVFUKZ4dM12Y-lyvipJOlcbcAtQ=s120'
				}
			})
		]
	});
};

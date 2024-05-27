import { Chain, createClient, http } from 'viem';
import { Config, createConfig, CreateConnectorFn, injected } from '@wagmi/core';

/**
 * The default wallet connectors used in `getBaseSeiWagmiConfig`.
 * @category Wagmi
 */
const DEFAULT_WALLETS: CreateConnectorFn[] = [
	injected({
		target: {
			id: 'compassWalletProvider',
			name: 'Compass',
			provider: window['compassEvm'],
			icon: 'https://cdn.sei.io/sei-app/wallets/compass-icon.png'
		}
	}),
	injected({ target: 'metaMask' }),
	injected({ target: 'coinbaseWallet' })
];

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
 * @param connectors - A list of connectors to add to the Wagmi config for wallets
 * @category Wagmi
 */
export const getBaseSeiWagmiConfig = (chains: [Chain], connectors: CreateConnectorFn[] = DEFAULT_WALLETS): Config => {
	return createConfig({
		chains: chains,
		client({ chain }) {
			return createClient({ chain, transport: http() });
		},
		multiInjectedProviderDiscovery: false,
		connectors
	});
};

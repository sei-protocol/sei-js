import { ReactNode } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient } from 'viem';
import { ARCTIC_1_EVM_VIEM_CHAIN } from '@sei-js/evm/dist/types/src';

export const config = createConfig({
	chains: [ARCTIC_1_EVM_VIEM_CHAIN as unknown as any],
	client({ chain }) {
		return createClient({ chain, transport: http() });
	}
});

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: { children: ReactNode }) => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	);
};

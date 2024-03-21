import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ARCTIC_1_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: { children: ReactNode }) => {
	return (
		<WagmiProvider config={createWagmiConfig([ARCTIC_1_VIEM_CHAIN])}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	);
};

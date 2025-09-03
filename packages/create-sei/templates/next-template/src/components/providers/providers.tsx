'use client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RainbowKitProvider, connectorsForWallets, lightTheme } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useMemo } from 'react';
import { http, WagmiProvider, createConfig } from 'wagmi';

import '@rainbow-me/rainbowkit/styles.css';
import { sei, seiDevnet, seiTestnet } from 'viem/chains';

const queryClient = new QueryClient();

const connectors = connectorsForWallets(
	[
		{
			groupName: 'Recommended',
			wallets: [metaMaskWallet],
		},
	],
	{
		appName: 'Sei dApp',
		projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'your-project-id',
	}
);

interface ProvidersProps {
	children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	// Chain selection via environment variable, defaults to sei mainnet
	const getSelectedChain = () => {
		const chainName = process.env.NEXT_PUBLIC_CHAIN || 'mainnet';
		switch (chainName.toLowerCase()) {
			case 'testnet':
				return seiTestnet;
			case 'devnet':
				return seiDevnet;
			default:
				return sei;
		}
	};

	const chain = getSelectedChain();

	const config = useMemo(
		() =>
			createConfig({
				chains: [chain],
				connectors,
				transports: {
					[sei.id]: http(),
					[seiTestnet.id]: http(),
					[seiDevnet.id]: http(),
				},
				ssr: true,
			}),
		[chain]
	);

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<MantineProvider defaultColorScheme="light">
					<Notifications />
					<RainbowKitProvider
						theme={lightTheme({
							accentColor: '#9E1F19',
							accentColorForeground: 'white',
							borderRadius: 'medium',
							fontStack: 'system',
						})}
						appInfo={{
							appName: 'Sei dApp',
							learnMoreUrl: 'https://docs.sei.io/learn/wallets',
						}}
						modalSize="compact"
						initialChain={chain.id}
					>
						{children}
					</RainbowKitProvider>
				</MantineProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

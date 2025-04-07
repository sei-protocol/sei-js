'use client';

import { RainbowKitProvider, connectorsForWallets, lightTheme } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { Buffer } from 'buffer';
import { ReactNode, useMemo } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { selectedChain } from '../constants';

const queryClient = new QueryClient();

interface Web3ProviderProps {
	children: ReactNode;
}

const connectors = connectorsForWallets(
	[
		{
			groupName: 'Recommended',
			wallets: [metaMaskWallet]
		}
	],
	{
		appName: '<YOUR_APPNAME_HERE>',
		projectId: '<YOUR_ID_HERE>'
	}
);

function Web3Provider({ children }: Web3ProviderProps) {
	// Buffer polyfill
	if (typeof window !== 'undefined') {
		window.Buffer = window.Buffer ?? Buffer;
	}
	const chainConfig = selectedChain;
	const config = useMemo(
		() =>
			createConfig({
				chains: [chainConfig],
				connectors,
				transports: {
					[chainConfig.id]: http()
				}
			}),
		[chainConfig]
	);

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					theme={lightTheme({
						accentColor: '#7e1914',
						accentColorForeground: 'white',
						borderRadius: 'medium',
						fontStack: 'system'
					})}
					appInfo={{
						appName: '<APP-NAME-HERE>',
						learnMoreUrl: 'https://www.docs.sei.io/user-guides/wallet-setup'
					}}
					modalSize="compact"
					initialChain={chainConfig.id}
				>
					{children}
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default Web3Provider;

"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { connectorsForWallets, lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useMemo } from "react";
import { createConfig, http, WagmiProvider } from "wagmi";

import "@rainbow-me/rainbowkit/styles.css";
import { defineChain } from "viem";
import { sei, seiTestnet } from "viem/chains";

const seiDevnet = defineChain({
	id: 713715,
	name: "Sei Devnet",
	nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
	rpcUrls: {
		default: {
			http: ["https://evm-rpc-arctic-1.sei-apis.com"],
		},
	},
	blockExplorers: {
		default: {
			name: "Seitrace",
			url: "https://seitrace.com",
		},
	},
	testnet: true,
});

const queryClient = new QueryClient();

const connectors = connectorsForWallets(
	[
		{
			groupName: "Recommended",
			wallets: [metaMaskWallet],
		},
	],
	{
		appName: "Sei dApp",
		projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "your-project-id",
	}
);

interface ProvidersProps {
	children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	// Chain selection via environment variable, defaults to sei mainnet
	const getSelectedChain = () => {
		const chainName = process.env.NEXT_PUBLIC_CHAIN || "mainnet";
		switch (chainName.toLowerCase()) {
			case "testnet":
				return seiTestnet;
			case "devnet":
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
							accentColor: "#9E1F19",
							accentColorForeground: "white",
							borderRadius: "medium",
							fontStack: "system",
						})}
						appInfo={{
							appName: "Sei dApp",
							learnMoreUrl: "https://docs.sei.io/learn/wallets",
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

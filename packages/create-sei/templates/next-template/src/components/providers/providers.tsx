"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { connectorsForWallets, lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useMemo } from "react";
import { createConfig, http, WagmiProvider } from "wagmi";

import "@rainbow-me/rainbowkit/styles.css";
import { sei, seiTestnet } from "viem/chains";

const queryClient = new QueryClient();
const theme = createTheme({
	autoContrast: true,
	colors: {
		gray: ["#f5f5f7", "#f5f5f7", "#cccccc", "#999999", "#666666", "#666666", "#333333", "#333333", "#131313", "#000000"],
		seiGold: ["#966f22", "#966f22", "#966f22", "#966f22", "#966f22", "#966f22", "#966f22", "#966f22", "#966f22", "#966f22"],
		seiMaroon: ["#600014", "#600014", "#600014", "#600014", "#600014", "#600014", "#600014", "#600014", "#600014", "#600014"],
	},
	fontFamily: "var(--sei-font-body)",
	fontFamilyMonospace: "var(--sei-font-mono)",
	headings: {
		fontFamily: "var(--sei-font-display)",
	},
	primaryColor: "seiMaroon",
	primaryShade: 9,
});

const connectors = connectorsForWallets(
	[
		{
			groupName: "Recommended",
			wallets: [injectedWallet],
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
				},
				ssr: true,
			}),
		[chain]
	);

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<MantineProvider defaultColorScheme="light" theme={theme}>
					<Notifications />
					<RainbowKitProvider
						theme={lightTheme({
							accentColor: "var(--sei-maroon)",
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

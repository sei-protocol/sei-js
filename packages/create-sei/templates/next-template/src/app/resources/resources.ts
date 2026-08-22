import { IconBook, IconBrandTelegram, IconBrandX, IconCode, IconPackage } from "@tabler/icons-react";

export const developerResources = [
	{
		title: "Sei Docs",
		description: "Official protocol docs, guides, and references.",
		href: "https://docs.sei.io/",
		icon: IconBook,
	},
	{
		title: "Wagmi",
		description: "React hooks for Ethereum development.",
		href: "https://wagmi.sh/",
		icon: IconCode,
	},
	{
		title: "Viem",
		description: "TypeScript interface for Ethereum.",
		href: "https://viem.sh/",
		icon: IconPackage,
	},
] as const;

export const socialLinks = [
	{
		title: "Developer Telegram",
		description: "Chat with the community and get support.",
		href: "https://t.me/seinetwork",
		icon: IconBrandTelegram,
	},
	{
		title: "Sei on X",
		description: "Follow Sei Network updates on X (Twitter).",
		href: "https://x.com/SeiNetwork",
		icon: IconBrandX,
	},
	{
		title: "Sei Labs on X",
		description: "Follow Sei Labs announcements on X (Twitter).",
		href: "https://x.com/Sei_Labs",
		icon: IconBrandX,
	},
] as const;

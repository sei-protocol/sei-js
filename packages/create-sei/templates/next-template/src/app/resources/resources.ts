import { IconBook, IconBrandTelegram, IconBrandX, IconCode, IconPackage } from '@tabler/icons-react';

export const developerResources = [
	{
		title: 'Sei Docs',
		description: 'Official protocol docs, guides, and references.',
		href: 'https://docs.sei.io/',
		icon: IconBook,
		color: 'violet',
	},
	{
		title: '@sei-js docs',
		description: 'SDKs, examples, templates, and tooling for Sei.',
		href: 'https://sei-js.docs.sei.io/introduction',
		icon: IconBook,
		color: 'grape',
	},
	{
		title: 'Wagmi',
		description: 'React hooks for Ethereum development.',
		href: 'https://wagmi.sh/',
		icon: IconCode,
		color: 'blue',
	},
	{
		title: 'Viem',
		description: 'TypeScript interface for Ethereum.',
		href: 'https://viem.sh/',
		icon: IconPackage,
		color: 'green',
	},
] as const;

export const socialLinks = [
	{
		title: 'Developer Telegram',
		description: 'Chat with the community and get support.',
		href: 'https://t.me/seinetwork',
		icon: IconBrandTelegram,
		color: 'cyan',
	},
	{
		title: 'Sei on X',
		description: 'Follow Sei Network updates on X (Twitter).',
		href: 'https://x.com/SeiNetwork',
		icon: IconBrandX,
		color: 'dark',
	},
	{
		title: 'Sei Labs on X',
		description: 'Follow Sei Labs announcements on X (Twitter).',
		href: 'https://x.com/Sei_Labs',
		icon: IconBrandX,
		color: 'dark',
	},
] as const;

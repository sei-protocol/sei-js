'use client';

import { Badge, Button, Card, Code, Container, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IconBook, IconCode, IconRocket } from '@tabler/icons-react';
import Link from 'next/link';

export default function Landing() {
	return (
		<Container size="md" py="xl">
			<Stack gap="xl" align="center">
				{/* Hero Section */}
				<Stack gap="md" align="center" ta="center">
					<Title order={1} size="h1" fw={700} c="gray.9">
						Welcome to Your Sei dApp
					</Title>
					<Text size="lg" c="dimmed" maw={600}>
						A production-ready starter template built with Next.js, Mantine UI, RainbowKit, Tailwind CSS, and Wagmi with easy deployment to Vercel. Everything
						you need to build and run production-grade dApps on Sei.
					</Text>

					{/* Tech Stack Badges */}
					<Group gap="xs" mt="sm">
						<Badge variant="light" color="blue" style={{ backgroundColor: 'rgb(239 246 255)', color: 'rgb(29 78 216)', border: '1px solid rgb(191 219 254)' }}>
							Next.js 14
						</Badge>
						<Badge
							variant="light"
							color="violet"
							style={{ backgroundColor: 'rgb(250 245 255)', color: 'rgb(109 40 217)', border: '1px solid rgb(196 181 253)' }}
						>
							Mantine UI
						</Badge>
						<Badge variant="light" color="cyan" style={{ backgroundColor: 'rgb(236 254 255)', color: 'rgb(14 116 144)', border: '1px solid rgb(165 243 252)' }}>
							Tailwind CSS
						</Badge>
						<Badge variant="light" color="yellow" style={{ backgroundColor: 'rgb(254 249 195)', color: 'rgb(161 98 7)', border: '1px solid rgb(254 240 138)' }}>
							Biome
						</Badge>
						<Badge
							variant="light"
							color="orange"
							style={{ backgroundColor: 'rgb(255 247 237)', color: 'rgb(194 65 12)', border: '1px solid rgb(254 215 170)' }}
						>
							RainbowKit
						</Badge>
						<Badge variant="light" color="teal" style={{ backgroundColor: 'rgb(240 253 250)', color: 'rgb(15 118 110)', border: '1px solid rgb(153 246 228)' }}>
							Wagmi + Viem
						</Badge>
						<Badge variant="light" color="dark" style={{ backgroundColor: 'rgb(249 250 251)', color: 'rgb(17 24 39)', border: '1px solid rgb(209 213 219)' }}>
							Vercel
						</Badge>
					</Group>
				</Stack>

				{/* Primary Call to Action - Connect Wallet */}
				<Card
					withBorder
					radius="xl"
					p="xl"
					bg="gradient-to-r from-blue-50 to-purple-50"
					w="100%"
					maw={600}
					style={{ border: '2px solid var(--mantine-color-blue-2)' }}
				>
					<Stack gap="lg" align="center" ta="center">
						<ThemeIcon size={64} radius="xl" color="blue" variant="light">
							<IconRocket size={32} />
						</ThemeIcon>
						<Stack gap="sm" align="center">
							<Text fw={700} size="xl" c="blue.8">
								Connect Your Wallet to Get Started
							</Text>
							<Text size="md" c="dimmed" maw={400}>
								Explore interactive examples and see real-time Sei interactions
							</Text>
						</Stack>
						<ConnectButton />
					</Stack>
				</Card>

				{/* Development Tip */}
				<Card withBorder radius="md" p="md" bg="gray.0" maw={600}>
					<Text size="xs" c="dimmed" ta="center">
						💡 <strong>Development Tip:</strong> Start by exploring the examples in the connected app, then customize{' '}
						<Code>src/components/default/index.tsx</Code> to build your unique dApp features.
					</Text>
				</Card>

				{/* Quick Links */}
				<Stack gap="sm" w="100%" maw={600} mt="xl">
					<Text fw={600} size="sm" ta="center" c="gray.7" mb="xs">
						Quick Links
					</Text>
					<Group gap="md" grow>
						<Button component={Link} href="/resources" variant="light" color="gray" size="sm" leftSection={<IconBook size={16} />} style={{ flex: 1 }}>
							Developer Resources
						</Button>
						<Button component={Link} href="/development" variant="light" color="gray" size="sm" leftSection={<IconCode size={16} />} style={{ flex: 1 }}>
							Continue Development
						</Button>
					</Group>
				</Stack>
			</Stack>
		</Container>
	);
}

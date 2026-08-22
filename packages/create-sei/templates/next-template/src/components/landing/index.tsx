"use client";

import { Badge, Button, Card, Code, Container, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IconBook, IconCode, IconRocket } from "@tabler/icons-react";
import Link from "next/link";

const technologyLabels = ["Next.js 15.5", "Mantine UI", "Tailwind CSS", "Biome", "RainbowKit", "Wagmi + Viem"];

export default function Landing() {
	return (
		<Container size="md" py="xl">
			<Stack gap="xl" align="center">
				{/* Hero Section */}
				<Stack gap="md" align="center" ta="center">
					<Title order={1} size="h1" fw={700} c="seiMaroon.9" className="sei-heading">
						Welcome to Your Sei dApp
					</Title>
					<Text size="lg" c="dimmed" maw={600}>
						A production-ready starter template built with Next.js, Mantine UI, RainbowKit, Tailwind CSS, and Wagmi. Everything you need to build and run
						production-grade dApps on Sei.
					</Text>

					{/* Tech Stack Badges */}
					<Group gap="xs" mt="sm">
						{technologyLabels.map((label) => (
							<Badge key={label} variant="outline" color="gray">
								{label}
							</Badge>
						))}
					</Group>
				</Stack>

				{/* Primary Call to Action - Connect Wallet */}
				<Card withBorder radius="xl" p="xl" w="100%" maw={600} bg="white" style={{ border: "2px solid var(--sei-maroon)" }}>
					<Stack gap="lg" align="center" ta="center">
						<ThemeIcon size={64} radius="xl" variant="outline" color="seiMaroon">
							<IconRocket size={32} />
						</ThemeIcon>
						<Stack gap="sm" align="center">
							<Text fw={700} size="xl" c="seiMaroon.9" className="sei-heading">
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
						💡 <strong>Development Tip:</strong> Start by exploring the examples in the connected app, then customize{" "}
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

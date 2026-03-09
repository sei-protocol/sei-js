'use client';

import { Shell } from '@/components';
import { Button, Card, Code, Container, Group, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCode, IconExternalLink } from '@tabler/icons-react';

export default function DevelopmentPage() {
	return (
		<Shell>
			<Container size="lg" py="xl">
				<Stack gap="xl">
					{/* Header */}
					<div>
						<Group gap="md" align="center" mb="lg">
							<ThemeIcon size={48} radius="md" c="purple" variant="light">
								<IconCode size={24} />
							</ThemeIcon>
							<div>
								<Title order={1} fw={700} c="gray.9">
									Continue Development
								</Title>
								<Text size="lg" c="gray.6" mt={4}>
									Build amazing dApps with the tools you already have
								</Text>
							</div>
						</Group>
					</div>

					{/* Development Stack Section */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								🔧 Your Development Stack
							</Title>
							<Text c="gray.7">This template comes pre-configured with powerful tools for blockchain development:</Text>
							<Stack gap="sm">
								<Paper
									p="md"
									radius="md"
									bg="blue.0"
									withBorder
									component="a"
									href="https://wagmi.sh/react/getting-started"
									target="_blank"
									style={{ textDecoration: 'none', cursor: 'pointer' }}
								>
									<Group gap="sm" justify="space-between">
										<Group gap="sm">
											<Text fw={600} c="blue.8">
												Wagmi:
											</Text>
											<Text c="gray.7">React hooks for Ethereum - useAccount, useBalance, useSendTransaction, useContract</Text>
										</Group>
										<IconExternalLink size={16} color="var(--mantine-color-blue-8)" />
									</Group>
								</Paper>
								<Paper
									p="md"
									radius="md"
									bg="green.0"
									withBorder
									component="a"
									href="https://viem.sh/"
									target="_blank"
									style={{ textDecoration: 'none', cursor: 'pointer' }}
								>
									<Group gap="sm" justify="space-between">
										<Group gap="sm">
											<Text fw={600} c="green.8">
												Viem:
											</Text>
											<Text c="gray.7">TypeScript interface for Ethereum - formatEther, parseEther, contract interactions</Text>
										</Group>
										<IconExternalLink size={16} color="var(--mantine-color-green-8)" />
									</Group>
								</Paper>
								<Paper
									p="md"
									radius="md"
									bg="orange.0"
									withBorder
									component="a"
									href="https://www.rainbowkit.com/docs/introduction"
									target="_blank"
									style={{ textDecoration: 'none', cursor: 'pointer' }}
								>
									<Group gap="sm" justify="space-between">
										<Group gap="sm">
											<Text fw={600} c="orange.8">
												RainbowKit:
											</Text>
											<Text c="gray.7">Beautiful wallet connection UI with support for 100+ wallets</Text>
										</Group>
										<IconExternalLink size={16} color="var(--mantine-color-orange-8)" />
									</Group>
								</Paper>
							</Stack>
						</Stack>
					</Card>

					{/* Environment Variables Section */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								⚙️ Network Configuration
							</Title>
							<Text c="gray.7">Control which Sei network your app connects to using environment variables:</Text>
							<Paper p="md" radius="md" bg="gray.0" withBorder>
								<Code block>
									{`# .env.local
NEXT_PUBLIC_CHAIN=mainnet    # Default: Sei Pacific-1
# NEXT_PUBLIC_CHAIN=testnet  # Sei Atlantic-2  
# NEXT_PUBLIC_CHAIN=devnet   # Sei Devnet`}
								</Code>
							</Paper>
							<Text size="sm" c="gray.6">
								The chain selection logic is in <Code>src/components/providers/providers.tsx</Code>
							</Text>
						</Stack>
					</Card>

					{/* Custom Chain Section */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								🔗 Custom Chain Configuration
							</Title>
							<Text c="gray.7">Need to connect to a custom Sei network or local development chain? Modify the chain configuration in the providers file:</Text>
							<Paper p="md" radius="md" bg="gray.0" withBorder>
								<Code block>
									{`// src/components/providers/providers.tsx
import { defineChain } from 'viem'

const customSeiChain = defineChain({
  id: 1234, // Your chain ID
  name: 'Custom Sei',
  nativeCurrency: { name: 'SEI', symbol: 'SEI', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://localhost:8545'] }
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.example.com' }
  }
})`}
								</Code>
							</Paper>
						</Stack>
					</Card>

					{/* Next Steps Section */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								🚀 What's Next?
							</Title>
							<Text c="gray.7">You're all set to build! Here are some ideas to get you started:</Text>
							<Stack gap="sm">
								<Group gap="sm">
									<Text fw={600} c="purple.7">
										•
									</Text>
									<Text c="gray.7">
										Create smart contract interactions using <Code>useWriteContract</Code>
									</Text>
								</Group>
								<Group gap="sm">
									<Text fw={600} c="purple.7">
										•
									</Text>
									<Text c="gray.7">
										Build token swaps with <Code>useSimulateContract</Code> and <Code>useWaitForTransactionReceipt</Code>
									</Text>
								</Group>
								<Group gap="sm">
									<Text fw={600} c="purple.7">
										•
									</Text>
									<Text c="gray.7">
										Add ENS support with <Code>useEnsName</Code> and <Code>useEnsAvatar</Code>
									</Text>
								</Group>
								<Group gap="sm">
									<Text fw={600} c="purple.7">
										•
									</Text>
									<Text c="gray.7">Implement multi-chain support by extending the chain configuration</Text>
								</Group>
								<Group gap="sm">
									<Text fw={600} c="purple.7">
										•
									</Text>
									<Text c="gray.7">Add more Sei precompiles for advanced blockchain interactions</Text>
								</Group>
							</Stack>
						</Stack>
					</Card>

					{/* Resources Section */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								📚 Resources & Documentation
							</Title>
							<Group gap="md" wrap="wrap">
								<Button
									component="a"
									href="https://wagmi.sh/react/getting-started"
									target="_blank"
									variant="light"
									c="blue"
									size="sm"
									radius="md"
									leftSection={<IconExternalLink size={14} />}
								>
									Wagmi Docs
								</Button>
								<Button
									component="a"
									href="https://viem.sh/"
									target="_blank"
									variant="light"
									c="green"
									size="sm"
									radius="md"
									leftSection={<IconExternalLink size={14} />}
								>
									Viem Docs
								</Button>
								<Button
									component="a"
									href="https://docs.sei.io/"
									target="_blank"
									variant="light"
									c="orange"
									size="sm"
									radius="md"
									leftSection={<IconExternalLink size={14} />}
								>
									Sei Docs
								</Button>
								<Button
									component="a"
									href="https://www.rainbowkit.com/docs/introduction"
									target="_blank"
									variant="light"
									c="purple"
									size="sm"
									radius="md"
									leftSection={<IconExternalLink size={14} />}
								>
									RainbowKit
								</Button>
							</Group>
						</Stack>
					</Card>
				</Stack>
			</Container>
		</Shell>
	);
}

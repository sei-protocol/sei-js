'use client';

import React from 'react';
import { CodeHighlight } from '@mantine/code-highlight';
import { ActionIcon, Badge, Button, Card, Collapse, Container, Flex, Group, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { BANK_PRECOMPILE_ADDRESS, VIEM_BANK_PRECOMPILE_ABI } from '@sei-js/precompiles';
import { IconBulb, IconChevronDown, IconChevronUp, IconCopy, IconDatabase } from '@tabler/icons-react';
import { useState } from 'react';
import { type ReadContractParameters, formatEther } from 'viem';
import { useAccount, usePublicClient } from 'wagmi';

function Examples() {
	const [supply, setSupply] = useState('');
	const [showCode, setShowCode] = useState(false);

	const publicClient = usePublicClient();
	const { address } = useAccount();

	const formatLargeSeiNumber = (num: string, decimals: number): string => {
		if (num.length > 10) {
			return `${(Number(num) / 1000000 / 1000000000).toLocaleString(navigator.language, {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			})} B`;
		}
		return (Number(num) / 1000000).toLocaleString(navigator.language);
	};

	const copyToClipboard = (text: string) => {
		try {
			navigator.clipboard.writeText(text).then(() => {
				notifications.show({
					title: 'Copied!',
					message: 'Code copied to clipboard',
					color: 'green'
				});
			});
		} catch (err) {
			console.error('Failed to copy text: ', err);
			notifications.show({
				title: 'Error',
				message: 'Failed to copy to clipboard',
				color: 'red'
			});
		}
	};

	const getSeiSupply = async () => {
		if (!publicClient) {
			return undefined;
		}

		const readContractParams: ReadContractParameters = {
			abi: VIEM_BANK_PRECOMPILE_ABI,
			address: BANK_PRECOMPILE_ADDRESS,
			functionName: 'supply',
			args: ['usei']
		};

		try {
			const result = await publicClient.readContract(readContractParams);
			setSupply((result as bigint).toString());
		} catch (error) {
			console.error('Error fetching supply:', error);
			notifications.show({
				title: 'Error',
				message: 'Failed to fetch SEI supply',
				color: 'red'
			});
		}
	};

	const codeExample = `// Sei Precompile Example - Bank Precompile
import { BANK_PRECOMPILE_ADDRESS, VIEM_BANK_PRECOMPILE_ABI } from '@sei-js/precompiles';
import { usePublicClient } from 'wagmi';

const publicClient = usePublicClient();

const getSeiSupply = async () => {
  const readContractParams = {
    abi: VIEM_BANK_PRECOMPILE_ABI,
    address: BANK_PRECOMPILE_ADDRESS,
    functionName: 'supply',
    args: ['usei'],
  };

  const result = await publicClient?.readContract(readContractParams);
  return (result as bigint).toString();
};`;

	return (
		<Container size="xl" py="xl" pos="relative">
			<Stack gap="xl">
				{/* Header */}
				<div>
					<Group gap="md" align="center" mb="lg">
						<ThemeIcon size={48} radius="md" c="orange" variant="light">
							<IconBulb size={24} />
						</ThemeIcon>
						<div>
							<Title order={1} fw={700} c="gray.9">
								Sei Precompiles
							</Title>
							<Text size="lg" c="gray.6" mt={4}>
								Access native Sei blockchain functionality through EVM precompiles
							</Text>
						</div>
					</Group>
				</div>

				{/* Precompile Example Card */}
				<Card shadow="xs" p="lg" radius="md" withBorder>
					<Stack gap="md">
						<Flex justify="space-between" align="flex-start">
							<Stack gap="xs">
								<Group gap="md">
									<ThemeIcon size={40} radius="md" color="orange" variant="light">
										<IconDatabase size={20} />
									</ThemeIcon>
									<Title order={3} fw={600} c="gray.9">
										Bank Precompile
									</Title>
								</Group>
								<Text size="sm" c="gray.6">
									Query total SEI supply using Sei's native{' '}
									<Text component="a" href="https://www.docs.sei.io/dev-interoperability/precompiles/bank" target="_blank" c="orange" td="underline">
										Bank precompile
									</Text>
								</Text>
							</Stack>
							<Badge color="orange" variant="light" size="md" radius="md">
								precompiles
							</Badge>
						</Flex>

						<Paper p="md" radius="md" withBorder bg="gray.0">
							<Text size="xs" fw={500} c="gray.6">
								Total Supply
							</Text>
							<Flex justify="space-between" align="center">
								<Flex align="baseline" gap="xs">
									{supply ? (
										<>
											<Text fw={700} size="xl" c="gray.9" ff="monospace">
												{formatLargeSeiNumber(supply, 2)}
											</Text>
											<Text size="sm" c="gray.6" fw={500}>
												SEI
											</Text>
										</>
									) : (
										<Paper px="sm" py={4} bg="white" radius="md" withBorder>
											<Flex align="baseline" gap="xs">
												<Text fw={700} size="xl" c="gray.5" ff="monospace">
													—
												</Text>
												<Text size="sm" c="gray.6" fw={500}>
													SEI
												</Text>
											</Flex>
										</Paper>
									)}
								</Flex>
								<Button onClick={getSeiSupply} size="sm" radius="md" variant="light" color="orange" leftSection={<IconDatabase size={14} />}>
									{supply ? 'Refresh' : 'Query Supply'}
								</Button>
							</Flex>
						</Paper>

						<Group justify="space-between" align="center" mt="sm">
							<Button
								variant="subtle"
								color="gray"
								size="sm"
								radius="md"
								leftSection={showCode ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
								onClick={() => setShowCode(!showCode)}
							>
								{showCode ? 'Hide' : 'View'} Implementation
							</Button>
							{showCode && (
								<ActionIcon variant="subtle" color="gray" size="sm" radius="md" onClick={() => copyToClipboard(codeExample)}>
									<IconCopy size={14} />
								</ActionIcon>
							)}
						</Group>

						<Collapse in={showCode}>
							<Paper mt="sm" p="md" bg="gray.0" radius="md" withBorder>
								<CodeHighlight code={codeExample} language="tsx" withCopyButton={false} expandCodeLabel="" collapseCodeLabel="" />
							</Paper>
						</Collapse>
					</Stack>
				</Card>
			</Stack>
		</Container>
	);
}

export default Examples;

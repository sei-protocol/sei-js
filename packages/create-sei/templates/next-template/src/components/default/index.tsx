'use client';

import { CodeHighlight } from '@mantine/code-highlight';
import {
	ActionIcon,
	Alert,
	Badge,
	Button,
	Card,
	Code,
	Collapse,
	Container,
	Flex,
	Group,
	Loader,
	Paper,
	Stack,
	Text,
	TextInput,
	ThemeIcon,
	Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconBulb, IconChevronDown, IconChevronUp, IconCoins, IconCopy, IconLogout, IconSend, IconWallet } from '@tabler/icons-react';
import { useState } from 'react';
import { formatEther, parseEther } from 'viem';
import { useAccount, useDisconnect, usePublicClient, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { balanceCodeExample, transactionCodeExample, walletCodeExample } from './examples';

function Examples() {
	const [balance, setBalance] = useState('');
	const [recipient, setRecipient] = useState('');
	const [amount, setAmount] = useState('');

	// Code visibility toggles
	const [showWalletCode, setShowWalletCode] = useState(false);
	const [showBalanceCode, setShowBalanceCode] = useState(false);
	const [showTransactionCode, setShowTransactionCode] = useState(false);

	const publicClient = usePublicClient();
	const { address, isConnected } = useAccount();
	const { disconnect } = useDisconnect();

	// Transaction hooks
	const { data: hash, sendTransaction, isPending } = useSendTransaction();
	const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
		hash,
	});

	const copyToClipboard = (text: string) => {
		try {
			navigator.clipboard.writeText(text).then(() => {
				notifications.show({
					title: 'Copied!',
					message: 'Code copied to clipboard',
					color: 'green',
				});
			});
		} catch (err) {
			console.error('Failed to copy text: ', err);
			notifications.show({
				title: 'Error',
				message: 'Failed to copy to clipboard',
				color: 'red',
			});
		}
	};

	const getBalanceWagmi = async () => {
		if (!address || !publicClient) {
			return undefined;
		}
		const weiBalance = await publicClient.getBalance({ address });
		const seiBalance = formatEther(weiBalance);
		setBalance(seiBalance);
	};

	const sendSei = async () => {
		if (!recipient || !amount) {
			notifications.show({
				title: 'Missing Information',
				message: 'Please enter recipient address and amount',
				color: 'orange',
			});
			return;
		}

		try {
			sendTransaction({
				to: recipient as `0x${string}`,
				value: parseEther(amount),
			});
		} catch (error) {
			console.error('Transaction error:', error);
			notifications.show({
				title: 'Transaction Error',
				message: 'Failed to send transaction',
				color: 'red',
			});
		}
	};

	return (
		<Container size="xl" py="xl" pos="relative">
			<Stack gap="xl">
				{/* Header */}
				<div>
					<Group gap="md" align="center" mb="lg">
						<ThemeIcon size={48} radius="md" c="blue" variant="light">
							<IconBulb size={24} />
						</ThemeIcon>
						<div>
							<Title order={1} fw={700} c="gray.9">
								Interactive Examples
							</Title>
							<Text size="lg" c="gray.6" mt={4}>
								Common blockchain development patterns with live code examples
							</Text>
						</div>
					</Group>
				</div>

				{/* Wallet Connection Info */}
				<Card shadow="xs" p="lg" radius="md" withBorder>
					<Stack gap="md">
						<Flex justify="space-between" align="flex-start">
							<Stack gap="xs">
								<Group gap="md">
									<ThemeIcon size={40} radius="md" color="blue" variant="light">
										<IconWallet size={20} />
									</ThemeIcon>
									<Title order={4} fw={600} c="gray.9">
										Connected Wallet
									</Title>
								</Group>
								<Text size="sm" c="gray.6">
									Access wallet information using Wagmi's useAccount hook
								</Text>
							</Stack>
							<Badge color="blue" variant="light" size="md" radius="md">
								address
							</Badge>
						</Flex>
						<Paper p="md" radius="md" withBorder bg="gray.0">
							<Text size="xs" fw={500} c="gray.6">
								Wallet Address
							</Text>
							<Flex justify="space-between" align="center">
								<Code bg="white" p="xs">
									{address || 'No wallet connected'}
								</Code>
								{isConnected && address && (
									<Group gap="xs">
										<ActionIcon variant="light" color="blue" size="sm" radius="md" onClick={() => copyToClipboard(address)} aria-label="Copy address">
											<IconCopy size={14} />
										</ActionIcon>
										<ActionIcon variant="light" color="red" size="sm" radius="md" onClick={() => disconnect()} aria-label="Disconnect wallet">
											<IconLogout size={14} />
										</ActionIcon>
									</Group>
								)}
							</Flex>
						</Paper>

						<Group justify="space-between" align="center" mt="sm">
							<Button
								variant="subtle"
								color="gray"
								size="sm"
								radius="md"
								leftSection={showWalletCode ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
								onClick={() => setShowWalletCode(!showWalletCode)}
							>
								{showWalletCode ? 'Hide' : 'View'} Implementation
							</Button>
							{showWalletCode && (
								<ActionIcon variant="subtle" color="gray" size="sm" radius="md" onClick={() => copyToClipboard(walletCodeExample)}>
									<IconCopy size={14} />
								</ActionIcon>
							)}
						</Group>

						<Collapse in={showWalletCode}>
							<Paper mt="sm" p="md" bg="gray.0" radius="md" withBorder>
								<CodeHighlight code={walletCodeExample} language="tsx" withCopyButton={false} expandCodeLabel="" collapseCodeLabel="" />
							</Paper>
						</Collapse>
					</Stack>
				</Card>

				<Stack gap="lg">
					{/* Balance Example */}
					<Card shadow="xs" p="lg" radius="md" withBorder>
						<Stack gap="md">
							<Flex justify="space-between" align="flex-start">
								<Stack gap="xs">
									<Flex align="center" gap="md">
										<ThemeIcon size={40} radius="md" color="green" variant="light">
											<IconCoins size={20} />
										</ThemeIcon>
										<Title order={3} size="h3" fw={600}>
											Wallet Balance
										</Title>
									</Flex>
									<Text size="sm" c="gray.6">
										Query your wallet's SEI balance using Wagmi's usePublicClient hook
									</Text>
								</Stack>
								<Badge color="green" variant="light" size="md" radius="md">
									balance
								</Badge>
							</Flex>
							<Paper p="md" radius="md" withBorder bg="gray.0">
								<Text size="xs" fw={500} c="gray.6">
									Current Balance
								</Text>
								<Flex justify="space-between" align="center">
									<Flex align="baseline" gap="xs">
										{balance ? (
											<>
												<Text fw={700} size="xl" c="gray.9" ff="monospace">
													{Number.parseFloat(balance).toFixed(4)}
												</Text>
												<Text size="sm" c="gray.6" fw={500}>
													SEI
												</Text>
											</>
										) : (
											<Paper px="sm" py={4} radius="md" withBorder bg="white">
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
									<Button
										onClick={getBalanceWagmi}
										disabled={!address}
										size="sm"
										radius="md"
										variant="light"
										color="green"
										leftSection={<IconCoins size={14} />}
									>
										{balance ? 'Refresh' : 'Check Balance'}
									</Button>
								</Flex>
							</Paper>

							<Group justify="space-between" align="center" mt="sm">
								<Button
									variant="subtle"
									color="gray"
									size="sm"
									radius="md"
									leftSection={showBalanceCode ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
									onClick={() => setShowBalanceCode(!showBalanceCode)}
								>
									{showBalanceCode ? 'Hide' : 'View'} Implementation
								</Button>
								{showBalanceCode && (
									<ActionIcon variant="subtle" color="gray" size="sm" radius="md" onClick={() => copyToClipboard(balanceCodeExample)}>
										<IconCopy size={14} />
									</ActionIcon>
								)}
							</Group>

							<Collapse in={showBalanceCode}>
								<Paper mt="sm" p="md" bg="gray.0" radius="md" withBorder>
									<CodeHighlight code={balanceCodeExample} language="tsx" withCopyButton={false} expandCodeLabel="" collapseCodeLabel="" />
								</Paper>
							</Collapse>
						</Stack>
					</Card>

					{/* Transaction Example */}
					<Card shadow="xs" p="lg" radius="md" withBorder>
						<Stack gap="md">
							<Flex direction="row" justify="space-between" align="flex-start">
								<Stack gap="xs">
									<Flex direction="row" align="center" gap="md" mb="md">
										<ThemeIcon size={40} radius="md" color="blue" variant="light">
											<IconSend size={20} />
										</ThemeIcon>
										<Title order={3} size="h3" fw={600} c="gray.9">
											Send Transaction
										</Title>
									</Flex>
									<Text c="gray.6" size="sm" maw={400}>
										Send SEI tokens using Wagmi's transaction hooks with real-time status
									</Text>
								</Stack>
								<Badge color="blue" variant="light" size="md" radius="md">
									transfer
								</Badge>
							</Flex>
							<Paper p="md" radius="md" withBorder bg="gray.0">
								<Flex align="flex-end" gap="sm">
									<Flex flex={1} direction="column">
										<Text size="xs" fw={500} c="gray.6" mb={4}>
											Recipient Address
										</Text>
										<TextInput placeholder="0x..." value={recipient} onChange={(e) => setRecipient(e.currentTarget.value)} radius="md" size="md" />
									</Flex>
									<Flex w={128} direction="column">
										<Text size="xs" fw={500} c="gray.6" mb={4}>
											Amount
										</Text>
										<TextInput
											placeholder="0.1"
											value={amount}
											onChange={(e) => setAmount(e.currentTarget.value)}
											radius="md"
											size="md"
											rightSection={
												<Text size="xs" c="gray.6" fw={500} pr="xs">
													SEI
												</Text>
											}
										/>
									</Flex>
									<Button
										onClick={sendSei}
										disabled={isPending || !address || !recipient || !amount}
										size="md"
										radius="md"
										variant="light"
										color="blue"
										px="sm"
									>
										{isPending ? <Loader size={16} /> : <IconSend size={16} />}
									</Button>
								</Flex>
							</Paper>

							{hash && (
								<Alert color="blue" variant="light" radius="md" py={4}>
									<Stack gap={4}>
										<Text size="xs" fw={600}>
											Transaction Hash
										</Text>
										<Code>{hash}</Code>
									</Stack>
								</Alert>
							)}

							{isConfirming && (
								<Alert color="yellow" variant="light" radius="md" py={4}>
									<Group gap="xs">
										<Loader size={14} />
										<Text size="xs" fw={500}>
											Waiting for confirmation...
										</Text>
									</Group>
								</Alert>
							)}

							{isConfirmed && (
								<Alert color="green" variant="light" radius="md" py={4}>
									<Text size="xs" fw={600}>
										✅ Transaction confirmed!
									</Text>
								</Alert>
							)}

							<Group justify="space-between" align="center" mt={8}>
								<Button
									variant="subtle"
									color="gray"
									size="sm"
									radius="xl"
									leftSection={showTransactionCode ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />}
									onClick={() => setShowTransactionCode(!showTransactionCode)}
								>
									{showTransactionCode ? 'Hide' : 'View'} Implementation
								</Button>
								{showTransactionCode && (
									<ActionIcon variant="subtle" color="gray" size="sm" radius="xl" onClick={() => copyToClipboard(transactionCodeExample)}>
										<IconCopy size={14} />
									</ActionIcon>
								)}
							</Group>

							<Collapse in={showTransactionCode}>
								<Paper mt="sm" p="md" bg="gray.0" radius="md" withBorder>
									<CodeHighlight code={transactionCodeExample} language="tsx" withCopyButton={false} expandCodeLabel="" collapseCodeLabel="" />
								</Paper>
							</Collapse>
						</Stack>
					</Card>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Examples;

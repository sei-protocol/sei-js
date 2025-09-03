'use client';

import { ActionIcon, AppShell, Container, Group } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IconBook, IconCode, IconLogout } from '@tabler/icons-react';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

export default function Shell({ children }: PropsWithChildren) {
	const { address, isConnected } = useAccount();
	const { disconnect } = useDisconnect();

	return (
		<AppShell header={{ height: 64 }} padding="md">
			<AppShell.Header>
				<Container size="xl" h="100%">
					<Group justify="space-between" align="center" h="100%">
						<Link href="/" aria-label="Sei">
							<img src="https://cdn.sei.io/assets/sei-icon.svg" alt="Sei" style={{ height: 28, display: 'block' }} />
						</Link>
						<Group align="center" gap="md">
							<ActionIcon
								component={Link}
								href="/resources"
								variant="light"
								c="gray"
								size="lg"
								radius="md"
								aria-label="View Resources"
								style={{
									transition: 'all 0.2s ease',
									'&:hover': {
										transform: 'translateY(-1px)',
										boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
									},
								}}
							>
								<IconBook size={18} />
							</ActionIcon>
							<ActionIcon
								component={Link}
								href="/development"
								variant="light"
								c="gray"
								size="lg"
								radius="md"
								aria-label="View Development Guide"
								style={{
									transition: 'all 0.2s ease',
									'&:hover': {
										transform: 'translateY(-1px)',
										boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
									},
								}}
							>
								<IconCode size={18} />
							</ActionIcon>
							{isConnected && address ? (
								<ActionIcon
									variant="light"
									c="red"
									size="lg"
									radius="md"
									onClick={() => disconnect()}
									aria-label="Disconnect Wallet"
									style={{
										transition: 'all 0.2s ease',
										'&:hover': {
											transform: 'translateY(-1px)',
											boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
										},
									}}
								>
									<IconLogout size={18} />
								</ActionIcon>
							) : (
								<ConnectButton showBalance={{ smallScreen: false, largeScreen: true }} />
							)}
						</Group>
					</Group>
				</Container>
			</AppShell.Header>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}

import '@interchain-ui/react/styles';

// @ts-nocheck
import { useChain } from '@cosmos-kit/react';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Card, Group, NavLink, Stack, Text, Title } from '@mantine/core';
import { WalletConnectButton } from './components/WalletConnectButton.tsx';
import './App.css';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

const helpItems: HelpItem[] = [
	{
		title: 'Sei Docs',
		description: 'Find in-depth information about Sei.',
		link: 'https://docs.sei.io/'
	},
	{
		title: 'Mantine Docs',
		description: 'Learn about Mantine and familiarize yourself with the various components and hooks available.',
		link: 'https://mantine.dev/getting-started/'
	},
	{
		title: 'Cosmos Kit',
		description: "Learn about Cosmos Kit and it's hooks for chain interaction.",
		link: 'https://docs.cosmoskit.com/'
	},
	{
		title: 'CosmJS',
		description: 'Interact with Sei using the CosmJS Clients exported from Cosmos Kit.',
		link: 'https://tutorials.cosmos.network/tutorials/7-cosmjs/1-cosmjs-intro.html'
	},
	{
		title: 'Cosmos',
		description: 'Learn about the Cosmos ecosystem.',
		link: 'https://tutorials.cosmos.network/'
	}
];

function App() {
	const { address } = useChain('sei');
	const [opened, { toggle }] = useDisclosure();

	const renderHelpItem = ({ title, description, link }: HelpItem) => {
		return (
			<Card shadow='sm' padding='lg' radius='md' withBorder w='100%' bg='white'>
				<Stack gap='sm' align='center'>
					<Title size='1.25rem' style={{ color: '#ef4444' }}>
						{title}
					</Title>
					<Text size='1rem' style={{ color: 'black' }}>
						{description}
					</Text>
					<Button color='black' fullWidth radius='md' component='a' href={link} target='_blank' rel='noopener noreferrer'>
						view docs
					</Button>
				</Stack>
			</Card>
		);
	};

	return (
		<AppShell
			header={{ height: '5rem' }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened }
			}}
			padding='0'>
			<AppShell.Header style={{ padding: '1rem' }}>
				<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
				<Group justify='space-between'>
					<img src='https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg' alt='Sei Logo' style={{ width: '2rem' }} />
					<WalletConnectButton />
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p='md'>
				<NavLink label='CosmJS' />
			</AppShell.Navbar>

			<AppShell.Main>
				<Stack w='100%' align='center'>
					<Stack p='xl' style={{ maxWidth: 640 }} gap='xl'>
						<Stack align='center' gap='xl'>
							<Title>Welcome to Sei</Title>
							<Text align='center'>
								This project is set up to use Mantine UI components. Mantine has many helpful pre-built components and hooks to make user interfaces that are both
								effective and quick to develop.
							</Text>
							<Card bg='rgb(64,64,64)' w='100%' radius='lg' p='lg'>
								<Stack gap='lg'>
									<Stack>
										<Text>Wallet address:</Text>
										<Text>
											<strong>{address || '---'}</strong>
										</Text>
									</Stack>
									<WalletConnectButton />
								</Stack>
							</Card>
							<p>
								Get started by editing <code>src/App.tsx</code>
							</p>
							<Stack gap='2rem'>
								{helpItems.map((item, index) => (
									<div key={index}>{renderHelpItem(item)}</div>
								))}
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</AppShell.Main>
		</AppShell>
	);
}

export default App;

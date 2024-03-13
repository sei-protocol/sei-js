import React from 'react';
import { useChain } from '@cosmos-kit/react';

import styles from './App.module.sass';
import { WalletConnectButton } from './components/WalletConnectButton';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

function App() {
	const { address } = useChain('sei');

	const renderHelpItem = ({ title, description, link }: HelpItem) => {
		return (
			<a href={link} target='_blank' rel='noopener noreferrer' className={styles.helpItem}>
				<h2 className={styles.helpTitle}>{title}</h2>
				<p className={styles.helpDescription}>{description}</p>
			</a>
		);
	};

	return (
		<div className={styles.appContainer}>
			<div className={styles.header}>
				<img src='https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg' alt='Sei Logo' className='w-8 h-8' />
				<WalletConnectButton />
			</div>
			<div className={styles.mainContent}>
				<h1 className={styles.welcomeMessage}>Welcome to Sei</h1>
				<div className={styles.walletInfo}>
					<p>Wallet address:</p>
					<strong>{address || '---'}</strong>
				</div>
				<WalletConnectButton />
				<p className={styles.editMessage}>
					Get started by editing <code className={styles.editCode}>src/App.tsx</code>
				</p>
				<div className={styles.helpItemsContainer}>
					{renderHelpItem({ title: 'Sei Docs', description: 'Find in-depth information about Sei.', link: 'https://docs.sei.io/' })}
					{renderHelpItem({
						title: 'Cosmos Kit',
						description: "Learn about Cosmos Kit and it's hooks for chain interaction.",
						link: 'https://docs.cosmoskit.com/'
					})}
					{renderHelpItem({
						title: 'CosmJS',
						description: 'Interact with Sei using the CosmJS Clients exported from Cosmos Kit.',
						link: 'https://tutorials.cosmos.network/tutorials/7-cosmjs/1-cosmjs-intro.html'
					})}
					{renderHelpItem({ title: 'Cosmos', description: 'Learn about the Cosmos ecosystem.', link: 'https://tutorials.cosmos.network/' })}
				</div>
			</div>
		</div>
	);
}

export default App;

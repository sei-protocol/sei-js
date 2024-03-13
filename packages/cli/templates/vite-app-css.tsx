import React from 'react';
import { useChain } from '@cosmos-kit/react';
import './App.css';

import { WalletConnectButton } from './components/WalletConnectButton';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

function App() {
	const { address } = useChain('sei');

	const renderHelpItem = ({ title, description, link }: HelpItem) => (
		<a href={link} target='_blank' rel='noopener noreferrer' className='help-item'>
			<h2 className='help-title'>{title}</h2>
			<p className='help-description'>{description}</p>
		</a>
	);

	return (
		<div className='app-container'>
			<div className='header'>
				<img src='https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg' alt='Sei Logo' className='logo' />
				<WalletConnectButton className='connect-button' />
			</div>
			<div className='main-content'>
				<h1 className='welcome-message'>Welcome to Sei</h1>
				<div className='wallet-info'>
					<p>Wallet address</p>
					<strong>{address || '---'}</strong>
				</div>
				<WalletConnectButton className='connect-button-container' />
				<p className='edit-message'>
					Get started by editing <code className='edit-code'>src/App.tsx</code>
				</p>
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
	);
}

export default App;

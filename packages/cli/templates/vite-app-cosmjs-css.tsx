// @ts-nocheck
import React from 'react';
import { useChain } from '@cosmos-kit/react';
import './App.css';
import { WalletConnectButton } from './components/WalletConnectButton';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

const renderHelpItem = ({ title, description, link }: HelpItem) => (
	<a href={link} target='_blank' rel='noopener noreferrer' className='help-item'>
		<h2 className='help-title'>{title}</h2>
		<p className='help-description'>{description}</p>
	</a>
);

const helpItems: HelpItem[] = [
	{ title: 'Sei Docs', description: 'Find in-depth information about Sei.', link: 'https://docs.sei.io/' },
	{ title: 'Cosmos Kit', description: "Learn about Cosmos Kit and it's hooks for chain interaction.", link: 'https://docs.cosmoskit.com/' },
	{
		title: 'CosmJS',
		description: 'Interact with Sei using the CosmJS Clients exported from Cosmos Kit.',
		link: 'https://tutorials.cosmos.network/tutorials/7-cosmjs/1-cosmjs-intro.html'
	},
	{ title: 'Cosmos', description: 'Learn about the Cosmos ecosystem.', link: 'https://tutorials.cosmos.network/' }
];

function App() {
	const { address } = useChain('sei');

	return (
		<div className='app-container'>
			<div className='header'>
				<img src='https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg' alt='Sei Logo' className='app-logo' />
				<WalletConnectButton />
			</div>
			<div className='main-content'>
				<h1 className='welcome-heading'>Welcome to Sei</h1>
				<div className='wallet-info-container'>
					<div className='wallet-address-container'>
						<p className='wallet-address-label'>Wallet Address</p>
						<strong className='wallet-address'>{address || '---'}</strong>
					</div>
					<WalletConnectButton />
				</div>
				<p className='edit-message'>
					Get started by editing <code className='edit-code'>src/App.tsx</code>
				</p>
				{helpItems.map((item, index) => (
					<React.Fragment key={index}>{renderHelpItem(item)}</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default App;

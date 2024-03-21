// @ts-nocheck
import React from 'react';
import './App.css';
import { WalletConnectButton } from './components/WalletConnectButton';
import { useAccount } from 'wagmi';

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
	{
		title: 'Sei Docs',
		description: 'Find in-depth information about Sei.',
		link: 'https://docs.sei.io/'
	},
	{
		title: 'Wagmi',
		description: "Learn about Wagmi and it's hooks for chain interaction.",
		link: 'https://wagmi.sh/'
	},
	{
		title: 'Viem',
		description: 'Interact with Sei using Viem modules + Wagmi.',
		link: 'https://viem.sh/'
	},
	{
		title: 'EVM JSON-RPC API',
		description: 'Learn about the EVM api available on Sei.',
		link: 'https://ethereum.org/en/developers/docs/apis/json-rpc/'
	}
];

function App() {
	const { address } = useAccount();

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

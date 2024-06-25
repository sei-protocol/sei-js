import './Homepage.css'
import React from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

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

function Homepage() {
	const { isConnected, address } = useAccount();

	return (
      <div className='main-content'>
        <img src='https://cdn.sei.io/sei-app/sei-icon.png' alt='Sei Logo' className='app-logo' />
        <h1 className='welcome-heading'>Welcome to Sei</h1>
        <div className='wallet-info-container'>
			{ isConnected ? 
				<div className='wallet-address-container'>
					<p className='wallet-address-label'>Wallet Address</p>
					<strong className='wallet-address'>{address || '---'}</strong>
				</div> :
          		<ConnectButton showBalance={false} />	
			}
        </div>
        <p className='edit-message'>
          Get started by editing <code className='edit-code'>src/App.tsx</code>
        </p>
        {helpItems.map((item, index) => (
          <React.Fragment key={index}>{renderHelpItem(item)}</React.Fragment>
        ))}
      </div>
	);
}

export default Homepage;

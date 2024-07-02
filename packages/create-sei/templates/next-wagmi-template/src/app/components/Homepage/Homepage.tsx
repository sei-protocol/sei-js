'use client';

import React from 'react';
import styles from './Components.module.css'
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Examples from './Examples';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

const renderHelpItem = ({ title, description, link }: HelpItem) => (
	<a href={link} target='_blank' rel='noopener noreferrer' className={styles.helpItem}>
		<h2 className={styles.helpTitle}>{title}</h2>
		<p className={styles.helpDescription}>{description}</p>
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
      <div className={styles.mainContent}>
        <img src='https://cdn.sei.io/sei-app/sei-icon.png' alt='Sei Logo' className={styles.appLogo} />
        <h1 className={styles.welcomeHeading}>Welcome to Sei</h1>
        <div className={styles.walletInfoContainer}>
			{ isConnected ? 
				<div className={styles.walletAddressContainer}>
					<p className={styles.walletAddressLabel}>Wallet Address</p>
					<strong className={styles.walletAddressLabel}>{address || '---'}</strong>
				</div> :
          		<ConnectButton showBalance={false} />	
			}
        </div>
		<Examples />
        <p className={styles.editMessage}>
          Get started by editing <code className={styles.editCode}>src/App.tsx</code>
        </p>
        {helpItems.map((item, index) => (
          <React.Fragment key={index}>{renderHelpItem(item)}</React.Fragment>
        ))}
      </div>
	);
}

export default Homepage;

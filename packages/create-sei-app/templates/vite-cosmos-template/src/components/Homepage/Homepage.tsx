'use client';

import React from 'react';
import styles from './Components.module.css'
import { useChain } from '@cosmos-kit/react';
import "@interchain-ui/react/styles";
import Examples from './Examples';
import { selectedChain } from '../../constants';

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
		title: 'CosmosKit',
		description: "Learn about CosmosKit and it's hooks for chain interaction.",
		link: 'https://docs.cosmology.zone/cosmos-kit/get-started/'
	},
	{
		title: 'Sei-Js',
		description: 'Interact with Sei using Sei-Js.',
		link: 'https://sei-protocol.github.io/sei-js/modules/cosmjs.html'
	}
];

export function Homepage() {

	const { address } = useChain(selectedChain.chain_name);

	return (
		<div className={styles.mainContent}>
			<img src='https://cdn.sei.io/sei-app/sei-icon.png' alt='Sei Logo' className={styles.appLogo} />
			<h1 className={styles.welcomeHeading}>Welcome to Sei</h1>
			<div className={styles.walletInfoContainer}>
				<div className={styles.walletAddressContainer}>
					<p className={styles.walletAddressLabel}>Wallet Address</p>
					<strong className={styles.walletAddressLabel}>{address || '---'}</strong>
				</div>
			</div>
			<Examples chainId={selectedChain.chain_id}/>
			<p className={styles.editMessage}>
				Get started by editing <code className={styles.editCode}>src/app/page.tsx</code>
			</p>
			{helpItems.map((item, index) => (
				<React.Fragment key={index}>{renderHelpItem(item)}</React.Fragment>
			))}
		</div>
	);
}

export default Homepage;

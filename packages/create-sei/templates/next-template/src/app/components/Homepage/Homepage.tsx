'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Examples from './Examples';
import './Homepage.css';

type HelpItem = {
	title: string;
	description: string;
	link: string;
};

const renderHelpItem = ({ title, description, link }: HelpItem) => (
	<div className="card secondary">
		<div className="card-header">
			<p className="card__title">
				<a href={link} target="_blank" rel="noopener noreferrer" className="external-link">
					{title} {externalIcon}
				</a>
			</p>
			<small className="card__description">{description}</small>
		</div>
	</div>
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

const externalIcon = (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
			stroke="#9F1239"
			strokeWidth="1.33333"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path d="M10 2H14V6" stroke="#9F1239" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M6.66663 9.33333L14 2" stroke="#9F1239" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

function Homepage() {
	return (
		<div className="container">
			<img src="sei-logotype.svg" className="logo" alt="SEI logotype" />
			<div className="card intro">
				<div className="card-header">
					<p className="card__title">Wallet address</p>
					<small className="card__description">Connect wallet to see your address and balance</small>
				</div>
				<ConnectButton />
			</div>
			<Examples />
			<div className="get-started">
				Get started by editing <code>src/app/page.tsx</code>
			</div>
			<div className="grid docs">
				{helpItems.map((item, index) => (
					<div key={item.title}>{renderHelpItem(item)}</div>
				))}
			</div>
		</div>
	);
}

export default Homepage;

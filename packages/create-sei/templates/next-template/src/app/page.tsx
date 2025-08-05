import { ConnectButton } from '@rainbow-me/rainbowkit';
import Web3Provider from './components/Web3Provider';
import Homepage from './components/Homepage/Homepage';

import './index.css';

export default function Home() {
	return (
		<Web3Provider>
			<div className="header">
				<ConnectButton
					showBalance={{
						smallScreen: false,
						largeScreen: true
					}}
				/>
			</div>
			<Homepage />
		</Web3Provider>
	);
}

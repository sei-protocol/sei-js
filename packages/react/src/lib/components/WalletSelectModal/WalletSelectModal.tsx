import React, { useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { WalletWindowKey } from '@sei-js/core';
import { WalletSelectModalProps } from './types';
import { styles } from './styles';
import { SeiWalletContext } from '../../provider';

const WalletSelectModal = ({ setShowConnectModal, inputWallets, walletSelectStyles }: WalletSelectModalProps) => {
	const { installedWallets, connectedWallet, setInputWallet, supportedWallets } = useContext(SeiWalletContext);

	const wallets = inputWallets || supportedWallets;

	const renderWallet = (wallet: WalletWindowKey) => {
		const renderConnection = () => {
			if (connectedWallet === wallet) return <p>connected</p>;
			if (installedWallets.includes(wallet)) return <p>detected</p>;
			return null;
		};

		const selectWallet = () => {
			if (setInputWallet) setInputWallet(wallet);
			setShowConnectModal(false);
		};

		return (
			<div key={wallet} style={styles.row} onClick={selectWallet}>
				<div style={styles.info}>
					<img style={styles.icon} alt={wallet} width={18} height={18} src={`/images/wallets/${wallet}.png`} />
					<p style={{ ...styles.name, ...walletSelectStyles?.name }}>{wallet}</p>
				</div>
				{renderConnection()}
			</div>
		);
	};
	return (
		<div style={{ ...styles.background, ...walletSelectStyles?.background }}>
			<OutsideClickHandler
				onOutsideClick={(e) => {
					e.stopPropagation();
					setShowConnectModal(false);
				}}>
				<div style={{ ...styles.card, ...walletSelectStyles?.card }}>
					<h2>Connect your wallet</h2>
					<br />
					{wallets.map(renderWallet)}
				</div>
			</OutsideClickHandler>
		</div>
	);
};

export default WalletSelectModal;

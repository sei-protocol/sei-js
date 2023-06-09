import React, { useContext, useEffect, useState } from 'react';
import { WalletSelectModalProps } from './types';
import { SeiWallet, SeiWalletContext } from '../../provider';
import './styles.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiErrorAlt, FaCheckCircle } from 'react-icons/all';
import { BiError } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const WalletSelectModal = ({ setShowConnectModal, wallets }: WalletSelectModalProps) => {
	const { connectedWallet, setTargetWallet, connectionError, targetWallet, setConnectionError } = useContext(SeiWalletContext);

	const [isConnecting, setIsConnecting] = useState<boolean>(false);

	const closeModal = () => {
		setConnectionError(undefined);
		setShowConnectModal(false);
	};

	const renderWallet = (wallet: SeiWallet) => {
		const isConnectedWallet = connectedWallet?.walletInfo.name === wallet.walletInfo.name;
		
		const renderConnection = () => {
			if (isConnectedWallet) return <FaCheckCircle className='wallet__item--info-icon' />;
			return null;
		};

		const selectWallet = async () => {
			if (wallet.walletInfo.name === targetWallet?.walletInfo.name) return;
			if (setTargetWallet) setTargetWallet(wallet);
			setIsConnecting(true);
			setConnectionError(undefined);
		};

		useEffect(() => {
			if (connectedWallet || connectionError) {
				setIsConnecting(false);
			}
		}, [connectedWallet, connectionError]);

		return (
			<div
				key={wallet.walletInfo.name}
				onClick={selectWallet}
				className={`wallet__item ${isConnectedWallet ? 'wallet__item-connected' : ''} ${
					targetWallet?.walletInfo?.windowKey === wallet.walletInfo.windowKey ? 'wallet__item-targetd' : ''
				}`}>
				<div className='wallet__item--info'>
					<img alt={wallet.walletInfo.name} src={wallet.walletInfo.icon} className='wallet__item--info-icon' />
					<p className='wallet__item--info-name'>{wallet.walletInfo.name}</p>
				</div>
				{renderConnection()}
			</div>
		);
	};

	const renderRightSide = () => {
		if (isConnecting) {
			return (
				<div className='card__right-centered'>
					<img alt={targetWallet?.walletInfo.icon} src={targetWallet?.walletInfo.icon} className='card__right--connecting-icon' />
					<p className='card__right--item-title'>Connecting to {targetWallet?.walletInfo.name}...</p>
				</div>
			);
		}

		const isWalletNotInstalled = targetWallet && !window[targetWallet.walletInfo.windowKey];

		if (isWalletNotInstalled) {
			return (
				<div className='card__right-centered'>
					<BiErrorAlt className='card__right--icon' />
					<p className='card__right--title'>{targetWallet?.walletInfo?.name || 'Wallet'} not installed</p>
					{targetWallet?.walletInfo.website && (
						<Link target='_blank' to={targetWallet.walletInfo.website} className='card__right--download'>
							Download {targetWallet?.walletInfo.name}
						</Link>
					)}
				</div>
			);
		}

		if (connectionError) {
			return (
				<div className='card__right'>
					<BiError className='card__right--icon' />
					<p className='card__right--title'>We couldn't connect to {targetWallet?.walletInfo?.name || 'your wallet'}</p>
					<div className='card__right--item'>
						<p className='card__right--item-title'>How to resolve this issue?</p>
						<p className='card__right--item-description'>A pending action or a locked wallet can cause issues. Please open the extension manually and try again.</p>
					</div>
				</div>
			);
		}

		if (connectedWallet) {
			return (
				<div className='card__right-centered'>
					<img alt={targetWallet?.walletInfo.icon} src={targetWallet?.walletInfo.icon} className='card__right--connecting-icon' />
					<p className='card__right--item-title'>Connected to {targetWallet?.walletInfo.name}</p>
				</div>
			);
		}

		return (
			<div className='card__right'>
				<p className='card__right--title'>New to using a wallet?</p>
				<div className='card__right--item'>
					<p className='card__right--item-title'>A Secure Hub for Digital Transactions</p>
					<p className='card__right--item-description'>Wallets provide a secure environment for signing and sending transactions involving your tokens and NFTs.</p>
				</div>
				<div className='card__right--item'>
					<p className='card__right--item-title'>A modern way to log in</p>
					<p className='card__right--item-description'>Rather than generating new accounts and passwords for each website, simply link your wallet.</p>
				</div>
			</div>
		);
	};

	return (
		<div onClick={closeModal} className='modal__background'>
			<div onClick={(e) => e.stopPropagation()} className='modal__card'>
				<div className='card__header'>
					<h2 className='card__header--title'>Connect a wallet</h2>
					<AiFillCloseCircle className='card__header--close' onClick={closeModal} />
				</div>
				<div className='card__content'>
					<div className='card__content--wallets'>{wallets?.map(renderWallet)}</div>
					<div className='card__content--separator' />
					{renderRightSide()}
				</div>
			</div>
		</div>
	);
};

export default WalletSelectModal;

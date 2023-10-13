import React, { useContext, useEffect, useState } from 'react';
import { WalletSelectModalProps } from './types';
import { SeiWalletContext } from '../../provider';
import './styles.css';
import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';
import { BiErrorAlt } from '@react-icons/all-files/bi/BiErrorAlt';
import { BiError } from '@react-icons/all-files/bi/BiError';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { SeiWallet } from '@sei-js/core';
import { AiFillLeftCircle } from '@react-icons/all-files/ai/AiFillLeftCircle';

const WalletSelectModal = ({ wallets: inputWallets }: WalletSelectModalProps) => {
	const { connectedWallet, setTargetWallet, wallets, connectionError, targetWallet, setConnectionError, showConnectModal, setShowConnectModal } =
		useContext(SeiWalletContext);

	const visibleWallets = inputWallets || wallets || [];

	const [isConnecting, setIsConnecting] = useState<boolean>(false);
	const [infoTitle, setInfoTitle] = useState<string | undefined>();
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		if (connectedWallet || connectionError) {
			setIsConnecting(false);
		}
	}, [connectedWallet, connectionError]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 480);
		};
		setIsMobile(window.innerWidth < 480);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isWalletInstalled: boolean = targetWallet !== undefined && window[targetWallet.walletInfo.windowKey as never] !== undefined;

	const hasImportantInfo = connectionError || infoTitle;

	const closeModal = (e) => {
		e.stopPropagation();

		if (infoTitle) {
			setInfoTitle(undefined);
			return;
		}

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
			setTargetWallet(wallet);
			setIsConnecting(true);
			setConnectionError(undefined);
		};

		return (
			<div
				key={wallet.walletInfo.name}
				data-testid={wallet.walletInfo.windowKey}
				onClick={selectWallet}
				className={`wallet__item ${isConnectedWallet ? 'wallet__item-connected' : ''} ${
					targetWallet?.walletInfo?.windowKey === wallet.walletInfo.windowKey ? 'wallet__item-targeted' : ''
				}`}>
				<div className='wallet__item--info'>
					<img alt={wallet.walletInfo.name} src={wallet.walletInfo.icon} className='wallet__item--info-icon' />
					<p className='wallet__item--info-name'>{wallet.walletInfo.name}</p>
				</div>
				{renderConnection()}
			</div>
		);
	};

	const renderAdditionalInfo = () => {
		if (isConnecting) {
			return (
				<div className='card__right-centered'>
					<img alt={targetWallet?.walletInfo.icon} src={targetWallet?.walletInfo.icon} className='card__right--connecting-icon' />
					<p className='card__right--item-title'>Connecting to {targetWallet?.walletInfo.name}...</p>
				</div>
			);
		}

		if (!isWalletInstalled && targetWallet) {
			return (
				<div className='card__right'>
					<div
						className='card__right--header mobile-only'
						onClick={() => {
							setConnectionError(undefined);
							setTargetWallet(undefined);
						}}>
						<AiFillLeftCircle className='card__right--icon' style={{ display: 'unset' }} />
						<p className='card__right--title'>{targetWallet?.walletInfo?.name || 'Wallet'} not installed</p>
					</div>
					<div className='card__right--error'>
						<BiErrorAlt className='card__right--error-icon' />
						<p className='card__right--error-description'>
							Please ensure you open this webpage from within the {targetWallet?.walletInfo?.name || 'Wallet'} mobile app.
						</p>
					</div>
					{targetWallet?.walletInfo.website && (
						<a target='_blank' href={targetWallet.walletInfo.website} className='card__right--download'>
							Download {targetWallet?.walletInfo.name}
						</a>
					)}
				</div>
			);
		}

		if (connectionError) {
			return (
				<div className='card__right'>
					<div
						className='card__right--header mobile-only'
						onClick={() => {
							setConnectionError(undefined);
							setTargetWallet(undefined);
						}}>
						<AiFillLeftCircle className='card__right--icon' style={{ display: 'unset' }} />
						<p className='card__right--title'>Connection error</p>
					</div>
					<div className='card__right--error'>
						<BiError className='card__right--error-icon' />
						<p className='card__right--title'>We couldn't connect to {targetWallet?.walletInfo?.name || 'your wallet'}</p>
					</div>
					<div className='card__right--item'>
						<p className='card__right--item-title'>How to resolve this issue?</p>
						<p className='card__right--item-description'>A pending action or a locked wallet can cause issues. Please open the extension manually and try again.</p>
					</div>
				</div>
			);
		}

		if (connectedWallet && !hasImportantInfo) {
			return (
				<div className='card__right-centered'>
					<img alt={targetWallet?.walletInfo.icon} src={targetWallet?.walletInfo.icon} className='card__right--connecting-icon' />
					<p className='card__right--item-title'>Connected to {targetWallet?.walletInfo.name}</p>
				</div>
			);
		}

		if (!hasImportantInfo && isMobile) return null;

		return (
			<div className='card__right'>
				<div className='card__right--header' onClick={() => setInfoTitle(undefined)}>
					<AiFillLeftCircle className='card__right--icon' onClick={() => setInfoTitle(undefined)} />
					<p className='card__right--title'>New to using a wallet?</p>
				</div>
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

	if (!showConnectModal) return null;

	const renderContent = () => {
		const shouldShowHomeInfo = !hasImportantInfo || !isMobile;

		return (
			<>
				{shouldShowHomeInfo && (
					<div className='card__header'>
						<h2 className='card__header--title'>Connect a wallet</h2>
						<AiFillCloseCircle className='card__header--close' onClick={closeModal} />
					</div>
				)}

				<div className='card__content'>
					{shouldShowHomeInfo && (
						<>
							<div className='card__content--wallets'>{visibleWallets.map(renderWallet)}</div>
							<div className='card__content--separator' />
						</>
					)}
					{renderAdditionalInfo()}
				</div>
			</>
		);
	};

	const renderMobileHelper = () => {
		if (hasImportantInfo) return null;

		const title = 'New to using a wallet?';

		return (
			<div className='card__content--mobile-helper'>
				<p className='card__right--title-mobile' onClick={() => setInfoTitle(title)}>
					{title}
				</p>
			</div>
		);
	};

	return (
		<div data-testid='modal__background' onClick={closeModal} className='modal__background'>
			<div onClick={(e) => e.stopPropagation()} className='modal__card'>
				{renderContent()}
				{renderMobileHelper()}
			</div>
		</div>
	);
};

export default WalletSelectModal;

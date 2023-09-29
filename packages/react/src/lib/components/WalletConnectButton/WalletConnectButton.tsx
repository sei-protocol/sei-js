import React, { useContext, useEffect, useRef, useState } from 'react';
import { WalletConnectButtonProps } from './types';
import './styles.css';
import { IconContext } from '@react-icons/all-files';
import { IoWalletOutline } from '@react-icons/all-files/io5/IoWalletOutline';
import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';
import { IoCopyOutline } from '@react-icons/all-files/io5/IoCopyOutline';
import { isValidCSSColor } from '@sei-js/react/dist/lib/utils';
import { SeiWalletContext } from '@sei-js/react';

export const truncateAddress = (address: string) => `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;

const WalletConnectButton = ({ buttonClassName, primaryColor, secondaryColor, backgroundColor }: WalletConnectButtonProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [recentlyCopied, setRecentlyCopied] = useState<boolean>(false);

	const { connectedWallet, accounts, setTargetWallet, setShowConnectModal } = useContext(SeiWalletContext);

	const componentRef = useRef(null);
	const ignoreNextClickRef = useRef(false);

	const handleClickOutside = (event: MouseEvent) => {
		if (ignoreNextClickRef.current) {
			ignoreNextClickRef.current = false;
			return;
		}
		if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
			setShowMenu(false);
		}
	};

	useEffect(() => {
		if (showMenu) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [showMenu]);

	useEffect(() => {
		const color = primaryColor && isValidCSSColor(primaryColor) ? primaryColor : '#121212';
		document.documentElement.style.setProperty('--wallet-primary-color', color);
		document.documentElement.style.setProperty('--wallet-primary-color-11', `${color}11`);
		document.documentElement.style.setProperty('--wallet-primary-color-22', `${color}22`);
		document.documentElement.style.setProperty('--wallet-primary-color-33', `${color}33`);
		document.documentElement.style.setProperty('--wallet-primary-color-44', `${color}44`);
	}, [primaryColor]);

	useEffect(() => {
		const color = secondaryColor && isValidCSSColor(secondaryColor) ? secondaryColor : '#8C8C8C';
		document.documentElement.style.setProperty('--wallet-secondary-color', color);
	}, [secondaryColor]);

	useEffect(() => {
		const color = backgroundColor && isValidCSSColor(backgroundColor) ? backgroundColor : '#F1F1F1';
		document.documentElement.style.setProperty('--wallet-background-color', color);
	}, [backgroundColor]);

	const changeWallet = () => {
		setShowMenu(false);
		setShowConnectModal(true);
	};

	const copyAddress = async () => {
		setRecentlyCopied(true);
		await navigator.clipboard.writeText(accounts?.[0]?.address);
		setTimeout(() => {
			setRecentlyCopied(false);
		}, 1500);
	};

	const disconnect = () => {
		if (setTargetWallet) setTargetWallet(undefined);
	};

	const renderButton = () => {
		if (!connectedWallet) {
			return (
				<button className={buttonClassName} onClick={() => setShowConnectModal(true)}>
					connect wallet
				</button>
			);
		}

		const accountLabel = accounts?.[0] === undefined ? 'connecting...' : truncateAddress(accounts[0].address);

		return (
			<div className='connect_wrapper'>
				<button
					disabled={showMenu}
					className={buttonClassName}
					onClick={() => {
						setShowMenu(true);
						ignoreNextClickRef.current = true;
					}}>
					{accountLabel}
				</button>
				{showMenu && (
					<div ref={componentRef} className='wallet__menu'>
						{accounts && (
							<div className='wallet__menu--item' onClick={copyAddress}>
								<IoCopyOutline className='wallet__menu--item-icon' />
								<span>{recentlyCopied ? 'copied' : 'copy address'}</span>
							</div>
						)}
						<div className='wallet__menu--item' onClick={changeWallet}>
							<IoWalletOutline className='wallet__menu--item-icon' />
							<span>change wallet</span>
						</div>
						<div className='wallet__menu--item' onClick={disconnect}>
							<IoLogOutOutline className='wallet__menu--item-icon' />
							<span>disconnect</span>
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<>
			<IconContext.Provider value={{ color: 'var(--wallet-primary-color)', size: '50px' }}>{renderButton()}</IconContext.Provider>
		</>
	);
};

export default WalletConnectButton;

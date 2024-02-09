import React, { useContext, useEffect, useState } from 'react';
import { WalletConnectButtonProps } from './types';
import { IconContext } from '@react-icons/all-files';
import { SeiWalletContext } from '../../provider';
import * as Styles from './styles';
import { truncateAddress } from '../../utils/address';

/**
 * This component renders a button that will open a modal to connect to a wallet provider.
 * @param walletConnectButtonProps Props that are passed to this component. Contains a string used to override the className of the rendered button.
 * @returns A react component that renders a button that will open a modal to connect to a wallet provider.
 */
const WalletConnectButton = ({ buttonClassName }: WalletConnectButtonProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [recentlyCopied, setRecentlyCopied] = useState<boolean>(false);

	const { connectedWallet, accounts, setTargetWallet, setShowConnectModal } = useContext(SeiWalletContext);

	const handleClickOutside = (event: MouseEvent) => {
		event.stopPropagation();
		setShowMenu(false);
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
				<button data-testid='connect-wallet' className={buttonClassName} onClick={() => setShowConnectModal(true)}>
					connect wallet
				</button>
			);
		}

		const accountLabel = accounts?.[0] === undefined ? 'connecting...' : truncateAddress(accounts[0].address);

		return (
			<Styles.ConnectWrapper>
				<button
					disabled={showMenu}
					className={buttonClassName}
					onClick={(e) => {
						e.stopPropagation();
						setShowMenu(true);
					}}>
					{accountLabel}
				</button>
				{showMenu && (
					<Styles.WalletMenu>
						{accounts && (
							<Styles.WalletMenuItem data-testid='copy-address' onClick={copyAddress}>
								<Styles.WalletMenuItemCopy />
								<span>{recentlyCopied ? 'copied' : 'copy address'}</span>
							</Styles.WalletMenuItem>
						)}
						<Styles.WalletMenuItem data-testid='change-wallet' onClick={changeWallet}>
							<Styles.WalletMenuItemChange />
							<span>change wallet</span>
						</Styles.WalletMenuItem>
						<Styles.WalletMenuItem data-testid='disconnect-button' onClick={disconnect}>
							<Styles.WalletMenuItemLogOut />
							<span>disconnect</span>
						</Styles.WalletMenuItem>
					</Styles.WalletMenu>
				)}
			</Styles.ConnectWrapper>
		);
	};

	return (
	<IconContext.Provider value={{ color: '#121212', size: '50px' }}>{renderButton()}</IconContext.Provider>

);
};

export default WalletConnectButton;

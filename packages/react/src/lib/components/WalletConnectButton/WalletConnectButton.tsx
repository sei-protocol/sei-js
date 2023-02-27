import React, { useContext, useState } from 'react';
import { WalletConnectButtonProps } from './types';
import styles from './WalletConnectButton.module.sass';
import OutsideClickHandler from 'react-outside-click-handler';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SeiWalletContext } from '../../provider';
import { WalletSelectModal } from '../WalletSelectModal';

export const truncateAddress = (address: string) => `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;

const WalletConnectButton = ({}: WalletConnectButtonProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [recentlyCopied, setRecentlyCopied] = useState<boolean>(false);
	const [showConnectModal, setShowConnectModal] = useState<boolean>(false);

	const { connectedWallet, accounts, setInputWallet } = useContext(SeiWalletContext);

	const renderButton = () => {
		if (!connectedWallet) {
			return (
				<button className={styles.button} onClick={() => setShowConnectModal(true)}>
					connect wallet
				</button>
			);
		}

		return (
			<div className={styles.wrapper}>
				<button className={styles.button} onClick={() => setShowMenu(true)}>
					{accounts?.[0] === undefined ? 'connecting...' : truncateAddress(accounts[0].address)}
				</button>
				{showMenu && (
					<OutsideClickHandler onOutsideClick={(e) => setShowMenu(false)}>
						<div className={styles.menu}>
							{accounts && (
								<CopyToClipboard
									text={accounts?.[0]?.address}
									onCopy={() => {
										setRecentlyCopied(true);
										const timer = setTimeout(() => {
											setRecentlyCopied(false);
										}, 600);
									}}>
									<span className={styles.menu_item}>{recentlyCopied ? 'copied' : 'copy address'}</span>
								</CopyToClipboard>
							)}
							<p
								className={styles.menu_item}
								onClick={() => {
									setInputWallet(undefined);
									setShowConnectModal(true);
									setShowMenu(false);
								}}>
								change wallet
							</p>
							<p onClick={() => setInputWallet(undefined)} className={styles.menu_item}>
								disconnect
							</p>
						</div>
						{showConnectModal && <WalletSelectModal setShowConnectModal={setShowConnectModal} />}
					</OutsideClickHandler>
				)}
			</div>
		);
	};

	return (
		<>
			{renderButton()}
			{showConnectModal && <WalletSelectModal setShowConnectModal={setShowConnectModal} />}
		</>
	);
};

export default WalletConnectButton;

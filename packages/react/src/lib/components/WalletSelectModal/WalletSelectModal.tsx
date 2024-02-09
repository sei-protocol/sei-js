import React, { useContext, useEffect, useMemo, useState } from 'react';
import { WalletSelectModalProps } from './types';
import { SeiWalletContext } from '../../provider';
import * as Styles from './styles';
import { SeiWallet } from '@sei-js/core';

/**
 * This component renders a Modal that allows users to connect to a wallet provider.
 * @param WalletSelectModalProps Props passed to this component containing a list of SeiWallet options that the modal should provide and class overrides for the components within this component.
 * @returns A modal that allows users to connect to a wallet provider.
 */
const WalletSelectModal = ({ wallets: inputWallets, classNameOverrides }: WalletSelectModalProps) => {
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

	const isWalletInstalled: boolean = useMemo(() => {
		if (typeof window === 'undefined') return false;
		return targetWallet !== undefined && window[targetWallet.walletInfo.windowKey as never] !== undefined;
	}, [targetWallet]);

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
			if (isConnectedWallet) return <Styles.WalletItemInfoIcon />;
			return null;
		};

		const selectWallet = async () => {
			setTargetWallet(wallet);
			if (connectedWallet === wallet) return;
			setIsConnecting(true);
			setConnectionError(undefined);
		};

		const isWalletTargeted = targetWallet?.walletInfo?.windowKey === wallet.walletInfo.windowKey;

		let CalculatedItemComponent = Styles.WalletItem;

		if (isConnectedWallet) CalculatedItemComponent = Styles.WalletItemConnected;
		if (isWalletTargeted) CalculatedItemComponent = Styles.WalletItemTargeted;

		return (
			<CalculatedItemComponent key={wallet.walletInfo.name} data-testid={wallet.walletInfo.windowKey} onClick={selectWallet}>
				<Styles.WalletItemInfo>
					<Styles.WalletItemInfoImage alt={wallet.walletInfo.name} src={wallet.walletInfo.icon} />
					<Styles.WalletItemInfoName>{wallet.walletInfo.name}</Styles.WalletItemInfoName>
				</Styles.WalletItemInfo>
				{renderConnection()}
			</CalculatedItemComponent>
		);
	};

	const renderAdditionalInfo = () => {
		if (isConnecting) {
			return (
				<Styles.CardRightCentered>
					<Styles.CardRightConnectingIcon alt={targetWallet?.walletInfo.icon} src={targetWallet?.walletInfo.icon} />
					<Styles.CardRightItemTitle>Connecting to {targetWallet?.walletInfo.name}...</Styles.CardRightItemTitle>
				</Styles.CardRightCentered>
			);
		}

		if (!isWalletInstalled && targetWallet) {
			return (
				<Styles.CardRight>
					<Styles.CardRightHeader
						onClick={() => {
							setConnectionError(undefined);
							setTargetWallet(undefined);
						}}>
						<Styles.CardRightIcon />
						<Styles.CardRightTitle>{targetWallet?.walletInfo?.name || 'Wallet'} not installed</Styles.CardRightTitle>
					</Styles.CardRightHeader>
					<Styles.CardRightError>
						<Styles.CardRightErrorIcon />
						<Styles.CardRightErrorDescription>
							Please ensure you open this webpage from within the {targetWallet?.walletInfo?.name || 'Wallet'} mobile app.
						</Styles.CardRightErrorDescription>
					</Styles.CardRightError>
					{targetWallet?.walletInfo.website && (
						<Styles.CardRightDownload target='_blank' href={targetWallet.walletInfo.website}>
							Download {targetWallet?.walletInfo.name}
						</Styles.CardRightDownload>
					)}
				</Styles.CardRight>
			);
		}

		if (connectionError) {
			return (
				<Styles.CardRight>
					<Styles.CardRightHeader
						onClick={() => {
							setConnectionError(undefined);
							setTargetWallet(undefined);
						}}>
						<Styles.CardRightIcon />
						<Styles.CardRightTitle>Connection error</Styles.CardRightTitle>
					</Styles.CardRightHeader>
					<Styles.CardRightError>
						<Styles.CardRightErrorIcon />
						<Styles.CardRightTitle>We couldn't connect to {targetWallet?.walletInfo?.name || 'your wallet'}</Styles.CardRightTitle>
					</Styles.CardRightError>
					<Styles.CardRightItem>
						<Styles.CardRightItemTitle>How to resolve this issue?</Styles.CardRightItemTitle>
						<Styles.CardRightItemDescription>
							A pending action or a locked wallet can cause issues. Please open the extension manually and try again.
						</Styles.CardRightItemDescription>
					</Styles.CardRightItem>
				</Styles.CardRight>
			);
		}

		if (connectedWallet && !hasImportantInfo) {
			return (
				<Styles.CardRightCentered>
					<Styles.CardRightConnectingIcon alt={targetWallet?.walletInfo.icon} src={targetWallet?.walletInfo.icon} />
					<Styles.CardRightItemTitle>Connected to {targetWallet?.walletInfo.name}</Styles.CardRightItemTitle>
				</Styles.CardRightCentered>
			);
		}

		if (!hasImportantInfo && isMobile) return null;

		return (
			<Styles.CardRight>
				<Styles.CardRightHeader onClick={() => setInfoTitle(undefined)}>
					<Styles.CardRightIcon onClick={() => setInfoTitle(undefined)} />
					<Styles.CardRightTitle>New to using a wallet?</Styles.CardRightTitle>
				</Styles.CardRightHeader>
				<Styles.CardRightItem>
					<Styles.CardRightItemTitle>A Secure Hub for Digital Transactions</Styles.CardRightItemTitle>
					<Styles.CardRightItemDescription>
						Wallets provide a secure environment for signing and sending transactions involving your tokens and NFTs.
					</Styles.CardRightItemDescription>
				</Styles.CardRightItem>
				<Styles.CardRightItem>
					<Styles.CardRightItemTitle>A modern way to log in</Styles.CardRightItemTitle>
					<Styles.CardRightItemDescription>
						Rather than generating new accounts and passwords for each website, simply link your wallet.
					</Styles.CardRightItemDescription>
				</Styles.CardRightItem>
			</Styles.CardRight>
		);
	};

	if (!showConnectModal) return null;

	const renderContent = () => {
		const shouldShowHomeInfo = !hasImportantInfo || !isMobile;

		return (
			<>
				{shouldShowHomeInfo && (
					<Styles.CardHeader>
						<Styles.CardHeaderTitle>Connect a wallet</Styles.CardHeaderTitle>
						<Styles.CardHeaderClose onClick={closeModal} />
					</Styles.CardHeader>
				)}

				<Styles.CardContent>
					{shouldShowHomeInfo && (
						<>
							<Styles.CardContentWallets>{visibleWallets.map(renderWallet)}</Styles.CardContentWallets>
							<Styles.CardContentSeparator />
						</>
					)}
					{renderAdditionalInfo()}
				</Styles.CardContent>
			</>
		);
	};

	const renderMobileHelper = () => {
		if (hasImportantInfo) return null;

		const title = 'New to using a wallet?';

		return (
			<Styles.CardContentMobileHelper>
				<Styles.CardRightTitle onClick={() => setInfoTitle(title)}>{title}</Styles.CardRightTitle>
			</Styles.CardContentMobileHelper>
		);
	};

	return (
		<Styles.ModalBackground data-testid='modal__background' className={classNameOverrides?.background} onClick={closeModal}>
			<Styles.ModalCard className={classNameOverrides?.card} onClick={(e) => e.stopPropagation()}>
				{renderContent()}
				{renderMobileHelper()}
			</Styles.ModalCard>
		</Styles.ModalBackground>
	);
};

export default WalletSelectModal;

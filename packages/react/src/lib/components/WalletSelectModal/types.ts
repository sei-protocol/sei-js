import { WalletWindowKey } from '@sei-js/core';
import { CSSProperties } from 'react';

export type WalletSelectStyles = {
	background?: CSSProperties;
	card?: CSSProperties;
	name?: CSSProperties;
};

export type WalletSelectModalProps = {
	setShowConnectModal: (show: boolean) => void;
	inputWallets?: WalletWindowKey[];
	walletSelectStyles?: WalletSelectStyles;
};

import { CSSProperties } from 'react';
import { WalletSelectStyles } from '../WalletSelectModal/types';
import { WalletWindowKey } from '@sei-js/core';

export type WalletConnectButtonProps = {
  buttonClassName?: string;
  wallets?: WalletWindowKey[];
  buttonStyles?: {
    button?: CSSProperties;
    menu?: CSSProperties;
    menuItem?: CSSProperties;
    walletSelectStyles?: WalletSelectStyles;
  };
};

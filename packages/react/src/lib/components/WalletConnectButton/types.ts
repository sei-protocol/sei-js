import { CSSProperties } from 'react';
import { WalletSelectStyles } from '../WalletSelectModal/types';

export type WalletConnectButtonProps = {
  buttonClassName?: string;
  buttonStyles?: {
    button?: CSSProperties;
    menu?: CSSProperties;
    menuItem?: CSSProperties;
    walletSelectStyles?: WalletSelectStyles;
  };
};

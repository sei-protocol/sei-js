import { WalletWindowKey } from '@sei-js/core';

export type WalletSelectModalProps = {
  setShowConnectModal: (show: boolean) => void;
  inputWallets: WalletWindowKey[];
};

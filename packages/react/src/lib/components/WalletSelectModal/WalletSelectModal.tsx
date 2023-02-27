import React, { useContext } from 'react';
import { WalletSelectModalProps } from './types';
import styles from './WalletSelectModal.module.sass';
import { SeiWalletContext } from '../../provider';
import OutsideClickHandler from 'react-outside-click-handler';
import { WalletWindowKey } from '@sei-js/core/src';

const WalletSelectModal = ({
  setShowConnectModal,
  inputWallets,
}: WalletSelectModalProps) => {
  const {
    installedWallets,
    connectedWallet,
    setInputWallet,
    supportedWallets,
  } = useContext(SeiWalletContext);

  const wallets = inputWallets || supportedWallets;

  const renderWallet = (wallet: WalletWindowKey) => {
    const renderConnection = () => {
      if (connectedWallet === wallet) return <p>connected</p>;
      if (installedWallets.includes(wallet)) return <p>detected</p>;
      return null;
    };

    return (
      <div
        key={wallet}
        className={styles.wallet}
        onClick={() => {
          setInputWallet(wallet);
          setShowConnectModal(false);
        }}
      >
        <div className={styles.info}>
          <img
            className={styles.icon}
            alt={wallet}
            width={18}
            height={18}
            src={`/images/wallets/${wallet}.png`}
          />
          <p className={styles.name}>{wallet}</p>
        </div>
        {renderConnection()}
      </div>
    );
  };
  return (
    <div className={styles.background}>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          e.stopPropagation();
          setShowConnectModal(false);
        }}
      >
        <div className={styles.card}>
          <h2>Connect your wallet</h2>
          <br />
          {wallets.map(renderWallet)}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default WalletSelectModal;

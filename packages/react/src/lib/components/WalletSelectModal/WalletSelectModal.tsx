import React, { useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { WalletWindowKey } from '@sei-js/core';
import { WalletSelectModalProps } from './types';
import { styles } from './styles';
import { SeiWalletContext } from '../../provider';

// TODO: Refactor this to a separate assets repo
// Wallet logos
import coin98Logo from '../../assets/coin98.png';
import falconLogo from '../../assets/falcon.png';
import keplrLogo from '../../assets/keplr.png';
import leapLogo from '../../assets/leap.png';
import defaultIcon from '../../assets/default.svg';
const getWalletIcon = (wallet: WalletWindowKey) => {
  if (wallet === 'coin98') {
    return coin98Logo;
  } else if (wallet === 'falcon') {
    return falconLogo;
  } else if (wallet === 'keplr') {
    return keplrLogo;
  } else if (wallet === 'leap') {
    return leapLogo;
  } else {
    return defaultIcon;
  }
};

const WalletSelectModal = ({
  setShowConnectModal,
  inputWallets,
  walletSelectStyles,
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

    const selectWallet = () => {
      if (setInputWallet) setInputWallet(wallet);
      setShowConnectModal(false);
    };

    return (
      <div key={wallet} style={styles.row} onClick={selectWallet}>
        <div style={styles.info}>
          <img
            style={styles.icon}
            alt={wallet}
            width={24}
            height={24}
            src={getWalletIcon(wallet)}
          />
          <p style={{ ...styles.name, ...walletSelectStyles?.name }}>
            {wallet}
          </p>
        </div>
        {renderConnection()}
      </div>
    );
  };
  return (
    <div style={{ ...styles.background, ...walletSelectStyles?.background }}>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          e.stopPropagation();
          setShowConnectModal(false);
        }}
      >
        <div style={{ ...styles.card, ...walletSelectStyles?.card }}>
          <h2>Connect your wallet</h2>
          <br />
          {wallets.map(renderWallet)}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default WalletSelectModal;

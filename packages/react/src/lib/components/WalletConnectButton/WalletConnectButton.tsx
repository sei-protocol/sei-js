import React, { useContext, useState } from 'react';
import { styles } from './styles';
import OutsideClickHandler from 'react-outside-click-handler';
import { SeiWalletContext } from '../../provider';
import { WalletSelectModal } from '../WalletSelectModal';
import { WalletConnectButtonProps } from './types';

export const truncateAddress = (address: string) =>
  `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;

const WalletConnectButton = ({ buttonStyles }: WalletConnectButtonProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [recentlyCopied, setRecentlyCopied] = useState<boolean>(false);
  const [showConnectModal, setShowConnectModal] = useState<boolean>(false);

  const { connectedWallet, accounts, setInputWallet } =
    useContext(SeiWalletContext);

  const changeWallet = () => {
    if (setInputWallet) setInputWallet(undefined);
    setShowConnectModal(true);
    setShowMenu(false);
  };

  const copyAddress = async () => {
    setRecentlyCopied(true);
    await navigator.clipboard.writeText(accounts?.[0]?.address);
    setTimeout(() => {
      setRecentlyCopied(false);
    }, 600);
  };

  const disconnect = () => {
    if (setInputWallet) setInputWallet(undefined);
  };

  const renderButton = () => {
    if (!connectedWallet) {
      return (
        <button
          style={{ ...styles.button, ...buttonStyles?.button }}
          onClick={() => setShowConnectModal(true)}
        >
          connect wallet
        </button>
      );
    }

    const accountLabel =
      accounts?.[0] === undefined
        ? 'connecting...'
        : truncateAddress(accounts[0].address);

    return (
      <div style={styles.wrapper}>
        <button
          style={{ ...styles.button, ...buttonStyles?.button }}
          onClick={() => setShowMenu(true)}
        >
          {accountLabel}
        </button>
        {showMenu && (
          <OutsideClickHandler onOutsideClick={() => setShowMenu(false)}>
            <div style={{ ...styles.menu, ...buttonStyles?.menu }}>
              {accounts && (
                <p onClick={copyAddress}>
                  <span
                    style={{ ...styles.menuItem, ...buttonStyles?.menuItem }}
                  >
                    {recentlyCopied ? 'copied' : 'copy address'}
                  </span>
                </p>
              )}
              <p
                style={{ ...styles.menuItem, ...buttonStyles?.menuItem }}
                onClick={changeWallet}
              >
                change wallet
              </p>
              <p
                onClick={disconnect}
                style={{ ...styles.menuItem, ...buttonStyles?.menuItem }}
              >
                disconnect
              </p>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    );
  };

  return (
    <>
      {renderButton()}
      {showConnectModal && (
        <WalletSelectModal
          walletSelectStyles={buttonStyles?.walletSelectStyles}
          setShowConnectModal={setShowConnectModal}
        />
      )}
    </>
  );
};

export default WalletConnectButton;

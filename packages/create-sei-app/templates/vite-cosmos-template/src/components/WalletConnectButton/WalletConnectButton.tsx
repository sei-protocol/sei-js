import { useChain } from "@cosmos-kit/react";

import { truncateSeiAddress } from "@sei-js/cosmjs";
import styles from './WalletConnectButton.module.css'
import { selectedChain } from "../../constants";

export function WalletConnectButton() {
  const {
    isWalletConnected,
    address,
    connect,
    openView,
  } = useChain(selectedChain.chain_name);

  const truncatedSeiAddr = address ? truncateSeiAddress(address) : ""

  return (
    <button
      className={styles.walletConnectButton}
      onClick={isWalletConnected ? openView : connect}
    >
      {isWalletConnected ? truncateSeiAddress(truncatedSeiAddr) : "Connect"}
    </button>
  );
}

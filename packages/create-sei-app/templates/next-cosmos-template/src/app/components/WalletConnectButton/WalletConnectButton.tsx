import { useChain } from "@cosmos-kit/react";

import { ATLANTIC_2_SEI_COSMOS_KIT_CHAIN, truncateSeiAddress } from "@sei-js/cosmjs";
import styles from './WalletConnectButton.module.css'

export function WalletConnectButton() {
  const {
    isWalletConnected,
    address,
    connect,
    openView,
  } = useChain(ATLANTIC_2_SEI_COSMOS_KIT_CHAIN.chain_name);

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

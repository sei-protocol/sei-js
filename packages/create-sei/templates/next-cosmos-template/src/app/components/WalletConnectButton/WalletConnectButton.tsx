import { useChain } from "@cosmos-kit/react";

import "@interchain-ui/react/styles";

import { truncateSeiAddress } from "@sei-js/cosmjs";
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
      className="primary"
      onClick={isWalletConnected ? openView : connect}
    >
      {isWalletConnected ? truncateSeiAddress(truncatedSeiAddr) : "Connect"}
    </button>
  );
}

'use client';

import styles from "./page.module.css";
import Homepage from "./components/Homepage/Homepage";
import Web3Provider from "./components/Web3Provider";
import { WalletConnectButton } from "./components/WalletConnectButton/WalletConnectButton";

export default function Home() {  
  return (
    <Web3Provider>
      <div className={styles.header}>
				<WalletConnectButton/>
			</div>
      <div className={styles.appContainer}>
        <Homepage/>
      </div>
    </Web3Provider>
  );
}

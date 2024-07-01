import styles from "./page.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Web3Provider from "./components/Web3Provider";
import Homepage from "./components/Homepage/Homepage";

export default function Home() {
  return (
    <Web3Provider>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <ConnectButton 
              showBalance={{
              smallScreen: false,
              largeScreen: true,
              }}
            />
        </div>
        <Homepage/>
      </div>
    </Web3Provider>
  );
}

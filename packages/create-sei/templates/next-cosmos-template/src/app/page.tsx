'use client';

import './index.css'
import Homepage from "./components/Homepage/Homepage";
import Web3Provider from "./components/Web3Provider";
import { WalletConnectButton } from "./components/WalletConnectButton/WalletConnectButton";

export default function Home() {  
  return (
    <Web3Provider>
      <div className="header">
        <WalletConnectButton/>
      </div>
      <Homepage/>
    </Web3Provider>
  );
}

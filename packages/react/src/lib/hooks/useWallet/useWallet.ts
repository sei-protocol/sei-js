import { useContext } from 'react';
import { SeiWalletContext, WalletProvider } from '../../provider';

const useWallet = (): WalletProvider => useContext(SeiWalletContext);

export default useWallet;

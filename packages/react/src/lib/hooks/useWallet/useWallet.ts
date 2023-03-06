import { useContext } from 'react';
import { SeiWalletContext } from '../../provider';
import { WalletProvider } from '../../provider/SeiWalletProvider';

const useWallet: () => WalletProvider = () => useContext(SeiWalletContext);

export default useWallet;

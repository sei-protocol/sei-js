import { useContext } from 'react';
import { SeiWallet, SeiWalletContext } from '../../provider';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';

type UseWallet = {
	connectedWallet?: SeiWallet;
	chainId: string;
	restUrl: string;
	rpcUrl: string;
	offlineSigner?: OfflineSigner;
	accounts: readonly AccountData[];
};
const useWallet = (): UseWallet => {
	const { connectedWallet, chainId, restUrl, rpcUrl, offlineSigner, accounts } = useContext(SeiWalletContext);

	return { connectedWallet, chainId, restUrl, rpcUrl, offlineSigner, accounts };
};

export default useWallet;

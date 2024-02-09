import { useContext } from 'react';
import { SeiWalletContext } from '../../provider';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';
import { SeiWallet } from '@sei-js/core';

/**
 * @param connectedWallet The currently connected wallet
 * @param chainId The Sei Chain Id
 * @param restUrl The REST url associated with the connected wallet
 * @param rpcUrl The RPC url associated with the connected wallet
 * @param offlineSigner The OfflineSigner object associated with the connected wallet
 * @param accounts The list of AccountData objects associated with the connected wallet
 */
type UseWallet = {
	connectedWallet?: SeiWallet;
	chainId: string;
	restUrl: string;
	rpcUrl: string;
	offlineSigner?: OfflineSigner;
	accounts: readonly AccountData[];
	disconnect: () => void;
};

/**
 * A hook to connect one of our supported wallets to your application.
 * @returns A {@link UseWallet} object that contains information about connected wallets.
 */
const useWallet = (): UseWallet => {
	const { connectedWallet, chainId, restUrl, rpcUrl, offlineSigner, accounts, disconnect } = useContext(SeiWalletContext);

	return { connectedWallet, chainId, restUrl, rpcUrl, offlineSigner, accounts, disconnect };
};

export default useWallet;

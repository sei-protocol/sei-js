import { useContext, useEffect, useState } from 'react';
import { getSigningCosmWasmClient } from '@sei-js/core';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

import { SeiWalletContext } from '../../provider';

/**
 * A type that represents the return value of the {@link useSigningCosmWasmClient} hook.
 * @param isLoading Boolean value for when the initial loading is happening. Set to true if the client is unavailable.
 * @param signingCosmWasmClient The requested SigningCosmWasmClient.
 */
export type UseSigningCosmWasmClient = {
	isLoading: boolean;
	signingCosmWasmClient?: SigningCosmWasmClient;
};

/**
 * A hook to get a SigningCosmWasmClient in your application.
 * @param customRpcUrl Optional parameter to specify a custom rpc url. Defaults to the rpcUrl of the current SeiWalletContext if not set.
 * @returns A {@link UseSigningCosmWasmClient} object that provides access to a SigningCosmWasmClient once it has loaded.
 */
const useSigningCosmWasmClient = (customRpcUrl?: string): UseSigningCosmWasmClient => {
	const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [signingCosmWasmClient, setSigningCosmWasmClient] = useState<SigningCosmWasmClient>();

	useEffect(() => {
		const getClient = async () => {
			try {
				if (!rpcUrl || !offlineSigner || !chainId) return;
				setIsLoading(true);
				const client = await getSigningCosmWasmClient(customRpcUrl || rpcUrl, offlineSigner);
				setSigningCosmWasmClient(client);
				setIsLoading(false);
			} catch {
				console.error('Error creating signing cosmwasm client');
			}
		};

		getClient();
	}, [customRpcUrl, rpcUrl, chainId, offlineSigner]);

	return { signingCosmWasmClient, isLoading };
};

export default useSigningCosmWasmClient;

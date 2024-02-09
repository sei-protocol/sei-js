import { useContext, useEffect, useState } from 'react';
import { getCosmWasmClient } from '@sei-js/core';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

import { SeiWalletContext } from '../../provider';

/**
 * A type that represents the return value of the {@link useCosmWasmClient} hook.
 * @param isLoading Boolean value for when the initial loading is happening. Set to true if the client is unavailable.
 * @param cosmWasmClient The requested CosmWasmClient.
 */
export type UseCosmWasmClient = {
	isLoading: boolean;
	cosmWasmClient?: CosmWasmClient;
};

/**
 * A hook to get a CosmWasmClient in your application.
 * @param customRpcUrl Optional parameter to specify a custom rpc url. Defaults to the rpcUrl of the current SeiWalletContext if not set.
 * @returns A {@link UseCosmWasmClient} object that provides access to a CosmWasmClient once it has loaded.
 */
const useCosmWasmClient = (customRpcUrl?: string): UseCosmWasmClient => {
	const { rpcUrl, chainId } = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient>();

	useEffect(() => {
		const getClient = async () => {
			try {
				if (!rpcUrl || !chainId) return;
				setIsLoading(true);
				const client = await getCosmWasmClient(customRpcUrl || rpcUrl);
				setCosmWasmClient(client);
				setIsLoading(false);
			} catch {
				console.error('Error creating cosmwasm client');
			}
		};

		getClient();
	}, [customRpcUrl, rpcUrl, chainId]);

	return { isLoading, cosmWasmClient };
};

export default useCosmWasmClient;

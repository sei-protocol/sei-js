import { useContext, useEffect, useState } from 'react';
import { getStargateClient } from '@sei-js/core';
import { StargateClient } from '@cosmjs/stargate';

import { SeiWalletContext } from '../../provider';

/**
 * A type that represents the return value of the {@link useStargateClient} hook.
 * @param isLoading Boolean value for when the initial loading is happening. Set to true if the client is unavailable.
 * @param stargateClient The requested StargateClient.
 */
export type UseStargateClient = {
	isLoading: boolean;
	stargateClient?: StargateClient;
};

/**
 * A hook to get a StargateClient in your application.
 * @param customRpcUrl Optional parameter to specify a custom rpc url. Defaults to the rpcUrl of the current SeiWalletContext if not set.
 * @returns A {@link UseStargateClient} object that provides access to a StargateClient once it has loaded.
 */
const useStargateClient = (customRpcUrl?: string): UseStargateClient => {
	const { rpcUrl, chainId } = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [stargateClient, setStargateClient] = useState<StargateClient>();

	useEffect(() => {
		const getClient = async () => {
			try {
				if (!rpcUrl || !chainId) return;
				setIsLoading(true);
				const client = await getStargateClient(customRpcUrl || rpcUrl);
				setStargateClient(client);
				setIsLoading(false);
			} catch {
				console.error('Error creating signing client');
			}
		};

		getClient();
	}, [customRpcUrl, rpcUrl, chainId]);

	return { stargateClient, isLoading };
};

export default useStargateClient;

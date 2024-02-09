import { useContext, useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';
import { SigningStargateClient } from '@cosmjs/stargate';

import { SeiWalletContext } from '../../provider';

/**
 * A type that represents the return value of the {@link useSigningClient} hook.
 * @param isLoading Boolean value for when the initial loading is happening. Set to true if the client is unavailable.
 * @param signingClient The requested SigningStargateClient.
 */
export type UseSigningClient = {
	isLoading: boolean;
	signingClient?: SigningStargateClient;
};

/**
 * A hook to get a SigningClient in your application.
 * @param customRpcUrl Optional parameter to specify a custom rpc url. Defaults to the rpcUrl of the current SeiWalletContext if not set.
 * @returns A {@link UseSigningClient} object that provides access to a SigningClient once it has loaded.
 */
const useSigningClient = (customRpcUrl?: string): UseSigningClient => {
	const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [signingClient, setSigningClient] = useState<SigningStargateClient>();

	useEffect(() => {
		const getClient = async () => {
			try {
				if (!rpcUrl || !offlineSigner || !chainId) return;
				setIsLoading(true);
				const client = await getSigningClient(customRpcUrl || rpcUrl, offlineSigner);
				setSigningClient(client);
				setIsLoading(false);
			} catch (e: any) {
				console.error('Error creating signing client');
			}
		};

		getClient();
	}, [customRpcUrl, rpcUrl, chainId, offlineSigner]);

	return { signingClient, isLoading };
};

export default useSigningClient;

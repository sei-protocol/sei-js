import { useContext, useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';
import { SigningStargateClient, SigningStargateClientOptions } from '@cosmjs/stargate';
import { SeiWalletContext } from '../../provider';

export type UseSigningClient = {
	isLoading: boolean;
	signingClient?: SigningStargateClient;
};

const useSigningClient = (customRpcUrl?: string, options?: SigningStargateClientOptions): UseSigningClient => {
	const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [signingClient, setSigningClient] = useState<SigningStargateClient>();

	useEffect(() => {
		const getClient = async () => {
			try {
				if (!rpcUrl || !offlineSigner || !chainId) return;
				setIsLoading(true);
				const client = await getSigningClient(customRpcUrl || rpcUrl, offlineSigner, options);
				setSigningClient(client);
				setIsLoading(false);
			} catch {
				console.error('Error creating signing client');
			}
		};

		getClient();
	}, [customRpcUrl, rpcUrl, chainId, offlineSigner]);

	return { signingClient, isLoading };
};

export default useSigningClient;

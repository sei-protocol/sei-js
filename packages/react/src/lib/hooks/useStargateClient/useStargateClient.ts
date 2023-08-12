import { useContext, useEffect, useState } from 'react';
import { getStargateClient } from '@sei-js/core';
import { StargateClient } from '@cosmjs/stargate';

import { SeiWalletContext } from '../../provider';

export type UseStargateClient = {
	isLoading: boolean;
	stargateClient?: StargateClient;
};

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

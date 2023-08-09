import { useContext, useEffect, useState } from 'react';
import { getSigningCosmWasmClient } from '@sei-js/core';
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { SeiWalletContext } from '../../provider';

export type UseSigningCosmWasmClient = {
	isLoading: boolean;
	signingCosmWasmClient?: SigningCosmWasmClient;
};

const useSigningCosmWasmClient = (customRpcUrl?: string, options?: SigningCosmWasmClientOptions): UseSigningCosmWasmClient => {
	const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [signingCosmWasmClient, setSigningCosmWasmClient] = useState<SigningCosmWasmClient>();

	useEffect(() => {
		const getClient = async () => {
			try {
				if (!rpcUrl || !offlineSigner || !chainId) return;
				setIsLoading(true);
				const client = await getSigningCosmWasmClient(customRpcUrl || rpcUrl, offlineSigner, options);
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

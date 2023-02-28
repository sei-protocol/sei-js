import { useContext, useEffect, useState } from 'react';
import { getQueryClient } from '@sei-js/core';
import { SeiWalletContext } from '../../provider';

const useQueryClient = () => {
	const seiWallet = useContext(SeiWalletContext);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [queryClient, setQueryClient] = useState<Awaited<ReturnType<typeof getQueryClient>>>();

	useEffect(() => {
		const getClient = async () => {
			if (!seiWallet?.restUrl) return;
			return await getQueryClient(seiWallet.restUrl);
		};

		setIsLoading(true);

		getClient().then((client) => {
			setQueryClient(client);
			setIsLoading(false);
		});
	}, [seiWallet?.restUrl]);

	return { queryClient, isLoading };
};

export default useQueryClient;

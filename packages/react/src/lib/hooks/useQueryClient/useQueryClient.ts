import { useContext, useEffect, useState } from 'react';
import { getQueryClient } from '@sei-js/core';
import { SeiWalletContext } from '../../provider';

export type QueryClient = Awaited<ReturnType<typeof getQueryClient>>;

export type UseQueryClient = {
  isLoading: boolean;
  queryClient?: QueryClient;
};

const useQueryClient = (): UseQueryClient => {
  const seiWallet = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queryClient, setQueryClient] = useState<QueryClient>();

  useEffect(() => {
    const getClient = async () => {
      try {
        if (!seiWallet?.restUrl) return;
        setIsLoading(true);
        const client = await getQueryClient(seiWallet.restUrl);
        setQueryClient(client);
        setIsLoading(false);
      } catch {
        console.error('Error creating query client');
      }
    };

    getClient();
  }, [seiWallet?.restUrl]);

  return { queryClient, isLoading };
};

export default useQueryClient;

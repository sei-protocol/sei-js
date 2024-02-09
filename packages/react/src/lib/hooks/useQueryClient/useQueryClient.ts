import { useContext, useEffect, useState } from 'react';
import { getQueryClient } from '@sei-js/core';
import { SeiWalletContext } from '../../provider';

/**
 * The interface for a generic QueryClient object.
 */
export type QueryClient = Awaited<ReturnType<typeof getQueryClient>>;

/**
 * A type that represents the return value of the {@link useQueryClient} hook.
 * @param isLoading Boolean value for when the initial loading is happening. Set to true if the client is unavailable.
 * @param cosmWasmClient The requested QueryClient object that can be used to query the chain.
 */
export type UseQueryClient = {
  isLoading: boolean;
  queryClient?: QueryClient;
};

/**
 * A hook to get a Querylient in your application.
 * @returns A {@link UseQueryClient} object that provides access to a QueryClient once it has loaded.
 */
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

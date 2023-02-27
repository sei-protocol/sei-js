import { useContext, useEffect, useState } from 'react';
import { getQueryClient } from '@sei-js/core/src';
import { SeiWalletContext } from '../../provider';

const useQueryClient = (restUrl?: string) => {
  const seiWallet = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queryClient, setQueryClient] =
    useState<Awaited<ReturnType<typeof getQueryClient>>>();

  useEffect(() => {
    const getClient = async () => {
      return await getQueryClient(
        restUrl ? restUrl : (seiWallet.restUrl as string)
      );
    };

    setIsLoading(true);

    getClient().then((client) => {
      setQueryClient(client);
      setIsLoading(false);
    });
  }, [restUrl]);

  return { queryClient, isLoading };
};

export default useQueryClient;

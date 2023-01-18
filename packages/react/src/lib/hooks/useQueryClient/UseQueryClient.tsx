import { useEffect, useState } from 'react';
import { getQueryClient } from '@sei-js/core';

const useQueryClient = (restUrl: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queryClient, setQueryClient] =
    useState<Awaited<ReturnType<typeof getQueryClient>>>();

  useEffect(() => {
    const getClient = async () => {
      return await getQueryClient(restUrl);
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

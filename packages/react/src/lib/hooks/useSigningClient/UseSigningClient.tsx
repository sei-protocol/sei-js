import { useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';

const useSigningClient = (rpcAddress: string, offlineSigner?: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [signingClient, setSigningClient] = useState<any>();

  useEffect(() => {
    const getClient = async () => {
      return await getSigningClient(rpcAddress, offlineSigner);
    };

    if (!offlineSigner) return;
    setIsLoading(true);

    getClient().then((client) => {
      setSigningClient(client);
      setIsLoading(false);
    });
  }, [rpcAddress, offlineSigner]);

  return { signingClient, isLoading };
};

export default useSigningClient;

import { useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';

const useSigningClient = (
  rpcAddress: string,
  offlineSigner?: OfflineSigner
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [signingClient, setSigningClient] = useState<SigningStargateClient>();

  useEffect(() => {
    const getClient = async () => {
      if (!offlineSigner) return;
      return await getSigningClient(rpcAddress, offlineSigner);
    };

    setIsLoading(true);

    getClient().then((client) => {
      setSigningClient(client);
      setIsLoading(false);
    });
  }, [rpcAddress, offlineSigner]);

  return { signingClient, isLoading };
};

export default useSigningClient;

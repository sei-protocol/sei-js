import { useContext, useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';
import { SigningStargateClient } from '@cosmjs/stargate';
import { SeiWalletContext } from '../../provider';

const useSigningClient = (rpcAddress?: string) => {
  const { offlineSigner, rpcUrl } = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [signingClient, setSigningClient] = useState<SigningStargateClient>();

  useEffect(() => {
    const getClient = async () => {
      if (!offlineSigner) return;
      return await getSigningClient(
        rpcAddress ? rpcAddress : rpcUrl,
        offlineSigner
      );
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

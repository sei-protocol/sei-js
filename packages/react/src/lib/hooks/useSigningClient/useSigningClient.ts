import { useContext, useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';
import { SigningStargateClient } from '@cosmjs/stargate';

import { SeiWalletContext } from '../../provider';
import { shouldUseTm34Client } from '../../utils';

const useSigningClient = (customRpcUrl?: string) => {
  const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [signingClient, setSigningClient] = useState<SigningStargateClient>();

  useEffect(() => {
    const getClient = async () => {
      try {
        if (!rpcUrl || !offlineSigner || !chainId) return;
        setIsLoading(true);
        const client = await getSigningClient(
          customRpcUrl || rpcUrl,
          offlineSigner,
          {
            useTM34: shouldUseTm34Client(chainId),
          }
        );
        setSigningClient(client);
        setIsLoading(false);
      } catch {
        console.error('Error creating signing client');
      }
    };

    getClient();
  }, [customRpcUrl, rpcUrl, offlineSigner]);

  return { signingClient, isLoading };
};

export default useSigningClient;

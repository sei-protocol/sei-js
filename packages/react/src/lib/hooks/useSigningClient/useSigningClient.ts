import { useContext, useEffect, useState } from 'react';
import { getSigningClient } from '@sei-js/core';
import { SigningStargateClient } from '@cosmjs/stargate';
import { SeiWalletContext } from '../../provider';

const useSigningClient = (rpc?: string) => {
  const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [signingClient, setSigningClient] = useState<SigningStargateClient>();

  useEffect(() => {
    const getClient = async () => {
      if (!rpcUrl || !offlineSigner) return;
      return await getSigningClient(
        rpc ? rpc : rpcUrl,
        offlineSigner,
        chainId === 'atlantic-1'
      );
    };

    setIsLoading(true);

    getClient().then((client) => {
      setSigningClient(client);
      setIsLoading(false);
    });
  }, [rpc, rpcUrl, offlineSigner]);

  return { signingClient, isLoading };
};

export default useSigningClient;

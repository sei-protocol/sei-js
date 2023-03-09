import { useContext, useEffect, useState } from 'react';
import { getSigningCosmWasmClient } from '@sei-js/core';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

import { SeiWalletContext } from '../../provider';
import { shouldUseTm34Client } from '../../utils';

export type UseSigningCosmWasmClient = {
  isLoading: boolean;
  signingCosmWasmClient?: SigningCosmWasmClient;
};

const useSigningCosmWasmClient = (
  customRpcUrl?: string
): UseSigningCosmWasmClient => {
  const { offlineSigner, rpcUrl, chainId } = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [signingCosmWasmClient, setSigningCosmWasmClient] =
    useState<SigningCosmWasmClient>();

  useEffect(() => {
    const getClient = async () => {
      try {
        if (!rpcUrl || !offlineSigner || !chainId) return;
        setIsLoading(true);
        const client = await getSigningCosmWasmClient(
          customRpcUrl || rpcUrl,
          offlineSigner,
          {
            useTM34: shouldUseTm34Client(chainId),
          }
        );
        setSigningCosmWasmClient(client);
        setIsLoading(false);
      } catch {
        console.error('Error creating signing cosmwasm client');
      }
    };

    getClient();
  }, [customRpcUrl, rpcUrl, chainId, offlineSigner]);

  return { signingCosmWasmClient, isLoading };
};

export default useSigningCosmWasmClient;

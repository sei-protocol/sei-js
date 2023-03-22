import { useContext, useEffect, useState } from 'react';
import { getCosmWasmClient } from '@sei-js/core';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

import { SeiWalletContext } from '../../provider';
import { shouldUseTm34Client } from '../../utils';

export type UseCosmWasmClient = {
  isLoading: boolean;
  cosmWasmClient?: CosmWasmClient;
};

const useCosmWasmClient = (customRpcUrl?: string): UseCosmWasmClient => {
  const { rpcUrl, chainId } = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient>();

  useEffect(() => {
    const getClient = async () => {
      try {
        if (!rpcUrl || !chainId) return;
        setIsLoading(true);
        const client = await getCosmWasmClient(customRpcUrl || rpcUrl, {
          useTM34: shouldUseTm34Client(chainId),
        });
        setCosmWasmClient(client);
        setIsLoading(false);
      } catch {
        console.error('Error creating cosmwasm client');
      }
    };

    getClient();
  }, [customRpcUrl, rpcUrl, chainId]);

  return { isLoading, cosmWasmClient };
};

export default useCosmWasmClient;

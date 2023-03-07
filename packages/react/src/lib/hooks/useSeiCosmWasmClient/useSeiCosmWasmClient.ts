import { useContext, useEffect, useState } from 'react';
import { SeiWalletContext } from '../../provider';
import { SeiCosmWasmClient } from '@sei-js/core';
import { UseSeiCosmWasmClient } from './types';

const useSeiCosmWasmClient = (): UseSeiCosmWasmClient => {
  const seiWallet = useContext(SeiWalletContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cosmWasmClient, setCosmWasmClient] = useState<SeiCosmWasmClient>();

  useEffect(() => {
    const connect = async () => {
      try {
        if (!seiWallet?.rpcUrl) return;
        setIsLoading(true);
        const client = await SeiCosmWasmClient.connect(seiWallet.rpcUrl);
        setCosmWasmClient(client);
        setIsLoading(false);
      } catch {
        console.error('Error creating cosmwasm client');
      }
    };

    connect();
  }, [seiWallet, seiWallet?.rpcUrl]);

  return { isLoading, cosmWasmClient };
};

export default useSeiCosmWasmClient;

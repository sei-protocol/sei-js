import React, { useContext, useEffect, useState } from 'react';
import { SeiWalletContext } from '../../provider';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { SeiCosmWasmClient } from '@sei-js/core/src';

const useSeiCosmWasmClient = (rpcUrl?: string) => {
  const seiWallet = useContext(SeiWalletContext);

  const [client, setClient] = useState<CosmWasmClient | undefined>(undefined);

  useEffect(() => {
    const connect = async () => {
      try {
        const client = await SeiCosmWasmClient.connect(
          rpcUrl ? rpcUrl : (seiWallet.rpcUrl as string)
        );
        setClient(client);
      } catch (e: any) {
        console.error('Error creating SeiCosmWasmClient.', e?.messsage);
      }
    };
    connect().then();
  }, [seiWallet, rpcUrl]);

  return { client };
};

export default useSeiCosmWasmClient;

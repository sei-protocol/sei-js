import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

import { SeiCosmWasmClient, SeiSigningCosmWasmClient } from '../client';

export const getCosmWasmClient = async (
  rpcEndpoint: string,
  useTM34?: boolean
): Promise<CosmWasmClient> => {
  if (useTM34) {
    return CosmWasmClient.connect(rpcEndpoint);
  }

  return SeiCosmWasmClient.connect(rpcEndpoint);
};

export const getSigningCosmWasmClient = async (
  rpcEndpoint: string,
  signer: OfflineSigner,
  useTM34?: boolean
): Promise<SigningCosmWasmClient> => {
  // TODO: Add ability to pass in options if needed
  if (useTM34) {
    return SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer);
  }

  return SeiSigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer);
};

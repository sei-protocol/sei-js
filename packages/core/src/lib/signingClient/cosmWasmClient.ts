import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

import { SeiCosmWasmClient, SeiSigningCosmWasmClient } from '../client';
import { SeiClientOptions, SeiSigningCosmWasmClientOptions } from './types';
import { createSeiAminoTypes, createSeiRegistry } from './stargateClient';

export const getCosmWasmClient = async (
  rpcEndpoint: string,
  options: SeiClientOptions = {}
): Promise<CosmWasmClient> => {
  if (options.useTM34) {
    return CosmWasmClient.connect(rpcEndpoint);
  }

  return SeiCosmWasmClient.connect(rpcEndpoint);
};

export const getSigningCosmWasmClient = async (
  rpcEndpoint: string,
  signer: OfflineSigner,
  options: SeiSigningCosmWasmClientOptions = {}
): Promise<SigningCosmWasmClient> => {
  const registry = createSeiRegistry();
  const aminoTypes = createSeiAminoTypes();

  if (options.useTM34) {
    return SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer, {
      registry,
      aminoTypes,
      ...options,
    });
  }

  return SeiSigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes,
    ...options,
  });
};

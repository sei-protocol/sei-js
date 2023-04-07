import {
  AminoTypes,
  SigningStargateClient,
  StargateClient,
  defaultRegistryTypes,
} from '@cosmjs/stargate';
import { OfflineSigner, Registry } from '@cosmjs/proto-signing';
import {
  cosmosAminoConverters,
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  ibcAminoConverters,
  seiprotocolProtoRegistry,
  seiprotocolAminoConverters,
} from '@sei-js/proto';

import { SeiSigningStargateClient, SeiStargateClient } from '../client';
import {
  SeiSigningStagateClientOptions,
  SeiStagateClientOptions,
} from './types';

export const createSeiRegistry = (): Registry => {
  return new Registry([
    ...defaultRegistryTypes,
    ...cosmwasmProtoRegistry,
    ...seiprotocolProtoRegistry,
  ]);
};

export const createSeiAminoTypes = (): AminoTypes => {
  const types = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...seiprotocolAminoConverters,
  };
  return new AminoTypes(types);
};

export const getStargateClient = async (
  rpcEndpoint: string,
  options: SeiStagateClientOptions = {}
): Promise<StargateClient> => {
  if (options.useTM34) {
    return StargateClient.connect(rpcEndpoint, options);
  }

  return SeiStargateClient.connect(rpcEndpoint, options);
};

export const getSigningClient = async (
  rpcEndpoint: string,
  signer: OfflineSigner,
  options: SeiSigningStagateClientOptions = {}
): Promise<SigningStargateClient> => {
  const registry = createSeiRegistry();
  const aminoTypes = createSeiAminoTypes();

  if (options.useTM34) {
    return SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
      registry,
      aminoTypes,
      ...options,
    });
  }

  return SeiSigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes,
    ...options,
  });
};

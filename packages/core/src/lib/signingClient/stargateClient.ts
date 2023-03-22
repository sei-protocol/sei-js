import { SigningStargateClient, StargateClient } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

import { SeiSigningStargateClient, SeiStargateClient } from '../client';
import {
  SeiSigningStagateClientOptions,
  SeiStagateClientOptions,
} from './types';

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
  if (options.useTM34) {
    return SigningStargateClient.connectWithSigner(
      rpcEndpoint,
      signer,
      options
    );
  }

  return SeiSigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    options
  );
};

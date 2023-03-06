import { SigningStargateClient } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

import { SeiSigningStargateClient } from '../client';

export const getSigningClient = async (
  rpcEndpoint: string,
  signer: OfflineSigner,
  useTM34?: boolean
): Promise<SigningStargateClient> => {
  // TODO: Add ability to pass in options if needed
  if (useTM34) {
    return SigningStargateClient.connectWithSigner(rpcEndpoint, signer);
  }

  return SeiSigningStargateClient.connectWithSigner(rpcEndpoint, signer);
};

import { SigningStargateClient } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { getSigningSeiprotocolClient } from '@sei-js/proto';

export const getSigningClient = async (
  rpcEndpoint: string,
  signer: OfflineSigner,
  useTM34?: boolean
): Promise<SigningStargateClient> => {
  return await getSigningSeiprotocolClient({ rpcEndpoint, signer, useTM34 });
};

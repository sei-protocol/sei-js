import { SigningStargateClient } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { getSigningSeiprotocolClient } from '@sei-js/proto';

export const getSigningClient = async (
  rpcEndpoint: string,
  signer: OfflineSigner
): Promise<SigningStargateClient> => {
  return await getSigningSeiprotocolClient({ rpcEndpoint, signer });
};

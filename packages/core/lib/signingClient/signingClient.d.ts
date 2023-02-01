import { SigningStargateClient } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
export declare const getSigningClient: (rpcEndpoint: string, signer: OfflineSigner) => Promise<SigningStargateClient>;

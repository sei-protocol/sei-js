import { CosmWasmClient, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { createSeiAminoTypes, createSeiRegistry } from './stargateClient';

export const getCosmWasmClient = async (rpcEndpoint: string): Promise<CosmWasmClient> => {
	return CosmWasmClient.connect(rpcEndpoint);
};

export const getSigningCosmWasmClient = async (
	rpcEndpoint: string,
	signer: OfflineSigner,
	options: SigningCosmWasmClientOptions = {}
): Promise<SigningCosmWasmClient> => {
	const registry = createSeiRegistry();
	const aminoTypes = createSeiAminoTypes();
	return SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer, {
		registry,
		aminoTypes,
		...options
	});
};

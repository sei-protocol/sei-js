import { CosmWasmClient, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { createSeiAminoTypes, createSeiRegistry } from './stargateClient';

/**
 * Returns a interface used to interact with the Sei chain.
 * @param rpcEndpoint The url of the RPC Endpoint used to connect to the Sei chain.
 * @returns A CosmWasmClient used to interact with the Sei chain.
 */
export const getCosmWasmClient = async (rpcEndpoint: string): Promise<CosmWasmClient> => {
	return CosmWasmClient.connect(rpcEndpoint);
};

/**
 * Returns an interface used to sign transactions on the Sei chain.
 * @param rpcEndpoint The url of the RPC Endpoint used to connect to the Sei chain.
 * @param signer An OfflineAminoSigner or OfflineDirectSigner from @cosmjs/amino containing info about the signer.
 * @param options A SigningCosmWasmClientOptions object from @cosmjs/cosmwasm-stargate containing options to configure the signing client.
 * @returns A client that can be used to sign CosmWasm transactions on the Sei chain.
 */
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

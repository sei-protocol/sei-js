import { AminoTypes, SigningStargateClient, SigningStargateClientOptions, StargateClient, StargateClientOptions, defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner, Registry } from '@cosmjs/proto-signing';
import {
	cosmosAminoConverters,
	cosmwasmAminoConverters,
	cosmwasmProtoRegistry,
	ibcAminoConverters,
	seiprotocolProtoRegistry,
	seiprotocolAminoConverters
} from '@sei-js/proto';

/**
 * Creates a Registry object that maps CosmWasm and Sei protobuf type identifiersto their actual implementations.
 * @returns A Registry object that maps CosmWasm and Sei protobuf type identifiersto their actual implementations.
 */
export const createSeiRegistry = (): Registry => {
	return new Registry([...defaultRegistryTypes, ...cosmwasmProtoRegistry, ...seiprotocolProtoRegistry]);
};

/**
 * Creates a mapping of stargate message types to Sei Amino types.
 * @returns A mapping of stargate message types to Sei Amino types.
 */
export const createSeiAminoTypes = (): AminoTypes => {
	const types = {
		...cosmosAminoConverters,
		...cosmwasmAminoConverters,
		...ibcAminoConverters,
		...seiprotocolAminoConverters
	};
	return new AminoTypes(types);
};

/**
 * Gets a @cosmjs/stargate client used to interact with the Sei chain.
 * @param rpcEndpoint The endpoint of the RPC node used to interact to the Sei chain.
 * @param options A StargateClientOptions object used to configure the stargate client.
 * @returns A StargateClient object used to interact with the Sei chain.
 */
export const getStargateClient = async (rpcEndpoint: string, options: StargateClientOptions = {}): Promise<StargateClient> => {
	return StargateClient.connect(rpcEndpoint, options);
};

/**
 * Gets a @cosmjs/stargate client used to sign transactions on the Sei chain.
 * @param rpcEndpoint The endpoint of the RPC node used to interact to the Sei chain.
 * @param signer An OfflineAminoSigner or OfflineDirectSigner from @cosmjs/amino containing info about the signer.
 * @param options A SigningStargateClientOptions object used to configure the stargate client.
 * @returns A SigningStargateClient object used to sign transactions on the Sei chain.
 */
export const getSigningClient = async (rpcEndpoint: string, signer: OfflineSigner, options: SigningStargateClientOptions = {}): Promise<SigningStargateClient> => {
	const registry = createSeiRegistry();
	const aminoTypes = createSeiAminoTypes();
	return SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
		registry,
		aminoTypes,
		...options
	});
};

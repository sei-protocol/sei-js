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

export const createSeiRegistry = (): Registry => {
	return new Registry([...defaultRegistryTypes, ...cosmwasmProtoRegistry, ...seiprotocolProtoRegistry]);
};

export const createSeiAminoTypes = (): AminoTypes => {
	const types = {
		...cosmosAminoConverters,
		...cosmwasmAminoConverters,
		...ibcAminoConverters,
		...seiprotocolAminoConverters
	};
	return new AminoTypes(types);
};

export const getStargateClient = async (rpcEndpoint: string, options: StargateClientOptions = {}): Promise<StargateClient> => {
	return StargateClient.connect(rpcEndpoint, options);
};

export const getSigningClient = async (rpcEndpoint: string, signer: OfflineSigner, options: SigningStargateClientOptions = {}): Promise<SigningStargateClient> => {
	const registry = createSeiRegistry();
	const aminoTypes = createSeiAminoTypes();
	return SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
		registry,
		aminoTypes,
		...options
	});
};

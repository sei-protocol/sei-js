import { GeneratedType, Registry, OfflineSigner } from '@cosmjs/proto-signing';
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';
import * as dexTxRegistry from '../dex/tx.registry';
import * as evmTxRegistry from '../evm/tx.registry';
import * as oracleTxRegistry from '../oracle/tx.registry';
import * as tokenfactoryTxRegistry from '../tokenfactory/tx.registry';
import * as dexTxAmino from '../dex/tx.amino';
import * as evmTxAmino from '../evm/tx.amino';
import * as oracleTxAmino from '../oracle/tx.amino';
import * as tokenfactoryTxAmino from '../tokenfactory/tx.amino';
export const seiprotocolAminoConverters = {
	...dexTxAmino.AminoConverter,
	...evmTxAmino.AminoConverter,
	...oracleTxAmino.AminoConverter,
	...tokenfactoryTxAmino.AminoConverter
};
export const seiprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
	...dexTxRegistry.registry,
	...evmTxRegistry.registry,
	...oracleTxRegistry.registry,
	...tokenfactoryTxRegistry.registry
];
export const getSigningSeiprotocolClientOptions = ({
	defaultTypes = defaultRegistryTypes
}: {
	defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
	registry: Registry;
	aminoTypes: AminoTypes;
} => {
	const registry = new Registry([...defaultTypes, ...seiprotocolProtoRegistry]);
	const aminoTypes = new AminoTypes({
		...seiprotocolAminoConverters
	});
	return {
		registry,
		aminoTypes
	};
};
export const getSigningSeiprotocolClient = async ({
	rpcEndpoint,
	signer,
	defaultTypes = defaultRegistryTypes
}: {
	rpcEndpoint: string | HttpEndpoint;
	signer: OfflineSigner;
	defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
	const { registry, aminoTypes } = getSigningSeiprotocolClientOptions({
		defaultTypes
	});
	const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
		registry: registry as any,
		aminoTypes
	});
	return client;
};

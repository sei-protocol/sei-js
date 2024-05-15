import { GeneratedType, Registry, OfflineSigner } from '@cosmjs/proto-signing';
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';
import * as cosmosAccesscontrolXTxRegistry from './accesscontrol_x/tx.registry';
import * as cosmosBankV1beta1TxRegistry from './bank/v1beta1/tx.registry';
import * as cosmosDistributionV1beta1TxRegistry from './distribution/v1beta1/tx.registry';
import * as cosmosFeegrantV1beta1TxRegistry from './feegrant/v1beta1/tx.registry';
import * as cosmosGovV1beta1TxRegistry from './gov/v1beta1/tx.registry';
import * as cosmosStakingV1beta1TxRegistry from './staking/v1beta1/tx.registry';
import * as cosmosUpgradeV1beta1TxRegistry from './upgrade/v1beta1/tx.registry';
import * as cosmosAccesscontrolXTxAmino from './accesscontrol_x/tx.amino';
import * as cosmosBankV1beta1TxAmino from './bank/v1beta1/tx.amino';
import * as cosmosDistributionV1beta1TxAmino from './distribution/v1beta1/tx.amino';
import * as cosmosFeegrantV1beta1TxAmino from './feegrant/v1beta1/tx.amino';
import * as cosmosGovV1beta1TxAmino from './gov/v1beta1/tx.amino';
import * as cosmosStakingV1beta1TxAmino from './staking/v1beta1/tx.amino';
import * as cosmosUpgradeV1beta1TxAmino from './upgrade/v1beta1/tx.amino';
export const cosmosAminoConverters = {
	...cosmosAccesscontrolXTxAmino.AminoConverter,
	...cosmosBankV1beta1TxAmino.AminoConverter,
	...cosmosDistributionV1beta1TxAmino.AminoConverter,
	...cosmosFeegrantV1beta1TxAmino.AminoConverter,
	...cosmosGovV1beta1TxAmino.AminoConverter,
	...cosmosStakingV1beta1TxAmino.AminoConverter,
	...cosmosUpgradeV1beta1TxAmino.AminoConverter
};
export const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
	...cosmosAccesscontrolXTxRegistry.registry,
	...cosmosBankV1beta1TxRegistry.registry,
	...cosmosDistributionV1beta1TxRegistry.registry,
	...cosmosFeegrantV1beta1TxRegistry.registry,
	...cosmosGovV1beta1TxRegistry.registry,
	...cosmosStakingV1beta1TxRegistry.registry,
	...cosmosUpgradeV1beta1TxRegistry.registry
];
export const getSigningCosmosClientOptions = (): {
	registry: Registry;
	aminoTypes: AminoTypes;
} => {
	const registry = new Registry([...cosmosProtoRegistry]);
	const aminoTypes = new AminoTypes({
		...cosmosAminoConverters
	});
	return {
		registry,
		aminoTypes
	};
};
export const getSigningCosmosClient = async ({ rpcEndpoint, signer }: { rpcEndpoint: string | HttpEndpoint; signer: OfflineSigner }) => {
	const { registry, aminoTypes } = getSigningCosmosClientOptions();
	const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
		registry: registry as any,
		aminoTypes
	});
	return client;
};

/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as CosmosSlashingV1beta1Slashing from "./slashing.pb";
export type GenesisState = {
	params?: CosmosSlashingV1beta1Slashing.Params;
	signing_infos?: SigningInfo[];
	missed_blocks?: CosmosSlashingV1beta1Slashing.ValidatorMissedBlockArray[];
};

export type GenesisStateLegacyMissingHeights = {
	params?: CosmosSlashingV1beta1Slashing.Params;
	signing_infos?: SigningInfo[];
	missed_blocks?: CosmosSlashingV1beta1Slashing.ValidatorMissedBlockArrayLegacyMissedHeights[];
};

export type GenesisStateLegacyV43 = {
	params?: CosmosSlashingV1beta1Slashing.Params;
	signing_infos?: SigningInfo[];
	missed_blocks?: ValidatorMissedBlocks[];
};

export type SigningInfo = {
	address?: string;
	validator_signing_info?: CosmosSlashingV1beta1Slashing.ValidatorSigningInfo;
};

export type SigningInfoLegacyMissedHeights = {
	address?: string;
	validator_signing_info?: CosmosSlashingV1beta1Slashing.ValidatorSigningInfoLegacyMissedHeights;
};

export type ValidatorMissedBlocks = {
	address?: string;
	missed_blocks?: MissedBlock[];
};

export type MissedBlock = {
	index?: string;
	missed?: boolean;
};

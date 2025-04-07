/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as SeiprotocolSeichainTokenfactoryAuthorityMetadata from "./authorityMetadata.pb";
import * as SeiprotocolSeichainTokenfactoryParams from "./params.pb";
export type GenesisState = {
	params?: SeiprotocolSeichainTokenfactoryParams.Params;
	factory_denoms?: GenesisDenom[];
};

export type GenesisDenom = {
	denom?: string;
	authority_metadata?: SeiprotocolSeichainTokenfactoryAuthorityMetadata.DenomAuthorityMetadata;
};

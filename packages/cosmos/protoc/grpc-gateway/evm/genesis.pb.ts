/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as SeiprotocolSeichainEvmParams from "./params.pb";
export type AddressAssociation = {
	sei_address?: string;
	eth_address?: string;
};

export type Code = {
	address?: string;
	code?: Uint8Array;
};

export type ContractState = {
	address?: string;
	key?: Uint8Array;
	value?: Uint8Array;
};

export type Nonce = {
	address?: string;
	nonce?: string;
};

export type Serialized = {
	prefix?: Uint8Array;
	key?: Uint8Array;
	value?: Uint8Array;
};

export type GenesisState = {
	params?: SeiprotocolSeichainEvmParams.Params;
	address_associations?: AddressAssociation[];
	codes?: Code[];
	states?: ContractState[];
	nonces?: Nonce[];
	serialized?: Serialized[];
};

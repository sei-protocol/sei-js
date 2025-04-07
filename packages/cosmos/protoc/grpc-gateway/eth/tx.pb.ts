/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */
export type AccessTuple = {
	address?: string;
	storage_keys?: string[];
};

export type AssociateTx = {
	v?: Uint8Array;
	r?: Uint8Array;
	s?: Uint8Array;
	custom_message?: string;
};

export type LegacyTx = {
	nonce?: string;
	gas_price?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: Uint8Array;
	v?: Uint8Array;
	r?: Uint8Array;
	s?: Uint8Array;
};

export type AccessListTx = {
	chain_id?: string;
	nonce?: string;
	gas_price?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: Uint8Array;
	accesses?: AccessTuple[];
	v?: Uint8Array;
	r?: Uint8Array;
	s?: Uint8Array;
};

export type DynamicFeeTx = {
	chain_id?: string;
	nonce?: string;
	gas_tip_cap?: string;
	gas_fee_cap?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: Uint8Array;
	accesses?: AccessTuple[];
	v?: Uint8Array;
	r?: Uint8Array;
	s?: Uint8Array;
};

export type BlobTx = {
	chain_id?: string;
	nonce?: string;
	gas_tip_cap?: string;
	gas_fee_cap?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: Uint8Array;
	accesses?: AccessTuple[];
	blob_fee_cap?: string;
	blob_hashes?: Uint8Array[];
	sidecar?: BlobTxSidecar;
	v?: Uint8Array;
	r?: Uint8Array;
	s?: Uint8Array;
};

export type BlobTxSidecar = {
	blobs?: Uint8Array[];
	commitments?: Uint8Array[];
	proofs?: Uint8Array[];
};

export type ExtensionOptionsEthereumTx = {};

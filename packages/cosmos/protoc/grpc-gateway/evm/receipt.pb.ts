/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */
export type Log = {
	address?: string;
	topics?: string[];
	data?: Uint8Array;
	index?: number;
	synthetic?: boolean;
};

export type Receipt = {
	tx_type?: number;
	cumulative_gas_used?: string;
	contract_address?: string;
	tx_hash_hex?: string;
	gas_used?: string;
	effective_gas_price?: string;
	block_number?: string;
	transaction_index?: number;
	status?: number;
	from?: string;
	to?: string;
	vm_error?: string;
	logs?: Log[];
	logsBloom?: Uint8Array;
};

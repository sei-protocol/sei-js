/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */
export type Params = {
	priority_normalizer?: string;
	base_fee_per_gas?: string;
	minimum_fee_per_gas?: string;
	whitelisted_cw_code_hashes_for_delegate_call?: Uint8Array[];
	deliver_tx_hook_wasm_gas_limit?: string;
	max_dynamic_base_fee_upward_adjustment?: string;
	max_dynamic_base_fee_downward_adjustment?: string;
	target_gas_used_per_block?: string;
	maximum_fee_per_gas?: string;
};

export type ParamsPreV580 = {
	priority_normalizer?: string;
	base_fee_per_gas?: string;
	minimum_fee_per_gas?: string;
	whitelisted_cw_code_hashes_for_delegate_call?: Uint8Array[];
};

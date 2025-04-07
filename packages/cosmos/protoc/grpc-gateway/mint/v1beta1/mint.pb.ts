/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */
export type Minter = {
	start_date?: string;
	end_date?: string;
	denom?: string;
	total_mint_amount?: string;
	remaining_mint_amount?: string;
	last_mint_amount?: string;
	last_mint_date?: string;
	last_mint_height?: string;
};

export type ScheduledTokenRelease = {
	start_date?: string;
	end_date?: string;
	token_release_amount?: string;
};

export type Params = {
	mint_denom?: string;
	token_release_schedule?: ScheduledTokenRelease[];
};

export type Version2Minter = {
	last_mint_amount?: string;
	last_mint_date?: string;
	last_mint_height?: string;
	denom?: string;
};

export type Version2ScheduledTokenRelease = {
	date?: string;
	token_release_amount?: string;
};

export type Version2Params = {
	mint_denom?: string;
	token_release_schedule?: Version2ScheduledTokenRelease[];
};

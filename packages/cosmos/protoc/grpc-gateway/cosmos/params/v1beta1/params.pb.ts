/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */
export type ParameterChangeProposal = {
	title?: string;
	description?: string;
	changes?: ParamChange[];
	is_expedited?: boolean;
};

export type ParamChange = {
	subspace?: string;
	key?: string;
	value?: string;
};

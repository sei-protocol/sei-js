/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosAuthV1beta1Auth from "./auth.pb";
export type QueryAccountsRequest = {
	pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};

export type QueryAccountsResponse = {
	accounts?: GoogleProtobufAny.Any[];
	pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};

export type QueryAccountRequest = {
	address?: string;
};

export type QueryAccountResponse = {
	account?: GoogleProtobufAny.Any;
};

export type QueryParamsRequest = {};

export type QueryParamsResponse = {
	params?: CosmosAuthV1beta1Auth.Params;
};

export type QueryNextAccountNumberRequest = {};

export type QueryNextAccountNumberResponse = {
	count?: string;
};

export class Query {
	static Accounts(req: QueryAccountsRequest, initReq?: fm.InitReq): Promise<QueryAccountsResponse> {
		return fm.fetchReq<QueryAccountsRequest, QueryAccountsResponse>(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static Account(req: QueryAccountRequest, initReq?: fm.InitReq): Promise<QueryAccountResponse> {
		return fm.fetchReq<QueryAccountRequest, QueryAccountResponse>(
			`/cosmos/auth/v1beta1/accounts/${req["address"]}?${fm.renderURLSearchParams(req, ["address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static NextAccountNumber(req: QueryNextAccountNumberRequest, initReq?: fm.InitReq): Promise<QueryNextAccountNumberResponse> {
		return fm.fetchReq<QueryNextAccountNumberRequest, QueryNextAccountNumberResponse>(
			`/cosmos/auth/v1beta1/nextaccountnumber?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
}

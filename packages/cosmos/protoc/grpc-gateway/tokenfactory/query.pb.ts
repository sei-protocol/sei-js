/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as CosmosBankV1beta1Bank from "../cosmos/bank/v1beta1/bank.pb";
import * as fm from "../fetch.pb";
import * as SeiprotocolSeichainTokenfactoryAuthorityMetadata from "./authorityMetadata.pb";
import * as SeiprotocolSeichainTokenfactoryParams from "./params.pb";
export type QueryParamsRequest = {};

export type QueryParamsResponse = {
	params?: SeiprotocolSeichainTokenfactoryParams.Params;
};

export type QueryDenomAuthorityMetadataRequest = {
	denom?: string;
};

export type QueryDenomAuthorityMetadataResponse = {
	authority_metadata?: SeiprotocolSeichainTokenfactoryAuthorityMetadata.DenomAuthorityMetadata;
};

export type QueryDenomsFromCreatorRequest = {
	creator?: string;
};

export type QueryDenomsFromCreatorResponse = {
	denoms?: string[];
};

export type QueryDenomMetadataRequest = {
	denom?: string;
};

export type QueryDenomMetadataResponse = {
	metadata?: CosmosBankV1beta1Bank.Metadata;
};

export type QueryDenomAllowListRequest = {
	denom?: string;
};

export type QueryDenomAllowListResponse = {
	allow_list?: CosmosBankV1beta1Bank.AllowList;
};

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/sei-protocol/seichain/tokenfactory/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static DenomAuthorityMetadata(req: QueryDenomAuthorityMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomAuthorityMetadataResponse> {
		return fm.fetchReq<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms/${req["denom"]}/authority_metadata?${fm.renderURLSearchParams(req, ["denom"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DenomMetadata(req: QueryDenomMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomMetadataResponse> {
		return fm.fetchReq<QueryDenomMetadataRequest, QueryDenomMetadataResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms/metadata?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DenomsFromCreator(req: QueryDenomsFromCreatorRequest, initReq?: fm.InitReq): Promise<QueryDenomsFromCreatorResponse> {
		return fm.fetchReq<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms_from_creator/${req["creator"]}?${fm.renderURLSearchParams(req, ["creator"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DenomAllowList(req: QueryDenomAllowListRequest, initReq?: fm.InitReq): Promise<QueryDenomAllowListResponse> {
		return fm.fetchReq<QueryDenomAllowListRequest, QueryDenomAllowListResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms/allow_list?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
}

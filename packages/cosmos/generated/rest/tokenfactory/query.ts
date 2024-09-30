import * as fm from "../fetch";

import type {
	QueryDenomAllowListRequest,
	QueryDenomAllowListResponse,
	QueryDenomAuthorityMetadataRequest,
	QueryDenomAuthorityMetadataResponse,
	QueryDenomMetadataRequest,
	QueryDenomMetadataResponse,
	QueryDenomsFromCreatorRequest,
	QueryDenomsFromCreatorResponse,
	QueryParamsRequest,
	QueryParamsResponse,
} from "../../types/tokenfactory/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/sei-protocol/seichain/tokenfactory/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static DenomAuthorityMetadata(req: QueryDenomAuthorityMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomAuthorityMetadataResponse> {
		return fm.fetchReq<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms/${req["denom"]}/authority_metadata?${fm.renderURLSearchParams(req, ["denom"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static DenomMetadata(req: QueryDenomMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomMetadataResponse> {
		return fm.fetchReq<QueryDenomMetadataRequest, QueryDenomMetadataResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms/metadata?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static DenomsFromCreator(req: QueryDenomsFromCreatorRequest, initReq?: fm.InitReq): Promise<QueryDenomsFromCreatorResponse> {
		return fm.fetchReq<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms_from_creator/${req["creator"]}?${fm.renderURLSearchParams(req, ["creator"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static DenomAllowList(req: QueryDenomAllowListRequest, initReq?: fm.InitReq): Promise<QueryDenomAllowListResponse> {
		return fm.fetchReq<QueryDenomAllowListRequest, QueryDenomAllowListResponse>(
			`/sei-protocol/seichain/tokenfactory/denoms/allow_list?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" },
		);
	}
}

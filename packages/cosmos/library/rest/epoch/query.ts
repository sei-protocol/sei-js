import * as fm from "../fetch";

import type { QueryEpochRequest, QueryEpochResponse, QueryParamsRequest, QueryParamsResponse } from "../../types/epoch/query.ts";

export class Query {
	static Epoch(req: QueryEpochRequest, initReq?: fm.InitReq): Promise<QueryEpochResponse> {
		return fm.fetchReq<QueryEpochRequest, QueryEpochResponse>(`/sei-protocol/seichain/epoch/epoch?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/sei-protocol/seichain/epoch/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}

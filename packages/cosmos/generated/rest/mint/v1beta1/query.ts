import * as fm from "../../fetch";

import type { QueryMinterRequest, QueryMinterResponse, QueryParamsRequest, QueryParamsResponse } from "../../../types/mint/v1beta1/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/seichain/mint/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static Minter(req: QueryMinterRequest, initReq?: fm.InitReq): Promise<QueryMinterResponse> {
		return fm.fetchReq<QueryMinterRequest, QueryMinterResponse>(`/seichain/mint/v1beta1/minter?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
}

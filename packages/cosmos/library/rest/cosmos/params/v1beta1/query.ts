import * as fm from "../../../fetch";

import type { QueryParamsRequest, QueryParamsResponse } from "../../../../types/cosmos/params/v1beta1/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/params/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}

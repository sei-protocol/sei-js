import * as fm from "../../../fetch";

import type {
	QueryAnnualProvisionsRequest,
	QueryAnnualProvisionsResponse,
	QueryInflationRequest,
	QueryInflationResponse,
	QueryParamsRequest,
	QueryParamsResponse,
} from "../../../../types/cosmos/mint/v1beta1/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/mint/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static Inflation(req: QueryInflationRequest, initReq?: fm.InitReq): Promise<QueryInflationResponse> {
		return fm.fetchReq<QueryInflationRequest, QueryInflationResponse>(`/cosmos/mint/v1beta1/inflation?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static AnnualProvisions(req: QueryAnnualProvisionsRequest, initReq?: fm.InitReq): Promise<QueryAnnualProvisionsResponse> {
		return fm.fetchReq<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>(
			`/cosmos/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" },
		);
	}
}

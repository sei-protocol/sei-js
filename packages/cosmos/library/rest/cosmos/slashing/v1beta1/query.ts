import * as fm from "../../../fetch";

import type {
	QueryParamsRequest,
	QueryParamsResponse,
	QuerySigningInfoRequest,
	QuerySigningInfoResponse,
	QuerySigningInfosRequest,
	QuerySigningInfosResponse
} from "../../../../types/cosmos/slashing/v1beta1/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/slashing/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static SigningInfo(req: QuerySigningInfoRequest, initReq?: fm.InitReq): Promise<QuerySigningInfoResponse> {
		return fm.fetchReq<QuerySigningInfoRequest, QuerySigningInfoResponse>(
			`/cosmos/slashing/v1beta1/signing_infos/${req["cons_address"]}?${fm.renderURLSearchParams(req, ["cons_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static SigningInfos(req: QuerySigningInfosRequest, initReq?: fm.InitReq): Promise<QuerySigningInfosResponse> {
		return fm.fetchReq<QuerySigningInfosRequest, QuerySigningInfosResponse>(`/cosmos/slashing/v1beta1/signing_infos?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}

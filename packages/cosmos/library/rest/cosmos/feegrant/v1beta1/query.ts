import * as fm from "../../../fetch";

import type {
	QueryAllowanceRequest,
	QueryAllowanceResponse,
	QueryAllowancesByGranterRequest,
	QueryAllowancesByGranterResponse,
	QueryAllowancesRequest,
	QueryAllowancesResponse,
} from "../../../../types/cosmos/feegrant/v1beta1/query.ts";

export class Query {
	static Allowance(req: QueryAllowanceRequest, initReq?: fm.InitReq): Promise<QueryAllowanceResponse> {
		return fm.fetchReq<QueryAllowanceRequest, QueryAllowanceResponse>(
			`/cosmos/feegrant/v1beta1/allowance/${req["granter"]}/${req["grantee"]}?${fm.renderURLSearchParams(req, ["granter", "grantee"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Allowances(req: QueryAllowancesRequest, initReq?: fm.InitReq): Promise<QueryAllowancesResponse> {
		return fm.fetchReq<QueryAllowancesRequest, QueryAllowancesResponse>(
			`/cosmos/feegrant/v1beta1/allowances/${req["grantee"]}?${fm.renderURLSearchParams(req, ["grantee"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static AllowancesByGranter(req: QueryAllowancesByGranterRequest, initReq?: fm.InitReq): Promise<QueryAllowancesByGranterResponse> {
		return fm.fetchReq<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>(
			`/cosmos/feegrant/v1beta1/issued/${req["granter"]}?${fm.renderURLSearchParams(req, ["granter"])}`,
			{ ...initReq, method: "GET" },
		);
	}
}

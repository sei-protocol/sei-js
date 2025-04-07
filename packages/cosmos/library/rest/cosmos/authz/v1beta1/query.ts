import * as fm from "../../../fetch";

import type {
	QueryGranteeGrantsRequest,
	QueryGranteeGrantsResponse,
	QueryGranterGrantsRequest,
	QueryGranterGrantsResponse,
	QueryGrantsRequest,
	QueryGrantsResponse
} from "../../../../types/cosmos/authz/v1beta1/query.ts";

export class Query {
	static Grants(req: QueryGrantsRequest, initReq?: fm.InitReq): Promise<QueryGrantsResponse> {
		return fm.fetchReq<QueryGrantsRequest, QueryGrantsResponse>(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static GranterGrants(req: QueryGranterGrantsRequest, initReq?: fm.InitReq): Promise<QueryGranterGrantsResponse> {
		return fm.fetchReq<QueryGranterGrantsRequest, QueryGranterGrantsResponse>(
			`/cosmos/authz/v1beta1/grants/granter/${req["granter"]}?${fm.renderURLSearchParams(req, ["granter"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static GranteeGrants(req: QueryGranteeGrantsRequest, initReq?: fm.InitReq): Promise<QueryGranteeGrantsResponse> {
		return fm.fetchReq<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>(
			`/cosmos/authz/v1beta1/grants/grantee/${req["grantee"]}?${fm.renderURLSearchParams(req, ["grantee"])}`,
			{ ...initReq, method: "GET" }
		);
	}
}

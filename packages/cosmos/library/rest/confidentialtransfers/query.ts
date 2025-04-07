import * as fm from "../fetch";

import type { GetAllCtAccountsRequest, GetAllCtAccountsResponse, GetCtAccountRequest, GetCtAccountResponse } from "../../types/confidentialtransfers/query.ts";

export class Query {
	static GetCtAccount(req: GetCtAccountRequest, initReq?: fm.InitReq): Promise<GetCtAccountResponse> {
		return fm.fetchReq<GetCtAccountRequest, GetCtAccountResponse>(
			`/seichain/confidentialtransfers/account/${req["address"]}/denom/${req["denom"]}?${fm.renderURLSearchParams(req, ["address", "denom"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static GetAllCtAccounts(req: GetAllCtAccountsRequest, initReq?: fm.InitReq): Promise<GetAllCtAccountsResponse> {
		return fm.fetchReq<GetAllCtAccountsRequest, GetAllCtAccountsResponse>(
			`/seichain/confidentialtransfers/accounts/${req["address"]}?${fm.renderURLSearchParams(req, ["address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
}

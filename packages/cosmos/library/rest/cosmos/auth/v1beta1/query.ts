import * as fm from "../../../fetch";

import type {
	QueryAccountRequest,
	QueryAccountResponse,
	QueryAccountsRequest,
	QueryAccountsResponse,
	QueryNextAccountNumberRequest,
	QueryNextAccountNumberResponse,
	QueryParamsRequest,
	QueryParamsResponse,
} from "../../../../types/cosmos/auth/v1beta1/query.ts";

export class Query {
	static Accounts(req: QueryAccountsRequest, initReq?: fm.InitReq): Promise<QueryAccountsResponse> {
		return fm.fetchReq<QueryAccountsRequest, QueryAccountsResponse>(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static Account(req: QueryAccountRequest, initReq?: fm.InitReq): Promise<QueryAccountResponse> {
		return fm.fetchReq<QueryAccountRequest, QueryAccountResponse>(
			`/cosmos/auth/v1beta1/accounts/${req["address"]}?${fm.renderURLSearchParams(req, ["address"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static NextAccountNumber(req: QueryNextAccountNumberRequest, initReq?: fm.InitReq): Promise<QueryNextAccountNumberResponse> {
		return fm.fetchReq<QueryNextAccountNumberRequest, QueryNextAccountNumberResponse>(
			`/cosmos/auth/v1beta1/nextaccountnumber?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" },
		);
	}
}

import * as fm from "../../../fetch";

import type {
	QueryAllBalancesRequest,
	QueryAllBalancesResponse,
	QueryBalanceRequest,
	QueryBalanceResponse,
	QueryDenomMetadataRequest,
	QueryDenomMetadataResponse,
	QueryDenomsMetadataRequest,
	QueryDenomsMetadataResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QuerySpendableBalancesRequest,
	QuerySpendableBalancesResponse,
	QuerySupplyOfRequest,
	QuerySupplyOfResponse,
	QueryTotalSupplyRequest,
	QueryTotalSupplyResponse
} from "../../../../types/cosmos/bank/v1beta1/query.ts";

export class Query {
	static Balance(req: QueryBalanceRequest, initReq?: fm.InitReq): Promise<QueryBalanceResponse> {
		return fm.fetchReq<QueryBalanceRequest, QueryBalanceResponse>(
			`/cosmos/bank/v1beta1/balances/${req["address"]}/by_denom?${fm.renderURLSearchParams(req, ["address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static AllBalances(req: QueryAllBalancesRequest, initReq?: fm.InitReq): Promise<QueryAllBalancesResponse> {
		return fm.fetchReq<QueryAllBalancesRequest, QueryAllBalancesResponse>(
			`/cosmos/bank/v1beta1/balances/${req["address"]}?${fm.renderURLSearchParams(req, ["address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static SpendableBalances(req: QuerySpendableBalancesRequest, initReq?: fm.InitReq): Promise<QuerySpendableBalancesResponse> {
		return fm.fetchReq<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>(
			`/cosmos/bank/v1beta1/spendable_balances/${req["address"]}?${fm.renderURLSearchParams(req, ["address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static TotalSupply(req: QueryTotalSupplyRequest, initReq?: fm.InitReq): Promise<QueryTotalSupplyResponse> {
		return fm.fetchReq<QueryTotalSupplyRequest, QueryTotalSupplyResponse>(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static SupplyOf(req: QuerySupplyOfRequest, initReq?: fm.InitReq): Promise<QuerySupplyOfResponse> {
		return fm.fetchReq<QuerySupplyOfRequest, QuerySupplyOfResponse>(`/cosmos/bank/v1beta1/supply/${req["denom"]}?${fm.renderURLSearchParams(req, ["denom"])}`, {
			...initReq,
			method: "GET"
		});
	}
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static DenomMetadata(req: QueryDenomMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomMetadataResponse> {
		return fm.fetchReq<QueryDenomMetadataRequest, QueryDenomMetadataResponse>(
			`/cosmos/bank/v1beta1/denoms_metadata/${req["denom"]}?${fm.renderURLSearchParams(req, ["denom"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DenomsMetadata(req: QueryDenomsMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomsMetadataResponse> {
		return fm.fetchReq<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>(`/cosmos/bank/v1beta1/denoms_metadata?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}

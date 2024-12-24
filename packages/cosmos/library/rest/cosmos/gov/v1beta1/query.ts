import * as fm from "../../../fetch";

import type {
	QueryDepositRequest,
	QueryDepositResponse,
	QueryDepositsRequest,
	QueryDepositsResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryProposalRequest,
	QueryProposalResponse,
	QueryProposalsRequest,
	QueryProposalsResponse,
	QueryTallyResultRequest,
	QueryTallyResultResponse,
	QueryVoteRequest,
	QueryVoteResponse,
	QueryVotesRequest,
	QueryVotesResponse,
} from "../../../../types/cosmos/gov/v1beta1/query.ts";

export class Query {
	static Proposal(req: QueryProposalRequest, initReq?: fm.InitReq): Promise<QueryProposalResponse> {
		return fm.fetchReq<QueryProposalRequest, QueryProposalResponse>(
			`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}?${fm.renderURLSearchParams(req, ["proposal_id"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Proposals(req: QueryProposalsRequest, initReq?: fm.InitReq): Promise<QueryProposalsResponse> {
		return fm.fetchReq<QueryProposalsRequest, QueryProposalsResponse>(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET",
		});
	}
	static Vote(req: QueryVoteRequest, initReq?: fm.InitReq): Promise<QueryVoteResponse> {
		return fm.fetchReq<QueryVoteRequest, QueryVoteResponse>(
			`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/votes/${req["voter"]}?${fm.renderURLSearchParams(req, ["proposal_id", "voter"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Votes(req: QueryVotesRequest, initReq?: fm.InitReq): Promise<QueryVotesResponse> {
		return fm.fetchReq<QueryVotesRequest, QueryVotesResponse>(
			`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/votes?${fm.renderURLSearchParams(req, ["proposal_id"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(
			`/cosmos/gov/v1beta1/params/${req["params_type"]}?${fm.renderURLSearchParams(req, ["params_type"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Deposit(req: QueryDepositRequest, initReq?: fm.InitReq): Promise<QueryDepositResponse> {
		return fm.fetchReq<QueryDepositRequest, QueryDepositResponse>(
			`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/deposits/${req["depositor"]}?${fm.renderURLSearchParams(req, ["proposal_id", "depositor"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static Deposits(req: QueryDepositsRequest, initReq?: fm.InitReq): Promise<QueryDepositsResponse> {
		return fm.fetchReq<QueryDepositsRequest, QueryDepositsResponse>(
			`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/deposits?${fm.renderURLSearchParams(req, ["proposal_id"])}`,
			{ ...initReq, method: "GET" },
		);
	}
	static TallyResult(req: QueryTallyResultRequest, initReq?: fm.InitReq): Promise<QueryTallyResultResponse> {
		return fm.fetchReq<QueryTallyResultRequest, QueryTallyResultResponse>(
			`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/tally?${fm.renderURLSearchParams(req, ["proposal_id"])}`,
			{ ...initReq, method: "GET" },
		);
	}
}

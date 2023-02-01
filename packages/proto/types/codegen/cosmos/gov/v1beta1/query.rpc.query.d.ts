import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
};

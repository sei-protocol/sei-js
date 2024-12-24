import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Deposit, DepositParams, Proposal, TallyParams, TallyResult, Vote, VotingParams, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";

import type {
	QueryDepositRequest as QueryDepositRequest_type,
	QueryDepositResponse as QueryDepositResponse_type,
	QueryDepositsRequest as QueryDepositsRequest_type,
	QueryDepositsResponse as QueryDepositsResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type,
	QueryProposalRequest as QueryProposalRequest_type,
	QueryProposalResponse as QueryProposalResponse_type,
	QueryProposalsRequest as QueryProposalsRequest_type,
	QueryProposalsResponse as QueryProposalsResponse_type,
	QueryTallyResultRequest as QueryTallyResultRequest_type,
	QueryTallyResultResponse as QueryTallyResultResponse_type,
	QueryVoteRequest as QueryVoteRequest_type,
	QueryVoteResponse as QueryVoteResponse_type,
	QueryVotesRequest as QueryVotesRequest_type,
	QueryVotesResponse as QueryVotesResponse_type,
} from "../../../../types/cosmos/gov/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryProposalRequest extends QueryProposalRequest_type {}
export interface QueryProposalResponse extends QueryProposalResponse_type {}
export interface QueryProposalsRequest extends QueryProposalsRequest_type {}
export interface QueryProposalsResponse extends QueryProposalsResponse_type {}
export interface QueryVoteRequest extends QueryVoteRequest_type {}
export interface QueryVoteResponse extends QueryVoteResponse_type {}
export interface QueryVotesRequest extends QueryVotesRequest_type {}
export interface QueryVotesResponse extends QueryVotesResponse_type {}
export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QueryDepositRequest extends QueryDepositRequest_type {}
export interface QueryDepositResponse extends QueryDepositResponse_type {}
export interface QueryDepositsRequest extends QueryDepositsRequest_type {}
export interface QueryDepositsResponse extends QueryDepositsResponse_type {}
export interface QueryTallyResultRequest extends QueryTallyResultRequest_type {}
export interface QueryTallyResultResponse extends QueryTallyResultResponse_type {}

export const QueryProposalRequest: MessageFns<QueryProposalRequest, "cosmos.gov.v1beta1.QueryProposalRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryProposalRequest" as const,

	encode(message: QueryProposalRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryProposalRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryProposalRequest {
		return { proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0 };
	},

	toJSON(message: QueryProposalRequest): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(base?: I): QueryProposalRequest {
		return QueryProposalRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(object: I): QueryProposalRequest {
		const message = createBaseQueryProposalRequest();
		message.proposal_id = object.proposal_id ?? 0;
		return message;
	},
};

export const QueryProposalResponse: MessageFns<QueryProposalResponse, "cosmos.gov.v1beta1.QueryProposalResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryProposalResponse" as const,

	encode(message: QueryProposalResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal !== undefined) {
			Proposal.encode(message.proposal, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryProposalResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.proposal = Proposal.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryProposalResponse {
		return { proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined };
	},

	toJSON(message: QueryProposalResponse): unknown {
		const obj: any = {};
		if (message.proposal !== undefined) {
			obj.proposal = Proposal.toJSON(message.proposal);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(base?: I): QueryProposalResponse {
		return QueryProposalResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(object: I): QueryProposalResponse {
		const message = createBaseQueryProposalResponse();
		message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
		return message;
	},
};

export const QueryProposalsRequest: MessageFns<QueryProposalsRequest, "cosmos.gov.v1beta1.QueryProposalsRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryProposalsRequest" as const,

	encode(message: QueryProposalsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_status !== 0) {
			writer.uint32(8).int32(message.proposal_status);
		}
		if (message.voter !== "") {
			writer.uint32(18).string(message.voter);
		}
		if (message.depositor !== "") {
			writer.uint32(26).string(message.depositor);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryProposalsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_status = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.voter = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.depositor = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryProposalsRequest {
		return {
			proposal_status: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : 0,
			voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
			depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryProposalsRequest): unknown {
		const obj: any = {};
		if (message.proposal_status !== 0) {
			obj.proposal_status = proposalStatusToJSON(message.proposal_status);
		}
		if (message.voter !== "") {
			obj.voter = message.voter;
		}
		if (message.depositor !== "") {
			obj.depositor = message.depositor;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryProposalsRequest>, I>>(base?: I): QueryProposalsRequest {
		return QueryProposalsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryProposalsRequest>, I>>(object: I): QueryProposalsRequest {
		const message = createBaseQueryProposalsRequest();
		message.proposal_status = object.proposal_status ?? 0;
		message.voter = object.voter ?? "";
		message.depositor = object.depositor ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryProposalsResponse: MessageFns<QueryProposalsResponse, "cosmos.gov.v1beta1.QueryProposalsResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryProposalsResponse" as const,

	encode(message: QueryProposalsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.proposals) {
			Proposal.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryProposalsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.proposals.push(Proposal.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryProposalsResponse {
		return {
			proposals: globalThis.Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryProposalsResponse): unknown {
		const obj: any = {};
		if (message.proposals?.length) {
			obj.proposals = message.proposals.map((e) => Proposal.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(base?: I): QueryProposalsResponse {
		return QueryProposalsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(object: I): QueryProposalsResponse {
		const message = createBaseQueryProposalsResponse();
		message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryVoteRequest: MessageFns<QueryVoteRequest, "cosmos.gov.v1beta1.QueryVoteRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryVoteRequest" as const,

	encode(message: QueryVoteRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.voter !== "") {
			writer.uint32(18).string(message.voter);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVoteRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.voter = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVoteRequest {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
		};
	},

	toJSON(message: QueryVoteRequest): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.voter !== "") {
			obj.voter = message.voter;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVoteRequest>, I>>(base?: I): QueryVoteRequest {
		return QueryVoteRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVoteRequest>, I>>(object: I): QueryVoteRequest {
		const message = createBaseQueryVoteRequest();
		message.proposal_id = object.proposal_id ?? 0;
		message.voter = object.voter ?? "";
		return message;
	},
};

export const QueryVoteResponse: MessageFns<QueryVoteResponse, "cosmos.gov.v1beta1.QueryVoteResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryVoteResponse" as const,

	encode(message: QueryVoteResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.vote !== undefined) {
			Vote.encode(message.vote, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVoteResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.vote = Vote.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVoteResponse {
		return { vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined };
	},

	toJSON(message: QueryVoteResponse): unknown {
		const obj: any = {};
		if (message.vote !== undefined) {
			obj.vote = Vote.toJSON(message.vote);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVoteResponse>, I>>(base?: I): QueryVoteResponse {
		return QueryVoteResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVoteResponse>, I>>(object: I): QueryVoteResponse {
		const message = createBaseQueryVoteResponse();
		message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
		return message;
	},
};

export const QueryVotesRequest: MessageFns<QueryVotesRequest, "cosmos.gov.v1beta1.QueryVotesRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryVotesRequest" as const,

	encode(message: QueryVotesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVotesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVotesRequest {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryVotesRequest): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVotesRequest>, I>>(base?: I): QueryVotesRequest {
		return QueryVotesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVotesRequest>, I>>(object: I): QueryVotesRequest {
		const message = createBaseQueryVotesRequest();
		message.proposal_id = object.proposal_id ?? 0;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryVotesResponse: MessageFns<QueryVotesResponse, "cosmos.gov.v1beta1.QueryVotesResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryVotesResponse" as const,

	encode(message: QueryVotesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.votes) {
			Vote.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVotesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.votes.push(Vote.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVotesResponse {
		return {
			votes: globalThis.Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryVotesResponse): unknown {
		const obj: any = {};
		if (message.votes?.length) {
			obj.votes = message.votes.map((e) => Vote.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVotesResponse>, I>>(base?: I): QueryVotesResponse {
		return QueryVotesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVotesResponse>, I>>(object: I): QueryVotesResponse {
		const message = createBaseQueryVotesResponse();
		message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.gov.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryParamsRequest" as const,

	encode(message: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params_type !== "") {
			writer.uint32(10).string(message.params_type);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params_type = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsRequest {
		return { params_type: isSet(object.params_type) ? globalThis.String(object.params_type) : "" };
	},

	toJSON(message: QueryParamsRequest): unknown {
		const obj: any = {};
		if (message.params_type !== "") {
			obj.params_type = message.params_type;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		message.params_type = object.params_type ?? "";
		return message;
	},
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.gov.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.voting_params !== undefined) {
			VotingParams.encode(message.voting_params, writer.uint32(10).fork()).join();
		}
		if (message.deposit_params !== undefined) {
			DepositParams.encode(message.deposit_params, writer.uint32(18).fork()).join();
		}
		if (message.tally_params !== undefined) {
			TallyParams.encode(message.tally_params, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.voting_params = VotingParams.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.deposit_params = DepositParams.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.tally_params = TallyParams.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		return {
			voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
			deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
			tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined,
		};
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.voting_params !== undefined) {
			obj.voting_params = VotingParams.toJSON(message.voting_params);
		}
		if (message.deposit_params !== undefined) {
			obj.deposit_params = DepositParams.toJSON(message.deposit_params);
		}
		if (message.tally_params !== undefined) {
			obj.tally_params = TallyParams.toJSON(message.tally_params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
		message.deposit_params =
			object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
		message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
		return message;
	},
};

export const QueryDepositRequest: MessageFns<QueryDepositRequest, "cosmos.gov.v1beta1.QueryDepositRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryDepositRequest" as const,

	encode(message: QueryDepositRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.depositor !== "") {
			writer.uint32(18).string(message.depositor);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDepositRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.depositor = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDepositRequest {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
		};
	},

	toJSON(message: QueryDepositRequest): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.depositor !== "") {
			obj.depositor = message.depositor;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDepositRequest>, I>>(base?: I): QueryDepositRequest {
		return QueryDepositRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDepositRequest>, I>>(object: I): QueryDepositRequest {
		const message = createBaseQueryDepositRequest();
		message.proposal_id = object.proposal_id ?? 0;
		message.depositor = object.depositor ?? "";
		return message;
	},
};

export const QueryDepositResponse: MessageFns<QueryDepositResponse, "cosmos.gov.v1beta1.QueryDepositResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryDepositResponse" as const,

	encode(message: QueryDepositResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.deposit !== undefined) {
			Deposit.encode(message.deposit, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDepositResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.deposit = Deposit.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDepositResponse {
		return { deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined };
	},

	toJSON(message: QueryDepositResponse): unknown {
		const obj: any = {};
		if (message.deposit !== undefined) {
			obj.deposit = Deposit.toJSON(message.deposit);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDepositResponse>, I>>(base?: I): QueryDepositResponse {
		return QueryDepositResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDepositResponse>, I>>(object: I): QueryDepositResponse {
		const message = createBaseQueryDepositResponse();
		message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
		return message;
	},
};

export const QueryDepositsRequest: MessageFns<QueryDepositsRequest, "cosmos.gov.v1beta1.QueryDepositsRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryDepositsRequest" as const,

	encode(message: QueryDepositsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDepositsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDepositsRequest {
		return {
			proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0,
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryDepositsRequest): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDepositsRequest>, I>>(base?: I): QueryDepositsRequest {
		return QueryDepositsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDepositsRequest>, I>>(object: I): QueryDepositsRequest {
		const message = createBaseQueryDepositsRequest();
		message.proposal_id = object.proposal_id ?? 0;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryDepositsResponse: MessageFns<QueryDepositsResponse, "cosmos.gov.v1beta1.QueryDepositsResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryDepositsResponse" as const,

	encode(message: QueryDepositsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.deposits) {
			Deposit.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDepositsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.deposits.push(Deposit.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDepositsResponse {
		return {
			deposits: globalThis.Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryDepositsResponse): unknown {
		const obj: any = {};
		if (message.deposits?.length) {
			obj.deposits = message.deposits.map((e) => Deposit.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDepositsResponse>, I>>(base?: I): QueryDepositsResponse {
		return QueryDepositsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDepositsResponse>, I>>(object: I): QueryDepositsResponse {
		const message = createBaseQueryDepositsResponse();
		message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryTallyResultRequest: MessageFns<QueryTallyResultRequest, "cosmos.gov.v1beta1.QueryTallyResultRequest"> = {
	$type: "cosmos.gov.v1beta1.QueryTallyResultRequest" as const,

	encode(message: QueryTallyResultRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proposal_id !== 0) {
			writer.uint32(8).uint64(message.proposal_id);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryTallyResultRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.proposal_id = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryTallyResultRequest {
		return { proposal_id: isSet(object.proposal_id) ? globalThis.Number(object.proposal_id) : 0 };
	},

	toJSON(message: QueryTallyResultRequest): unknown {
		const obj: any = {};
		if (message.proposal_id !== 0) {
			obj.proposal_id = Math.round(message.proposal_id);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryTallyResultRequest>, I>>(base?: I): QueryTallyResultRequest {
		return QueryTallyResultRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryTallyResultRequest>, I>>(object: I): QueryTallyResultRequest {
		const message = createBaseQueryTallyResultRequest();
		message.proposal_id = object.proposal_id ?? 0;
		return message;
	},
};

export const QueryTallyResultResponse: MessageFns<QueryTallyResultResponse, "cosmos.gov.v1beta1.QueryTallyResultResponse"> = {
	$type: "cosmos.gov.v1beta1.QueryTallyResultResponse" as const,

	encode(message: QueryTallyResultResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tally !== undefined) {
			TallyResult.encode(message.tally, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryTallyResultResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tally = TallyResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryTallyResultResponse {
		return { tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined };
	},

	toJSON(message: QueryTallyResultResponse): unknown {
		const obj: any = {};
		if (message.tally !== undefined) {
			obj.tally = TallyResult.toJSON(message.tally);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryTallyResultResponse>, I>>(base?: I): QueryTallyResultResponse {
		return QueryTallyResultResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryTallyResultResponse>, I>>(object: I): QueryTallyResultResponse {
		const message = createBaseQueryTallyResultResponse();
		message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
		return message;
	},
};

function createBaseQueryProposalRequest(): QueryProposalRequest {
	return { proposal_id: 0 };
}

function createBaseQueryProposalResponse(): QueryProposalResponse {
	return { proposal: undefined };
}

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
	return { proposal_status: 0, voter: "", depositor: "", pagination: undefined };
}

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
	return { proposals: [], pagination: undefined };
}

function createBaseQueryVoteRequest(): QueryVoteRequest {
	return { proposal_id: 0, voter: "" };
}

function createBaseQueryVoteResponse(): QueryVoteResponse {
	return { vote: undefined };
}

function createBaseQueryVotesRequest(): QueryVotesRequest {
	return { proposal_id: 0, pagination: undefined };
}

function createBaseQueryVotesResponse(): QueryVotesResponse {
	return { votes: [], pagination: undefined };
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return { params_type: "" };
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { voting_params: undefined, deposit_params: undefined, tally_params: undefined };
}

function createBaseQueryDepositRequest(): QueryDepositRequest {
	return { proposal_id: 0, depositor: "" };
}

function createBaseQueryDepositResponse(): QueryDepositResponse {
	return { deposit: undefined };
}

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
	return { proposal_id: 0, pagination: undefined };
}

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
	return { deposits: [], pagination: undefined };
}

function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
	return { proposal_id: 0 };
}

function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
	return { tally: undefined };
}

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.gov.v1beta1.QueryProposalRequest", QueryProposalRequest as never],
	["/cosmos.gov.v1beta1.QueryProposalResponse", QueryProposalResponse as never],
	["/cosmos.gov.v1beta1.QueryProposalsRequest", QueryProposalsRequest as never],
	["/cosmos.gov.v1beta1.QueryProposalsResponse", QueryProposalsResponse as never],
	["/cosmos.gov.v1beta1.QueryVoteRequest", QueryVoteRequest as never],
	["/cosmos.gov.v1beta1.QueryVoteResponse", QueryVoteResponse as never],
	["/cosmos.gov.v1beta1.QueryVotesRequest", QueryVotesRequest as never],
	["/cosmos.gov.v1beta1.QueryVotesResponse", QueryVotesResponse as never],
	["/cosmos.gov.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.gov.v1beta1.QueryParamsResponse", QueryParamsResponse as never],
	["/cosmos.gov.v1beta1.QueryDepositRequest", QueryDepositRequest as never],
	["/cosmos.gov.v1beta1.QueryDepositResponse", QueryDepositResponse as never],
	["/cosmos.gov.v1beta1.QueryDepositsRequest", QueryDepositsRequest as never],
	["/cosmos.gov.v1beta1.QueryDepositsResponse", QueryDepositsResponse as never],
];
export const aminoConverters = {
	"/cosmos.gov.v1beta1.QueryProposalRequest": {
		aminoType: "cosmos-sdk/QueryProposalRequest",
		toAmino: (message: QueryProposalRequest) => ({ ...message }),
		fromAmino: (object: QueryProposalRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryProposalResponse": {
		aminoType: "cosmos-sdk/QueryProposalResponse",
		toAmino: (message: QueryProposalResponse) => ({ ...message }),
		fromAmino: (object: QueryProposalResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryProposalsRequest": {
		aminoType: "cosmos-sdk/QueryProposalsRequest",
		toAmino: (message: QueryProposalsRequest) => ({ ...message }),
		fromAmino: (object: QueryProposalsRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryProposalsResponse": {
		aminoType: "cosmos-sdk/QueryProposalsResponse",
		toAmino: (message: QueryProposalsResponse) => ({ ...message }),
		fromAmino: (object: QueryProposalsResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryVoteRequest": {
		aminoType: "cosmos-sdk/QueryVoteRequest",
		toAmino: (message: QueryVoteRequest) => ({ ...message }),
		fromAmino: (object: QueryVoteRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryVoteResponse": {
		aminoType: "cosmos-sdk/QueryVoteResponse",
		toAmino: (message: QueryVoteResponse) => ({ ...message }),
		fromAmino: (object: QueryVoteResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryVotesRequest": {
		aminoType: "cosmos-sdk/QueryVotesRequest",
		toAmino: (message: QueryVotesRequest) => ({ ...message }),
		fromAmino: (object: QueryVotesRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryVotesResponse": {
		aminoType: "cosmos-sdk/QueryVotesResponse",
		toAmino: (message: QueryVotesResponse) => ({ ...message }),
		fromAmino: (object: QueryVotesResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryDepositRequest": {
		aminoType: "cosmos-sdk/QueryDepositRequest",
		toAmino: (message: QueryDepositRequest) => ({ ...message }),
		fromAmino: (object: QueryDepositRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryDepositResponse": {
		aminoType: "cosmos-sdk/QueryDepositResponse",
		toAmino: (message: QueryDepositResponse) => ({ ...message }),
		fromAmino: (object: QueryDepositResponse) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryDepositsRequest": {
		aminoType: "cosmos-sdk/QueryDepositsRequest",
		toAmino: (message: QueryDepositsRequest) => ({ ...message }),
		fromAmino: (object: QueryDepositsRequest) => ({ ...object }),
	},

	"/cosmos.gov.v1beta1.QueryDepositsResponse": {
		aminoType: "cosmos-sdk/QueryDepositsResponse",
		toAmino: (message: QueryDepositsResponse) => ({ ...message }),
		fromAmino: (object: QueryDepositsResponse) => ({ ...object }),
	},
};

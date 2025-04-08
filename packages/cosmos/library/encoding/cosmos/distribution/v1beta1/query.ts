import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { DecCoin } from "../../base/v1beta1/coin";

import { DelegationDelegatorReward, Params, ValidatorAccumulatedCommission, ValidatorOutstandingRewards, ValidatorSlashEvent } from "./distribution";

import type {
	QueryCommunityPoolRequest as QueryCommunityPoolRequest_type,
	QueryCommunityPoolResponse as QueryCommunityPoolResponse_type,
	QueryDelegationRewardsRequest as QueryDelegationRewardsRequest_type,
	QueryDelegationRewardsResponse as QueryDelegationRewardsResponse_type,
	QueryDelegationTotalRewardsRequest as QueryDelegationTotalRewardsRequest_type,
	QueryDelegationTotalRewardsResponse as QueryDelegationTotalRewardsResponse_type,
	QueryDelegatorValidatorsRequest as QueryDelegatorValidatorsRequest_type,
	QueryDelegatorValidatorsResponse as QueryDelegatorValidatorsResponse_type,
	QueryDelegatorWithdrawAddressRequest as QueryDelegatorWithdrawAddressRequest_type,
	QueryDelegatorWithdrawAddressResponse as QueryDelegatorWithdrawAddressResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type,
	QueryValidatorCommissionRequest as QueryValidatorCommissionRequest_type,
	QueryValidatorCommissionResponse as QueryValidatorCommissionResponse_type,
	QueryValidatorOutstandingRewardsRequest as QueryValidatorOutstandingRewardsRequest_type,
	QueryValidatorOutstandingRewardsResponse as QueryValidatorOutstandingRewardsResponse_type,
	QueryValidatorSlashesRequest as QueryValidatorSlashesRequest_type,
	QueryValidatorSlashesResponse as QueryValidatorSlashesResponse_type
} from "../../../../types/cosmos/distribution/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QueryValidatorOutstandingRewardsRequest extends QueryValidatorOutstandingRewardsRequest_type {}
export interface QueryValidatorOutstandingRewardsResponse extends QueryValidatorOutstandingRewardsResponse_type {}
export interface QueryValidatorCommissionRequest extends QueryValidatorCommissionRequest_type {}
export interface QueryValidatorCommissionResponse extends QueryValidatorCommissionResponse_type {}
export interface QueryValidatorSlashesRequest extends QueryValidatorSlashesRequest_type {}
export interface QueryValidatorSlashesResponse extends QueryValidatorSlashesResponse_type {}
export interface QueryDelegationRewardsRequest extends QueryDelegationRewardsRequest_type {}
export interface QueryDelegationRewardsResponse extends QueryDelegationRewardsResponse_type {}
export interface QueryDelegationTotalRewardsRequest extends QueryDelegationTotalRewardsRequest_type {}
export interface QueryDelegationTotalRewardsResponse extends QueryDelegationTotalRewardsResponse_type {}
export interface QueryDelegatorValidatorsRequest extends QueryDelegatorValidatorsRequest_type {}
export interface QueryDelegatorValidatorsResponse extends QueryDelegatorValidatorsResponse_type {}
export interface QueryDelegatorWithdrawAddressRequest extends QueryDelegatorWithdrawAddressRequest_type {}
export interface QueryDelegatorWithdrawAddressResponse extends QueryDelegatorWithdrawAddressResponse_type {}
export interface QueryCommunityPoolRequest extends QueryCommunityPoolRequest_type {}
export interface QueryCommunityPoolResponse extends QueryCommunityPoolResponse_type {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.distribution.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.distribution.v1beta1.QueryParamsRequest" as const,

	encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryParamsRequest {
		return {};
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	}
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.distribution.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.distribution.v1beta1.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
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

					message.params = Params.decode(reader, reader.uint32());
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
		return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	}
};

export const QueryValidatorOutstandingRewardsRequest: MessageFns<
	QueryValidatorOutstandingRewardsRequest,
	"cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest"
> = {
	$type: "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest" as const,

	encode(message: QueryValidatorOutstandingRewardsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorOutstandingRewardsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
		return { validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "" };
	},

	toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsRequest>, I>>(base?: I): QueryValidatorOutstandingRewardsRequest {
		return QueryValidatorOutstandingRewardsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsRequest>, I>>(object: I): QueryValidatorOutstandingRewardsRequest {
		const message = createBaseQueryValidatorOutstandingRewardsRequest();
		message.validator_address = object.validator_address ?? "";
		return message;
	}
};

export const QueryValidatorOutstandingRewardsResponse: MessageFns<
	QueryValidatorOutstandingRewardsResponse,
	"cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse"
> = {
	$type: "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse" as const,

	encode(message: QueryValidatorOutstandingRewardsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.rewards !== undefined) {
			ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorOutstandingRewardsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
		return { rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined };
	},

	toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
		const obj: any = {};
		if (message.rewards !== undefined) {
			obj.rewards = ValidatorOutstandingRewards.toJSON(message.rewards);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsResponse>, I>>(base?: I): QueryValidatorOutstandingRewardsResponse {
		return QueryValidatorOutstandingRewardsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsResponse>, I>>(object: I): QueryValidatorOutstandingRewardsResponse {
		const message = createBaseQueryValidatorOutstandingRewardsResponse();
		message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
		return message;
	}
};

export const QueryValidatorCommissionRequest: MessageFns<QueryValidatorCommissionRequest, "cosmos.distribution.v1beta1.QueryValidatorCommissionRequest"> = {
	$type: "cosmos.distribution.v1beta1.QueryValidatorCommissionRequest" as const,

	encode(message: QueryValidatorCommissionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorCommissionRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryValidatorCommissionRequest {
		return { validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "" };
	},

	toJSON(message: QueryValidatorCommissionRequest): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorCommissionRequest>, I>>(base?: I): QueryValidatorCommissionRequest {
		return QueryValidatorCommissionRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionRequest>, I>>(object: I): QueryValidatorCommissionRequest {
		const message = createBaseQueryValidatorCommissionRequest();
		message.validator_address = object.validator_address ?? "";
		return message;
	}
};

export const QueryValidatorCommissionResponse: MessageFns<QueryValidatorCommissionResponse, "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse"> = {
	$type: "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse" as const,

	encode(message: QueryValidatorCommissionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.commission !== undefined) {
			ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorCommissionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryValidatorCommissionResponse {
		return {
			commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
		};
	},

	toJSON(message: QueryValidatorCommissionResponse): unknown {
		const obj: any = {};
		if (message.commission !== undefined) {
			obj.commission = ValidatorAccumulatedCommission.toJSON(message.commission);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorCommissionResponse>, I>>(base?: I): QueryValidatorCommissionResponse {
		return QueryValidatorCommissionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionResponse>, I>>(object: I): QueryValidatorCommissionResponse {
		const message = createBaseQueryValidatorCommissionResponse();
		message.commission =
			object.commission !== undefined && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
		return message;
	}
};

export const QueryValidatorSlashesRequest: MessageFns<QueryValidatorSlashesRequest, "cosmos.distribution.v1beta1.QueryValidatorSlashesRequest"> = {
	$type: "cosmos.distribution.v1beta1.QueryValidatorSlashesRequest" as const,

	encode(message: QueryValidatorSlashesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		if (message.starting_height !== 0) {
			writer.uint32(16).uint64(message.starting_height);
		}
		if (message.ending_height !== 0) {
			writer.uint32(24).uint64(message.ending_height);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorSlashesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.starting_height = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.ending_height = longToNumber(reader.uint64());
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

	fromJSON(object: any): QueryValidatorSlashesRequest {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			starting_height: isSet(object.starting_height) ? globalThis.Number(object.starting_height) : 0,
			ending_height: isSet(object.ending_height) ? globalThis.Number(object.ending_height) : 0,
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorSlashesRequest): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.starting_height !== 0) {
			obj.starting_height = Math.round(message.starting_height);
		}
		if (message.ending_height !== 0) {
			obj.ending_height = Math.round(message.ending_height);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorSlashesRequest>, I>>(base?: I): QueryValidatorSlashesRequest {
		return QueryValidatorSlashesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesRequest>, I>>(object: I): QueryValidatorSlashesRequest {
		const message = createBaseQueryValidatorSlashesRequest();
		message.validator_address = object.validator_address ?? "";
		message.starting_height = object.starting_height ?? 0;
		message.ending_height = object.ending_height ?? 0;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryValidatorSlashesResponse: MessageFns<QueryValidatorSlashesResponse, "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse"> = {
	$type: "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse" as const,

	encode(message: QueryValidatorSlashesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.slashes) {
			ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorSlashesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryValidatorSlashesResponse {
		return {
			slashes: globalThis.Array.isArray(object?.slashes) ? object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorSlashesResponse): unknown {
		const obj: any = {};
		if (message.slashes?.length) {
			obj.slashes = message.slashes.map((e) => ValidatorSlashEvent.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorSlashesResponse>, I>>(base?: I): QueryValidatorSlashesResponse {
		return QueryValidatorSlashesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesResponse>, I>>(object: I): QueryValidatorSlashesResponse {
		const message = createBaseQueryValidatorSlashesResponse();
		message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegationRewardsRequest: MessageFns<QueryDelegationRewardsRequest, "cosmos.distribution.v1beta1.QueryDelegationRewardsRequest"> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegationRewardsRequest" as const,

	encode(message: QueryDelegationRewardsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationRewardsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegationRewardsRequest {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : ""
		};
	},

	toJSON(message: QueryDelegationRewardsRequest): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegationRewardsRequest>, I>>(base?: I): QueryDelegationRewardsRequest {
		return QueryDelegationRewardsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsRequest>, I>>(object: I): QueryDelegationRewardsRequest {
		const message = createBaseQueryDelegationRewardsRequest();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		return message;
	}
};

export const QueryDelegationRewardsResponse: MessageFns<QueryDelegationRewardsResponse, "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse"> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse" as const,

	encode(message: QueryDelegationRewardsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.rewards) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationRewardsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rewards.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegationRewardsResponse {
		return {
			rewards: globalThis.Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
		};
	},

	toJSON(message: QueryDelegationRewardsResponse): unknown {
		const obj: any = {};
		if (message.rewards?.length) {
			obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegationRewardsResponse>, I>>(base?: I): QueryDelegationRewardsResponse {
		return QueryDelegationRewardsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsResponse>, I>>(object: I): QueryDelegationRewardsResponse {
		const message = createBaseQueryDelegationRewardsResponse();
		message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

export const QueryDelegationTotalRewardsRequest: MessageFns<
	QueryDelegationTotalRewardsRequest,
	"cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest"
> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest" as const,

	encode(message: QueryDelegationTotalRewardsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationTotalRewardsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegationTotalRewardsRequest {
		return { delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "" };
	},

	toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegationTotalRewardsRequest>, I>>(base?: I): QueryDelegationTotalRewardsRequest {
		return QueryDelegationTotalRewardsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegationTotalRewardsRequest>, I>>(object: I): QueryDelegationTotalRewardsRequest {
		const message = createBaseQueryDelegationTotalRewardsRequest();
		message.delegator_address = object.delegator_address ?? "";
		return message;
	}
};

export const QueryDelegationTotalRewardsResponse: MessageFns<
	QueryDelegationTotalRewardsResponse,
	"cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse"
> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse" as const,

	encode(message: QueryDelegationTotalRewardsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.rewards) {
			DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).join();
		}
		for (const v of message.total) {
			DecCoin.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationTotalRewardsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.total.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegationTotalRewardsResponse {
		return {
			rewards: globalThis.Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e)) : [],
			total: globalThis.Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
		};
	},

	toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
		const obj: any = {};
		if (message.rewards?.length) {
			obj.rewards = message.rewards.map((e) => DelegationDelegatorReward.toJSON(e));
		}
		if (message.total?.length) {
			obj.total = message.total.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegationTotalRewardsResponse>, I>>(base?: I): QueryDelegationTotalRewardsResponse {
		return QueryDelegationTotalRewardsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegationTotalRewardsResponse>, I>>(object: I): QueryDelegationTotalRewardsResponse {
		const message = createBaseQueryDelegationTotalRewardsResponse();
		message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
		message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

export const QueryDelegatorValidatorsRequest: MessageFns<QueryDelegatorValidatorsRequest, "cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest"> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest" as const,

	encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorValidatorsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegatorValidatorsRequest {
		return { delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "" };
	},

	toJSON(message: QueryDelegatorValidatorsRequest): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(base?: I): QueryDelegatorValidatorsRequest {
		return QueryDelegatorValidatorsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(object: I): QueryDelegatorValidatorsRequest {
		const message = createBaseQueryDelegatorValidatorsRequest();
		message.delegator_address = object.delegator_address ?? "";
		return message;
	}
};

export const QueryDelegatorValidatorsResponse: MessageFns<QueryDelegatorValidatorsResponse, "cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse"> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse" as const,

	encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.validators) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorValidatorsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validators.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegatorValidatorsResponse {
		return {
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: QueryDelegatorValidatorsResponse): unknown {
		const obj: any = {};
		if (message.validators?.length) {
			obj.validators = message.validators;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(base?: I): QueryDelegatorValidatorsResponse {
		return QueryDelegatorValidatorsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(object: I): QueryDelegatorValidatorsResponse {
		const message = createBaseQueryDelegatorValidatorsResponse();
		message.validators = object.validators?.map((e) => e) || [];
		return message;
	}
};

export const QueryDelegatorWithdrawAddressRequest: MessageFns<
	QueryDelegatorWithdrawAddressRequest,
	"cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest"
> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest" as const,

	encode(message: QueryDelegatorWithdrawAddressRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorWithdrawAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
		return { delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "" };
	},

	toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressRequest>, I>>(base?: I): QueryDelegatorWithdrawAddressRequest {
		return QueryDelegatorWithdrawAddressRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressRequest>, I>>(object: I): QueryDelegatorWithdrawAddressRequest {
		const message = createBaseQueryDelegatorWithdrawAddressRequest();
		message.delegator_address = object.delegator_address ?? "";
		return message;
	}
};

export const QueryDelegatorWithdrawAddressResponse: MessageFns<
	QueryDelegatorWithdrawAddressResponse,
	"cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse"
> = {
	$type: "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse" as const,

	encode(message: QueryDelegatorWithdrawAddressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.withdraw_address !== "") {
			writer.uint32(10).string(message.withdraw_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorWithdrawAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.withdraw_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
		return { withdraw_address: isSet(object.withdraw_address) ? globalThis.String(object.withdraw_address) : "" };
	},

	toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
		const obj: any = {};
		if (message.withdraw_address !== "") {
			obj.withdraw_address = message.withdraw_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressResponse>, I>>(base?: I): QueryDelegatorWithdrawAddressResponse {
		return QueryDelegatorWithdrawAddressResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressResponse>, I>>(object: I): QueryDelegatorWithdrawAddressResponse {
		const message = createBaseQueryDelegatorWithdrawAddressResponse();
		message.withdraw_address = object.withdraw_address ?? "";
		return message;
	}
};

export const QueryCommunityPoolRequest: MessageFns<QueryCommunityPoolRequest, "cosmos.distribution.v1beta1.QueryCommunityPoolRequest"> = {
	$type: "cosmos.distribution.v1beta1.QueryCommunityPoolRequest" as const,

	encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryCommunityPoolRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryCommunityPoolRequest {
		return {};
	},

	toJSON(_: QueryCommunityPoolRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryCommunityPoolRequest>, I>>(base?: I): QueryCommunityPoolRequest {
		return QueryCommunityPoolRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolRequest>, I>>(_: I): QueryCommunityPoolRequest {
		const message = createBaseQueryCommunityPoolRequest();
		return message;
	}
};

export const QueryCommunityPoolResponse: MessageFns<QueryCommunityPoolResponse, "cosmos.distribution.v1beta1.QueryCommunityPoolResponse"> = {
	$type: "cosmos.distribution.v1beta1.QueryCommunityPoolResponse" as const,

	encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.pool) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryCommunityPoolResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pool.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryCommunityPoolResponse {
		return { pool: globalThis.Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : [] };
	},

	toJSON(message: QueryCommunityPoolResponse): unknown {
		const obj: any = {};
		if (message.pool?.length) {
			obj.pool = message.pool.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryCommunityPoolResponse>, I>>(base?: I): QueryCommunityPoolResponse {
		return QueryCommunityPoolResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolResponse>, I>>(object: I): QueryCommunityPoolResponse {
		const message = createBaseQueryCommunityPoolResponse();
		message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
	return { validator_address: "" };
}

function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
	return { rewards: undefined };
}

function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
	return { validator_address: "" };
}

function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
	return { commission: undefined };
}

function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
	return { validator_address: "", starting_height: 0, ending_height: 0, pagination: undefined };
}

function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
	return { slashes: [], pagination: undefined };
}

function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
	return { delegator_address: "", validator_address: "" };
}

function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
	return { rewards: [] };
}

function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
	return { delegator_address: "" };
}

function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
	return { rewards: [], total: [] };
}

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
	return { delegator_address: "" };
}

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
	return { validators: [] };
}

function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
	return { delegator_address: "" };
}

function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
	return { withdraw_address: "" };
}

function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
	return {};
}

function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
	return { pool: [] };
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
	["/cosmos.distribution.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.distribution.v1beta1.QueryParamsResponse", QueryParamsResponse as never],
	["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", QueryValidatorOutstandingRewardsRequest as never],
	["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", QueryValidatorOutstandingRewardsResponse as never],
	["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", QueryValidatorCommissionRequest as never],
	["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", QueryValidatorCommissionResponse as never],
	["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", QueryValidatorSlashesRequest as never],
	["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", QueryValidatorSlashesResponse as never],
	["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", QueryDelegationRewardsRequest as never],
	["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", QueryDelegationRewardsResponse as never],
	["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", QueryDelegationTotalRewardsRequest as never],
	["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", QueryDelegationTotalRewardsResponse as never],
	["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", QueryDelegatorValidatorsRequest as never],
	["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", QueryDelegatorValidatorsResponse as never],
	["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", QueryDelegatorWithdrawAddressRequest as never],
	["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", QueryDelegatorWithdrawAddressResponse as never],
	["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", QueryCommunityPoolRequest as never],
	["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", QueryCommunityPoolResponse as never]
];
export const aminoConverters = {
	"/cosmos.distribution.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest": {
		aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
		toAmino: (message: QueryValidatorOutstandingRewardsRequest) => ({ ...message }),
		fromAmino: (object: QueryValidatorOutstandingRewardsRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse": {
		aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
		toAmino: (message: QueryValidatorOutstandingRewardsResponse) => ({ ...message }),
		fromAmino: (object: QueryValidatorOutstandingRewardsResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest": {
		aminoType: "cosmos-sdk/QueryValidatorCommissionRequest",
		toAmino: (message: QueryValidatorCommissionRequest) => ({ ...message }),
		fromAmino: (object: QueryValidatorCommissionRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse": {
		aminoType: "cosmos-sdk/QueryValidatorCommissionResponse",
		toAmino: (message: QueryValidatorCommissionResponse) => ({ ...message }),
		fromAmino: (object: QueryValidatorCommissionResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest": {
		aminoType: "cosmos-sdk/QueryValidatorSlashesRequest",
		toAmino: (message: QueryValidatorSlashesRequest) => ({ ...message }),
		fromAmino: (object: QueryValidatorSlashesRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse": {
		aminoType: "cosmos-sdk/QueryValidatorSlashesResponse",
		toAmino: (message: QueryValidatorSlashesResponse) => ({ ...message }),
		fromAmino: (object: QueryValidatorSlashesResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest": {
		aminoType: "cosmos-sdk/QueryDelegationRewardsRequest",
		toAmino: (message: QueryDelegationRewardsRequest) => ({ ...message }),
		fromAmino: (object: QueryDelegationRewardsRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse": {
		aminoType: "cosmos-sdk/QueryDelegationRewardsResponse",
		toAmino: (message: QueryDelegationRewardsResponse) => ({ ...message }),
		fromAmino: (object: QueryDelegationRewardsResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest": {
		aminoType: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
		toAmino: (message: QueryDelegationTotalRewardsRequest) => ({ ...message }),
		fromAmino: (object: QueryDelegationTotalRewardsRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse": {
		aminoType: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
		toAmino: (message: QueryDelegationTotalRewardsResponse) => ({ ...message }),
		fromAmino: (object: QueryDelegationTotalRewardsResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest": {
		aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
		toAmino: (message: QueryDelegatorValidatorsRequest) => ({ ...message }),
		fromAmino: (object: QueryDelegatorValidatorsRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse": {
		aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
		toAmino: (message: QueryDelegatorValidatorsResponse) => ({ ...message }),
		fromAmino: (object: QueryDelegatorValidatorsResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest": {
		aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
		toAmino: (message: QueryDelegatorWithdrawAddressRequest) => ({ ...message }),
		fromAmino: (object: QueryDelegatorWithdrawAddressRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse": {
		aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
		toAmino: (message: QueryDelegatorWithdrawAddressResponse) => ({ ...message }),
		fromAmino: (object: QueryDelegatorWithdrawAddressResponse) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryCommunityPoolRequest": {
		aminoType: "cosmos-sdk/QueryCommunityPoolRequest",
		toAmino: (message: QueryCommunityPoolRequest) => ({ ...message }),
		fromAmino: (object: QueryCommunityPoolRequest) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.QueryCommunityPoolResponse": {
		aminoType: "cosmos-sdk/QueryCommunityPoolResponse",
		toAmino: (message: QueryCommunityPoolResponse) => ({ ...message }),
		fromAmino: (object: QueryCommunityPoolResponse) => ({ ...object })
	}
};

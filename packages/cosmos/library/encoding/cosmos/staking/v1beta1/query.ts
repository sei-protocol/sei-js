import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { DelegationResponse, HistoricalInfo, Params, Pool, RedelegationResponse, UnbondingDelegation, Validator } from "./staking";

import type {
	QueryDelegationRequest as QueryDelegationRequest_type,
	QueryDelegationResponse as QueryDelegationResponse_type,
	QueryDelegatorDelegationsRequest as QueryDelegatorDelegationsRequest_type,
	QueryDelegatorDelegationsResponse as QueryDelegatorDelegationsResponse_type,
	QueryDelegatorUnbondingDelegationsRequest as QueryDelegatorUnbondingDelegationsRequest_type,
	QueryDelegatorUnbondingDelegationsResponse as QueryDelegatorUnbondingDelegationsResponse_type,
	QueryDelegatorValidatorRequest as QueryDelegatorValidatorRequest_type,
	QueryDelegatorValidatorResponse as QueryDelegatorValidatorResponse_type,
	QueryDelegatorValidatorsRequest as QueryDelegatorValidatorsRequest_type,
	QueryDelegatorValidatorsResponse as QueryDelegatorValidatorsResponse_type,
	QueryHistoricalInfoRequest as QueryHistoricalInfoRequest_type,
	QueryHistoricalInfoResponse as QueryHistoricalInfoResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type,
	QueryPoolRequest as QueryPoolRequest_type,
	QueryPoolResponse as QueryPoolResponse_type,
	QueryRedelegationsRequest as QueryRedelegationsRequest_type,
	QueryRedelegationsResponse as QueryRedelegationsResponse_type,
	QueryUnbondingDelegationRequest as QueryUnbondingDelegationRequest_type,
	QueryUnbondingDelegationResponse as QueryUnbondingDelegationResponse_type,
	QueryValidatorDelegationsRequest as QueryValidatorDelegationsRequest_type,
	QueryValidatorDelegationsResponse as QueryValidatorDelegationsResponse_type,
	QueryValidatorRequest as QueryValidatorRequest_type,
	QueryValidatorResponse as QueryValidatorResponse_type,
	QueryValidatorUnbondingDelegationsRequest as QueryValidatorUnbondingDelegationsRequest_type,
	QueryValidatorUnbondingDelegationsResponse as QueryValidatorUnbondingDelegationsResponse_type,
	QueryValidatorsRequest as QueryValidatorsRequest_type,
	QueryValidatorsResponse as QueryValidatorsResponse_type
} from "../../../../types/cosmos/staking/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryValidatorsRequest extends QueryValidatorsRequest_type {}
export interface QueryValidatorsResponse extends QueryValidatorsResponse_type {}
export interface QueryValidatorRequest extends QueryValidatorRequest_type {}
export interface QueryValidatorResponse extends QueryValidatorResponse_type {}
export interface QueryValidatorDelegationsRequest extends QueryValidatorDelegationsRequest_type {}
export interface QueryValidatorDelegationsResponse extends QueryValidatorDelegationsResponse_type {}
export interface QueryValidatorUnbondingDelegationsRequest extends QueryValidatorUnbondingDelegationsRequest_type {}
export interface QueryValidatorUnbondingDelegationsResponse extends QueryValidatorUnbondingDelegationsResponse_type {}
export interface QueryDelegationRequest extends QueryDelegationRequest_type {}
export interface QueryDelegationResponse extends QueryDelegationResponse_type {}
export interface QueryUnbondingDelegationRequest extends QueryUnbondingDelegationRequest_type {}
export interface QueryUnbondingDelegationResponse extends QueryUnbondingDelegationResponse_type {}
export interface QueryDelegatorDelegationsRequest extends QueryDelegatorDelegationsRequest_type {}
export interface QueryDelegatorDelegationsResponse extends QueryDelegatorDelegationsResponse_type {}
export interface QueryDelegatorUnbondingDelegationsRequest extends QueryDelegatorUnbondingDelegationsRequest_type {}
export interface QueryDelegatorUnbondingDelegationsResponse extends QueryDelegatorUnbondingDelegationsResponse_type {}
export interface QueryRedelegationsRequest extends QueryRedelegationsRequest_type {}
export interface QueryRedelegationsResponse extends QueryRedelegationsResponse_type {}
export interface QueryDelegatorValidatorsRequest extends QueryDelegatorValidatorsRequest_type {}
export interface QueryDelegatorValidatorsResponse extends QueryDelegatorValidatorsResponse_type {}
export interface QueryDelegatorValidatorRequest extends QueryDelegatorValidatorRequest_type {}
export interface QueryDelegatorValidatorResponse extends QueryDelegatorValidatorResponse_type {}
export interface QueryHistoricalInfoRequest extends QueryHistoricalInfoRequest_type {}
export interface QueryHistoricalInfoResponse extends QueryHistoricalInfoResponse_type {}
export interface QueryPoolRequest extends QueryPoolRequest_type {}
export interface QueryPoolResponse extends QueryPoolResponse_type {}
export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}

export const QueryValidatorsRequest: MessageFns<QueryValidatorsRequest, "cosmos.staking.v1beta1.QueryValidatorsRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorsRequest" as const,

	encode(message: QueryValidatorsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.status !== "") {
			writer.uint32(10).string(message.status);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.status = reader.string();
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

	fromJSON(object: any): QueryValidatorsRequest {
		return {
			status: isSet(object.status) ? globalThis.String(object.status) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorsRequest): unknown {
		const obj: any = {};
		if (message.status !== "") {
			obj.status = message.status;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorsRequest>, I>>(base?: I): QueryValidatorsRequest {
		return QueryValidatorsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorsRequest>, I>>(object: I): QueryValidatorsRequest {
		const message = createBaseQueryValidatorsRequest();
		message.status = object.status ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryValidatorsResponse: MessageFns<QueryValidatorsResponse, "cosmos.staking.v1beta1.QueryValidatorsResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorsResponse" as const,

	encode(message: QueryValidatorsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.validators) {
			Validator.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validators.push(Validator.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryValidatorsResponse {
		return {
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorsResponse): unknown {
		const obj: any = {};
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => Validator.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(base?: I): QueryValidatorsResponse {
		return QueryValidatorsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(object: I): QueryValidatorsResponse {
		const message = createBaseQueryValidatorsResponse();
		message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryValidatorRequest: MessageFns<QueryValidatorRequest, "cosmos.staking.v1beta1.QueryValidatorRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorRequest" as const,

	encode(message: QueryValidatorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_addr !== "") {
			writer.uint32(10).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryValidatorRequest {
		return { validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : "" };
	},

	toJSON(message: QueryValidatorRequest): unknown {
		const obj: any = {};
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(base?: I): QueryValidatorRequest {
		return QueryValidatorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(object: I): QueryValidatorRequest {
		const message = createBaseQueryValidatorRequest();
		message.validator_addr = object.validator_addr ?? "";
		return message;
	}
};

export const QueryValidatorResponse: MessageFns<QueryValidatorResponse, "cosmos.staking.v1beta1.QueryValidatorResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorResponse" as const,

	encode(message: QueryValidatorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator !== undefined) {
			Validator.encode(message.validator, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator = Validator.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryValidatorResponse {
		return { validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined };
	},

	toJSON(message: QueryValidatorResponse): unknown {
		const obj: any = {};
		if (message.validator !== undefined) {
			obj.validator = Validator.toJSON(message.validator);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(base?: I): QueryValidatorResponse {
		return QueryValidatorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(object: I): QueryValidatorResponse {
		const message = createBaseQueryValidatorResponse();
		message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
		return message;
	}
};

export const QueryValidatorDelegationsRequest: MessageFns<QueryValidatorDelegationsRequest, "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest" as const,

	encode(message: QueryValidatorDelegationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_addr !== "") {
			writer.uint32(10).string(message.validator_addr);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorDelegationsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_addr = reader.string();
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

	fromJSON(object: any): QueryValidatorDelegationsRequest {
		return {
			validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorDelegationsRequest): unknown {
		const obj: any = {};
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorDelegationsRequest>, I>>(base?: I): QueryValidatorDelegationsRequest {
		return QueryValidatorDelegationsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsRequest>, I>>(object: I): QueryValidatorDelegationsRequest {
		const message = createBaseQueryValidatorDelegationsRequest();
		message.validator_addr = object.validator_addr ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryValidatorDelegationsResponse: MessageFns<QueryValidatorDelegationsResponse, "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse" as const,

	encode(message: QueryValidatorDelegationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.delegation_responses) {
			DelegationResponse.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorDelegationsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryValidatorDelegationsResponse {
		return {
			delegation_responses: globalThis.Array.isArray(object?.delegation_responses)
				? object.delegation_responses.map((e: any) => DelegationResponse.fromJSON(e))
				: [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorDelegationsResponse): unknown {
		const obj: any = {};
		if (message.delegation_responses?.length) {
			obj.delegation_responses = message.delegation_responses.map((e) => DelegationResponse.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorDelegationsResponse>, I>>(base?: I): QueryValidatorDelegationsResponse {
		return QueryValidatorDelegationsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsResponse>, I>>(object: I): QueryValidatorDelegationsResponse {
		const message = createBaseQueryValidatorDelegationsResponse();
		message.delegation_responses = object.delegation_responses?.map((e) => DelegationResponse.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryValidatorUnbondingDelegationsRequest: MessageFns<
	QueryValidatorUnbondingDelegationsRequest,
	"cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest"
> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest" as const,

	encode(message: QueryValidatorUnbondingDelegationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_addr !== "") {
			writer.uint32(10).string(message.validator_addr);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorUnbondingDelegationsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_addr = reader.string();
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

	fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
		return {
			validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
		const obj: any = {};
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsRequest>, I>>(base?: I): QueryValidatorUnbondingDelegationsRequest {
		return QueryValidatorUnbondingDelegationsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsRequest>, I>>(object: I): QueryValidatorUnbondingDelegationsRequest {
		const message = createBaseQueryValidatorUnbondingDelegationsRequest();
		message.validator_addr = object.validator_addr ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryValidatorUnbondingDelegationsResponse: MessageFns<
	QueryValidatorUnbondingDelegationsResponse,
	"cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse"
> = {
	$type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse" as const,

	encode(message: QueryValidatorUnbondingDelegationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.unbonding_responses) {
			UnbondingDelegation.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryValidatorUnbondingDelegationsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
		return {
			unbonding_responses: globalThis.Array.isArray(object?.unbonding_responses)
				? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromJSON(e))
				: [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
		const obj: any = {};
		if (message.unbonding_responses?.length) {
			obj.unbonding_responses = message.unbonding_responses.map((e) => UnbondingDelegation.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsResponse>, I>>(base?: I): QueryValidatorUnbondingDelegationsResponse {
		return QueryValidatorUnbondingDelegationsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsResponse>, I>>(object: I): QueryValidatorUnbondingDelegationsResponse {
		const message = createBaseQueryValidatorUnbondingDelegationsResponse();
		message.unbonding_responses = object.unbonding_responses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegationRequest: MessageFns<QueryDelegationRequest, "cosmos.staking.v1beta1.QueryDelegationRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegationRequest" as const,

	encode(message: QueryDelegationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.validator_addr !== "") {
			writer.uint32(18).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_addr = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegationRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : ""
		};
	},

	toJSON(message: QueryDelegationRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegationRequest>, I>>(base?: I): QueryDelegationRequest {
		return QueryDelegationRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegationRequest>, I>>(object: I): QueryDelegationRequest {
		const message = createBaseQueryDelegationRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.validator_addr = object.validator_addr ?? "";
		return message;
	}
};

export const QueryDelegationResponse: MessageFns<QueryDelegationResponse, "cosmos.staking.v1beta1.QueryDelegationResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegationResponse" as const,

	encode(message: QueryDelegationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegation_response !== undefined) {
			DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegation_response = DelegationResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegationResponse {
		return {
			delegation_response: isSet(object.delegation_response) ? DelegationResponse.fromJSON(object.delegation_response) : undefined
		};
	},

	toJSON(message: QueryDelegationResponse): unknown {
		const obj: any = {};
		if (message.delegation_response !== undefined) {
			obj.delegation_response = DelegationResponse.toJSON(message.delegation_response);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegationResponse>, I>>(base?: I): QueryDelegationResponse {
		return QueryDelegationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegationResponse>, I>>(object: I): QueryDelegationResponse {
		const message = createBaseQueryDelegationResponse();
		message.delegation_response =
			object.delegation_response !== undefined && object.delegation_response !== null ? DelegationResponse.fromPartial(object.delegation_response) : undefined;
		return message;
	}
};

export const QueryUnbondingDelegationRequest: MessageFns<QueryUnbondingDelegationRequest, "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest" as const,

	encode(message: QueryUnbondingDelegationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.validator_addr !== "") {
			writer.uint32(18).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryUnbondingDelegationRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_addr = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryUnbondingDelegationRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : ""
		};
	},

	toJSON(message: QueryUnbondingDelegationRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryUnbondingDelegationRequest>, I>>(base?: I): QueryUnbondingDelegationRequest {
		return QueryUnbondingDelegationRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationRequest>, I>>(object: I): QueryUnbondingDelegationRequest {
		const message = createBaseQueryUnbondingDelegationRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.validator_addr = object.validator_addr ?? "";
		return message;
	}
};

export const QueryUnbondingDelegationResponse: MessageFns<QueryUnbondingDelegationResponse, "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse" as const,

	encode(message: QueryUnbondingDelegationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.unbond !== undefined) {
			UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryUnbondingDelegationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryUnbondingDelegationResponse {
		return { unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined };
	},

	toJSON(message: QueryUnbondingDelegationResponse): unknown {
		const obj: any = {};
		if (message.unbond !== undefined) {
			obj.unbond = UnbondingDelegation.toJSON(message.unbond);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryUnbondingDelegationResponse>, I>>(base?: I): QueryUnbondingDelegationResponse {
		return QueryUnbondingDelegationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationResponse>, I>>(object: I): QueryUnbondingDelegationResponse {
		const message = createBaseQueryUnbondingDelegationResponse();
		message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
		return message;
	}
};

export const QueryDelegatorDelegationsRequest: MessageFns<QueryDelegatorDelegationsRequest, "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest" as const,

	encode(message: QueryDelegatorDelegationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorDelegationsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_addr = reader.string();
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

	fromJSON(object: any): QueryDelegatorDelegationsRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryDelegatorDelegationsRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorDelegationsRequest>, I>>(base?: I): QueryDelegatorDelegationsRequest {
		return QueryDelegatorDelegationsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsRequest>, I>>(object: I): QueryDelegatorDelegationsRequest {
		const message = createBaseQueryDelegatorDelegationsRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegatorDelegationsResponse: MessageFns<QueryDelegatorDelegationsResponse, "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse" as const,

	encode(message: QueryDelegatorDelegationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.delegation_responses) {
			DelegationResponse.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorDelegationsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegation_responses.push(DelegationResponse.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryDelegatorDelegationsResponse {
		return {
			delegation_responses: globalThis.Array.isArray(object?.delegation_responses)
				? object.delegation_responses.map((e: any) => DelegationResponse.fromJSON(e))
				: [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryDelegatorDelegationsResponse): unknown {
		const obj: any = {};
		if (message.delegation_responses?.length) {
			obj.delegation_responses = message.delegation_responses.map((e) => DelegationResponse.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorDelegationsResponse>, I>>(base?: I): QueryDelegatorDelegationsResponse {
		return QueryDelegatorDelegationsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsResponse>, I>>(object: I): QueryDelegatorDelegationsResponse {
		const message = createBaseQueryDelegatorDelegationsResponse();
		message.delegation_responses = object.delegation_responses?.map((e) => DelegationResponse.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegatorUnbondingDelegationsRequest: MessageFns<
	QueryDelegatorUnbondingDelegationsRequest,
	"cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest"
> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest" as const,

	encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_addr = reader.string();
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

	fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, I>>(base?: I): QueryDelegatorUnbondingDelegationsRequest {
		return QueryDelegatorUnbondingDelegationsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, I>>(object: I): QueryDelegatorUnbondingDelegationsRequest {
		const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegatorUnbondingDelegationsResponse: MessageFns<
	QueryDelegatorUnbondingDelegationsResponse,
	"cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse"
> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse" as const,

	encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.unbonding_responses) {
			UnbondingDelegation.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.unbonding_responses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
		return {
			unbonding_responses: globalThis.Array.isArray(object?.unbonding_responses)
				? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromJSON(e))
				: [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
		const obj: any = {};
		if (message.unbonding_responses?.length) {
			obj.unbonding_responses = message.unbonding_responses.map((e) => UnbondingDelegation.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsResponse>, I>>(base?: I): QueryDelegatorUnbondingDelegationsResponse {
		return QueryDelegatorUnbondingDelegationsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsResponse>, I>>(object: I): QueryDelegatorUnbondingDelegationsResponse {
		const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
		message.unbonding_responses = object.unbonding_responses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryRedelegationsRequest: MessageFns<QueryRedelegationsRequest, "cosmos.staking.v1beta1.QueryRedelegationsRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryRedelegationsRequest" as const,

	encode(message: QueryRedelegationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.src_validator_addr !== "") {
			writer.uint32(18).string(message.src_validator_addr);
		}
		if (message.dst_validator_addr !== "") {
			writer.uint32(26).string(message.dst_validator_addr);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryRedelegationsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_addr = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.src_validator_addr = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.dst_validator_addr = reader.string();
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

	fromJSON(object: any): QueryRedelegationsRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			src_validator_addr: isSet(object.src_validator_addr) ? globalThis.String(object.src_validator_addr) : "",
			dst_validator_addr: isSet(object.dst_validator_addr) ? globalThis.String(object.dst_validator_addr) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryRedelegationsRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.src_validator_addr !== "") {
			obj.src_validator_addr = message.src_validator_addr;
		}
		if (message.dst_validator_addr !== "") {
			obj.dst_validator_addr = message.dst_validator_addr;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryRedelegationsRequest>, I>>(base?: I): QueryRedelegationsRequest {
		return QueryRedelegationsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryRedelegationsRequest>, I>>(object: I): QueryRedelegationsRequest {
		const message = createBaseQueryRedelegationsRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.src_validator_addr = object.src_validator_addr ?? "";
		message.dst_validator_addr = object.dst_validator_addr ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryRedelegationsResponse: MessageFns<QueryRedelegationsResponse, "cosmos.staking.v1beta1.QueryRedelegationsResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryRedelegationsResponse" as const,

	encode(message: QueryRedelegationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.redelegation_responses) {
			RedelegationResponse.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryRedelegationsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.redelegation_responses.push(RedelegationResponse.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryRedelegationsResponse {
		return {
			redelegation_responses: globalThis.Array.isArray(object?.redelegation_responses)
				? object.redelegation_responses.map((e: any) => RedelegationResponse.fromJSON(e))
				: [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryRedelegationsResponse): unknown {
		const obj: any = {};
		if (message.redelegation_responses?.length) {
			obj.redelegation_responses = message.redelegation_responses.map((e) => RedelegationResponse.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryRedelegationsResponse>, I>>(base?: I): QueryRedelegationsResponse {
		return QueryRedelegationsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryRedelegationsResponse>, I>>(object: I): QueryRedelegationsResponse {
		const message = createBaseQueryRedelegationsResponse();
		message.redelegation_responses = object.redelegation_responses?.map((e) => RedelegationResponse.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegatorValidatorsRequest: MessageFns<QueryDelegatorValidatorsRequest, "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest" as const,

	encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
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

					message.delegator_addr = reader.string();
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

	fromJSON(object: any): QueryDelegatorValidatorsRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryDelegatorValidatorsRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(base?: I): QueryDelegatorValidatorsRequest {
		return QueryDelegatorValidatorsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(object: I): QueryDelegatorValidatorsRequest {
		const message = createBaseQueryDelegatorValidatorsRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegatorValidatorsResponse: MessageFns<QueryDelegatorValidatorsResponse, "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse" as const,

	encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.validators) {
			Validator.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
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

					message.validators.push(Validator.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryDelegatorValidatorsResponse {
		return {
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryDelegatorValidatorsResponse): unknown {
		const obj: any = {};
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => Validator.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(base?: I): QueryDelegatorValidatorsResponse {
		return QueryDelegatorValidatorsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(object: I): QueryDelegatorValidatorsResponse {
		const message = createBaseQueryDelegatorValidatorsResponse();
		message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryDelegatorValidatorRequest: MessageFns<QueryDelegatorValidatorRequest, "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest" as const,

	encode(message: QueryDelegatorValidatorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_addr !== "") {
			writer.uint32(10).string(message.delegator_addr);
		}
		if (message.validator_addr !== "") {
			writer.uint32(18).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorValidatorRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_addr = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegatorValidatorRequest {
		return {
			delegator_addr: isSet(object.delegator_addr) ? globalThis.String(object.delegator_addr) : "",
			validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : ""
		};
	},

	toJSON(message: QueryDelegatorValidatorRequest): unknown {
		const obj: any = {};
		if (message.delegator_addr !== "") {
			obj.delegator_addr = message.delegator_addr;
		}
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorValidatorRequest>, I>>(base?: I): QueryDelegatorValidatorRequest {
		return QueryDelegatorValidatorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorRequest>, I>>(object: I): QueryDelegatorValidatorRequest {
		const message = createBaseQueryDelegatorValidatorRequest();
		message.delegator_addr = object.delegator_addr ?? "";
		message.validator_addr = object.validator_addr ?? "";
		return message;
	}
};

export const QueryDelegatorValidatorResponse: MessageFns<QueryDelegatorValidatorResponse, "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse" as const,

	encode(message: QueryDelegatorValidatorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator !== undefined) {
			Validator.encode(message.validator, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegatorValidatorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator = Validator.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDelegatorValidatorResponse {
		return { validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined };
	},

	toJSON(message: QueryDelegatorValidatorResponse): unknown {
		const obj: any = {};
		if (message.validator !== undefined) {
			obj.validator = Validator.toJSON(message.validator);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDelegatorValidatorResponse>, I>>(base?: I): QueryDelegatorValidatorResponse {
		return QueryDelegatorValidatorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorResponse>, I>>(object: I): QueryDelegatorValidatorResponse {
		const message = createBaseQueryDelegatorValidatorResponse();
		message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
		return message;
	}
};

export const QueryHistoricalInfoRequest: MessageFns<QueryHistoricalInfoRequest, "cosmos.staking.v1beta1.QueryHistoricalInfoRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryHistoricalInfoRequest" as const,

	encode(message: QueryHistoricalInfoRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryHistoricalInfoRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryHistoricalInfoRequest {
		return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
	},

	toJSON(message: QueryHistoricalInfoRequest): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryHistoricalInfoRequest>, I>>(base?: I): QueryHistoricalInfoRequest {
		return QueryHistoricalInfoRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoRequest>, I>>(object: I): QueryHistoricalInfoRequest {
		const message = createBaseQueryHistoricalInfoRequest();
		message.height = object.height ?? 0;
		return message;
	}
};

export const QueryHistoricalInfoResponse: MessageFns<QueryHistoricalInfoResponse, "cosmos.staking.v1beta1.QueryHistoricalInfoResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryHistoricalInfoResponse" as const,

	encode(message: QueryHistoricalInfoResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hist !== undefined) {
			HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryHistoricalInfoResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.hist = HistoricalInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryHistoricalInfoResponse {
		return { hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined };
	},

	toJSON(message: QueryHistoricalInfoResponse): unknown {
		const obj: any = {};
		if (message.hist !== undefined) {
			obj.hist = HistoricalInfo.toJSON(message.hist);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryHistoricalInfoResponse>, I>>(base?: I): QueryHistoricalInfoResponse {
		return QueryHistoricalInfoResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoResponse>, I>>(object: I): QueryHistoricalInfoResponse {
		const message = createBaseQueryHistoricalInfoResponse();
		message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
		return message;
	}
};

export const QueryPoolRequest: MessageFns<QueryPoolRequest, "cosmos.staking.v1beta1.QueryPoolRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryPoolRequest" as const,

	encode(_: QueryPoolRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPoolRequest();
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

	fromJSON(_: any): QueryPoolRequest {
		return {};
	},

	toJSON(_: QueryPoolRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(base?: I): QueryPoolRequest {
		return QueryPoolRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(_: I): QueryPoolRequest {
		const message = createBaseQueryPoolRequest();
		return message;
	}
};

export const QueryPoolResponse: MessageFns<QueryPoolResponse, "cosmos.staking.v1beta1.QueryPoolResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryPoolResponse" as const,

	encode(message: QueryPoolResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pool !== undefined) {
			Pool.encode(message.pool, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPoolResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pool = Pool.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPoolResponse {
		return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
	},

	toJSON(message: QueryPoolResponse): unknown {
		const obj: any = {};
		if (message.pool !== undefined) {
			obj.pool = Pool.toJSON(message.pool);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(base?: I): QueryPoolResponse {
		return QueryPoolResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
		const message = createBaseQueryPoolResponse();
		message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
		return message;
	}
};

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.staking.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.staking.v1beta1.QueryParamsRequest" as const,

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

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.staking.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.staking.v1beta1.QueryParamsResponse" as const,

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

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
	return { status: "", pagination: undefined };
}

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
	return { validators: [], pagination: undefined };
}

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
	return { validator_addr: "" };
}

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
	return { validator: undefined };
}

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
	return { validator_addr: "", pagination: undefined };
}

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
	return { delegation_responses: [], pagination: undefined };
}

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
	return { validator_addr: "", pagination: undefined };
}

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
	return { unbonding_responses: [], pagination: undefined };
}

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
	return { delegator_addr: "", validator_addr: "" };
}

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
	return { delegation_response: undefined };
}

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
	return { delegator_addr: "", validator_addr: "" };
}

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
	return { unbond: undefined };
}

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
	return { delegator_addr: "", pagination: undefined };
}

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
	return { delegation_responses: [], pagination: undefined };
}

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
	return { delegator_addr: "", pagination: undefined };
}

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
	return { unbonding_responses: [], pagination: undefined };
}

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
	return { delegator_addr: "", src_validator_addr: "", dst_validator_addr: "", pagination: undefined };
}

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
	return { redelegation_responses: [], pagination: undefined };
}

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
	return { delegator_addr: "", pagination: undefined };
}

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
	return { validators: [], pagination: undefined };
}

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
	return { delegator_addr: "", validator_addr: "" };
}

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
	return { validator: undefined };
}

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
	return { height: 0 };
}

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
	return { hist: undefined };
}

function createBaseQueryPoolRequest(): QueryPoolRequest {
	return {};
}

function createBaseQueryPoolResponse(): QueryPoolResponse {
	return { pool: undefined };
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
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
	["/cosmos.staking.v1beta1.QueryValidatorRequest", QueryValidatorRequest as never],
	["/cosmos.staking.v1beta1.QueryPoolRequest", QueryPoolRequest as never],
	["/cosmos.staking.v1beta1.QueryPoolResponse", QueryPoolResponse as never],
	["/cosmos.staking.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.staking.v1beta1.QueryParamsResponse", QueryParamsResponse as never]
];
export const aminoConverters = {
	"/cosmos.staking.v1beta1.QueryValidatorRequest": {
		aminoType: "cosmos-sdk/QueryValidatorRequest",
		toAmino: (message: QueryValidatorRequest) => ({ ...message }),
		fromAmino: (object: QueryValidatorRequest) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.QueryPoolRequest": {
		aminoType: "cosmos-sdk/QueryPoolRequest",
		toAmino: (message: QueryPoolRequest) => ({ ...message }),
		fromAmino: (object: QueryPoolRequest) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.QueryPoolResponse": {
		aminoType: "cosmos-sdk/QueryPoolResponse",
		toAmino: (message: QueryPoolResponse) => ({ ...message }),
		fromAmino: (object: QueryPoolResponse) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	}
};

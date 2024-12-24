import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../../google/protobuf/any";

import { NodeInfo } from "../../../../tendermint/p2p/types";

import { Block } from "../../../../tendermint/types/block";

import { BlockID } from "../../../../tendermint/types/types";

import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";

import type {
	GetBlockByHeightRequest as GetBlockByHeightRequest_type,
	GetBlockByHeightResponse as GetBlockByHeightResponse_type,
	GetLatestBlockRequest as GetLatestBlockRequest_type,
	GetLatestBlockResponse as GetLatestBlockResponse_type,
	GetLatestValidatorSetRequest as GetLatestValidatorSetRequest_type,
	GetLatestValidatorSetResponse as GetLatestValidatorSetResponse_type,
	GetNodeInfoRequest as GetNodeInfoRequest_type,
	GetNodeInfoResponse as GetNodeInfoResponse_type,
	GetSyncingRequest as GetSyncingRequest_type,
	GetSyncingResponse as GetSyncingResponse_type,
	GetValidatorSetByHeightRequest as GetValidatorSetByHeightRequest_type,
	GetValidatorSetByHeightResponse as GetValidatorSetByHeightResponse_type,
	Module as Module_type,
	Validator as Validator_type,
	VersionInfo as VersionInfo_type,
} from "../../../../../types/cosmos/base/tendermint/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface GetValidatorSetByHeightRequest extends GetValidatorSetByHeightRequest_type {}
export interface GetValidatorSetByHeightResponse extends GetValidatorSetByHeightResponse_type {}
export interface GetLatestValidatorSetRequest extends GetLatestValidatorSetRequest_type {}
export interface GetLatestValidatorSetResponse extends GetLatestValidatorSetResponse_type {}
export interface Validator extends Validator_type {}
export interface GetBlockByHeightRequest extends GetBlockByHeightRequest_type {}
export interface GetBlockByHeightResponse extends GetBlockByHeightResponse_type {}
export interface GetLatestBlockRequest extends GetLatestBlockRequest_type {}
export interface GetLatestBlockResponse extends GetLatestBlockResponse_type {}
export interface GetSyncingRequest extends GetSyncingRequest_type {}
export interface GetSyncingResponse extends GetSyncingResponse_type {}
export interface GetNodeInfoRequest extends GetNodeInfoRequest_type {}
export interface GetNodeInfoResponse extends GetNodeInfoResponse_type {}
export interface VersionInfo extends VersionInfo_type {}
export interface Module extends Module_type {}

export const GetValidatorSetByHeightRequest: MessageFns<GetValidatorSetByHeightRequest, "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest" as const,

	encode(message: GetValidatorSetByHeightRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetValidatorSetByHeightRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.int64());
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

	fromJSON(object: any): GetValidatorSetByHeightRequest {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: GetValidatorSetByHeightRequest): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(base?: I): GetValidatorSetByHeightRequest {
		return GetValidatorSetByHeightRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(object: I): GetValidatorSetByHeightRequest {
		const message = createBaseGetValidatorSetByHeightRequest();
		message.height = object.height ?? 0;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const GetValidatorSetByHeightResponse: MessageFns<GetValidatorSetByHeightResponse, "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse" as const,

	encode(message: GetValidatorSetByHeightResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.block_height !== 0) {
			writer.uint32(8).int64(message.block_height);
		}
		for (const v of message.validators) {
			Validator.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetValidatorSetByHeightResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.block_height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validators.push(Validator.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
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

	fromJSON(object: any): GetValidatorSetByHeightResponse {
		return {
			block_height: isSet(object.block_height) ? globalThis.Number(object.block_height) : 0,
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: GetValidatorSetByHeightResponse): unknown {
		const obj: any = {};
		if (message.block_height !== 0) {
			obj.block_height = Math.round(message.block_height);
		}
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => Validator.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(base?: I): GetValidatorSetByHeightResponse {
		return GetValidatorSetByHeightResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(object: I): GetValidatorSetByHeightResponse {
		const message = createBaseGetValidatorSetByHeightResponse();
		message.block_height = object.block_height ?? 0;
		message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const GetLatestValidatorSetRequest: MessageFns<GetLatestValidatorSetRequest, "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest" as const,

	encode(message: GetLatestValidatorSetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetLatestValidatorSetRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
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

	fromJSON(object: any): GetLatestValidatorSetRequest {
		return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
	},

	toJSON(message: GetLatestValidatorSetRequest): unknown {
		const obj: any = {};
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(base?: I): GetLatestValidatorSetRequest {
		return GetLatestValidatorSetRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(object: I): GetLatestValidatorSetRequest {
		const message = createBaseGetLatestValidatorSetRequest();
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const GetLatestValidatorSetResponse: MessageFns<GetLatestValidatorSetResponse, "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse" as const,

	encode(message: GetLatestValidatorSetResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.block_height !== 0) {
			writer.uint32(8).int64(message.block_height);
		}
		for (const v of message.validators) {
			Validator.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetLatestValidatorSetResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.block_height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validators.push(Validator.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
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

	fromJSON(object: any): GetLatestValidatorSetResponse {
		return {
			block_height: isSet(object.block_height) ? globalThis.Number(object.block_height) : 0,
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: GetLatestValidatorSetResponse): unknown {
		const obj: any = {};
		if (message.block_height !== 0) {
			obj.block_height = Math.round(message.block_height);
		}
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => Validator.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(base?: I): GetLatestValidatorSetResponse {
		return GetLatestValidatorSetResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(object: I): GetLatestValidatorSetResponse {
		const message = createBaseGetLatestValidatorSetResponse();
		message.block_height = object.block_height ?? 0;
		message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const Validator: MessageFns<Validator, "cosmos.base.tendermint.v1beta1.Validator"> = {
	$type: "cosmos.base.tendermint.v1beta1.Validator" as const,

	encode(message: Validator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.pub_key !== undefined) {
			Any.encode(message.pub_key, writer.uint32(18).fork()).join();
		}
		if (message.voting_power !== 0) {
			writer.uint32(24).int64(message.voting_power);
		}
		if (message.proposer_priority !== 0) {
			writer.uint32(32).int64(message.proposer_priority);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Validator {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidator();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pub_key = Any.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.voting_power = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.proposer_priority = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Validator {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
			voting_power: isSet(object.voting_power) ? globalThis.Number(object.voting_power) : 0,
			proposer_priority: isSet(object.proposer_priority) ? globalThis.Number(object.proposer_priority) : 0,
		};
	},

	toJSON(message: Validator): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.pub_key !== undefined) {
			obj.pub_key = Any.toJSON(message.pub_key);
		}
		if (message.voting_power !== 0) {
			obj.voting_power = Math.round(message.voting_power);
		}
		if (message.proposer_priority !== 0) {
			obj.proposer_priority = Math.round(message.proposer_priority);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
		return Validator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
		const message = createBaseValidator();
		message.address = object.address ?? "";
		message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
		message.voting_power = object.voting_power ?? 0;
		message.proposer_priority = object.proposer_priority ?? 0;
		return message;
	},
};

export const GetBlockByHeightRequest: MessageFns<GetBlockByHeightRequest, "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest" as const,

	encode(message: GetBlockByHeightRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetBlockByHeightRequest();
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

	fromJSON(object: any): GetBlockByHeightRequest {
		return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
	},

	toJSON(message: GetBlockByHeightRequest): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(base?: I): GetBlockByHeightRequest {
		return GetBlockByHeightRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(object: I): GetBlockByHeightRequest {
		const message = createBaseGetBlockByHeightRequest();
		message.height = object.height ?? 0;
		return message;
	},
};

export const GetBlockByHeightResponse: MessageFns<GetBlockByHeightResponse, "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse" as const,

	encode(message: GetBlockByHeightResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.block_id !== undefined) {
			BlockID.encode(message.block_id, writer.uint32(10).fork()).join();
		}
		if (message.block !== undefined) {
			Block.encode(message.block, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetBlockByHeightResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.block_id = BlockID.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.block = Block.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetBlockByHeightResponse {
		return {
			block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
			block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
		};
	},

	toJSON(message: GetBlockByHeightResponse): unknown {
		const obj: any = {};
		if (message.block_id !== undefined) {
			obj.block_id = BlockID.toJSON(message.block_id);
		}
		if (message.block !== undefined) {
			obj.block = Block.toJSON(message.block);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(base?: I): GetBlockByHeightResponse {
		return GetBlockByHeightResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(object: I): GetBlockByHeightResponse {
		const message = createBaseGetBlockByHeightResponse();
		message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
		message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
		return message;
	},
};

export const GetLatestBlockRequest: MessageFns<GetLatestBlockRequest, "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest" as const,

	encode(_: GetLatestBlockRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetLatestBlockRequest();
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

	fromJSON(_: any): GetLatestBlockRequest {
		return {};
	},

	toJSON(_: GetLatestBlockRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(base?: I): GetLatestBlockRequest {
		return GetLatestBlockRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(_: I): GetLatestBlockRequest {
		const message = createBaseGetLatestBlockRequest();
		return message;
	},
};

export const GetLatestBlockResponse: MessageFns<GetLatestBlockResponse, "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse" as const,

	encode(message: GetLatestBlockResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.block_id !== undefined) {
			BlockID.encode(message.block_id, writer.uint32(10).fork()).join();
		}
		if (message.block !== undefined) {
			Block.encode(message.block, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetLatestBlockResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.block_id = BlockID.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.block = Block.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetLatestBlockResponse {
		return {
			block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
			block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
		};
	},

	toJSON(message: GetLatestBlockResponse): unknown {
		const obj: any = {};
		if (message.block_id !== undefined) {
			obj.block_id = BlockID.toJSON(message.block_id);
		}
		if (message.block !== undefined) {
			obj.block = Block.toJSON(message.block);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(base?: I): GetLatestBlockResponse {
		return GetLatestBlockResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(object: I): GetLatestBlockResponse {
		const message = createBaseGetLatestBlockResponse();
		message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
		message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
		return message;
	},
};

export const GetSyncingRequest: MessageFns<GetSyncingRequest, "cosmos.base.tendermint.v1beta1.GetSyncingRequest"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetSyncingRequest" as const,

	encode(_: GetSyncingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetSyncingRequest();
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

	fromJSON(_: any): GetSyncingRequest {
		return {};
	},

	toJSON(_: GetSyncingRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(base?: I): GetSyncingRequest {
		return GetSyncingRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(_: I): GetSyncingRequest {
		const message = createBaseGetSyncingRequest();
		return message;
	},
};

export const GetSyncingResponse: MessageFns<GetSyncingResponse, "cosmos.base.tendermint.v1beta1.GetSyncingResponse"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetSyncingResponse" as const,

	encode(message: GetSyncingResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.syncing !== false) {
			writer.uint32(8).bool(message.syncing);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetSyncingResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.syncing = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetSyncingResponse {
		return { syncing: isSet(object.syncing) ? globalThis.Boolean(object.syncing) : false };
	},

	toJSON(message: GetSyncingResponse): unknown {
		const obj: any = {};
		if (message.syncing !== false) {
			obj.syncing = message.syncing;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(base?: I): GetSyncingResponse {
		return GetSyncingResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(object: I): GetSyncingResponse {
		const message = createBaseGetSyncingResponse();
		message.syncing = object.syncing ?? false;
		return message;
	},
};

export const GetNodeInfoRequest: MessageFns<GetNodeInfoRequest, "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest" as const,

	encode(_: GetNodeInfoRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetNodeInfoRequest();
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

	fromJSON(_: any): GetNodeInfoRequest {
		return {};
	},

	toJSON(_: GetNodeInfoRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(base?: I): GetNodeInfoRequest {
		return GetNodeInfoRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(_: I): GetNodeInfoRequest {
		const message = createBaseGetNodeInfoRequest();
		return message;
	},
};

export const GetNodeInfoResponse: MessageFns<GetNodeInfoResponse, "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse"> = {
	$type: "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse" as const,

	encode(message: GetNodeInfoResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.default_node_info !== undefined) {
			NodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).join();
		}
		if (message.application_version !== undefined) {
			VersionInfo.encode(message.application_version, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetNodeInfoResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.default_node_info = NodeInfo.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.application_version = VersionInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetNodeInfoResponse {
		return {
			default_node_info: isSet(object.default_node_info) ? NodeInfo.fromJSON(object.default_node_info) : undefined,
			application_version: isSet(object.application_version) ? VersionInfo.fromJSON(object.application_version) : undefined,
		};
	},

	toJSON(message: GetNodeInfoResponse): unknown {
		const obj: any = {};
		if (message.default_node_info !== undefined) {
			obj.default_node_info = NodeInfo.toJSON(message.default_node_info);
		}
		if (message.application_version !== undefined) {
			obj.application_version = VersionInfo.toJSON(message.application_version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(base?: I): GetNodeInfoResponse {
		return GetNodeInfoResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(object: I): GetNodeInfoResponse {
		const message = createBaseGetNodeInfoResponse();
		message.default_node_info =
			object.default_node_info !== undefined && object.default_node_info !== null ? NodeInfo.fromPartial(object.default_node_info) : undefined;
		message.application_version =
			object.application_version !== undefined && object.application_version !== null ? VersionInfo.fromPartial(object.application_version) : undefined;
		return message;
	},
};

export const VersionInfo: MessageFns<VersionInfo, "cosmos.base.tendermint.v1beta1.VersionInfo"> = {
	$type: "cosmos.base.tendermint.v1beta1.VersionInfo" as const,

	encode(message: VersionInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.app_name !== "") {
			writer.uint32(18).string(message.app_name);
		}
		if (message.version !== "") {
			writer.uint32(26).string(message.version);
		}
		if (message.git_commit !== "") {
			writer.uint32(34).string(message.git_commit);
		}
		if (message.build_tags !== "") {
			writer.uint32(42).string(message.build_tags);
		}
		if (message.go_version !== "") {
			writer.uint32(50).string(message.go_version);
		}
		for (const v of message.build_deps) {
			Module.encode(v!, writer.uint32(58).fork()).join();
		}
		if (message.cosmos_sdk_version !== "") {
			writer.uint32(66).string(message.cosmos_sdk_version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): VersionInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVersionInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.app_name = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.version = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.git_commit = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.build_tags = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.go_version = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.build_deps.push(Module.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.cosmos_sdk_version = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): VersionInfo {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			app_name: isSet(object.app_name) ? globalThis.String(object.app_name) : "",
			version: isSet(object.version) ? globalThis.String(object.version) : "",
			git_commit: isSet(object.git_commit) ? globalThis.String(object.git_commit) : "",
			build_tags: isSet(object.build_tags) ? globalThis.String(object.build_tags) : "",
			go_version: isSet(object.go_version) ? globalThis.String(object.go_version) : "",
			build_deps: globalThis.Array.isArray(object?.build_deps) ? object.build_deps.map((e: any) => Module.fromJSON(e)) : [],
			cosmos_sdk_version: isSet(object.cosmos_sdk_version) ? globalThis.String(object.cosmos_sdk_version) : "",
		};
	},

	toJSON(message: VersionInfo): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.app_name !== "") {
			obj.app_name = message.app_name;
		}
		if (message.version !== "") {
			obj.version = message.version;
		}
		if (message.git_commit !== "") {
			obj.git_commit = message.git_commit;
		}
		if (message.build_tags !== "") {
			obj.build_tags = message.build_tags;
		}
		if (message.go_version !== "") {
			obj.go_version = message.go_version;
		}
		if (message.build_deps?.length) {
			obj.build_deps = message.build_deps.map((e) => Module.toJSON(e));
		}
		if (message.cosmos_sdk_version !== "") {
			obj.cosmos_sdk_version = message.cosmos_sdk_version;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<VersionInfo>, I>>(base?: I): VersionInfo {
		return VersionInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(object: I): VersionInfo {
		const message = createBaseVersionInfo();
		message.name = object.name ?? "";
		message.app_name = object.app_name ?? "";
		message.version = object.version ?? "";
		message.git_commit = object.git_commit ?? "";
		message.build_tags = object.build_tags ?? "";
		message.go_version = object.go_version ?? "";
		message.build_deps = object.build_deps?.map((e) => Module.fromPartial(e)) || [];
		message.cosmos_sdk_version = object.cosmos_sdk_version ?? "";
		return message;
	},
};

export const Module: MessageFns<Module, "cosmos.base.tendermint.v1beta1.Module"> = {
	$type: "cosmos.base.tendermint.v1beta1.Module" as const,

	encode(message: Module, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.path !== "") {
			writer.uint32(10).string(message.path);
		}
		if (message.version !== "") {
			writer.uint32(18).string(message.version);
		}
		if (message.sum !== "") {
			writer.uint32(26).string(message.sum);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Module {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseModule();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.path = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.version = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.sum = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Module {
		return {
			path: isSet(object.path) ? globalThis.String(object.path) : "",
			version: isSet(object.version) ? globalThis.String(object.version) : "",
			sum: isSet(object.sum) ? globalThis.String(object.sum) : "",
		};
	},

	toJSON(message: Module): unknown {
		const obj: any = {};
		if (message.path !== "") {
			obj.path = message.path;
		}
		if (message.version !== "") {
			obj.version = message.version;
		}
		if (message.sum !== "") {
			obj.sum = message.sum;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Module>, I>>(base?: I): Module {
		return Module.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
		const message = createBaseModule();
		message.path = object.path ?? "";
		message.version = object.version ?? "";
		message.sum = object.sum ?? "";
		return message;
	},
};

function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
	return { height: 0, pagination: undefined };
}

function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
	return { block_height: 0, validators: [], pagination: undefined };
}

function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
	return { pagination: undefined };
}

function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
	return { block_height: 0, validators: [], pagination: undefined };
}

function createBaseValidator(): Validator {
	return { address: "", pub_key: undefined, voting_power: 0, proposer_priority: 0 };
}

function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
	return { height: 0 };
}

function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
	return { block_id: undefined, block: undefined };
}

function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
	return {};
}

function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
	return { block_id: undefined, block: undefined };
}

function createBaseGetSyncingRequest(): GetSyncingRequest {
	return {};
}

function createBaseGetSyncingResponse(): GetSyncingResponse {
	return { syncing: false };
}

function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
	return {};
}

function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
	return { default_node_info: undefined, application_version: undefined };
}

function createBaseVersionInfo(): VersionInfo {
	return {
		name: "",
		app_name: "",
		version: "",
		git_commit: "",
		build_tags: "",
		go_version: "",
		build_deps: [],
		cosmos_sdk_version: "",
	};
}

function createBaseModule(): Module {
	return { path: "", version: "", sum: "" };
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
	["/cosmos.base.tendermint.v1beta1.Validator", Validator as never],
	["/cosmos.base.tendermint.v1beta1.GetSyncingRequest", GetSyncingRequest as never],
	["/cosmos.base.tendermint.v1beta1.GetSyncingResponse", GetSyncingResponse as never],
	["/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest", GetNodeInfoRequest as never],
	["/cosmos.base.tendermint.v1beta1.VersionInfo", VersionInfo as never],
	["/cosmos.base.tendermint.v1beta1.Module", Module as never],
];
export const aminoConverters = {
	"/cosmos.base.tendermint.v1beta1.Validator": {
		aminoType: "cosmos-sdk/Validator",
		toAmino: (message: Validator) => ({ ...message }),
		fromAmino: (object: Validator) => ({ ...object }),
	},

	"/cosmos.base.tendermint.v1beta1.GetSyncingRequest": {
		aminoType: "cosmos-sdk/GetSyncingRequest",
		toAmino: (message: GetSyncingRequest) => ({ ...message }),
		fromAmino: (object: GetSyncingRequest) => ({ ...object }),
	},

	"/cosmos.base.tendermint.v1beta1.GetSyncingResponse": {
		aminoType: "cosmos-sdk/GetSyncingResponse",
		toAmino: (message: GetSyncingResponse) => ({ ...message }),
		fromAmino: (object: GetSyncingResponse) => ({ ...object }),
	},

	"/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest": {
		aminoType: "cosmos-sdk/GetNodeInfoRequest",
		toAmino: (message: GetNodeInfoRequest) => ({ ...message }),
		fromAmino: (object: GetNodeInfoRequest) => ({ ...object }),
	},

	"/cosmos.base.tendermint.v1beta1.VersionInfo": {
		aminoType: "cosmos-sdk/VersionInfo",
		toAmino: (message: VersionInfo) => ({ ...message }),
		fromAmino: (object: VersionInfo) => ({ ...object }),
	},

	"/cosmos.base.tendermint.v1beta1.Module": {
		aminoType: "cosmos-sdk/Module",
		toAmino: (message: Module) => ({ ...message }),
		fromAmino: (object: Module) => ({ ...object }),
	},
};

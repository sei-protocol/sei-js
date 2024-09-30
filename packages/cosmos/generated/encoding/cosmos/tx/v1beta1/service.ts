import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Block } from "../../../tendermint/types/block";

import { BlockID } from "../../../tendermint/types/types";

import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Tx } from "./tx";

import type {
	BroadcastTxRequest as BroadcastTxRequestType,
	BroadcastTxResponse as BroadcastTxResponseType,
	GetBlockWithTxsRequest as GetBlockWithTxsRequestType,
	GetBlockWithTxsResponse as GetBlockWithTxsResponseType,
	GetTxRequest as GetTxRequestType,
	GetTxResponse as GetTxResponseType,
	GetTxsEventRequest as GetTxsEventRequestType,
	GetTxsEventResponse as GetTxsEventResponseType,
	SimulateRequest as SimulateRequestType,
	SimulateResponse as SimulateResponseType,
} from "../../../../types/cosmos/tx/v1beta1";

import { BroadcastMode, OrderBy } from "../../../../types/cosmos/tx/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface GetTxsEventRequest extends GetTxsEventRequestType {}
interface GetTxsEventResponse extends GetTxsEventResponseType {}
interface BroadcastTxRequest extends BroadcastTxRequestType {}
interface BroadcastTxResponse extends BroadcastTxResponseType {}
interface SimulateRequest extends SimulateRequestType {}
interface SimulateResponse extends SimulateResponseType {}
interface GetTxRequest extends GetTxRequestType {}
interface GetTxResponse extends GetTxResponseType {}
interface GetBlockWithTxsRequest extends GetBlockWithTxsRequestType {}
interface GetBlockWithTxsResponse extends GetBlockWithTxsResponseType {}

export const GetTxsEventRequest: MessageFns<GetTxsEventRequest, "cosmos.tx.v1beta1.GetTxsEventRequest"> = {
	$type: "cosmos.tx.v1beta1.GetTxsEventRequest" as const,

	encode(message: GetTxsEventRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.events) {
			writer.uint32(10).string(v!);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		if (message.order_by !== 0) {
			writer.uint32(24).int32(message.order_by);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxsEventRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.events.push(reader.string());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.order_by = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxsEventRequest {
		return {
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => globalThis.String(e)) : [],
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
			order_by: isSet(object.order_by) ? orderByFromJSON(object.order_by) : 0,
		};
	},

	toJSON(message: GetTxsEventRequest): unknown {
		const obj: any = {};
		if (message.events?.length) {
			obj.events = message.events;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		if (message.order_by !== 0) {
			obj.order_by = orderByToJSON(message.order_by);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxsEventRequest>, I>>(base?: I): GetTxsEventRequest {
		return GetTxsEventRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxsEventRequest>, I>>(object: I): GetTxsEventRequest {
		const message = createBaseGetTxsEventRequest();
		message.events = object.events?.map((e) => e) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		message.order_by = object.order_by ?? 0;
		return message;
	},
};

export const GetTxsEventResponse: MessageFns<GetTxsEventResponse, "cosmos.tx.v1beta1.GetTxsEventResponse"> = {
	$type: "cosmos.tx.v1beta1.GetTxsEventResponse" as const,

	encode(message: GetTxsEventResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.txs) {
			Tx.encode(v!, writer.uint32(10).fork()).join();
		}
		for (const v of message.tx_responses) {
			TxResponse.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxsEventResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.txs.push(Tx.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_responses.push(TxResponse.decode(reader, reader.uint32()));
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

	fromJSON(object: any): GetTxsEventResponse {
		return {
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromJSON(e)) : [],
			tx_responses: globalThis.Array.isArray(object?.tx_responses) ? object.tx_responses.map((e: any) => TxResponse.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: GetTxsEventResponse): unknown {
		const obj: any = {};
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => Tx.toJSON(e));
		}
		if (message.tx_responses?.length) {
			obj.tx_responses = message.tx_responses.map((e) => TxResponse.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxsEventResponse>, I>>(base?: I): GetTxsEventResponse {
		return GetTxsEventResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxsEventResponse>, I>>(object: I): GetTxsEventResponse {
		const message = createBaseGetTxsEventResponse();
		message.txs = object.txs?.map((e) => Tx.fromPartial(e)) || [];
		message.tx_responses = object.tx_responses?.map((e) => TxResponse.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const BroadcastTxRequest: MessageFns<BroadcastTxRequest, "cosmos.tx.v1beta1.BroadcastTxRequest"> = {
	$type: "cosmos.tx.v1beta1.BroadcastTxRequest" as const,

	encode(message: BroadcastTxRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx_bytes.length !== 0) {
			writer.uint32(10).bytes(message.tx_bytes);
		}
		if (message.mode !== 0) {
			writer.uint32(16).int32(message.mode);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBroadcastTxRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx_bytes = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.mode = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BroadcastTxRequest {
		return {
			tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(0),
			mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0,
		};
	},

	toJSON(message: BroadcastTxRequest): unknown {
		const obj: any = {};
		if (message.tx_bytes.length !== 0) {
			obj.tx_bytes = base64FromBytes(message.tx_bytes);
		}
		if (message.mode !== 0) {
			obj.mode = broadcastModeToJSON(message.mode);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BroadcastTxRequest>, I>>(base?: I): BroadcastTxRequest {
		return BroadcastTxRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BroadcastTxRequest>, I>>(object: I): BroadcastTxRequest {
		const message = createBaseBroadcastTxRequest();
		message.tx_bytes = object.tx_bytes ?? new Uint8Array(0);
		message.mode = object.mode ?? 0;
		return message;
	},
};

export const BroadcastTxResponse: MessageFns<BroadcastTxResponse, "cosmos.tx.v1beta1.BroadcastTxResponse"> = {
	$type: "cosmos.tx.v1beta1.BroadcastTxResponse" as const,

	encode(message: BroadcastTxResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx_response !== undefined) {
			TxResponse.encode(message.tx_response, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBroadcastTxResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx_response = TxResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BroadcastTxResponse {
		return { tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined };
	},

	toJSON(message: BroadcastTxResponse): unknown {
		const obj: any = {};
		if (message.tx_response !== undefined) {
			obj.tx_response = TxResponse.toJSON(message.tx_response);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BroadcastTxResponse>, I>>(base?: I): BroadcastTxResponse {
		return BroadcastTxResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BroadcastTxResponse>, I>>(object: I): BroadcastTxResponse {
		const message = createBaseBroadcastTxResponse();
		message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
		return message;
	},
};

export const SimulateRequest: MessageFns<SimulateRequest, "cosmos.tx.v1beta1.SimulateRequest"> = {
	$type: "cosmos.tx.v1beta1.SimulateRequest" as const,

	encode(message: SimulateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx !== undefined) {
			Tx.encode(message.tx, writer.uint32(10).fork()).join();
		}
		if (message.tx_bytes.length !== 0) {
			writer.uint32(18).bytes(message.tx_bytes);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSimulateRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx = Tx.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_bytes = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SimulateRequest {
		return {
			tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
			tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(0),
		};
	},

	toJSON(message: SimulateRequest): unknown {
		const obj: any = {};
		if (message.tx !== undefined) {
			obj.tx = Tx.toJSON(message.tx);
		}
		if (message.tx_bytes.length !== 0) {
			obj.tx_bytes = base64FromBytes(message.tx_bytes);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SimulateRequest>, I>>(base?: I): SimulateRequest {
		return SimulateRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SimulateRequest>, I>>(object: I): SimulateRequest {
		const message = createBaseSimulateRequest();
		message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
		message.tx_bytes = object.tx_bytes ?? new Uint8Array(0);
		return message;
	},
};

export const SimulateResponse: MessageFns<SimulateResponse, "cosmos.tx.v1beta1.SimulateResponse"> = {
	$type: "cosmos.tx.v1beta1.SimulateResponse" as const,

	encode(message: SimulateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.gas_info !== undefined) {
			GasInfo.encode(message.gas_info, writer.uint32(10).fork()).join();
		}
		if (message.result !== undefined) {
			Result.encode(message.result, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSimulateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.gas_info = GasInfo.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.result = Result.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SimulateResponse {
		return {
			gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
			result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
		};
	},

	toJSON(message: SimulateResponse): unknown {
		const obj: any = {};
		if (message.gas_info !== undefined) {
			obj.gas_info = GasInfo.toJSON(message.gas_info);
		}
		if (message.result !== undefined) {
			obj.result = Result.toJSON(message.result);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SimulateResponse>, I>>(base?: I): SimulateResponse {
		return SimulateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SimulateResponse>, I>>(object: I): SimulateResponse {
		const message = createBaseSimulateResponse();
		message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
		message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
		return message;
	},
};

export const GetTxRequest: MessageFns<GetTxRequest, "cosmos.tx.v1beta1.GetTxRequest"> = {
	$type: "cosmos.tx.v1beta1.GetTxRequest" as const,

	encode(message: GetTxRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash !== "") {
			writer.uint32(10).string(message.hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.hash = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxRequest {
		return { hash: isSet(object.hash) ? globalThis.String(object.hash) : "" };
	},

	toJSON(message: GetTxRequest): unknown {
		const obj: any = {};
		if (message.hash !== "") {
			obj.hash = message.hash;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxRequest>, I>>(base?: I): GetTxRequest {
		return GetTxRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxRequest>, I>>(object: I): GetTxRequest {
		const message = createBaseGetTxRequest();
		message.hash = object.hash ?? "";
		return message;
	},
};

export const GetTxResponse: MessageFns<GetTxResponse, "cosmos.tx.v1beta1.GetTxResponse"> = {
	$type: "cosmos.tx.v1beta1.GetTxResponse" as const,

	encode(message: GetTxResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx !== undefined) {
			Tx.encode(message.tx, writer.uint32(10).fork()).join();
		}
		if (message.tx_response !== undefined) {
			TxResponse.encode(message.tx_response, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx = Tx.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_response = TxResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxResponse {
		return {
			tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
			tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined,
		};
	},

	toJSON(message: GetTxResponse): unknown {
		const obj: any = {};
		if (message.tx !== undefined) {
			obj.tx = Tx.toJSON(message.tx);
		}
		if (message.tx_response !== undefined) {
			obj.tx_response = TxResponse.toJSON(message.tx_response);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxResponse>, I>>(base?: I): GetTxResponse {
		return GetTxResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxResponse>, I>>(object: I): GetTxResponse {
		const message = createBaseGetTxResponse();
		message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
		message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
		return message;
	},
};

export const GetBlockWithTxsRequest: MessageFns<GetBlockWithTxsRequest, "cosmos.tx.v1beta1.GetBlockWithTxsRequest"> = {
	$type: "cosmos.tx.v1beta1.GetBlockWithTxsRequest" as const,

	encode(message: GetBlockWithTxsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetBlockWithTxsRequest();
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

	fromJSON(object: any): GetBlockWithTxsRequest {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: GetBlockWithTxsRequest): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetBlockWithTxsRequest>, I>>(base?: I): GetBlockWithTxsRequest {
		return GetBlockWithTxsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetBlockWithTxsRequest>, I>>(object: I): GetBlockWithTxsRequest {
		const message = createBaseGetBlockWithTxsRequest();
		message.height = object.height ?? 0;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const GetBlockWithTxsResponse: MessageFns<GetBlockWithTxsResponse, "cosmos.tx.v1beta1.GetBlockWithTxsResponse"> = {
	$type: "cosmos.tx.v1beta1.GetBlockWithTxsResponse" as const,

	encode(message: GetBlockWithTxsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.txs) {
			Tx.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.block_id !== undefined) {
			BlockID.encode(message.block_id, writer.uint32(18).fork()).join();
		}
		if (message.block !== undefined) {
			Block.encode(message.block, writer.uint32(26).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetBlockWithTxsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.txs.push(Tx.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.block_id = BlockID.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.block = Block.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
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

	fromJSON(object: any): GetBlockWithTxsResponse {
		return {
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromJSON(e)) : [],
			block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
			block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: GetBlockWithTxsResponse): unknown {
		const obj: any = {};
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => Tx.toJSON(e));
		}
		if (message.block_id !== undefined) {
			obj.block_id = BlockID.toJSON(message.block_id);
		}
		if (message.block !== undefined) {
			obj.block = Block.toJSON(message.block);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetBlockWithTxsResponse>, I>>(base?: I): GetBlockWithTxsResponse {
		return GetBlockWithTxsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetBlockWithTxsResponse>, I>>(object: I): GetBlockWithTxsResponse {
		const message = createBaseGetBlockWithTxsResponse();
		message.txs = object.txs?.map((e) => Tx.fromPartial(e)) || [];
		message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
		message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export function orderByFromJSON(object: any): OrderBy {
	switch (object) {
		case 0:
		case "ORDER_BY_UNSPECIFIED":
			return OrderBy.ORDER_BY_UNSPECIFIED;
		case 1:
		case "ORDER_BY_ASC":
			return OrderBy.ORDER_BY_ASC;
		case 2:
		case "ORDER_BY_DESC":
			return OrderBy.ORDER_BY_DESC;
		case -1:
		case "UNRECOGNIZED":
		default:
			return OrderBy.UNRECOGNIZED;
	}
}

export function orderByToJSON(object: OrderBy): string {
	switch (object) {
		case OrderBy.ORDER_BY_UNSPECIFIED:
			return "ORDER_BY_UNSPECIFIED";
		case OrderBy.ORDER_BY_ASC:
			return "ORDER_BY_ASC";
		case OrderBy.ORDER_BY_DESC:
			return "ORDER_BY_DESC";
		case OrderBy.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function broadcastModeFromJSON(object: any): BroadcastMode {
	switch (object) {
		case 0:
		case "BROADCAST_MODE_UNSPECIFIED":
			return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
		case 1:
		case "BROADCAST_MODE_BLOCK":
			return BroadcastMode.BROADCAST_MODE_BLOCK;
		case 2:
		case "BROADCAST_MODE_SYNC":
			return BroadcastMode.BROADCAST_MODE_SYNC;
		case 3:
		case "BROADCAST_MODE_ASYNC":
			return BroadcastMode.BROADCAST_MODE_ASYNC;
		case -1:
		case "UNRECOGNIZED":
		default:
			return BroadcastMode.UNRECOGNIZED;
	}
}

export function broadcastModeToJSON(object: BroadcastMode): string {
	switch (object) {
		case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
			return "BROADCAST_MODE_UNSPECIFIED";
		case BroadcastMode.BROADCAST_MODE_BLOCK:
			return "BROADCAST_MODE_BLOCK";
		case BroadcastMode.BROADCAST_MODE_SYNC:
			return "BROADCAST_MODE_SYNC";
		case BroadcastMode.BROADCAST_MODE_ASYNC:
			return "BROADCAST_MODE_ASYNC";
		case BroadcastMode.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

function createBaseGetTxsEventRequest(): GetTxsEventRequest {
	return { events: [], pagination: undefined, order_by: 0 };
}

function createBaseGetTxsEventResponse(): GetTxsEventResponse {
	return { txs: [], tx_responses: [], pagination: undefined };
}

function createBaseBroadcastTxRequest(): BroadcastTxRequest {
	return { tx_bytes: new Uint8Array(0), mode: 0 };
}

function createBaseBroadcastTxResponse(): BroadcastTxResponse {
	return { tx_response: undefined };
}

function createBaseSimulateRequest(): SimulateRequest {
	return { tx: undefined, tx_bytes: new Uint8Array(0) };
}

function createBaseSimulateResponse(): SimulateResponse {
	return { gas_info: undefined, result: undefined };
}

function createBaseGetTxRequest(): GetTxRequest {
	return { hash: "" };
}

function createBaseGetTxResponse(): GetTxResponse {
	return { tx: undefined, tx_response: undefined };
}

function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
	return { height: 0, pagination: undefined };
}

function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
	return { txs: [], block_id: undefined, block: undefined, pagination: undefined };
}

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
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
	["/cosmos.tx.v1beta1.GetTxsEventRequest", GetTxsEventRequest as never],
	["/cosmos.tx.v1beta1.GetTxsEventResponse", GetTxsEventResponse as never],
	["/cosmos.tx.v1beta1.BroadcastTxRequest", BroadcastTxRequest as never],
	["/cosmos.tx.v1beta1.BroadcastTxResponse", BroadcastTxResponse as never],
	["/cosmos.tx.v1beta1.SimulateRequest", SimulateRequest as never],
	["/cosmos.tx.v1beta1.SimulateResponse", SimulateResponse as never],
	["/cosmos.tx.v1beta1.GetTxRequest", GetTxRequest as never],
	["/cosmos.tx.v1beta1.GetTxResponse", GetTxResponse as never],
	["/cosmos.tx.v1beta1.GetBlockWithTxsRequest", GetBlockWithTxsRequest as never],
	["/cosmos.tx.v1beta1.GetBlockWithTxsResponse", GetBlockWithTxsResponse as never],
];
export const aminoConverters = {
	"/cosmos.tx.v1beta1.GetTxsEventRequest": {
		aminoType: "cosmos-sdk/GetTxsEventRequest",
		toAmino: (message: GetTxsEventRequest) => ({ ...message }),
		fromAmino: (object: GetTxsEventRequest) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.GetTxsEventResponse": {
		aminoType: "cosmos-sdk/GetTxsEventResponse",
		toAmino: (message: GetTxsEventResponse) => ({ ...message }),
		fromAmino: (object: GetTxsEventResponse) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.BroadcastTxRequest": {
		aminoType: "cosmos-sdk/BroadcastTxRequest",
		toAmino: (message: BroadcastTxRequest) => ({ ...message }),
		fromAmino: (object: BroadcastTxRequest) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.BroadcastTxResponse": {
		aminoType: "cosmos-sdk/BroadcastTxResponse",
		toAmino: (message: BroadcastTxResponse) => ({ ...message }),
		fromAmino: (object: BroadcastTxResponse) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.SimulateRequest": {
		aminoType: "cosmos-sdk/SimulateRequest",
		toAmino: (message: SimulateRequest) => ({ ...message }),
		fromAmino: (object: SimulateRequest) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.SimulateResponse": {
		aminoType: "cosmos-sdk/SimulateResponse",
		toAmino: (message: SimulateResponse) => ({ ...message }),
		fromAmino: (object: SimulateResponse) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.GetTxRequest": {
		aminoType: "cosmos-sdk/GetTxRequest",
		toAmino: (message: GetTxRequest) => ({ ...message }),
		fromAmino: (object: GetTxRequest) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.GetTxResponse": {
		aminoType: "cosmos-sdk/GetTxResponse",
		toAmino: (message: GetTxResponse) => ({ ...message }),
		fromAmino: (object: GetTxResponse) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.GetBlockWithTxsRequest": {
		aminoType: "cosmos-sdk/GetBlockWithTxsRequest",
		toAmino: (message: GetBlockWithTxsRequest) => ({ ...message }),
		fromAmino: (object: GetBlockWithTxsRequest) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.GetBlockWithTxsResponse": {
		aminoType: "cosmos-sdk/GetBlockWithTxsResponse",
		toAmino: (message: GetBlockWithTxsResponse) => ({ ...message }),
		fromAmino: (object: GetBlockWithTxsResponse) => ({ ...object }),
	},
};

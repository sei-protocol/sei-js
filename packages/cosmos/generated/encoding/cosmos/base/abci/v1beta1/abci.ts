import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../../google/protobuf/any";

import { Event } from "../../../../tendermint/abci/types";

import type {
	ABCIMessageLog as ABCIMessageLog_type,
	Attribute as Attribute_type,
	GasInfo as GasInfo_type,
	MsgData as MsgData_type,
	Result as Result_type,
	SearchTxsResult as SearchTxsResult_type,
	SimulationResponse as SimulationResponse_type,
	StringEvent as StringEvent_type,
	TxMsgData as TxMsgData_type,
	TxResponse as TxResponse_type,
} from "../../../../../types/cosmos/base/abci/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface TxResponse extends TxResponse_type {}
export interface ABCIMessageLog extends ABCIMessageLog_type {}
export interface StringEvent extends StringEvent_type {}
export interface Attribute extends Attribute_type {}
export interface GasInfo extends GasInfo_type {}
export interface Result extends Result_type {}
export interface SimulationResponse extends SimulationResponse_type {}
export interface MsgData extends MsgData_type {}
export interface TxMsgData extends TxMsgData_type {}
export interface SearchTxsResult extends SearchTxsResult_type {}

export const TxResponse: MessageFns<TxResponse, "cosmos.base.abci.v1beta1.TxResponse"> = {
	$type: "cosmos.base.abci.v1beta1.TxResponse" as const,

	encode(message: TxResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		if (message.txhash !== "") {
			writer.uint32(18).string(message.txhash);
		}
		if (message.codespace !== "") {
			writer.uint32(26).string(message.codespace);
		}
		if (message.code !== 0) {
			writer.uint32(32).uint32(message.code);
		}
		if (message.data !== "") {
			writer.uint32(42).string(message.data);
		}
		if (message.raw_log !== "") {
			writer.uint32(50).string(message.raw_log);
		}
		for (const v of message.logs) {
			ABCIMessageLog.encode(v!, writer.uint32(58).fork()).join();
		}
		if (message.info !== "") {
			writer.uint32(66).string(message.info);
		}
		if (message.gas_wanted !== 0) {
			writer.uint32(72).int64(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			writer.uint32(80).int64(message.gas_used);
		}
		if (message.tx !== undefined) {
			Any.encode(message.tx, writer.uint32(90).fork()).join();
		}
		if (message.timestamp !== "") {
			writer.uint32(98).string(message.timestamp);
		}
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(106).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxResponse();
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

					message.txhash = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.codespace = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.code = reader.uint32();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.data = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.raw_log = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.info = reader.string();
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.gas_wanted = longToNumber(reader.int64());
					continue;
				case 10:
					if (tag !== 80) {
						break;
					}

					message.gas_used = longToNumber(reader.int64());
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.tx = Any.decode(reader, reader.uint32());
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.timestamp = reader.string();
					continue;
				case 13:
					if (tag !== 106) {
						break;
					}

					message.events.push(Event.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxResponse {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			txhash: isSet(object.txhash) ? globalThis.String(object.txhash) : "",
			codespace: isSet(object.codespace) ? globalThis.String(object.codespace) : "",
			code: isSet(object.code) ? globalThis.Number(object.code) : 0,
			data: isSet(object.data) ? globalThis.String(object.data) : "",
			raw_log: isSet(object.raw_log) ? globalThis.String(object.raw_log) : "",
			logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromJSON(e)) : [],
			info: isSet(object.info) ? globalThis.String(object.info) : "",
			gas_wanted: isSet(object.gas_wanted) ? globalThis.Number(object.gas_wanted) : 0,
			gas_used: isSet(object.gas_used) ? globalThis.Number(object.gas_used) : 0,
			tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
			timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "",
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
		};
	},

	toJSON(message: TxResponse): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.txhash !== "") {
			obj.txhash = message.txhash;
		}
		if (message.codespace !== "") {
			obj.codespace = message.codespace;
		}
		if (message.code !== 0) {
			obj.code = Math.round(message.code);
		}
		if (message.data !== "") {
			obj.data = message.data;
		}
		if (message.raw_log !== "") {
			obj.raw_log = message.raw_log;
		}
		if (message.logs?.length) {
			obj.logs = message.logs.map((e) => ABCIMessageLog.toJSON(e));
		}
		if (message.info !== "") {
			obj.info = message.info;
		}
		if (message.gas_wanted !== 0) {
			obj.gas_wanted = Math.round(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			obj.gas_used = Math.round(message.gas_used);
		}
		if (message.tx !== undefined) {
			obj.tx = Any.toJSON(message.tx);
		}
		if (message.timestamp !== "") {
			obj.timestamp = message.timestamp;
		}
		if (message.events?.length) {
			obj.events = message.events.map((e) => Event.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxResponse>, I>>(base?: I): TxResponse {
		return TxResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxResponse>, I>>(object: I): TxResponse {
		const message = createBaseTxResponse();
		message.height = object.height ?? 0;
		message.txhash = object.txhash ?? "";
		message.codespace = object.codespace ?? "";
		message.code = object.code ?? 0;
		message.data = object.data ?? "";
		message.raw_log = object.raw_log ?? "";
		message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
		message.info = object.info ?? "";
		message.gas_wanted = object.gas_wanted ?? 0;
		message.gas_used = object.gas_used ?? 0;
		message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
		message.timestamp = object.timestamp ?? "";
		message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
		return message;
	},
};

export const ABCIMessageLog: MessageFns<ABCIMessageLog, "cosmos.base.abci.v1beta1.ABCIMessageLog"> = {
	$type: "cosmos.base.abci.v1beta1.ABCIMessageLog" as const,

	encode(message: ABCIMessageLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.msg_index !== 0) {
			writer.uint32(8).uint32(message.msg_index);
		}
		if (message.log !== "") {
			writer.uint32(18).string(message.log);
		}
		for (const v of message.events) {
			StringEvent.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ABCIMessageLog {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseABCIMessageLog();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.msg_index = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.log = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.events.push(StringEvent.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ABCIMessageLog {
		return {
			msg_index: isSet(object.msg_index) ? globalThis.Number(object.msg_index) : 0,
			log: isSet(object.log) ? globalThis.String(object.log) : "",
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromJSON(e)) : [],
		};
	},

	toJSON(message: ABCIMessageLog): unknown {
		const obj: any = {};
		if (message.msg_index !== 0) {
			obj.msg_index = Math.round(message.msg_index);
		}
		if (message.log !== "") {
			obj.log = message.log;
		}
		if (message.events?.length) {
			obj.events = message.events.map((e) => StringEvent.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ABCIMessageLog>, I>>(base?: I): ABCIMessageLog {
		return ABCIMessageLog.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ABCIMessageLog>, I>>(object: I): ABCIMessageLog {
		const message = createBaseABCIMessageLog();
		message.msg_index = object.msg_index ?? 0;
		message.log = object.log ?? "";
		message.events = object.events?.map((e) => StringEvent.fromPartial(e)) || [];
		return message;
	},
};

export const StringEvent: MessageFns<StringEvent, "cosmos.base.abci.v1beta1.StringEvent"> = {
	$type: "cosmos.base.abci.v1beta1.StringEvent" as const,

	encode(message: StringEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.type !== "") {
			writer.uint32(10).string(message.type);
		}
		for (const v of message.attributes) {
			Attribute.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): StringEvent {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStringEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.type = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.attributes.push(Attribute.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): StringEvent {
		return {
			type: isSet(object.type) ? globalThis.String(object.type) : "",
			attributes: globalThis.Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
		};
	},

	toJSON(message: StringEvent): unknown {
		const obj: any = {};
		if (message.type !== "") {
			obj.type = message.type;
		}
		if (message.attributes?.length) {
			obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StringEvent>, I>>(base?: I): StringEvent {
		return StringEvent.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StringEvent>, I>>(object: I): StringEvent {
		const message = createBaseStringEvent();
		message.type = object.type ?? "";
		message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
		return message;
	},
};

export const Attribute: MessageFns<Attribute, "cosmos.base.abci.v1beta1.Attribute"> = {
	$type: "cosmos.base.abci.v1beta1.Attribute" as const,

	encode(message: Attribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key !== "") {
			writer.uint32(10).string(message.key);
		}
		if (message.value !== "") {
			writer.uint32(18).string(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Attribute {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAttribute();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.value = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Attribute {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.String(object.value) : "",
		};
	},

	toJSON(message: Attribute): unknown {
		const obj: any = {};
		if (message.key !== "") {
			obj.key = message.key;
		}
		if (message.value !== "") {
			obj.value = message.value;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Attribute>, I>>(base?: I): Attribute {
		return Attribute.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
		const message = createBaseAttribute();
		message.key = object.key ?? "";
		message.value = object.value ?? "";
		return message;
	},
};

export const GasInfo: MessageFns<GasInfo, "cosmos.base.abci.v1beta1.GasInfo"> = {
	$type: "cosmos.base.abci.v1beta1.GasInfo" as const,

	encode(message: GasInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.gas_wanted !== 0) {
			writer.uint32(8).uint64(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			writer.uint32(16).uint64(message.gas_used);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GasInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGasInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.gas_wanted = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.gas_used = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GasInfo {
		return {
			gas_wanted: isSet(object.gas_wanted) ? globalThis.Number(object.gas_wanted) : 0,
			gas_used: isSet(object.gas_used) ? globalThis.Number(object.gas_used) : 0,
		};
	},

	toJSON(message: GasInfo): unknown {
		const obj: any = {};
		if (message.gas_wanted !== 0) {
			obj.gas_wanted = Math.round(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			obj.gas_used = Math.round(message.gas_used);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GasInfo>, I>>(base?: I): GasInfo {
		return GasInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GasInfo>, I>>(object: I): GasInfo {
		const message = createBaseGasInfo();
		message.gas_wanted = object.gas_wanted ?? 0;
		message.gas_used = object.gas_used ?? 0;
		return message;
	},
};

export const Result: MessageFns<Result, "cosmos.base.abci.v1beta1.Result"> = {
	$type: "cosmos.base.abci.v1beta1.Result" as const,

	encode(message: Result, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.data.length !== 0) {
			writer.uint32(10).bytes(message.data);
		}
		if (message.log !== "") {
			writer.uint32(18).string(message.log);
		}
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.evmError !== "") {
			writer.uint32(34).string(message.evmError);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Result {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.log = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.events.push(Event.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.evmError = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Result {
		return {
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			log: isSet(object.log) ? globalThis.String(object.log) : "",
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
			evmError: isSet(object.evmError) ? globalThis.String(object.evmError) : "",
		};
	},

	toJSON(message: Result): unknown {
		const obj: any = {};
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.log !== "") {
			obj.log = message.log;
		}
		if (message.events?.length) {
			obj.events = message.events.map((e) => Event.toJSON(e));
		}
		if (message.evmError !== "") {
			obj.evmError = message.evmError;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Result>, I>>(base?: I): Result {
		return Result.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
		const message = createBaseResult();
		message.data = object.data ?? new Uint8Array(0);
		message.log = object.log ?? "";
		message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
		message.evmError = object.evmError ?? "";
		return message;
	},
};

export const SimulationResponse: MessageFns<SimulationResponse, "cosmos.base.abci.v1beta1.SimulationResponse"> = {
	$type: "cosmos.base.abci.v1beta1.SimulationResponse" as const,

	encode(message: SimulationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.gas_info !== undefined) {
			GasInfo.encode(message.gas_info, writer.uint32(10).fork()).join();
		}
		if (message.result !== undefined) {
			Result.encode(message.result, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SimulationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSimulationResponse();
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

	fromJSON(object: any): SimulationResponse {
		return {
			gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
			result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
		};
	},

	toJSON(message: SimulationResponse): unknown {
		const obj: any = {};
		if (message.gas_info !== undefined) {
			obj.gas_info = GasInfo.toJSON(message.gas_info);
		}
		if (message.result !== undefined) {
			obj.result = Result.toJSON(message.result);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SimulationResponse>, I>>(base?: I): SimulationResponse {
		return SimulationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SimulationResponse>, I>>(object: I): SimulationResponse {
		const message = createBaseSimulationResponse();
		message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
		message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
		return message;
	},
};

export const MsgData: MessageFns<MsgData, "cosmos.base.abci.v1beta1.MsgData"> = {
	$type: "cosmos.base.abci.v1beta1.MsgData" as const,

	encode(message: MsgData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.msg_type !== "") {
			writer.uint32(10).string(message.msg_type);
		}
		if (message.data.length !== 0) {
			writer.uint32(18).bytes(message.data);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgData {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.msg_type = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgData {
		return {
			msg_type: isSet(object.msg_type) ? globalThis.String(object.msg_type) : "",
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
		};
	},

	toJSON(message: MsgData): unknown {
		const obj: any = {};
		if (message.msg_type !== "") {
			obj.msg_type = message.msg_type;
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgData>, I>>(base?: I): MsgData {
		return MsgData.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgData>, I>>(object: I): MsgData {
		const message = createBaseMsgData();
		message.msg_type = object.msg_type ?? "";
		message.data = object.data ?? new Uint8Array(0);
		return message;
	},
};

export const TxMsgData: MessageFns<TxMsgData, "cosmos.base.abci.v1beta1.TxMsgData"> = {
	$type: "cosmos.base.abci.v1beta1.TxMsgData" as const,

	encode(message: TxMsgData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.data) {
			MsgData.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxMsgData {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxMsgData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data.push(MsgData.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxMsgData {
		return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromJSON(e)) : [] };
	},

	toJSON(message: TxMsgData): unknown {
		const obj: any = {};
		if (message.data?.length) {
			obj.data = message.data.map((e) => MsgData.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxMsgData>, I>>(base?: I): TxMsgData {
		return TxMsgData.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxMsgData>, I>>(object: I): TxMsgData {
		const message = createBaseTxMsgData();
		message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
		return message;
	},
};

export const SearchTxsResult: MessageFns<SearchTxsResult, "cosmos.base.abci.v1beta1.SearchTxsResult"> = {
	$type: "cosmos.base.abci.v1beta1.SearchTxsResult" as const,

	encode(message: SearchTxsResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.total_count !== 0) {
			writer.uint32(8).uint64(message.total_count);
		}
		if (message.count !== 0) {
			writer.uint32(16).uint64(message.count);
		}
		if (message.page_number !== 0) {
			writer.uint32(24).uint64(message.page_number);
		}
		if (message.page_total !== 0) {
			writer.uint32(32).uint64(message.page_total);
		}
		if (message.limit !== 0) {
			writer.uint32(40).uint64(message.limit);
		}
		for (const v of message.txs) {
			TxResponse.encode(v!, writer.uint32(50).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SearchTxsResult {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSearchTxsResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.total_count = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.count = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.page_number = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.page_total = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.limit = longToNumber(reader.uint64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.txs.push(TxResponse.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SearchTxsResult {
		return {
			total_count: isSet(object.total_count) ? globalThis.Number(object.total_count) : 0,
			count: isSet(object.count) ? globalThis.Number(object.count) : 0,
			page_number: isSet(object.page_number) ? globalThis.Number(object.page_number) : 0,
			page_total: isSet(object.page_total) ? globalThis.Number(object.page_total) : 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromJSON(e)) : [],
		};
	},

	toJSON(message: SearchTxsResult): unknown {
		const obj: any = {};
		if (message.total_count !== 0) {
			obj.total_count = Math.round(message.total_count);
		}
		if (message.count !== 0) {
			obj.count = Math.round(message.count);
		}
		if (message.page_number !== 0) {
			obj.page_number = Math.round(message.page_number);
		}
		if (message.page_total !== 0) {
			obj.page_total = Math.round(message.page_total);
		}
		if (message.limit !== 0) {
			obj.limit = Math.round(message.limit);
		}
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => TxResponse.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SearchTxsResult>, I>>(base?: I): SearchTxsResult {
		return SearchTxsResult.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SearchTxsResult>, I>>(object: I): SearchTxsResult {
		const message = createBaseSearchTxsResult();
		message.total_count = object.total_count ?? 0;
		message.count = object.count ?? 0;
		message.page_number = object.page_number ?? 0;
		message.page_total = object.page_total ?? 0;
		message.limit = object.limit ?? 0;
		message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
		return message;
	},
};

function createBaseTxResponse(): TxResponse {
	return {
		height: 0,
		txhash: "",
		codespace: "",
		code: 0,
		data: "",
		raw_log: "",
		logs: [],
		info: "",
		gas_wanted: 0,
		gas_used: 0,
		tx: undefined,
		timestamp: "",
		events: [],
	};
}

function createBaseABCIMessageLog(): ABCIMessageLog {
	return { msg_index: 0, log: "", events: [] };
}

function createBaseStringEvent(): StringEvent {
	return { type: "", attributes: [] };
}

function createBaseAttribute(): Attribute {
	return { key: "", value: "" };
}

function createBaseGasInfo(): GasInfo {
	return { gas_wanted: 0, gas_used: 0 };
}

function createBaseResult(): Result {
	return { data: new Uint8Array(0), log: "", events: [], evmError: "" };
}

function createBaseSimulationResponse(): SimulationResponse {
	return { gas_info: undefined, result: undefined };
}

function createBaseMsgData(): MsgData {
	return { msg_type: "", data: new Uint8Array(0) };
}

function createBaseTxMsgData(): TxMsgData {
	return { data: [] };
}

function createBaseSearchTxsResult(): SearchTxsResult {
	return { total_count: 0, count: 0, page_number: 0, page_total: 0, limit: 0, txs: [] };
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
	["/cosmos.base.abci.v1beta1.TxResponse", TxResponse as never],
	["/cosmos.base.abci.v1beta1.ABCIMessageLog", ABCIMessageLog as never],
	["/cosmos.base.abci.v1beta1.StringEvent", StringEvent as never],
	["/cosmos.base.abci.v1beta1.Attribute", Attribute as never],
	["/cosmos.base.abci.v1beta1.GasInfo", GasInfo as never],
	["/cosmos.base.abci.v1beta1.Result", Result as never],
	["/cosmos.base.abci.v1beta1.SimulationResponse", SimulationResponse as never],
	["/cosmos.base.abci.v1beta1.MsgData", MsgData as never],
	["/cosmos.base.abci.v1beta1.TxMsgData", TxMsgData as never],
	["/cosmos.base.abci.v1beta1.SearchTxsResult", SearchTxsResult as never],
];
export const aminoConverters = {
	"/cosmos.base.abci.v1beta1.TxResponse": {
		aminoType: "cosmos-sdk/TxResponse",
		toAmino: (message: TxResponse) => ({ ...message }),
		fromAmino: (object: TxResponse) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.ABCIMessageLog": {
		aminoType: "cosmos-sdk/ABCIMessageLog",
		toAmino: (message: ABCIMessageLog) => ({ ...message }),
		fromAmino: (object: ABCIMessageLog) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.StringEvent": {
		aminoType: "cosmos-sdk/StringEvent",
		toAmino: (message: StringEvent) => ({ ...message }),
		fromAmino: (object: StringEvent) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.Attribute": {
		aminoType: "cosmos-sdk/Attribute",
		toAmino: (message: Attribute) => ({ ...message }),
		fromAmino: (object: Attribute) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.GasInfo": {
		aminoType: "cosmos-sdk/GasInfo",
		toAmino: (message: GasInfo) => ({ ...message }),
		fromAmino: (object: GasInfo) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.Result": {
		aminoType: "cosmos-sdk/Result",
		toAmino: (message: Result) => ({ ...message }),
		fromAmino: (object: Result) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.SimulationResponse": {
		aminoType: "cosmos-sdk/SimulationResponse",
		toAmino: (message: SimulationResponse) => ({ ...message }),
		fromAmino: (object: SimulationResponse) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.MsgData": {
		aminoType: "cosmos-sdk/MsgData",
		toAmino: (message: MsgData) => ({ ...message }),
		fromAmino: (object: MsgData) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.TxMsgData": {
		aminoType: "cosmos-sdk/TxMsgData",
		toAmino: (message: TxMsgData) => ({ ...message }),
		fromAmino: (object: TxMsgData) => ({ ...object }),
	},

	"/cosmos.base.abci.v1beta1.SearchTxsResult": {
		aminoType: "cosmos-sdk/SearchTxsResult",
		toAmino: (message: SearchTxsResult) => ({ ...message }),
		fromAmino: (object: SearchTxsResult) => ({ ...object }),
	},
};
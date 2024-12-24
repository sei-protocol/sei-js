import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Timestamp } from "../../../google/protobuf/timestamp";

import { Coin } from "../../base/v1beta1/coin";

import { CommissionRates, Description } from "./staking";

import type {
	MsgBeginRedelegateResponse as MsgBeginRedelegateResponse_type,
	MsgBeginRedelegate as MsgBeginRedelegate_type,
	MsgCreateValidatorResponse as MsgCreateValidatorResponse_type,
	MsgCreateValidator as MsgCreateValidator_type,
	MsgDelegateResponse as MsgDelegateResponse_type,
	MsgDelegate as MsgDelegate_type,
	MsgEditValidatorResponse as MsgEditValidatorResponse_type,
	MsgEditValidator as MsgEditValidator_type,
	MsgUndelegateResponse as MsgUndelegateResponse_type,
	MsgUndelegate as MsgUndelegate_type,
} from "../../../../types/cosmos/staking/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgCreateValidator extends MsgCreateValidator_type {}
export interface MsgCreateValidatorResponse extends MsgCreateValidatorResponse_type {}
export interface MsgEditValidator extends MsgEditValidator_type {}
export interface MsgEditValidatorResponse extends MsgEditValidatorResponse_type {}
export interface MsgDelegate extends MsgDelegate_type {}
export interface MsgDelegateResponse extends MsgDelegateResponse_type {}
export interface MsgBeginRedelegate extends MsgBeginRedelegate_type {}
export interface MsgBeginRedelegateResponse extends MsgBeginRedelegateResponse_type {}
export interface MsgUndelegate extends MsgUndelegate_type {}
export interface MsgUndelegateResponse extends MsgUndelegateResponse_type {}

export const MsgCreateValidator: MessageFns<MsgCreateValidator, "cosmos.staking.v1beta1.MsgCreateValidator"> = {
	$type: "cosmos.staking.v1beta1.MsgCreateValidator" as const,

	encode(message: MsgCreateValidator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.description !== undefined) {
			Description.encode(message.description, writer.uint32(10).fork()).join();
		}
		if (message.commission !== undefined) {
			CommissionRates.encode(message.commission, writer.uint32(18).fork()).join();
		}
		if (message.min_self_delegation !== "") {
			writer.uint32(26).string(message.min_self_delegation);
		}
		if (message.delegator_address !== "") {
			writer.uint32(34).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(42).string(message.validator_address);
		}
		if (message.pubkey !== undefined) {
			Any.encode(message.pubkey, writer.uint32(50).fork()).join();
		}
		if (message.value !== undefined) {
			Coin.encode(message.value, writer.uint32(58).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidator {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCreateValidator();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.description = Description.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.commission = CommissionRates.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.min_self_delegation = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.pubkey = Any.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.value = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgCreateValidator {
		return {
			description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
			commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
			min_self_delegation: isSet(object.min_self_delegation) ? globalThis.String(object.min_self_delegation) : "",
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
			value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
		};
	},

	toJSON(message: MsgCreateValidator): unknown {
		const obj: any = {};
		if (message.description !== undefined) {
			obj.description = Description.toJSON(message.description);
		}
		if (message.commission !== undefined) {
			obj.commission = CommissionRates.toJSON(message.commission);
		}
		if (message.min_self_delegation !== "") {
			obj.min_self_delegation = message.min_self_delegation;
		}
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.pubkey !== undefined) {
			obj.pubkey = Any.toJSON(message.pubkey);
		}
		if (message.value !== undefined) {
			obj.value = Coin.toJSON(message.value);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(base?: I): MsgCreateValidator {
		return MsgCreateValidator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(object: I): MsgCreateValidator {
		const message = createBaseMsgCreateValidator();
		message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
		message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
		message.min_self_delegation = object.min_self_delegation ?? "";
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
		message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
		return message;
	},
};

export const MsgCreateValidatorResponse: MessageFns<MsgCreateValidatorResponse, "cosmos.staking.v1beta1.MsgCreateValidatorResponse"> = {
	$type: "cosmos.staking.v1beta1.MsgCreateValidatorResponse" as const,

	encode(_: MsgCreateValidatorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidatorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCreateValidatorResponse();
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

	fromJSON(_: any): MsgCreateValidatorResponse {
		return {};
	},

	toJSON(_: MsgCreateValidatorResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCreateValidatorResponse>, I>>(base?: I): MsgCreateValidatorResponse {
		return MsgCreateValidatorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorResponse>, I>>(_: I): MsgCreateValidatorResponse {
		const message = createBaseMsgCreateValidatorResponse();
		return message;
	},
};

export const MsgEditValidator: MessageFns<MsgEditValidator, "cosmos.staking.v1beta1.MsgEditValidator"> = {
	$type: "cosmos.staking.v1beta1.MsgEditValidator" as const,

	encode(message: MsgEditValidator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.description !== undefined) {
			Description.encode(message.description, writer.uint32(10).fork()).join();
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		if (message.commission_rate !== "") {
			writer.uint32(26).string(message.commission_rate);
		}
		if (message.min_self_delegation !== "") {
			writer.uint32(34).string(message.min_self_delegation);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidator {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgEditValidator();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.description = Description.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.commission_rate = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.min_self_delegation = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgEditValidator {
		return {
			description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			commission_rate: isSet(object.commission_rate) ? globalThis.String(object.commission_rate) : "",
			min_self_delegation: isSet(object.min_self_delegation) ? globalThis.String(object.min_self_delegation) : "",
		};
	},

	toJSON(message: MsgEditValidator): unknown {
		const obj: any = {};
		if (message.description !== undefined) {
			obj.description = Description.toJSON(message.description);
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.commission_rate !== "") {
			obj.commission_rate = message.commission_rate;
		}
		if (message.min_self_delegation !== "") {
			obj.min_self_delegation = message.min_self_delegation;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgEditValidator>, I>>(base?: I): MsgEditValidator {
		return MsgEditValidator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgEditValidator>, I>>(object: I): MsgEditValidator {
		const message = createBaseMsgEditValidator();
		message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
		message.validator_address = object.validator_address ?? "";
		message.commission_rate = object.commission_rate ?? "";
		message.min_self_delegation = object.min_self_delegation ?? "";
		return message;
	},
};

export const MsgEditValidatorResponse: MessageFns<MsgEditValidatorResponse, "cosmos.staking.v1beta1.MsgEditValidatorResponse"> = {
	$type: "cosmos.staking.v1beta1.MsgEditValidatorResponse" as const,

	encode(_: MsgEditValidatorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidatorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgEditValidatorResponse();
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

	fromJSON(_: any): MsgEditValidatorResponse {
		return {};
	},

	toJSON(_: MsgEditValidatorResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgEditValidatorResponse>, I>>(base?: I): MsgEditValidatorResponse {
		return MsgEditValidatorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgEditValidatorResponse>, I>>(_: I): MsgEditValidatorResponse {
		const message = createBaseMsgEditValidatorResponse();
		return message;
	},
};

export const MsgDelegate: MessageFns<MsgDelegate, "cosmos.staking.v1beta1.MsgDelegate"> = {
	$type: "cosmos.staking.v1beta1.MsgDelegate" as const,

	encode(message: MsgDelegate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegate {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDelegate();
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
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgDelegate {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
		};
	},

	toJSON(message: MsgDelegate): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.amount !== undefined) {
			obj.amount = Coin.toJSON(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDelegate>, I>>(base?: I): MsgDelegate {
		return MsgDelegate.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(object: I): MsgDelegate {
		const message = createBaseMsgDelegate();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
		return message;
	},
};

export const MsgDelegateResponse: MessageFns<MsgDelegateResponse, "cosmos.staking.v1beta1.MsgDelegateResponse"> = {
	$type: "cosmos.staking.v1beta1.MsgDelegateResponse" as const,

	encode(_: MsgDelegateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDelegateResponse();
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

	fromJSON(_: any): MsgDelegateResponse {
		return {};
	},

	toJSON(_: MsgDelegateResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(base?: I): MsgDelegateResponse {
		return MsgDelegateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(_: I): MsgDelegateResponse {
		const message = createBaseMsgDelegateResponse();
		return message;
	},
};

export const MsgBeginRedelegate: MessageFns<MsgBeginRedelegate, "cosmos.staking.v1beta1.MsgBeginRedelegate"> = {
	$type: "cosmos.staking.v1beta1.MsgBeginRedelegate" as const,

	encode(message: MsgBeginRedelegate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_src_address !== "") {
			writer.uint32(18).string(message.validator_src_address);
		}
		if (message.validator_dst_address !== "") {
			writer.uint32(26).string(message.validator_dst_address);
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegate {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgBeginRedelegate();
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

					message.validator_src_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.validator_dst_address = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.amount = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgBeginRedelegate {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_src_address: isSet(object.validator_src_address) ? globalThis.String(object.validator_src_address) : "",
			validator_dst_address: isSet(object.validator_dst_address) ? globalThis.String(object.validator_dst_address) : "",
			amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
		};
	},

	toJSON(message: MsgBeginRedelegate): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_src_address !== "") {
			obj.validator_src_address = message.validator_src_address;
		}
		if (message.validator_dst_address !== "") {
			obj.validator_dst_address = message.validator_dst_address;
		}
		if (message.amount !== undefined) {
			obj.amount = Coin.toJSON(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgBeginRedelegate>, I>>(base?: I): MsgBeginRedelegate {
		return MsgBeginRedelegate.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegate>, I>>(object: I): MsgBeginRedelegate {
		const message = createBaseMsgBeginRedelegate();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_src_address = object.validator_src_address ?? "";
		message.validator_dst_address = object.validator_dst_address ?? "";
		message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
		return message;
	},
};

export const MsgBeginRedelegateResponse: MessageFns<MsgBeginRedelegateResponse, "cosmos.staking.v1beta1.MsgBeginRedelegateResponse"> = {
	$type: "cosmos.staking.v1beta1.MsgBeginRedelegateResponse" as const,

	encode(message: MsgBeginRedelegateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.completion_time !== undefined) {
			Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgBeginRedelegateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgBeginRedelegateResponse {
		return { completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined };
	},

	toJSON(message: MsgBeginRedelegateResponse): unknown {
		const obj: any = {};
		if (message.completion_time !== undefined) {
			obj.completion_time = message.completion_time.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgBeginRedelegateResponse>, I>>(base?: I): MsgBeginRedelegateResponse {
		return MsgBeginRedelegateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegateResponse>, I>>(object: I): MsgBeginRedelegateResponse {
		const message = createBaseMsgBeginRedelegateResponse();
		message.completion_time = object.completion_time ?? undefined;
		return message;
	},
};

export const MsgUndelegate: MessageFns<MsgUndelegate, "cosmos.staking.v1beta1.MsgUndelegate"> = {
	$type: "cosmos.staking.v1beta1.MsgUndelegate" as const,

	encode(message: MsgUndelegate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegate {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUndelegate();
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
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgUndelegate {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
		};
	},

	toJSON(message: MsgUndelegate): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.amount !== undefined) {
			obj.amount = Coin.toJSON(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUndelegate>, I>>(base?: I): MsgUndelegate {
		return MsgUndelegate.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
		const message = createBaseMsgUndelegate();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
		return message;
	},
};

export const MsgUndelegateResponse: MessageFns<MsgUndelegateResponse, "cosmos.staking.v1beta1.MsgUndelegateResponse"> = {
	$type: "cosmos.staking.v1beta1.MsgUndelegateResponse" as const,

	encode(message: MsgUndelegateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.completion_time !== undefined) {
			Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUndelegateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgUndelegateResponse {
		return { completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined };
	},

	toJSON(message: MsgUndelegateResponse): unknown {
		const obj: any = {};
		if (message.completion_time !== undefined) {
			obj.completion_time = message.completion_time.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(base?: I): MsgUndelegateResponse {
		return MsgUndelegateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(object: I): MsgUndelegateResponse {
		const message = createBaseMsgUndelegateResponse();
		message.completion_time = object.completion_time ?? undefined;
		return message;
	},
};

function createBaseMsgCreateValidator(): MsgCreateValidator {
	return {
		description: undefined,
		commission: undefined,
		min_self_delegation: "",
		delegator_address: "",
		validator_address: "",
		pubkey: undefined,
		value: undefined,
	};
}

function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
	return {};
}

function createBaseMsgEditValidator(): MsgEditValidator {
	return { description: undefined, validator_address: "", commission_rate: "", min_self_delegation: "" };
}

function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
	return {};
}

function createBaseMsgDelegate(): MsgDelegate {
	return { delegator_address: "", validator_address: "", amount: undefined };
}

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
	return {};
}

function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
	return { delegator_address: "", validator_src_address: "", validator_dst_address: "", amount: undefined };
}

function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
	return { completion_time: undefined };
}

function createBaseMsgUndelegate(): MsgUndelegate {
	return { delegator_address: "", validator_address: "", amount: undefined };
}

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
	return { completion_time: undefined };
}

function toTimestamp(date: Date): Timestamp {
	const seconds = Math.trunc(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = (t.seconds || 0) * 1_000;
	millis += (t.nanos || 0) / 1_000_000;
	return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof globalThis.Date) {
		return o;
	} else if (typeof o === "string") {
		return new globalThis.Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator as never],
	["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator as never],
	["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate as never],
	["/cosmos.staking.v1beta1.MsgDelegateResponse", MsgDelegateResponse as never],
	["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate as never],
	["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate as never],
	["/cosmos.staking.v1beta1.MsgUndelegateResponse", MsgUndelegateResponse as never],
];
export const aminoConverters = {
	"/cosmos.staking.v1beta1.MsgCreateValidator": {
		aminoType: "cosmos-sdk/MsgCreateValidator",
		toAmino: (message: MsgCreateValidator) => ({ ...message }),
		fromAmino: (object: MsgCreateValidator) => ({ ...object }),
	},

	"/cosmos.staking.v1beta1.MsgEditValidator": {
		aminoType: "cosmos-sdk/MsgEditValidator",
		toAmino: (message: MsgEditValidator) => ({ ...message }),
		fromAmino: (object: MsgEditValidator) => ({ ...object }),
	},

	"/cosmos.staking.v1beta1.MsgDelegate": {
		aminoType: "cosmos-sdk/MsgDelegate",
		toAmino: (message: MsgDelegate) => ({ ...message }),
		fromAmino: (object: MsgDelegate) => ({ ...object }),
	},

	"/cosmos.staking.v1beta1.MsgDelegateResponse": {
		aminoType: "cosmos-sdk/MsgDelegateResponse",
		toAmino: (message: MsgDelegateResponse) => ({ ...message }),
		fromAmino: (object: MsgDelegateResponse) => ({ ...object }),
	},

	"/cosmos.staking.v1beta1.MsgBeginRedelegate": {
		aminoType: "cosmos-sdk/MsgBeginRedelegate",
		toAmino: (message: MsgBeginRedelegate) => ({ ...message }),
		fromAmino: (object: MsgBeginRedelegate) => ({ ...object }),
	},

	"/cosmos.staking.v1beta1.MsgUndelegate": {
		aminoType: "cosmos-sdk/MsgUndelegate",
		toAmino: (message: MsgUndelegate) => ({ ...message }),
		fromAmino: (object: MsgUndelegate) => ({ ...object }),
	},

	"/cosmos.staking.v1beta1.MsgUndelegateResponse": {
		aminoType: "cosmos-sdk/MsgUndelegateResponse",
		toAmino: (message: MsgUndelegateResponse) => ({ ...message }),
		fromAmino: (object: MsgUndelegateResponse) => ({ ...object }),
	},
};

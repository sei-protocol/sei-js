import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../../base/v1beta1/coin";

import type {
	MsgCreateVestingAccountResponse as MsgCreateVestingAccountResponse_type,
	MsgCreateVestingAccount as MsgCreateVestingAccount_type,
} from "../../../../types/cosmos/vesting/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgCreateVestingAccount extends MsgCreateVestingAccount_type {}
export interface MsgCreateVestingAccountResponse extends MsgCreateVestingAccountResponse_type {}

export const MsgCreateVestingAccount: MessageFns<MsgCreateVestingAccount, "cosmos.vesting.v1beta1.MsgCreateVestingAccount"> = {
	$type: "cosmos.vesting.v1beta1.MsgCreateVestingAccount" as const,

	encode(message: MsgCreateVestingAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.to_address !== "") {
			writer.uint32(18).string(message.to_address);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.end_time !== 0) {
			writer.uint32(32).int64(message.end_time);
		}
		if (message.delayed !== false) {
			writer.uint32(40).bool(message.delayed);
		}
		if (message.admin !== "") {
			writer.uint32(50).string(message.admin);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCreateVestingAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.to_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.end_time = longToNumber(reader.int64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.delayed = reader.bool();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.admin = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgCreateVestingAccount {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			to_address: isSet(object.to_address) ? globalThis.String(object.to_address) : "",
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
			end_time: isSet(object.end_time) ? globalThis.Number(object.end_time) : 0,
			delayed: isSet(object.delayed) ? globalThis.Boolean(object.delayed) : false,
			admin: isSet(object.admin) ? globalThis.String(object.admin) : "",
		};
	},

	toJSON(message: MsgCreateVestingAccount): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.to_address !== "") {
			obj.to_address = message.to_address;
		}
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		if (message.end_time !== 0) {
			obj.end_time = Math.round(message.end_time);
		}
		if (message.delayed !== false) {
			obj.delayed = message.delayed;
		}
		if (message.admin !== "") {
			obj.admin = message.admin;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCreateVestingAccount>, I>>(base?: I): MsgCreateVestingAccount {
		return MsgCreateVestingAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCreateVestingAccount>, I>>(object: I): MsgCreateVestingAccount {
		const message = createBaseMsgCreateVestingAccount();
		message.from_address = object.from_address ?? "";
		message.to_address = object.to_address ?? "";
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		message.end_time = object.end_time ?? 0;
		message.delayed = object.delayed ?? false;
		message.admin = object.admin ?? "";
		return message;
	},
};

export const MsgCreateVestingAccountResponse: MessageFns<MsgCreateVestingAccountResponse, "cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse"> = {
	$type: "cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse" as const,

	encode(_: MsgCreateVestingAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCreateVestingAccountResponse();
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

	fromJSON(_: any): MsgCreateVestingAccountResponse {
		return {};
	},

	toJSON(_: MsgCreateVestingAccountResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCreateVestingAccountResponse>, I>>(base?: I): MsgCreateVestingAccountResponse {
		return MsgCreateVestingAccountResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCreateVestingAccountResponse>, I>>(_: I): MsgCreateVestingAccountResponse {
		const message = createBaseMsgCreateVestingAccountResponse();
		return message;
	},
};

function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
	return { from_address: "", to_address: "", amount: [], end_time: 0, delayed: false, admin: "" };
}

function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
	return {};
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

import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import type { BaseAccount as BaseAccount_type, ModuleAccount as ModuleAccount_type, Params as Params_type } from "../../../../types/cosmos/auth/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface BaseAccount extends BaseAccount_type {}
export interface ModuleAccount extends ModuleAccount_type {}
export interface Params extends Params_type {}

export const BaseAccount: MessageFns<BaseAccount, "cosmos.auth.v1beta1.BaseAccount"> = {
	$type: "cosmos.auth.v1beta1.BaseAccount" as const,

	encode(message: BaseAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.pub_key !== undefined) {
			Any.encode(message.pub_key, writer.uint32(18).fork()).join();
		}
		if (message.account_number !== 0) {
			writer.uint32(24).uint64(message.account_number);
		}
		if (message.sequence !== 0) {
			writer.uint32(32).uint64(message.sequence);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BaseAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBaseAccount();
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

					message.account_number = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.sequence = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BaseAccount {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
			account_number: isSet(object.account_number) ? globalThis.Number(object.account_number) : 0,
			sequence: isSet(object.sequence) ? globalThis.Number(object.sequence) : 0,
		};
	},

	toJSON(message: BaseAccount): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.pub_key !== undefined) {
			obj.pub_key = Any.toJSON(message.pub_key);
		}
		if (message.account_number !== 0) {
			obj.account_number = Math.round(message.account_number);
		}
		if (message.sequence !== 0) {
			obj.sequence = Math.round(message.sequence);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BaseAccount>, I>>(base?: I): BaseAccount {
		return BaseAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(object: I): BaseAccount {
		const message = createBaseBaseAccount();
		message.address = object.address ?? "";
		message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
		message.account_number = object.account_number ?? 0;
		message.sequence = object.sequence ?? 0;
		return message;
	},
};

export const ModuleAccount: MessageFns<ModuleAccount, "cosmos.auth.v1beta1.ModuleAccount"> = {
	$type: "cosmos.auth.v1beta1.ModuleAccount" as const,

	encode(message: ModuleAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.base_account !== undefined) {
			BaseAccount.encode(message.base_account, writer.uint32(10).fork()).join();
		}
		if (message.name !== "") {
			writer.uint32(18).string(message.name);
		}
		for (const v of message.permissions) {
			writer.uint32(26).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseModuleAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.base_account = BaseAccount.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.name = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.permissions.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ModuleAccount {
		return {
			base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			permissions: globalThis.Array.isArray(object?.permissions) ? object.permissions.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: ModuleAccount): unknown {
		const obj: any = {};
		if (message.base_account !== undefined) {
			obj.base_account = BaseAccount.toJSON(message.base_account);
		}
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.permissions?.length) {
			obj.permissions = message.permissions;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ModuleAccount>, I>>(base?: I): ModuleAccount {
		return ModuleAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ModuleAccount>, I>>(object: I): ModuleAccount {
		const message = createBaseModuleAccount();
		message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
		message.name = object.name ?? "";
		message.permissions = object.permissions?.map((e) => e) || [];
		return message;
	},
};

export const Params: MessageFns<Params, "cosmos.auth.v1beta1.Params"> = {
	$type: "cosmos.auth.v1beta1.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.max_memo_characters !== 0) {
			writer.uint32(8).uint64(message.max_memo_characters);
		}
		if (message.tx_sig_limit !== 0) {
			writer.uint32(16).uint64(message.tx_sig_limit);
		}
		if (message.tx_size_cost_per_byte !== 0) {
			writer.uint32(24).uint64(message.tx_size_cost_per_byte);
		}
		if (message.sig_verify_cost_ed25519 !== 0) {
			writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
		}
		if (message.sig_verify_cost_secp256k1 !== 0) {
			writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
		}
		if (message.disable_seqno_check !== false) {
			writer.uint32(48).bool(message.disable_seqno_check);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.max_memo_characters = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.tx_sig_limit = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.tx_size_cost_per_byte = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.sig_verify_cost_ed25519 = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.sig_verify_cost_secp256k1 = longToNumber(reader.uint64());
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.disable_seqno_check = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			max_memo_characters: isSet(object.max_memo_characters) ? globalThis.Number(object.max_memo_characters) : 0,
			tx_sig_limit: isSet(object.tx_sig_limit) ? globalThis.Number(object.tx_sig_limit) : 0,
			tx_size_cost_per_byte: isSet(object.tx_size_cost_per_byte) ? globalThis.Number(object.tx_size_cost_per_byte) : 0,
			sig_verify_cost_ed25519: isSet(object.sig_verify_cost_ed25519) ? globalThis.Number(object.sig_verify_cost_ed25519) : 0,
			sig_verify_cost_secp256k1: isSet(object.sig_verify_cost_secp256k1) ? globalThis.Number(object.sig_verify_cost_secp256k1) : 0,
			disable_seqno_check: isSet(object.disable_seqno_check) ? globalThis.Boolean(object.disable_seqno_check) : false,
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.max_memo_characters !== 0) {
			obj.max_memo_characters = Math.round(message.max_memo_characters);
		}
		if (message.tx_sig_limit !== 0) {
			obj.tx_sig_limit = Math.round(message.tx_sig_limit);
		}
		if (message.tx_size_cost_per_byte !== 0) {
			obj.tx_size_cost_per_byte = Math.round(message.tx_size_cost_per_byte);
		}
		if (message.sig_verify_cost_ed25519 !== 0) {
			obj.sig_verify_cost_ed25519 = Math.round(message.sig_verify_cost_ed25519);
		}
		if (message.sig_verify_cost_secp256k1 !== 0) {
			obj.sig_verify_cost_secp256k1 = Math.round(message.sig_verify_cost_secp256k1);
		}
		if (message.disable_seqno_check !== false) {
			obj.disable_seqno_check = message.disable_seqno_check;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.max_memo_characters = object.max_memo_characters ?? 0;
		message.tx_sig_limit = object.tx_sig_limit ?? 0;
		message.tx_size_cost_per_byte = object.tx_size_cost_per_byte ?? 0;
		message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 ?? 0;
		message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 ?? 0;
		message.disable_seqno_check = object.disable_seqno_check ?? false;
		return message;
	},
};

function createBaseBaseAccount(): BaseAccount {
	return { address: "", pub_key: undefined, account_number: 0, sequence: 0 };
}

function createBaseModuleAccount(): ModuleAccount {
	return { base_account: undefined, name: "", permissions: [] };
}

function createBaseParams(): Params {
	return {
		max_memo_characters: 0,
		tx_sig_limit: 0,
		tx_size_cost_per_byte: 0,
		sig_verify_cost_ed25519: 0,
		sig_verify_cost_secp256k1: 0,
		disable_seqno_check: false,
	};
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
	["/cosmos.auth.v1beta1.BaseAccount", BaseAccount as never],
	["/cosmos.auth.v1beta1.ModuleAccount", ModuleAccount as never],
	["/cosmos.auth.v1beta1.Params", Params as never],
];
export const aminoConverters = {
	"/cosmos.auth.v1beta1.BaseAccount": {
		aminoType: "cosmos-sdk/BaseAccount",
		toAmino: (message: BaseAccount) => ({ ...message }),
		fromAmino: (object: BaseAccount) => ({ ...object }),
	},

	"/cosmos.auth.v1beta1.ModuleAccount": {
		aminoType: "cosmos-sdk/ModuleAccount",
		toAmino: (message: ModuleAccount) => ({ ...message }),
		fromAmino: (object: ModuleAccount) => ({ ...object }),
	},

	"/cosmos.auth.v1beta1.Params": {
		aminoType: "cosmos-sdk/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object }),
	},
};

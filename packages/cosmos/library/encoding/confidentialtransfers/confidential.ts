import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Ciphertext } from "./cryptography";

import type { CtAccountWithDenom as CtAccountWithDenom_type, CtAccount as CtAccount_type } from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface CtAccount extends CtAccount_type {}
export interface CtAccountWithDenom extends CtAccountWithDenom_type {}

export const CtAccount: MessageFns<CtAccount, "seiprotocol.seichain.confidentialtransfers.CtAccount"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.CtAccount" as const,

	encode(message: CtAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.public_key.length !== 0) {
			writer.uint32(10).bytes(message.public_key);
		}
		if (message.pending_balance_lo !== undefined) {
			Ciphertext.encode(message.pending_balance_lo, writer.uint32(18).fork()).join();
		}
		if (message.pending_balance_hi !== undefined) {
			Ciphertext.encode(message.pending_balance_hi, writer.uint32(26).fork()).join();
		}
		if (message.pending_balance_credit_counter !== 0) {
			writer.uint32(32).uint32(message.pending_balance_credit_counter);
		}
		if (message.available_balance !== undefined) {
			Ciphertext.encode(message.available_balance, writer.uint32(42).fork()).join();
		}
		if (message.decryptable_available_balance !== "") {
			writer.uint32(50).string(message.decryptable_available_balance);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CtAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCtAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.public_key = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pending_balance_lo = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.pending_balance_hi = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.pending_balance_credit_counter = reader.uint32();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.available_balance = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.decryptable_available_balance = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CtAccount {
		return {
			public_key: isSet(object.public_key) ? bytesFromBase64(object.public_key) : new Uint8Array(0),
			pending_balance_lo: isSet(object.pending_balance_lo) ? Ciphertext.fromJSON(object.pending_balance_lo) : undefined,
			pending_balance_hi: isSet(object.pending_balance_hi) ? Ciphertext.fromJSON(object.pending_balance_hi) : undefined,
			pending_balance_credit_counter: isSet(object.pending_balance_credit_counter) ? globalThis.Number(object.pending_balance_credit_counter) : 0,
			available_balance: isSet(object.available_balance) ? Ciphertext.fromJSON(object.available_balance) : undefined,
			decryptable_available_balance: isSet(object.decryptable_available_balance) ? globalThis.String(object.decryptable_available_balance) : ""
		};
	},

	toJSON(message: CtAccount): unknown {
		const obj: any = {};
		if (message.public_key.length !== 0) {
			obj.public_key = base64FromBytes(message.public_key);
		}
		if (message.pending_balance_lo !== undefined) {
			obj.pending_balance_lo = Ciphertext.toJSON(message.pending_balance_lo);
		}
		if (message.pending_balance_hi !== undefined) {
			obj.pending_balance_hi = Ciphertext.toJSON(message.pending_balance_hi);
		}
		if (message.pending_balance_credit_counter !== 0) {
			obj.pending_balance_credit_counter = Math.round(message.pending_balance_credit_counter);
		}
		if (message.available_balance !== undefined) {
			obj.available_balance = Ciphertext.toJSON(message.available_balance);
		}
		if (message.decryptable_available_balance !== "") {
			obj.decryptable_available_balance = message.decryptable_available_balance;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CtAccount>, I>>(base?: I): CtAccount {
		return CtAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CtAccount>, I>>(object: I): CtAccount {
		const message = createBaseCtAccount();
		message.public_key = object.public_key ?? new Uint8Array(0);
		message.pending_balance_lo =
			object.pending_balance_lo !== undefined && object.pending_balance_lo !== null ? Ciphertext.fromPartial(object.pending_balance_lo) : undefined;
		message.pending_balance_hi =
			object.pending_balance_hi !== undefined && object.pending_balance_hi !== null ? Ciphertext.fromPartial(object.pending_balance_hi) : undefined;
		message.pending_balance_credit_counter = object.pending_balance_credit_counter ?? 0;
		message.available_balance =
			object.available_balance !== undefined && object.available_balance !== null ? Ciphertext.fromPartial(object.available_balance) : undefined;
		message.decryptable_available_balance = object.decryptable_available_balance ?? "";
		return message;
	}
};

export const CtAccountWithDenom: MessageFns<CtAccountWithDenom, "seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom" as const,

	encode(message: CtAccountWithDenom, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.account !== undefined) {
			CtAccount.encode(message.account, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CtAccountWithDenom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCtAccountWithDenom();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.account = CtAccount.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CtAccountWithDenom {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			account: isSet(object.account) ? CtAccount.fromJSON(object.account) : undefined
		};
	},

	toJSON(message: CtAccountWithDenom): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.account !== undefined) {
			obj.account = CtAccount.toJSON(message.account);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CtAccountWithDenom>, I>>(base?: I): CtAccountWithDenom {
		return CtAccountWithDenom.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CtAccountWithDenom>, I>>(object: I): CtAccountWithDenom {
		const message = createBaseCtAccountWithDenom();
		message.denom = object.denom ?? "";
		message.account = object.account !== undefined && object.account !== null ? CtAccount.fromPartial(object.account) : undefined;
		return message;
	}
};

function createBaseCtAccount(): CtAccount {
	return {
		public_key: new Uint8Array(0),
		pending_balance_lo: undefined,
		pending_balance_hi: undefined,
		pending_balance_credit_counter: 0,
		available_balance: undefined,
		decryptable_available_balance: ""
	};
}

function createBaseCtAccountWithDenom(): CtAccountWithDenom {
	return { denom: "", account: undefined };
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

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.confidentialtransfers.CtAccount", CtAccount as never],
	["/seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom", CtAccountWithDenom as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.CtAccount": {
		aminoType: "confidentialtransfers/CtAccount",
		toAmino: (message: CtAccount) => ({ ...message }),
		fromAmino: (object: CtAccount) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom": {
		aminoType: "confidentialtransfers/CtAccountWithDenom",
		toAmino: (message: CtAccountWithDenom) => ({ ...message }),
		fromAmino: (object: CtAccountWithDenom) => ({ ...object })
	}
};

import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { CtAccount } from "./confidential";

import { Params } from "./params";

import type { GenesisCtAccount as GenesisCtAccount_type, GenesisState as GenesisState_type } from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface GenesisState extends GenesisState_type {}
export interface GenesisCtAccount extends GenesisCtAccount_type {}

export const GenesisState: MessageFns<GenesisState, "seiprotocol.seichain.confidentialtransfers.GenesisState"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.accounts) {
			GenesisCtAccount.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.accounts.push(GenesisCtAccount.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		return {
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => GenesisCtAccount.fromJSON(e)) : []
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.accounts?.length) {
			obj.accounts = message.accounts.map((e) => GenesisCtAccount.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.accounts = object.accounts?.map((e) => GenesisCtAccount.fromPartial(e)) || [];
		return message;
	}
};

export const GenesisCtAccount: MessageFns<GenesisCtAccount, "seiprotocol.seichain.confidentialtransfers.GenesisCtAccount"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.GenesisCtAccount" as const,

	encode(message: GenesisCtAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.account !== undefined) {
			CtAccount.encode(message.account, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisCtAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisCtAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.bytes();
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

	fromJSON(object: any): GenesisCtAccount {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			account: isSet(object.account) ? CtAccount.fromJSON(object.account) : undefined
		};
	},

	toJSON(message: GenesisCtAccount): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.account !== undefined) {
			obj.account = CtAccount.toJSON(message.account);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisCtAccount>, I>>(base?: I): GenesisCtAccount {
		return GenesisCtAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisCtAccount>, I>>(object: I): GenesisCtAccount {
		const message = createBaseGenesisCtAccount();
		message.key = object.key ?? new Uint8Array(0);
		message.account = object.account !== undefined && object.account !== null ? CtAccount.fromPartial(object.account) : undefined;
		return message;
	}
};

function createBaseGenesisState(): GenesisState {
	return { params: undefined, accounts: [] };
}

function createBaseGenesisCtAccount(): GenesisCtAccount {
	return { key: new Uint8Array(0), account: undefined };
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
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.confidentialtransfers.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.GenesisState": {
		aminoType: "confidentialtransfers/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object })
	}
};

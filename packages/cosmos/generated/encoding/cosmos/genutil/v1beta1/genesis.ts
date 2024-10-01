import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { GenesisState as GenesisState_type } from "../../../../types/cosmos/genutil/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.genutil.v1beta1.GenesisState"> = {
	$type: "cosmos.genutil.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.gen_txs) {
			writer.uint32(10).bytes(v!);
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

					message.gen_txs.push(reader.bytes());
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
			gen_txs: globalThis.Array.isArray(object?.gen_txs) ? object.gen_txs.map((e: any) => bytesFromBase64(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.gen_txs?.length) {
			obj.gen_txs = message.gen_txs.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.gen_txs = object.gen_txs?.map((e) => e) || [];
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { gen_txs: [] };
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
export const registry: Array<[string, GeneratedType]> = [["/cosmos.genutil.v1beta1.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/cosmos.genutil.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};

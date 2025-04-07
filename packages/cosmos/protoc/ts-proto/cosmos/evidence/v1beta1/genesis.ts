// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/evidence/v1beta1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.evidence.v1beta1";

/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
	/** evidence defines all the evidence at genesis. */
	evidence: Any[];
}

function createBaseGenesisState(): GenesisState {
	return { evidence: [] };
}

export const GenesisState: MessageFns<GenesisState, "cosmos.evidence.v1beta1.GenesisState"> = {
	$type: "cosmos.evidence.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.evidence) {
			Any.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.evidence.push(Any.decode(reader, reader.uint32()));
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
			evidence: globalThis.Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Any.fromJSON(e)) : []
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.evidence?.length) {
			obj.evidence = message.evidence.map((e) => Any.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.evidence = object.evidence?.map((e) => Any.fromPartial(e)) || [];
		return message;
	}
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

export interface MessageFns<T, V extends string> {
	readonly $type: V;
	encode(message: T, writer?: BinaryWriter): BinaryWriter;
	decode(input: BinaryReader | Uint8Array, length?: number): T;
	fromJSON(object: any): T;
	toJSON(message: T): unknown;
	create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
	fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}

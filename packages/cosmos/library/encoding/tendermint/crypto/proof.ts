import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	DominoOp as DominoOp_type,
	ProofOp as ProofOp_type,
	ProofOps as ProofOps_type,
	Proof as Proof_type,
	ValueOp as ValueOp_type
} from "../../../types/tendermint/crypto";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface Proof extends Proof_type {}
export interface ValueOp extends ValueOp_type {}
export interface DominoOp extends DominoOp_type {}
export interface ProofOp extends ProofOp_type {}
export interface ProofOps extends ProofOps_type {}

export const Proof: MessageFns<Proof, "tendermint.crypto.Proof"> = {
	$type: "tendermint.crypto.Proof" as const,

	encode(message: Proof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.total !== 0) {
			writer.uint32(8).int64(message.total);
		}
		if (message.index !== 0) {
			writer.uint32(16).int64(message.index);
		}
		if (message.leaf_hash.length !== 0) {
			writer.uint32(26).bytes(message.leaf_hash);
		}
		for (const v of message.aunts) {
			writer.uint32(34).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Proof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.total = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.index = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.leaf_hash = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.aunts.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Proof {
		return {
			total: isSet(object.total) ? globalThis.Number(object.total) : 0,
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			leaf_hash: isSet(object.leaf_hash) ? bytesFromBase64(object.leaf_hash) : new Uint8Array(0),
			aunts: globalThis.Array.isArray(object?.aunts) ? object.aunts.map((e: any) => bytesFromBase64(e)) : []
		};
	},

	toJSON(message: Proof): unknown {
		const obj: any = {};
		if (message.total !== 0) {
			obj.total = Math.round(message.total);
		}
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.leaf_hash.length !== 0) {
			obj.leaf_hash = base64FromBytes(message.leaf_hash);
		}
		if (message.aunts?.length) {
			obj.aunts = message.aunts.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Proof>, I>>(base?: I): Proof {
		return Proof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
		const message = createBaseProof();
		message.total = object.total ?? 0;
		message.index = object.index ?? 0;
		message.leaf_hash = object.leaf_hash ?? new Uint8Array(0);
		message.aunts = object.aunts?.map((e) => e) || [];
		return message;
	}
};

export const ValueOp: MessageFns<ValueOp, "tendermint.crypto.ValueOp"> = {
	$type: "tendermint.crypto.ValueOp" as const,

	encode(message: ValueOp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.proof !== undefined) {
			Proof.encode(message.proof, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValueOp {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValueOp();
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

					message.proof = Proof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValueOp {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
		};
	},

	toJSON(message: ValueOp): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.proof !== undefined) {
			obj.proof = Proof.toJSON(message.proof);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValueOp>, I>>(base?: I): ValueOp {
		return ValueOp.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValueOp>, I>>(object: I): ValueOp {
		const message = createBaseValueOp();
		message.key = object.key ?? new Uint8Array(0);
		message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
		return message;
	}
};

export const DominoOp: MessageFns<DominoOp, "tendermint.crypto.DominoOp"> = {
	$type: "tendermint.crypto.DominoOp" as const,

	encode(message: DominoOp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key !== "") {
			writer.uint32(10).string(message.key);
		}
		if (message.input !== "") {
			writer.uint32(18).string(message.input);
		}
		if (message.output !== "") {
			writer.uint32(26).string(message.output);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DominoOp {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDominoOp();
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

					message.input = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.output = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DominoOp {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			input: isSet(object.input) ? globalThis.String(object.input) : "",
			output: isSet(object.output) ? globalThis.String(object.output) : ""
		};
	},

	toJSON(message: DominoOp): unknown {
		const obj: any = {};
		if (message.key !== "") {
			obj.key = message.key;
		}
		if (message.input !== "") {
			obj.input = message.input;
		}
		if (message.output !== "") {
			obj.output = message.output;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DominoOp>, I>>(base?: I): DominoOp {
		return DominoOp.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DominoOp>, I>>(object: I): DominoOp {
		const message = createBaseDominoOp();
		message.key = object.key ?? "";
		message.input = object.input ?? "";
		message.output = object.output ?? "";
		return message;
	}
};

export const ProofOp: MessageFns<ProofOp, "tendermint.crypto.ProofOp"> = {
	$type: "tendermint.crypto.ProofOp" as const,

	encode(message: ProofOp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.type !== "") {
			writer.uint32(10).string(message.type);
		}
		if (message.key.length !== 0) {
			writer.uint32(18).bytes(message.key);
		}
		if (message.data.length !== 0) {
			writer.uint32(26).bytes(message.data);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ProofOp {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseProofOp();
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

					message.key = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
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

	fromJSON(object: any): ProofOp {
		return {
			type: isSet(object.type) ? globalThis.String(object.type) : "",
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0)
		};
	},

	toJSON(message: ProofOp): unknown {
		const obj: any = {};
		if (message.type !== "") {
			obj.type = message.type;
		}
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ProofOp>, I>>(base?: I): ProofOp {
		return ProofOp.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp {
		const message = createBaseProofOp();
		message.type = object.type ?? "";
		message.key = object.key ?? new Uint8Array(0);
		message.data = object.data ?? new Uint8Array(0);
		return message;
	}
};

export const ProofOps: MessageFns<ProofOps, "tendermint.crypto.ProofOps"> = {
	$type: "tendermint.crypto.ProofOps" as const,

	encode(message: ProofOps, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.ops) {
			ProofOp.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ProofOps {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseProofOps();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.ops.push(ProofOp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ProofOps {
		return { ops: globalThis.Array.isArray(object?.ops) ? object.ops.map((e: any) => ProofOp.fromJSON(e)) : [] };
	},

	toJSON(message: ProofOps): unknown {
		const obj: any = {};
		if (message.ops?.length) {
			obj.ops = message.ops.map((e) => ProofOp.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ProofOps>, I>>(base?: I): ProofOps {
		return ProofOps.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ProofOps>, I>>(object: I): ProofOps {
		const message = createBaseProofOps();
		message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
		return message;
	}
};

function createBaseProof(): Proof {
	return { total: 0, index: 0, leaf_hash: new Uint8Array(0), aunts: [] };
}

function createBaseValueOp(): ValueOp {
	return { key: new Uint8Array(0), proof: undefined };
}

function createBaseDominoOp(): DominoOp {
	return { key: "", input: "", output: "" };
}

function createBaseProofOp(): ProofOp {
	return { type: "", key: new Uint8Array(0), data: new Uint8Array(0) };
}

function createBaseProofOps(): ProofOps {
	return { ops: [] };
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
	["/tendermint.crypto.Proof", Proof as never],
	["/tendermint.crypto.ValueOp", ValueOp as never],
	["/tendermint.crypto.DominoOp", DominoOp as never],
	["/tendermint.crypto.ProofOp", ProofOp as never],
	["/tendermint.crypto.ProofOps", ProofOps as never]
];
export const aminoConverters = {
	"/tendermint.crypto.Proof": {
		aminoType: "tendermint.crypto.Proof",
		toAmino: (message: Proof) => ({ ...message }),
		fromAmino: (object: Proof) => ({ ...object })
	},

	"/tendermint.crypto.ValueOp": {
		aminoType: "tendermint.crypto.ValueOp",
		toAmino: (message: ValueOp) => ({ ...message }),
		fromAmino: (object: ValueOp) => ({ ...object })
	},

	"/tendermint.crypto.DominoOp": {
		aminoType: "tendermint.crypto.DominoOp",
		toAmino: (message: DominoOp) => ({ ...message }),
		fromAmino: (object: DominoOp) => ({ ...object })
	},

	"/tendermint.crypto.ProofOp": {
		aminoType: "tendermint.crypto.ProofOp",
		toAmino: (message: ProofOp) => ({ ...message }),
		fromAmino: (object: ProofOp) => ({ ...object })
	},

	"/tendermint.crypto.ProofOps": {
		aminoType: "tendermint.crypto.ProofOps",
		toAmino: (message: ProofOps) => ({ ...message }),
		fromAmino: (object: ProofOps) => ({ ...object })
	}
};

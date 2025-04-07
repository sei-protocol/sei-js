import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	BatchEntry as BatchEntry_type,
	BatchProof as BatchProof_type,
	CommitmentProof as CommitmentProof_type,
	CompressedBatchEntry as CompressedBatchEntry_type,
	CompressedBatchProof as CompressedBatchProof_type,
	CompressedExistenceProof as CompressedExistenceProof_type,
	CompressedNonExistenceProof as CompressedNonExistenceProof_type,
	ExistenceProof as ExistenceProof_type,
	InnerOp as InnerOp_type,
	InnerSpec as InnerSpec_type,
	LeafOp as LeafOp_type,
	NonExistenceProof as NonExistenceProof_type,
	ProofSpec as ProofSpec_type
} from "../../types/confio";

import { HashOp, LengthOp } from "../../types/confio";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface ExistenceProof extends ExistenceProof_type {}
export interface NonExistenceProof extends NonExistenceProof_type {}
export interface CommitmentProof extends CommitmentProof_type {}
export interface LeafOp extends LeafOp_type {}
export interface InnerOp extends InnerOp_type {}
export interface ProofSpec extends ProofSpec_type {}
export interface InnerSpec extends InnerSpec_type {}
export interface BatchProof extends BatchProof_type {}
export interface BatchEntry extends BatchEntry_type {}
export interface CompressedBatchProof extends CompressedBatchProof_type {}
export interface CompressedBatchEntry extends CompressedBatchEntry_type {}
export interface CompressedExistenceProof extends CompressedExistenceProof_type {}
export interface CompressedNonExistenceProof extends CompressedNonExistenceProof_type {}

export const ExistenceProof: MessageFns<ExistenceProof, "ics23.ExistenceProof"> = {
	$type: "ics23.ExistenceProof" as const,

	encode(message: ExistenceProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(18).bytes(message.value);
		}
		if (message.leaf !== undefined) {
			LeafOp.encode(message.leaf, writer.uint32(26).fork()).join();
		}
		for (const v of message.path) {
			InnerOp.encode(v!, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExistenceProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExistenceProof();
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

					message.value = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.leaf = LeafOp.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.path.push(InnerOp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExistenceProof {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
			leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
			path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => InnerOp.fromJSON(e)) : []
		};
	},

	toJSON(message: ExistenceProof): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		if (message.leaf !== undefined) {
			obj.leaf = LeafOp.toJSON(message.leaf);
		}
		if (message.path?.length) {
			obj.path = message.path.map((e) => InnerOp.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExistenceProof>, I>>(base?: I): ExistenceProof {
		return ExistenceProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExistenceProof>, I>>(object: I): ExistenceProof {
		const message = createBaseExistenceProof();
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
		message.path = object.path?.map((e) => InnerOp.fromPartial(e)) || [];
		return message;
	}
};

export const NonExistenceProof: MessageFns<NonExistenceProof, "ics23.NonExistenceProof"> = {
	$type: "ics23.NonExistenceProof" as const,

	encode(message: NonExistenceProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.left !== undefined) {
			ExistenceProof.encode(message.left, writer.uint32(18).fork()).join();
		}
		if (message.right !== undefined) {
			ExistenceProof.encode(message.right, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): NonExistenceProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseNonExistenceProof();
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

					message.left = ExistenceProof.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.right = ExistenceProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): NonExistenceProof {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
			right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : undefined
		};
	},

	toJSON(message: NonExistenceProof): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.left !== undefined) {
			obj.left = ExistenceProof.toJSON(message.left);
		}
		if (message.right !== undefined) {
			obj.right = ExistenceProof.toJSON(message.right);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<NonExistenceProof>, I>>(base?: I): NonExistenceProof {
		return NonExistenceProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<NonExistenceProof>, I>>(object: I): NonExistenceProof {
		const message = createBaseNonExistenceProof();
		message.key = object.key ?? new Uint8Array(0);
		message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
		message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
		return message;
	}
};

export const CommitmentProof: MessageFns<CommitmentProof, "ics23.CommitmentProof"> = {
	$type: "ics23.CommitmentProof" as const,

	encode(message: CommitmentProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.exist !== undefined) {
			ExistenceProof.encode(message.exist, writer.uint32(10).fork()).join();
		}
		if (message.nonexist !== undefined) {
			NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).join();
		}
		if (message.batch !== undefined) {
			BatchProof.encode(message.batch, writer.uint32(26).fork()).join();
		}
		if (message.compressed !== undefined) {
			CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommitmentProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommitmentProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.exist = ExistenceProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.batch = BatchProof.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommitmentProof {
		return {
			exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
			nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
			batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
			compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined
		};
	},

	toJSON(message: CommitmentProof): unknown {
		const obj: any = {};
		if (message.exist !== undefined) {
			obj.exist = ExistenceProof.toJSON(message.exist);
		}
		if (message.nonexist !== undefined) {
			obj.nonexist = NonExistenceProof.toJSON(message.nonexist);
		}
		if (message.batch !== undefined) {
			obj.batch = BatchProof.toJSON(message.batch);
		}
		if (message.compressed !== undefined) {
			obj.compressed = CompressedBatchProof.toJSON(message.compressed);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommitmentProof>, I>>(base?: I): CommitmentProof {
		return CommitmentProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommitmentProof>, I>>(object: I): CommitmentProof {
		const message = createBaseCommitmentProof();
		message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
		message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
		message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
		message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
		return message;
	}
};

export const LeafOp: MessageFns<LeafOp, "ics23.LeafOp"> = {
	$type: "ics23.LeafOp" as const,

	encode(message: LeafOp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash !== 0) {
			writer.uint32(8).int32(message.hash);
		}
		if (message.prehash_key !== 0) {
			writer.uint32(16).int32(message.prehash_key);
		}
		if (message.prehash_value !== 0) {
			writer.uint32(24).int32(message.prehash_value);
		}
		if (message.length !== 0) {
			writer.uint32(32).int32(message.length);
		}
		if (message.prefix.length !== 0) {
			writer.uint32(42).bytes(message.prefix);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): LeafOp {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLeafOp();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.hash = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.prehash_key = reader.int32() as any;
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.prehash_value = reader.int32() as any;
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.length = reader.int32() as any;
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.prefix = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): LeafOp {
		return {
			hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
			prehash_key: isSet(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : 0,
			prehash_value: isSet(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : 0,
			length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
			prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0)
		};
	},

	toJSON(message: LeafOp): unknown {
		const obj: any = {};
		if (message.hash !== 0) {
			obj.hash = hashOpToJSON(message.hash);
		}
		if (message.prehash_key !== 0) {
			obj.prehash_key = hashOpToJSON(message.prehash_key);
		}
		if (message.prehash_value !== 0) {
			obj.prehash_value = hashOpToJSON(message.prehash_value);
		}
		if (message.length !== 0) {
			obj.length = lengthOpToJSON(message.length);
		}
		if (message.prefix.length !== 0) {
			obj.prefix = base64FromBytes(message.prefix);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<LeafOp>, I>>(base?: I): LeafOp {
		return LeafOp.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<LeafOp>, I>>(object: I): LeafOp {
		const message = createBaseLeafOp();
		message.hash = object.hash ?? 0;
		message.prehash_key = object.prehash_key ?? 0;
		message.prehash_value = object.prehash_value ?? 0;
		message.length = object.length ?? 0;
		message.prefix = object.prefix ?? new Uint8Array(0);
		return message;
	}
};

export const InnerOp: MessageFns<InnerOp, "ics23.InnerOp"> = {
	$type: "ics23.InnerOp" as const,

	encode(message: InnerOp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash !== 0) {
			writer.uint32(8).int32(message.hash);
		}
		if (message.prefix.length !== 0) {
			writer.uint32(18).bytes(message.prefix);
		}
		if (message.suffix.length !== 0) {
			writer.uint32(26).bytes(message.suffix);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InnerOp {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInnerOp();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.hash = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.prefix = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.suffix = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InnerOp {
		return {
			hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
			prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
			suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array(0)
		};
	},

	toJSON(message: InnerOp): unknown {
		const obj: any = {};
		if (message.hash !== 0) {
			obj.hash = hashOpToJSON(message.hash);
		}
		if (message.prefix.length !== 0) {
			obj.prefix = base64FromBytes(message.prefix);
		}
		if (message.suffix.length !== 0) {
			obj.suffix = base64FromBytes(message.suffix);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InnerOp>, I>>(base?: I): InnerOp {
		return InnerOp.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InnerOp>, I>>(object: I): InnerOp {
		const message = createBaseInnerOp();
		message.hash = object.hash ?? 0;
		message.prefix = object.prefix ?? new Uint8Array(0);
		message.suffix = object.suffix ?? new Uint8Array(0);
		return message;
	}
};

export const ProofSpec: MessageFns<ProofSpec, "ics23.ProofSpec"> = {
	$type: "ics23.ProofSpec" as const,

	encode(message: ProofSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.leaf_spec !== undefined) {
			LeafOp.encode(message.leaf_spec, writer.uint32(10).fork()).join();
		}
		if (message.inner_spec !== undefined) {
			InnerSpec.encode(message.inner_spec, writer.uint32(18).fork()).join();
		}
		if (message.max_depth !== 0) {
			writer.uint32(24).int32(message.max_depth);
		}
		if (message.min_depth !== 0) {
			writer.uint32(32).int32(message.min_depth);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ProofSpec {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseProofSpec();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.leaf_spec = LeafOp.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.inner_spec = InnerSpec.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.max_depth = reader.int32();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.min_depth = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ProofSpec {
		return {
			leaf_spec: isSet(object.leaf_spec) ? LeafOp.fromJSON(object.leaf_spec) : undefined,
			inner_spec: isSet(object.inner_spec) ? InnerSpec.fromJSON(object.inner_spec) : undefined,
			max_depth: isSet(object.max_depth) ? globalThis.Number(object.max_depth) : 0,
			min_depth: isSet(object.min_depth) ? globalThis.Number(object.min_depth) : 0
		};
	},

	toJSON(message: ProofSpec): unknown {
		const obj: any = {};
		if (message.leaf_spec !== undefined) {
			obj.leaf_spec = LeafOp.toJSON(message.leaf_spec);
		}
		if (message.inner_spec !== undefined) {
			obj.inner_spec = InnerSpec.toJSON(message.inner_spec);
		}
		if (message.max_depth !== 0) {
			obj.max_depth = Math.round(message.max_depth);
		}
		if (message.min_depth !== 0) {
			obj.min_depth = Math.round(message.min_depth);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ProofSpec>, I>>(base?: I): ProofSpec {
		return ProofSpec.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ProofSpec>, I>>(object: I): ProofSpec {
		const message = createBaseProofSpec();
		message.leaf_spec = object.leaf_spec !== undefined && object.leaf_spec !== null ? LeafOp.fromPartial(object.leaf_spec) : undefined;
		message.inner_spec = object.inner_spec !== undefined && object.inner_spec !== null ? InnerSpec.fromPartial(object.inner_spec) : undefined;
		message.max_depth = object.max_depth ?? 0;
		message.min_depth = object.min_depth ?? 0;
		return message;
	}
};

export const InnerSpec: MessageFns<InnerSpec, "ics23.InnerSpec"> = {
	$type: "ics23.InnerSpec" as const,

	encode(message: InnerSpec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		writer.uint32(10).fork();
		for (const v of message.child_order) {
			writer.int32(v);
		}
		writer.join();
		if (message.child_size !== 0) {
			writer.uint32(16).int32(message.child_size);
		}
		if (message.min_prefix_length !== 0) {
			writer.uint32(24).int32(message.min_prefix_length);
		}
		if (message.max_prefix_length !== 0) {
			writer.uint32(32).int32(message.max_prefix_length);
		}
		if (message.empty_child.length !== 0) {
			writer.uint32(42).bytes(message.empty_child);
		}
		if (message.hash !== 0) {
			writer.uint32(48).int32(message.hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InnerSpec {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInnerSpec();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag === 8) {
						message.child_order.push(reader.int32());

						continue;
					}

					if (tag === 10) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.child_order.push(reader.int32());
						}

						continue;
					}

					break;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.child_size = reader.int32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.min_prefix_length = reader.int32();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.max_prefix_length = reader.int32();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.empty_child = reader.bytes();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.hash = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InnerSpec {
		return {
			child_order: globalThis.Array.isArray(object?.child_order) ? object.child_order.map((e: any) => globalThis.Number(e)) : [],
			child_size: isSet(object.child_size) ? globalThis.Number(object.child_size) : 0,
			min_prefix_length: isSet(object.min_prefix_length) ? globalThis.Number(object.min_prefix_length) : 0,
			max_prefix_length: isSet(object.max_prefix_length) ? globalThis.Number(object.max_prefix_length) : 0,
			empty_child: isSet(object.empty_child) ? bytesFromBase64(object.empty_child) : new Uint8Array(0),
			hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0
		};
	},

	toJSON(message: InnerSpec): unknown {
		const obj: any = {};
		if (message.child_order?.length) {
			obj.child_order = message.child_order.map((e) => Math.round(e));
		}
		if (message.child_size !== 0) {
			obj.child_size = Math.round(message.child_size);
		}
		if (message.min_prefix_length !== 0) {
			obj.min_prefix_length = Math.round(message.min_prefix_length);
		}
		if (message.max_prefix_length !== 0) {
			obj.max_prefix_length = Math.round(message.max_prefix_length);
		}
		if (message.empty_child.length !== 0) {
			obj.empty_child = base64FromBytes(message.empty_child);
		}
		if (message.hash !== 0) {
			obj.hash = hashOpToJSON(message.hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InnerSpec>, I>>(base?: I): InnerSpec {
		return InnerSpec.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InnerSpec>, I>>(object: I): InnerSpec {
		const message = createBaseInnerSpec();
		message.child_order = object.child_order?.map((e) => e) || [];
		message.child_size = object.child_size ?? 0;
		message.min_prefix_length = object.min_prefix_length ?? 0;
		message.max_prefix_length = object.max_prefix_length ?? 0;
		message.empty_child = object.empty_child ?? new Uint8Array(0);
		message.hash = object.hash ?? 0;
		return message;
	}
};

export const BatchProof: MessageFns<BatchProof, "ics23.BatchProof"> = {
	$type: "ics23.BatchProof" as const,

	encode(message: BatchProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.entries) {
			BatchEntry.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BatchProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBatchProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.entries.push(BatchEntry.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BatchProof {
		return {
			entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => BatchEntry.fromJSON(e)) : []
		};
	},

	toJSON(message: BatchProof): unknown {
		const obj: any = {};
		if (message.entries?.length) {
			obj.entries = message.entries.map((e) => BatchEntry.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BatchProof>, I>>(base?: I): BatchProof {
		return BatchProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BatchProof>, I>>(object: I): BatchProof {
		const message = createBaseBatchProof();
		message.entries = object.entries?.map((e) => BatchEntry.fromPartial(e)) || [];
		return message;
	}
};

export const BatchEntry: MessageFns<BatchEntry, "ics23.BatchEntry"> = {
	$type: "ics23.BatchEntry" as const,

	encode(message: BatchEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.exist !== undefined) {
			ExistenceProof.encode(message.exist, writer.uint32(10).fork()).join();
		}
		if (message.nonexist !== undefined) {
			NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BatchEntry {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBatchEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.exist = ExistenceProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BatchEntry {
		return {
			exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
			nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined
		};
	},

	toJSON(message: BatchEntry): unknown {
		const obj: any = {};
		if (message.exist !== undefined) {
			obj.exist = ExistenceProof.toJSON(message.exist);
		}
		if (message.nonexist !== undefined) {
			obj.nonexist = NonExistenceProof.toJSON(message.nonexist);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BatchEntry>, I>>(base?: I): BatchEntry {
		return BatchEntry.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BatchEntry>, I>>(object: I): BatchEntry {
		const message = createBaseBatchEntry();
		message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
		message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
		return message;
	}
};

export const CompressedBatchProof: MessageFns<CompressedBatchProof, "ics23.CompressedBatchProof"> = {
	$type: "ics23.CompressedBatchProof" as const,

	encode(message: CompressedBatchProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.entries) {
			CompressedBatchEntry.encode(v!, writer.uint32(10).fork()).join();
		}
		for (const v of message.lookup_inners) {
			InnerOp.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCompressedBatchProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.lookup_inners.push(InnerOp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CompressedBatchProof {
		return {
			entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => CompressedBatchEntry.fromJSON(e)) : [],
			lookup_inners: globalThis.Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e: any) => InnerOp.fromJSON(e)) : []
		};
	},

	toJSON(message: CompressedBatchProof): unknown {
		const obj: any = {};
		if (message.entries?.length) {
			obj.entries = message.entries.map((e) => CompressedBatchEntry.toJSON(e));
		}
		if (message.lookup_inners?.length) {
			obj.lookup_inners = message.lookup_inners.map((e) => InnerOp.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CompressedBatchProof>, I>>(base?: I): CompressedBatchProof {
		return CompressedBatchProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CompressedBatchProof>, I>>(object: I): CompressedBatchProof {
		const message = createBaseCompressedBatchProof();
		message.entries = object.entries?.map((e) => CompressedBatchEntry.fromPartial(e)) || [];
		message.lookup_inners = object.lookup_inners?.map((e) => InnerOp.fromPartial(e)) || [];
		return message;
	}
};

export const CompressedBatchEntry: MessageFns<CompressedBatchEntry, "ics23.CompressedBatchEntry"> = {
	$type: "ics23.CompressedBatchEntry" as const,

	encode(message: CompressedBatchEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.exist !== undefined) {
			CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).join();
		}
		if (message.nonexist !== undefined) {
			CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchEntry {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCompressedBatchEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CompressedBatchEntry {
		return {
			exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
			nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined
		};
	},

	toJSON(message: CompressedBatchEntry): unknown {
		const obj: any = {};
		if (message.exist !== undefined) {
			obj.exist = CompressedExistenceProof.toJSON(message.exist);
		}
		if (message.nonexist !== undefined) {
			obj.nonexist = CompressedNonExistenceProof.toJSON(message.nonexist);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CompressedBatchEntry>, I>>(base?: I): CompressedBatchEntry {
		return CompressedBatchEntry.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CompressedBatchEntry>, I>>(object: I): CompressedBatchEntry {
		const message = createBaseCompressedBatchEntry();
		message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
		message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
		return message;
	}
};

export const CompressedExistenceProof: MessageFns<CompressedExistenceProof, "ics23.CompressedExistenceProof"> = {
	$type: "ics23.CompressedExistenceProof" as const,

	encode(message: CompressedExistenceProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(18).bytes(message.value);
		}
		if (message.leaf !== undefined) {
			LeafOp.encode(message.leaf, writer.uint32(26).fork()).join();
		}
		writer.uint32(34).fork();
		for (const v of message.path) {
			writer.int32(v);
		}
		writer.join();
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CompressedExistenceProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCompressedExistenceProof();
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

					message.value = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.leaf = LeafOp.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag === 32) {
						message.path.push(reader.int32());

						continue;
					}

					if (tag === 34) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.path.push(reader.int32());
						}

						continue;
					}

					break;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CompressedExistenceProof {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
			leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
			path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.Number(e)) : []
		};
	},

	toJSON(message: CompressedExistenceProof): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		if (message.leaf !== undefined) {
			obj.leaf = LeafOp.toJSON(message.leaf);
		}
		if (message.path?.length) {
			obj.path = message.path.map((e) => Math.round(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CompressedExistenceProof>, I>>(base?: I): CompressedExistenceProof {
		return CompressedExistenceProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CompressedExistenceProof>, I>>(object: I): CompressedExistenceProof {
		const message = createBaseCompressedExistenceProof();
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
		message.path = object.path?.map((e) => e) || [];
		return message;
	}
};

export const CompressedNonExistenceProof: MessageFns<CompressedNonExistenceProof, "ics23.CompressedNonExistenceProof"> = {
	$type: "ics23.CompressedNonExistenceProof" as const,

	encode(message: CompressedNonExistenceProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.left !== undefined) {
			CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).join();
		}
		if (message.right !== undefined) {
			CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CompressedNonExistenceProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCompressedNonExistenceProof();
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

					message.left = CompressedExistenceProof.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.right = CompressedExistenceProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CompressedNonExistenceProof {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
			right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined
		};
	},

	toJSON(message: CompressedNonExistenceProof): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.left !== undefined) {
			obj.left = CompressedExistenceProof.toJSON(message.left);
		}
		if (message.right !== undefined) {
			obj.right = CompressedExistenceProof.toJSON(message.right);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CompressedNonExistenceProof>, I>>(base?: I): CompressedNonExistenceProof {
		return CompressedNonExistenceProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CompressedNonExistenceProof>, I>>(object: I): CompressedNonExistenceProof {
		const message = createBaseCompressedNonExistenceProof();
		message.key = object.key ?? new Uint8Array(0);
		message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
		message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
		return message;
	}
};

export function hashOpFromJSON(object: any): HashOp {
	switch (object) {
		case 0:
		case "NO_HASH":
			return HashOp.NO_HASH;
		case 1:
		case "SHA256":
			return HashOp.SHA256;
		case 2:
		case "SHA512":
			return HashOp.SHA512;
		case 3:
		case "KECCAK":
			return HashOp.KECCAK;
		case 4:
		case "RIPEMD160":
			return HashOp.RIPEMD160;
		case 5:
		case "BITCOIN":
			return HashOp.BITCOIN;
		case -1:
		case "UNRECOGNIZED":
		default:
			return HashOp.UNRECOGNIZED;
	}
}

export function hashOpToJSON(object: HashOp): string {
	switch (object) {
		case HashOp.NO_HASH:
			return "NO_HASH";
		case HashOp.SHA256:
			return "SHA256";
		case HashOp.SHA512:
			return "SHA512";
		case HashOp.KECCAK:
			return "KECCAK";
		case HashOp.RIPEMD160:
			return "RIPEMD160";
		case HashOp.BITCOIN:
			return "BITCOIN";
		case HashOp.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function lengthOpFromJSON(object: any): LengthOp {
	switch (object) {
		case 0:
		case "NO_PREFIX":
			return LengthOp.NO_PREFIX;
		case 1:
		case "VAR_PROTO":
			return LengthOp.VAR_PROTO;
		case 2:
		case "VAR_RLP":
			return LengthOp.VAR_RLP;
		case 3:
		case "FIXED32_BIG":
			return LengthOp.FIXED32_BIG;
		case 4:
		case "FIXED32_LITTLE":
			return LengthOp.FIXED32_LITTLE;
		case 5:
		case "FIXED64_BIG":
			return LengthOp.FIXED64_BIG;
		case 6:
		case "FIXED64_LITTLE":
			return LengthOp.FIXED64_LITTLE;
		case 7:
		case "REQUIRE_32_BYTES":
			return LengthOp.REQUIRE_32_BYTES;
		case 8:
		case "REQUIRE_64_BYTES":
			return LengthOp.REQUIRE_64_BYTES;
		case -1:
		case "UNRECOGNIZED":
		default:
			return LengthOp.UNRECOGNIZED;
	}
}

export function lengthOpToJSON(object: LengthOp): string {
	switch (object) {
		case LengthOp.NO_PREFIX:
			return "NO_PREFIX";
		case LengthOp.VAR_PROTO:
			return "VAR_PROTO";
		case LengthOp.VAR_RLP:
			return "VAR_RLP";
		case LengthOp.FIXED32_BIG:
			return "FIXED32_BIG";
		case LengthOp.FIXED32_LITTLE:
			return "FIXED32_LITTLE";
		case LengthOp.FIXED64_BIG:
			return "FIXED64_BIG";
		case LengthOp.FIXED64_LITTLE:
			return "FIXED64_LITTLE";
		case LengthOp.REQUIRE_32_BYTES:
			return "REQUIRE_32_BYTES";
		case LengthOp.REQUIRE_64_BYTES:
			return "REQUIRE_64_BYTES";
		case LengthOp.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

function createBaseExistenceProof(): ExistenceProof {
	return { key: new Uint8Array(0), value: new Uint8Array(0), leaf: undefined, path: [] };
}

function createBaseNonExistenceProof(): NonExistenceProof {
	return { key: new Uint8Array(0), left: undefined, right: undefined };
}

function createBaseCommitmentProof(): CommitmentProof {
	return { exist: undefined, nonexist: undefined, batch: undefined, compressed: undefined };
}

function createBaseLeafOp(): LeafOp {
	return { hash: 0, prehash_key: 0, prehash_value: 0, length: 0, prefix: new Uint8Array(0) };
}

function createBaseInnerOp(): InnerOp {
	return { hash: 0, prefix: new Uint8Array(0), suffix: new Uint8Array(0) };
}

function createBaseProofSpec(): ProofSpec {
	return { leaf_spec: undefined, inner_spec: undefined, max_depth: 0, min_depth: 0 };
}

function createBaseInnerSpec(): InnerSpec {
	return {
		child_order: [],
		child_size: 0,
		min_prefix_length: 0,
		max_prefix_length: 0,
		empty_child: new Uint8Array(0),
		hash: 0
	};
}

function createBaseBatchProof(): BatchProof {
	return { entries: [] };
}

function createBaseBatchEntry(): BatchEntry {
	return { exist: undefined, nonexist: undefined };
}

function createBaseCompressedBatchProof(): CompressedBatchProof {
	return { entries: [], lookup_inners: [] };
}

function createBaseCompressedBatchEntry(): CompressedBatchEntry {
	return { exist: undefined, nonexist: undefined };
}

function createBaseCompressedExistenceProof(): CompressedExistenceProof {
	return { key: new Uint8Array(0), value: new Uint8Array(0), leaf: undefined, path: [] };
}

function createBaseCompressedNonExistenceProof(): CompressedNonExistenceProof {
	return { key: new Uint8Array(0), left: undefined, right: undefined };
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
	["/ics23.ExistenceProof", ExistenceProof as never],
	["/ics23.NonExistenceProof", NonExistenceProof as never],
	["/ics23.CommitmentProof", CommitmentProof as never],
	["/ics23.LeafOp", LeafOp as never],
	["/ics23.InnerOp", InnerOp as never],
	["/ics23.ProofSpec", ProofSpec as never],
	["/ics23.InnerSpec", InnerSpec as never],
	["/ics23.BatchProof", BatchProof as never],
	["/ics23.BatchEntry", BatchEntry as never],
	["/ics23.CompressedBatchProof", CompressedBatchProof as never],
	["/ics23.CompressedBatchEntry", CompressedBatchEntry as never],
	["/ics23.CompressedExistenceProof", CompressedExistenceProof as never],
	["/ics23.CompressedNonExistenceProof", CompressedNonExistenceProof as never]
];
export const aminoConverters = {
	"/ics23.ExistenceProof": {
		aminoType: "ics23.ExistenceProof",
		toAmino: (message: ExistenceProof) => ({ ...message }),
		fromAmino: (object: ExistenceProof) => ({ ...object })
	},

	"/ics23.NonExistenceProof": {
		aminoType: "ics23.NonExistenceProof",
		toAmino: (message: NonExistenceProof) => ({ ...message }),
		fromAmino: (object: NonExistenceProof) => ({ ...object })
	},

	"/ics23.CommitmentProof": {
		aminoType: "ics23.CommitmentProof",
		toAmino: (message: CommitmentProof) => ({ ...message }),
		fromAmino: (object: CommitmentProof) => ({ ...object })
	},

	"/ics23.LeafOp": {
		aminoType: "ics23.LeafOp",
		toAmino: (message: LeafOp) => ({ ...message }),
		fromAmino: (object: LeafOp) => ({ ...object })
	},

	"/ics23.InnerOp": {
		aminoType: "ics23.InnerOp",
		toAmino: (message: InnerOp) => ({ ...message }),
		fromAmino: (object: InnerOp) => ({ ...object })
	},

	"/ics23.ProofSpec": {
		aminoType: "ics23.ProofSpec",
		toAmino: (message: ProofSpec) => ({ ...message }),
		fromAmino: (object: ProofSpec) => ({ ...object })
	},

	"/ics23.InnerSpec": {
		aminoType: "ics23.InnerSpec",
		toAmino: (message: InnerSpec) => ({ ...message }),
		fromAmino: (object: InnerSpec) => ({ ...object })
	},

	"/ics23.BatchProof": {
		aminoType: "ics23.BatchProof",
		toAmino: (message: BatchProof) => ({ ...message }),
		fromAmino: (object: BatchProof) => ({ ...object })
	},

	"/ics23.BatchEntry": {
		aminoType: "ics23.BatchEntry",
		toAmino: (message: BatchEntry) => ({ ...message }),
		fromAmino: (object: BatchEntry) => ({ ...object })
	},

	"/ics23.CompressedBatchProof": {
		aminoType: "ics23.CompressedBatchProof",
		toAmino: (message: CompressedBatchProof) => ({ ...message }),
		fromAmino: (object: CompressedBatchProof) => ({ ...object })
	},

	"/ics23.CompressedBatchEntry": {
		aminoType: "ics23.CompressedBatchEntry",
		toAmino: (message: CompressedBatchEntry) => ({ ...message }),
		fromAmino: (object: CompressedBatchEntry) => ({ ...object })
	},

	"/ics23.CompressedExistenceProof": {
		aminoType: "ics23.CompressedExistenceProof",
		toAmino: (message: CompressedExistenceProof) => ({ ...message }),
		fromAmino: (object: CompressedExistenceProof) => ({ ...object })
	},

	"/ics23.CompressedNonExistenceProof": {
		aminoType: "ics23.CompressedNonExistenceProof",
		toAmino: (message: CompressedNonExistenceProof) => ({ ...message }),
		fromAmino: (object: CompressedNonExistenceProof) => ({ ...object })
	}
};

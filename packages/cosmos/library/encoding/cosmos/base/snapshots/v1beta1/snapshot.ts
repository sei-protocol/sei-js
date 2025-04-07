import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	Metadata as Metadata_type,
	SnapshotExtensionMeta as SnapshotExtensionMeta_type,
	SnapshotExtensionPayload as SnapshotExtensionPayload_type,
	SnapshotIAVLItem as SnapshotIAVLItem_type,
	SnapshotItem as SnapshotItem_type,
	SnapshotStoreItem as SnapshotStoreItem_type,
	Snapshot as Snapshot_type
} from "../../../../../types/cosmos/base/snapshots/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface Snapshot extends Snapshot_type {}
export interface Metadata extends Metadata_type {}
export interface SnapshotItem extends SnapshotItem_type {}
export interface SnapshotStoreItem extends SnapshotStoreItem_type {}
export interface SnapshotIAVLItem extends SnapshotIAVLItem_type {}
export interface SnapshotExtensionMeta extends SnapshotExtensionMeta_type {}
export interface SnapshotExtensionPayload extends SnapshotExtensionPayload_type {}

export const Snapshot: MessageFns<Snapshot, "cosmos.base.snapshots.v1beta1.Snapshot"> = {
	$type: "cosmos.base.snapshots.v1beta1.Snapshot" as const,

	encode(message: Snapshot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).uint64(message.height);
		}
		if (message.format !== 0) {
			writer.uint32(16).uint32(message.format);
		}
		if (message.chunks !== 0) {
			writer.uint32(24).uint32(message.chunks);
		}
		if (message.hash.length !== 0) {
			writer.uint32(34).bytes(message.hash);
		}
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshot();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.format = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.chunks = reader.uint32();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.hash = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.metadata = Metadata.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Snapshot {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			format: isSet(object.format) ? globalThis.Number(object.format) : 0,
			chunks: isSet(object.chunks) ? globalThis.Number(object.chunks) : 0,
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
			metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
		};
	},

	toJSON(message: Snapshot): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.format !== 0) {
			obj.format = Math.round(message.format);
		}
		if (message.chunks !== 0) {
			obj.chunks = Math.round(message.chunks);
		}
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		if (message.metadata !== undefined) {
			obj.metadata = Metadata.toJSON(message.metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Snapshot>, I>>(base?: I): Snapshot {
		return Snapshot.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
		const message = createBaseSnapshot();
		message.height = object.height ?? 0;
		message.format = object.format ?? 0;
		message.chunks = object.chunks ?? 0;
		message.hash = object.hash ?? new Uint8Array(0);
		message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
		return message;
	}
};

export const Metadata: MessageFns<Metadata, "cosmos.base.snapshots.v1beta1.Metadata"> = {
	$type: "cosmos.base.snapshots.v1beta1.Metadata" as const,

	encode(message: Metadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.chunk_hashes) {
			writer.uint32(10).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMetadata();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.chunk_hashes.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Metadata {
		return {
			chunk_hashes: globalThis.Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e: any) => bytesFromBase64(e)) : []
		};
	},

	toJSON(message: Metadata): unknown {
		const obj: any = {};
		if (message.chunk_hashes?.length) {
			obj.chunk_hashes = message.chunk_hashes.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Metadata>, I>>(base?: I): Metadata {
		return Metadata.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
		const message = createBaseMetadata();
		message.chunk_hashes = object.chunk_hashes?.map((e) => e) || [];
		return message;
	}
};

export const SnapshotItem: MessageFns<SnapshotItem, "cosmos.base.snapshots.v1beta1.SnapshotItem"> = {
	$type: "cosmos.base.snapshots.v1beta1.SnapshotItem" as const,

	encode(message: SnapshotItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.store !== undefined) {
			SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).join();
		}
		if (message.iavl !== undefined) {
			SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).join();
		}
		if (message.extension !== undefined) {
			SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).join();
		}
		if (message.extension_payload !== undefined) {
			SnapshotExtensionPayload.encode(message.extension_payload, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SnapshotItem {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshotItem();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.store = SnapshotStoreItem.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.extension_payload = SnapshotExtensionPayload.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SnapshotItem {
		return {
			store: isSet(object.store) ? SnapshotStoreItem.fromJSON(object.store) : undefined,
			iavl: isSet(object.iavl) ? SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
			extension: isSet(object.extension) ? SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
			extension_payload: isSet(object.extension_payload) ? SnapshotExtensionPayload.fromJSON(object.extension_payload) : undefined
		};
	},

	toJSON(message: SnapshotItem): unknown {
		const obj: any = {};
		if (message.store !== undefined) {
			obj.store = SnapshotStoreItem.toJSON(message.store);
		}
		if (message.iavl !== undefined) {
			obj.iavl = SnapshotIAVLItem.toJSON(message.iavl);
		}
		if (message.extension !== undefined) {
			obj.extension = SnapshotExtensionMeta.toJSON(message.extension);
		}
		if (message.extension_payload !== undefined) {
			obj.extension_payload = SnapshotExtensionPayload.toJSON(message.extension_payload);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SnapshotItem>, I>>(base?: I): SnapshotItem {
		return SnapshotItem.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SnapshotItem>, I>>(object: I): SnapshotItem {
		const message = createBaseSnapshotItem();
		message.store = object.store !== undefined && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : undefined;
		message.iavl = object.iavl !== undefined && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
		message.extension = object.extension !== undefined && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
		message.extension_payload =
			object.extension_payload !== undefined && object.extension_payload !== null ? SnapshotExtensionPayload.fromPartial(object.extension_payload) : undefined;
		return message;
	}
};

export const SnapshotStoreItem: MessageFns<SnapshotStoreItem, "cosmos.base.snapshots.v1beta1.SnapshotStoreItem"> = {
	$type: "cosmos.base.snapshots.v1beta1.SnapshotStoreItem" as const,

	encode(message: SnapshotStoreItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SnapshotStoreItem {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshotStoreItem();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SnapshotStoreItem {
		return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
	},

	toJSON(message: SnapshotStoreItem): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SnapshotStoreItem>, I>>(base?: I): SnapshotStoreItem {
		return SnapshotStoreItem.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SnapshotStoreItem>, I>>(object: I): SnapshotStoreItem {
		const message = createBaseSnapshotStoreItem();
		message.name = object.name ?? "";
		return message;
	}
};

export const SnapshotIAVLItem: MessageFns<SnapshotIAVLItem, "cosmos.base.snapshots.v1beta1.SnapshotIAVLItem"> = {
	$type: "cosmos.base.snapshots.v1beta1.SnapshotIAVLItem" as const,

	encode(message: SnapshotIAVLItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(18).bytes(message.value);
		}
		if (message.version !== 0) {
			writer.uint32(24).int64(message.version);
		}
		if (message.height !== 0) {
			writer.uint32(32).int32(message.height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SnapshotIAVLItem {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshotIAVLItem();
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
					if (tag !== 24) {
						break;
					}

					message.version = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.height = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SnapshotIAVLItem {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			height: isSet(object.height) ? globalThis.Number(object.height) : 0
		};
	},

	toJSON(message: SnapshotIAVLItem): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SnapshotIAVLItem>, I>>(base?: I): SnapshotIAVLItem {
		return SnapshotIAVLItem.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SnapshotIAVLItem>, I>>(object: I): SnapshotIAVLItem {
		const message = createBaseSnapshotIAVLItem();
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		message.version = object.version ?? 0;
		message.height = object.height ?? 0;
		return message;
	}
};

export const SnapshotExtensionMeta: MessageFns<SnapshotExtensionMeta, "cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta"> = {
	$type: "cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta" as const,

	encode(message: SnapshotExtensionMeta, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.format !== 0) {
			writer.uint32(16).uint32(message.format);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionMeta {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshotExtensionMeta();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.format = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SnapshotExtensionMeta {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			format: isSet(object.format) ? globalThis.Number(object.format) : 0
		};
	},

	toJSON(message: SnapshotExtensionMeta): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.format !== 0) {
			obj.format = Math.round(message.format);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SnapshotExtensionMeta>, I>>(base?: I): SnapshotExtensionMeta {
		return SnapshotExtensionMeta.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SnapshotExtensionMeta>, I>>(object: I): SnapshotExtensionMeta {
		const message = createBaseSnapshotExtensionMeta();
		message.name = object.name ?? "";
		message.format = object.format ?? 0;
		return message;
	}
};

export const SnapshotExtensionPayload: MessageFns<SnapshotExtensionPayload, "cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload"> = {
	$type: "cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload" as const,

	encode(message: SnapshotExtensionPayload, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.payload.length !== 0) {
			writer.uint32(10).bytes(message.payload);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionPayload {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshotExtensionPayload();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.payload = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SnapshotExtensionPayload {
		return { payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(0) };
	},

	toJSON(message: SnapshotExtensionPayload): unknown {
		const obj: any = {};
		if (message.payload.length !== 0) {
			obj.payload = base64FromBytes(message.payload);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SnapshotExtensionPayload>, I>>(base?: I): SnapshotExtensionPayload {
		return SnapshotExtensionPayload.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SnapshotExtensionPayload>, I>>(object: I): SnapshotExtensionPayload {
		const message = createBaseSnapshotExtensionPayload();
		message.payload = object.payload ?? new Uint8Array(0);
		return message;
	}
};

function createBaseSnapshot(): Snapshot {
	return { height: 0, format: 0, chunks: 0, hash: new Uint8Array(0), metadata: undefined };
}

function createBaseMetadata(): Metadata {
	return { chunk_hashes: [] };
}

function createBaseSnapshotItem(): SnapshotItem {
	return { store: undefined, iavl: undefined, extension: undefined, extension_payload: undefined };
}

function createBaseSnapshotStoreItem(): SnapshotStoreItem {
	return { name: "" };
}

function createBaseSnapshotIAVLItem(): SnapshotIAVLItem {
	return { key: new Uint8Array(0), value: new Uint8Array(0), version: 0, height: 0 };
}

function createBaseSnapshotExtensionMeta(): SnapshotExtensionMeta {
	return { name: "", format: 0 };
}

function createBaseSnapshotExtensionPayload(): SnapshotExtensionPayload {
	return { payload: new Uint8Array(0) };
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
	["/cosmos.base.snapshots.v1beta1.Snapshot", Snapshot as never],
	["/cosmos.base.snapshots.v1beta1.Metadata", Metadata as never],
	["/cosmos.base.snapshots.v1beta1.SnapshotItem", SnapshotItem as never],
	["/cosmos.base.snapshots.v1beta1.SnapshotStoreItem", SnapshotStoreItem as never],
	["/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem", SnapshotIAVLItem as never]
];
export const aminoConverters = {
	"/cosmos.base.snapshots.v1beta1.Snapshot": {
		aminoType: "cosmos-sdk/Snapshot",
		toAmino: (message: Snapshot) => ({ ...message }),
		fromAmino: (object: Snapshot) => ({ ...object })
	},

	"/cosmos.base.snapshots.v1beta1.Metadata": {
		aminoType: "cosmos-sdk/Metadata",
		toAmino: (message: Metadata) => ({ ...message }),
		fromAmino: (object: Metadata) => ({ ...object })
	},

	"/cosmos.base.snapshots.v1beta1.SnapshotItem": {
		aminoType: "cosmos-sdk/SnapshotItem",
		toAmino: (message: SnapshotItem) => ({ ...message }),
		fromAmino: (object: SnapshotItem) => ({ ...object })
	},

	"/cosmos.base.snapshots.v1beta1.SnapshotStoreItem": {
		aminoType: "cosmos-sdk/SnapshotStoreItem",
		toAmino: (message: SnapshotStoreItem) => ({ ...message }),
		fromAmino: (object: SnapshotStoreItem) => ({ ...object })
	},

	"/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem": {
		aminoType: "cosmos-sdk/SnapshotIAVLItem",
		toAmino: (message: SnapshotIAVLItem) => ({ ...message }),
		fromAmino: (object: SnapshotIAVLItem) => ({ ...object })
	}
};

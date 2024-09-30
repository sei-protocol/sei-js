import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { CommitID as CommitIDType, CommitInfo as CommitInfoType, StoreInfo as StoreInfoType } from "../../../../../types/cosmos/base/store/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common.ts";

interface CommitInfo extends CommitInfoType {}
interface StoreInfo extends StoreInfoType {}
interface CommitID extends CommitIDType {}

export const CommitInfo: MessageFns<CommitInfo, "cosmos.base.store.v1beta1.CommitInfo"> = {
	$type: "cosmos.base.store.v1beta1.CommitInfo" as const,

	encode(message: CommitInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.version !== 0) {
			writer.uint32(8).int64(message.version);
		}
		for (const v of message.store_infos) {
			StoreInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommitInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.version = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.store_infos.push(StoreInfo.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommitInfo {
		return {
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			store_infos: globalThis.Array.isArray(object?.store_infos) ? object.store_infos.map((e: any) => StoreInfo.fromJSON(e)) : [],
		};
	},

	toJSON(message: CommitInfo): unknown {
		const obj: any = {};
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.store_infos?.length) {
			obj.store_infos = message.store_infos.map((e) => StoreInfo.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommitInfo>, I>>(base?: I): CommitInfo {
		return CommitInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommitInfo>, I>>(object: I): CommitInfo {
		const message = createBaseCommitInfo();
		message.version = object.version ?? 0;
		message.store_infos = object.store_infos?.map((e) => StoreInfo.fromPartial(e)) || [];
		return message;
	},
};

export const StoreInfo: MessageFns<StoreInfo, "cosmos.base.store.v1beta1.StoreInfo"> = {
	$type: "cosmos.base.store.v1beta1.StoreInfo" as const,

	encode(message: StoreInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.commit_id !== undefined) {
			CommitID.encode(message.commit_id, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): StoreInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStoreInfo();
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
					if (tag !== 18) {
						break;
					}

					message.commit_id = CommitID.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): StoreInfo {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			commit_id: isSet(object.commit_id) ? CommitID.fromJSON(object.commit_id) : undefined,
		};
	},

	toJSON(message: StoreInfo): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.commit_id !== undefined) {
			obj.commit_id = CommitID.toJSON(message.commit_id);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StoreInfo>, I>>(base?: I): StoreInfo {
		return StoreInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StoreInfo>, I>>(object: I): StoreInfo {
		const message = createBaseStoreInfo();
		message.name = object.name ?? "";
		message.commit_id = object.commit_id !== undefined && object.commit_id !== null ? CommitID.fromPartial(object.commit_id) : undefined;
		return message;
	},
};

export const CommitID: MessageFns<CommitID, "cosmos.base.store.v1beta1.CommitID"> = {
	$type: "cosmos.base.store.v1beta1.CommitID" as const,

	encode(message: CommitID, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.version !== 0) {
			writer.uint32(8).int64(message.version);
		}
		if (message.hash.length !== 0) {
			writer.uint32(18).bytes(message.hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommitID {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommitID();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.version = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommitID {
		return {
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
		};
	},

	toJSON(message: CommitID): unknown {
		const obj: any = {};
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommitID>, I>>(base?: I): CommitID {
		return CommitID.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommitID>, I>>(object: I): CommitID {
		const message = createBaseCommitID();
		message.version = object.version ?? 0;
		message.hash = object.hash ?? new Uint8Array(0);
		return message;
	},
};

function createBaseCommitInfo(): CommitInfo {
	return { version: 0, store_infos: [] };
}

function createBaseStoreInfo(): StoreInfo {
	return { name: "", commit_id: undefined };
}

function createBaseCommitID(): CommitID {
	return { version: 0, hash: new Uint8Array(0) };
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
	["/cosmos.base.store.v1beta1.CommitInfo", CommitInfo as never],
	["/cosmos.base.store.v1beta1.StoreInfo", StoreInfo as never],
	["/cosmos.base.store.v1beta1.CommitID", CommitID as never],
];
export const aminoConverters = {
	"/cosmos.base.store.v1beta1.CommitInfo": {
		aminoType: "cosmos-sdk/CommitInfo",
		toAmino: (message: CommitInfo) => ({ ...message }),
		fromAmino: (object: CommitInfo) => ({ ...object }),
	},

	"/cosmos.base.store.v1beta1.StoreInfo": {
		aminoType: "cosmos-sdk/StoreInfo",
		toAmino: (message: StoreInfo) => ({ ...message }),
		fromAmino: (object: StoreInfo) => ({ ...object }),
	},

	"/cosmos.base.store.v1beta1.CommitID": {
		aminoType: "cosmos-sdk/CommitID",
		toAmino: (message: CommitID) => ({ ...message }),
		fromAmino: (object: CommitID) => ({ ...object }),
	},
};

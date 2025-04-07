import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Timestamp } from "../../google/protobuf/timestamp";

import type {
	NodeInfoOther as NodeInfoOther_type,
	NodeInfo as NodeInfo_type,
	PeerAddressInfo as PeerAddressInfo_type,
	PeerInfo as PeerInfo_type,
	ProtocolVersion as ProtocolVersion_type
} from "../../../types/tendermint/p2p";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface ProtocolVersion extends ProtocolVersion_type {}
export interface NodeInfo extends NodeInfo_type {}
export interface NodeInfoOther extends NodeInfoOther_type {}
export interface PeerInfo extends PeerInfo_type {}
export interface PeerAddressInfo extends PeerAddressInfo_type {}

export const ProtocolVersion: MessageFns<ProtocolVersion, "tendermint.p2p.ProtocolVersion"> = {
	$type: "tendermint.p2p.ProtocolVersion" as const,

	encode(message: ProtocolVersion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.p2p !== 0) {
			writer.uint32(8).uint64(message.p2p);
		}
		if (message.block !== 0) {
			writer.uint32(16).uint64(message.block);
		}
		if (message.app !== 0) {
			writer.uint32(24).uint64(message.app);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseProtocolVersion();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.p2p = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.block = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.app = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ProtocolVersion {
		return {
			p2p: isSet(object.p2p) ? globalThis.Number(object.p2p) : 0,
			block: isSet(object.block) ? globalThis.Number(object.block) : 0,
			app: isSet(object.app) ? globalThis.Number(object.app) : 0
		};
	},

	toJSON(message: ProtocolVersion): unknown {
		const obj: any = {};
		if (message.p2p !== 0) {
			obj.p2p = Math.round(message.p2p);
		}
		if (message.block !== 0) {
			obj.block = Math.round(message.block);
		}
		if (message.app !== 0) {
			obj.app = Math.round(message.app);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ProtocolVersion>, I>>(base?: I): ProtocolVersion {
		return ProtocolVersion.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion {
		const message = createBaseProtocolVersion();
		message.p2p = object.p2p ?? 0;
		message.block = object.block ?? 0;
		message.app = object.app ?? 0;
		return message;
	}
};

export const NodeInfo: MessageFns<NodeInfo, "tendermint.p2p.NodeInfo"> = {
	$type: "tendermint.p2p.NodeInfo" as const,

	encode(message: NodeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.protocol_version !== undefined) {
			ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).join();
		}
		if (message.node_id !== "") {
			writer.uint32(18).string(message.node_id);
		}
		if (message.listen_addr !== "") {
			writer.uint32(26).string(message.listen_addr);
		}
		if (message.network !== "") {
			writer.uint32(34).string(message.network);
		}
		if (message.version !== "") {
			writer.uint32(42).string(message.version);
		}
		if (message.channels.length !== 0) {
			writer.uint32(50).bytes(message.channels);
		}
		if (message.moniker !== "") {
			writer.uint32(58).string(message.moniker);
		}
		if (message.other !== undefined) {
			NodeInfoOther.encode(message.other, writer.uint32(66).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseNodeInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.node_id = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.listen_addr = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.network = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.version = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.channels = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.moniker = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.other = NodeInfoOther.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): NodeInfo {
		return {
			protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromJSON(object.protocol_version) : undefined,
			node_id: isSet(object.node_id) ? globalThis.String(object.node_id) : "",
			listen_addr: isSet(object.listen_addr) ? globalThis.String(object.listen_addr) : "",
			network: isSet(object.network) ? globalThis.String(object.network) : "",
			version: isSet(object.version) ? globalThis.String(object.version) : "",
			channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(0),
			moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
			other: isSet(object.other) ? NodeInfoOther.fromJSON(object.other) : undefined
		};
	},

	toJSON(message: NodeInfo): unknown {
		const obj: any = {};
		if (message.protocol_version !== undefined) {
			obj.protocol_version = ProtocolVersion.toJSON(message.protocol_version);
		}
		if (message.node_id !== "") {
			obj.node_id = message.node_id;
		}
		if (message.listen_addr !== "") {
			obj.listen_addr = message.listen_addr;
		}
		if (message.network !== "") {
			obj.network = message.network;
		}
		if (message.version !== "") {
			obj.version = message.version;
		}
		if (message.channels.length !== 0) {
			obj.channels = base64FromBytes(message.channels);
		}
		if (message.moniker !== "") {
			obj.moniker = message.moniker;
		}
		if (message.other !== undefined) {
			obj.other = NodeInfoOther.toJSON(message.other);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<NodeInfo>, I>>(base?: I): NodeInfo {
		return NodeInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<NodeInfo>, I>>(object: I): NodeInfo {
		const message = createBaseNodeInfo();
		message.protocol_version =
			object.protocol_version !== undefined && object.protocol_version !== null ? ProtocolVersion.fromPartial(object.protocol_version) : undefined;
		message.node_id = object.node_id ?? "";
		message.listen_addr = object.listen_addr ?? "";
		message.network = object.network ?? "";
		message.version = object.version ?? "";
		message.channels = object.channels ?? new Uint8Array(0);
		message.moniker = object.moniker ?? "";
		message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
		return message;
	}
};

export const NodeInfoOther: MessageFns<NodeInfoOther, "tendermint.p2p.NodeInfoOther"> = {
	$type: "tendermint.p2p.NodeInfoOther" as const,

	encode(message: NodeInfoOther, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx_index !== "") {
			writer.uint32(10).string(message.tx_index);
		}
		if (message.rpc_address !== "") {
			writer.uint32(18).string(message.rpc_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseNodeInfoOther();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx_index = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.rpc_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): NodeInfoOther {
		return {
			tx_index: isSet(object.tx_index) ? globalThis.String(object.tx_index) : "",
			rpc_address: isSet(object.rpc_address) ? globalThis.String(object.rpc_address) : ""
		};
	},

	toJSON(message: NodeInfoOther): unknown {
		const obj: any = {};
		if (message.tx_index !== "") {
			obj.tx_index = message.tx_index;
		}
		if (message.rpc_address !== "") {
			obj.rpc_address = message.rpc_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<NodeInfoOther>, I>>(base?: I): NodeInfoOther {
		return NodeInfoOther.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<NodeInfoOther>, I>>(object: I): NodeInfoOther {
		const message = createBaseNodeInfoOther();
		message.tx_index = object.tx_index ?? "";
		message.rpc_address = object.rpc_address ?? "";
		return message;
	}
};

export const PeerInfo: MessageFns<PeerInfo, "tendermint.p2p.PeerInfo"> = {
	$type: "tendermint.p2p.PeerInfo" as const,

	encode(message: PeerInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.id !== "") {
			writer.uint32(10).string(message.id);
		}
		for (const v of message.address_info) {
			PeerAddressInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.last_connected !== undefined) {
			Timestamp.encode(toTimestamp(message.last_connected), writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePeerInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.id = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.address_info.push(PeerAddressInfo.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.last_connected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PeerInfo {
		return {
			id: isSet(object.id) ? globalThis.String(object.id) : "",
			address_info: globalThis.Array.isArray(object?.address_info) ? object.address_info.map((e: any) => PeerAddressInfo.fromJSON(e)) : [],
			last_connected: isSet(object.last_connected) ? fromJsonTimestamp(object.last_connected) : undefined
		};
	},

	toJSON(message: PeerInfo): unknown {
		const obj: any = {};
		if (message.id !== "") {
			obj.id = message.id;
		}
		if (message.address_info?.length) {
			obj.address_info = message.address_info.map((e) => PeerAddressInfo.toJSON(e));
		}
		if (message.last_connected !== undefined) {
			obj.last_connected = message.last_connected.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PeerInfo>, I>>(base?: I): PeerInfo {
		return PeerInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PeerInfo>, I>>(object: I): PeerInfo {
		const message = createBasePeerInfo();
		message.id = object.id ?? "";
		message.address_info = object.address_info?.map((e) => PeerAddressInfo.fromPartial(e)) || [];
		message.last_connected = object.last_connected ?? undefined;
		return message;
	}
};

export const PeerAddressInfo: MessageFns<PeerAddressInfo, "tendermint.p2p.PeerAddressInfo"> = {
	$type: "tendermint.p2p.PeerAddressInfo" as const,

	encode(message: PeerAddressInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.last_dial_success !== undefined) {
			Timestamp.encode(toTimestamp(message.last_dial_success), writer.uint32(18).fork()).join();
		}
		if (message.last_dial_failure !== undefined) {
			Timestamp.encode(toTimestamp(message.last_dial_failure), writer.uint32(26).fork()).join();
		}
		if (message.dial_failures !== 0) {
			writer.uint32(32).uint32(message.dial_failures);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePeerAddressInfo();
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

					message.last_dial_success = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.last_dial_failure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.dial_failures = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PeerAddressInfo {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			last_dial_success: isSet(object.last_dial_success) ? fromJsonTimestamp(object.last_dial_success) : undefined,
			last_dial_failure: isSet(object.last_dial_failure) ? fromJsonTimestamp(object.last_dial_failure) : undefined,
			dial_failures: isSet(object.dial_failures) ? globalThis.Number(object.dial_failures) : 0
		};
	},

	toJSON(message: PeerAddressInfo): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.last_dial_success !== undefined) {
			obj.last_dial_success = message.last_dial_success.toISOString();
		}
		if (message.last_dial_failure !== undefined) {
			obj.last_dial_failure = message.last_dial_failure.toISOString();
		}
		if (message.dial_failures !== 0) {
			obj.dial_failures = Math.round(message.dial_failures);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PeerAddressInfo>, I>>(base?: I): PeerAddressInfo {
		return PeerAddressInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PeerAddressInfo>, I>>(object: I): PeerAddressInfo {
		const message = createBasePeerAddressInfo();
		message.address = object.address ?? "";
		message.last_dial_success = object.last_dial_success ?? undefined;
		message.last_dial_failure = object.last_dial_failure ?? undefined;
		message.dial_failures = object.dial_failures ?? 0;
		return message;
	}
};

function createBaseProtocolVersion(): ProtocolVersion {
	return { p2p: 0, block: 0, app: 0 };
}

function createBaseNodeInfo(): NodeInfo {
	return {
		protocol_version: undefined,
		node_id: "",
		listen_addr: "",
		network: "",
		version: "",
		channels: new Uint8Array(0),
		moniker: "",
		other: undefined
	};
}

function createBaseNodeInfoOther(): NodeInfoOther {
	return { tx_index: "", rpc_address: "" };
}

function createBasePeerInfo(): PeerInfo {
	return { id: "", address_info: [], last_connected: undefined };
}

function createBasePeerAddressInfo(): PeerAddressInfo {
	return { address: "", last_dial_success: undefined, last_dial_failure: undefined, dial_failures: 0 };
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

function toTimestamp(date: Date): Timestamp {
	const seconds = Math.trunc(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = (t.seconds || 0) * 1_000;
	millis += (t.nanos || 0) / 1_000_000;
	return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof globalThis.Date) {
		return o;
	} else if (typeof o === "string") {
		return new globalThis.Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
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
	["/tendermint.p2p.ProtocolVersion", ProtocolVersion as never],
	["/tendermint.p2p.NodeInfo", NodeInfo as never],
	["/tendermint.p2p.NodeInfoOther", NodeInfoOther as never],
	["/tendermint.p2p.PeerInfo", PeerInfo as never],
	["/tendermint.p2p.PeerAddressInfo", PeerAddressInfo as never]
];
export const aminoConverters = {
	"/tendermint.p2p.ProtocolVersion": {
		aminoType: "tendermint.p2p.ProtocolVersion",
		toAmino: (message: ProtocolVersion) => ({ ...message }),
		fromAmino: (object: ProtocolVersion) => ({ ...object })
	},

	"/tendermint.p2p.NodeInfo": {
		aminoType: "tendermint.p2p.NodeInfo",
		toAmino: (message: NodeInfo) => ({ ...message }),
		fromAmino: (object: NodeInfo) => ({ ...object })
	},

	"/tendermint.p2p.NodeInfoOther": {
		aminoType: "tendermint.p2p.NodeInfoOther",
		toAmino: (message: NodeInfoOther) => ({ ...message }),
		fromAmino: (object: NodeInfoOther) => ({ ...object })
	},

	"/tendermint.p2p.PeerInfo": {
		aminoType: "tendermint.p2p.PeerInfo",
		toAmino: (message: PeerInfo) => ({ ...message }),
		fromAmino: (object: PeerInfo) => ({ ...object })
	},

	"/tendermint.p2p.PeerAddressInfo": {
		aminoType: "tendermint.p2p.PeerAddressInfo",
		toAmino: (message: PeerAddressInfo) => ({ ...message }),
		fromAmino: (object: PeerAddressInfo) => ({ ...object })
	}
};

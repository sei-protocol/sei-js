import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Grant } from "./authz";

import type {
	MsgExecResponse as MsgExecResponse_type,
	MsgExec as MsgExec_type,
	MsgGrantResponse as MsgGrantResponse_type,
	MsgGrant as MsgGrant_type,
	MsgRevokeResponse as MsgRevokeResponse_type,
	MsgRevoke as MsgRevoke_type,
} from "../../../../types/cosmos/authz/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgGrant extends MsgGrant_type {}
export interface MsgExecResponse extends MsgExecResponse_type {}
export interface MsgExec extends MsgExec_type {}
export interface MsgGrantResponse extends MsgGrantResponse_type {}
export interface MsgRevoke extends MsgRevoke_type {}
export interface MsgRevokeResponse extends MsgRevokeResponse_type {}

export const MsgGrant: MessageFns<MsgGrant, "cosmos.authz.v1beta1.MsgGrant"> = {
	$type: "cosmos.authz.v1beta1.MsgGrant" as const,

	encode(message: MsgGrant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		if (message.grant !== undefined) {
			Grant.encode(message.grant, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgGrant();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.grant = Grant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgGrant {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined,
		};
	},

	toJSON(message: MsgGrant): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.grant !== undefined) {
			obj.grant = Grant.toJSON(message.grant);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgGrant>, I>>(base?: I): MsgGrant {
		return MsgGrant.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
		const message = createBaseMsgGrant();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
		return message;
	},
};

export const MsgExecResponse: MessageFns<MsgExecResponse, "cosmos.authz.v1beta1.MsgExecResponse"> = {
	$type: "cosmos.authz.v1beta1.MsgExecResponse" as const,

	encode(message: MsgExecResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.results) {
			writer.uint32(10).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgExecResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.results.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgExecResponse {
		return {
			results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => bytesFromBase64(e)) : [],
		};
	},

	toJSON(message: MsgExecResponse): unknown {
		const obj: any = {};
		if (message.results?.length) {
			obj.results = message.results.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgExecResponse>, I>>(base?: I): MsgExecResponse {
		return MsgExecResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(object: I): MsgExecResponse {
		const message = createBaseMsgExecResponse();
		message.results = object.results?.map((e) => e) || [];
		return message;
	},
};

export const MsgExec: MessageFns<MsgExec, "cosmos.authz.v1beta1.MsgExec"> = {
	$type: "cosmos.authz.v1beta1.MsgExec" as const,

	encode(message: MsgExec, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.grantee !== "") {
			writer.uint32(10).string(message.grantee);
		}
		for (const v of message.msgs) {
			Any.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgExec();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.msgs.push(Any.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgExec {
		return {
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			msgs: globalThis.Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
		};
	},

	toJSON(message: MsgExec): unknown {
		const obj: any = {};
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.msgs?.length) {
			obj.msgs = message.msgs.map((e) => Any.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgExec>, I>>(base?: I): MsgExec {
		return MsgExec.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
		const message = createBaseMsgExec();
		message.grantee = object.grantee ?? "";
		message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
		return message;
	},
};

export const MsgGrantResponse: MessageFns<MsgGrantResponse, "cosmos.authz.v1beta1.MsgGrantResponse"> = {
	$type: "cosmos.authz.v1beta1.MsgGrantResponse" as const,

	encode(_: MsgGrantResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgGrantResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgGrantResponse {
		return {};
	},

	toJSON(_: MsgGrantResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(base?: I): MsgGrantResponse {
		return MsgGrantResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(_: I): MsgGrantResponse {
		const message = createBaseMsgGrantResponse();
		return message;
	},
};

export const MsgRevoke: MessageFns<MsgRevoke, "cosmos.authz.v1beta1.MsgRevoke"> = {
	$type: "cosmos.authz.v1beta1.MsgRevoke" as const,

	encode(message: MsgRevoke, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		if (message.msg_type_url !== "") {
			writer.uint32(26).string(message.msg_type_url);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRevoke();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.msg_type_url = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgRevoke {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			msg_type_url: isSet(object.msg_type_url) ? globalThis.String(object.msg_type_url) : "",
		};
	},

	toJSON(message: MsgRevoke): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.msg_type_url !== "") {
			obj.msg_type_url = message.msg_type_url;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRevoke>, I>>(base?: I): MsgRevoke {
		return MsgRevoke.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRevoke>, I>>(object: I): MsgRevoke {
		const message = createBaseMsgRevoke();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		message.msg_type_url = object.msg_type_url ?? "";
		return message;
	},
};

export const MsgRevokeResponse: MessageFns<MsgRevokeResponse, "cosmos.authz.v1beta1.MsgRevokeResponse"> = {
	$type: "cosmos.authz.v1beta1.MsgRevokeResponse" as const,

	encode(_: MsgRevokeResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRevokeResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgRevokeResponse {
		return {};
	},

	toJSON(_: MsgRevokeResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRevokeResponse>, I>>(base?: I): MsgRevokeResponse {
		return MsgRevokeResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRevokeResponse>, I>>(_: I): MsgRevokeResponse {
		const message = createBaseMsgRevokeResponse();
		return message;
	},
};

function createBaseMsgGrant(): MsgGrant {
	return { granter: "", grantee: "", grant: undefined };
}

function createBaseMsgExecResponse(): MsgExecResponse {
	return { results: [] };
}

function createBaseMsgExec(): MsgExec {
	return { grantee: "", msgs: [] };
}

function createBaseMsgGrantResponse(): MsgGrantResponse {
	return {};
}

function createBaseMsgRevoke(): MsgRevoke {
	return { granter: "", grantee: "", msg_type_url: "" };
}

function createBaseMsgRevokeResponse(): MsgRevokeResponse {
	return {};
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
	["/cosmos.authz.v1beta1.MsgGrant", MsgGrant as never],
	["/cosmos.authz.v1beta1.MsgExecResponse", MsgExecResponse as never],
	["/cosmos.authz.v1beta1.MsgExec", MsgExec as never],
	["/cosmos.authz.v1beta1.MsgGrantResponse", MsgGrantResponse as never],
	["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke as never],
	["/cosmos.authz.v1beta1.MsgRevokeResponse", MsgRevokeResponse as never],
];
export const aminoConverters = {
	"/cosmos.authz.v1beta1.MsgGrant": {
		aminoType: "cosmos-sdk/MsgGrant",
		toAmino: (message: MsgGrant) => ({ ...message }),
		fromAmino: (object: MsgGrant) => ({ ...object }),
	},

	"/cosmos.authz.v1beta1.MsgExecResponse": {
		aminoType: "cosmos-sdk/MsgExecResponse",
		toAmino: (message: MsgExecResponse) => ({ ...message }),
		fromAmino: (object: MsgExecResponse) => ({ ...object }),
	},

	"/cosmos.authz.v1beta1.MsgExec": {
		aminoType: "cosmos-sdk/MsgExec",
		toAmino: (message: MsgExec) => ({ ...message }),
		fromAmino: (object: MsgExec) => ({ ...object }),
	},

	"/cosmos.authz.v1beta1.MsgGrantResponse": {
		aminoType: "cosmos-sdk/MsgGrantResponse",
		toAmino: (message: MsgGrantResponse) => ({ ...message }),
		fromAmino: (object: MsgGrantResponse) => ({ ...object }),
	},

	"/cosmos.authz.v1beta1.MsgRevoke": {
		aminoType: "cosmos-sdk/MsgRevoke",
		toAmino: (message: MsgRevoke) => ({ ...message }),
		fromAmino: (object: MsgRevoke) => ({ ...object }),
	},

	"/cosmos.authz.v1beta1.MsgRevokeResponse": {
		aminoType: "cosmos-sdk/MsgRevokeResponse",
		toAmino: (message: MsgRevokeResponse) => ({ ...message }),
		fromAmino: (object: MsgRevokeResponse) => ({ ...object }),
	},
};

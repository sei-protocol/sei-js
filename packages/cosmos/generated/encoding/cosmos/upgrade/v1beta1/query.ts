import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { ModuleVersion, Plan } from "./upgrade";

import type {
	QueryAppliedPlanRequest as QueryAppliedPlanRequestType,
	QueryAppliedPlanResponse as QueryAppliedPlanResponseType,
	QueryCurrentPlanRequest as QueryCurrentPlanRequestType,
	QueryCurrentPlanResponse as QueryCurrentPlanResponseType,
	QueryModuleVersionsRequest as QueryModuleVersionsRequestType,
	QueryModuleVersionsResponse as QueryModuleVersionsResponseType,
	QueryUpgradedConsensusStateRequest as QueryUpgradedConsensusStateRequestType,
	QueryUpgradedConsensusStateResponse as QueryUpgradedConsensusStateResponseType,
} from "../../../../types/cosmos/upgrade/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface QueryCurrentPlanRequest extends QueryCurrentPlanRequestType {}
interface QueryCurrentPlanResponse extends QueryCurrentPlanResponseType {}
interface QueryAppliedPlanRequest extends QueryAppliedPlanRequestType {}
interface QueryAppliedPlanResponse extends QueryAppliedPlanResponseType {}
interface QueryUpgradedConsensusStateRequest extends QueryUpgradedConsensusStateRequestType {}
interface QueryUpgradedConsensusStateResponse extends QueryUpgradedConsensusStateResponseType {}
interface QueryModuleVersionsRequest extends QueryModuleVersionsRequestType {}
interface QueryModuleVersionsResponse extends QueryModuleVersionsResponseType {}

export const QueryCurrentPlanRequest: MessageFns<QueryCurrentPlanRequest, "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest"> = {
	$type: "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest" as const,

	encode(_: QueryCurrentPlanRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPlanRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryCurrentPlanRequest();
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

	fromJSON(_: any): QueryCurrentPlanRequest {
		return {};
	},

	toJSON(_: QueryCurrentPlanRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryCurrentPlanRequest>, I>>(base?: I): QueryCurrentPlanRequest {
		return QueryCurrentPlanRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanRequest>, I>>(_: I): QueryCurrentPlanRequest {
		const message = createBaseQueryCurrentPlanRequest();
		return message;
	},
};

export const QueryCurrentPlanResponse: MessageFns<QueryCurrentPlanResponse, "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse"> = {
	$type: "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse" as const,

	encode(message: QueryCurrentPlanResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.plan !== undefined) {
			Plan.encode(message.plan, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPlanResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryCurrentPlanResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.plan = Plan.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryCurrentPlanResponse {
		return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
	},

	toJSON(message: QueryCurrentPlanResponse): unknown {
		const obj: any = {};
		if (message.plan !== undefined) {
			obj.plan = Plan.toJSON(message.plan);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryCurrentPlanResponse>, I>>(base?: I): QueryCurrentPlanResponse {
		return QueryCurrentPlanResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanResponse>, I>>(object: I): QueryCurrentPlanResponse {
		const message = createBaseQueryCurrentPlanResponse();
		message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
		return message;
	},
};

export const QueryAppliedPlanRequest: MessageFns<QueryAppliedPlanRequest, "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest"> = {
	$type: "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest" as const,

	encode(message: QueryAppliedPlanRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAppliedPlanRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAppliedPlanRequest();
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

	fromJSON(object: any): QueryAppliedPlanRequest {
		return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
	},

	toJSON(message: QueryAppliedPlanRequest): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAppliedPlanRequest>, I>>(base?: I): QueryAppliedPlanRequest {
		return QueryAppliedPlanRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanRequest>, I>>(object: I): QueryAppliedPlanRequest {
		const message = createBaseQueryAppliedPlanRequest();
		message.name = object.name ?? "";
		return message;
	},
};

export const QueryAppliedPlanResponse: MessageFns<QueryAppliedPlanResponse, "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse"> = {
	$type: "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse" as const,

	encode(message: QueryAppliedPlanResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAppliedPlanResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAppliedPlanResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAppliedPlanResponse {
		return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
	},

	toJSON(message: QueryAppliedPlanResponse): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAppliedPlanResponse>, I>>(base?: I): QueryAppliedPlanResponse {
		return QueryAppliedPlanResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanResponse>, I>>(object: I): QueryAppliedPlanResponse {
		const message = createBaseQueryAppliedPlanResponse();
		message.height = object.height ?? 0;
		return message;
	},
};

export const QueryUpgradedConsensusStateRequest: MessageFns<QueryUpgradedConsensusStateRequest, "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest"> = {
	$type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest" as const,

	encode(message: QueryUpgradedConsensusStateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.last_height !== 0) {
			writer.uint32(8).int64(message.last_height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryUpgradedConsensusStateRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.last_height = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryUpgradedConsensusStateRequest {
		return { last_height: isSet(object.last_height) ? globalThis.Number(object.last_height) : 0 };
	},

	toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
		const obj: any = {};
		if (message.last_height !== 0) {
			obj.last_height = Math.round(message.last_height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>>(base?: I): QueryUpgradedConsensusStateRequest {
		return QueryUpgradedConsensusStateRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>>(object: I): QueryUpgradedConsensusStateRequest {
		const message = createBaseQueryUpgradedConsensusStateRequest();
		message.last_height = object.last_height ?? 0;
		return message;
	},
};

export const QueryUpgradedConsensusStateResponse: MessageFns<
	QueryUpgradedConsensusStateResponse,
	"cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse"
> = {
	$type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse" as const,

	encode(message: QueryUpgradedConsensusStateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.upgraded_consensus_state.length !== 0) {
			writer.uint32(18).bytes(message.upgraded_consensus_state);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryUpgradedConsensusStateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.upgraded_consensus_state = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryUpgradedConsensusStateResponse {
		return {
			upgraded_consensus_state: isSet(object.upgraded_consensus_state) ? bytesFromBase64(object.upgraded_consensus_state) : new Uint8Array(0),
		};
	},

	toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
		const obj: any = {};
		if (message.upgraded_consensus_state.length !== 0) {
			obj.upgraded_consensus_state = base64FromBytes(message.upgraded_consensus_state);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>>(base?: I): QueryUpgradedConsensusStateResponse {
		return QueryUpgradedConsensusStateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>>(object: I): QueryUpgradedConsensusStateResponse {
		const message = createBaseQueryUpgradedConsensusStateResponse();
		message.upgraded_consensus_state = object.upgraded_consensus_state ?? new Uint8Array(0);
		return message;
	},
};

export const QueryModuleVersionsRequest: MessageFns<QueryModuleVersionsRequest, "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest"> = {
	$type: "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest" as const,

	encode(message: QueryModuleVersionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.module_name !== "") {
			writer.uint32(10).string(message.module_name);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleVersionsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryModuleVersionsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.module_name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryModuleVersionsRequest {
		return { module_name: isSet(object.module_name) ? globalThis.String(object.module_name) : "" };
	},

	toJSON(message: QueryModuleVersionsRequest): unknown {
		const obj: any = {};
		if (message.module_name !== "") {
			obj.module_name = message.module_name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryModuleVersionsRequest>, I>>(base?: I): QueryModuleVersionsRequest {
		return QueryModuleVersionsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsRequest>, I>>(object: I): QueryModuleVersionsRequest {
		const message = createBaseQueryModuleVersionsRequest();
		message.module_name = object.module_name ?? "";
		return message;
	},
};

export const QueryModuleVersionsResponse: MessageFns<QueryModuleVersionsResponse, "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse"> = {
	$type: "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse" as const,

	encode(message: QueryModuleVersionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.module_versions) {
			ModuleVersion.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleVersionsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryModuleVersionsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.module_versions.push(ModuleVersion.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryModuleVersionsResponse {
		return {
			module_versions: globalThis.Array.isArray(object?.module_versions) ? object.module_versions.map((e: any) => ModuleVersion.fromJSON(e)) : [],
		};
	},

	toJSON(message: QueryModuleVersionsResponse): unknown {
		const obj: any = {};
		if (message.module_versions?.length) {
			obj.module_versions = message.module_versions.map((e) => ModuleVersion.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryModuleVersionsResponse>, I>>(base?: I): QueryModuleVersionsResponse {
		return QueryModuleVersionsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsResponse>, I>>(object: I): QueryModuleVersionsResponse {
		const message = createBaseQueryModuleVersionsResponse();
		message.module_versions = object.module_versions?.map((e) => ModuleVersion.fromPartial(e)) || [];
		return message;
	},
};

function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
	return {};
}

function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
	return { plan: undefined };
}

function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
	return { name: "" };
}

function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
	return { height: 0 };
}

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
	return { last_height: 0 };
}

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
	return { upgraded_consensus_state: new Uint8Array(0) };
}

function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
	return { module_name: "" };
}

function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
	return { module_versions: [] };
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

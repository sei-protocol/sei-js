import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import {
	Params,
	ValidatorMissedBlockArray,
	ValidatorMissedBlockArrayLegacyMissedHeights,
	ValidatorSigningInfo,
	ValidatorSigningInfoLegacyMissedHeights
} from "./slashing";

import type {
	GenesisStateLegacyMissingHeights as GenesisStateLegacyMissingHeights_type,
	GenesisStateLegacyV43 as GenesisStateLegacyV43_type,
	GenesisState as GenesisState_type,
	MissedBlock as MissedBlock_type,
	SigningInfoLegacyMissedHeights as SigningInfoLegacyMissedHeights_type,
	SigningInfo as SigningInfo_type,
	ValidatorMissedBlocks as ValidatorMissedBlocks_type
} from "../../../../types/cosmos/slashing/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}
export interface GenesisStateLegacyMissingHeights extends GenesisStateLegacyMissingHeights_type {}
export interface GenesisStateLegacyV43 extends GenesisStateLegacyV43_type {}
export interface SigningInfo extends SigningInfo_type {}
export interface SigningInfoLegacyMissedHeights extends SigningInfoLegacyMissedHeights_type {}
export interface ValidatorMissedBlocks extends ValidatorMissedBlocks_type {}
export interface MissedBlock extends MissedBlock_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.slashing.v1beta1.GenesisState"> = {
	$type: "cosmos.slashing.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.signing_infos) {
			SigningInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.missed_blocks) {
			ValidatorMissedBlockArray.encode(v!, writer.uint32(26).fork()).join();
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

					message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.missed_blocks.push(ValidatorMissedBlockArray.decode(reader, reader.uint32()));
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
			signing_infos: globalThis.Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromJSON(e)) : [],
			missed_blocks: globalThis.Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlockArray.fromJSON(e)) : []
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.signing_infos?.length) {
			obj.signing_infos = message.signing_infos.map((e) => SigningInfo.toJSON(e));
		}
		if (message.missed_blocks?.length) {
			obj.missed_blocks = message.missed_blocks.map((e) => ValidatorMissedBlockArray.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.signing_infos = object.signing_infos?.map((e) => SigningInfo.fromPartial(e)) || [];
		message.missed_blocks = object.missed_blocks?.map((e) => ValidatorMissedBlockArray.fromPartial(e)) || [];
		return message;
	}
};

export const GenesisStateLegacyMissingHeights: MessageFns<GenesisStateLegacyMissingHeights, "cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights"> = {
	$type: "cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights" as const,

	encode(message: GenesisStateLegacyMissingHeights, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.signing_infos) {
			SigningInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.missed_blocks) {
			ValidatorMissedBlockArrayLegacyMissedHeights.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisStateLegacyMissingHeights {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisStateLegacyMissingHeights();
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

					message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.missed_blocks.push(ValidatorMissedBlockArrayLegacyMissedHeights.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisStateLegacyMissingHeights {
		return {
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			signing_infos: globalThis.Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromJSON(e)) : [],
			missed_blocks: globalThis.Array.isArray(object?.missed_blocks)
				? object.missed_blocks.map((e: any) => ValidatorMissedBlockArrayLegacyMissedHeights.fromJSON(e))
				: []
		};
	},

	toJSON(message: GenesisStateLegacyMissingHeights): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.signing_infos?.length) {
			obj.signing_infos = message.signing_infos.map((e) => SigningInfo.toJSON(e));
		}
		if (message.missed_blocks?.length) {
			obj.missed_blocks = message.missed_blocks.map((e) => ValidatorMissedBlockArrayLegacyMissedHeights.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisStateLegacyMissingHeights>, I>>(base?: I): GenesisStateLegacyMissingHeights {
		return GenesisStateLegacyMissingHeights.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisStateLegacyMissingHeights>, I>>(object: I): GenesisStateLegacyMissingHeights {
		const message = createBaseGenesisStateLegacyMissingHeights();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.signing_infos = object.signing_infos?.map((e) => SigningInfo.fromPartial(e)) || [];
		message.missed_blocks = object.missed_blocks?.map((e) => ValidatorMissedBlockArrayLegacyMissedHeights.fromPartial(e)) || [];
		return message;
	}
};

export const GenesisStateLegacyV43: MessageFns<GenesisStateLegacyV43, "cosmos.slashing.v1beta1.GenesisStateLegacyV43"> = {
	$type: "cosmos.slashing.v1beta1.GenesisStateLegacyV43" as const,

	encode(message: GenesisStateLegacyV43, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.signing_infos) {
			SigningInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.missed_blocks) {
			ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisStateLegacyV43 {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisStateLegacyV43();
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

					message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisStateLegacyV43 {
		return {
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			signing_infos: globalThis.Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromJSON(e)) : [],
			missed_blocks: globalThis.Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e)) : []
		};
	},

	toJSON(message: GenesisStateLegacyV43): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.signing_infos?.length) {
			obj.signing_infos = message.signing_infos.map((e) => SigningInfo.toJSON(e));
		}
		if (message.missed_blocks?.length) {
			obj.missed_blocks = message.missed_blocks.map((e) => ValidatorMissedBlocks.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisStateLegacyV43>, I>>(base?: I): GenesisStateLegacyV43 {
		return GenesisStateLegacyV43.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisStateLegacyV43>, I>>(object: I): GenesisStateLegacyV43 {
		const message = createBaseGenesisStateLegacyV43();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.signing_infos = object.signing_infos?.map((e) => SigningInfo.fromPartial(e)) || [];
		message.missed_blocks = object.missed_blocks?.map((e) => ValidatorMissedBlocks.fromPartial(e)) || [];
		return message;
	}
};

export const SigningInfo: MessageFns<SigningInfo, "cosmos.slashing.v1beta1.SigningInfo"> = {
	$type: "cosmos.slashing.v1beta1.SigningInfo" as const,

	encode(message: SigningInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.validator_signing_info !== undefined) {
			ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SigningInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSigningInfo();
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

					message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SigningInfo {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			validator_signing_info: isSet(object.validator_signing_info) ? ValidatorSigningInfo.fromJSON(object.validator_signing_info) : undefined
		};
	},

	toJSON(message: SigningInfo): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.validator_signing_info !== undefined) {
			obj.validator_signing_info = ValidatorSigningInfo.toJSON(message.validator_signing_info);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SigningInfo>, I>>(base?: I): SigningInfo {
		return SigningInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SigningInfo>, I>>(object: I): SigningInfo {
		const message = createBaseSigningInfo();
		message.address = object.address ?? "";
		message.validator_signing_info =
			object.validator_signing_info !== undefined && object.validator_signing_info !== null
				? ValidatorSigningInfo.fromPartial(object.validator_signing_info)
				: undefined;
		return message;
	}
};

export const SigningInfoLegacyMissedHeights: MessageFns<SigningInfoLegacyMissedHeights, "cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights"> = {
	$type: "cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights" as const,

	encode(message: SigningInfoLegacyMissedHeights, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.validator_signing_info !== undefined) {
			ValidatorSigningInfoLegacyMissedHeights.encode(message.validator_signing_info, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SigningInfoLegacyMissedHeights {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSigningInfoLegacyMissedHeights();
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

					message.validator_signing_info = ValidatorSigningInfoLegacyMissedHeights.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SigningInfoLegacyMissedHeights {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			validator_signing_info: isSet(object.validator_signing_info) ? ValidatorSigningInfoLegacyMissedHeights.fromJSON(object.validator_signing_info) : undefined
		};
	},

	toJSON(message: SigningInfoLegacyMissedHeights): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.validator_signing_info !== undefined) {
			obj.validator_signing_info = ValidatorSigningInfoLegacyMissedHeights.toJSON(message.validator_signing_info);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SigningInfoLegacyMissedHeights>, I>>(base?: I): SigningInfoLegacyMissedHeights {
		return SigningInfoLegacyMissedHeights.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SigningInfoLegacyMissedHeights>, I>>(object: I): SigningInfoLegacyMissedHeights {
		const message = createBaseSigningInfoLegacyMissedHeights();
		message.address = object.address ?? "";
		message.validator_signing_info =
			object.validator_signing_info !== undefined && object.validator_signing_info !== null
				? ValidatorSigningInfoLegacyMissedHeights.fromPartial(object.validator_signing_info)
				: undefined;
		return message;
	}
};

export const ValidatorMissedBlocks: MessageFns<ValidatorMissedBlocks, "cosmos.slashing.v1beta1.ValidatorMissedBlocks"> = {
	$type: "cosmos.slashing.v1beta1.ValidatorMissedBlocks" as const,

	encode(message: ValidatorMissedBlocks, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		for (const v of message.missed_blocks) {
			MissedBlock.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlocks {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorMissedBlocks();
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

					message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorMissedBlocks {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			missed_blocks: globalThis.Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => MissedBlock.fromJSON(e)) : []
		};
	},

	toJSON(message: ValidatorMissedBlocks): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.missed_blocks?.length) {
			obj.missed_blocks = message.missed_blocks.map((e) => MissedBlock.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorMissedBlocks>, I>>(base?: I): ValidatorMissedBlocks {
		return ValidatorMissedBlocks.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorMissedBlocks>, I>>(object: I): ValidatorMissedBlocks {
		const message = createBaseValidatorMissedBlocks();
		message.address = object.address ?? "";
		message.missed_blocks = object.missed_blocks?.map((e) => MissedBlock.fromPartial(e)) || [];
		return message;
	}
};

export const MissedBlock: MessageFns<MissedBlock, "cosmos.slashing.v1beta1.MissedBlock"> = {
	$type: "cosmos.slashing.v1beta1.MissedBlock" as const,

	encode(message: MissedBlock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.index !== 0) {
			writer.uint32(8).int64(message.index);
		}
		if (message.missed !== false) {
			writer.uint32(16).bool(message.missed);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MissedBlock {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMissedBlock();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.index = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.missed = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MissedBlock {
		return {
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			missed: isSet(object.missed) ? globalThis.Boolean(object.missed) : false
		};
	},

	toJSON(message: MissedBlock): unknown {
		const obj: any = {};
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.missed !== false) {
			obj.missed = message.missed;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MissedBlock>, I>>(base?: I): MissedBlock {
		return MissedBlock.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MissedBlock>, I>>(object: I): MissedBlock {
		const message = createBaseMissedBlock();
		message.index = object.index ?? 0;
		message.missed = object.missed ?? false;
		return message;
	}
};

function createBaseGenesisState(): GenesisState {
	return { params: undefined, signing_infos: [], missed_blocks: [] };
}

function createBaseGenesisStateLegacyMissingHeights(): GenesisStateLegacyMissingHeights {
	return { params: undefined, signing_infos: [], missed_blocks: [] };
}

function createBaseGenesisStateLegacyV43(): GenesisStateLegacyV43 {
	return { params: undefined, signing_infos: [], missed_blocks: [] };
}

function createBaseSigningInfo(): SigningInfo {
	return { address: "", validator_signing_info: undefined };
}

function createBaseSigningInfoLegacyMissedHeights(): SigningInfoLegacyMissedHeights {
	return { address: "", validator_signing_info: undefined };
}

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
	return { address: "", missed_blocks: [] };
}

function createBaseMissedBlock(): MissedBlock {
	return { index: 0, missed: false };
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
	["/cosmos.slashing.v1beta1.GenesisState", GenesisState as never],
	["/cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights", GenesisStateLegacyMissingHeights as never],
	["/cosmos.slashing.v1beta1.GenesisStateLegacyV43", GenesisStateLegacyV43 as never],
	["/cosmos.slashing.v1beta1.SigningInfo", SigningInfo as never],
	["/cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights", SigningInfoLegacyMissedHeights as never],
	["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", ValidatorMissedBlocks as never],
	["/cosmos.slashing.v1beta1.MissedBlock", MissedBlock as never]
];
export const aminoConverters = {
	"/cosmos.slashing.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights": {
		aminoType: "cosmos-sdk/GenesisStateLegacyMissingHeights",
		toAmino: (message: GenesisStateLegacyMissingHeights) => ({ ...message }),
		fromAmino: (object: GenesisStateLegacyMissingHeights) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.GenesisStateLegacyV43": {
		aminoType: "cosmos-sdk/GenesisStateLegacyV43",
		toAmino: (message: GenesisStateLegacyV43) => ({ ...message }),
		fromAmino: (object: GenesisStateLegacyV43) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.SigningInfo": {
		aminoType: "cosmos-sdk/SigningInfo",
		toAmino: (message: SigningInfo) => ({ ...message }),
		fromAmino: (object: SigningInfo) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights": {
		aminoType: "cosmos-sdk/SigningInfoLegacyMissedHeights",
		toAmino: (message: SigningInfoLegacyMissedHeights) => ({ ...message }),
		fromAmino: (object: SigningInfoLegacyMissedHeights) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.ValidatorMissedBlocks": {
		aminoType: "cosmos-sdk/ValidatorMissedBlocks",
		toAmino: (message: ValidatorMissedBlocks) => ({ ...message }),
		fromAmino: (object: ValidatorMissedBlocks) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.MissedBlock": {
		aminoType: "cosmos-sdk/MissedBlock",
		toAmino: (message: MissedBlock) => ({ ...message }),
		fromAmino: (object: MissedBlock) => ({ ...object })
	}
};

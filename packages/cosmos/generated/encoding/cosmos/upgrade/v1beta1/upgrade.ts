import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Timestamp } from "../../../google/protobuf/timestamp";

import type {
	CancelSoftwareUpgradeProposal as CancelSoftwareUpgradeProposalType,
	ModuleVersion as ModuleVersionType,
	Plan as PlanType,
	SoftwareUpgradeProposal as SoftwareUpgradeProposalType,
} from "../../../../types/cosmos/upgrade/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface Plan extends PlanType {}
interface SoftwareUpgradeProposal extends SoftwareUpgradeProposalType {}
interface CancelSoftwareUpgradeProposal extends CancelSoftwareUpgradeProposalType {}
interface ModuleVersion extends ModuleVersionType {}

export const Plan: MessageFns<Plan, "cosmos.upgrade.v1beta1.Plan"> = {
	$type: "cosmos.upgrade.v1beta1.Plan" as const,

	encode(message: Plan, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).join();
		}
		if (message.height !== 0) {
			writer.uint32(24).int64(message.height);
		}
		if (message.info !== "") {
			writer.uint32(34).string(message.info);
		}
		if (message.upgraded_client_state !== undefined) {
			Any.encode(message.upgraded_client_state, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Plan {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePlan();
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

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.info = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.upgraded_client_state = Any.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Plan {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			info: isSet(object.info) ? globalThis.String(object.info) : "",
			upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined,
		};
	},

	toJSON(message: Plan): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.info !== "") {
			obj.info = message.info;
		}
		if (message.upgraded_client_state !== undefined) {
			obj.upgraded_client_state = Any.toJSON(message.upgraded_client_state);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Plan>, I>>(base?: I): Plan {
		return Plan.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Plan>, I>>(object: I): Plan {
		const message = createBasePlan();
		message.name = object.name ?? "";
		message.time = object.time ?? undefined;
		message.height = object.height ?? 0;
		message.info = object.info ?? "";
		message.upgraded_client_state =
			object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
		return message;
	},
};

export const SoftwareUpgradeProposal: MessageFns<SoftwareUpgradeProposal, "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal"> = {
	$type: "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal" as const,

	encode(message: SoftwareUpgradeProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.plan !== undefined) {
			Plan.encode(message.plan, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SoftwareUpgradeProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSoftwareUpgradeProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.title = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.description = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
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

	fromJSON(object: any): SoftwareUpgradeProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
		};
	},

	toJSON(message: SoftwareUpgradeProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.plan !== undefined) {
			obj.plan = Plan.toJSON(message.plan);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SoftwareUpgradeProposal>, I>>(base?: I): SoftwareUpgradeProposal {
		return SoftwareUpgradeProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SoftwareUpgradeProposal>, I>>(object: I): SoftwareUpgradeProposal {
		const message = createBaseSoftwareUpgradeProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
		return message;
	},
};

export const CancelSoftwareUpgradeProposal: MessageFns<CancelSoftwareUpgradeProposal, "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal"> = {
	$type: "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal" as const,

	encode(message: CancelSoftwareUpgradeProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CancelSoftwareUpgradeProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCancelSoftwareUpgradeProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.title = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.description = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CancelSoftwareUpgradeProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
		};
	},

	toJSON(message: CancelSoftwareUpgradeProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CancelSoftwareUpgradeProposal>, I>>(base?: I): CancelSoftwareUpgradeProposal {
		return CancelSoftwareUpgradeProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CancelSoftwareUpgradeProposal>, I>>(object: I): CancelSoftwareUpgradeProposal {
		const message = createBaseCancelSoftwareUpgradeProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		return message;
	},
};

export const ModuleVersion: MessageFns<ModuleVersion, "cosmos.upgrade.v1beta1.ModuleVersion"> = {
	$type: "cosmos.upgrade.v1beta1.ModuleVersion" as const,

	encode(message: ModuleVersion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.version !== 0) {
			writer.uint32(16).uint64(message.version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ModuleVersion {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseModuleVersion();
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

					message.version = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ModuleVersion {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
		};
	},

	toJSON(message: ModuleVersion): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ModuleVersion>, I>>(base?: I): ModuleVersion {
		return ModuleVersion.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ModuleVersion>, I>>(object: I): ModuleVersion {
		const message = createBaseModuleVersion();
		message.name = object.name ?? "";
		message.version = object.version ?? 0;
		return message;
	},
};

function createBasePlan(): Plan {
	return { name: "", time: undefined, height: 0, info: "", upgraded_client_state: undefined };
}

function createBaseSoftwareUpgradeProposal(): SoftwareUpgradeProposal {
	return { title: "", description: "", plan: undefined };
}

function createBaseCancelSoftwareUpgradeProposal(): CancelSoftwareUpgradeProposal {
	return { title: "", description: "" };
}

function createBaseModuleVersion(): ModuleVersion {
	return { name: "", version: 0 };
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
	["/cosmos.upgrade.v1beta1.Plan", Plan as never],
	["/cosmos.upgrade.v1beta1.ModuleVersion", ModuleVersion as never],
];
export const aminoConverters = {
	"/cosmos.upgrade.v1beta1.Plan": {
		aminoType: "cosmos-sdk/Plan",
		toAmino: (message: Plan) => ({ ...message }),
		fromAmino: (object: Plan) => ({ ...object }),
	},

	"/cosmos.upgrade.v1beta1.ModuleVersion": {
		aminoType: "cosmos-sdk/ModuleVersion",
		toAmino: (message: ModuleVersion) => ({ ...message }),
		fromAmino: (object: ModuleVersion) => ({ ...object }),
	},
};

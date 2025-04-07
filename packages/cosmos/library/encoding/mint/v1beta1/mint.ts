import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	Minter as Minter_type,
	Params as Params_type,
	ScheduledTokenRelease as ScheduledTokenRelease_type,
	Version2Minter as Version2Minter_type,
	Version2Params as Version2Params_type,
	Version2ScheduledTokenRelease as Version2ScheduledTokenRelease_type
} from "../../../types/mint/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface Minter extends Minter_type {}
export interface ScheduledTokenRelease extends ScheduledTokenRelease_type {}
export interface Params extends Params_type {}
export interface Version2Minter extends Version2Minter_type {}
export interface Version2ScheduledTokenRelease extends Version2ScheduledTokenRelease_type {}
export interface Version2Params extends Version2Params_type {}

export const Minter: MessageFns<Minter, "seiprotocol.seichain.mint.Minter"> = {
	$type: "seiprotocol.seichain.mint.Minter" as const,

	encode(message: Minter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.start_date !== "") {
			writer.uint32(10).string(message.start_date);
		}
		if (message.end_date !== "") {
			writer.uint32(18).string(message.end_date);
		}
		if (message.denom !== "") {
			writer.uint32(26).string(message.denom);
		}
		if (message.total_mint_amount !== 0) {
			writer.uint32(32).uint64(message.total_mint_amount);
		}
		if (message.remaining_mint_amount !== 0) {
			writer.uint32(40).uint64(message.remaining_mint_amount);
		}
		if (message.last_mint_amount !== 0) {
			writer.uint32(48).uint64(message.last_mint_amount);
		}
		if (message.last_mint_date !== "") {
			writer.uint32(58).string(message.last_mint_date);
		}
		if (message.last_mint_height !== 0) {
			writer.uint32(64).uint64(message.last_mint_height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Minter {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMinter();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.start_date = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.end_date = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.total_mint_amount = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.remaining_mint_amount = longToNumber(reader.uint64());
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.last_mint_amount = longToNumber(reader.uint64());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.last_mint_date = reader.string();
					continue;
				case 8:
					if (tag !== 64) {
						break;
					}

					message.last_mint_height = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Minter {
		return {
			start_date: isSet(object.start_date) ? globalThis.String(object.start_date) : "",
			end_date: isSet(object.end_date) ? globalThis.String(object.end_date) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			total_mint_amount: isSet(object.total_mint_amount) ? globalThis.Number(object.total_mint_amount) : 0,
			remaining_mint_amount: isSet(object.remaining_mint_amount) ? globalThis.Number(object.remaining_mint_amount) : 0,
			last_mint_amount: isSet(object.last_mint_amount) ? globalThis.Number(object.last_mint_amount) : 0,
			last_mint_date: isSet(object.last_mint_date) ? globalThis.String(object.last_mint_date) : "",
			last_mint_height: isSet(object.last_mint_height) ? globalThis.Number(object.last_mint_height) : 0
		};
	},

	toJSON(message: Minter): unknown {
		const obj: any = {};
		if (message.start_date !== "") {
			obj.start_date = message.start_date;
		}
		if (message.end_date !== "") {
			obj.end_date = message.end_date;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.total_mint_amount !== 0) {
			obj.total_mint_amount = Math.round(message.total_mint_amount);
		}
		if (message.remaining_mint_amount !== 0) {
			obj.remaining_mint_amount = Math.round(message.remaining_mint_amount);
		}
		if (message.last_mint_amount !== 0) {
			obj.last_mint_amount = Math.round(message.last_mint_amount);
		}
		if (message.last_mint_date !== "") {
			obj.last_mint_date = message.last_mint_date;
		}
		if (message.last_mint_height !== 0) {
			obj.last_mint_height = Math.round(message.last_mint_height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Minter>, I>>(base?: I): Minter {
		return Minter.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Minter>, I>>(object: I): Minter {
		const message = createBaseMinter();
		message.start_date = object.start_date ?? "";
		message.end_date = object.end_date ?? "";
		message.denom = object.denom ?? "";
		message.total_mint_amount = object.total_mint_amount ?? 0;
		message.remaining_mint_amount = object.remaining_mint_amount ?? 0;
		message.last_mint_amount = object.last_mint_amount ?? 0;
		message.last_mint_date = object.last_mint_date ?? "";
		message.last_mint_height = object.last_mint_height ?? 0;
		return message;
	}
};

export const ScheduledTokenRelease: MessageFns<ScheduledTokenRelease, "seiprotocol.seichain.mint.ScheduledTokenRelease"> = {
	$type: "seiprotocol.seichain.mint.ScheduledTokenRelease" as const,

	encode(message: ScheduledTokenRelease, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.start_date !== "") {
			writer.uint32(10).string(message.start_date);
		}
		if (message.end_date !== "") {
			writer.uint32(18).string(message.end_date);
		}
		if (message.token_release_amount !== 0) {
			writer.uint32(24).uint64(message.token_release_amount);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ScheduledTokenRelease {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseScheduledTokenRelease();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.start_date = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.end_date = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.token_release_amount = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ScheduledTokenRelease {
		return {
			start_date: isSet(object.start_date) ? globalThis.String(object.start_date) : "",
			end_date: isSet(object.end_date) ? globalThis.String(object.end_date) : "",
			token_release_amount: isSet(object.token_release_amount) ? globalThis.Number(object.token_release_amount) : 0
		};
	},

	toJSON(message: ScheduledTokenRelease): unknown {
		const obj: any = {};
		if (message.start_date !== "") {
			obj.start_date = message.start_date;
		}
		if (message.end_date !== "") {
			obj.end_date = message.end_date;
		}
		if (message.token_release_amount !== 0) {
			obj.token_release_amount = Math.round(message.token_release_amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ScheduledTokenRelease>, I>>(base?: I): ScheduledTokenRelease {
		return ScheduledTokenRelease.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ScheduledTokenRelease>, I>>(object: I): ScheduledTokenRelease {
		const message = createBaseScheduledTokenRelease();
		message.start_date = object.start_date ?? "";
		message.end_date = object.end_date ?? "";
		message.token_release_amount = object.token_release_amount ?? 0;
		return message;
	}
};

export const Params: MessageFns<Params, "seiprotocol.seichain.mint.Params"> = {
	$type: "seiprotocol.seichain.mint.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.mint_denom !== "") {
			writer.uint32(10).string(message.mint_denom);
		}
		for (const v of message.token_release_schedule) {
			ScheduledTokenRelease.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.mint_denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.token_release_schedule.push(ScheduledTokenRelease.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			mint_denom: isSet(object.mint_denom) ? globalThis.String(object.mint_denom) : "",
			token_release_schedule: globalThis.Array.isArray(object?.token_release_schedule)
				? object.token_release_schedule.map((e: any) => ScheduledTokenRelease.fromJSON(e))
				: []
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.mint_denom !== "") {
			obj.mint_denom = message.mint_denom;
		}
		if (message.token_release_schedule?.length) {
			obj.token_release_schedule = message.token_release_schedule.map((e) => ScheduledTokenRelease.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.mint_denom = object.mint_denom ?? "";
		message.token_release_schedule = object.token_release_schedule?.map((e) => ScheduledTokenRelease.fromPartial(e)) || [];
		return message;
	}
};

export const Version2Minter: MessageFns<Version2Minter, "seiprotocol.seichain.mint.Version2Minter"> = {
	$type: "seiprotocol.seichain.mint.Version2Minter" as const,

	encode(message: Version2Minter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.last_mint_amount !== "") {
			writer.uint32(10).string(message.last_mint_amount);
		}
		if (message.last_mint_date !== "") {
			writer.uint32(18).string(message.last_mint_date);
		}
		if (message.last_mint_height !== 0) {
			writer.uint32(24).int64(message.last_mint_height);
		}
		if (message.denom !== "") {
			writer.uint32(34).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Version2Minter {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVersion2Minter();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.last_mint_amount = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.last_mint_date = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.last_mint_height = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Version2Minter {
		return {
			last_mint_amount: isSet(object.last_mint_amount) ? globalThis.String(object.last_mint_amount) : "",
			last_mint_date: isSet(object.last_mint_date) ? globalThis.String(object.last_mint_date) : "",
			last_mint_height: isSet(object.last_mint_height) ? globalThis.Number(object.last_mint_height) : 0,
			denom: isSet(object.denom) ? globalThis.String(object.denom) : ""
		};
	},

	toJSON(message: Version2Minter): unknown {
		const obj: any = {};
		if (message.last_mint_amount !== "") {
			obj.last_mint_amount = message.last_mint_amount;
		}
		if (message.last_mint_date !== "") {
			obj.last_mint_date = message.last_mint_date;
		}
		if (message.last_mint_height !== 0) {
			obj.last_mint_height = Math.round(message.last_mint_height);
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Version2Minter>, I>>(base?: I): Version2Minter {
		return Version2Minter.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Version2Minter>, I>>(object: I): Version2Minter {
		const message = createBaseVersion2Minter();
		message.last_mint_amount = object.last_mint_amount ?? "";
		message.last_mint_date = object.last_mint_date ?? "";
		message.last_mint_height = object.last_mint_height ?? 0;
		message.denom = object.denom ?? "";
		return message;
	}
};

export const Version2ScheduledTokenRelease: MessageFns<Version2ScheduledTokenRelease, "seiprotocol.seichain.mint.Version2ScheduledTokenRelease"> = {
	$type: "seiprotocol.seichain.mint.Version2ScheduledTokenRelease" as const,

	encode(message: Version2ScheduledTokenRelease, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.date !== "") {
			writer.uint32(10).string(message.date);
		}
		if (message.token_release_amount !== 0) {
			writer.uint32(16).int64(message.token_release_amount);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Version2ScheduledTokenRelease {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVersion2ScheduledTokenRelease();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.date = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.token_release_amount = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Version2ScheduledTokenRelease {
		return {
			date: isSet(object.date) ? globalThis.String(object.date) : "",
			token_release_amount: isSet(object.token_release_amount) ? globalThis.Number(object.token_release_amount) : 0
		};
	},

	toJSON(message: Version2ScheduledTokenRelease): unknown {
		const obj: any = {};
		if (message.date !== "") {
			obj.date = message.date;
		}
		if (message.token_release_amount !== 0) {
			obj.token_release_amount = Math.round(message.token_release_amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Version2ScheduledTokenRelease>, I>>(base?: I): Version2ScheduledTokenRelease {
		return Version2ScheduledTokenRelease.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Version2ScheduledTokenRelease>, I>>(object: I): Version2ScheduledTokenRelease {
		const message = createBaseVersion2ScheduledTokenRelease();
		message.date = object.date ?? "";
		message.token_release_amount = object.token_release_amount ?? 0;
		return message;
	}
};

export const Version2Params: MessageFns<Version2Params, "seiprotocol.seichain.mint.Version2Params"> = {
	$type: "seiprotocol.seichain.mint.Version2Params" as const,

	encode(message: Version2Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.mint_denom !== "") {
			writer.uint32(10).string(message.mint_denom);
		}
		for (const v of message.token_release_schedule) {
			Version2ScheduledTokenRelease.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Version2Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVersion2Params();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.mint_denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.token_release_schedule.push(Version2ScheduledTokenRelease.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Version2Params {
		return {
			mint_denom: isSet(object.mint_denom) ? globalThis.String(object.mint_denom) : "",
			token_release_schedule: globalThis.Array.isArray(object?.token_release_schedule)
				? object.token_release_schedule.map((e: any) => Version2ScheduledTokenRelease.fromJSON(e))
				: []
		};
	},

	toJSON(message: Version2Params): unknown {
		const obj: any = {};
		if (message.mint_denom !== "") {
			obj.mint_denom = message.mint_denom;
		}
		if (message.token_release_schedule?.length) {
			obj.token_release_schedule = message.token_release_schedule.map((e) => Version2ScheduledTokenRelease.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Version2Params>, I>>(base?: I): Version2Params {
		return Version2Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Version2Params>, I>>(object: I): Version2Params {
		const message = createBaseVersion2Params();
		message.mint_denom = object.mint_denom ?? "";
		message.token_release_schedule = object.token_release_schedule?.map((e) => Version2ScheduledTokenRelease.fromPartial(e)) || [];
		return message;
	}
};

function createBaseMinter(): Minter {
	return {
		start_date: "",
		end_date: "",
		denom: "",
		total_mint_amount: 0,
		remaining_mint_amount: 0,
		last_mint_amount: 0,
		last_mint_date: "",
		last_mint_height: 0
	};
}

function createBaseScheduledTokenRelease(): ScheduledTokenRelease {
	return { start_date: "", end_date: "", token_release_amount: 0 };
}

function createBaseParams(): Params {
	return { mint_denom: "", token_release_schedule: [] };
}

function createBaseVersion2Minter(): Version2Minter {
	return { last_mint_amount: "", last_mint_date: "", last_mint_height: 0, denom: "" };
}

function createBaseVersion2ScheduledTokenRelease(): Version2ScheduledTokenRelease {
	return { date: "", token_release_amount: 0 };
}

function createBaseVersion2Params(): Version2Params {
	return { mint_denom: "", token_release_schedule: [] };
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
	["/seiprotocol.seichain.mint.Minter", Minter as never],
	["/seiprotocol.seichain.mint.Params", Params as never],
	["/seiprotocol.seichain.mint.Version2Minter", Version2Minter as never],
	["/seiprotocol.seichain.mint.Version2Params", Version2Params as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.mint.Minter": {
		aminoType: "mint/Minter",
		toAmino: (message: Minter) => ({ ...message }),
		fromAmino: (object: Minter) => ({ ...object })
	},

	"/seiprotocol.seichain.mint.Params": {
		aminoType: "mint/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object })
	},

	"/seiprotocol.seichain.mint.Version2Minter": {
		aminoType: "mint/Version2Minter",
		toAmino: (message: Version2Minter) => ({ ...message }),
		fromAmino: (object: Version2Minter) => ({ ...object })
	},

	"/seiprotocol.seichain.mint.Version2Params": {
		aminoType: "mint/Version2Params",
		toAmino: (message: Version2Params) => ({ ...message }),
		fromAmino: (object: Version2Params) => ({ ...object })
	}
};

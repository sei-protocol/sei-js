import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Params as Params_type } from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface Params extends Params_type {}

export const Params: MessageFns<Params, "seiprotocol.seichain.confidentialtransfers.Params"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.enable_ct_module !== false) {
			writer.uint32(8).bool(message.enable_ct_module);
		}
		if (message.range_proof_gas_cost !== 0) {
			writer.uint32(16).uint64(message.range_proof_gas_cost);
		}
		for (const v of message.enabled_denoms) {
			writer.uint32(26).string(v!);
		}
		if (message.ciphertext_gas_cost !== 0) {
			writer.uint32(32).uint64(message.ciphertext_gas_cost);
		}
		if (message.proof_verification_gas_cost !== 0) {
			writer.uint32(40).uint64(message.proof_verification_gas_cost);
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
					if (tag !== 8) {
						break;
					}

					message.enable_ct_module = reader.bool();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.range_proof_gas_cost = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.enabled_denoms.push(reader.string());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.ciphertext_gas_cost = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.proof_verification_gas_cost = longToNumber(reader.uint64());
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
			enable_ct_module: isSet(object.enable_ct_module) ? globalThis.Boolean(object.enable_ct_module) : false,
			range_proof_gas_cost: isSet(object.range_proof_gas_cost) ? globalThis.Number(object.range_proof_gas_cost) : 0,
			enabled_denoms: globalThis.Array.isArray(object?.enabled_denoms) ? object.enabled_denoms.map((e: any) => globalThis.String(e)) : [],
			ciphertext_gas_cost: isSet(object.ciphertext_gas_cost) ? globalThis.Number(object.ciphertext_gas_cost) : 0,
			proof_verification_gas_cost: isSet(object.proof_verification_gas_cost) ? globalThis.Number(object.proof_verification_gas_cost) : 0
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.enable_ct_module !== false) {
			obj.enable_ct_module = message.enable_ct_module;
		}
		if (message.range_proof_gas_cost !== 0) {
			obj.range_proof_gas_cost = Math.round(message.range_proof_gas_cost);
		}
		if (message.enabled_denoms?.length) {
			obj.enabled_denoms = message.enabled_denoms;
		}
		if (message.ciphertext_gas_cost !== 0) {
			obj.ciphertext_gas_cost = Math.round(message.ciphertext_gas_cost);
		}
		if (message.proof_verification_gas_cost !== 0) {
			obj.proof_verification_gas_cost = Math.round(message.proof_verification_gas_cost);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.enable_ct_module = object.enable_ct_module ?? false;
		message.range_proof_gas_cost = object.range_proof_gas_cost ?? 0;
		message.enabled_denoms = object.enabled_denoms?.map((e) => e) || [];
		message.ciphertext_gas_cost = object.ciphertext_gas_cost ?? 0;
		message.proof_verification_gas_cost = object.proof_verification_gas_cost ?? 0;
		return message;
	}
};

function createBaseParams(): Params {
	return {
		enable_ct_module: false,
		range_proof_gas_cost: 0,
		enabled_denoms: [],
		ciphertext_gas_cost: 0,
		proof_verification_gas_cost: 0
	};
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
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.confidentialtransfers.Params", Params as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.Params": {
		aminoType: "confidentialtransfers/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object })
	}
};

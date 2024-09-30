import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { ParamsPreV580 as ParamsPreV580Type, Params as ParamsType } from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common.ts";

interface Params extends ParamsType {}
interface ParamsPreV580 extends ParamsPreV580Type {}

export const Params: MessageFns<Params, "seiprotocol.seichain.evm.Params"> = {
	$type: "seiprotocol.seichain.evm.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.priority_normalizer !== "") {
			writer.uint32(18).string(message.priority_normalizer);
		}
		if (message.base_fee_per_gas !== "") {
			writer.uint32(26).string(message.base_fee_per_gas);
		}
		if (message.minimum_fee_per_gas !== "") {
			writer.uint32(34).string(message.minimum_fee_per_gas);
		}
		for (const v of message.whitelisted_cw_code_hashes_for_delegate_call) {
			writer.uint32(66).bytes(v!);
		}
		if (message.deliver_tx_hook_wasm_gas_limit !== 0) {
			writer.uint32(72).uint64(message.deliver_tx_hook_wasm_gas_limit);
		}
		if (message.max_dynamic_base_fee_upward_adjustment !== "") {
			writer.uint32(82).string(message.max_dynamic_base_fee_upward_adjustment);
		}
		if (message.max_dynamic_base_fee_downward_adjustment !== "") {
			writer.uint32(90).string(message.max_dynamic_base_fee_downward_adjustment);
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
				case 2:
					if (tag !== 18) {
						break;
					}

					message.priority_normalizer = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.base_fee_per_gas = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.minimum_fee_per_gas = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.whitelisted_cw_code_hashes_for_delegate_call.push(reader.bytes());
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.deliver_tx_hook_wasm_gas_limit = longToNumber(reader.uint64());
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.max_dynamic_base_fee_upward_adjustment = reader.string();
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.max_dynamic_base_fee_downward_adjustment = reader.string();
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
			priority_normalizer: isSet(object.priority_normalizer) ? globalThis.String(object.priority_normalizer) : "",
			base_fee_per_gas: isSet(object.base_fee_per_gas) ? globalThis.String(object.base_fee_per_gas) : "",
			minimum_fee_per_gas: isSet(object.minimum_fee_per_gas) ? globalThis.String(object.minimum_fee_per_gas) : "",
			whitelisted_cw_code_hashes_for_delegate_call: globalThis.Array.isArray(object?.whitelisted_cw_code_hashes_for_delegate_call)
				? object.whitelisted_cw_code_hashes_for_delegate_call.map((e: any) => bytesFromBase64(e))
				: [],
			deliver_tx_hook_wasm_gas_limit: isSet(object.deliver_tx_hook_wasm_gas_limit) ? globalThis.Number(object.deliver_tx_hook_wasm_gas_limit) : 0,
			max_dynamic_base_fee_upward_adjustment: isSet(object.max_dynamic_base_fee_upward_adjustment)
				? globalThis.String(object.max_dynamic_base_fee_upward_adjustment)
				: "",
			max_dynamic_base_fee_downward_adjustment: isSet(object.max_dynamic_base_fee_downward_adjustment)
				? globalThis.String(object.max_dynamic_base_fee_downward_adjustment)
				: "",
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.priority_normalizer !== "") {
			obj.priority_normalizer = message.priority_normalizer;
		}
		if (message.base_fee_per_gas !== "") {
			obj.base_fee_per_gas = message.base_fee_per_gas;
		}
		if (message.minimum_fee_per_gas !== "") {
			obj.minimum_fee_per_gas = message.minimum_fee_per_gas;
		}
		if (message.whitelisted_cw_code_hashes_for_delegate_call?.length) {
			obj.whitelisted_cw_code_hashes_for_delegate_call = message.whitelisted_cw_code_hashes_for_delegate_call.map((e) => base64FromBytes(e));
		}
		if (message.deliver_tx_hook_wasm_gas_limit !== 0) {
			obj.deliver_tx_hook_wasm_gas_limit = Math.round(message.deliver_tx_hook_wasm_gas_limit);
		}
		if (message.max_dynamic_base_fee_upward_adjustment !== "") {
			obj.max_dynamic_base_fee_upward_adjustment = message.max_dynamic_base_fee_upward_adjustment;
		}
		if (message.max_dynamic_base_fee_downward_adjustment !== "") {
			obj.max_dynamic_base_fee_downward_adjustment = message.max_dynamic_base_fee_downward_adjustment;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.priority_normalizer = object.priority_normalizer ?? "";
		message.base_fee_per_gas = object.base_fee_per_gas ?? "";
		message.minimum_fee_per_gas = object.minimum_fee_per_gas ?? "";
		message.whitelisted_cw_code_hashes_for_delegate_call = object.whitelisted_cw_code_hashes_for_delegate_call?.map((e) => e) || [];
		message.deliver_tx_hook_wasm_gas_limit = object.deliver_tx_hook_wasm_gas_limit ?? 0;
		message.max_dynamic_base_fee_upward_adjustment = object.max_dynamic_base_fee_upward_adjustment ?? "";
		message.max_dynamic_base_fee_downward_adjustment = object.max_dynamic_base_fee_downward_adjustment ?? "";
		return message;
	},
};

export const ParamsPreV580: MessageFns<ParamsPreV580, "seiprotocol.seichain.evm.ParamsPreV580"> = {
	$type: "seiprotocol.seichain.evm.ParamsPreV580" as const,

	encode(message: ParamsPreV580, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.priority_normalizer !== "") {
			writer.uint32(18).string(message.priority_normalizer);
		}
		if (message.base_fee_per_gas !== "") {
			writer.uint32(26).string(message.base_fee_per_gas);
		}
		if (message.minimum_fee_per_gas !== "") {
			writer.uint32(34).string(message.minimum_fee_per_gas);
		}
		for (const v of message.whitelisted_cw_code_hashes_for_delegate_call) {
			writer.uint32(66).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ParamsPreV580 {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParamsPreV580();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.priority_normalizer = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.base_fee_per_gas = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.minimum_fee_per_gas = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.whitelisted_cw_code_hashes_for_delegate_call.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ParamsPreV580 {
		return {
			priority_normalizer: isSet(object.priority_normalizer) ? globalThis.String(object.priority_normalizer) : "",
			base_fee_per_gas: isSet(object.base_fee_per_gas) ? globalThis.String(object.base_fee_per_gas) : "",
			minimum_fee_per_gas: isSet(object.minimum_fee_per_gas) ? globalThis.String(object.minimum_fee_per_gas) : "",
			whitelisted_cw_code_hashes_for_delegate_call: globalThis.Array.isArray(object?.whitelisted_cw_code_hashes_for_delegate_call)
				? object.whitelisted_cw_code_hashes_for_delegate_call.map((e: any) => bytesFromBase64(e))
				: [],
		};
	},

	toJSON(message: ParamsPreV580): unknown {
		const obj: any = {};
		if (message.priority_normalizer !== "") {
			obj.priority_normalizer = message.priority_normalizer;
		}
		if (message.base_fee_per_gas !== "") {
			obj.base_fee_per_gas = message.base_fee_per_gas;
		}
		if (message.minimum_fee_per_gas !== "") {
			obj.minimum_fee_per_gas = message.minimum_fee_per_gas;
		}
		if (message.whitelisted_cw_code_hashes_for_delegate_call?.length) {
			obj.whitelisted_cw_code_hashes_for_delegate_call = message.whitelisted_cw_code_hashes_for_delegate_call.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ParamsPreV580>, I>>(base?: I): ParamsPreV580 {
		return ParamsPreV580.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ParamsPreV580>, I>>(object: I): ParamsPreV580 {
		const message = createBaseParamsPreV580();
		message.priority_normalizer = object.priority_normalizer ?? "";
		message.base_fee_per_gas = object.base_fee_per_gas ?? "";
		message.minimum_fee_per_gas = object.minimum_fee_per_gas ?? "";
		message.whitelisted_cw_code_hashes_for_delegate_call = object.whitelisted_cw_code_hashes_for_delegate_call?.map((e) => e) || [];
		return message;
	},
};

function createBaseParams(): Params {
	return {
		priority_normalizer: "",
		base_fee_per_gas: "",
		minimum_fee_per_gas: "",
		whitelisted_cw_code_hashes_for_delegate_call: [],
		deliver_tx_hook_wasm_gas_limit: 0,
		max_dynamic_base_fee_upward_adjustment: "",
		max_dynamic_base_fee_downward_adjustment: "",
	};
}

function createBaseParamsPreV580(): ParamsPreV580 {
	return {
		priority_normalizer: "",
		base_fee_per_gas: "",
		minimum_fee_per_gas: "",
		whitelisted_cw_code_hashes_for_delegate_call: [],
	};
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
	["/seiprotocol.seichain.evm.Params", Params as never],
	["/seiprotocol.seichain.evm.ParamsPreV580", ParamsPreV580 as never],
];
export const aminoConverters = {
	"/seiprotocol.seichain.evm.Params": {
		aminoType: "seiprotocol.seichain.evm.Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.ParamsPreV580": {
		aminoType: "seiprotocol.seichain.evm.ParamsPreV580",
		toAmino: (message: ParamsPreV580) => ({ ...message }),
		fromAmino: (object: ParamsPreV580) => ({ ...object }),
	},
};

import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking";

import type { GenesisState as GenesisState_type, LastValidatorPower as LastValidatorPower_type } from "../../../../types/cosmos/staking/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}
export interface LastValidatorPower extends LastValidatorPower_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.staking.v1beta1.GenesisState"> = {
	$type: "cosmos.staking.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		if (message.last_total_power.length !== 0) {
			writer.uint32(18).bytes(message.last_total_power);
		}
		for (const v of message.last_validator_powers) {
			LastValidatorPower.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.validators) {
			Validator.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.delegations) {
			Delegation.encode(v!, writer.uint32(42).fork()).join();
		}
		for (const v of message.unbonding_delegations) {
			UnbondingDelegation.encode(v!, writer.uint32(50).fork()).join();
		}
		for (const v of message.redelegations) {
			Redelegation.encode(v!, writer.uint32(58).fork()).join();
		}
		if (message.exported !== false) {
			writer.uint32(64).bool(message.exported);
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

					message.last_total_power = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.last_validator_powers.push(LastValidatorPower.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.validators.push(Validator.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.delegations.push(Delegation.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.unbonding_delegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 64) {
						break;
					}

					message.exported = reader.bool();
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
			last_total_power: isSet(object.last_total_power) ? bytesFromBase64(object.last_total_power) : new Uint8Array(0),
			last_validator_powers: globalThis.Array.isArray(object?.last_validator_powers)
				? object.last_validator_powers.map((e: any) => LastValidatorPower.fromJSON(e))
				: [],
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
			delegations: globalThis.Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
			unbonding_delegations: globalThis.Array.isArray(object?.unbonding_delegations)
				? object.unbonding_delegations.map((e: any) => UnbondingDelegation.fromJSON(e))
				: [],
			redelegations: globalThis.Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => Redelegation.fromJSON(e)) : [],
			exported: isSet(object.exported) ? globalThis.Boolean(object.exported) : false
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.last_total_power.length !== 0) {
			obj.last_total_power = base64FromBytes(message.last_total_power);
		}
		if (message.last_validator_powers?.length) {
			obj.last_validator_powers = message.last_validator_powers.map((e) => LastValidatorPower.toJSON(e));
		}
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => Validator.toJSON(e));
		}
		if (message.delegations?.length) {
			obj.delegations = message.delegations.map((e) => Delegation.toJSON(e));
		}
		if (message.unbonding_delegations?.length) {
			obj.unbonding_delegations = message.unbonding_delegations.map((e) => UnbondingDelegation.toJSON(e));
		}
		if (message.redelegations?.length) {
			obj.redelegations = message.redelegations.map((e) => Redelegation.toJSON(e));
		}
		if (message.exported !== false) {
			obj.exported = message.exported;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.last_total_power = object.last_total_power ?? new Uint8Array(0);
		message.last_validator_powers = object.last_validator_powers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
		message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
		message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
		message.unbonding_delegations = object.unbonding_delegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
		message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
		message.exported = object.exported ?? false;
		return message;
	}
};

export const LastValidatorPower: MessageFns<LastValidatorPower, "cosmos.staking.v1beta1.LastValidatorPower"> = {
	$type: "cosmos.staking.v1beta1.LastValidatorPower" as const,

	encode(message: LastValidatorPower, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.power !== 0) {
			writer.uint32(16).int64(message.power);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): LastValidatorPower {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLastValidatorPower();
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
					if (tag !== 16) {
						break;
					}

					message.power = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): LastValidatorPower {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			power: isSet(object.power) ? globalThis.Number(object.power) : 0
		};
	},

	toJSON(message: LastValidatorPower): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.power !== 0) {
			obj.power = Math.round(message.power);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<LastValidatorPower>, I>>(base?: I): LastValidatorPower {
		return LastValidatorPower.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<LastValidatorPower>, I>>(object: I): LastValidatorPower {
		const message = createBaseLastValidatorPower();
		message.address = object.address ?? "";
		message.power = object.power ?? 0;
		return message;
	}
};

function createBaseGenesisState(): GenesisState {
	return {
		params: undefined,
		last_total_power: new Uint8Array(0),
		last_validator_powers: [],
		validators: [],
		delegations: [],
		unbonding_delegations: [],
		redelegations: [],
		exported: false
	};
}

function createBaseLastValidatorPower(): LastValidatorPower {
	return { address: "", power: 0 };
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
	["/cosmos.staking.v1beta1.GenesisState", GenesisState as never],
	["/cosmos.staking.v1beta1.LastValidatorPower", LastValidatorPower as never]
];
export const aminoConverters = {
	"/cosmos.staking.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.LastValidatorPower": {
		aminoType: "cosmos-sdk/LastValidatorPower",
		toAmino: (message: LastValidatorPower) => ({ ...message }),
		fromAmino: (object: LastValidatorPower) => ({ ...object })
	}
};

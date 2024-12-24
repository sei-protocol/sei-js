import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PublicKey } from "../crypto/keys";

import type { SimpleValidator as SimpleValidator_type, ValidatorSet as ValidatorSet_type, Validator as Validator_type } from "../../../types/tendermint/types";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface ValidatorSet extends ValidatorSet_type {}
export interface Validator extends Validator_type {}
export interface SimpleValidator extends SimpleValidator_type {}

export const ValidatorSet: MessageFns<ValidatorSet, "tendermint.types.ValidatorSet"> = {
	$type: "tendermint.types.ValidatorSet" as const,

	encode(message: ValidatorSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.validators) {
			Validator.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.proposer !== undefined) {
			Validator.encode(message.proposer, writer.uint32(18).fork()).join();
		}
		if (message.total_voting_power !== 0) {
			writer.uint32(24).int64(message.total_voting_power);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorSet();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validators.push(Validator.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.proposer = Validator.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.total_voting_power = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorSet {
		return {
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
			proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
			total_voting_power: isSet(object.total_voting_power) ? globalThis.Number(object.total_voting_power) : 0,
		};
	},

	toJSON(message: ValidatorSet): unknown {
		const obj: any = {};
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => Validator.toJSON(e));
		}
		if (message.proposer !== undefined) {
			obj.proposer = Validator.toJSON(message.proposer);
		}
		if (message.total_voting_power !== 0) {
			obj.total_voting_power = Math.round(message.total_voting_power);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorSet>, I>>(base?: I): ValidatorSet {
		return ValidatorSet.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorSet>, I>>(object: I): ValidatorSet {
		const message = createBaseValidatorSet();
		message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
		message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
		message.total_voting_power = object.total_voting_power ?? 0;
		return message;
	},
};

export const Validator: MessageFns<Validator, "tendermint.types.Validator"> = {
	$type: "tendermint.types.Validator" as const,

	encode(message: Validator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address.length !== 0) {
			writer.uint32(10).bytes(message.address);
		}
		if (message.pub_key !== undefined) {
			PublicKey.encode(message.pub_key, writer.uint32(18).fork()).join();
		}
		if (message.voting_power !== 0) {
			writer.uint32(24).int64(message.voting_power);
		}
		if (message.proposer_priority !== 0) {
			writer.uint32(32).int64(message.proposer_priority);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Validator {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidator();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pub_key = PublicKey.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.voting_power = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.proposer_priority = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Validator {
		return {
			address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
			pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
			voting_power: isSet(object.voting_power) ? globalThis.Number(object.voting_power) : 0,
			proposer_priority: isSet(object.proposer_priority) ? globalThis.Number(object.proposer_priority) : 0,
		};
	},

	toJSON(message: Validator): unknown {
		const obj: any = {};
		if (message.address.length !== 0) {
			obj.address = base64FromBytes(message.address);
		}
		if (message.pub_key !== undefined) {
			obj.pub_key = PublicKey.toJSON(message.pub_key);
		}
		if (message.voting_power !== 0) {
			obj.voting_power = Math.round(message.voting_power);
		}
		if (message.proposer_priority !== 0) {
			obj.proposer_priority = Math.round(message.proposer_priority);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
		return Validator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
		const message = createBaseValidator();
		message.address = object.address ?? new Uint8Array(0);
		message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
		message.voting_power = object.voting_power ?? 0;
		message.proposer_priority = object.proposer_priority ?? 0;
		return message;
	},
};

export const SimpleValidator: MessageFns<SimpleValidator, "tendermint.types.SimpleValidator"> = {
	$type: "tendermint.types.SimpleValidator" as const,

	encode(message: SimpleValidator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pub_key !== undefined) {
			PublicKey.encode(message.pub_key, writer.uint32(10).fork()).join();
		}
		if (message.voting_power !== 0) {
			writer.uint32(16).int64(message.voting_power);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSimpleValidator();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pub_key = PublicKey.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.voting_power = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SimpleValidator {
		return {
			pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
			voting_power: isSet(object.voting_power) ? globalThis.Number(object.voting_power) : 0,
		};
	},

	toJSON(message: SimpleValidator): unknown {
		const obj: any = {};
		if (message.pub_key !== undefined) {
			obj.pub_key = PublicKey.toJSON(message.pub_key);
		}
		if (message.voting_power !== 0) {
			obj.voting_power = Math.round(message.voting_power);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SimpleValidator>, I>>(base?: I): SimpleValidator {
		return SimpleValidator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SimpleValidator>, I>>(object: I): SimpleValidator {
		const message = createBaseSimpleValidator();
		message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
		message.voting_power = object.voting_power ?? 0;
		return message;
	},
};

function createBaseValidatorSet(): ValidatorSet {
	return { validators: [], proposer: undefined, total_voting_power: 0 };
}

function createBaseValidator(): Validator {
	return { address: new Uint8Array(0), pub_key: undefined, voting_power: 0, proposer_priority: 0 };
}

function createBaseSimpleValidator(): SimpleValidator {
	return { pub_key: undefined, voting_power: 0 };
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
	["/tendermint.types.ValidatorSet", ValidatorSet as never],
	["/tendermint.types.Validator", Validator as never],
	["/tendermint.types.SimpleValidator", SimpleValidator as never],
];
export const aminoConverters = {
	"/tendermint.types.ValidatorSet": {
		aminoType: "tendermint.types.ValidatorSet",
		toAmino: (message: ValidatorSet) => ({ ...message }),
		fromAmino: (object: ValidatorSet) => ({ ...object }),
	},

	"/tendermint.types.Validator": {
		aminoType: "tendermint.types.Validator",
		toAmino: (message: Validator) => ({ ...message }),
		fromAmino: (object: Validator) => ({ ...object }),
	},

	"/tendermint.types.SimpleValidator": {
		aminoType: "tendermint.types.SimpleValidator",
		toAmino: (message: SimpleValidator) => ({ ...message }),
		fromAmino: (object: SimpleValidator) => ({ ...object }),
	},
};

import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../../google/protobuf/any";

import { CompactBitArray } from "../../../crypto/multisig/v1beta1/multisig";

import type {
	SignatureDescriptorDataMulti as SignatureDescriptorDataMulti_type,
	SignatureDescriptorDataSingle as SignatureDescriptorDataSingle_type,
	SignatureDescriptorData as SignatureDescriptorData_type,
	SignatureDescriptor as SignatureDescriptor_type,
	SignatureDescriptors as SignatureDescriptors_type,
} from "../../../../../types/cosmos/tx/signing/v1beta1";

import { SignMode } from "../../../../../types/cosmos/tx/signing/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface SignatureDescriptors extends SignatureDescriptors_type {}
export interface SignatureDescriptor extends SignatureDescriptor_type {}
export interface SignatureDescriptorData extends SignatureDescriptorData_type {}
export interface SignatureDescriptorDataSingle extends SignatureDescriptorDataSingle_type {}
export interface SignatureDescriptorDataMulti extends SignatureDescriptorDataMulti_type {}

export const SignatureDescriptors: MessageFns<SignatureDescriptors, "cosmos.tx.signing.v1beta1.SignatureDescriptors"> = {
	$type: "cosmos.tx.signing.v1beta1.SignatureDescriptors" as const,

	encode(message: SignatureDescriptors, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.signatures) {
			SignatureDescriptor.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignatureDescriptors {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignatureDescriptors();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignatureDescriptors {
		return {
			signatures: globalThis.Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor.fromJSON(e)) : [],
		};
	},

	toJSON(message: SignatureDescriptors): unknown {
		const obj: any = {};
		if (message.signatures?.length) {
			obj.signatures = message.signatures.map((e) => SignatureDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignatureDescriptors>, I>>(base?: I): SignatureDescriptors {
		return SignatureDescriptors.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignatureDescriptors>, I>>(object: I): SignatureDescriptors {
		const message = createBaseSignatureDescriptors();
		message.signatures = object.signatures?.map((e) => SignatureDescriptor.fromPartial(e)) || [];
		return message;
	},
};

export const SignatureDescriptor: MessageFns<SignatureDescriptor, "cosmos.tx.signing.v1beta1.SignatureDescriptor"> = {
	$type: "cosmos.tx.signing.v1beta1.SignatureDescriptor" as const,

	encode(message: SignatureDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.public_key !== undefined) {
			Any.encode(message.public_key, writer.uint32(10).fork()).join();
		}
		if (message.data !== undefined) {
			SignatureDescriptorData.encode(message.data, writer.uint32(18).fork()).join();
		}
		if (message.sequence !== 0) {
			writer.uint32(24).uint64(message.sequence);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignatureDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignatureDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.public_key = Any.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.data = SignatureDescriptorData.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.sequence = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignatureDescriptor {
		return {
			public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
			data: isSet(object.data) ? SignatureDescriptorData.fromJSON(object.data) : undefined,
			sequence: isSet(object.sequence) ? globalThis.Number(object.sequence) : 0,
		};
	},

	toJSON(message: SignatureDescriptor): unknown {
		const obj: any = {};
		if (message.public_key !== undefined) {
			obj.public_key = Any.toJSON(message.public_key);
		}
		if (message.data !== undefined) {
			obj.data = SignatureDescriptorData.toJSON(message.data);
		}
		if (message.sequence !== 0) {
			obj.sequence = Math.round(message.sequence);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignatureDescriptor>, I>>(base?: I): SignatureDescriptor {
		return SignatureDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignatureDescriptor>, I>>(object: I): SignatureDescriptor {
		const message = createBaseSignatureDescriptor();
		message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
		message.data = object.data !== undefined && object.data !== null ? SignatureDescriptorData.fromPartial(object.data) : undefined;
		message.sequence = object.sequence ?? 0;
		return message;
	},
};

export const SignatureDescriptorData: MessageFns<SignatureDescriptorData, "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data"> = {
	$type: "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data" as const,

	encode(message: SignatureDescriptorData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.single !== undefined) {
			SignatureDescriptorDataSingle.encode(message.single, writer.uint32(10).fork()).join();
		}
		if (message.multi !== undefined) {
			SignatureDescriptorDataMulti.encode(message.multi, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignatureDescriptorData {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignatureDescriptorData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.single = SignatureDescriptorDataSingle.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.multi = SignatureDescriptorDataMulti.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignatureDescriptorData {
		return {
			single: isSet(object.single) ? SignatureDescriptorDataSingle.fromJSON(object.single) : undefined,
			multi: isSet(object.multi) ? SignatureDescriptorDataMulti.fromJSON(object.multi) : undefined,
		};
	},

	toJSON(message: SignatureDescriptorData): unknown {
		const obj: any = {};
		if (message.single !== undefined) {
			obj.single = SignatureDescriptorDataSingle.toJSON(message.single);
		}
		if (message.multi !== undefined) {
			obj.multi = SignatureDescriptorDataMulti.toJSON(message.multi);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignatureDescriptorData>, I>>(base?: I): SignatureDescriptorData {
		return SignatureDescriptorData.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignatureDescriptorData>, I>>(object: I): SignatureDescriptorData {
		const message = createBaseSignatureDescriptorData();
		message.single = object.single !== undefined && object.single !== null ? SignatureDescriptorDataSingle.fromPartial(object.single) : undefined;
		message.multi = object.multi !== undefined && object.multi !== null ? SignatureDescriptorDataMulti.fromPartial(object.multi) : undefined;
		return message;
	},
};

export const SignatureDescriptorDataSingle: MessageFns<SignatureDescriptorDataSingle, "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single"> = {
	$type: "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single" as const,

	encode(message: SignatureDescriptorDataSingle, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.mode !== 0) {
			writer.uint32(8).int32(message.mode);
		}
		if (message.signature.length !== 0) {
			writer.uint32(18).bytes(message.signature);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignatureDescriptorDataSingle {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignatureDescriptorDataSingle();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.mode = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.signature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignatureDescriptorDataSingle {
		return {
			mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
			signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
		};
	},

	toJSON(message: SignatureDescriptorDataSingle): unknown {
		const obj: any = {};
		if (message.mode !== 0) {
			obj.mode = signModeToJSON(message.mode);
		}
		if (message.signature.length !== 0) {
			obj.signature = base64FromBytes(message.signature);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignatureDescriptorDataSingle>, I>>(base?: I): SignatureDescriptorDataSingle {
		return SignatureDescriptorDataSingle.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignatureDescriptorDataSingle>, I>>(object: I): SignatureDescriptorDataSingle {
		const message = createBaseSignatureDescriptorDataSingle();
		message.mode = object.mode ?? 0;
		message.signature = object.signature ?? new Uint8Array(0);
		return message;
	},
};

export const SignatureDescriptorDataMulti: MessageFns<SignatureDescriptorDataMulti, "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi"> = {
	$type: "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi" as const,

	encode(message: SignatureDescriptorDataMulti, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.bitarray !== undefined) {
			CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).join();
		}
		for (const v of message.signatures) {
			SignatureDescriptorData.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignatureDescriptorDataMulti {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignatureDescriptorDataMulti();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.bitarray = CompactBitArray.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.signatures.push(SignatureDescriptorData.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignatureDescriptorDataMulti {
		return {
			bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
			signatures: globalThis.Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptorData.fromJSON(e)) : [],
		};
	},

	toJSON(message: SignatureDescriptorDataMulti): unknown {
		const obj: any = {};
		if (message.bitarray !== undefined) {
			obj.bitarray = CompactBitArray.toJSON(message.bitarray);
		}
		if (message.signatures?.length) {
			obj.signatures = message.signatures.map((e) => SignatureDescriptorData.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignatureDescriptorDataMulti>, I>>(base?: I): SignatureDescriptorDataMulti {
		return SignatureDescriptorDataMulti.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignatureDescriptorDataMulti>, I>>(object: I): SignatureDescriptorDataMulti {
		const message = createBaseSignatureDescriptorDataMulti();
		message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
		message.signatures = object.signatures?.map((e) => SignatureDescriptorData.fromPartial(e)) || [];
		return message;
	},
};

export function signModeFromJSON(object: any): SignMode {
	switch (object) {
		case 0:
		case "SIGN_MODE_UNSPECIFIED":
			return SignMode.SIGN_MODE_UNSPECIFIED;
		case 1:
		case "SIGN_MODE_DIRECT":
			return SignMode.SIGN_MODE_DIRECT;
		case 2:
		case "SIGN_MODE_TEXTUAL":
			return SignMode.SIGN_MODE_TEXTUAL;
		case 127:
		case "SIGN_MODE_LEGACY_AMINO_JSON":
			return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
		case 191:
		case "SIGN_MODE_EIP_191":
			return SignMode.SIGN_MODE_EIP_191;
		case -1:
		case "UNRECOGNIZED":
		default:
			return SignMode.UNRECOGNIZED;
	}
}

export function signModeToJSON(object: SignMode): string {
	switch (object) {
		case SignMode.SIGN_MODE_UNSPECIFIED:
			return "SIGN_MODE_UNSPECIFIED";
		case SignMode.SIGN_MODE_DIRECT:
			return "SIGN_MODE_DIRECT";
		case SignMode.SIGN_MODE_TEXTUAL:
			return "SIGN_MODE_TEXTUAL";
		case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
			return "SIGN_MODE_LEGACY_AMINO_JSON";
		case SignMode.SIGN_MODE_EIP_191:
			return "SIGN_MODE_EIP_191";
		case SignMode.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

function createBaseSignatureDescriptors(): SignatureDescriptors {
	return { signatures: [] };
}

function createBaseSignatureDescriptor(): SignatureDescriptor {
	return { public_key: undefined, data: undefined, sequence: 0 };
}

function createBaseSignatureDescriptorData(): SignatureDescriptorData {
	return { single: undefined, multi: undefined };
}

function createBaseSignatureDescriptorDataSingle(): SignatureDescriptorDataSingle {
	return { mode: 0, signature: new Uint8Array(0) };
}

function createBaseSignatureDescriptorDataMulti(): SignatureDescriptorDataMulti {
	return { bitarray: undefined, signatures: [] };
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
	["/cosmos.tx.signing.v1beta1.SignatureDescriptors", SignatureDescriptors as never],
	["/cosmos.tx.signing.v1beta1.SignatureDescriptor", SignatureDescriptor as never],
];
export const aminoConverters = {
	"/cosmos.tx.signing.v1beta1.SignatureDescriptors": {
		aminoType: "cosmos-sdk/SignatureDescriptors",
		toAmino: (message: SignatureDescriptors) => ({ ...message }),
		fromAmino: (object: SignatureDescriptors) => ({ ...object }),
	},

	"/cosmos.tx.signing.v1beta1.SignatureDescriptor": {
		aminoType: "cosmos-sdk/SignatureDescriptor",
		toAmino: (message: SignatureDescriptor) => ({ ...message }),
		fromAmino: (object: SignatureDescriptor) => ({ ...object }),
	},
};

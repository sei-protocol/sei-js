import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Params } from "./params";

import type {
	AddressAssociation as AddressAssociation_type,
	Code as Code_type,
	ContractState as ContractState_type,
	GenesisState as GenesisState_type,
	Nonce as Nonce_type,
	Serialized as Serialized_type,
} from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface AddressAssociation extends AddressAssociation_type {}
export interface Code extends Code_type {}
export interface ContractState extends ContractState_type {}
export interface Nonce extends Nonce_type {}
export interface Serialized extends Serialized_type {}
export interface GenesisState extends GenesisState_type {}

export const AddressAssociation: MessageFns<AddressAssociation, "seiprotocol.seichain.evm.AddressAssociation"> = {
	$type: "seiprotocol.seichain.evm.AddressAssociation" as const,

	encode(message: AddressAssociation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sei_address !== "") {
			writer.uint32(10).string(message.sei_address);
		}
		if (message.eth_address !== "") {
			writer.uint32(18).string(message.eth_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddressAssociation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddressAssociation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sei_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.eth_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddressAssociation {
		return {
			sei_address: isSet(object.sei_address) ? globalThis.String(object.sei_address) : "",
			eth_address: isSet(object.eth_address) ? globalThis.String(object.eth_address) : "",
		};
	},

	toJSON(message: AddressAssociation): unknown {
		const obj: any = {};
		if (message.sei_address !== "") {
			obj.sei_address = message.sei_address;
		}
		if (message.eth_address !== "") {
			obj.eth_address = message.eth_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddressAssociation>, I>>(base?: I): AddressAssociation {
		return AddressAssociation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddressAssociation>, I>>(object: I): AddressAssociation {
		const message = createBaseAddressAssociation();
		message.sei_address = object.sei_address ?? "";
		message.eth_address = object.eth_address ?? "";
		return message;
	},
};

export const Code: MessageFns<Code, "seiprotocol.seichain.evm.Code"> = {
	$type: "seiprotocol.seichain.evm.Code" as const,

	encode(message: Code, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.code.length !== 0) {
			writer.uint32(18).bytes(message.code);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Code {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCode();
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

					message.code = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Code {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array(0),
		};
	},

	toJSON(message: Code): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.code.length !== 0) {
			obj.code = base64FromBytes(message.code);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Code>, I>>(base?: I): Code {
		return Code.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code {
		const message = createBaseCode();
		message.address = object.address ?? "";
		message.code = object.code ?? new Uint8Array(0);
		return message;
	},
};

export const ContractState: MessageFns<ContractState, "seiprotocol.seichain.evm.ContractState"> = {
	$type: "seiprotocol.seichain.evm.ContractState" as const,

	encode(message: ContractState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.key.length !== 0) {
			writer.uint32(18).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(26).bytes(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ContractState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseContractState();
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

					message.key = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ContractState {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
		};
	},

	toJSON(message: ContractState): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ContractState>, I>>(base?: I): ContractState {
		return ContractState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ContractState>, I>>(object: I): ContractState {
		const message = createBaseContractState();
		message.address = object.address ?? "";
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		return message;
	},
};

export const Nonce: MessageFns<Nonce, "seiprotocol.seichain.evm.Nonce"> = {
	$type: "seiprotocol.seichain.evm.Nonce" as const,

	encode(message: Nonce, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.nonce !== 0) {
			writer.uint32(16).uint64(message.nonce);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Nonce {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseNonce();
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

					message.nonce = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Nonce {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			nonce: isSet(object.nonce) ? globalThis.Number(object.nonce) : 0,
		};
	},

	toJSON(message: Nonce): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.nonce !== 0) {
			obj.nonce = Math.round(message.nonce);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Nonce>, I>>(base?: I): Nonce {
		return Nonce.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Nonce>, I>>(object: I): Nonce {
		const message = createBaseNonce();
		message.address = object.address ?? "";
		message.nonce = object.nonce ?? 0;
		return message;
	},
};

export const Serialized: MessageFns<Serialized, "seiprotocol.seichain.evm.Serialized"> = {
	$type: "seiprotocol.seichain.evm.Serialized" as const,

	encode(message: Serialized, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.prefix.length !== 0) {
			writer.uint32(10).bytes(message.prefix);
		}
		if (message.key.length !== 0) {
			writer.uint32(18).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(26).bytes(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Serialized {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSerialized();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.prefix = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.key = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Serialized {
		return {
			prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
		};
	},

	toJSON(message: Serialized): unknown {
		const obj: any = {};
		if (message.prefix.length !== 0) {
			obj.prefix = base64FromBytes(message.prefix);
		}
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Serialized>, I>>(base?: I): Serialized {
		return Serialized.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Serialized>, I>>(object: I): Serialized {
		const message = createBaseSerialized();
		message.prefix = object.prefix ?? new Uint8Array(0);
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		return message;
	},
};

export const GenesisState: MessageFns<GenesisState, "seiprotocol.seichain.evm.GenesisState"> = {
	$type: "seiprotocol.seichain.evm.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.address_associations) {
			AddressAssociation.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.codes) {
			Code.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.states) {
			ContractState.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.nonces) {
			Nonce.encode(v!, writer.uint32(42).fork()).join();
		}
		for (const v of message.serialized) {
			Serialized.encode(v!, writer.uint32(50).fork()).join();
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

					message.address_associations.push(AddressAssociation.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.codes.push(Code.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.states.push(ContractState.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.nonces.push(Nonce.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.serialized.push(Serialized.decode(reader, reader.uint32()));
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
			address_associations: globalThis.Array.isArray(object?.address_associations)
				? object.address_associations.map((e: any) => AddressAssociation.fromJSON(e))
				: [],
			codes: globalThis.Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
			states: globalThis.Array.isArray(object?.states) ? object.states.map((e: any) => ContractState.fromJSON(e)) : [],
			nonces: globalThis.Array.isArray(object?.nonces) ? object.nonces.map((e: any) => Nonce.fromJSON(e)) : [],
			serialized: globalThis.Array.isArray(object?.serialized) ? object.serialized.map((e: any) => Serialized.fromJSON(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.address_associations?.length) {
			obj.address_associations = message.address_associations.map((e) => AddressAssociation.toJSON(e));
		}
		if (message.codes?.length) {
			obj.codes = message.codes.map((e) => Code.toJSON(e));
		}
		if (message.states?.length) {
			obj.states = message.states.map((e) => ContractState.toJSON(e));
		}
		if (message.nonces?.length) {
			obj.nonces = message.nonces.map((e) => Nonce.toJSON(e));
		}
		if (message.serialized?.length) {
			obj.serialized = message.serialized.map((e) => Serialized.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.address_associations = object.address_associations?.map((e) => AddressAssociation.fromPartial(e)) || [];
		message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
		message.states = object.states?.map((e) => ContractState.fromPartial(e)) || [];
		message.nonces = object.nonces?.map((e) => Nonce.fromPartial(e)) || [];
		message.serialized = object.serialized?.map((e) => Serialized.fromPartial(e)) || [];
		return message;
	},
};

function createBaseAddressAssociation(): AddressAssociation {
	return { sei_address: "", eth_address: "" };
}

function createBaseCode(): Code {
	return { address: "", code: new Uint8Array(0) };
}

function createBaseContractState(): ContractState {
	return { address: "", key: new Uint8Array(0), value: new Uint8Array(0) };
}

function createBaseNonce(): Nonce {
	return { address: "", nonce: 0 };
}

function createBaseSerialized(): Serialized {
	return { prefix: new Uint8Array(0), key: new Uint8Array(0), value: new Uint8Array(0) };
}

function createBaseGenesisState(): GenesisState {
	return { params: undefined, address_associations: [], codes: [], states: [], nonces: [], serialized: [] };
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
	["/seiprotocol.seichain.evm.AddressAssociation", AddressAssociation as never],
	["/seiprotocol.seichain.evm.Code", Code as never],
	["/seiprotocol.seichain.evm.ContractState", ContractState as never],
	["/seiprotocol.seichain.evm.Nonce", Nonce as never],
	["/seiprotocol.seichain.evm.Serialized", Serialized as never],
	["/seiprotocol.seichain.evm.GenesisState", GenesisState as never],
];
export const aminoConverters = {
	"/seiprotocol.seichain.evm.AddressAssociation": {
		aminoType: "seiprotocol.seichain.evm.AddressAssociation",
		toAmino: (message: AddressAssociation) => ({ ...message }),
		fromAmino: (object: AddressAssociation) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.Code": {
		aminoType: "seiprotocol.seichain.evm.Code",
		toAmino: (message: Code) => ({ ...message }),
		fromAmino: (object: Code) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.ContractState": {
		aminoType: "seiprotocol.seichain.evm.ContractState",
		toAmino: (message: ContractState) => ({ ...message }),
		fromAmino: (object: ContractState) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.Nonce": {
		aminoType: "seiprotocol.seichain.evm.Nonce",
		toAmino: (message: Nonce) => ({ ...message }),
		fromAmino: (object: Nonce) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.Serialized": {
		aminoType: "seiprotocol.seichain.evm.Serialized",
		toAmino: (message: Serialized) => ({ ...message }),
		fromAmino: (object: Serialized) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.GenesisState": {
		aminoType: "seiprotocol.seichain.evm.GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};

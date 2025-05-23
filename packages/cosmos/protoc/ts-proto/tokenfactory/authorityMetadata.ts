// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: tokenfactory/authorityMetadata.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "seiprotocol.seichain.tokenfactory";

/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
	/** Can be empty for no admin, or a valid sei address */
	admin: string;
}

function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
	return { admin: "" };
}

export const DenomAuthorityMetadata: MessageFns<DenomAuthorityMetadata, "seiprotocol.seichain.tokenfactory.DenomAuthorityMetadata"> = {
	$type: "seiprotocol.seichain.tokenfactory.DenomAuthorityMetadata" as const,

	encode(message: DenomAuthorityMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.admin !== "") {
			writer.uint32(10).string(message.admin);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDenomAuthorityMetadata();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.admin = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DenomAuthorityMetadata {
		return { admin: isSet(object.admin) ? globalThis.String(object.admin) : "" };
	},

	toJSON(message: DenomAuthorityMetadata): unknown {
		const obj: any = {};
		if (message.admin !== "") {
			obj.admin = message.admin;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DenomAuthorityMetadata>, I>>(base?: I): DenomAuthorityMetadata {
		return DenomAuthorityMetadata.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DenomAuthorityMetadata>, I>>(object: I): DenomAuthorityMetadata {
		const message = createBaseDenomAuthorityMetadata();
		message.admin = object.admin ?? "";
		return message;
	}
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}

export interface MessageFns<T, V extends string> {
	readonly $type: V;
	encode(message: T, writer?: BinaryWriter): BinaryWriter;
	decode(input: BinaryReader | Uint8Array, length?: number): T;
	fromJSON(object: any): T;
	toJSON(message: T): unknown;
	create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
	fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}

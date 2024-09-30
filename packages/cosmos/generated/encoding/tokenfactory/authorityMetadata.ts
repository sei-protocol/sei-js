import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { DenomAuthorityMetadata as DenomAuthorityMetadataType } from "../../types/tokenfactory";

import type { DeepPartial, Exact, MessageFns } from "../common.ts";

interface DenomAuthorityMetadata extends DenomAuthorityMetadataType {}

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
		const end = length === undefined ? reader.len : reader.pos + length;
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
	},
};

function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
	return { admin: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}

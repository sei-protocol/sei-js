import { BinaryReader, BinaryWriter } from '../binary';
export interface Whitelist {
	hashes: string[];
}
export interface WhitelistProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.Whitelist';
	value: Uint8Array;
}
export interface WhitelistAmino {
	hashes?: string[];
}
export interface WhitelistAminoMsg {
	type: '/seiprotocol.seichain.evm.Whitelist';
	value: WhitelistAmino;
}
export interface WhitelistSDKType {
	hashes: string[];
}
function createBaseWhitelist(): Whitelist {
	return {
		hashes: []
	};
}
export const Whitelist = {
	typeUrl: '/seiprotocol.seichain.evm.Whitelist',
	encode(message: Whitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		for (const v of message.hashes) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Whitelist {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWhitelist();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.hashes.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Whitelist>): Whitelist {
		const message = createBaseWhitelist();
		message.hashes = object.hashes?.map((e) => e) || [];
		return message;
	},
	fromAmino(object: WhitelistAmino): Whitelist {
		const message = createBaseWhitelist();
		message.hashes = object.hashes?.map((e) => e) || [];
		return message;
	},
	toAmino(message: Whitelist): WhitelistAmino {
		const obj: any = {};
		if (message.hashes) {
			obj.hashes = message.hashes.map((e) => e);
		} else {
			obj.hashes = message.hashes;
		}
		return obj;
	},
	fromAminoMsg(object: WhitelistAminoMsg): Whitelist {
		return Whitelist.fromAmino(object.value);
	},
	fromProtoMsg(message: WhitelistProtoMsg): Whitelist {
		return Whitelist.decode(message.value);
	},
	toProto(message: Whitelist): Uint8Array {
		return Whitelist.encode(message).finish();
	},
	toProtoMsg(message: Whitelist): WhitelistProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.Whitelist',
			value: Whitelist.encode(message).finish()
		};
	}
};

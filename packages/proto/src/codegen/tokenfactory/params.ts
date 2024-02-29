import { BinaryReader, BinaryWriter } from '../binary';
/** Params defines the parameters for the tokenfactory module. */
export interface Params {}
export interface ParamsProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.Params';
	value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.Params';
	value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {}
function createBaseParams(): Params {
	return {};
}
export const Params = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.Params',
	encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<Params>): Params {
		const message = createBaseParams();
		return message;
	},
	fromAmino(_: ParamsAmino): Params {
		const message = createBaseParams();
		return message;
	},
	toAmino(_: Params): ParamsAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: ParamsAminoMsg): Params {
		return Params.fromAmino(object.value);
	},
	fromProtoMsg(message: ParamsProtoMsg): Params {
		return Params.decode(message.value);
	},
	toProto(message: Params): Uint8Array {
		return Params.encode(message).finish();
	},
	toProtoMsg(message: Params): ParamsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.Params',
			value: Params.encode(message).finish()
		};
	}
};

import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
/** Ciphertext represents the ciphertext of a message. */
export interface Ciphertext {
	/** Pedersen commitment bytes. */
	c: Uint8Array;
	/** Decryption handle bytes. */
	d: Uint8Array;
}
export interface CiphertextProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.Ciphertext';
	value: Uint8Array;
}
/** Ciphertext represents the ciphertext of a message. */
export interface CiphertextAmino {
	/** Pedersen commitment bytes. */
	c?: string;
	/** Decryption handle bytes. */
	d?: string;
}
export interface CiphertextAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.Ciphertext';
	value: CiphertextAmino;
}
/** Ciphertext represents the ciphertext of a message. */
export interface CiphertextSDKType {
	c: Uint8Array;
	d: Uint8Array;
}
function createBaseCiphertext(): Ciphertext {
	return {
		c: new Uint8Array(),
		d: new Uint8Array()
	};
}
export const Ciphertext = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.Ciphertext',
	encode(message: Ciphertext, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.c.length !== 0) {
			writer.uint32(10).bytes(message.c);
		}
		if (message.d.length !== 0) {
			writer.uint32(18).bytes(message.d);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Ciphertext {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertext();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.c = reader.bytes();
					break;
				case 2:
					message.d = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Ciphertext>): Ciphertext {
		const message = createBaseCiphertext();
		message.c = object.c ?? new Uint8Array();
		message.d = object.d ?? new Uint8Array();
		return message;
	},
	fromAmino(object: CiphertextAmino): Ciphertext {
		const message = createBaseCiphertext();
		if (object.c !== undefined && object.c !== null) {
			message.c = bytesFromBase64(object.c);
		}
		if (object.d !== undefined && object.d !== null) {
			message.d = bytesFromBase64(object.d);
		}
		return message;
	},
	toAmino(message: Ciphertext): CiphertextAmino {
		const obj: any = {};
		obj.c = message.c ? base64FromBytes(message.c) : undefined;
		obj.d = message.d ? base64FromBytes(message.d) : undefined;
		return obj;
	},
	fromAminoMsg(object: CiphertextAminoMsg): Ciphertext {
		return Ciphertext.fromAmino(object.value);
	},
	fromProtoMsg(message: CiphertextProtoMsg): Ciphertext {
		return Ciphertext.decode(message.value);
	},
	toProto(message: Ciphertext): Uint8Array {
		return Ciphertext.encode(message).finish();
	},
	toProtoMsg(message: Ciphertext): CiphertextProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.Ciphertext',
			value: Ciphertext.encode(message).finish()
		};
	}
};

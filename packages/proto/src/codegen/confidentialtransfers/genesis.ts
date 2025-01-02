import { Params, ParamsAmino, ParamsSDKType } from './params';
import { CtAccount, CtAccountAmino, CtAccountSDKType } from './confidential';
import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
/** GenesisState defines the confidential module's genesis state. */
export interface GenesisState {
	/** params defines the parameters of the module. */
	params: Params | undefined;
	/** accounts is an array of confidential transfer accounts */
	accounts: GenesisCtAccount[];
}
export interface GenesisStateProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GenesisState';
	value: Uint8Array;
}
/** GenesisState defines the confidential module's genesis state. */
export interface GenesisStateAmino {
	/** params defines the parameters of the module. */
	params?: ParamsAmino | undefined;
	/** accounts is an array of confidential transfer accounts */
	accounts?: GenesisCtAccountAmino[];
}
export interface GenesisStateAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.GenesisState';
	value: GenesisStateAmino;
}
/** GenesisState defines the confidential module's genesis state. */
export interface GenesisStateSDKType {
	params: ParamsSDKType | undefined;
	accounts: GenesisCtAccountSDKType[];
}
export interface GenesisCtAccount {
	/** account key */
	key: Uint8Array;
	/** confidential transfer account */
	account: CtAccount | undefined;
}
export interface GenesisCtAccountProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GenesisCtAccount';
	value: Uint8Array;
}
export interface GenesisCtAccountAmino {
	/** account key */
	key?: string;
	/** confidential transfer account */
	account?: CtAccountAmino | undefined;
}
export interface GenesisCtAccountAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.GenesisCtAccount';
	value: GenesisCtAccountAmino;
}
export interface GenesisCtAccountSDKType {
	key: Uint8Array;
	account: CtAccountSDKType | undefined;
}
function createBaseGenesisState(): GenesisState {
	return {
		params: Params.fromPartial({}),
		accounts: []
	};
}
export const GenesisState = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GenesisState',
	encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.accounts) {
			GenesisCtAccount.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				case 2:
					message.accounts.push(GenesisCtAccount.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GenesisState>): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.accounts = object.accounts?.map((e) => GenesisCtAccount.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: GenesisStateAmino): GenesisState {
		const message = createBaseGenesisState();
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params);
		}
		message.accounts = object.accounts?.map((e) => GenesisCtAccount.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: GenesisState): GenesisStateAmino {
		const obj: any = {};
		obj.params = message.params ? Params.toAmino(message.params) : undefined;
		if (message.accounts) {
			obj.accounts = message.accounts.map((e) => (e ? GenesisCtAccount.toAmino(e) : undefined));
		} else {
			obj.accounts = message.accounts;
		}
		return obj;
	},
	fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
		return GenesisState.fromAmino(object.value);
	},
	fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
		return GenesisState.decode(message.value);
	},
	toProto(message: GenesisState): Uint8Array {
		return GenesisState.encode(message).finish();
	},
	toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.GenesisState',
			value: GenesisState.encode(message).finish()
		};
	}
};
function createBaseGenesisCtAccount(): GenesisCtAccount {
	return {
		key: new Uint8Array(),
		account: CtAccount.fromPartial({})
	};
}
export const GenesisCtAccount = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GenesisCtAccount',
	encode(message: GenesisCtAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.account !== undefined) {
			CtAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GenesisCtAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisCtAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.key = reader.bytes();
					break;
				case 2:
					message.account = CtAccount.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GenesisCtAccount>): GenesisCtAccount {
		const message = createBaseGenesisCtAccount();
		message.key = object.key ?? new Uint8Array();
		message.account = object.account !== undefined && object.account !== null ? CtAccount.fromPartial(object.account) : undefined;
		return message;
	},
	fromAmino(object: GenesisCtAccountAmino): GenesisCtAccount {
		const message = createBaseGenesisCtAccount();
		if (object.key !== undefined && object.key !== null) {
			message.key = bytesFromBase64(object.key);
		}
		if (object.account !== undefined && object.account !== null) {
			message.account = CtAccount.fromAmino(object.account);
		}
		return message;
	},
	toAmino(message: GenesisCtAccount): GenesisCtAccountAmino {
		const obj: any = {};
		obj.key = message.key ? base64FromBytes(message.key) : undefined;
		obj.account = message.account ? CtAccount.toAmino(message.account) : undefined;
		return obj;
	},
	fromAminoMsg(object: GenesisCtAccountAminoMsg): GenesisCtAccount {
		return GenesisCtAccount.fromAmino(object.value);
	},
	fromProtoMsg(message: GenesisCtAccountProtoMsg): GenesisCtAccount {
		return GenesisCtAccount.decode(message.value);
	},
	toProto(message: GenesisCtAccount): Uint8Array {
		return GenesisCtAccount.encode(message).finish();
	},
	toProtoMsg(message: GenesisCtAccount): GenesisCtAccountProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.GenesisCtAccount',
			value: GenesisCtAccount.encode(message).finish()
		};
	}
};

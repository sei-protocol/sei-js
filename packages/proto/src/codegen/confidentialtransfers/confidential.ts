import { Ciphertext, CiphertextAmino, CiphertextSDKType } from './cryptography';
import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
/** CtAccount represents an confidential transfers account state */
export interface CtAccount {
	/** serialized public key */
	publicKey: Uint8Array;
	/** lo bits of the pending balance */
	pendingBalanceLo?: Ciphertext | undefined;
	/** hi bits of the pending balance */
	pendingBalanceHi?: Ciphertext | undefined;
	pendingBalanceCreditCounter: number;
	/** elgamal encoded balance */
	availableBalance?: Ciphertext | undefined;
	/** aes encoded balance */
	decryptableAvailableBalance: string;
}
export interface CtAccountProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CtAccount';
	value: Uint8Array;
}
/** CtAccount represents an confidential transfers account state */
export interface CtAccountAmino {
	/** serialized public key */
	public_key?: string;
	/** lo bits of the pending balance */
	pending_balance_lo?: CiphertextAmino | undefined;
	/** hi bits of the pending balance */
	pending_balance_hi?: CiphertextAmino | undefined;
	pending_balance_credit_counter?: number;
	/** elgamal encoded balance */
	available_balance?: CiphertextAmino | undefined;
	/** aes encoded balance */
	decryptable_available_balance?: string;
}
export interface CtAccountAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.CtAccount';
	value: CtAccountAmino;
}
/** CtAccount represents an confidential transfers account state */
export interface CtAccountSDKType {
	public_key: Uint8Array;
	pending_balance_lo?: CiphertextSDKType | undefined;
	pending_balance_hi?: CiphertextSDKType | undefined;
	pending_balance_credit_counter: number;
	available_balance?: CiphertextSDKType | undefined;
	decryptable_available_balance: string;
}
export interface CtAccountWithDenom {
	denom: string;
	account: CtAccount | undefined;
}
export interface CtAccountWithDenomProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom';
	value: Uint8Array;
}
export interface CtAccountWithDenomAmino {
	denom?: string;
	account?: CtAccountAmino | undefined;
}
export interface CtAccountWithDenomAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom';
	value: CtAccountWithDenomAmino;
}
export interface CtAccountWithDenomSDKType {
	denom: string;
	account: CtAccountSDKType | undefined;
}
function createBaseCtAccount(): CtAccount {
	return {
		publicKey: new Uint8Array(),
		pendingBalanceLo: undefined,
		pendingBalanceHi: undefined,
		pendingBalanceCreditCounter: 0,
		availableBalance: undefined,
		decryptableAvailableBalance: ''
	};
}
export const CtAccount = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CtAccount',
	encode(message: CtAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.publicKey.length !== 0) {
			writer.uint32(10).bytes(message.publicKey);
		}
		if (message.pendingBalanceLo !== undefined) {
			Ciphertext.encode(message.pendingBalanceLo, writer.uint32(18).fork()).ldelim();
		}
		if (message.pendingBalanceHi !== undefined) {
			Ciphertext.encode(message.pendingBalanceHi, writer.uint32(26).fork()).ldelim();
		}
		if (message.pendingBalanceCreditCounter !== 0) {
			writer.uint32(32).uint32(message.pendingBalanceCreditCounter);
		}
		if (message.availableBalance !== undefined) {
			Ciphertext.encode(message.availableBalance, writer.uint32(42).fork()).ldelim();
		}
		if (message.decryptableAvailableBalance !== '') {
			writer.uint32(50).string(message.decryptableAvailableBalance);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CtAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCtAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.publicKey = reader.bytes();
					break;
				case 2:
					message.pendingBalanceLo = Ciphertext.decode(reader, reader.uint32());
					break;
				case 3:
					message.pendingBalanceHi = Ciphertext.decode(reader, reader.uint32());
					break;
				case 4:
					message.pendingBalanceCreditCounter = reader.uint32();
					break;
				case 5:
					message.availableBalance = Ciphertext.decode(reader, reader.uint32());
					break;
				case 6:
					message.decryptableAvailableBalance = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<CtAccount>): CtAccount {
		const message = createBaseCtAccount();
		message.publicKey = object.publicKey ?? new Uint8Array();
		message.pendingBalanceLo =
			object.pendingBalanceLo !== undefined && object.pendingBalanceLo !== null ? Ciphertext.fromPartial(object.pendingBalanceLo) : undefined;
		message.pendingBalanceHi =
			object.pendingBalanceHi !== undefined && object.pendingBalanceHi !== null ? Ciphertext.fromPartial(object.pendingBalanceHi) : undefined;
		message.pendingBalanceCreditCounter = object.pendingBalanceCreditCounter ?? 0;
		message.availableBalance =
			object.availableBalance !== undefined && object.availableBalance !== null ? Ciphertext.fromPartial(object.availableBalance) : undefined;
		message.decryptableAvailableBalance = object.decryptableAvailableBalance ?? '';
		return message;
	},
	fromAmino(object: CtAccountAmino): CtAccount {
		const message = createBaseCtAccount();
		if (object.public_key !== undefined && object.public_key !== null) {
			message.publicKey = bytesFromBase64(object.public_key);
		}
		if (object.pending_balance_lo !== undefined && object.pending_balance_lo !== null) {
			message.pendingBalanceLo = Ciphertext.fromAmino(object.pending_balance_lo);
		}
		if (object.pending_balance_hi !== undefined && object.pending_balance_hi !== null) {
			message.pendingBalanceHi = Ciphertext.fromAmino(object.pending_balance_hi);
		}
		if (object.pending_balance_credit_counter !== undefined && object.pending_balance_credit_counter !== null) {
			message.pendingBalanceCreditCounter = object.pending_balance_credit_counter;
		}
		if (object.available_balance !== undefined && object.available_balance !== null) {
			message.availableBalance = Ciphertext.fromAmino(object.available_balance);
		}
		if (object.decryptable_available_balance !== undefined && object.decryptable_available_balance !== null) {
			message.decryptableAvailableBalance = object.decryptable_available_balance;
		}
		return message;
	},
	toAmino(message: CtAccount): CtAccountAmino {
		const obj: any = {};
		obj.public_key = message.publicKey ? base64FromBytes(message.publicKey) : undefined;
		obj.pending_balance_lo = message.pendingBalanceLo ? Ciphertext.toAmino(message.pendingBalanceLo) : undefined;
		obj.pending_balance_hi = message.pendingBalanceHi ? Ciphertext.toAmino(message.pendingBalanceHi) : undefined;
		obj.pending_balance_credit_counter = message.pendingBalanceCreditCounter === 0 ? undefined : message.pendingBalanceCreditCounter;
		obj.available_balance = message.availableBalance ? Ciphertext.toAmino(message.availableBalance) : undefined;
		obj.decryptable_available_balance = message.decryptableAvailableBalance === '' ? undefined : message.decryptableAvailableBalance;
		return obj;
	},
	fromAminoMsg(object: CtAccountAminoMsg): CtAccount {
		return CtAccount.fromAmino(object.value);
	},
	fromProtoMsg(message: CtAccountProtoMsg): CtAccount {
		return CtAccount.decode(message.value);
	},
	toProto(message: CtAccount): Uint8Array {
		return CtAccount.encode(message).finish();
	},
	toProtoMsg(message: CtAccount): CtAccountProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.CtAccount',
			value: CtAccount.encode(message).finish()
		};
	}
};
function createBaseCtAccountWithDenom(): CtAccountWithDenom {
	return {
		denom: '',
		account: CtAccount.fromPartial({})
	};
}
export const CtAccountWithDenom = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom',
	encode(message: CtAccountWithDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.denom !== '') {
			writer.uint32(10).string(message.denom);
		}
		if (message.account !== undefined) {
			CtAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CtAccountWithDenom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCtAccountWithDenom();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.denom = reader.string();
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
	fromPartial(object: Partial<CtAccountWithDenom>): CtAccountWithDenom {
		const message = createBaseCtAccountWithDenom();
		message.denom = object.denom ?? '';
		message.account = object.account !== undefined && object.account !== null ? CtAccount.fromPartial(object.account) : undefined;
		return message;
	},
	fromAmino(object: CtAccountWithDenomAmino): CtAccountWithDenom {
		const message = createBaseCtAccountWithDenom();
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.account !== undefined && object.account !== null) {
			message.account = CtAccount.fromAmino(object.account);
		}
		return message;
	},
	toAmino(message: CtAccountWithDenom): CtAccountWithDenomAmino {
		const obj: any = {};
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.account = message.account ? CtAccount.toAmino(message.account) : undefined;
		return obj;
	},
	fromAminoMsg(object: CtAccountWithDenomAminoMsg): CtAccountWithDenom {
		return CtAccountWithDenom.fromAmino(object.value);
	},
	fromProtoMsg(message: CtAccountWithDenomProtoMsg): CtAccountWithDenom {
		return CtAccountWithDenom.decode(message.value);
	},
	toProto(message: CtAccountWithDenom): Uint8Array {
		return CtAccountWithDenom.encode(message).finish();
	},
	toProtoMsg(message: CtAccountWithDenom): CtAccountWithDenomProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.CtAccountWithDenom',
			value: CtAccountWithDenom.encode(message).finish()
		};
	}
};

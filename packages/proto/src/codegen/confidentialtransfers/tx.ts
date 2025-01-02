import { Ciphertext, CiphertextAmino, CiphertextSDKType } from './cryptography';
import {
	TransferMsgProofs,
	TransferMsgProofsAmino,
	TransferMsgProofsSDKType,
	InitializeAccountMsgProofs,
	InitializeAccountMsgProofsAmino,
	InitializeAccountMsgProofsSDKType,
	WithdrawMsgProofs,
	WithdrawMsgProofsAmino,
	WithdrawMsgProofsSDKType,
	CloseAccountMsgProofs,
	CloseAccountMsgProofsAmino,
	CloseAccountMsgProofsSDKType,
	CiphertextValidityProof,
	CiphertextValidityProofAmino,
	CiphertextValidityProofSDKType,
	CiphertextCiphertextEqualityProof,
	CiphertextCiphertextEqualityProofAmino,
	CiphertextCiphertextEqualityProofSDKType
} from './zk';
import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
/** MsgTransfer represents a message to send coins from one account to another. */
export interface MsgTransfer {
	fromAddress: string;
	toAddress: string;
	denom: string;
	fromAmountLo?: Ciphertext | undefined;
	fromAmountHi?: Ciphertext | undefined;
	toAmountLo?: Ciphertext | undefined;
	toAmountHi?: Ciphertext | undefined;
	remainingBalance?: Ciphertext | undefined;
	decryptableBalance: string;
	proofs?: TransferMsgProofs | undefined;
	auditors: Auditor[];
}
export interface MsgTransferProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer';
	value: Uint8Array;
}
/** MsgTransfer represents a message to send coins from one account to another. */
export interface MsgTransferAmino {
	from_address?: string;
	to_address?: string;
	denom?: string;
	from_amount_lo?: CiphertextAmino | undefined;
	from_amount_hi?: CiphertextAmino | undefined;
	to_amount_lo?: CiphertextAmino | undefined;
	to_amount_hi?: CiphertextAmino | undefined;
	remaining_balance?: CiphertextAmino | undefined;
	decryptable_balance?: string;
	proofs?: TransferMsgProofsAmino | undefined;
	auditors?: AuditorAmino[];
}
export interface MsgTransferAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer';
	value: MsgTransferAmino;
}
/** MsgTransfer represents a message to send coins from one account to another. */
export interface MsgTransferSDKType {
	from_address: string;
	to_address: string;
	denom: string;
	from_amount_lo?: CiphertextSDKType | undefined;
	from_amount_hi?: CiphertextSDKType | undefined;
	to_amount_lo?: CiphertextSDKType | undefined;
	to_amount_hi?: CiphertextSDKType | undefined;
	remaining_balance?: CiphertextSDKType | undefined;
	decryptable_balance: string;
	proofs?: TransferMsgProofsSDKType | undefined;
	auditors: AuditorSDKType[];
}
/** MsgTransferResponse defines the Msg/Send response type. */
export interface MsgTransferResponse {}
export interface MsgTransferResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransferResponse';
	value: Uint8Array;
}
/** MsgTransferResponse defines the Msg/Send response type. */
export interface MsgTransferResponseAmino {}
export interface MsgTransferResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgTransferResponse';
	value: MsgTransferResponseAmino;
}
/** MsgTransferResponse defines the Msg/Send response type. */
export interface MsgTransferResponseSDKType {}
export interface Auditor {
	auditorAddress: string;
	encryptedTransferAmountLo?: Ciphertext | undefined;
	encryptedTransferAmountHi?: Ciphertext | undefined;
	transferAmountLoValidityProof?: CiphertextValidityProof | undefined;
	transferAmountHiValidityProof?: CiphertextValidityProof | undefined;
	transferAmountLoEqualityProof?: CiphertextCiphertextEqualityProof | undefined;
	transferAmountHiEqualityProof?: CiphertextCiphertextEqualityProof | undefined;
}
export interface AuditorProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.Auditor';
	value: Uint8Array;
}
export interface AuditorAmino {
	auditor_address?: string;
	encrypted_transfer_amount_lo?: CiphertextAmino | undefined;
	encrypted_transfer_amount_hi?: CiphertextAmino | undefined;
	transfer_amount_lo_validity_proof?: CiphertextValidityProofAmino | undefined;
	transfer_amount_hi_validity_proof?: CiphertextValidityProofAmino | undefined;
	transfer_amount_lo_equality_proof?: CiphertextCiphertextEqualityProofAmino | undefined;
	transfer_amount_hi_equality_proof?: CiphertextCiphertextEqualityProofAmino | undefined;
}
export interface AuditorAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.Auditor';
	value: AuditorAmino;
}
export interface AuditorSDKType {
	auditor_address: string;
	encrypted_transfer_amount_lo?: CiphertextSDKType | undefined;
	encrypted_transfer_amount_hi?: CiphertextSDKType | undefined;
	transfer_amount_lo_validity_proof?: CiphertextValidityProofSDKType | undefined;
	transfer_amount_hi_validity_proof?: CiphertextValidityProofSDKType | undefined;
	transfer_amount_lo_equality_proof?: CiphertextCiphertextEqualityProofSDKType | undefined;
	transfer_amount_hi_equality_proof?: CiphertextCiphertextEqualityProofSDKType | undefined;
}
/** MsgInitializeAccount represents a message to create a new confidential transfer account. */
export interface MsgInitializeAccount {
	fromAddress: string;
	denom: string;
	publicKey: Uint8Array;
	decryptableBalance: string;
	pendingBalanceLo?: Ciphertext | undefined;
	pendingBalanceHi?: Ciphertext | undefined;
	availableBalance?: Ciphertext | undefined;
	proofs?: InitializeAccountMsgProofs | undefined;
}
export interface MsgInitializeAccountProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount';
	value: Uint8Array;
}
/** MsgInitializeAccount represents a message to create a new confidential transfer account. */
export interface MsgInitializeAccountAmino {
	from_address?: string;
	denom?: string;
	public_key?: string;
	decryptable_balance?: string;
	pending_balance_lo?: CiphertextAmino | undefined;
	pending_balance_hi?: CiphertextAmino | undefined;
	available_balance?: CiphertextAmino | undefined;
	proofs?: InitializeAccountMsgProofsAmino | undefined;
}
export interface MsgInitializeAccountAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount';
	value: MsgInitializeAccountAmino;
}
/** MsgInitializeAccount represents a message to create a new confidential transfer account. */
export interface MsgInitializeAccountSDKType {
	from_address: string;
	denom: string;
	public_key: Uint8Array;
	decryptable_balance: string;
	pending_balance_lo?: CiphertextSDKType | undefined;
	pending_balance_hi?: CiphertextSDKType | undefined;
	available_balance?: CiphertextSDKType | undefined;
	proofs?: InitializeAccountMsgProofsSDKType | undefined;
}
/** MsgInitializeAccountResponse defines the Msg/Send response type. */
export interface MsgInitializeAccountResponse {}
export interface MsgInitializeAccountResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccountResponse';
	value: Uint8Array;
}
/** MsgInitializeAccountResponse defines the Msg/Send response type. */
export interface MsgInitializeAccountResponseAmino {}
export interface MsgInitializeAccountResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccountResponse';
	value: MsgInitializeAccountResponseAmino;
}
/** MsgInitializeAccountResponse defines the Msg/Send response type. */
export interface MsgInitializeAccountResponseSDKType {}
/** MsgDeposit represents a message for depositing tokens into a confidential account */
export interface MsgDeposit {
	fromAddress: string;
	denom: string;
	amount: bigint;
}
export interface MsgDepositProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit';
	value: Uint8Array;
}
/** MsgDeposit represents a message for depositing tokens into a confidential account */
export interface MsgDepositAmino {
	from_address?: string;
	denom?: string;
	amount?: string;
}
export interface MsgDepositAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit';
	value: MsgDepositAmino;
}
/** MsgDeposit represents a message for depositing tokens into a confidential account */
export interface MsgDepositSDKType {
	from_address: string;
	denom: string;
	amount: bigint;
}
/** MsgDepositResponse defines the Msg/Send response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDepositResponse';
	value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Send response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgDepositResponse';
	value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Send response type. */
export interface MsgDepositResponseSDKType {}
/** MsgWithdraw represents a message to withdraw from a confidential module account. */
export interface MsgWithdraw {
	fromAddress: string;
	denom: string;
	amount: string;
	decryptableBalance: string;
	remainingBalanceCommitment?: Ciphertext | undefined;
	proofs?: WithdrawMsgProofs | undefined;
}
export interface MsgWithdrawProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw';
	value: Uint8Array;
}
/** MsgWithdraw represents a message to withdraw from a confidential module account. */
export interface MsgWithdrawAmino {
	from_address?: string;
	denom?: string;
	amount?: string;
	decryptable_balance?: string;
	remaining_balance_commitment?: CiphertextAmino | undefined;
	proofs?: WithdrawMsgProofsAmino | undefined;
}
export interface MsgWithdrawAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw';
	value: MsgWithdrawAmino;
}
/** MsgWithdraw represents a message to withdraw from a confidential module account. */
export interface MsgWithdrawSDKType {
	from_address: string;
	denom: string;
	amount: string;
	decryptable_balance: string;
	remaining_balance_commitment?: CiphertextSDKType | undefined;
	proofs?: WithdrawMsgProofsSDKType | undefined;
}
/** MsgWithdrawResponse defines the Msg/Send response type. */
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdrawResponse';
	value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Send response type. */
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgWithdrawResponse';
	value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Send response type. */
export interface MsgWithdrawResponseSDKType {}
/** Message to be used in apply pending balance instruction/transaction */
export interface MsgApplyPendingBalance {
	address: string;
	denom: string;
	newDecryptableAvailableBalance: string;
	currentPendingBalanceCounter: number;
	currentAvailableBalance?: Ciphertext | undefined;
}
export interface MsgApplyPendingBalanceProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance';
	value: Uint8Array;
}
/** Message to be used in apply pending balance instruction/transaction */
export interface MsgApplyPendingBalanceAmino {
	address?: string;
	denom?: string;
	new_decryptable_available_balance?: string;
	current_pending_balance_counter?: number;
	current_available_balance?: CiphertextAmino | undefined;
}
export interface MsgApplyPendingBalanceAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance';
	value: MsgApplyPendingBalanceAmino;
}
/** Message to be used in apply pending balance instruction/transaction */
export interface MsgApplyPendingBalanceSDKType {
	address: string;
	denom: string;
	new_decryptable_available_balance: string;
	current_pending_balance_counter: number;
	current_available_balance?: CiphertextSDKType | undefined;
}
export interface MsgApplyPendingBalanceResponse {}
export interface MsgApplyPendingBalanceResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalanceResponse';
	value: Uint8Array;
}
export interface MsgApplyPendingBalanceResponseAmino {}
export interface MsgApplyPendingBalanceResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalanceResponse';
	value: MsgApplyPendingBalanceResponseAmino;
}
export interface MsgApplyPendingBalanceResponseSDKType {}
/** Message to be used in close account instruction/transaction */
export interface MsgCloseAccount {
	address: string;
	denom: string;
	proofs?: CloseAccountMsgProofs | undefined;
}
export interface MsgCloseAccountProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount';
	value: Uint8Array;
}
/** Message to be used in close account instruction/transaction */
export interface MsgCloseAccountAmino {
	address?: string;
	denom?: string;
	proofs?: CloseAccountMsgProofsAmino | undefined;
}
export interface MsgCloseAccountAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount';
	value: MsgCloseAccountAmino;
}
/** Message to be used in close account instruction/transaction */
export interface MsgCloseAccountSDKType {
	address: string;
	denom: string;
	proofs?: CloseAccountMsgProofsSDKType | undefined;
}
export interface MsgCloseAccountResponse {}
export interface MsgCloseAccountResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccountResponse';
	value: Uint8Array;
}
export interface MsgCloseAccountResponseAmino {}
export interface MsgCloseAccountResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccountResponse';
	value: MsgCloseAccountResponseAmino;
}
export interface MsgCloseAccountResponseSDKType {}
function createBaseMsgTransfer(): MsgTransfer {
	return {
		fromAddress: '',
		toAddress: '',
		denom: '',
		fromAmountLo: undefined,
		fromAmountHi: undefined,
		toAmountLo: undefined,
		toAmountHi: undefined,
		remainingBalance: undefined,
		decryptableBalance: '',
		proofs: undefined,
		auditors: []
	};
}
export const MsgTransfer = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer',
	encode(message: MsgTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.toAddress !== '') {
			writer.uint32(18).string(message.toAddress);
		}
		if (message.denom !== '') {
			writer.uint32(26).string(message.denom);
		}
		if (message.fromAmountLo !== undefined) {
			Ciphertext.encode(message.fromAmountLo, writer.uint32(34).fork()).ldelim();
		}
		if (message.fromAmountHi !== undefined) {
			Ciphertext.encode(message.fromAmountHi, writer.uint32(42).fork()).ldelim();
		}
		if (message.toAmountLo !== undefined) {
			Ciphertext.encode(message.toAmountLo, writer.uint32(50).fork()).ldelim();
		}
		if (message.toAmountHi !== undefined) {
			Ciphertext.encode(message.toAmountHi, writer.uint32(58).fork()).ldelim();
		}
		if (message.remainingBalance !== undefined) {
			Ciphertext.encode(message.remainingBalance, writer.uint32(66).fork()).ldelim();
		}
		if (message.decryptableBalance !== '') {
			writer.uint32(74).string(message.decryptableBalance);
		}
		if (message.proofs !== undefined) {
			TransferMsgProofs.encode(message.proofs, writer.uint32(82).fork()).ldelim();
		}
		for (const v of message.auditors) {
			Auditor.encode(v!, writer.uint32(90).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgTransfer {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgTransfer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.toAddress = reader.string();
					break;
				case 3:
					message.denom = reader.string();
					break;
				case 4:
					message.fromAmountLo = Ciphertext.decode(reader, reader.uint32());
					break;
				case 5:
					message.fromAmountHi = Ciphertext.decode(reader, reader.uint32());
					break;
				case 6:
					message.toAmountLo = Ciphertext.decode(reader, reader.uint32());
					break;
				case 7:
					message.toAmountHi = Ciphertext.decode(reader, reader.uint32());
					break;
				case 8:
					message.remainingBalance = Ciphertext.decode(reader, reader.uint32());
					break;
				case 9:
					message.decryptableBalance = reader.string();
					break;
				case 10:
					message.proofs = TransferMsgProofs.decode(reader, reader.uint32());
					break;
				case 11:
					message.auditors.push(Auditor.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgTransfer>): MsgTransfer {
		const message = createBaseMsgTransfer();
		message.fromAddress = object.fromAddress ?? '';
		message.toAddress = object.toAddress ?? '';
		message.denom = object.denom ?? '';
		message.fromAmountLo = object.fromAmountLo !== undefined && object.fromAmountLo !== null ? Ciphertext.fromPartial(object.fromAmountLo) : undefined;
		message.fromAmountHi = object.fromAmountHi !== undefined && object.fromAmountHi !== null ? Ciphertext.fromPartial(object.fromAmountHi) : undefined;
		message.toAmountLo = object.toAmountLo !== undefined && object.toAmountLo !== null ? Ciphertext.fromPartial(object.toAmountLo) : undefined;
		message.toAmountHi = object.toAmountHi !== undefined && object.toAmountHi !== null ? Ciphertext.fromPartial(object.toAmountHi) : undefined;
		message.remainingBalance =
			object.remainingBalance !== undefined && object.remainingBalance !== null ? Ciphertext.fromPartial(object.remainingBalance) : undefined;
		message.decryptableBalance = object.decryptableBalance ?? '';
		message.proofs = object.proofs !== undefined && object.proofs !== null ? TransferMsgProofs.fromPartial(object.proofs) : undefined;
		message.auditors = object.auditors?.map((e) => Auditor.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MsgTransferAmino): MsgTransfer {
		const message = createBaseMsgTransfer();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.to_address !== undefined && object.to_address !== null) {
			message.toAddress = object.to_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.from_amount_lo !== undefined && object.from_amount_lo !== null) {
			message.fromAmountLo = Ciphertext.fromAmino(object.from_amount_lo);
		}
		if (object.from_amount_hi !== undefined && object.from_amount_hi !== null) {
			message.fromAmountHi = Ciphertext.fromAmino(object.from_amount_hi);
		}
		if (object.to_amount_lo !== undefined && object.to_amount_lo !== null) {
			message.toAmountLo = Ciphertext.fromAmino(object.to_amount_lo);
		}
		if (object.to_amount_hi !== undefined && object.to_amount_hi !== null) {
			message.toAmountHi = Ciphertext.fromAmino(object.to_amount_hi);
		}
		if (object.remaining_balance !== undefined && object.remaining_balance !== null) {
			message.remainingBalance = Ciphertext.fromAmino(object.remaining_balance);
		}
		if (object.decryptable_balance !== undefined && object.decryptable_balance !== null) {
			message.decryptableBalance = object.decryptable_balance;
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = TransferMsgProofs.fromAmino(object.proofs);
		}
		message.auditors = object.auditors?.map((e) => Auditor.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MsgTransfer): MsgTransferAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.to_address = message.toAddress === '' ? undefined : message.toAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.from_amount_lo = message.fromAmountLo ? Ciphertext.toAmino(message.fromAmountLo) : undefined;
		obj.from_amount_hi = message.fromAmountHi ? Ciphertext.toAmino(message.fromAmountHi) : undefined;
		obj.to_amount_lo = message.toAmountLo ? Ciphertext.toAmino(message.toAmountLo) : undefined;
		obj.to_amount_hi = message.toAmountHi ? Ciphertext.toAmino(message.toAmountHi) : undefined;
		obj.remaining_balance = message.remainingBalance ? Ciphertext.toAmino(message.remainingBalance) : undefined;
		obj.decryptable_balance = message.decryptableBalance === '' ? undefined : message.decryptableBalance;
		obj.proofs = message.proofs ? TransferMsgProofs.toAmino(message.proofs) : undefined;
		if (message.auditors) {
			obj.auditors = message.auditors.map((e) => (e ? Auditor.toAmino(e) : undefined));
		} else {
			obj.auditors = message.auditors;
		}
		return obj;
	},
	fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
		return MsgTransfer.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
		return MsgTransfer.decode(message.value);
	},
	toProto(message: MsgTransfer): Uint8Array {
		return MsgTransfer.encode(message).finish();
	},
	toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer',
			value: MsgTransfer.encode(message).finish()
		};
	}
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
	return {};
}
export const MsgTransferResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransferResponse',
	encode(_: MsgTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgTransferResponse();
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
	fromPartial(_: Partial<MsgTransferResponse>): MsgTransferResponse {
		const message = createBaseMsgTransferResponse();
		return message;
	},
	fromAmino(_: MsgTransferResponseAmino): MsgTransferResponse {
		const message = createBaseMsgTransferResponse();
		return message;
	},
	toAmino(_: MsgTransferResponse): MsgTransferResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
		return MsgTransferResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
		return MsgTransferResponse.decode(message.value);
	},
	toProto(message: MsgTransferResponse): Uint8Array {
		return MsgTransferResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransferResponse',
			value: MsgTransferResponse.encode(message).finish()
		};
	}
};
function createBaseAuditor(): Auditor {
	return {
		auditorAddress: '',
		encryptedTransferAmountLo: undefined,
		encryptedTransferAmountHi: undefined,
		transferAmountLoValidityProof: undefined,
		transferAmountHiValidityProof: undefined,
		transferAmountLoEqualityProof: undefined,
		transferAmountHiEqualityProof: undefined
	};
}
export const Auditor = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.Auditor',
	encode(message: Auditor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.auditorAddress !== '') {
			writer.uint32(10).string(message.auditorAddress);
		}
		if (message.encryptedTransferAmountLo !== undefined) {
			Ciphertext.encode(message.encryptedTransferAmountLo, writer.uint32(18).fork()).ldelim();
		}
		if (message.encryptedTransferAmountHi !== undefined) {
			Ciphertext.encode(message.encryptedTransferAmountHi, writer.uint32(26).fork()).ldelim();
		}
		if (message.transferAmountLoValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.transferAmountLoValidityProof, writer.uint32(34).fork()).ldelim();
		}
		if (message.transferAmountHiValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.transferAmountHiValidityProof, writer.uint32(42).fork()).ldelim();
		}
		if (message.transferAmountLoEqualityProof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transferAmountLoEqualityProof, writer.uint32(50).fork()).ldelim();
		}
		if (message.transferAmountHiEqualityProof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transferAmountHiEqualityProof, writer.uint32(58).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Auditor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAuditor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.auditorAddress = reader.string();
					break;
				case 2:
					message.encryptedTransferAmountLo = Ciphertext.decode(reader, reader.uint32());
					break;
				case 3:
					message.encryptedTransferAmountHi = Ciphertext.decode(reader, reader.uint32());
					break;
				case 4:
					message.transferAmountLoValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 5:
					message.transferAmountHiValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 6:
					message.transferAmountLoEqualityProof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					break;
				case 7:
					message.transferAmountHiEqualityProof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Auditor>): Auditor {
		const message = createBaseAuditor();
		message.auditorAddress = object.auditorAddress ?? '';
		message.encryptedTransferAmountLo =
			object.encryptedTransferAmountLo !== undefined && object.encryptedTransferAmountLo !== null
				? Ciphertext.fromPartial(object.encryptedTransferAmountLo)
				: undefined;
		message.encryptedTransferAmountHi =
			object.encryptedTransferAmountHi !== undefined && object.encryptedTransferAmountHi !== null
				? Ciphertext.fromPartial(object.encryptedTransferAmountHi)
				: undefined;
		message.transferAmountLoValidityProof =
			object.transferAmountLoValidityProof !== undefined && object.transferAmountLoValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.transferAmountLoValidityProof)
				: undefined;
		message.transferAmountHiValidityProof =
			object.transferAmountHiValidityProof !== undefined && object.transferAmountHiValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.transferAmountHiValidityProof)
				: undefined;
		message.transferAmountLoEqualityProof =
			object.transferAmountLoEqualityProof !== undefined && object.transferAmountLoEqualityProof !== null
				? CiphertextCiphertextEqualityProof.fromPartial(object.transferAmountLoEqualityProof)
				: undefined;
		message.transferAmountHiEqualityProof =
			object.transferAmountHiEqualityProof !== undefined && object.transferAmountHiEqualityProof !== null
				? CiphertextCiphertextEqualityProof.fromPartial(object.transferAmountHiEqualityProof)
				: undefined;
		return message;
	},
	fromAmino(object: AuditorAmino): Auditor {
		const message = createBaseAuditor();
		if (object.auditor_address !== undefined && object.auditor_address !== null) {
			message.auditorAddress = object.auditor_address;
		}
		if (object.encrypted_transfer_amount_lo !== undefined && object.encrypted_transfer_amount_lo !== null) {
			message.encryptedTransferAmountLo = Ciphertext.fromAmino(object.encrypted_transfer_amount_lo);
		}
		if (object.encrypted_transfer_amount_hi !== undefined && object.encrypted_transfer_amount_hi !== null) {
			message.encryptedTransferAmountHi = Ciphertext.fromAmino(object.encrypted_transfer_amount_hi);
		}
		if (object.transfer_amount_lo_validity_proof !== undefined && object.transfer_amount_lo_validity_proof !== null) {
			message.transferAmountLoValidityProof = CiphertextValidityProof.fromAmino(object.transfer_amount_lo_validity_proof);
		}
		if (object.transfer_amount_hi_validity_proof !== undefined && object.transfer_amount_hi_validity_proof !== null) {
			message.transferAmountHiValidityProof = CiphertextValidityProof.fromAmino(object.transfer_amount_hi_validity_proof);
		}
		if (object.transfer_amount_lo_equality_proof !== undefined && object.transfer_amount_lo_equality_proof !== null) {
			message.transferAmountLoEqualityProof = CiphertextCiphertextEqualityProof.fromAmino(object.transfer_amount_lo_equality_proof);
		}
		if (object.transfer_amount_hi_equality_proof !== undefined && object.transfer_amount_hi_equality_proof !== null) {
			message.transferAmountHiEqualityProof = CiphertextCiphertextEqualityProof.fromAmino(object.transfer_amount_hi_equality_proof);
		}
		return message;
	},
	toAmino(message: Auditor): AuditorAmino {
		const obj: any = {};
		obj.auditor_address = message.auditorAddress === '' ? undefined : message.auditorAddress;
		obj.encrypted_transfer_amount_lo = message.encryptedTransferAmountLo ? Ciphertext.toAmino(message.encryptedTransferAmountLo) : undefined;
		obj.encrypted_transfer_amount_hi = message.encryptedTransferAmountHi ? Ciphertext.toAmino(message.encryptedTransferAmountHi) : undefined;
		obj.transfer_amount_lo_validity_proof = message.transferAmountLoValidityProof
			? CiphertextValidityProof.toAmino(message.transferAmountLoValidityProof)
			: undefined;
		obj.transfer_amount_hi_validity_proof = message.transferAmountHiValidityProof
			? CiphertextValidityProof.toAmino(message.transferAmountHiValidityProof)
			: undefined;
		obj.transfer_amount_lo_equality_proof = message.transferAmountLoEqualityProof
			? CiphertextCiphertextEqualityProof.toAmino(message.transferAmountLoEqualityProof)
			: undefined;
		obj.transfer_amount_hi_equality_proof = message.transferAmountHiEqualityProof
			? CiphertextCiphertextEqualityProof.toAmino(message.transferAmountHiEqualityProof)
			: undefined;
		return obj;
	},
	fromAminoMsg(object: AuditorAminoMsg): Auditor {
		return Auditor.fromAmino(object.value);
	},
	fromProtoMsg(message: AuditorProtoMsg): Auditor {
		return Auditor.decode(message.value);
	},
	toProto(message: Auditor): Uint8Array {
		return Auditor.encode(message).finish();
	},
	toProtoMsg(message: Auditor): AuditorProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.Auditor',
			value: Auditor.encode(message).finish()
		};
	}
};
function createBaseMsgInitializeAccount(): MsgInitializeAccount {
	return {
		fromAddress: '',
		denom: '',
		publicKey: new Uint8Array(),
		decryptableBalance: '',
		pendingBalanceLo: undefined,
		pendingBalanceHi: undefined,
		availableBalance: undefined,
		proofs: undefined
	};
}
export const MsgInitializeAccount = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount',
	encode(message: MsgInitializeAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.publicKey.length !== 0) {
			writer.uint32(26).bytes(message.publicKey);
		}
		if (message.decryptableBalance !== '') {
			writer.uint32(34).string(message.decryptableBalance);
		}
		if (message.pendingBalanceLo !== undefined) {
			Ciphertext.encode(message.pendingBalanceLo, writer.uint32(42).fork()).ldelim();
		}
		if (message.pendingBalanceHi !== undefined) {
			Ciphertext.encode(message.pendingBalanceHi, writer.uint32(50).fork()).ldelim();
		}
		if (message.availableBalance !== undefined) {
			Ciphertext.encode(message.availableBalance, writer.uint32(58).fork()).ldelim();
		}
		if (message.proofs !== undefined) {
			InitializeAccountMsgProofs.encode(message.proofs, writer.uint32(66).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgInitializeAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInitializeAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.publicKey = reader.bytes();
					break;
				case 4:
					message.decryptableBalance = reader.string();
					break;
				case 5:
					message.pendingBalanceLo = Ciphertext.decode(reader, reader.uint32());
					break;
				case 6:
					message.pendingBalanceHi = Ciphertext.decode(reader, reader.uint32());
					break;
				case 7:
					message.availableBalance = Ciphertext.decode(reader, reader.uint32());
					break;
				case 8:
					message.proofs = InitializeAccountMsgProofs.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgInitializeAccount>): MsgInitializeAccount {
		const message = createBaseMsgInitializeAccount();
		message.fromAddress = object.fromAddress ?? '';
		message.denom = object.denom ?? '';
		message.publicKey = object.publicKey ?? new Uint8Array();
		message.decryptableBalance = object.decryptableBalance ?? '';
		message.pendingBalanceLo =
			object.pendingBalanceLo !== undefined && object.pendingBalanceLo !== null ? Ciphertext.fromPartial(object.pendingBalanceLo) : undefined;
		message.pendingBalanceHi =
			object.pendingBalanceHi !== undefined && object.pendingBalanceHi !== null ? Ciphertext.fromPartial(object.pendingBalanceHi) : undefined;
		message.availableBalance =
			object.availableBalance !== undefined && object.availableBalance !== null ? Ciphertext.fromPartial(object.availableBalance) : undefined;
		message.proofs = object.proofs !== undefined && object.proofs !== null ? InitializeAccountMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	},
	fromAmino(object: MsgInitializeAccountAmino): MsgInitializeAccount {
		const message = createBaseMsgInitializeAccount();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.public_key !== undefined && object.public_key !== null) {
			message.publicKey = bytesFromBase64(object.public_key);
		}
		if (object.decryptable_balance !== undefined && object.decryptable_balance !== null) {
			message.decryptableBalance = object.decryptable_balance;
		}
		if (object.pending_balance_lo !== undefined && object.pending_balance_lo !== null) {
			message.pendingBalanceLo = Ciphertext.fromAmino(object.pending_balance_lo);
		}
		if (object.pending_balance_hi !== undefined && object.pending_balance_hi !== null) {
			message.pendingBalanceHi = Ciphertext.fromAmino(object.pending_balance_hi);
		}
		if (object.available_balance !== undefined && object.available_balance !== null) {
			message.availableBalance = Ciphertext.fromAmino(object.available_balance);
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = InitializeAccountMsgProofs.fromAmino(object.proofs);
		}
		return message;
	},
	toAmino(message: MsgInitializeAccount): MsgInitializeAccountAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.public_key = message.publicKey ? base64FromBytes(message.publicKey) : undefined;
		obj.decryptable_balance = message.decryptableBalance === '' ? undefined : message.decryptableBalance;
		obj.pending_balance_lo = message.pendingBalanceLo ? Ciphertext.toAmino(message.pendingBalanceLo) : undefined;
		obj.pending_balance_hi = message.pendingBalanceHi ? Ciphertext.toAmino(message.pendingBalanceHi) : undefined;
		obj.available_balance = message.availableBalance ? Ciphertext.toAmino(message.availableBalance) : undefined;
		obj.proofs = message.proofs ? InitializeAccountMsgProofs.toAmino(message.proofs) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgInitializeAccountAminoMsg): MsgInitializeAccount {
		return MsgInitializeAccount.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgInitializeAccountProtoMsg): MsgInitializeAccount {
		return MsgInitializeAccount.decode(message.value);
	},
	toProto(message: MsgInitializeAccount): Uint8Array {
		return MsgInitializeAccount.encode(message).finish();
	},
	toProtoMsg(message: MsgInitializeAccount): MsgInitializeAccountProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount',
			value: MsgInitializeAccount.encode(message).finish()
		};
	}
};
function createBaseMsgInitializeAccountResponse(): MsgInitializeAccountResponse {
	return {};
}
export const MsgInitializeAccountResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccountResponse',
	encode(_: MsgInitializeAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgInitializeAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInitializeAccountResponse();
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
	fromPartial(_: Partial<MsgInitializeAccountResponse>): MsgInitializeAccountResponse {
		const message = createBaseMsgInitializeAccountResponse();
		return message;
	},
	fromAmino(_: MsgInitializeAccountResponseAmino): MsgInitializeAccountResponse {
		const message = createBaseMsgInitializeAccountResponse();
		return message;
	},
	toAmino(_: MsgInitializeAccountResponse): MsgInitializeAccountResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgInitializeAccountResponseAminoMsg): MsgInitializeAccountResponse {
		return MsgInitializeAccountResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgInitializeAccountResponseProtoMsg): MsgInitializeAccountResponse {
		return MsgInitializeAccountResponse.decode(message.value);
	},
	toProto(message: MsgInitializeAccountResponse): Uint8Array {
		return MsgInitializeAccountResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgInitializeAccountResponse): MsgInitializeAccountResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccountResponse',
			value: MsgInitializeAccountResponse.encode(message).finish()
		};
	}
};
function createBaseMsgDeposit(): MsgDeposit {
	return {
		fromAddress: '',
		denom: '',
		amount: BigInt(0)
	};
}
export const MsgDeposit = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit',
	encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.amount !== BigInt(0)) {
			writer.uint32(24).uint64(message.amount);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDeposit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.amount = reader.uint64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
		const message = createBaseMsgDeposit();
		message.fromAddress = object.fromAddress ?? '';
		message.denom = object.denom ?? '';
		message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: MsgDepositAmino): MsgDeposit {
		const message = createBaseMsgDeposit();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = BigInt(object.amount);
		}
		return message;
	},
	toAmino(message: MsgDeposit): MsgDepositAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.amount = message.amount !== BigInt(0) ? message.amount.toString() : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
		return MsgDeposit.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
		return MsgDeposit.decode(message.value);
	},
	toProto(message: MsgDeposit): Uint8Array {
		return MsgDeposit.encode(message).finish();
	},
	toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit',
			value: MsgDeposit.encode(message).finish()
		};
	}
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
	return {};
}
export const MsgDepositResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDepositResponse',
	encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDepositResponse();
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
	fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
		const message = createBaseMsgDepositResponse();
		return message;
	},
	fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
		const message = createBaseMsgDepositResponse();
		return message;
	},
	toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
		return MsgDepositResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
		return MsgDepositResponse.decode(message.value);
	},
	toProto(message: MsgDepositResponse): Uint8Array {
		return MsgDepositResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDepositResponse',
			value: MsgDepositResponse.encode(message).finish()
		};
	}
};
function createBaseMsgWithdraw(): MsgWithdraw {
	return {
		fromAddress: '',
		denom: '',
		amount: '',
		decryptableBalance: '',
		remainingBalanceCommitment: undefined,
		proofs: undefined
	};
}
export const MsgWithdraw = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw',
	encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.amount !== '') {
			writer.uint32(26).string(message.amount);
		}
		if (message.decryptableBalance !== '') {
			writer.uint32(34).string(message.decryptableBalance);
		}
		if (message.remainingBalanceCommitment !== undefined) {
			Ciphertext.encode(message.remainingBalanceCommitment, writer.uint32(42).fork()).ldelim();
		}
		if (message.proofs !== undefined) {
			WithdrawMsgProofs.encode(message.proofs, writer.uint32(50).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdraw();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.amount = reader.string();
					break;
				case 4:
					message.decryptableBalance = reader.string();
					break;
				case 5:
					message.remainingBalanceCommitment = Ciphertext.decode(reader, reader.uint32());
					break;
				case 6:
					message.proofs = WithdrawMsgProofs.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
		const message = createBaseMsgWithdraw();
		message.fromAddress = object.fromAddress ?? '';
		message.denom = object.denom ?? '';
		message.amount = object.amount ?? '';
		message.decryptableBalance = object.decryptableBalance ?? '';
		message.remainingBalanceCommitment =
			object.remainingBalanceCommitment !== undefined && object.remainingBalanceCommitment !== null
				? Ciphertext.fromPartial(object.remainingBalanceCommitment)
				: undefined;
		message.proofs = object.proofs !== undefined && object.proofs !== null ? WithdrawMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	},
	fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
		const message = createBaseMsgWithdraw();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = object.amount;
		}
		if (object.decryptable_balance !== undefined && object.decryptable_balance !== null) {
			message.decryptableBalance = object.decryptable_balance;
		}
		if (object.remaining_balance_commitment !== undefined && object.remaining_balance_commitment !== null) {
			message.remainingBalanceCommitment = Ciphertext.fromAmino(object.remaining_balance_commitment);
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = WithdrawMsgProofs.fromAmino(object.proofs);
		}
		return message;
	},
	toAmino(message: MsgWithdraw): MsgWithdrawAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.amount = message.amount === '' ? undefined : message.amount;
		obj.decryptable_balance = message.decryptableBalance === '' ? undefined : message.decryptableBalance;
		obj.remaining_balance_commitment = message.remainingBalanceCommitment ? Ciphertext.toAmino(message.remainingBalanceCommitment) : undefined;
		obj.proofs = message.proofs ? WithdrawMsgProofs.toAmino(message.proofs) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
		return MsgWithdraw.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
		return MsgWithdraw.decode(message.value);
	},
	toProto(message: MsgWithdraw): Uint8Array {
		return MsgWithdraw.encode(message).finish();
	},
	toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw',
			value: MsgWithdraw.encode(message).finish()
		};
	}
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
	return {};
}
export const MsgWithdrawResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdrawResponse',
	encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdrawResponse();
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
	fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
		const message = createBaseMsgWithdrawResponse();
		return message;
	},
	fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
		const message = createBaseMsgWithdrawResponse();
		return message;
	},
	toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
		return MsgWithdrawResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
		return MsgWithdrawResponse.decode(message.value);
	},
	toProto(message: MsgWithdrawResponse): Uint8Array {
		return MsgWithdrawResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdrawResponse',
			value: MsgWithdrawResponse.encode(message).finish()
		};
	}
};
function createBaseMsgApplyPendingBalance(): MsgApplyPendingBalance {
	return {
		address: '',
		denom: '',
		newDecryptableAvailableBalance: '',
		currentPendingBalanceCounter: 0,
		currentAvailableBalance: undefined
	};
}
export const MsgApplyPendingBalance = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance',
	encode(message: MsgApplyPendingBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.newDecryptableAvailableBalance !== '') {
			writer.uint32(26).string(message.newDecryptableAvailableBalance);
		}
		if (message.currentPendingBalanceCounter !== 0) {
			writer.uint32(32).uint32(message.currentPendingBalanceCounter);
		}
		if (message.currentAvailableBalance !== undefined) {
			Ciphertext.encode(message.currentAvailableBalance, writer.uint32(42).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgApplyPendingBalance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgApplyPendingBalance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.newDecryptableAvailableBalance = reader.string();
					break;
				case 4:
					message.currentPendingBalanceCounter = reader.uint32();
					break;
				case 5:
					message.currentAvailableBalance = Ciphertext.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgApplyPendingBalance>): MsgApplyPendingBalance {
		const message = createBaseMsgApplyPendingBalance();
		message.address = object.address ?? '';
		message.denom = object.denom ?? '';
		message.newDecryptableAvailableBalance = object.newDecryptableAvailableBalance ?? '';
		message.currentPendingBalanceCounter = object.currentPendingBalanceCounter ?? 0;
		message.currentAvailableBalance =
			object.currentAvailableBalance !== undefined && object.currentAvailableBalance !== null ? Ciphertext.fromPartial(object.currentAvailableBalance) : undefined;
		return message;
	},
	fromAmino(object: MsgApplyPendingBalanceAmino): MsgApplyPendingBalance {
		const message = createBaseMsgApplyPendingBalance();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.new_decryptable_available_balance !== undefined && object.new_decryptable_available_balance !== null) {
			message.newDecryptableAvailableBalance = object.new_decryptable_available_balance;
		}
		if (object.current_pending_balance_counter !== undefined && object.current_pending_balance_counter !== null) {
			message.currentPendingBalanceCounter = object.current_pending_balance_counter;
		}
		if (object.current_available_balance !== undefined && object.current_available_balance !== null) {
			message.currentAvailableBalance = Ciphertext.fromAmino(object.current_available_balance);
		}
		return message;
	},
	toAmino(message: MsgApplyPendingBalance): MsgApplyPendingBalanceAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.new_decryptable_available_balance = message.newDecryptableAvailableBalance === '' ? undefined : message.newDecryptableAvailableBalance;
		obj.current_pending_balance_counter = message.currentPendingBalanceCounter === 0 ? undefined : message.currentPendingBalanceCounter;
		obj.current_available_balance = message.currentAvailableBalance ? Ciphertext.toAmino(message.currentAvailableBalance) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgApplyPendingBalanceAminoMsg): MsgApplyPendingBalance {
		return MsgApplyPendingBalance.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgApplyPendingBalanceProtoMsg): MsgApplyPendingBalance {
		return MsgApplyPendingBalance.decode(message.value);
	},
	toProto(message: MsgApplyPendingBalance): Uint8Array {
		return MsgApplyPendingBalance.encode(message).finish();
	},
	toProtoMsg(message: MsgApplyPendingBalance): MsgApplyPendingBalanceProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance',
			value: MsgApplyPendingBalance.encode(message).finish()
		};
	}
};
function createBaseMsgApplyPendingBalanceResponse(): MsgApplyPendingBalanceResponse {
	return {};
}
export const MsgApplyPendingBalanceResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalanceResponse',
	encode(_: MsgApplyPendingBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgApplyPendingBalanceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgApplyPendingBalanceResponse();
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
	fromPartial(_: Partial<MsgApplyPendingBalanceResponse>): MsgApplyPendingBalanceResponse {
		const message = createBaseMsgApplyPendingBalanceResponse();
		return message;
	},
	fromAmino(_: MsgApplyPendingBalanceResponseAmino): MsgApplyPendingBalanceResponse {
		const message = createBaseMsgApplyPendingBalanceResponse();
		return message;
	},
	toAmino(_: MsgApplyPendingBalanceResponse): MsgApplyPendingBalanceResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgApplyPendingBalanceResponseAminoMsg): MsgApplyPendingBalanceResponse {
		return MsgApplyPendingBalanceResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgApplyPendingBalanceResponseProtoMsg): MsgApplyPendingBalanceResponse {
		return MsgApplyPendingBalanceResponse.decode(message.value);
	},
	toProto(message: MsgApplyPendingBalanceResponse): Uint8Array {
		return MsgApplyPendingBalanceResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgApplyPendingBalanceResponse): MsgApplyPendingBalanceResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalanceResponse',
			value: MsgApplyPendingBalanceResponse.encode(message).finish()
		};
	}
};
function createBaseMsgCloseAccount(): MsgCloseAccount {
	return {
		address: '',
		denom: '',
		proofs: undefined
	};
}
export const MsgCloseAccount = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount',
	encode(message: MsgCloseAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.proofs !== undefined) {
			CloseAccountMsgProofs.encode(message.proofs, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCloseAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.proofs = CloseAccountMsgProofs.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgCloseAccount>): MsgCloseAccount {
		const message = createBaseMsgCloseAccount();
		message.address = object.address ?? '';
		message.denom = object.denom ?? '';
		message.proofs = object.proofs !== undefined && object.proofs !== null ? CloseAccountMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	},
	fromAmino(object: MsgCloseAccountAmino): MsgCloseAccount {
		const message = createBaseMsgCloseAccount();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = CloseAccountMsgProofs.fromAmino(object.proofs);
		}
		return message;
	},
	toAmino(message: MsgCloseAccount): MsgCloseAccountAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.proofs = message.proofs ? CloseAccountMsgProofs.toAmino(message.proofs) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgCloseAccountAminoMsg): MsgCloseAccount {
		return MsgCloseAccount.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgCloseAccountProtoMsg): MsgCloseAccount {
		return MsgCloseAccount.decode(message.value);
	},
	toProto(message: MsgCloseAccount): Uint8Array {
		return MsgCloseAccount.encode(message).finish();
	},
	toProtoMsg(message: MsgCloseAccount): MsgCloseAccountProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount',
			value: MsgCloseAccount.encode(message).finish()
		};
	}
};
function createBaseMsgCloseAccountResponse(): MsgCloseAccountResponse {
	return {};
}
export const MsgCloseAccountResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccountResponse',
	encode(_: MsgCloseAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCloseAccountResponse();
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
	fromPartial(_: Partial<MsgCloseAccountResponse>): MsgCloseAccountResponse {
		const message = createBaseMsgCloseAccountResponse();
		return message;
	},
	fromAmino(_: MsgCloseAccountResponseAmino): MsgCloseAccountResponse {
		const message = createBaseMsgCloseAccountResponse();
		return message;
	},
	toAmino(_: MsgCloseAccountResponse): MsgCloseAccountResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgCloseAccountResponseAminoMsg): MsgCloseAccountResponse {
		return MsgCloseAccountResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgCloseAccountResponseProtoMsg): MsgCloseAccountResponse {
		return MsgCloseAccountResponse.decode(message.value);
	},
	toProto(message: MsgCloseAccountResponse): Uint8Array {
		return MsgCloseAccountResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgCloseAccountResponse): MsgCloseAccountResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccountResponse',
			value: MsgCloseAccountResponse.encode(message).finish()
		};
	}
};

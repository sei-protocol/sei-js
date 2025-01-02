import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
export interface TransferMsgProofs {
	remainingBalanceCommitmentValidityProof?: CiphertextValidityProof | undefined;
	senderTransferAmountLoValidityProof?: CiphertextValidityProof | undefined;
	senderTransferAmountHiValidityProof?: CiphertextValidityProof | undefined;
	recipientTransferAmountLoValidityProof?: CiphertextValidityProof | undefined;
	recipientTransferAmountHiValidityProof?: CiphertextValidityProof | undefined;
	remainingBalanceRangeProof?: RangeProof | undefined;
	remainingBalanceEqualityProof?: CiphertextCommitmentEqualityProof | undefined;
	transferAmountLoEqualityProof?: CiphertextCiphertextEqualityProof | undefined;
	transferAmountHiEqualityProof?: CiphertextCiphertextEqualityProof | undefined;
}
export interface TransferMsgProofsProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.TransferMsgProofs';
	value: Uint8Array;
}
export interface TransferMsgProofsAmino {
	remaining_balance_commitment_validity_proof?: CiphertextValidityProofAmino | undefined;
	sender_transfer_amount_lo_validity_proof?: CiphertextValidityProofAmino | undefined;
	sender_transfer_amount_hi_validity_proof?: CiphertextValidityProofAmino | undefined;
	recipient_transfer_amount_lo_validity_proof?: CiphertextValidityProofAmino | undefined;
	recipient_transfer_amount_hi_validity_proof?: CiphertextValidityProofAmino | undefined;
	remaining_balance_range_proof?: RangeProofAmino | undefined;
	remaining_balance_equality_proof?: CiphertextCommitmentEqualityProofAmino | undefined;
	transfer_amount_lo_equality_proof?: CiphertextCiphertextEqualityProofAmino | undefined;
	transfer_amount_hi_equality_proof?: CiphertextCiphertextEqualityProofAmino | undefined;
}
export interface TransferMsgProofsAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.TransferMsgProofs';
	value: TransferMsgProofsAmino;
}
export interface TransferMsgProofsSDKType {
	remaining_balance_commitment_validity_proof?: CiphertextValidityProofSDKType | undefined;
	sender_transfer_amount_lo_validity_proof?: CiphertextValidityProofSDKType | undefined;
	sender_transfer_amount_hi_validity_proof?: CiphertextValidityProofSDKType | undefined;
	recipient_transfer_amount_lo_validity_proof?: CiphertextValidityProofSDKType | undefined;
	recipient_transfer_amount_hi_validity_proof?: CiphertextValidityProofSDKType | undefined;
	remaining_balance_range_proof?: RangeProofSDKType | undefined;
	remaining_balance_equality_proof?: CiphertextCommitmentEqualityProofSDKType | undefined;
	transfer_amount_lo_equality_proof?: CiphertextCiphertextEqualityProofSDKType | undefined;
	transfer_amount_hi_equality_proof?: CiphertextCiphertextEqualityProofSDKType | undefined;
}
export interface InitializeAccountMsgProofs {
	pubkeyValidityProof?: PubkeyValidityProof | undefined;
	zeroPendingBalanceLoProof?: ZeroBalanceProof | undefined;
	zeroPendingBalanceHiProof?: ZeroBalanceProof | undefined;
	zeroAvailableBalanceProof?: ZeroBalanceProof | undefined;
}
export interface InitializeAccountMsgProofsProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountMsgProofs';
	value: Uint8Array;
}
export interface InitializeAccountMsgProofsAmino {
	pubkey_validity_proof?: PubkeyValidityProofAmino | undefined;
	zero_pending_balance_lo_proof?: ZeroBalanceProofAmino | undefined;
	zero_pending_balance_hi_proof?: ZeroBalanceProofAmino | undefined;
	zero_available_balance_proof?: ZeroBalanceProofAmino | undefined;
}
export interface InitializeAccountMsgProofsAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountMsgProofs';
	value: InitializeAccountMsgProofsAmino;
}
export interface InitializeAccountMsgProofsSDKType {
	pubkey_validity_proof?: PubkeyValidityProofSDKType | undefined;
	zero_pending_balance_lo_proof?: ZeroBalanceProofSDKType | undefined;
	zero_pending_balance_hi_proof?: ZeroBalanceProofSDKType | undefined;
	zero_available_balance_proof?: ZeroBalanceProofSDKType | undefined;
}
export interface WithdrawMsgProofs {
	remainingBalanceRangeProof?: RangeProof | undefined;
	remainingBalanceEqualityProof?: CiphertextCommitmentEqualityProof | undefined;
}
export interface WithdrawMsgProofsProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.WithdrawMsgProofs';
	value: Uint8Array;
}
export interface WithdrawMsgProofsAmino {
	remaining_balance_range_proof?: RangeProofAmino | undefined;
	remaining_balance_equality_proof?: CiphertextCommitmentEqualityProofAmino | undefined;
}
export interface WithdrawMsgProofsAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.WithdrawMsgProofs';
	value: WithdrawMsgProofsAmino;
}
export interface WithdrawMsgProofsSDKType {
	remaining_balance_range_proof?: RangeProofSDKType | undefined;
	remaining_balance_equality_proof?: CiphertextCommitmentEqualityProofSDKType | undefined;
}
export interface CloseAccountMsgProofs {
	zeroAvailableBalanceProof?: ZeroBalanceProof | undefined;
	zeroPendingBalanceLoProof?: ZeroBalanceProof | undefined;
	zeroPendingBalanceHiProof?: ZeroBalanceProof | undefined;
}
export interface CloseAccountMsgProofsProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CloseAccountMsgProofs';
	value: Uint8Array;
}
export interface CloseAccountMsgProofsAmino {
	zero_available_balance_proof?: ZeroBalanceProofAmino | undefined;
	zero_pending_balance_lo_proof?: ZeroBalanceProofAmino | undefined;
	zero_pending_balance_hi_proof?: ZeroBalanceProofAmino | undefined;
}
export interface CloseAccountMsgProofsAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.CloseAccountMsgProofs';
	value: CloseAccountMsgProofsAmino;
}
export interface CloseAccountMsgProofsSDKType {
	zero_available_balance_proof?: ZeroBalanceProofSDKType | undefined;
	zero_pending_balance_lo_proof?: ZeroBalanceProofSDKType | undefined;
	zero_pending_balance_hi_proof?: ZeroBalanceProofSDKType | undefined;
}
export interface PubkeyValidityProof {
	y: Uint8Array;
	z: Uint8Array;
}
export interface PubkeyValidityProofProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.PubkeyValidityProof';
	value: Uint8Array;
}
export interface PubkeyValidityProofAmino {
	y?: string;
	z?: string;
}
export interface PubkeyValidityProofAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.PubkeyValidityProof';
	value: PubkeyValidityProofAmino;
}
export interface PubkeyValidityProofSDKType {
	y: Uint8Array;
	z: Uint8Array;
}
export interface CiphertextValidityProof {
	/** First commitment */
	commitment1: Uint8Array;
	/** Second commitment */
	commitment2: Uint8Array;
	/** First response */
	response1: Uint8Array;
	/** Second response */
	response2: Uint8Array;
}
export interface CiphertextValidityProofProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextValidityProof';
	value: Uint8Array;
}
export interface CiphertextValidityProofAmino {
	/** First commitment */
	commitment_1?: string;
	/** Second commitment */
	commitment_2?: string;
	/** First response */
	response_1?: string;
	/** Second response */
	response_2?: string;
}
export interface CiphertextValidityProofAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.CiphertextValidityProof';
	value: CiphertextValidityProofAmino;
}
export interface CiphertextValidityProofSDKType {
	commitment_1: Uint8Array;
	commitment_2: Uint8Array;
	response_1: Uint8Array;
	response_2: Uint8Array;
}
export interface RangeProof {
	proof: Uint8Array;
	randomness: Uint8Array;
	upperBound: bigint;
}
export interface RangeProofProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.RangeProof';
	value: Uint8Array;
}
export interface RangeProofAmino {
	proof?: string;
	randomness?: string;
	upper_bound?: string;
}
export interface RangeProofAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.RangeProof';
	value: RangeProofAmino;
}
export interface RangeProofSDKType {
	proof: Uint8Array;
	randomness: Uint8Array;
	upper_bound: bigint;
}
export interface CiphertextCommitmentEqualityProof {
	y0: Uint8Array;
	y1: Uint8Array;
	y2: Uint8Array;
	zs: Uint8Array;
	zx: Uint8Array;
	zr: Uint8Array;
}
export interface CiphertextCommitmentEqualityProofProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextCommitmentEqualityProof';
	value: Uint8Array;
}
export interface CiphertextCommitmentEqualityProofAmino {
	y0?: string;
	y1?: string;
	y2?: string;
	zs?: string;
	zx?: string;
	zr?: string;
}
export interface CiphertextCommitmentEqualityProofAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.CiphertextCommitmentEqualityProof';
	value: CiphertextCommitmentEqualityProofAmino;
}
export interface CiphertextCommitmentEqualityProofSDKType {
	y0: Uint8Array;
	y1: Uint8Array;
	y2: Uint8Array;
	zs: Uint8Array;
	zx: Uint8Array;
	zr: Uint8Array;
}
export interface CiphertextCiphertextEqualityProof {
	y0: Uint8Array;
	y1: Uint8Array;
	y2: Uint8Array;
	y3: Uint8Array;
	zs: Uint8Array;
	zx: Uint8Array;
	zr: Uint8Array;
}
export interface CiphertextCiphertextEqualityProofProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextCiphertextEqualityProof';
	value: Uint8Array;
}
export interface CiphertextCiphertextEqualityProofAmino {
	y0?: string;
	y1?: string;
	y2?: string;
	y3?: string;
	zs?: string;
	zx?: string;
	zr?: string;
}
export interface CiphertextCiphertextEqualityProofAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.CiphertextCiphertextEqualityProof';
	value: CiphertextCiphertextEqualityProofAmino;
}
export interface CiphertextCiphertextEqualityProofSDKType {
	y0: Uint8Array;
	y1: Uint8Array;
	y2: Uint8Array;
	y3: Uint8Array;
	zs: Uint8Array;
	zx: Uint8Array;
	zr: Uint8Array;
}
export interface ZeroBalanceProof {
	yP: Uint8Array;
	yD: Uint8Array;
	z: Uint8Array;
}
export interface ZeroBalanceProofProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.ZeroBalanceProof';
	value: Uint8Array;
}
export interface ZeroBalanceProofAmino {
	y_p?: string;
	y_d?: string;
	z?: string;
}
export interface ZeroBalanceProofAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.ZeroBalanceProof';
	value: ZeroBalanceProofAmino;
}
export interface ZeroBalanceProofSDKType {
	y_p: Uint8Array;
	y_d: Uint8Array;
	z: Uint8Array;
}
function createBaseTransferMsgProofs(): TransferMsgProofs {
	return {
		remainingBalanceCommitmentValidityProof: undefined,
		senderTransferAmountLoValidityProof: undefined,
		senderTransferAmountHiValidityProof: undefined,
		recipientTransferAmountLoValidityProof: undefined,
		recipientTransferAmountHiValidityProof: undefined,
		remainingBalanceRangeProof: undefined,
		remainingBalanceEqualityProof: undefined,
		transferAmountLoEqualityProof: undefined,
		transferAmountHiEqualityProof: undefined
	};
}
export const TransferMsgProofs = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.TransferMsgProofs',
	encode(message: TransferMsgProofs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.remainingBalanceCommitmentValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.remainingBalanceCommitmentValidityProof, writer.uint32(10).fork()).ldelim();
		}
		if (message.senderTransferAmountLoValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.senderTransferAmountLoValidityProof, writer.uint32(18).fork()).ldelim();
		}
		if (message.senderTransferAmountHiValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.senderTransferAmountHiValidityProof, writer.uint32(26).fork()).ldelim();
		}
		if (message.recipientTransferAmountLoValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.recipientTransferAmountLoValidityProof, writer.uint32(34).fork()).ldelim();
		}
		if (message.recipientTransferAmountHiValidityProof !== undefined) {
			CiphertextValidityProof.encode(message.recipientTransferAmountHiValidityProof, writer.uint32(42).fork()).ldelim();
		}
		if (message.remainingBalanceRangeProof !== undefined) {
			RangeProof.encode(message.remainingBalanceRangeProof, writer.uint32(50).fork()).ldelim();
		}
		if (message.remainingBalanceEqualityProof !== undefined) {
			CiphertextCommitmentEqualityProof.encode(message.remainingBalanceEqualityProof, writer.uint32(58).fork()).ldelim();
		}
		if (message.transferAmountLoEqualityProof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transferAmountLoEqualityProof, writer.uint32(66).fork()).ldelim();
		}
		if (message.transferAmountHiEqualityProof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transferAmountHiEqualityProof, writer.uint32(74).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): TransferMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTransferMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.remainingBalanceCommitmentValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 2:
					message.senderTransferAmountLoValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 3:
					message.senderTransferAmountHiValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 4:
					message.recipientTransferAmountLoValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 5:
					message.recipientTransferAmountHiValidityProof = CiphertextValidityProof.decode(reader, reader.uint32());
					break;
				case 6:
					message.remainingBalanceRangeProof = RangeProof.decode(reader, reader.uint32());
					break;
				case 7:
					message.remainingBalanceEqualityProof = CiphertextCommitmentEqualityProof.decode(reader, reader.uint32());
					break;
				case 8:
					message.transferAmountLoEqualityProof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					break;
				case 9:
					message.transferAmountHiEqualityProof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<TransferMsgProofs>): TransferMsgProofs {
		const message = createBaseTransferMsgProofs();
		message.remainingBalanceCommitmentValidityProof =
			object.remainingBalanceCommitmentValidityProof !== undefined && object.remainingBalanceCommitmentValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.remainingBalanceCommitmentValidityProof)
				: undefined;
		message.senderTransferAmountLoValidityProof =
			object.senderTransferAmountLoValidityProof !== undefined && object.senderTransferAmountLoValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.senderTransferAmountLoValidityProof)
				: undefined;
		message.senderTransferAmountHiValidityProof =
			object.senderTransferAmountHiValidityProof !== undefined && object.senderTransferAmountHiValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.senderTransferAmountHiValidityProof)
				: undefined;
		message.recipientTransferAmountLoValidityProof =
			object.recipientTransferAmountLoValidityProof !== undefined && object.recipientTransferAmountLoValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.recipientTransferAmountLoValidityProof)
				: undefined;
		message.recipientTransferAmountHiValidityProof =
			object.recipientTransferAmountHiValidityProof !== undefined && object.recipientTransferAmountHiValidityProof !== null
				? CiphertextValidityProof.fromPartial(object.recipientTransferAmountHiValidityProof)
				: undefined;
		message.remainingBalanceRangeProof =
			object.remainingBalanceRangeProof !== undefined && object.remainingBalanceRangeProof !== null
				? RangeProof.fromPartial(object.remainingBalanceRangeProof)
				: undefined;
		message.remainingBalanceEqualityProof =
			object.remainingBalanceEqualityProof !== undefined && object.remainingBalanceEqualityProof !== null
				? CiphertextCommitmentEqualityProof.fromPartial(object.remainingBalanceEqualityProof)
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
	fromAmino(object: TransferMsgProofsAmino): TransferMsgProofs {
		const message = createBaseTransferMsgProofs();
		if (object.remaining_balance_commitment_validity_proof !== undefined && object.remaining_balance_commitment_validity_proof !== null) {
			message.remainingBalanceCommitmentValidityProof = CiphertextValidityProof.fromAmino(object.remaining_balance_commitment_validity_proof);
		}
		if (object.sender_transfer_amount_lo_validity_proof !== undefined && object.sender_transfer_amount_lo_validity_proof !== null) {
			message.senderTransferAmountLoValidityProof = CiphertextValidityProof.fromAmino(object.sender_transfer_amount_lo_validity_proof);
		}
		if (object.sender_transfer_amount_hi_validity_proof !== undefined && object.sender_transfer_amount_hi_validity_proof !== null) {
			message.senderTransferAmountHiValidityProof = CiphertextValidityProof.fromAmino(object.sender_transfer_amount_hi_validity_proof);
		}
		if (object.recipient_transfer_amount_lo_validity_proof !== undefined && object.recipient_transfer_amount_lo_validity_proof !== null) {
			message.recipientTransferAmountLoValidityProof = CiphertextValidityProof.fromAmino(object.recipient_transfer_amount_lo_validity_proof);
		}
		if (object.recipient_transfer_amount_hi_validity_proof !== undefined && object.recipient_transfer_amount_hi_validity_proof !== null) {
			message.recipientTransferAmountHiValidityProof = CiphertextValidityProof.fromAmino(object.recipient_transfer_amount_hi_validity_proof);
		}
		if (object.remaining_balance_range_proof !== undefined && object.remaining_balance_range_proof !== null) {
			message.remainingBalanceRangeProof = RangeProof.fromAmino(object.remaining_balance_range_proof);
		}
		if (object.remaining_balance_equality_proof !== undefined && object.remaining_balance_equality_proof !== null) {
			message.remainingBalanceEqualityProof = CiphertextCommitmentEqualityProof.fromAmino(object.remaining_balance_equality_proof);
		}
		if (object.transfer_amount_lo_equality_proof !== undefined && object.transfer_amount_lo_equality_proof !== null) {
			message.transferAmountLoEqualityProof = CiphertextCiphertextEqualityProof.fromAmino(object.transfer_amount_lo_equality_proof);
		}
		if (object.transfer_amount_hi_equality_proof !== undefined && object.transfer_amount_hi_equality_proof !== null) {
			message.transferAmountHiEqualityProof = CiphertextCiphertextEqualityProof.fromAmino(object.transfer_amount_hi_equality_proof);
		}
		return message;
	},
	toAmino(message: TransferMsgProofs): TransferMsgProofsAmino {
		const obj: any = {};
		obj.remaining_balance_commitment_validity_proof = message.remainingBalanceCommitmentValidityProof
			? CiphertextValidityProof.toAmino(message.remainingBalanceCommitmentValidityProof)
			: undefined;
		obj.sender_transfer_amount_lo_validity_proof = message.senderTransferAmountLoValidityProof
			? CiphertextValidityProof.toAmino(message.senderTransferAmountLoValidityProof)
			: undefined;
		obj.sender_transfer_amount_hi_validity_proof = message.senderTransferAmountHiValidityProof
			? CiphertextValidityProof.toAmino(message.senderTransferAmountHiValidityProof)
			: undefined;
		obj.recipient_transfer_amount_lo_validity_proof = message.recipientTransferAmountLoValidityProof
			? CiphertextValidityProof.toAmino(message.recipientTransferAmountLoValidityProof)
			: undefined;
		obj.recipient_transfer_amount_hi_validity_proof = message.recipientTransferAmountHiValidityProof
			? CiphertextValidityProof.toAmino(message.recipientTransferAmountHiValidityProof)
			: undefined;
		obj.remaining_balance_range_proof = message.remainingBalanceRangeProof ? RangeProof.toAmino(message.remainingBalanceRangeProof) : undefined;
		obj.remaining_balance_equality_proof = message.remainingBalanceEqualityProof
			? CiphertextCommitmentEqualityProof.toAmino(message.remainingBalanceEqualityProof)
			: undefined;
		obj.transfer_amount_lo_equality_proof = message.transferAmountLoEqualityProof
			? CiphertextCiphertextEqualityProof.toAmino(message.transferAmountLoEqualityProof)
			: undefined;
		obj.transfer_amount_hi_equality_proof = message.transferAmountHiEqualityProof
			? CiphertextCiphertextEqualityProof.toAmino(message.transferAmountHiEqualityProof)
			: undefined;
		return obj;
	},
	fromAminoMsg(object: TransferMsgProofsAminoMsg): TransferMsgProofs {
		return TransferMsgProofs.fromAmino(object.value);
	},
	fromProtoMsg(message: TransferMsgProofsProtoMsg): TransferMsgProofs {
		return TransferMsgProofs.decode(message.value);
	},
	toProto(message: TransferMsgProofs): Uint8Array {
		return TransferMsgProofs.encode(message).finish();
	},
	toProtoMsg(message: TransferMsgProofs): TransferMsgProofsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.TransferMsgProofs',
			value: TransferMsgProofs.encode(message).finish()
		};
	}
};
function createBaseInitializeAccountMsgProofs(): InitializeAccountMsgProofs {
	return {
		pubkeyValidityProof: undefined,
		zeroPendingBalanceLoProof: undefined,
		zeroPendingBalanceHiProof: undefined,
		zeroAvailableBalanceProof: undefined
	};
}
export const InitializeAccountMsgProofs = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountMsgProofs',
	encode(message: InitializeAccountMsgProofs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pubkeyValidityProof !== undefined) {
			PubkeyValidityProof.encode(message.pubkeyValidityProof, writer.uint32(10).fork()).ldelim();
		}
		if (message.zeroPendingBalanceLoProof !== undefined) {
			ZeroBalanceProof.encode(message.zeroPendingBalanceLoProof, writer.uint32(18).fork()).ldelim();
		}
		if (message.zeroPendingBalanceHiProof !== undefined) {
			ZeroBalanceProof.encode(message.zeroPendingBalanceHiProof, writer.uint32(26).fork()).ldelim();
		}
		if (message.zeroAvailableBalanceProof !== undefined) {
			ZeroBalanceProof.encode(message.zeroAvailableBalanceProof, writer.uint32(34).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): InitializeAccountMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInitializeAccountMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pubkeyValidityProof = PubkeyValidityProof.decode(reader, reader.uint32());
					break;
				case 2:
					message.zeroPendingBalanceLoProof = ZeroBalanceProof.decode(reader, reader.uint32());
					break;
				case 3:
					message.zeroPendingBalanceHiProof = ZeroBalanceProof.decode(reader, reader.uint32());
					break;
				case 4:
					message.zeroAvailableBalanceProof = ZeroBalanceProof.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<InitializeAccountMsgProofs>): InitializeAccountMsgProofs {
		const message = createBaseInitializeAccountMsgProofs();
		message.pubkeyValidityProof =
			object.pubkeyValidityProof !== undefined && object.pubkeyValidityProof !== null ? PubkeyValidityProof.fromPartial(object.pubkeyValidityProof) : undefined;
		message.zeroPendingBalanceLoProof =
			object.zeroPendingBalanceLoProof !== undefined && object.zeroPendingBalanceLoProof !== null
				? ZeroBalanceProof.fromPartial(object.zeroPendingBalanceLoProof)
				: undefined;
		message.zeroPendingBalanceHiProof =
			object.zeroPendingBalanceHiProof !== undefined && object.zeroPendingBalanceHiProof !== null
				? ZeroBalanceProof.fromPartial(object.zeroPendingBalanceHiProof)
				: undefined;
		message.zeroAvailableBalanceProof =
			object.zeroAvailableBalanceProof !== undefined && object.zeroAvailableBalanceProof !== null
				? ZeroBalanceProof.fromPartial(object.zeroAvailableBalanceProof)
				: undefined;
		return message;
	},
	fromAmino(object: InitializeAccountMsgProofsAmino): InitializeAccountMsgProofs {
		const message = createBaseInitializeAccountMsgProofs();
		if (object.pubkey_validity_proof !== undefined && object.pubkey_validity_proof !== null) {
			message.pubkeyValidityProof = PubkeyValidityProof.fromAmino(object.pubkey_validity_proof);
		}
		if (object.zero_pending_balance_lo_proof !== undefined && object.zero_pending_balance_lo_proof !== null) {
			message.zeroPendingBalanceLoProof = ZeroBalanceProof.fromAmino(object.zero_pending_balance_lo_proof);
		}
		if (object.zero_pending_balance_hi_proof !== undefined && object.zero_pending_balance_hi_proof !== null) {
			message.zeroPendingBalanceHiProof = ZeroBalanceProof.fromAmino(object.zero_pending_balance_hi_proof);
		}
		if (object.zero_available_balance_proof !== undefined && object.zero_available_balance_proof !== null) {
			message.zeroAvailableBalanceProof = ZeroBalanceProof.fromAmino(object.zero_available_balance_proof);
		}
		return message;
	},
	toAmino(message: InitializeAccountMsgProofs): InitializeAccountMsgProofsAmino {
		const obj: any = {};
		obj.pubkey_validity_proof = message.pubkeyValidityProof ? PubkeyValidityProof.toAmino(message.pubkeyValidityProof) : undefined;
		obj.zero_pending_balance_lo_proof = message.zeroPendingBalanceLoProof ? ZeroBalanceProof.toAmino(message.zeroPendingBalanceLoProof) : undefined;
		obj.zero_pending_balance_hi_proof = message.zeroPendingBalanceHiProof ? ZeroBalanceProof.toAmino(message.zeroPendingBalanceHiProof) : undefined;
		obj.zero_available_balance_proof = message.zeroAvailableBalanceProof ? ZeroBalanceProof.toAmino(message.zeroAvailableBalanceProof) : undefined;
		return obj;
	},
	fromAminoMsg(object: InitializeAccountMsgProofsAminoMsg): InitializeAccountMsgProofs {
		return InitializeAccountMsgProofs.fromAmino(object.value);
	},
	fromProtoMsg(message: InitializeAccountMsgProofsProtoMsg): InitializeAccountMsgProofs {
		return InitializeAccountMsgProofs.decode(message.value);
	},
	toProto(message: InitializeAccountMsgProofs): Uint8Array {
		return InitializeAccountMsgProofs.encode(message).finish();
	},
	toProtoMsg(message: InitializeAccountMsgProofs): InitializeAccountMsgProofsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountMsgProofs',
			value: InitializeAccountMsgProofs.encode(message).finish()
		};
	}
};
function createBaseWithdrawMsgProofs(): WithdrawMsgProofs {
	return {
		remainingBalanceRangeProof: undefined,
		remainingBalanceEqualityProof: undefined
	};
}
export const WithdrawMsgProofs = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.WithdrawMsgProofs',
	encode(message: WithdrawMsgProofs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.remainingBalanceRangeProof !== undefined) {
			RangeProof.encode(message.remainingBalanceRangeProof, writer.uint32(10).fork()).ldelim();
		}
		if (message.remainingBalanceEqualityProof !== undefined) {
			CiphertextCommitmentEqualityProof.encode(message.remainingBalanceEqualityProof, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): WithdrawMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWithdrawMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.remainingBalanceRangeProof = RangeProof.decode(reader, reader.uint32());
					break;
				case 2:
					message.remainingBalanceEqualityProof = CiphertextCommitmentEqualityProof.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<WithdrawMsgProofs>): WithdrawMsgProofs {
		const message = createBaseWithdrawMsgProofs();
		message.remainingBalanceRangeProof =
			object.remainingBalanceRangeProof !== undefined && object.remainingBalanceRangeProof !== null
				? RangeProof.fromPartial(object.remainingBalanceRangeProof)
				: undefined;
		message.remainingBalanceEqualityProof =
			object.remainingBalanceEqualityProof !== undefined && object.remainingBalanceEqualityProof !== null
				? CiphertextCommitmentEqualityProof.fromPartial(object.remainingBalanceEqualityProof)
				: undefined;
		return message;
	},
	fromAmino(object: WithdrawMsgProofsAmino): WithdrawMsgProofs {
		const message = createBaseWithdrawMsgProofs();
		if (object.remaining_balance_range_proof !== undefined && object.remaining_balance_range_proof !== null) {
			message.remainingBalanceRangeProof = RangeProof.fromAmino(object.remaining_balance_range_proof);
		}
		if (object.remaining_balance_equality_proof !== undefined && object.remaining_balance_equality_proof !== null) {
			message.remainingBalanceEqualityProof = CiphertextCommitmentEqualityProof.fromAmino(object.remaining_balance_equality_proof);
		}
		return message;
	},
	toAmino(message: WithdrawMsgProofs): WithdrawMsgProofsAmino {
		const obj: any = {};
		obj.remaining_balance_range_proof = message.remainingBalanceRangeProof ? RangeProof.toAmino(message.remainingBalanceRangeProof) : undefined;
		obj.remaining_balance_equality_proof = message.remainingBalanceEqualityProof
			? CiphertextCommitmentEqualityProof.toAmino(message.remainingBalanceEqualityProof)
			: undefined;
		return obj;
	},
	fromAminoMsg(object: WithdrawMsgProofsAminoMsg): WithdrawMsgProofs {
		return WithdrawMsgProofs.fromAmino(object.value);
	},
	fromProtoMsg(message: WithdrawMsgProofsProtoMsg): WithdrawMsgProofs {
		return WithdrawMsgProofs.decode(message.value);
	},
	toProto(message: WithdrawMsgProofs): Uint8Array {
		return WithdrawMsgProofs.encode(message).finish();
	},
	toProtoMsg(message: WithdrawMsgProofs): WithdrawMsgProofsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.WithdrawMsgProofs',
			value: WithdrawMsgProofs.encode(message).finish()
		};
	}
};
function createBaseCloseAccountMsgProofs(): CloseAccountMsgProofs {
	return {
		zeroAvailableBalanceProof: undefined,
		zeroPendingBalanceLoProof: undefined,
		zeroPendingBalanceHiProof: undefined
	};
}
export const CloseAccountMsgProofs = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CloseAccountMsgProofs',
	encode(message: CloseAccountMsgProofs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.zeroAvailableBalanceProof !== undefined) {
			ZeroBalanceProof.encode(message.zeroAvailableBalanceProof, writer.uint32(10).fork()).ldelim();
		}
		if (message.zeroPendingBalanceLoProof !== undefined) {
			ZeroBalanceProof.encode(message.zeroPendingBalanceLoProof, writer.uint32(18).fork()).ldelim();
		}
		if (message.zeroPendingBalanceHiProof !== undefined) {
			ZeroBalanceProof.encode(message.zeroPendingBalanceHiProof, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CloseAccountMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCloseAccountMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.zeroAvailableBalanceProof = ZeroBalanceProof.decode(reader, reader.uint32());
					break;
				case 2:
					message.zeroPendingBalanceLoProof = ZeroBalanceProof.decode(reader, reader.uint32());
					break;
				case 3:
					message.zeroPendingBalanceHiProof = ZeroBalanceProof.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<CloseAccountMsgProofs>): CloseAccountMsgProofs {
		const message = createBaseCloseAccountMsgProofs();
		message.zeroAvailableBalanceProof =
			object.zeroAvailableBalanceProof !== undefined && object.zeroAvailableBalanceProof !== null
				? ZeroBalanceProof.fromPartial(object.zeroAvailableBalanceProof)
				: undefined;
		message.zeroPendingBalanceLoProof =
			object.zeroPendingBalanceLoProof !== undefined && object.zeroPendingBalanceLoProof !== null
				? ZeroBalanceProof.fromPartial(object.zeroPendingBalanceLoProof)
				: undefined;
		message.zeroPendingBalanceHiProof =
			object.zeroPendingBalanceHiProof !== undefined && object.zeroPendingBalanceHiProof !== null
				? ZeroBalanceProof.fromPartial(object.zeroPendingBalanceHiProof)
				: undefined;
		return message;
	},
	fromAmino(object: CloseAccountMsgProofsAmino): CloseAccountMsgProofs {
		const message = createBaseCloseAccountMsgProofs();
		if (object.zero_available_balance_proof !== undefined && object.zero_available_balance_proof !== null) {
			message.zeroAvailableBalanceProof = ZeroBalanceProof.fromAmino(object.zero_available_balance_proof);
		}
		if (object.zero_pending_balance_lo_proof !== undefined && object.zero_pending_balance_lo_proof !== null) {
			message.zeroPendingBalanceLoProof = ZeroBalanceProof.fromAmino(object.zero_pending_balance_lo_proof);
		}
		if (object.zero_pending_balance_hi_proof !== undefined && object.zero_pending_balance_hi_proof !== null) {
			message.zeroPendingBalanceHiProof = ZeroBalanceProof.fromAmino(object.zero_pending_balance_hi_proof);
		}
		return message;
	},
	toAmino(message: CloseAccountMsgProofs): CloseAccountMsgProofsAmino {
		const obj: any = {};
		obj.zero_available_balance_proof = message.zeroAvailableBalanceProof ? ZeroBalanceProof.toAmino(message.zeroAvailableBalanceProof) : undefined;
		obj.zero_pending_balance_lo_proof = message.zeroPendingBalanceLoProof ? ZeroBalanceProof.toAmino(message.zeroPendingBalanceLoProof) : undefined;
		obj.zero_pending_balance_hi_proof = message.zeroPendingBalanceHiProof ? ZeroBalanceProof.toAmino(message.zeroPendingBalanceHiProof) : undefined;
		return obj;
	},
	fromAminoMsg(object: CloseAccountMsgProofsAminoMsg): CloseAccountMsgProofs {
		return CloseAccountMsgProofs.fromAmino(object.value);
	},
	fromProtoMsg(message: CloseAccountMsgProofsProtoMsg): CloseAccountMsgProofs {
		return CloseAccountMsgProofs.decode(message.value);
	},
	toProto(message: CloseAccountMsgProofs): Uint8Array {
		return CloseAccountMsgProofs.encode(message).finish();
	},
	toProtoMsg(message: CloseAccountMsgProofs): CloseAccountMsgProofsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.CloseAccountMsgProofs',
			value: CloseAccountMsgProofs.encode(message).finish()
		};
	}
};
function createBasePubkeyValidityProof(): PubkeyValidityProof {
	return {
		y: new Uint8Array(),
		z: new Uint8Array()
	};
}
export const PubkeyValidityProof = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.PubkeyValidityProof',
	encode(message: PubkeyValidityProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.y.length !== 0) {
			writer.uint32(10).bytes(message.y);
		}
		if (message.z.length !== 0) {
			writer.uint32(18).bytes(message.z);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): PubkeyValidityProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePubkeyValidityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.y = reader.bytes();
					break;
				case 2:
					message.z = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<PubkeyValidityProof>): PubkeyValidityProof {
		const message = createBasePubkeyValidityProof();
		message.y = object.y ?? new Uint8Array();
		message.z = object.z ?? new Uint8Array();
		return message;
	},
	fromAmino(object: PubkeyValidityProofAmino): PubkeyValidityProof {
		const message = createBasePubkeyValidityProof();
		if (object.y !== undefined && object.y !== null) {
			message.y = bytesFromBase64(object.y);
		}
		if (object.z !== undefined && object.z !== null) {
			message.z = bytesFromBase64(object.z);
		}
		return message;
	},
	toAmino(message: PubkeyValidityProof): PubkeyValidityProofAmino {
		const obj: any = {};
		obj.y = message.y ? base64FromBytes(message.y) : undefined;
		obj.z = message.z ? base64FromBytes(message.z) : undefined;
		return obj;
	},
	fromAminoMsg(object: PubkeyValidityProofAminoMsg): PubkeyValidityProof {
		return PubkeyValidityProof.fromAmino(object.value);
	},
	fromProtoMsg(message: PubkeyValidityProofProtoMsg): PubkeyValidityProof {
		return PubkeyValidityProof.decode(message.value);
	},
	toProto(message: PubkeyValidityProof): Uint8Array {
		return PubkeyValidityProof.encode(message).finish();
	},
	toProtoMsg(message: PubkeyValidityProof): PubkeyValidityProofProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.PubkeyValidityProof',
			value: PubkeyValidityProof.encode(message).finish()
		};
	}
};
function createBaseCiphertextValidityProof(): CiphertextValidityProof {
	return {
		commitment1: new Uint8Array(),
		commitment2: new Uint8Array(),
		response1: new Uint8Array(),
		response2: new Uint8Array()
	};
}
export const CiphertextValidityProof = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextValidityProof',
	encode(message: CiphertextValidityProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.commitment1.length !== 0) {
			writer.uint32(10).bytes(message.commitment1);
		}
		if (message.commitment2.length !== 0) {
			writer.uint32(18).bytes(message.commitment2);
		}
		if (message.response1.length !== 0) {
			writer.uint32(34).bytes(message.response1);
		}
		if (message.response2.length !== 0) {
			writer.uint32(42).bytes(message.response2);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CiphertextValidityProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertextValidityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.commitment1 = reader.bytes();
					break;
				case 2:
					message.commitment2 = reader.bytes();
					break;
				case 4:
					message.response1 = reader.bytes();
					break;
				case 5:
					message.response2 = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<CiphertextValidityProof>): CiphertextValidityProof {
		const message = createBaseCiphertextValidityProof();
		message.commitment1 = object.commitment1 ?? new Uint8Array();
		message.commitment2 = object.commitment2 ?? new Uint8Array();
		message.response1 = object.response1 ?? new Uint8Array();
		message.response2 = object.response2 ?? new Uint8Array();
		return message;
	},
	fromAmino(object: CiphertextValidityProofAmino): CiphertextValidityProof {
		const message = createBaseCiphertextValidityProof();
		if (object.commitment_1 !== undefined && object.commitment_1 !== null) {
			message.commitment1 = bytesFromBase64(object.commitment_1);
		}
		if (object.commitment_2 !== undefined && object.commitment_2 !== null) {
			message.commitment2 = bytesFromBase64(object.commitment_2);
		}
		if (object.response_1 !== undefined && object.response_1 !== null) {
			message.response1 = bytesFromBase64(object.response_1);
		}
		if (object.response_2 !== undefined && object.response_2 !== null) {
			message.response2 = bytesFromBase64(object.response_2);
		}
		return message;
	},
	toAmino(message: CiphertextValidityProof): CiphertextValidityProofAmino {
		const obj: any = {};
		obj.commitment_1 = message.commitment1 ? base64FromBytes(message.commitment1) : undefined;
		obj.commitment_2 = message.commitment2 ? base64FromBytes(message.commitment2) : undefined;
		obj.response_1 = message.response1 ? base64FromBytes(message.response1) : undefined;
		obj.response_2 = message.response2 ? base64FromBytes(message.response2) : undefined;
		return obj;
	},
	fromAminoMsg(object: CiphertextValidityProofAminoMsg): CiphertextValidityProof {
		return CiphertextValidityProof.fromAmino(object.value);
	},
	fromProtoMsg(message: CiphertextValidityProofProtoMsg): CiphertextValidityProof {
		return CiphertextValidityProof.decode(message.value);
	},
	toProto(message: CiphertextValidityProof): Uint8Array {
		return CiphertextValidityProof.encode(message).finish();
	},
	toProtoMsg(message: CiphertextValidityProof): CiphertextValidityProofProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextValidityProof',
			value: CiphertextValidityProof.encode(message).finish()
		};
	}
};
function createBaseRangeProof(): RangeProof {
	return {
		proof: new Uint8Array(),
		randomness: new Uint8Array(),
		upperBound: BigInt(0)
	};
}
export const RangeProof = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.RangeProof',
	encode(message: RangeProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.proof.length !== 0) {
			writer.uint32(10).bytes(message.proof);
		}
		if (message.randomness.length !== 0) {
			writer.uint32(18).bytes(message.randomness);
		}
		if (message.upperBound !== BigInt(0)) {
			writer.uint32(24).int64(message.upperBound);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): RangeProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRangeProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.proof = reader.bytes();
					break;
				case 2:
					message.randomness = reader.bytes();
					break;
				case 3:
					message.upperBound = reader.int64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<RangeProof>): RangeProof {
		const message = createBaseRangeProof();
		message.proof = object.proof ?? new Uint8Array();
		message.randomness = object.randomness ?? new Uint8Array();
		message.upperBound = object.upperBound !== undefined && object.upperBound !== null ? BigInt(object.upperBound.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: RangeProofAmino): RangeProof {
		const message = createBaseRangeProof();
		if (object.proof !== undefined && object.proof !== null) {
			message.proof = bytesFromBase64(object.proof);
		}
		if (object.randomness !== undefined && object.randomness !== null) {
			message.randomness = bytesFromBase64(object.randomness);
		}
		if (object.upper_bound !== undefined && object.upper_bound !== null) {
			message.upperBound = BigInt(object.upper_bound);
		}
		return message;
	},
	toAmino(message: RangeProof): RangeProofAmino {
		const obj: any = {};
		obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
		obj.randomness = message.randomness ? base64FromBytes(message.randomness) : undefined;
		obj.upper_bound = message.upperBound !== BigInt(0) ? message.upperBound.toString() : undefined;
		return obj;
	},
	fromAminoMsg(object: RangeProofAminoMsg): RangeProof {
		return RangeProof.fromAmino(object.value);
	},
	fromProtoMsg(message: RangeProofProtoMsg): RangeProof {
		return RangeProof.decode(message.value);
	},
	toProto(message: RangeProof): Uint8Array {
		return RangeProof.encode(message).finish();
	},
	toProtoMsg(message: RangeProof): RangeProofProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.RangeProof',
			value: RangeProof.encode(message).finish()
		};
	}
};
function createBaseCiphertextCommitmentEqualityProof(): CiphertextCommitmentEqualityProof {
	return {
		y0: new Uint8Array(),
		y1: new Uint8Array(),
		y2: new Uint8Array(),
		zs: new Uint8Array(),
		zx: new Uint8Array(),
		zr: new Uint8Array()
	};
}
export const CiphertextCommitmentEqualityProof = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextCommitmentEqualityProof',
	encode(message: CiphertextCommitmentEqualityProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.y0.length !== 0) {
			writer.uint32(10).bytes(message.y0);
		}
		if (message.y1.length !== 0) {
			writer.uint32(18).bytes(message.y1);
		}
		if (message.y2.length !== 0) {
			writer.uint32(26).bytes(message.y2);
		}
		if (message.zs.length !== 0) {
			writer.uint32(34).bytes(message.zs);
		}
		if (message.zx.length !== 0) {
			writer.uint32(42).bytes(message.zx);
		}
		if (message.zr.length !== 0) {
			writer.uint32(50).bytes(message.zr);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CiphertextCommitmentEqualityProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertextCommitmentEqualityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.y0 = reader.bytes();
					break;
				case 2:
					message.y1 = reader.bytes();
					break;
				case 3:
					message.y2 = reader.bytes();
					break;
				case 4:
					message.zs = reader.bytes();
					break;
				case 5:
					message.zx = reader.bytes();
					break;
				case 6:
					message.zr = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<CiphertextCommitmentEqualityProof>): CiphertextCommitmentEqualityProof {
		const message = createBaseCiphertextCommitmentEqualityProof();
		message.y0 = object.y0 ?? new Uint8Array();
		message.y1 = object.y1 ?? new Uint8Array();
		message.y2 = object.y2 ?? new Uint8Array();
		message.zs = object.zs ?? new Uint8Array();
		message.zx = object.zx ?? new Uint8Array();
		message.zr = object.zr ?? new Uint8Array();
		return message;
	},
	fromAmino(object: CiphertextCommitmentEqualityProofAmino): CiphertextCommitmentEqualityProof {
		const message = createBaseCiphertextCommitmentEqualityProof();
		if (object.y0 !== undefined && object.y0 !== null) {
			message.y0 = bytesFromBase64(object.y0);
		}
		if (object.y1 !== undefined && object.y1 !== null) {
			message.y1 = bytesFromBase64(object.y1);
		}
		if (object.y2 !== undefined && object.y2 !== null) {
			message.y2 = bytesFromBase64(object.y2);
		}
		if (object.zs !== undefined && object.zs !== null) {
			message.zs = bytesFromBase64(object.zs);
		}
		if (object.zx !== undefined && object.zx !== null) {
			message.zx = bytesFromBase64(object.zx);
		}
		if (object.zr !== undefined && object.zr !== null) {
			message.zr = bytesFromBase64(object.zr);
		}
		return message;
	},
	toAmino(message: CiphertextCommitmentEqualityProof): CiphertextCommitmentEqualityProofAmino {
		const obj: any = {};
		obj.y0 = message.y0 ? base64FromBytes(message.y0) : undefined;
		obj.y1 = message.y1 ? base64FromBytes(message.y1) : undefined;
		obj.y2 = message.y2 ? base64FromBytes(message.y2) : undefined;
		obj.zs = message.zs ? base64FromBytes(message.zs) : undefined;
		obj.zx = message.zx ? base64FromBytes(message.zx) : undefined;
		obj.zr = message.zr ? base64FromBytes(message.zr) : undefined;
		return obj;
	},
	fromAminoMsg(object: CiphertextCommitmentEqualityProofAminoMsg): CiphertextCommitmentEqualityProof {
		return CiphertextCommitmentEqualityProof.fromAmino(object.value);
	},
	fromProtoMsg(message: CiphertextCommitmentEqualityProofProtoMsg): CiphertextCommitmentEqualityProof {
		return CiphertextCommitmentEqualityProof.decode(message.value);
	},
	toProto(message: CiphertextCommitmentEqualityProof): Uint8Array {
		return CiphertextCommitmentEqualityProof.encode(message).finish();
	},
	toProtoMsg(message: CiphertextCommitmentEqualityProof): CiphertextCommitmentEqualityProofProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextCommitmentEqualityProof',
			value: CiphertextCommitmentEqualityProof.encode(message).finish()
		};
	}
};
function createBaseCiphertextCiphertextEqualityProof(): CiphertextCiphertextEqualityProof {
	return {
		y0: new Uint8Array(),
		y1: new Uint8Array(),
		y2: new Uint8Array(),
		y3: new Uint8Array(),
		zs: new Uint8Array(),
		zx: new Uint8Array(),
		zr: new Uint8Array()
	};
}
export const CiphertextCiphertextEqualityProof = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextCiphertextEqualityProof',
	encode(message: CiphertextCiphertextEqualityProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.y0.length !== 0) {
			writer.uint32(10).bytes(message.y0);
		}
		if (message.y1.length !== 0) {
			writer.uint32(18).bytes(message.y1);
		}
		if (message.y2.length !== 0) {
			writer.uint32(26).bytes(message.y2);
		}
		if (message.y3.length !== 0) {
			writer.uint32(34).bytes(message.y3);
		}
		if (message.zs.length !== 0) {
			writer.uint32(42).bytes(message.zs);
		}
		if (message.zx.length !== 0) {
			writer.uint32(50).bytes(message.zx);
		}
		if (message.zr.length !== 0) {
			writer.uint32(58).bytes(message.zr);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CiphertextCiphertextEqualityProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertextCiphertextEqualityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.y0 = reader.bytes();
					break;
				case 2:
					message.y1 = reader.bytes();
					break;
				case 3:
					message.y2 = reader.bytes();
					break;
				case 4:
					message.y3 = reader.bytes();
					break;
				case 5:
					message.zs = reader.bytes();
					break;
				case 6:
					message.zx = reader.bytes();
					break;
				case 7:
					message.zr = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<CiphertextCiphertextEqualityProof>): CiphertextCiphertextEqualityProof {
		const message = createBaseCiphertextCiphertextEqualityProof();
		message.y0 = object.y0 ?? new Uint8Array();
		message.y1 = object.y1 ?? new Uint8Array();
		message.y2 = object.y2 ?? new Uint8Array();
		message.y3 = object.y3 ?? new Uint8Array();
		message.zs = object.zs ?? new Uint8Array();
		message.zx = object.zx ?? new Uint8Array();
		message.zr = object.zr ?? new Uint8Array();
		return message;
	},
	fromAmino(object: CiphertextCiphertextEqualityProofAmino): CiphertextCiphertextEqualityProof {
		const message = createBaseCiphertextCiphertextEqualityProof();
		if (object.y0 !== undefined && object.y0 !== null) {
			message.y0 = bytesFromBase64(object.y0);
		}
		if (object.y1 !== undefined && object.y1 !== null) {
			message.y1 = bytesFromBase64(object.y1);
		}
		if (object.y2 !== undefined && object.y2 !== null) {
			message.y2 = bytesFromBase64(object.y2);
		}
		if (object.y3 !== undefined && object.y3 !== null) {
			message.y3 = bytesFromBase64(object.y3);
		}
		if (object.zs !== undefined && object.zs !== null) {
			message.zs = bytesFromBase64(object.zs);
		}
		if (object.zx !== undefined && object.zx !== null) {
			message.zx = bytesFromBase64(object.zx);
		}
		if (object.zr !== undefined && object.zr !== null) {
			message.zr = bytesFromBase64(object.zr);
		}
		return message;
	},
	toAmino(message: CiphertextCiphertextEqualityProof): CiphertextCiphertextEqualityProofAmino {
		const obj: any = {};
		obj.y0 = message.y0 ? base64FromBytes(message.y0) : undefined;
		obj.y1 = message.y1 ? base64FromBytes(message.y1) : undefined;
		obj.y2 = message.y2 ? base64FromBytes(message.y2) : undefined;
		obj.y3 = message.y3 ? base64FromBytes(message.y3) : undefined;
		obj.zs = message.zs ? base64FromBytes(message.zs) : undefined;
		obj.zx = message.zx ? base64FromBytes(message.zx) : undefined;
		obj.zr = message.zr ? base64FromBytes(message.zr) : undefined;
		return obj;
	},
	fromAminoMsg(object: CiphertextCiphertextEqualityProofAminoMsg): CiphertextCiphertextEqualityProof {
		return CiphertextCiphertextEqualityProof.fromAmino(object.value);
	},
	fromProtoMsg(message: CiphertextCiphertextEqualityProofProtoMsg): CiphertextCiphertextEqualityProof {
		return CiphertextCiphertextEqualityProof.decode(message.value);
	},
	toProto(message: CiphertextCiphertextEqualityProof): Uint8Array {
		return CiphertextCiphertextEqualityProof.encode(message).finish();
	},
	toProtoMsg(message: CiphertextCiphertextEqualityProof): CiphertextCiphertextEqualityProofProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.CiphertextCiphertextEqualityProof',
			value: CiphertextCiphertextEqualityProof.encode(message).finish()
		};
	}
};
function createBaseZeroBalanceProof(): ZeroBalanceProof {
	return {
		yP: new Uint8Array(),
		yD: new Uint8Array(),
		z: new Uint8Array()
	};
}
export const ZeroBalanceProof = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.ZeroBalanceProof',
	encode(message: ZeroBalanceProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.yP.length !== 0) {
			writer.uint32(10).bytes(message.yP);
		}
		if (message.yD.length !== 0) {
			writer.uint32(18).bytes(message.yD);
		}
		if (message.z.length !== 0) {
			writer.uint32(26).bytes(message.z);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ZeroBalanceProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseZeroBalanceProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.yP = reader.bytes();
					break;
				case 2:
					message.yD = reader.bytes();
					break;
				case 3:
					message.z = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<ZeroBalanceProof>): ZeroBalanceProof {
		const message = createBaseZeroBalanceProof();
		message.yP = object.yP ?? new Uint8Array();
		message.yD = object.yD ?? new Uint8Array();
		message.z = object.z ?? new Uint8Array();
		return message;
	},
	fromAmino(object: ZeroBalanceProofAmino): ZeroBalanceProof {
		const message = createBaseZeroBalanceProof();
		if (object.y_p !== undefined && object.y_p !== null) {
			message.yP = bytesFromBase64(object.y_p);
		}
		if (object.y_d !== undefined && object.y_d !== null) {
			message.yD = bytesFromBase64(object.y_d);
		}
		if (object.z !== undefined && object.z !== null) {
			message.z = bytesFromBase64(object.z);
		}
		return message;
	},
	toAmino(message: ZeroBalanceProof): ZeroBalanceProofAmino {
		const obj: any = {};
		obj.y_p = message.yP ? base64FromBytes(message.yP) : undefined;
		obj.y_d = message.yD ? base64FromBytes(message.yD) : undefined;
		obj.z = message.z ? base64FromBytes(message.z) : undefined;
		return obj;
	},
	fromAminoMsg(object: ZeroBalanceProofAminoMsg): ZeroBalanceProof {
		return ZeroBalanceProof.fromAmino(object.value);
	},
	fromProtoMsg(message: ZeroBalanceProofProtoMsg): ZeroBalanceProof {
		return ZeroBalanceProof.decode(message.value);
	},
	toProto(message: ZeroBalanceProof): Uint8Array {
		return ZeroBalanceProof.encode(message).finish();
	},
	toProtoMsg(message: ZeroBalanceProof): ZeroBalanceProofProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.ZeroBalanceProof',
			value: ZeroBalanceProof.encode(message).finish()
		};
	}
};

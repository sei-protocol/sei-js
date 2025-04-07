import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	CiphertextCiphertextEqualityProof as CiphertextCiphertextEqualityProof_type,
	CiphertextCommitmentEqualityProof as CiphertextCommitmentEqualityProof_type,
	CiphertextValidityProof as CiphertextValidityProof_type,
	CloseAccountMsgProofs as CloseAccountMsgProofs_type,
	InitializeAccountMsgProofs as InitializeAccountMsgProofs_type,
	PubkeyValidityProof as PubkeyValidityProof_type,
	RangeProof as RangeProof_type,
	TransferMsgProofs as TransferMsgProofs_type,
	WithdrawMsgProofs as WithdrawMsgProofs_type,
	ZeroBalanceProof as ZeroBalanceProof_type
} from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface TransferMsgProofs extends TransferMsgProofs_type {}
export interface InitializeAccountMsgProofs extends InitializeAccountMsgProofs_type {}
export interface WithdrawMsgProofs extends WithdrawMsgProofs_type {}
export interface CloseAccountMsgProofs extends CloseAccountMsgProofs_type {}
export interface PubkeyValidityProof extends PubkeyValidityProof_type {}
export interface CiphertextValidityProof extends CiphertextValidityProof_type {}
export interface RangeProof extends RangeProof_type {}
export interface CiphertextCommitmentEqualityProof extends CiphertextCommitmentEqualityProof_type {}
export interface CiphertextCiphertextEqualityProof extends CiphertextCiphertextEqualityProof_type {}
export interface ZeroBalanceProof extends ZeroBalanceProof_type {}

export const TransferMsgProofs: MessageFns<TransferMsgProofs, "seiprotocol.seichain.confidentialtransfers.TransferMsgProofs"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.TransferMsgProofs" as const,

	encode(message: TransferMsgProofs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.remaining_balance_commitment_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.remaining_balance_commitment_validity_proof, writer.uint32(10).fork()).join();
		}
		if (message.sender_transfer_amount_lo_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.sender_transfer_amount_lo_validity_proof, writer.uint32(18).fork()).join();
		}
		if (message.sender_transfer_amount_hi_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.sender_transfer_amount_hi_validity_proof, writer.uint32(26).fork()).join();
		}
		if (message.recipient_transfer_amount_lo_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.recipient_transfer_amount_lo_validity_proof, writer.uint32(34).fork()).join();
		}
		if (message.recipient_transfer_amount_hi_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.recipient_transfer_amount_hi_validity_proof, writer.uint32(42).fork()).join();
		}
		if (message.remaining_balance_range_proof !== undefined) {
			RangeProof.encode(message.remaining_balance_range_proof, writer.uint32(50).fork()).join();
		}
		if (message.remaining_balance_equality_proof !== undefined) {
			CiphertextCommitmentEqualityProof.encode(message.remaining_balance_equality_proof, writer.uint32(58).fork()).join();
		}
		if (message.transfer_amount_lo_equality_proof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transfer_amount_lo_equality_proof, writer.uint32(66).fork()).join();
		}
		if (message.transfer_amount_hi_equality_proof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transfer_amount_hi_equality_proof, writer.uint32(74).fork()).join();
		}
		if (message.transfer_amount_lo_range_proof !== undefined) {
			RangeProof.encode(message.transfer_amount_lo_range_proof, writer.uint32(82).fork()).join();
		}
		if (message.transfer_amount_hi_range_proof !== undefined) {
			RangeProof.encode(message.transfer_amount_hi_range_proof, writer.uint32(90).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TransferMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTransferMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.remaining_balance_commitment_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.sender_transfer_amount_lo_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.sender_transfer_amount_hi_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.recipient_transfer_amount_lo_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.recipient_transfer_amount_hi_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.remaining_balance_range_proof = RangeProof.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.remaining_balance_equality_proof = CiphertextCommitmentEqualityProof.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.transfer_amount_lo_equality_proof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.transfer_amount_hi_equality_proof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.transfer_amount_lo_range_proof = RangeProof.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.transfer_amount_hi_range_proof = RangeProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TransferMsgProofs {
		return {
			remaining_balance_commitment_validity_proof: isSet(object.remaining_balance_commitment_validity_proof)
				? CiphertextValidityProof.fromJSON(object.remaining_balance_commitment_validity_proof)
				: undefined,
			sender_transfer_amount_lo_validity_proof: isSet(object.sender_transfer_amount_lo_validity_proof)
				? CiphertextValidityProof.fromJSON(object.sender_transfer_amount_lo_validity_proof)
				: undefined,
			sender_transfer_amount_hi_validity_proof: isSet(object.sender_transfer_amount_hi_validity_proof)
				? CiphertextValidityProof.fromJSON(object.sender_transfer_amount_hi_validity_proof)
				: undefined,
			recipient_transfer_amount_lo_validity_proof: isSet(object.recipient_transfer_amount_lo_validity_proof)
				? CiphertextValidityProof.fromJSON(object.recipient_transfer_amount_lo_validity_proof)
				: undefined,
			recipient_transfer_amount_hi_validity_proof: isSet(object.recipient_transfer_amount_hi_validity_proof)
				? CiphertextValidityProof.fromJSON(object.recipient_transfer_amount_hi_validity_proof)
				: undefined,
			remaining_balance_range_proof: isSet(object.remaining_balance_range_proof) ? RangeProof.fromJSON(object.remaining_balance_range_proof) : undefined,
			remaining_balance_equality_proof: isSet(object.remaining_balance_equality_proof)
				? CiphertextCommitmentEqualityProof.fromJSON(object.remaining_balance_equality_proof)
				: undefined,
			transfer_amount_lo_equality_proof: isSet(object.transfer_amount_lo_equality_proof)
				? CiphertextCiphertextEqualityProof.fromJSON(object.transfer_amount_lo_equality_proof)
				: undefined,
			transfer_amount_hi_equality_proof: isSet(object.transfer_amount_hi_equality_proof)
				? CiphertextCiphertextEqualityProof.fromJSON(object.transfer_amount_hi_equality_proof)
				: undefined,
			transfer_amount_lo_range_proof: isSet(object.transfer_amount_lo_range_proof) ? RangeProof.fromJSON(object.transfer_amount_lo_range_proof) : undefined,
			transfer_amount_hi_range_proof: isSet(object.transfer_amount_hi_range_proof) ? RangeProof.fromJSON(object.transfer_amount_hi_range_proof) : undefined
		};
	},

	toJSON(message: TransferMsgProofs): unknown {
		const obj: any = {};
		if (message.remaining_balance_commitment_validity_proof !== undefined) {
			obj.remaining_balance_commitment_validity_proof = CiphertextValidityProof.toJSON(message.remaining_balance_commitment_validity_proof);
		}
		if (message.sender_transfer_amount_lo_validity_proof !== undefined) {
			obj.sender_transfer_amount_lo_validity_proof = CiphertextValidityProof.toJSON(message.sender_transfer_amount_lo_validity_proof);
		}
		if (message.sender_transfer_amount_hi_validity_proof !== undefined) {
			obj.sender_transfer_amount_hi_validity_proof = CiphertextValidityProof.toJSON(message.sender_transfer_amount_hi_validity_proof);
		}
		if (message.recipient_transfer_amount_lo_validity_proof !== undefined) {
			obj.recipient_transfer_amount_lo_validity_proof = CiphertextValidityProof.toJSON(message.recipient_transfer_amount_lo_validity_proof);
		}
		if (message.recipient_transfer_amount_hi_validity_proof !== undefined) {
			obj.recipient_transfer_amount_hi_validity_proof = CiphertextValidityProof.toJSON(message.recipient_transfer_amount_hi_validity_proof);
		}
		if (message.remaining_balance_range_proof !== undefined) {
			obj.remaining_balance_range_proof = RangeProof.toJSON(message.remaining_balance_range_proof);
		}
		if (message.remaining_balance_equality_proof !== undefined) {
			obj.remaining_balance_equality_proof = CiphertextCommitmentEqualityProof.toJSON(message.remaining_balance_equality_proof);
		}
		if (message.transfer_amount_lo_equality_proof !== undefined) {
			obj.transfer_amount_lo_equality_proof = CiphertextCiphertextEqualityProof.toJSON(message.transfer_amount_lo_equality_proof);
		}
		if (message.transfer_amount_hi_equality_proof !== undefined) {
			obj.transfer_amount_hi_equality_proof = CiphertextCiphertextEqualityProof.toJSON(message.transfer_amount_hi_equality_proof);
		}
		if (message.transfer_amount_lo_range_proof !== undefined) {
			obj.transfer_amount_lo_range_proof = RangeProof.toJSON(message.transfer_amount_lo_range_proof);
		}
		if (message.transfer_amount_hi_range_proof !== undefined) {
			obj.transfer_amount_hi_range_proof = RangeProof.toJSON(message.transfer_amount_hi_range_proof);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TransferMsgProofs>, I>>(base?: I): TransferMsgProofs {
		return TransferMsgProofs.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TransferMsgProofs>, I>>(object: I): TransferMsgProofs {
		const message = createBaseTransferMsgProofs();
		message.remaining_balance_commitment_validity_proof =
			object.remaining_balance_commitment_validity_proof !== undefined && object.remaining_balance_commitment_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.remaining_balance_commitment_validity_proof)
				: undefined;
		message.sender_transfer_amount_lo_validity_proof =
			object.sender_transfer_amount_lo_validity_proof !== undefined && object.sender_transfer_amount_lo_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.sender_transfer_amount_lo_validity_proof)
				: undefined;
		message.sender_transfer_amount_hi_validity_proof =
			object.sender_transfer_amount_hi_validity_proof !== undefined && object.sender_transfer_amount_hi_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.sender_transfer_amount_hi_validity_proof)
				: undefined;
		message.recipient_transfer_amount_lo_validity_proof =
			object.recipient_transfer_amount_lo_validity_proof !== undefined && object.recipient_transfer_amount_lo_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.recipient_transfer_amount_lo_validity_proof)
				: undefined;
		message.recipient_transfer_amount_hi_validity_proof =
			object.recipient_transfer_amount_hi_validity_proof !== undefined && object.recipient_transfer_amount_hi_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.recipient_transfer_amount_hi_validity_proof)
				: undefined;
		message.remaining_balance_range_proof =
			object.remaining_balance_range_proof !== undefined && object.remaining_balance_range_proof !== null
				? RangeProof.fromPartial(object.remaining_balance_range_proof)
				: undefined;
		message.remaining_balance_equality_proof =
			object.remaining_balance_equality_proof !== undefined && object.remaining_balance_equality_proof !== null
				? CiphertextCommitmentEqualityProof.fromPartial(object.remaining_balance_equality_proof)
				: undefined;
		message.transfer_amount_lo_equality_proof =
			object.transfer_amount_lo_equality_proof !== undefined && object.transfer_amount_lo_equality_proof !== null
				? CiphertextCiphertextEqualityProof.fromPartial(object.transfer_amount_lo_equality_proof)
				: undefined;
		message.transfer_amount_hi_equality_proof =
			object.transfer_amount_hi_equality_proof !== undefined && object.transfer_amount_hi_equality_proof !== null
				? CiphertextCiphertextEqualityProof.fromPartial(object.transfer_amount_hi_equality_proof)
				: undefined;
		message.transfer_amount_lo_range_proof =
			object.transfer_amount_lo_range_proof !== undefined && object.transfer_amount_lo_range_proof !== null
				? RangeProof.fromPartial(object.transfer_amount_lo_range_proof)
				: undefined;
		message.transfer_amount_hi_range_proof =
			object.transfer_amount_hi_range_proof !== undefined && object.transfer_amount_hi_range_proof !== null
				? RangeProof.fromPartial(object.transfer_amount_hi_range_proof)
				: undefined;
		return message;
	}
};

export const InitializeAccountMsgProofs: MessageFns<InitializeAccountMsgProofs, "seiprotocol.seichain.confidentialtransfers.InitializeAccountMsgProofs"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.InitializeAccountMsgProofs" as const,

	encode(message: InitializeAccountMsgProofs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pubkey_validity_proof !== undefined) {
			PubkeyValidityProof.encode(message.pubkey_validity_proof, writer.uint32(10).fork()).join();
		}
		if (message.zero_pending_balance_lo_proof !== undefined) {
			ZeroBalanceProof.encode(message.zero_pending_balance_lo_proof, writer.uint32(18).fork()).join();
		}
		if (message.zero_pending_balance_hi_proof !== undefined) {
			ZeroBalanceProof.encode(message.zero_pending_balance_hi_proof, writer.uint32(26).fork()).join();
		}
		if (message.zero_available_balance_proof !== undefined) {
			ZeroBalanceProof.encode(message.zero_available_balance_proof, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InitializeAccountMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInitializeAccountMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pubkey_validity_proof = PubkeyValidityProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.zero_pending_balance_lo_proof = ZeroBalanceProof.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.zero_pending_balance_hi_proof = ZeroBalanceProof.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.zero_available_balance_proof = ZeroBalanceProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InitializeAccountMsgProofs {
		return {
			pubkey_validity_proof: isSet(object.pubkey_validity_proof) ? PubkeyValidityProof.fromJSON(object.pubkey_validity_proof) : undefined,
			zero_pending_balance_lo_proof: isSet(object.zero_pending_balance_lo_proof) ? ZeroBalanceProof.fromJSON(object.zero_pending_balance_lo_proof) : undefined,
			zero_pending_balance_hi_proof: isSet(object.zero_pending_balance_hi_proof) ? ZeroBalanceProof.fromJSON(object.zero_pending_balance_hi_proof) : undefined,
			zero_available_balance_proof: isSet(object.zero_available_balance_proof) ? ZeroBalanceProof.fromJSON(object.zero_available_balance_proof) : undefined
		};
	},

	toJSON(message: InitializeAccountMsgProofs): unknown {
		const obj: any = {};
		if (message.pubkey_validity_proof !== undefined) {
			obj.pubkey_validity_proof = PubkeyValidityProof.toJSON(message.pubkey_validity_proof);
		}
		if (message.zero_pending_balance_lo_proof !== undefined) {
			obj.zero_pending_balance_lo_proof = ZeroBalanceProof.toJSON(message.zero_pending_balance_lo_proof);
		}
		if (message.zero_pending_balance_hi_proof !== undefined) {
			obj.zero_pending_balance_hi_proof = ZeroBalanceProof.toJSON(message.zero_pending_balance_hi_proof);
		}
		if (message.zero_available_balance_proof !== undefined) {
			obj.zero_available_balance_proof = ZeroBalanceProof.toJSON(message.zero_available_balance_proof);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InitializeAccountMsgProofs>, I>>(base?: I): InitializeAccountMsgProofs {
		return InitializeAccountMsgProofs.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InitializeAccountMsgProofs>, I>>(object: I): InitializeAccountMsgProofs {
		const message = createBaseInitializeAccountMsgProofs();
		message.pubkey_validity_proof =
			object.pubkey_validity_proof !== undefined && object.pubkey_validity_proof !== null
				? PubkeyValidityProof.fromPartial(object.pubkey_validity_proof)
				: undefined;
		message.zero_pending_balance_lo_proof =
			object.zero_pending_balance_lo_proof !== undefined && object.zero_pending_balance_lo_proof !== null
				? ZeroBalanceProof.fromPartial(object.zero_pending_balance_lo_proof)
				: undefined;
		message.zero_pending_balance_hi_proof =
			object.zero_pending_balance_hi_proof !== undefined && object.zero_pending_balance_hi_proof !== null
				? ZeroBalanceProof.fromPartial(object.zero_pending_balance_hi_proof)
				: undefined;
		message.zero_available_balance_proof =
			object.zero_available_balance_proof !== undefined && object.zero_available_balance_proof !== null
				? ZeroBalanceProof.fromPartial(object.zero_available_balance_proof)
				: undefined;
		return message;
	}
};

export const WithdrawMsgProofs: MessageFns<WithdrawMsgProofs, "seiprotocol.seichain.confidentialtransfers.WithdrawMsgProofs"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.WithdrawMsgProofs" as const,

	encode(message: WithdrawMsgProofs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.remaining_balance_range_proof !== undefined) {
			RangeProof.encode(message.remaining_balance_range_proof, writer.uint32(10).fork()).join();
		}
		if (message.remaining_balance_equality_proof !== undefined) {
			CiphertextCommitmentEqualityProof.encode(message.remaining_balance_equality_proof, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): WithdrawMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWithdrawMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.remaining_balance_range_proof = RangeProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.remaining_balance_equality_proof = CiphertextCommitmentEqualityProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): WithdrawMsgProofs {
		return {
			remaining_balance_range_proof: isSet(object.remaining_balance_range_proof) ? RangeProof.fromJSON(object.remaining_balance_range_proof) : undefined,
			remaining_balance_equality_proof: isSet(object.remaining_balance_equality_proof)
				? CiphertextCommitmentEqualityProof.fromJSON(object.remaining_balance_equality_proof)
				: undefined
		};
	},

	toJSON(message: WithdrawMsgProofs): unknown {
		const obj: any = {};
		if (message.remaining_balance_range_proof !== undefined) {
			obj.remaining_balance_range_proof = RangeProof.toJSON(message.remaining_balance_range_proof);
		}
		if (message.remaining_balance_equality_proof !== undefined) {
			obj.remaining_balance_equality_proof = CiphertextCommitmentEqualityProof.toJSON(message.remaining_balance_equality_proof);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<WithdrawMsgProofs>, I>>(base?: I): WithdrawMsgProofs {
		return WithdrawMsgProofs.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<WithdrawMsgProofs>, I>>(object: I): WithdrawMsgProofs {
		const message = createBaseWithdrawMsgProofs();
		message.remaining_balance_range_proof =
			object.remaining_balance_range_proof !== undefined && object.remaining_balance_range_proof !== null
				? RangeProof.fromPartial(object.remaining_balance_range_proof)
				: undefined;
		message.remaining_balance_equality_proof =
			object.remaining_balance_equality_proof !== undefined && object.remaining_balance_equality_proof !== null
				? CiphertextCommitmentEqualityProof.fromPartial(object.remaining_balance_equality_proof)
				: undefined;
		return message;
	}
};

export const CloseAccountMsgProofs: MessageFns<CloseAccountMsgProofs, "seiprotocol.seichain.confidentialtransfers.CloseAccountMsgProofs"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.CloseAccountMsgProofs" as const,

	encode(message: CloseAccountMsgProofs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.zero_available_balance_proof !== undefined) {
			ZeroBalanceProof.encode(message.zero_available_balance_proof, writer.uint32(10).fork()).join();
		}
		if (message.zero_pending_balance_lo_proof !== undefined) {
			ZeroBalanceProof.encode(message.zero_pending_balance_lo_proof, writer.uint32(18).fork()).join();
		}
		if (message.zero_pending_balance_hi_proof !== undefined) {
			ZeroBalanceProof.encode(message.zero_pending_balance_hi_proof, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CloseAccountMsgProofs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCloseAccountMsgProofs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.zero_available_balance_proof = ZeroBalanceProof.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.zero_pending_balance_lo_proof = ZeroBalanceProof.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.zero_pending_balance_hi_proof = ZeroBalanceProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CloseAccountMsgProofs {
		return {
			zero_available_balance_proof: isSet(object.zero_available_balance_proof) ? ZeroBalanceProof.fromJSON(object.zero_available_balance_proof) : undefined,
			zero_pending_balance_lo_proof: isSet(object.zero_pending_balance_lo_proof) ? ZeroBalanceProof.fromJSON(object.zero_pending_balance_lo_proof) : undefined,
			zero_pending_balance_hi_proof: isSet(object.zero_pending_balance_hi_proof) ? ZeroBalanceProof.fromJSON(object.zero_pending_balance_hi_proof) : undefined
		};
	},

	toJSON(message: CloseAccountMsgProofs): unknown {
		const obj: any = {};
		if (message.zero_available_balance_proof !== undefined) {
			obj.zero_available_balance_proof = ZeroBalanceProof.toJSON(message.zero_available_balance_proof);
		}
		if (message.zero_pending_balance_lo_proof !== undefined) {
			obj.zero_pending_balance_lo_proof = ZeroBalanceProof.toJSON(message.zero_pending_balance_lo_proof);
		}
		if (message.zero_pending_balance_hi_proof !== undefined) {
			obj.zero_pending_balance_hi_proof = ZeroBalanceProof.toJSON(message.zero_pending_balance_hi_proof);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CloseAccountMsgProofs>, I>>(base?: I): CloseAccountMsgProofs {
		return CloseAccountMsgProofs.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CloseAccountMsgProofs>, I>>(object: I): CloseAccountMsgProofs {
		const message = createBaseCloseAccountMsgProofs();
		message.zero_available_balance_proof =
			object.zero_available_balance_proof !== undefined && object.zero_available_balance_proof !== null
				? ZeroBalanceProof.fromPartial(object.zero_available_balance_proof)
				: undefined;
		message.zero_pending_balance_lo_proof =
			object.zero_pending_balance_lo_proof !== undefined && object.zero_pending_balance_lo_proof !== null
				? ZeroBalanceProof.fromPartial(object.zero_pending_balance_lo_proof)
				: undefined;
		message.zero_pending_balance_hi_proof =
			object.zero_pending_balance_hi_proof !== undefined && object.zero_pending_balance_hi_proof !== null
				? ZeroBalanceProof.fromPartial(object.zero_pending_balance_hi_proof)
				: undefined;
		return message;
	}
};

export const PubkeyValidityProof: MessageFns<PubkeyValidityProof, "seiprotocol.seichain.confidentialtransfers.PubkeyValidityProof"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.PubkeyValidityProof" as const,

	encode(message: PubkeyValidityProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePubkeyValidityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.y = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.z = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PubkeyValidityProof {
		return {
			y: isSet(object.y) ? bytesFromBase64(object.y) : new Uint8Array(0),
			z: isSet(object.z) ? bytesFromBase64(object.z) : new Uint8Array(0)
		};
	},

	toJSON(message: PubkeyValidityProof): unknown {
		const obj: any = {};
		if (message.y.length !== 0) {
			obj.y = base64FromBytes(message.y);
		}
		if (message.z.length !== 0) {
			obj.z = base64FromBytes(message.z);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PubkeyValidityProof>, I>>(base?: I): PubkeyValidityProof {
		return PubkeyValidityProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PubkeyValidityProof>, I>>(object: I): PubkeyValidityProof {
		const message = createBasePubkeyValidityProof();
		message.y = object.y ?? new Uint8Array(0);
		message.z = object.z ?? new Uint8Array(0);
		return message;
	}
};

export const CiphertextValidityProof: MessageFns<CiphertextValidityProof, "seiprotocol.seichain.confidentialtransfers.CiphertextValidityProof"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.CiphertextValidityProof" as const,

	encode(message: CiphertextValidityProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.commitment_1.length !== 0) {
			writer.uint32(10).bytes(message.commitment_1);
		}
		if (message.commitment_2.length !== 0) {
			writer.uint32(18).bytes(message.commitment_2);
		}
		if (message.response_1.length !== 0) {
			writer.uint32(34).bytes(message.response_1);
		}
		if (message.response_2.length !== 0) {
			writer.uint32(42).bytes(message.response_2);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CiphertextValidityProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertextValidityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.commitment_1 = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.commitment_2 = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.response_1 = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.response_2 = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CiphertextValidityProof {
		return {
			commitment_1: isSet(object.commitment_1) ? bytesFromBase64(object.commitment_1) : new Uint8Array(0),
			commitment_2: isSet(object.commitment_2) ? bytesFromBase64(object.commitment_2) : new Uint8Array(0),
			response_1: isSet(object.response_1) ? bytesFromBase64(object.response_1) : new Uint8Array(0),
			response_2: isSet(object.response_2) ? bytesFromBase64(object.response_2) : new Uint8Array(0)
		};
	},

	toJSON(message: CiphertextValidityProof): unknown {
		const obj: any = {};
		if (message.commitment_1.length !== 0) {
			obj.commitment_1 = base64FromBytes(message.commitment_1);
		}
		if (message.commitment_2.length !== 0) {
			obj.commitment_2 = base64FromBytes(message.commitment_2);
		}
		if (message.response_1.length !== 0) {
			obj.response_1 = base64FromBytes(message.response_1);
		}
		if (message.response_2.length !== 0) {
			obj.response_2 = base64FromBytes(message.response_2);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CiphertextValidityProof>, I>>(base?: I): CiphertextValidityProof {
		return CiphertextValidityProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CiphertextValidityProof>, I>>(object: I): CiphertextValidityProof {
		const message = createBaseCiphertextValidityProof();
		message.commitment_1 = object.commitment_1 ?? new Uint8Array(0);
		message.commitment_2 = object.commitment_2 ?? new Uint8Array(0);
		message.response_1 = object.response_1 ?? new Uint8Array(0);
		message.response_2 = object.response_2 ?? new Uint8Array(0);
		return message;
	}
};

export const RangeProof: MessageFns<RangeProof, "seiprotocol.seichain.confidentialtransfers.RangeProof"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.RangeProof" as const,

	encode(message: RangeProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.proof.length !== 0) {
			writer.uint32(10).bytes(message.proof);
		}
		if (message.randomness.length !== 0) {
			writer.uint32(18).bytes(message.randomness);
		}
		if (message.upper_bound !== 0) {
			writer.uint32(24).int64(message.upper_bound);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RangeProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRangeProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.proof = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.randomness = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.upper_bound = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RangeProof {
		return {
			proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
			randomness: isSet(object.randomness) ? bytesFromBase64(object.randomness) : new Uint8Array(0),
			upper_bound: isSet(object.upper_bound) ? globalThis.Number(object.upper_bound) : 0
		};
	},

	toJSON(message: RangeProof): unknown {
		const obj: any = {};
		if (message.proof.length !== 0) {
			obj.proof = base64FromBytes(message.proof);
		}
		if (message.randomness.length !== 0) {
			obj.randomness = base64FromBytes(message.randomness);
		}
		if (message.upper_bound !== 0) {
			obj.upper_bound = Math.round(message.upper_bound);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RangeProof>, I>>(base?: I): RangeProof {
		return RangeProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RangeProof>, I>>(object: I): RangeProof {
		const message = createBaseRangeProof();
		message.proof = object.proof ?? new Uint8Array(0);
		message.randomness = object.randomness ?? new Uint8Array(0);
		message.upper_bound = object.upper_bound ?? 0;
		return message;
	}
};

export const CiphertextCommitmentEqualityProof: MessageFns<
	CiphertextCommitmentEqualityProof,
	"seiprotocol.seichain.confidentialtransfers.CiphertextCommitmentEqualityProof"
> = {
	$type: "seiprotocol.seichain.confidentialtransfers.CiphertextCommitmentEqualityProof" as const,

	encode(message: CiphertextCommitmentEqualityProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertextCommitmentEqualityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.y0 = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.y1 = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.y2 = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.zs = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.zx = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.zr = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CiphertextCommitmentEqualityProof {
		return {
			y0: isSet(object.y0) ? bytesFromBase64(object.y0) : new Uint8Array(0),
			y1: isSet(object.y1) ? bytesFromBase64(object.y1) : new Uint8Array(0),
			y2: isSet(object.y2) ? bytesFromBase64(object.y2) : new Uint8Array(0),
			zs: isSet(object.zs) ? bytesFromBase64(object.zs) : new Uint8Array(0),
			zx: isSet(object.zx) ? bytesFromBase64(object.zx) : new Uint8Array(0),
			zr: isSet(object.zr) ? bytesFromBase64(object.zr) : new Uint8Array(0)
		};
	},

	toJSON(message: CiphertextCommitmentEqualityProof): unknown {
		const obj: any = {};
		if (message.y0.length !== 0) {
			obj.y0 = base64FromBytes(message.y0);
		}
		if (message.y1.length !== 0) {
			obj.y1 = base64FromBytes(message.y1);
		}
		if (message.y2.length !== 0) {
			obj.y2 = base64FromBytes(message.y2);
		}
		if (message.zs.length !== 0) {
			obj.zs = base64FromBytes(message.zs);
		}
		if (message.zx.length !== 0) {
			obj.zx = base64FromBytes(message.zx);
		}
		if (message.zr.length !== 0) {
			obj.zr = base64FromBytes(message.zr);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CiphertextCommitmentEqualityProof>, I>>(base?: I): CiphertextCommitmentEqualityProof {
		return CiphertextCommitmentEqualityProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CiphertextCommitmentEqualityProof>, I>>(object: I): CiphertextCommitmentEqualityProof {
		const message = createBaseCiphertextCommitmentEqualityProof();
		message.y0 = object.y0 ?? new Uint8Array(0);
		message.y1 = object.y1 ?? new Uint8Array(0);
		message.y2 = object.y2 ?? new Uint8Array(0);
		message.zs = object.zs ?? new Uint8Array(0);
		message.zx = object.zx ?? new Uint8Array(0);
		message.zr = object.zr ?? new Uint8Array(0);
		return message;
	}
};

export const CiphertextCiphertextEqualityProof: MessageFns<
	CiphertextCiphertextEqualityProof,
	"seiprotocol.seichain.confidentialtransfers.CiphertextCiphertextEqualityProof"
> = {
	$type: "seiprotocol.seichain.confidentialtransfers.CiphertextCiphertextEqualityProof" as const,

	encode(message: CiphertextCiphertextEqualityProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertextCiphertextEqualityProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.y0 = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.y1 = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.y2 = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.y3 = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.zs = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.zx = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.zr = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CiphertextCiphertextEqualityProof {
		return {
			y0: isSet(object.y0) ? bytesFromBase64(object.y0) : new Uint8Array(0),
			y1: isSet(object.y1) ? bytesFromBase64(object.y1) : new Uint8Array(0),
			y2: isSet(object.y2) ? bytesFromBase64(object.y2) : new Uint8Array(0),
			y3: isSet(object.y3) ? bytesFromBase64(object.y3) : new Uint8Array(0),
			zs: isSet(object.zs) ? bytesFromBase64(object.zs) : new Uint8Array(0),
			zx: isSet(object.zx) ? bytesFromBase64(object.zx) : new Uint8Array(0),
			zr: isSet(object.zr) ? bytesFromBase64(object.zr) : new Uint8Array(0)
		};
	},

	toJSON(message: CiphertextCiphertextEqualityProof): unknown {
		const obj: any = {};
		if (message.y0.length !== 0) {
			obj.y0 = base64FromBytes(message.y0);
		}
		if (message.y1.length !== 0) {
			obj.y1 = base64FromBytes(message.y1);
		}
		if (message.y2.length !== 0) {
			obj.y2 = base64FromBytes(message.y2);
		}
		if (message.y3.length !== 0) {
			obj.y3 = base64FromBytes(message.y3);
		}
		if (message.zs.length !== 0) {
			obj.zs = base64FromBytes(message.zs);
		}
		if (message.zx.length !== 0) {
			obj.zx = base64FromBytes(message.zx);
		}
		if (message.zr.length !== 0) {
			obj.zr = base64FromBytes(message.zr);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CiphertextCiphertextEqualityProof>, I>>(base?: I): CiphertextCiphertextEqualityProof {
		return CiphertextCiphertextEqualityProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CiphertextCiphertextEqualityProof>, I>>(object: I): CiphertextCiphertextEqualityProof {
		const message = createBaseCiphertextCiphertextEqualityProof();
		message.y0 = object.y0 ?? new Uint8Array(0);
		message.y1 = object.y1 ?? new Uint8Array(0);
		message.y2 = object.y2 ?? new Uint8Array(0);
		message.y3 = object.y3 ?? new Uint8Array(0);
		message.zs = object.zs ?? new Uint8Array(0);
		message.zx = object.zx ?? new Uint8Array(0);
		message.zr = object.zr ?? new Uint8Array(0);
		return message;
	}
};

export const ZeroBalanceProof: MessageFns<ZeroBalanceProof, "seiprotocol.seichain.confidentialtransfers.ZeroBalanceProof"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.ZeroBalanceProof" as const,

	encode(message: ZeroBalanceProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.y_p.length !== 0) {
			writer.uint32(10).bytes(message.y_p);
		}
		if (message.y_d.length !== 0) {
			writer.uint32(18).bytes(message.y_d);
		}
		if (message.z.length !== 0) {
			writer.uint32(26).bytes(message.z);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ZeroBalanceProof {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseZeroBalanceProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.y_p = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.y_d = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.z = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ZeroBalanceProof {
		return {
			y_p: isSet(object.y_p) ? bytesFromBase64(object.y_p) : new Uint8Array(0),
			y_d: isSet(object.y_d) ? bytesFromBase64(object.y_d) : new Uint8Array(0),
			z: isSet(object.z) ? bytesFromBase64(object.z) : new Uint8Array(0)
		};
	},

	toJSON(message: ZeroBalanceProof): unknown {
		const obj: any = {};
		if (message.y_p.length !== 0) {
			obj.y_p = base64FromBytes(message.y_p);
		}
		if (message.y_d.length !== 0) {
			obj.y_d = base64FromBytes(message.y_d);
		}
		if (message.z.length !== 0) {
			obj.z = base64FromBytes(message.z);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ZeroBalanceProof>, I>>(base?: I): ZeroBalanceProof {
		return ZeroBalanceProof.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ZeroBalanceProof>, I>>(object: I): ZeroBalanceProof {
		const message = createBaseZeroBalanceProof();
		message.y_p = object.y_p ?? new Uint8Array(0);
		message.y_d = object.y_d ?? new Uint8Array(0);
		message.z = object.z ?? new Uint8Array(0);
		return message;
	}
};

function createBaseTransferMsgProofs(): TransferMsgProofs {
	return {
		remaining_balance_commitment_validity_proof: undefined,
		sender_transfer_amount_lo_validity_proof: undefined,
		sender_transfer_amount_hi_validity_proof: undefined,
		recipient_transfer_amount_lo_validity_proof: undefined,
		recipient_transfer_amount_hi_validity_proof: undefined,
		remaining_balance_range_proof: undefined,
		remaining_balance_equality_proof: undefined,
		transfer_amount_lo_equality_proof: undefined,
		transfer_amount_hi_equality_proof: undefined,
		transfer_amount_lo_range_proof: undefined,
		transfer_amount_hi_range_proof: undefined
	};
}

function createBaseInitializeAccountMsgProofs(): InitializeAccountMsgProofs {
	return {
		pubkey_validity_proof: undefined,
		zero_pending_balance_lo_proof: undefined,
		zero_pending_balance_hi_proof: undefined,
		zero_available_balance_proof: undefined
	};
}

function createBaseWithdrawMsgProofs(): WithdrawMsgProofs {
	return { remaining_balance_range_proof: undefined, remaining_balance_equality_proof: undefined };
}

function createBaseCloseAccountMsgProofs(): CloseAccountMsgProofs {
	return {
		zero_available_balance_proof: undefined,
		zero_pending_balance_lo_proof: undefined,
		zero_pending_balance_hi_proof: undefined
	};
}

function createBasePubkeyValidityProof(): PubkeyValidityProof {
	return { y: new Uint8Array(0), z: new Uint8Array(0) };
}

function createBaseCiphertextValidityProof(): CiphertextValidityProof {
	return {
		commitment_1: new Uint8Array(0),
		commitment_2: new Uint8Array(0),
		response_1: new Uint8Array(0),
		response_2: new Uint8Array(0)
	};
}

function createBaseRangeProof(): RangeProof {
	return { proof: new Uint8Array(0), randomness: new Uint8Array(0), upper_bound: 0 };
}

function createBaseCiphertextCommitmentEqualityProof(): CiphertextCommitmentEqualityProof {
	return {
		y0: new Uint8Array(0),
		y1: new Uint8Array(0),
		y2: new Uint8Array(0),
		zs: new Uint8Array(0),
		zx: new Uint8Array(0),
		zr: new Uint8Array(0)
	};
}

function createBaseCiphertextCiphertextEqualityProof(): CiphertextCiphertextEqualityProof {
	return {
		y0: new Uint8Array(0),
		y1: new Uint8Array(0),
		y2: new Uint8Array(0),
		y3: new Uint8Array(0),
		zs: new Uint8Array(0),
		zx: new Uint8Array(0),
		zr: new Uint8Array(0)
	};
}

function createBaseZeroBalanceProof(): ZeroBalanceProof {
	return { y_p: new Uint8Array(0), y_d: new Uint8Array(0), z: new Uint8Array(0) };
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
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.confidentialtransfers.RangeProof", RangeProof as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.RangeProof": {
		aminoType: "confidentialtransfers/RangeProof",
		toAmino: (message: RangeProof) => ({ ...message }),
		fromAmino: (object: RangeProof) => ({ ...object })
	}
};

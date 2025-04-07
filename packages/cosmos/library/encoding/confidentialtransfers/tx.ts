import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Ciphertext } from "./cryptography";

import {
	CiphertextCiphertextEqualityProof,
	CiphertextValidityProof,
	CloseAccountMsgProofs,
	InitializeAccountMsgProofs,
	TransferMsgProofs,
	WithdrawMsgProofs
} from "./zk";

import type {
	Auditor as Auditor_type,
	MsgApplyPendingBalanceResponse as MsgApplyPendingBalanceResponse_type,
	MsgApplyPendingBalance as MsgApplyPendingBalance_type,
	MsgCloseAccountResponse as MsgCloseAccountResponse_type,
	MsgCloseAccount as MsgCloseAccount_type,
	MsgDepositResponse as MsgDepositResponse_type,
	MsgDeposit as MsgDeposit_type,
	MsgInitializeAccountResponse as MsgInitializeAccountResponse_type,
	MsgInitializeAccount as MsgInitializeAccount_type,
	MsgTransferResponse as MsgTransferResponse_type,
	MsgTransfer as MsgTransfer_type,
	MsgWithdrawResponse as MsgWithdrawResponse_type,
	MsgWithdraw as MsgWithdraw_type
} from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface MsgTransfer extends MsgTransfer_type {}
export interface MsgTransferResponse extends MsgTransferResponse_type {}
export interface Auditor extends Auditor_type {}
export interface MsgInitializeAccount extends MsgInitializeAccount_type {}
export interface MsgInitializeAccountResponse extends MsgInitializeAccountResponse_type {}
export interface MsgDeposit extends MsgDeposit_type {}
export interface MsgDepositResponse extends MsgDepositResponse_type {}
export interface MsgWithdraw extends MsgWithdraw_type {}
export interface MsgWithdrawResponse extends MsgWithdrawResponse_type {}
export interface MsgApplyPendingBalance extends MsgApplyPendingBalance_type {}
export interface MsgApplyPendingBalanceResponse extends MsgApplyPendingBalanceResponse_type {}
export interface MsgCloseAccount extends MsgCloseAccount_type {}
export interface MsgCloseAccountResponse extends MsgCloseAccountResponse_type {}

export const MsgTransfer: MessageFns<MsgTransfer, "seiprotocol.seichain.confidentialtransfers.MsgTransfer"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgTransfer" as const,

	encode(message: MsgTransfer, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.to_address !== "") {
			writer.uint32(18).string(message.to_address);
		}
		if (message.denom !== "") {
			writer.uint32(26).string(message.denom);
		}
		if (message.from_amount_lo !== undefined) {
			Ciphertext.encode(message.from_amount_lo, writer.uint32(34).fork()).join();
		}
		if (message.from_amount_hi !== undefined) {
			Ciphertext.encode(message.from_amount_hi, writer.uint32(42).fork()).join();
		}
		if (message.to_amount_lo !== undefined) {
			Ciphertext.encode(message.to_amount_lo, writer.uint32(50).fork()).join();
		}
		if (message.to_amount_hi !== undefined) {
			Ciphertext.encode(message.to_amount_hi, writer.uint32(58).fork()).join();
		}
		if (message.remaining_balance !== undefined) {
			Ciphertext.encode(message.remaining_balance, writer.uint32(66).fork()).join();
		}
		if (message.decryptable_balance !== "") {
			writer.uint32(74).string(message.decryptable_balance);
		}
		if (message.proofs !== undefined) {
			TransferMsgProofs.encode(message.proofs, writer.uint32(82).fork()).join();
		}
		for (const v of message.auditors) {
			Auditor.encode(v!, writer.uint32(90).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgTransfer {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgTransfer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.to_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.from_amount_lo = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.from_amount_hi = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.to_amount_lo = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.to_amount_hi = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.remaining_balance = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.decryptable_balance = reader.string();
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.proofs = TransferMsgProofs.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.auditors.push(Auditor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgTransfer {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			to_address: isSet(object.to_address) ? globalThis.String(object.to_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			from_amount_lo: isSet(object.from_amount_lo) ? Ciphertext.fromJSON(object.from_amount_lo) : undefined,
			from_amount_hi: isSet(object.from_amount_hi) ? Ciphertext.fromJSON(object.from_amount_hi) : undefined,
			to_amount_lo: isSet(object.to_amount_lo) ? Ciphertext.fromJSON(object.to_amount_lo) : undefined,
			to_amount_hi: isSet(object.to_amount_hi) ? Ciphertext.fromJSON(object.to_amount_hi) : undefined,
			remaining_balance: isSet(object.remaining_balance) ? Ciphertext.fromJSON(object.remaining_balance) : undefined,
			decryptable_balance: isSet(object.decryptable_balance) ? globalThis.String(object.decryptable_balance) : "",
			proofs: isSet(object.proofs) ? TransferMsgProofs.fromJSON(object.proofs) : undefined,
			auditors: globalThis.Array.isArray(object?.auditors) ? object.auditors.map((e: any) => Auditor.fromJSON(e)) : []
		};
	},

	toJSON(message: MsgTransfer): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.to_address !== "") {
			obj.to_address = message.to_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.from_amount_lo !== undefined) {
			obj.from_amount_lo = Ciphertext.toJSON(message.from_amount_lo);
		}
		if (message.from_amount_hi !== undefined) {
			obj.from_amount_hi = Ciphertext.toJSON(message.from_amount_hi);
		}
		if (message.to_amount_lo !== undefined) {
			obj.to_amount_lo = Ciphertext.toJSON(message.to_amount_lo);
		}
		if (message.to_amount_hi !== undefined) {
			obj.to_amount_hi = Ciphertext.toJSON(message.to_amount_hi);
		}
		if (message.remaining_balance !== undefined) {
			obj.remaining_balance = Ciphertext.toJSON(message.remaining_balance);
		}
		if (message.decryptable_balance !== "") {
			obj.decryptable_balance = message.decryptable_balance;
		}
		if (message.proofs !== undefined) {
			obj.proofs = TransferMsgProofs.toJSON(message.proofs);
		}
		if (message.auditors?.length) {
			obj.auditors = message.auditors.map((e) => Auditor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgTransfer>, I>>(base?: I): MsgTransfer {
		return MsgTransfer.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgTransfer>, I>>(object: I): MsgTransfer {
		const message = createBaseMsgTransfer();
		message.from_address = object.from_address ?? "";
		message.to_address = object.to_address ?? "";
		message.denom = object.denom ?? "";
		message.from_amount_lo = object.from_amount_lo !== undefined && object.from_amount_lo !== null ? Ciphertext.fromPartial(object.from_amount_lo) : undefined;
		message.from_amount_hi = object.from_amount_hi !== undefined && object.from_amount_hi !== null ? Ciphertext.fromPartial(object.from_amount_hi) : undefined;
		message.to_amount_lo = object.to_amount_lo !== undefined && object.to_amount_lo !== null ? Ciphertext.fromPartial(object.to_amount_lo) : undefined;
		message.to_amount_hi = object.to_amount_hi !== undefined && object.to_amount_hi !== null ? Ciphertext.fromPartial(object.to_amount_hi) : undefined;
		message.remaining_balance =
			object.remaining_balance !== undefined && object.remaining_balance !== null ? Ciphertext.fromPartial(object.remaining_balance) : undefined;
		message.decryptable_balance = object.decryptable_balance ?? "";
		message.proofs = object.proofs !== undefined && object.proofs !== null ? TransferMsgProofs.fromPartial(object.proofs) : undefined;
		message.auditors = object.auditors?.map((e) => Auditor.fromPartial(e)) || [];
		return message;
	}
};

export const MsgTransferResponse: MessageFns<MsgTransferResponse, "seiprotocol.seichain.confidentialtransfers.MsgTransferResponse"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgTransferResponse" as const,

	encode(_: MsgTransferResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgTransferResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgTransferResponse {
		return {};
	},

	toJSON(_: MsgTransferResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(base?: I): MsgTransferResponse {
		return MsgTransferResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(_: I): MsgTransferResponse {
		const message = createBaseMsgTransferResponse();
		return message;
	}
};

export const Auditor: MessageFns<Auditor, "seiprotocol.seichain.confidentialtransfers.Auditor"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.Auditor" as const,

	encode(message: Auditor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.auditor_address !== "") {
			writer.uint32(10).string(message.auditor_address);
		}
		if (message.encrypted_transfer_amount_lo !== undefined) {
			Ciphertext.encode(message.encrypted_transfer_amount_lo, writer.uint32(18).fork()).join();
		}
		if (message.encrypted_transfer_amount_hi !== undefined) {
			Ciphertext.encode(message.encrypted_transfer_amount_hi, writer.uint32(26).fork()).join();
		}
		if (message.transfer_amount_lo_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.transfer_amount_lo_validity_proof, writer.uint32(34).fork()).join();
		}
		if (message.transfer_amount_hi_validity_proof !== undefined) {
			CiphertextValidityProof.encode(message.transfer_amount_hi_validity_proof, writer.uint32(42).fork()).join();
		}
		if (message.transfer_amount_lo_equality_proof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transfer_amount_lo_equality_proof, writer.uint32(50).fork()).join();
		}
		if (message.transfer_amount_hi_equality_proof !== undefined) {
			CiphertextCiphertextEqualityProof.encode(message.transfer_amount_hi_equality_proof, writer.uint32(58).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Auditor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAuditor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.auditor_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.encrypted_transfer_amount_lo = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.encrypted_transfer_amount_hi = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.transfer_amount_lo_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.transfer_amount_hi_validity_proof = CiphertextValidityProof.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.transfer_amount_lo_equality_proof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.transfer_amount_hi_equality_proof = CiphertextCiphertextEqualityProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Auditor {
		return {
			auditor_address: isSet(object.auditor_address) ? globalThis.String(object.auditor_address) : "",
			encrypted_transfer_amount_lo: isSet(object.encrypted_transfer_amount_lo) ? Ciphertext.fromJSON(object.encrypted_transfer_amount_lo) : undefined,
			encrypted_transfer_amount_hi: isSet(object.encrypted_transfer_amount_hi) ? Ciphertext.fromJSON(object.encrypted_transfer_amount_hi) : undefined,
			transfer_amount_lo_validity_proof: isSet(object.transfer_amount_lo_validity_proof)
				? CiphertextValidityProof.fromJSON(object.transfer_amount_lo_validity_proof)
				: undefined,
			transfer_amount_hi_validity_proof: isSet(object.transfer_amount_hi_validity_proof)
				? CiphertextValidityProof.fromJSON(object.transfer_amount_hi_validity_proof)
				: undefined,
			transfer_amount_lo_equality_proof: isSet(object.transfer_amount_lo_equality_proof)
				? CiphertextCiphertextEqualityProof.fromJSON(object.transfer_amount_lo_equality_proof)
				: undefined,
			transfer_amount_hi_equality_proof: isSet(object.transfer_amount_hi_equality_proof)
				? CiphertextCiphertextEqualityProof.fromJSON(object.transfer_amount_hi_equality_proof)
				: undefined
		};
	},

	toJSON(message: Auditor): unknown {
		const obj: any = {};
		if (message.auditor_address !== "") {
			obj.auditor_address = message.auditor_address;
		}
		if (message.encrypted_transfer_amount_lo !== undefined) {
			obj.encrypted_transfer_amount_lo = Ciphertext.toJSON(message.encrypted_transfer_amount_lo);
		}
		if (message.encrypted_transfer_amount_hi !== undefined) {
			obj.encrypted_transfer_amount_hi = Ciphertext.toJSON(message.encrypted_transfer_amount_hi);
		}
		if (message.transfer_amount_lo_validity_proof !== undefined) {
			obj.transfer_amount_lo_validity_proof = CiphertextValidityProof.toJSON(message.transfer_amount_lo_validity_proof);
		}
		if (message.transfer_amount_hi_validity_proof !== undefined) {
			obj.transfer_amount_hi_validity_proof = CiphertextValidityProof.toJSON(message.transfer_amount_hi_validity_proof);
		}
		if (message.transfer_amount_lo_equality_proof !== undefined) {
			obj.transfer_amount_lo_equality_proof = CiphertextCiphertextEqualityProof.toJSON(message.transfer_amount_lo_equality_proof);
		}
		if (message.transfer_amount_hi_equality_proof !== undefined) {
			obj.transfer_amount_hi_equality_proof = CiphertextCiphertextEqualityProof.toJSON(message.transfer_amount_hi_equality_proof);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Auditor>, I>>(base?: I): Auditor {
		return Auditor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Auditor>, I>>(object: I): Auditor {
		const message = createBaseAuditor();
		message.auditor_address = object.auditor_address ?? "";
		message.encrypted_transfer_amount_lo =
			object.encrypted_transfer_amount_lo !== undefined && object.encrypted_transfer_amount_lo !== null
				? Ciphertext.fromPartial(object.encrypted_transfer_amount_lo)
				: undefined;
		message.encrypted_transfer_amount_hi =
			object.encrypted_transfer_amount_hi !== undefined && object.encrypted_transfer_amount_hi !== null
				? Ciphertext.fromPartial(object.encrypted_transfer_amount_hi)
				: undefined;
		message.transfer_amount_lo_validity_proof =
			object.transfer_amount_lo_validity_proof !== undefined && object.transfer_amount_lo_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.transfer_amount_lo_validity_proof)
				: undefined;
		message.transfer_amount_hi_validity_proof =
			object.transfer_amount_hi_validity_proof !== undefined && object.transfer_amount_hi_validity_proof !== null
				? CiphertextValidityProof.fromPartial(object.transfer_amount_hi_validity_proof)
				: undefined;
		message.transfer_amount_lo_equality_proof =
			object.transfer_amount_lo_equality_proof !== undefined && object.transfer_amount_lo_equality_proof !== null
				? CiphertextCiphertextEqualityProof.fromPartial(object.transfer_amount_lo_equality_proof)
				: undefined;
		message.transfer_amount_hi_equality_proof =
			object.transfer_amount_hi_equality_proof !== undefined && object.transfer_amount_hi_equality_proof !== null
				? CiphertextCiphertextEqualityProof.fromPartial(object.transfer_amount_hi_equality_proof)
				: undefined;
		return message;
	}
};

export const MsgInitializeAccount: MessageFns<MsgInitializeAccount, "seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount" as const,

	encode(message: MsgInitializeAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.public_key.length !== 0) {
			writer.uint32(26).bytes(message.public_key);
		}
		if (message.decryptable_balance !== "") {
			writer.uint32(34).string(message.decryptable_balance);
		}
		if (message.pending_balance_lo !== undefined) {
			Ciphertext.encode(message.pending_balance_lo, writer.uint32(42).fork()).join();
		}
		if (message.pending_balance_hi !== undefined) {
			Ciphertext.encode(message.pending_balance_hi, writer.uint32(50).fork()).join();
		}
		if (message.available_balance !== undefined) {
			Ciphertext.encode(message.available_balance, writer.uint32(58).fork()).join();
		}
		if (message.proofs !== undefined) {
			InitializeAccountMsgProofs.encode(message.proofs, writer.uint32(66).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgInitializeAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInitializeAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.public_key = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.decryptable_balance = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.pending_balance_lo = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.pending_balance_hi = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.available_balance = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.proofs = InitializeAccountMsgProofs.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgInitializeAccount {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			public_key: isSet(object.public_key) ? bytesFromBase64(object.public_key) : new Uint8Array(0),
			decryptable_balance: isSet(object.decryptable_balance) ? globalThis.String(object.decryptable_balance) : "",
			pending_balance_lo: isSet(object.pending_balance_lo) ? Ciphertext.fromJSON(object.pending_balance_lo) : undefined,
			pending_balance_hi: isSet(object.pending_balance_hi) ? Ciphertext.fromJSON(object.pending_balance_hi) : undefined,
			available_balance: isSet(object.available_balance) ? Ciphertext.fromJSON(object.available_balance) : undefined,
			proofs: isSet(object.proofs) ? InitializeAccountMsgProofs.fromJSON(object.proofs) : undefined
		};
	},

	toJSON(message: MsgInitializeAccount): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.public_key.length !== 0) {
			obj.public_key = base64FromBytes(message.public_key);
		}
		if (message.decryptable_balance !== "") {
			obj.decryptable_balance = message.decryptable_balance;
		}
		if (message.pending_balance_lo !== undefined) {
			obj.pending_balance_lo = Ciphertext.toJSON(message.pending_balance_lo);
		}
		if (message.pending_balance_hi !== undefined) {
			obj.pending_balance_hi = Ciphertext.toJSON(message.pending_balance_hi);
		}
		if (message.available_balance !== undefined) {
			obj.available_balance = Ciphertext.toJSON(message.available_balance);
		}
		if (message.proofs !== undefined) {
			obj.proofs = InitializeAccountMsgProofs.toJSON(message.proofs);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgInitializeAccount>, I>>(base?: I): MsgInitializeAccount {
		return MsgInitializeAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgInitializeAccount>, I>>(object: I): MsgInitializeAccount {
		const message = createBaseMsgInitializeAccount();
		message.from_address = object.from_address ?? "";
		message.denom = object.denom ?? "";
		message.public_key = object.public_key ?? new Uint8Array(0);
		message.decryptable_balance = object.decryptable_balance ?? "";
		message.pending_balance_lo =
			object.pending_balance_lo !== undefined && object.pending_balance_lo !== null ? Ciphertext.fromPartial(object.pending_balance_lo) : undefined;
		message.pending_balance_hi =
			object.pending_balance_hi !== undefined && object.pending_balance_hi !== null ? Ciphertext.fromPartial(object.pending_balance_hi) : undefined;
		message.available_balance =
			object.available_balance !== undefined && object.available_balance !== null ? Ciphertext.fromPartial(object.available_balance) : undefined;
		message.proofs = object.proofs !== undefined && object.proofs !== null ? InitializeAccountMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	}
};

export const MsgInitializeAccountResponse: MessageFns<MsgInitializeAccountResponse, "seiprotocol.seichain.confidentialtransfers.MsgInitializeAccountResponse"> =
	{
		$type: "seiprotocol.seichain.confidentialtransfers.MsgInitializeAccountResponse" as const,

		encode(_: MsgInitializeAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): MsgInitializeAccountResponse {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseMsgInitializeAccountResponse();
			while (reader.pos < end) {
				const tag = reader.uint32();
				switch (tag >>> 3) {
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(_: any): MsgInitializeAccountResponse {
			return {};
		},

		toJSON(_: MsgInitializeAccountResponse): unknown {
			const obj: any = {};
			return obj;
		},

		create<I extends Exact<DeepPartial<MsgInitializeAccountResponse>, I>>(base?: I): MsgInitializeAccountResponse {
			return MsgInitializeAccountResponse.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<MsgInitializeAccountResponse>, I>>(_: I): MsgInitializeAccountResponse {
			const message = createBaseMsgInitializeAccountResponse();
			return message;
		}
	};

export const MsgDeposit: MessageFns<MsgDeposit, "seiprotocol.seichain.confidentialtransfers.MsgDeposit"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgDeposit" as const,

	encode(message: MsgDeposit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.amount !== 0) {
			writer.uint32(24).uint64(message.amount);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDeposit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.amount = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgDeposit {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0
		};
	},

	toJSON(message: MsgDeposit): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.amount !== 0) {
			obj.amount = Math.round(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDeposit>, I>>(base?: I): MsgDeposit {
		return MsgDeposit.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
		const message = createBaseMsgDeposit();
		message.from_address = object.from_address ?? "";
		message.denom = object.denom ?? "";
		message.amount = object.amount ?? 0;
		return message;
	}
};

export const MsgDepositResponse: MessageFns<MsgDepositResponse, "seiprotocol.seichain.confidentialtransfers.MsgDepositResponse"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgDepositResponse" as const,

	encode(_: MsgDepositResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDepositResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgDepositResponse {
		return {};
	},

	toJSON(_: MsgDepositResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(base?: I): MsgDepositResponse {
		return MsgDepositResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
		const message = createBaseMsgDepositResponse();
		return message;
	}
};

export const MsgWithdraw: MessageFns<MsgWithdraw, "seiprotocol.seichain.confidentialtransfers.MsgWithdraw"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgWithdraw" as const,

	encode(message: MsgWithdraw, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.amount !== "") {
			writer.uint32(26).string(message.amount);
		}
		if (message.decryptable_balance !== "") {
			writer.uint32(34).string(message.decryptable_balance);
		}
		if (message.remaining_balance_commitment !== undefined) {
			Ciphertext.encode(message.remaining_balance_commitment, writer.uint32(42).fork()).join();
		}
		if (message.proofs !== undefined) {
			WithdrawMsgProofs.encode(message.proofs, writer.uint32(50).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdraw();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.decryptable_balance = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.remaining_balance_commitment = Ciphertext.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.proofs = WithdrawMsgProofs.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgWithdraw {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
			decryptable_balance: isSet(object.decryptable_balance) ? globalThis.String(object.decryptable_balance) : "",
			remaining_balance_commitment: isSet(object.remaining_balance_commitment) ? Ciphertext.fromJSON(object.remaining_balance_commitment) : undefined,
			proofs: isSet(object.proofs) ? WithdrawMsgProofs.fromJSON(object.proofs) : undefined
		};
	},

	toJSON(message: MsgWithdraw): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.amount !== "") {
			obj.amount = message.amount;
		}
		if (message.decryptable_balance !== "") {
			obj.decryptable_balance = message.decryptable_balance;
		}
		if (message.remaining_balance_commitment !== undefined) {
			obj.remaining_balance_commitment = Ciphertext.toJSON(message.remaining_balance_commitment);
		}
		if (message.proofs !== undefined) {
			obj.proofs = WithdrawMsgProofs.toJSON(message.proofs);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgWithdraw>, I>>(base?: I): MsgWithdraw {
		return MsgWithdraw.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
		const message = createBaseMsgWithdraw();
		message.from_address = object.from_address ?? "";
		message.denom = object.denom ?? "";
		message.amount = object.amount ?? "";
		message.decryptable_balance = object.decryptable_balance ?? "";
		message.remaining_balance_commitment =
			object.remaining_balance_commitment !== undefined && object.remaining_balance_commitment !== null
				? Ciphertext.fromPartial(object.remaining_balance_commitment)
				: undefined;
		message.proofs = object.proofs !== undefined && object.proofs !== null ? WithdrawMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	}
};

export const MsgWithdrawResponse: MessageFns<MsgWithdrawResponse, "seiprotocol.seichain.confidentialtransfers.MsgWithdrawResponse"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgWithdrawResponse" as const,

	encode(_: MsgWithdrawResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdrawResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgWithdrawResponse {
		return {};
	},

	toJSON(_: MsgWithdrawResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(base?: I): MsgWithdrawResponse {
		return MsgWithdrawResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(_: I): MsgWithdrawResponse {
		const message = createBaseMsgWithdrawResponse();
		return message;
	}
};

export const MsgApplyPendingBalance: MessageFns<MsgApplyPendingBalance, "seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance" as const,

	encode(message: MsgApplyPendingBalance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.new_decryptable_available_balance !== "") {
			writer.uint32(26).string(message.new_decryptable_available_balance);
		}
		if (message.current_pending_balance_counter !== 0) {
			writer.uint32(32).uint32(message.current_pending_balance_counter);
		}
		if (message.current_available_balance !== undefined) {
			Ciphertext.encode(message.current_available_balance, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgApplyPendingBalance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgApplyPendingBalance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.new_decryptable_available_balance = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.current_pending_balance_counter = reader.uint32();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.current_available_balance = Ciphertext.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgApplyPendingBalance {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			new_decryptable_available_balance: isSet(object.new_decryptable_available_balance) ? globalThis.String(object.new_decryptable_available_balance) : "",
			current_pending_balance_counter: isSet(object.current_pending_balance_counter) ? globalThis.Number(object.current_pending_balance_counter) : 0,
			current_available_balance: isSet(object.current_available_balance) ? Ciphertext.fromJSON(object.current_available_balance) : undefined
		};
	},

	toJSON(message: MsgApplyPendingBalance): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.new_decryptable_available_balance !== "") {
			obj.new_decryptable_available_balance = message.new_decryptable_available_balance;
		}
		if (message.current_pending_balance_counter !== 0) {
			obj.current_pending_balance_counter = Math.round(message.current_pending_balance_counter);
		}
		if (message.current_available_balance !== undefined) {
			obj.current_available_balance = Ciphertext.toJSON(message.current_available_balance);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgApplyPendingBalance>, I>>(base?: I): MsgApplyPendingBalance {
		return MsgApplyPendingBalance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgApplyPendingBalance>, I>>(object: I): MsgApplyPendingBalance {
		const message = createBaseMsgApplyPendingBalance();
		message.address = object.address ?? "";
		message.denom = object.denom ?? "";
		message.new_decryptable_available_balance = object.new_decryptable_available_balance ?? "";
		message.current_pending_balance_counter = object.current_pending_balance_counter ?? 0;
		message.current_available_balance =
			object.current_available_balance !== undefined && object.current_available_balance !== null
				? Ciphertext.fromPartial(object.current_available_balance)
				: undefined;
		return message;
	}
};

export const MsgApplyPendingBalanceResponse: MessageFns<
	MsgApplyPendingBalanceResponse,
	"seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalanceResponse"
> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalanceResponse" as const,

	encode(_: MsgApplyPendingBalanceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgApplyPendingBalanceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgApplyPendingBalanceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgApplyPendingBalanceResponse {
		return {};
	},

	toJSON(_: MsgApplyPendingBalanceResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgApplyPendingBalanceResponse>, I>>(base?: I): MsgApplyPendingBalanceResponse {
		return MsgApplyPendingBalanceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgApplyPendingBalanceResponse>, I>>(_: I): MsgApplyPendingBalanceResponse {
		const message = createBaseMsgApplyPendingBalanceResponse();
		return message;
	}
};

export const MsgCloseAccount: MessageFns<MsgCloseAccount, "seiprotocol.seichain.confidentialtransfers.MsgCloseAccount"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgCloseAccount" as const,

	encode(message: MsgCloseAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.proofs !== undefined) {
			CloseAccountMsgProofs.encode(message.proofs, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCloseAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.proofs = CloseAccountMsgProofs.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgCloseAccount {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			proofs: isSet(object.proofs) ? CloseAccountMsgProofs.fromJSON(object.proofs) : undefined
		};
	},

	toJSON(message: MsgCloseAccount): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.proofs !== undefined) {
			obj.proofs = CloseAccountMsgProofs.toJSON(message.proofs);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCloseAccount>, I>>(base?: I): MsgCloseAccount {
		return MsgCloseAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCloseAccount>, I>>(object: I): MsgCloseAccount {
		const message = createBaseMsgCloseAccount();
		message.address = object.address ?? "";
		message.denom = object.denom ?? "";
		message.proofs = object.proofs !== undefined && object.proofs !== null ? CloseAccountMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	}
};

export const MsgCloseAccountResponse: MessageFns<MsgCloseAccountResponse, "seiprotocol.seichain.confidentialtransfers.MsgCloseAccountResponse"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.MsgCloseAccountResponse" as const,

	encode(_: MsgCloseAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCloseAccountResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgCloseAccountResponse {
		return {};
	},

	toJSON(_: MsgCloseAccountResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCloseAccountResponse>, I>>(base?: I): MsgCloseAccountResponse {
		return MsgCloseAccountResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCloseAccountResponse>, I>>(_: I): MsgCloseAccountResponse {
		const message = createBaseMsgCloseAccountResponse();
		return message;
	}
};

function createBaseMsgTransfer(): MsgTransfer {
	return {
		from_address: "",
		to_address: "",
		denom: "",
		from_amount_lo: undefined,
		from_amount_hi: undefined,
		to_amount_lo: undefined,
		to_amount_hi: undefined,
		remaining_balance: undefined,
		decryptable_balance: "",
		proofs: undefined,
		auditors: []
	};
}

function createBaseMsgTransferResponse(): MsgTransferResponse {
	return {};
}

function createBaseAuditor(): Auditor {
	return {
		auditor_address: "",
		encrypted_transfer_amount_lo: undefined,
		encrypted_transfer_amount_hi: undefined,
		transfer_amount_lo_validity_proof: undefined,
		transfer_amount_hi_validity_proof: undefined,
		transfer_amount_lo_equality_proof: undefined,
		transfer_amount_hi_equality_proof: undefined
	};
}

function createBaseMsgInitializeAccount(): MsgInitializeAccount {
	return {
		from_address: "",
		denom: "",
		public_key: new Uint8Array(0),
		decryptable_balance: "",
		pending_balance_lo: undefined,
		pending_balance_hi: undefined,
		available_balance: undefined,
		proofs: undefined
	};
}

function createBaseMsgInitializeAccountResponse(): MsgInitializeAccountResponse {
	return {};
}

function createBaseMsgDeposit(): MsgDeposit {
	return { from_address: "", denom: "", amount: 0 };
}

function createBaseMsgDepositResponse(): MsgDepositResponse {
	return {};
}

function createBaseMsgWithdraw(): MsgWithdraw {
	return {
		from_address: "",
		denom: "",
		amount: "",
		decryptable_balance: "",
		remaining_balance_commitment: undefined,
		proofs: undefined
	};
}

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
	return {};
}

function createBaseMsgApplyPendingBalance(): MsgApplyPendingBalance {
	return {
		address: "",
		denom: "",
		new_decryptable_available_balance: "",
		current_pending_balance_counter: 0,
		current_available_balance: undefined
	};
}

function createBaseMsgApplyPendingBalanceResponse(): MsgApplyPendingBalanceResponse {
	return {};
}

function createBaseMsgCloseAccount(): MsgCloseAccount {
	return { address: "", denom: "", proofs: undefined };
}

function createBaseMsgCloseAccountResponse(): MsgCloseAccountResponse {
	return {};
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
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.confidentialtransfers.MsgTransfer", MsgTransfer as never],
	["/seiprotocol.seichain.confidentialtransfers.Auditor", Auditor as never],
	["/seiprotocol.seichain.confidentialtransfers.MsgDeposit", MsgDeposit as never],
	["/seiprotocol.seichain.confidentialtransfers.MsgWithdraw", MsgWithdraw as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.MsgTransfer": {
		aminoType: "confidentialtransfers/MsgTransfer",
		toAmino: (message: MsgTransfer) => ({ ...message }),
		fromAmino: (object: MsgTransfer) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.Auditor": {
		aminoType: "confidentialtransfers/Auditor",
		toAmino: (message: Auditor) => ({ ...message }),
		fromAmino: (object: Auditor) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.MsgDeposit": {
		aminoType: "confidentialtransfers/MsgDeposit",
		toAmino: (message: MsgDeposit) => ({ ...message }),
		fromAmino: (object: MsgDeposit) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.MsgWithdraw": {
		aminoType: "confidentialtransfers/MsgWithdraw",
		toAmino: (message: MsgWithdraw) => ({ ...message }),
		fromAmino: (object: MsgWithdraw) => ({ ...object })
	}
};

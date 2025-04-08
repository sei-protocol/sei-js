import type { Ciphertext } from "./cryptography";

import type {
	CiphertextCiphertextEqualityProof,
	CiphertextValidityProof,
	CloseAccountMsgProofs,
	InitializeAccountMsgProofs,
	TransferMsgProofs,
	WithdrawMsgProofs
} from "./zk";

export interface MsgTransfer {
	from_address: string;
	to_address: string;
	denom: string;
	from_amount_lo?: Ciphertext;
	from_amount_hi?: Ciphertext;
	to_amount_lo?: Ciphertext;
	to_amount_hi?: Ciphertext;
	remaining_balance?: Ciphertext;
	decryptable_balance: string;
	proofs?: TransferMsgProofs;
	auditors: Auditor[];
}

export type MsgTransferResponse = {};

export interface Auditor {
	auditor_address: string;
	encrypted_transfer_amount_lo?: Ciphertext;
	encrypted_transfer_amount_hi?: Ciphertext;
	transfer_amount_lo_validity_proof?: CiphertextValidityProof;
	transfer_amount_hi_validity_proof?: CiphertextValidityProof;
	transfer_amount_lo_equality_proof?: CiphertextCiphertextEqualityProof;
	transfer_amount_hi_equality_proof?: CiphertextCiphertextEqualityProof;
}

export interface MsgInitializeAccount {
	from_address: string;
	denom: string;
	public_key: Uint8Array;
	decryptable_balance: string;
	pending_balance_lo?: Ciphertext;
	pending_balance_hi?: Ciphertext;
	available_balance?: Ciphertext;
	proofs?: InitializeAccountMsgProofs;
}

export type MsgInitializeAccountResponse = {};

export interface MsgDeposit {
	from_address: string;
	denom: string;
	amount: number;
}

export type MsgDepositResponse = {};

export interface MsgWithdraw {
	from_address: string;
	denom: string;
	amount: string;
	decryptable_balance: string;
	remaining_balance_commitment?: Ciphertext;
	proofs?: WithdrawMsgProofs;
}

export type MsgWithdrawResponse = {};

export interface MsgApplyPendingBalance {
	address: string;
	denom: string;
	new_decryptable_available_balance: string;
	current_pending_balance_counter: number;
	current_available_balance?: Ciphertext;
}

export type MsgApplyPendingBalanceResponse = {};

export interface MsgCloseAccount {
	address: string;
	denom: string;
	proofs?: CloseAccountMsgProofs;
}

export type MsgCloseAccountResponse = {};

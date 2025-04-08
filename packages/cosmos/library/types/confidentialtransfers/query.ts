import type { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";

import type { CtAccount, CtAccountWithDenom } from "./confidential";

import type { InitializeAccountMsgProofs, TransferMsgProofs, WithdrawMsgProofs } from "./zk";

export interface GetCtAccountRequest {
	address: string;
	denom: string;
}

export interface GetCtAccountResponse {
	account?: CtAccount;
}

export interface GetAllCtAccountsRequest {
	address: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

export interface GetAllCtAccountsResponse {
	accounts: CtAccountWithDenom[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

export interface DecryptedCtAccount {
	/** serialized public key */
	public_key: Uint8Array;
	/** We use uint64 so JSON print output is consistent with pending_balance_hi */
	pending_balance_lo: number;
	/** hi bits of the pending balance */
	pending_balance_hi: number;
	/** combined pending balance */
	combined_pending_balance: string;
	pending_balance_credit_counter: number;
	/** decrypted available balance */
	available_balance: string;
	/** decrypted aes encrypted available balance */
	decryptable_available_balance: string;
}

export interface ApplyPendingBalanceDecrypted {
	address: string;
	denom: string;
	new_decryptable_available_balance: string;
	current_pending_balance_counter: number;
	current_available_balance: string;
}

export interface InitializeAccountDecrypted {
	from_address: string;
	denom: string;
	pubkey: Uint8Array;
	pending_balance_lo: number;
	pending_balance_hi: number;
	available_balance: string;
	decryptable_balance: string;
	proofs?: InitializeAccountMsgProofs;
}

export interface WithdrawDecrypted {
	from_address: string;
	denom: string;
	amount: string;
	decryptable_balance: string;
	remaining_balance_commitment: string;
	proofs?: WithdrawMsgProofs;
}

export interface TransferDecrypted {
	from_address: string;
	to_address: string;
	denom: string;
	transfer_amount_lo: number;
	transfer_amount_hi: number;
	total_transfer_amount: number;
	remaining_balance_commitment: string;
	decryptable_balance: string;
	proofs?: TransferMsgProofs;
	auditors: string[];
}

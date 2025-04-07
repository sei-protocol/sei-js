export interface TransferMsgProofs {
	remaining_balance_commitment_validity_proof?: CiphertextValidityProof;
	sender_transfer_amount_lo_validity_proof?: CiphertextValidityProof;
	sender_transfer_amount_hi_validity_proof?: CiphertextValidityProof;
	recipient_transfer_amount_lo_validity_proof?: CiphertextValidityProof;
	recipient_transfer_amount_hi_validity_proof?: CiphertextValidityProof;
	remaining_balance_range_proof?: RangeProof;
	remaining_balance_equality_proof?: CiphertextCommitmentEqualityProof;
	transfer_amount_lo_equality_proof?: CiphertextCiphertextEqualityProof;
	transfer_amount_hi_equality_proof?: CiphertextCiphertextEqualityProof;
	transfer_amount_lo_range_proof?: RangeProof;
	transfer_amount_hi_range_proof?: RangeProof;
}

export interface InitializeAccountMsgProofs {
	pubkey_validity_proof?: PubkeyValidityProof;
	zero_pending_balance_lo_proof?: ZeroBalanceProof;
	zero_pending_balance_hi_proof?: ZeroBalanceProof;
	zero_available_balance_proof?: ZeroBalanceProof;
}

export interface WithdrawMsgProofs {
	remaining_balance_range_proof?: RangeProof;
	remaining_balance_equality_proof?: CiphertextCommitmentEqualityProof;
}

export interface CloseAccountMsgProofs {
	zero_available_balance_proof?: ZeroBalanceProof;
	zero_pending_balance_lo_proof?: ZeroBalanceProof;
	zero_pending_balance_hi_proof?: ZeroBalanceProof;
}

export interface PubkeyValidityProof {
	y: Uint8Array;
	z: Uint8Array;
}

export interface CiphertextValidityProof {
	/** First commitment */
	commitment_1: Uint8Array;
	/** Second commitment */
	commitment_2: Uint8Array;
	/** First response */
	response_1: Uint8Array;
	/** Second response */
	response_2: Uint8Array;
}

export interface RangeProof {
	proof: Uint8Array;
	randomness: Uint8Array;
	upper_bound: number;
}

export interface CiphertextCommitmentEqualityProof {
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

export interface ZeroBalanceProof {
	y_p: Uint8Array;
	y_d: Uint8Array;
	z: Uint8Array;
}

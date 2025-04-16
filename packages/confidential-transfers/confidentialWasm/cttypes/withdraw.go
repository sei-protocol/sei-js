package cttypes

import (
	prototypes "confidentialWasm/cttypes/confidentialtransfers"

	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

func NewMsgWithdrawProto(withdraw *types.Withdraw) *prototypes.MsgWithdraw {
	remainingBalanceCommitment := NewCiphertextProto(withdraw.RemainingBalanceCommitment)

	proofs := NewWithdrawMsgProofs(withdraw.Proofs)

	return &prototypes.MsgWithdraw{
		FromAddress:                withdraw.FromAddress,
		Denom:                      withdraw.Denom,
		Amount:                     withdraw.Amount.String(),
		RemainingBalanceCommitment: remainingBalanceCommitment,
		DecryptableBalance:         withdraw.DecryptableBalance,
		Proofs:                     proofs,
	}
}

func NewWithdrawMsgProofs(proofs *types.WithdrawProofs) *prototypes.WithdrawMsgProofs {
	return &prototypes.WithdrawMsgProofs{
		RemainingBalanceRangeProof:    NewRangeProofProto(proofs.RemainingBalanceRangeProof),
		RemainingBalanceEqualityProof: NewCiphertextCommitmentEqualityProofProto(proofs.RemainingBalanceEqualityProof),
	}
}

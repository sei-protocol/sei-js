package cttypes

import (
	prototypes "confidentialWasm/cttypes/confidentialtransfers"

	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

func NewMsgCloseAccountProto(closeAccount *types.CloseAccount) *prototypes.MsgCloseAccount {
	proofs := NewCloseAccountMsgProofs(closeAccount.Proofs)
	return &prototypes.MsgCloseAccount{
		Address: closeAccount.Address,
		Denom:   closeAccount.Denom,
		Proofs:  proofs,
	}
}

func NewCloseAccountMsgProofs(proofs *types.CloseAccountProofs) *prototypes.CloseAccountMsgProofs {
	return &prototypes.CloseAccountMsgProofs{
		ZeroAvailableBalanceProof: NewZeroBalanceProofProto(proofs.ZeroAvailableBalanceProof),
		ZeroPendingBalanceLoProof: NewZeroBalanceProofProto(proofs.ZeroPendingBalanceLoProof),
		ZeroPendingBalanceHiProof: NewZeroBalanceProofProto(proofs.ZeroPendingBalanceHiProof),
	}
}

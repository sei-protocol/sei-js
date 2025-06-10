package cttypes

import (
	prototypes "confidentialWasm/cttypes/confidentialtransfers"

	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

// NewMsgInitializeAccountProto converts the InitializeAccount to MsgInitializeAccount
func NewMsgInitializeAccountProto(initializeAccount *types.InitializeAccount) *prototypes.MsgInitializeAccount {
	pubkeyRaw := *initializeAccount.Pubkey
	pubkey := pubkeyRaw.ToAffineCompressed()

	pendingBalanceLo := NewCiphertextProto(initializeAccount.PendingBalanceLo)

	pendingBalanceHi := NewCiphertextProto(initializeAccount.PendingBalanceHi)

	availableBalance := NewCiphertextProto(initializeAccount.AvailableBalance)

	proofs := NewInitializeAccountMsgProofs(initializeAccount.Proofs)

	return &prototypes.MsgInitializeAccount{
		FromAddress:        initializeAccount.FromAddress,
		Denom:              initializeAccount.Denom,
		PublicKey:          pubkey,
		DecryptableBalance: initializeAccount.DecryptableBalance,
		PendingBalanceLo:   pendingBalanceLo,
		PendingBalanceHi:   pendingBalanceHi,
		AvailableBalance:   availableBalance,
		Proofs:             proofs,
	}
}

func NewInitializeAccountMsgProofs(proofs *types.InitializeAccountProofs) *prototypes.InitializeAccountMsgProofs {
	return &prototypes.InitializeAccountMsgProofs{
		PubkeyValidityProof:       NewPubkeyValidityProofProto(proofs.PubkeyValidityProof),
		ZeroPendingBalanceLoProof: NewZeroBalanceProofProto(proofs.ZeroPendingBalanceLoProof),
		ZeroPendingBalanceHiProof: NewZeroBalanceProofProto(proofs.ZeroPendingBalanceHiProof),
		ZeroAvailableBalanceProof: NewZeroBalanceProofProto(proofs.ZeroAvailableBalanceProof),
	}
}

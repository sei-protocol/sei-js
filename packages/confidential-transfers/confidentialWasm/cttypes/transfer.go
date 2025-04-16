package cttypes

import (
	prototypes "confidentialWasm/cttypes/confidentialtransfers"

	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

func NewMsgTransferProto(transfer *types.Transfer) *prototypes.MsgTransfer {
	fromAmountLo := NewCiphertextProto(transfer.SenderTransferAmountLo)
	fromAmountHi := NewCiphertextProto(transfer.SenderTransferAmountHi)
	toAmountLo := NewCiphertextProto(transfer.RecipientTransferAmountLo)
	toAmountHi := NewCiphertextProto(transfer.RecipientTransferAmountHi)
	remainingBalance := NewCiphertextProto(transfer.RemainingBalanceCommitment)
	proofs := NewTransferMsgProofs(transfer.Proofs)

	// iterate over transfer.Auditors and convert them to cttypes.Auditor
	auditors := make([]*prototypes.Auditor, 0, len(transfer.Auditors))
	for _, auditorData := range transfer.Auditors {
		auditor := NewAuditorProto(auditorData)
		auditors = append(auditors, auditor)
	}

	return &prototypes.MsgTransfer{
		FromAddress:        transfer.FromAddress,
		ToAddress:          transfer.ToAddress,
		Denom:              transfer.Denom,
		FromAmountLo:       fromAmountLo,
		FromAmountHi:       fromAmountHi,
		ToAmountLo:         toAmountLo,
		ToAmountHi:         toAmountHi,
		RemainingBalance:   remainingBalance,
		DecryptableBalance: transfer.DecryptableBalance,
		Proofs:             proofs,
		Auditors:           auditors,
	}
}

func NewTransferMsgProofs(proofs *types.TransferProofs) *prototypes.TransferMsgProofs {
	return &prototypes.TransferMsgProofs{
		RemainingBalanceCommitmentValidityProof: NewCiphertextValidityProofProto(proofs.RemainingBalanceCommitmentValidityProof),
		SenderTransferAmountLoValidityProof:     NewCiphertextValidityProofProto(proofs.SenderTransferAmountLoValidityProof),
		SenderTransferAmountHiValidityProof:     NewCiphertextValidityProofProto(proofs.SenderTransferAmountHiValidityProof),
		RecipientTransferAmountLoValidityProof:  NewCiphertextValidityProofProto(proofs.RecipientTransferAmountLoValidityProof),
		RecipientTransferAmountHiValidityProof:  NewCiphertextValidityProofProto(proofs.RecipientTransferAmountHiValidityProof),
		RemainingBalanceRangeProof:              NewRangeProofProto(proofs.RemainingBalanceRangeProof),
		RemainingBalanceEqualityProof:           NewCiphertextCommitmentEqualityProofProto(proofs.RemainingBalanceEqualityProof),
		TransferAmountLoEqualityProof:           NewCiphertextCiphertextEqualityProofProto(proofs.TransferAmountLoEqualityProof),
		TransferAmountHiEqualityProof:           NewCiphertextCiphertextEqualityProofProto(proofs.TransferAmountHiEqualityProof),
		TransferAmountLoRangeProof:              NewRangeProofProto(proofs.TransferAmountLoRangeProof),
		TransferAmountHiRangeProof:              NewRangeProofProto(proofs.TransferAmountHiRangeProof),
	}
}

func NewAuditorProto(transferAuditor *types.TransferAuditor) *prototypes.Auditor {
	transferAmountLo := NewCiphertextProto(transferAuditor.EncryptedTransferAmountLo)
	transferAmountHi := NewCiphertextProto(transferAuditor.EncryptedTransferAmountHi)
	transferAmountLoValidityProof := NewCiphertextValidityProofProto(transferAuditor.TransferAmountLoValidityProof)
	transferAmountHiValidityProof := NewCiphertextValidityProofProto(transferAuditor.TransferAmountHiValidityProof)
	transferAmountLoEqualityProof := NewCiphertextCiphertextEqualityProofProto(transferAuditor.TransferAmountLoEqualityProof)
	transferAmountHiEqualityProof := NewCiphertextCiphertextEqualityProofProto(transferAuditor.TransferAmountHiEqualityProof)
	return &prototypes.Auditor{
		AuditorAddress:                transferAuditor.Address,
		EncryptedTransferAmountLo:     transferAmountLo,
		EncryptedTransferAmountHi:     transferAmountHi,
		TransferAmountLoValidityProof: transferAmountLoValidityProof,
		TransferAmountHiValidityProof: transferAmountHiValidityProof,
		TransferAmountLoEqualityProof: transferAmountLoEqualityProof,
		TransferAmountHiEqualityProof: transferAmountHiEqualityProof,
	}
}

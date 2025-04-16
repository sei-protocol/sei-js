package cttypes

import (
	prototypes "confidentialWasm/cttypes/confidentialtransfers"

	"github.com/sei-protocol/sei-cryptography/pkg/encryption/elgamal"
	"github.com/sei-protocol/sei-cryptography/pkg/zkproofs"
)

// / Methods in this library are copied from sei-chain. We should find a way to share code once this POC is complete.
func NewRangeProofProto(zkp *zkproofs.RangeProof) *prototypes.RangeProof {
	return &prototypes.RangeProof{
		Proof:      zkp.Proof.MarshalBinary(),
		Randomness: zkp.Randomness.ToAffineCompressed(),
		UpperBound: int64(zkp.UpperBound),
	}
}

func NewCiphertextCommitmentEqualityProofProto(zkp *zkproofs.CiphertextCommitmentEqualityProof) *prototypes.CiphertextCommitmentEqualityProof {
	return &prototypes.CiphertextCommitmentEqualityProof{
		Y0: zkp.Y0.ToAffineCompressed(),
		Y1: zkp.Y1.ToAffineCompressed(),
		Y2: zkp.Y2.ToAffineCompressed(),
		Zr: zkp.Zr.Bytes(),
		Zs: zkp.Zs.Bytes(),
		Zx: zkp.Zx.Bytes(),
	}
}

func NewCiphertextProto(ciphertext *elgamal.Ciphertext) *prototypes.Ciphertext {
	return &prototypes.Ciphertext{
		C: ciphertext.C.ToAffineCompressed(),
		D: ciphertext.D.ToAffineCompressed(),
	}
}

func NewPubkeyValidityProofProto(zkp *zkproofs.PubKeyValidityProof) *prototypes.PubkeyValidityProof {
	return &prototypes.PubkeyValidityProof{
		Y: zkp.Y.ToAffineCompressed(),
		Z: zkp.Z.Bytes(),
	}
}

func NewZeroBalanceProofProto(zkp *zkproofs.ZeroBalanceProof) *prototypes.ZeroBalanceProof {
	return &prototypes.ZeroBalanceProof{
		YP: zkp.Yp.ToAffineCompressed(),
		YD: zkp.Yd.ToAffineCompressed(),
		Z:  zkp.Z.Bytes(),
	}
}

func NewCiphertextValidityProofProto(zkp *zkproofs.CiphertextValidityProof) *prototypes.CiphertextValidityProof {
	return &prototypes.CiphertextValidityProof{
		Commitment_1: zkp.Commitment1.ToAffineCompressed(),
		Commitment_2: zkp.Commitment2.ToAffineCompressed(),
		Response_1:   zkp.Response1.Bytes(),
		Response_2:   zkp.Response2.Bytes(),
	}
}

func NewCiphertextCiphertextEqualityProofProto(zkp *zkproofs.CiphertextCiphertextEqualityProof) *prototypes.CiphertextCiphertextEqualityProof {
	return &prototypes.CiphertextCiphertextEqualityProof{
		Y0: zkp.Y0.ToAffineCompressed(),
		Y1: zkp.Y1.ToAffineCompressed(),
		Y2: zkp.Y2.ToAffineCompressed(),
		Y3: zkp.Y3.ToAffineCompressed(),
		Zr: zkp.Zr.Bytes(),
		Zs: zkp.Zs.Bytes(),
		Zx: zkp.Zx.Bytes(),
	}
}

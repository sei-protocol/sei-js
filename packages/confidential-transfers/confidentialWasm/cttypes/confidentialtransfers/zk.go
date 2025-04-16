package types

import (
	"github.com/coinbase/kryptology/pkg/core/curves"
	"github.com/sei-protocol/sei-cryptography/pkg/encryption/elgamal"
)

func (c *Ciphertext) FromProto() (*elgamal.Ciphertext, error) {
	ed25519Curve := curves.ED25519()

	pointC, err := ed25519Curve.Point.FromAffineCompressed(c.C)
	if err != nil {
		return nil, err
	}

	pointD, err := ed25519Curve.Point.FromAffineCompressed(c.D)
	if err != nil {
		return nil, err
	}

	return &elgamal.Ciphertext{
		C: pointC,
		D: pointD,
	}, nil
}

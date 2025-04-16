package methods

import (
	prototypes "confidentialWasm/cttypes/confidentialtransfers"
	"encoding/base64"
	"fmt"
	"syscall/js"

	"github.com/gogo/protobuf/proto"
	"github.com/sei-protocol/sei-cryptography/pkg/encryption"
	"github.com/sei-protocol/sei-cryptography/pkg/encryption/elgamal"
)

// Decrypts the given values from an account struct.
// Takes the following inputs:
// - SignedDenom: the denom, signed by the sender ([]byte)
// - Ciphertext ([]byte)
func DecryptCiphertext(this js.Value, args []js.Value) interface{} {
	// Parse the input JSON
	if len(args) != 2 {
		fmt.Println("Error:", "invalid num of args")
		return js.ValueOf("error: invalid number of arguments")
	}

	// 1. Parse SignedDenom (Base64-encoded string -> []byte)
	signedDenomBase64 := args[0].String()
	signedDenom, err := base64.StdEncoding.DecodeString(signedDenomBase64)
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: invalid SignedDenom: %s", err))
	}

	// 2. Parse ciphertext (string)
	ciphertextBase64 := args[1].String()
	if ciphertextBase64 == "" {
		fmt.Println("Error:", "ciphertext cant be empty")
		return js.ValueOf("error: Ciphertext cannot be empty")
	}

	ciphertextBytes, err := base64.StdEncoding.DecodeString(ciphertextBase64)
	if err != nil {
		fmt.Println("Error:", "ciphertext cant be empty")
		return js.ValueOf(fmt.Sprintf("error: empty Ciphertext: %s", err))
	}

	var ciphertextProto prototypes.Ciphertext
	err = proto.Unmarshal(ciphertextBytes, &ciphertextProto)
	if err != nil {
		fmt.Println("Error:", "failed to unmarshal ciphertext")
		return js.ValueOf(fmt.Sprintf("error: invalid Ciphertext: %s", err))
	}

	ciphertext, err := ciphertextProto.FromProto()
	if err != nil {
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	teg := elgamal.NewTwistedElgamal()
	keyPair, err := teg.KeyGen(signedDenom)
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	// Decrypt the ciphertext
	ciphertextDecrypted, err := teg.DecryptLargeNumber(keyPair.PrivateKey, ciphertext, elgamal.MaxBits48)
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	return js.ValueOf(ciphertextDecrypted.String())
}

// Decrypts the given values from an account struct.
// Takes the following inputs:
// - SignedDenom: the denom, signed by the sender ([]byte)
// - AESCiphertext ([]byte)
func DecryptAES(this js.Value, args []js.Value) interface{} {
	// Parse the input JSON
	if len(args) != 2 {
		fmt.Println("Error:", "invalid num of args")
		return js.ValueOf("error: invalid number of arguments")
	}

	// 1. Parse SignedDenom (Base64-encoded string -> []byte)
	signedDenomBase64 := args[0].String()
	signedDenom, err := base64.StdEncoding.DecodeString(signedDenomBase64)
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: invalid SignedDenom: %s", err))
	}

	// 2. Parse AESCiphertext (Base64-encoded string -> []byte)
	aesCiphertext := args[1].String()
	if aesCiphertext == "" {
		fmt.Println("Error:", "aes ciphertext cant be empty")
		return js.ValueOf("error: AES Ciphertext cannot be cannot be empty")
	}

	// Get the current balance from the decryptable balance.
	aesKey, err := encryption.GetAESKey(signedDenom)
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}
	decryptedAES, err := encryption.DecryptAESGCM(aesCiphertext, aesKey)
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	return js.ValueOf(decryptedAES.String())
}

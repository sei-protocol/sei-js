package methods

import (
	"confidentialWasm/cttypes"
	prototypes "confidentialWasm/cttypes/confidentialtransfers"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"syscall/js"

	"github.com/coinbase/kryptology/pkg/core/curves"
	"github.com/gogo/protobuf/proto"
	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

// Creates a new TransferProto struct that can be sent to the chain.
// Takes the following inputs:
// - SignedDenom: the denom, signed by the sender ([]byte)
// - Amount: the amount to initialize the account with (*big.Int)
// - Address: the address of the account (string)
// - CurrentDecryptableBalance: the current decryptable balance of the account ([]byte)
// - CurrentAvailableBalance: the current available balance of the account ([]byte)
func NewTransferWASM(this js.Value, args []js.Value) interface{} {
	// Parse the input JSON
	if len(args) != 8 {
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

	// 2. Parse Amount (string -> *uint64)
	amount := args[1].Int()

	// 3. Parse Sender Address (string)
	senderAddress := args[2].String()
	if senderAddress == "" {
		fmt.Println("Error:", "sender addr cannot be empty")
		return js.ValueOf("error: Sender Address cannot be empty")
	}

	// 3. Parse Recipient Address (string)
	recipientAddress := args[3].String()
	if recipientAddress == "" {
		fmt.Println("Error:", "recipient addr cannot be empty")
		return js.ValueOf("error: Recipient Address cannot be empty")
	}

	// 4. Parse Denom (string)
	denom := args[4].String()
	if denom == "" {
		fmt.Println("Error:", "denom cannot be empty")
		return js.ValueOf("error: Denom cannot be empty")
	}

	// 5. Parse CurrentDecryptableBalance (Base64-encoded string -> []byte)
	currentDecryptableBalance := args[5].String()
	if currentDecryptableBalance == "" {
		fmt.Println("Error:", "DecryptableBalance cant be empty")
		return js.ValueOf("error: DecryptableBalance cannot be cannot be empty")
	}

	// 6. Parse CurrentAvailableBalance (Base64-encoded string -> []byte)
	availableBalanceBase64 := args[6].String()
	currentAvailableBalanceBytes, err := base64.StdEncoding.DecodeString(availableBalanceBase64)
	if err != nil {
		fmt.Println("Error:", "ab cant be empty")
		return js.ValueOf(fmt.Sprintf("error: empty CurrentAvailableBalance: %s", err))
	}

	var currentAvailableBalanceProto prototypes.Ciphertext
	err = proto.Unmarshal(currentAvailableBalanceBytes, &currentAvailableBalanceProto)
	if err != nil {
		fmt.Println("Error:", "failed to unmarshal currentAvailableBalance")
		return js.ValueOf(fmt.Sprintf("error: invalid CurrentAvailableBalance: %s", err))
	}

	currentAvailableBalance, err := currentAvailableBalanceProto.FromProto()
	if err != nil {
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	// 7. Get the recipient pubkey. This is a compressed point.
	recipientPubkeyEncoded := args[7].String()
	recipientPubkeyBytes, err := base64.StdEncoding.DecodeString(recipientPubkeyEncoded)
	if err != nil {
		fmt.Println("Error:", "recipient pubkey cant be empty")
		return js.ValueOf(fmt.Sprintf("error: empty recipient pubkey: %s", err))
	}

	recipientPubkey, err := curves.ED25519().Point.FromAffineCompressed(recipientPubkeyBytes)

	// TODO: Add support for auditors
	// 8. Get the auditors, if any.
	//auditorsBase64 := args[8].String()
	//auditorBytes, err := base64.StdEncoding.DecodeString(auditorsBase64)
	//if err != nil {
	//	fmt.Println("Error:", "auditorBytes cant be empty")
	//	return js.ValueOf(fmt.Sprintf("error: empty auditors: %s", err))
	//}

	transfer, err := types.NewTransfer(signedDenom, senderAddress, recipientAddress, denom, currentDecryptableBalance, currentAvailableBalance, uint64(amount), &recipientPubkey, nil)
	if err != nil {
		fmt.Println("Transfer Creation Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	transferProto := cttypes.NewMsgTransferProto(transfer)

	// Return the JSON as a js.Value
	returnString, err := json.MarshalIndent(transferProto, "", "  ")
	if err != nil {
		fmt.Println("Marshal Indent Error:", err)
		return js.ValueOf(fmt.Sprintf("error: failed to serialize output: %s", err))
	}
	return js.ValueOf(string(returnString))
}

package methods

import (
	"confidentialWasm/cttypes"
	prototypes "confidentialWasm/cttypes/confidentialtransfers"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math/big"
	"syscall/js"

	"github.com/gogo/protobuf/proto"
	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

// Creates a new WithdrawProto struct that can be sent to the chain.
// Takes the following inputs:
// - SignedDenom: the denom, signed by the sender ([]byte)
// - Amount: the amount to initialize the account with (*big.Int)
// - Address: the address of the account (string)
// - CurrentDecryptableBalance: the current decryptable balance of the account ([]byte)
// - CurrentAvailableBalance: the current available balance of the account ([]byte)
func NewWithdrawWASM(this js.Value, args []js.Value) interface{} {
	// Parse the input JSON
	if len(args) != 6 {
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

	// 2. Parse Amount (string -> *big.Int)
	amountStr := args[1].String()
	amount := new(big.Int)
	_, ok := amount.SetString(amountStr, 10) // Parse as base-10 integer
	if !ok {
		fmt.Println("Error:", "amount parsing failed")
		return js.ValueOf("error: invalid Amount")
	}

	// 3. Parse Address (string)
	address := args[2].String()
	if address == "" {
		fmt.Println("Error:", "addr cannot be empty")
		return js.ValueOf("error: Address cannot be empty")
	}

	// 4. Parse Denom (string)
	denom := args[3].String()
	if denom == "" {
		fmt.Println("Error:", "denom cannot be empty")
		return js.ValueOf("error: Denom cannot be empty")
	}

	// 5. Parse CurrentDecryptableBalance (Base64-encoded string -> []byte)
	currentDecryptableBalance := args[4].String()
	if currentDecryptableBalance == "" {
		fmt.Println("Error:", "Bal cant be empty")
		return js.ValueOf("error: DecryptableBalnace cannot be cannot be empty")
	}

	// 6. Parse CurrentAvailableBalance (Base64-encoded string -> []byte)
	availableBalanceBase64 := args[5].String()
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
	// Create the Withdraw struct
	if err != nil {
		fmt.Println("Withdraw Creation Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	withdraw, err := types.NewWithdraw(signedDenom, currentAvailableBalance, denom, address, currentDecryptableBalance, amount)
	if err != nil {
		fmt.Println("Withdraw Creation Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	withdrawProto := cttypes.NewMsgWithdrawProto(withdraw)

	// Return the JSON as a js.Value
	returnString, err := json.MarshalIndent(withdrawProto, "", "  ")
	if err != nil {
		fmt.Println("Marshal Indent Error:", err)
		return js.ValueOf(fmt.Sprintf("error: failed to serialize output: %s", err))
	}
	return js.ValueOf(string(returnString))
}

package methods

import (
	"confidentialWasm/cttypes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"syscall/js"

	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

// Creates a new InitializeProto struct that can be sent to the chain.
// Takes the following inputs:
// - SignedDenom: the denom, signed by the sender ([]byte)
// - Address: the address of the account (string)
// - Denom: the denom
func NewInitializeWASM(this js.Value, args []js.Value) interface{} {
	// Parse the input JSON
	if len(args) != 3 {
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

	// 3. Parse Address (string)
	address := args[1].String()
	if address == "" {
		fmt.Println("Error:", "addr cannot be empty")
		return js.ValueOf("error: Address cannot be empty")
	}

	// 4. Parse Denom (string)
	denom := args[2].String()
	if denom == "" {
		fmt.Println("Error:", "denom cannot be empty")
		return js.ValueOf("error: Denom cannot be empty")
	}

	initialize, err := types.NewInitializeAccount(signedDenom, address, denom)
	if err != nil {
		fmt.Println("Initialize Creation Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	initializeProto := cttypes.NewMsgInitializeAccountProto(initialize)

	// Return the JSON as a js.Value
	returnString, err := json.MarshalIndent(initializeProto, "", "  ")
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: failed to serialize output: %s", err))
	}
	return js.ValueOf(string(returnString))
}

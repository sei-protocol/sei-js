package methods

import (
	"confidentialWasm/cttypes"
	prototypes "confidentialWasm/cttypes/confidentialtransfers"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"syscall/js"

	"github.com/gogo/protobuf/proto"
	"github.com/sei-protocol/sei-cryptography/pkg/ct_module/types"
)

// Creates a new CloseAccountProto struct that can be sent to the chain.
// Takes the following inputs:
// - SignedDenom: the denom, signed by the sender ([]byte)
// - Address: the address of the account (string)
// - Denom: the denom
func NewCloseAccountWASM(this js.Value, args []js.Value) interface{} {
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

	// 2. Parse Address (string)
	address := args[1].String()
	if address == "" {
		fmt.Println("Error:", "addr cannot be empty")
		return js.ValueOf("error: Address cannot be empty")
	}

	// 3. Parse Denom (string)
	denom := args[2].String()
	if denom == "" {
		fmt.Println("Error:", "denom cannot be empty")
		return js.ValueOf("error: Denom cannot be empty")
	}

	// 4. Parse PendingBalanceLo (Base64-encoded string -> []byte)
	pendingBalanceLoBase64 := args[3].String()
	pendingBalanceLoBytes, err := base64.StdEncoding.DecodeString(pendingBalanceLoBase64)
	if err != nil {
		fmt.Println("Error:", "pending balance lo cant be empty")
		return js.ValueOf(fmt.Sprintf("error: empty PendingBalanceLo: %s", err))
	}

	var pendingBalanceLoProto prototypes.Ciphertext
	err = proto.Unmarshal(pendingBalanceLoBytes, &pendingBalanceLoProto)
	if err != nil {
		fmt.Println("Error:", "failed to unmarshal pendingBalanceLo")
		return js.ValueOf(fmt.Sprintf("error: invalid pendingBalanceLo: %s", err))
	}

	pendingBalanceLo, err := pendingBalanceLoProto.FromProto()
	if err != nil {
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	// 4. Parse PendingBalanceHi (Base64-encoded string -> []byte)
	pendingBalanceHiBase64 := args[5].String()
	pendingBalanceHiBytes, err := base64.StdEncoding.DecodeString(pendingBalanceHiBase64)
	if err != nil {
		fmt.Println("Error:", "pending balance hi cant be empty")
		return js.ValueOf(fmt.Sprintf("error: empty PendingBalanceHi: %s", err))
	}

	var pendingBalanceHiProto prototypes.Ciphertext
	err = proto.Unmarshal(pendingBalanceHiBytes, &pendingBalanceHiProto)
	if err != nil {
		fmt.Println("Error:", "failed to unmarshal pendingBalanceHi")
		return js.ValueOf(fmt.Sprintf("error: invalid pendingBalanceHi: %s", err))
	}

	pendingBalanceHi, err := pendingBalanceLoProto.FromProto()
	if err != nil {
		return js.ValueOf(fmt.Sprintf("error: %s", err))
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
	if err != nil {
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	closeAccount, err := types.NewCloseAccount(signedDenom, address, denom, pendingBalanceLo, pendingBalanceHi, currentAvailableBalance)
	if err != nil {
		fmt.Println("CloseACcount Creation Error:", err)
		return js.ValueOf(fmt.Sprintf("error: %s", err))
	}

	closeProto := cttypes.NewMsgCloseAccountProto(closeAccount)

	// Return the JSON as a js.Value
	returnString, err := json.MarshalIndent(closeProto, "", "  ")
	if err != nil {
		fmt.Println("Error:", err)
		return js.ValueOf(fmt.Sprintf("error: failed to serialize output: %s", err))
	}
	return js.ValueOf(string(returnString))
}

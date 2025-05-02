package main

import (
	"confidentialWasm/methods"
	"syscall/js"
)

func main() {
	done := make(chan struct{})

	js.Global().Set("createWithdrawStruct", js.FuncOf(methods.NewWithdrawWASM))
	js.Global().Set("createInitializeStruct", js.FuncOf(methods.NewInitializeWASM))
	js.Global().Set("createApplyPendingBalanceStruct", js.FuncOf(methods.NewApplyPendingBalanceWASM))
	js.Global().Set("createTransferStruct", js.FuncOf(methods.NewTransferWASM))
	js.Global().Set("createCloseAccountStruct", js.FuncOf(methods.NewCloseAccountWASM))
	js.Global().Set("decryptCiphertext", js.FuncOf(methods.DecryptCiphertext))
	js.Global().Set("decryptAesCiphertext", js.FuncOf(methods.DecryptAES))
	// Expose a "done" function that closes the channel
	js.Global().Set("done", js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		close(done) // Unblock <-done
		return nil
	}))
	// Create a done channel
	<-done
}

import {  MsgApplyPendingBalance, MsgCloseAccount, MsgInitializeAccount, MsgWithdraw, MsgTransfer } from "@sei-js/cosmos/types/confidentialtransfers"
import { Encoder } from '@sei-js/cosmos/encoding';

import { ctWasmBase64 } from './embeddedWasm';
import { base64FromBytes, base64ToBytes } from '../utils/utils';

const global = globalThis as any;

export class ConfidentialTransfers {
  private go: any;
  private wasmInstance: WebAssembly.Instance | null = null;
  public initialized: boolean = false

  // This constructor runs the wasm_exec script to load the wasm methods into the global object.
  // This enables us to run Go generated wasm code.
  constructor() {
    // Dynamically import wasm_exec.js
    if (typeof global.Go === "undefined") {
      const script = document.createElement("script");
      script.src = "./wasm_exec.cjs"; // Adjust path based on your environment
      document.head.appendChild(script);
    }

    // Wait until wasm_exec.cjs is loaded
    if (typeof global.Go === "undefined") {
      throw new Error("wasm_exec.cjs was not loaded correctly.");
    }

    this.go = new global.Go();
  }

  // Initialize loads the compiled and encoded wasm file into the object.
  async initialize(): Promise<void> {
    if (this.initialized) {
      return
    }
    const wasmBytes = base64ToBytes(ctWasmBase64.trim());
    const { instance } = await WebAssembly.instantiate(wasmBytes, this.go.importObject);

    if (typeof this.go.run !== "function") {
      console.error("Go runtime's 'run' is not a function. Current Go object:", this.go);
      throw new Error("Go runtime is not properly initialized.");
    }

    this.wasmInstance = instance;
    this.go.run(instance);
    this.initialized = true;
  }

  createWithdraw(
    signedDenom: Uint8Array,
    amount: number,
    address: string,
    denom: string,
    currentDecryptableBalance: string,
    currentAvailableBalance: Uint8Array
  ): MsgWithdraw {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }

    const signedDenomBase64 = Buffer.from(signedDenom).toString("base64");
    const availableBalanceBase64 = Buffer.from(currentAvailableBalance).toString("base64");

    if (!global.createWithdrawStruct) {
      throw new Error("createWithdrawStruct is not available in the WebAssembly global scope.");
    }

    const withdrawStruct = global.createWithdrawStruct(
      signedDenomBase64,
      amount.toString(),
      address,
      denom,
      currentDecryptableBalance,
      availableBalanceBase64);

    const withdrawStructJson = JSON.parse(withdrawStruct);
    const result = Encoder.confidentialtransfers.MsgWithdraw.fromJSON(withdrawStructJson)

    return result
  }

  createInitialize(
    signedDenom: Uint8Array,
    address: string,
    denom: string,
  ): MsgInitializeAccount {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }

    const signedDenomBase64 = base64FromBytes(signedDenom)

    if (!global.createInitializeStruct) {
      throw new Error("createInitializeStruct is not available in the WebAssembly global scope.");
    }

    const initializeStruct = global.createInitializeStruct(
      signedDenomBase64,
      address,
      denom,
    )

    const initializeStructJson = JSON.parse(initializeStruct);
    const result = Encoder.confidentialtransfers.MsgInitializeAccount.fromJSON(initializeStructJson)

    // 2) Cast (type assertion) at compile-time
    return result
  }

  createApplyPendingBalance(
    signedDenom: Uint8Array,
    address: string,
    denom: string,
    pendingBalanceCreditCounter: number,
    currentDecryptableBalance: string,
    currentAvailableBalance: Uint8Array,
    currentPendingBalanceLo: Uint8Array,
    currentPendingBalanceHi: Uint8Array,
  ): MsgApplyPendingBalance {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }
    
    const signedDenomBase64 = base64FromBytes(signedDenom);
    const availableBalanceBase64 = base64FromBytes(currentAvailableBalance);
    const pendingBalanceLoBase64 = base64FromBytes(currentPendingBalanceLo);
    const pendingBalanceHiBase64 = base64FromBytes(currentPendingBalanceHi);

    if (!global.createApplyPendingBalanceStruct) {
      throw new Error("createApplyPendingBalanceStruct is not available in the WebAssembly global scope.");
    }

    const applyPendingBalanceStruct = global.createApplyPendingBalanceStruct(
        signedDenomBase64,
        address,
        denom,
        currentDecryptableBalance,
        pendingBalanceCreditCounter,
        availableBalanceBase64,
        pendingBalanceLoBase64,
        pendingBalanceHiBase64);
    
    const applyPendingBalanceStructJson = JSON.parse(applyPendingBalanceStruct);

    const result = Encoder.confidentialtransfers.MsgApplyPendingBalance.fromJSON(applyPendingBalanceStructJson)

    return result
  }

  createTransfer(
    signedDenom: Uint8Array,
    amount: number,
    senderAddress: string,
    recipientAddress: string,
    denom: string,
    currentDecryptableBalance: string,
    currentAvailableBalance: Uint8Array,
    recipientPubkey: Uint8Array,
  ): MsgTransfer {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }

    const signedDenomBase64 = base64FromBytes(signedDenom);
    const availableBalanceBase64 = base64FromBytes(currentAvailableBalance);
    const recipientPubkeyBase64 = base64FromBytes(recipientPubkey);

    if (!global.createTransferStruct) {
      throw new Error("createTransferStruct is not available in the WebAssembly global scope.");
    }

    const transferStruct = global.createTransferStruct(
      signedDenomBase64,
      amount,
      senderAddress,
      recipientAddress,
      denom,
      currentDecryptableBalance,
      availableBalanceBase64,
      recipientPubkeyBase64);

    const transferStructJson = JSON.parse(transferStruct);
    const result = Encoder.confidentialtransfers.MsgTransfer.fromJSON(transferStructJson)

    return result
  }

  createCloseAccount(
    signedDenom: Uint8Array,
    address: string,
    denom: string,
    currentAvailableBalance: Uint8Array,
    currentPendingBalanceLo: Uint8Array,
    currentPendingBalanceHi: Uint8Array,
  ): MsgCloseAccount {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }

    const signedDenomBase64 = base64FromBytes(signedDenom);
    const availableBalanceBase64 = base64FromBytes(currentAvailableBalance);
    const pendingBalanceLoBase64 = base64FromBytes(currentPendingBalanceLo);
    const pendingBalanceHiBase64 = base64FromBytes(currentPendingBalanceHi);

    if (!global.createCloseAccountStruct) {
      throw new Error("createCloseAccountStruct is not available in the WebAssembly global scope.");
    }

    const closeAccountStruct = global.createCloseAccountStruct(
      signedDenomBase64,
      address,
      denom,
      pendingBalanceLoBase64,
      pendingBalanceHiBase64,
      availableBalanceBase64,
    );

    const closeAccountStructJson = JSON.parse(closeAccountStruct);
    const result = Encoder.confidentialtransfers.MsgCloseAccount.fromJSON(closeAccountStructJson)

    return result
  }

  decryptCiphertext(
    signedDenom: Uint8Array,
    ciphertext: Uint8Array
  ): bigint {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }

    const signedDenomBase64 = base64FromBytes(signedDenom);
    const ciphertextBase64 = base64FromBytes(ciphertext);

    if (!global.decryptCiphertext) {
      throw new Error("decryptCiphertext is not available in the WebAssembly global scope.");
    }
    const decryptedCiphertext = global.decryptCiphertext(
      signedDenomBase64,
      ciphertextBase64
    );

    return BigInt(decryptedCiphertext)
  }

  decryptAESCiphertext(
    signedDenom: Uint8Array,
    aesCiphertext: string
  ): bigint {
    if (!this.wasmInstance) {
      throw new Error("WASM module not initialized");
    }

    const signedDenomBase64 = base64FromBytes(signedDenom);

    if (!global.decryptAesCiphertext) {
      throw new Error("decryptAesCiphertext is not available in the WebAssembly global scope.");
    }
    const decryptedCiphertext = global.decryptAesCiphertext(
      signedDenomBase64,
      aesCiphertext
    );

    return BigInt(decryptedCiphertext)
  }
}
import {  MsgApplyPendingBalance, MsgCloseAccount, MsgInitializeAccount, MsgWithdraw, MsgTransfer } from "@sei-js/cosmos/types/confidentialtransfers"
import { ConfidentialTransfers } from "./confidentialTransfers";
import "./wasm_exec.cjs";

export class ConfidentialTransfersWrapper {
  private wasmWrapper: ConfidentialTransfers;

  constructor() {
    this.wasmWrapper = new ConfidentialTransfers();
    this.wasmWrapper.initialize()
  }

  async initialize(): Promise<void> {
    await this.wasmWrapper.initialize();
  }

  createWithdraw(
    signedDenom: Uint8Array,
    amount: number,
    address: string,
    denom: string,
    currentDecryptableBalance: string,
    currentAvailableBalance: Uint8Array
  ): MsgWithdraw {
    const result = this.wasmWrapper.createWithdraw(
      signedDenom,
      amount,
      address,
      denom,
      currentDecryptableBalance,
      currentAvailableBalance
    );
    return result;
  }

  createInitialize(
    signedDenom: Uint8Array,
    address: string,
    denom: string,
  ): MsgInitializeAccount {
    const result = this.wasmWrapper.createInitialize(
      signedDenom,
      address,
      denom,
    );
    return result;
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
    const result = this.wasmWrapper.createApplyPendingBalance(
      signedDenom,
      address,
      denom,
      pendingBalanceCreditCounter,
      currentDecryptableBalance,
      currentAvailableBalance,
      currentPendingBalanceLo,
      currentPendingBalanceHi
    );
    return result;
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
    const result = this.wasmWrapper.createTransfer(
      signedDenom,
      amount,
      senderAddress,
      recipientAddress,
      denom,
      currentDecryptableBalance,
      currentAvailableBalance,
      recipientPubkey,
    );
    return result;
  }

  createCloseAccount(
    signedDenom: Uint8Array,
    address: string,
    denom: string,
    currentAvailableBalance: Uint8Array,
    currentPendingBalanceLo: Uint8Array,
    currentPendingBalanceHi: Uint8Array,
  ): MsgCloseAccount {
    const result = this.wasmWrapper.createCloseAccount(
      signedDenom,
      address,
      denom,
      currentAvailableBalance,
      currentPendingBalanceLo,
      currentPendingBalanceHi
    );
    return result;
  }

  decryptCiphertext(
    signedDenom: Uint8Array,
    ciphertext: Uint8Array,
  ): bigint {
    const result = this.wasmWrapper.decryptCiphertext(
      signedDenom,
      ciphertext
    );
    return result
  }

  decryptAesCiphertext(
    signedDenom: Uint8Array,
    aesCiphertext: string,
  ): bigint {
    const result = this.wasmWrapper.decryptAESCiphertext(
      signedDenom,
      aesCiphertext
    );
    return result
  }
}

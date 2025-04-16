import { Contract, ContractRunner, getBytes, keccak256, toUtf8Bytes } from "ethers";
import { MsgApplyPendingBalance, MsgCloseAccount, MsgInitializeAccount, MsgTransfer, MsgWithdraw, CloseAccountMsgProofs, InitializeAccountMsgProofs, TransferMsgProofs, WithdrawMsgProofs } from "@sei-js/cosmos/types/confidentialtransfers";
import { Encoder } from '@sei-js/cosmos/encoding';
import { CtAccount } from "@sei-js/cosmos/types/confidentialtransfers";
import { ConfidentialTransfersWrapper } from "../payload/confidentialApi";
import { getConfidentialTransfersPrecompileEthersV6Contract } from "@sei-js/evm";
import { toBytes } from "viem";
import { DecryptedAccount, DecryptedPendingBalances } from "./types";

/**
 * Fetches the full confidential account state for a given address and denom.
 *
 * @param address - The 0x or SEI address of the account holder.
 * @param denom - The denomination (e.g., "usei").
 * @param contractRunner - An ethers ContractRunner (wallet or provider).
 * @returns A CtAccount object if found, or null if the account is not initialized.
 */
export async function queryAccountEthers(address: string, denom: string, contractRunner: ContractRunner): Promise<CtAccount | null> {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)
    
    let account
    try {
        account = await confidentialPrecompile.account(
            address,
            denom,
        )
    } catch (error: any) {
        console.log("Error fetching account", error.message)
        return null
    }

    const publicKey = getBytes(account[0])
    
    const pendingBalanceLoBytes = getBytes(account[1])
    const pendingBalanceLo = Encoder.confidentialtransfers.Ciphertext.decode(pendingBalanceLoBytes)

    const pendingBalanceHiBytes = getBytes(account[2])
    const pendingBalanceHi = Encoder.confidentialtransfers.Ciphertext.decode(pendingBalanceHiBytes)

    const pendingBalanceCreditCounter = Number(account[3])

    const availableBalanceBytes = getBytes(account[4])
    const availableBalance = Encoder.confidentialtransfers.Ciphertext.decode(availableBalanceBytes)

    const decryptableBalance = account[5]

    const result = {
        public_key: publicKey,
        pending_balance_lo: pendingBalanceLo,
        pending_balance_hi: pendingBalanceHi,
        pending_balance_credit_counter: pendingBalanceCreditCounter,
        available_balance: availableBalance,
        decryptable_available_balance: decryptableBalance
    }

    return result
}

/**
 * Decrypts the pending balance commitments (lo and hi) using the signed denom.
 *
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param ctAccount - The confidential account object.
 * @returns The lo and hi decrypted balances and the combined total.
 */
export async function decryptPendingBalancesEthers(signedDenom: string, ctAccount: CtAccount): Promise<DecryptedPendingBalances> {
    const api = new ConfidentialTransfersWrapper()
    await api.initialize();
    const signedDenomArray = toBytes(signedDenom)

    let encodedPendingBalanceLo = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.pending_balance_lo!).finish()
    let encodedPendingBalanceHi = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.pending_balance_hi!).finish()

    const pendingBalanceLo = api.decryptCiphertext(signedDenomArray, encodedPendingBalanceLo)
    const pendingBalanceHi = api.decryptCiphertext(signedDenomArray, encodedPendingBalanceHi)

    return {
        pendingBalanceLo: pendingBalanceLo,
        pendingBalanceHi: pendingBalanceHi,
        totalPendingBalance: pendingBalanceLo + (pendingBalanceHi << BigInt(16))
    }
}

/**
 * Decrypts the AES-encrypted available balance (fast-path decryption).
 *
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param ctAccount - The confidential account object.
 * @returns The decrypted balance as a bigint.
 */

export async function decryptDecryptableAvailableBalanceEthers(signedDenom: string, ctAccount: CtAccount): Promise<bigint> {
    const api = new ConfidentialTransfersWrapper()
    await api.initialize();
    const signedDenomArray = toBytes(signedDenom)
    
    const decryptableAvailableBalance = api.decryptAesCiphertext(signedDenomArray, ctAccount.decryptable_available_balance)
    return decryptableAvailableBalance
}

/**
 * Fully decrypts the committed available balance (slow path).
 * Only needed if decryptable balance is insufficient or untrusted.
 *
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param ctAccount - The confidential account object.
 * @returns The decrypted available balance.
 */

export async function decryptAvailableBalanceEthers(signedDenom: string, ctAccount: CtAccount): Promise<bigint> {
    const api = new ConfidentialTransfersWrapper()
    await api.initialize();
    const signedDenomArray = toBytes(signedDenom)
    
    let encodedAvailableBalance = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.available_balance!).finish()

    const availableBalance = api.decryptCiphertext(signedDenomArray, encodedAvailableBalance)
    return availableBalance
}

/**
 * Fully decrypts all relevant balances of a CtAccount.
 *
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param ctAccount - The confidential account object.
 * @param decryptFullAvailableBalance - Whether to fully decrypt the available balance (slow).
 * @returns A decrypted view of the account state.
 */

export async function decryptAccountEthers(signedDenom: string, ctAccount: CtAccount, decryptFullAvailableBalance: boolean): Promise<DecryptedAccount> {
    const api = new ConfidentialTransfersWrapper()
    await api.initialize();

    const decryptedPendingBalances = await decryptPendingBalancesEthers(signedDenom, ctAccount)
    const decryptedDecryptableAvailableBalance = await decryptDecryptableAvailableBalanceEthers(signedDenom, ctAccount)
    const data = {
        publicKey: ctAccount.public_key.toString(),
        pendingBalanceLo: decryptedPendingBalances.pendingBalanceLo,
        pendingBalanceHi: decryptedPendingBalances.pendingBalanceHi,
        totalPendingBalance: decryptedPendingBalances.totalPendingBalance,
        pendingBalanceCreditCounter: ctAccount.pending_balance_credit_counter,
        availableBalance: "Not Decrypted",
        decryptableAvailableBalance: decryptedDecryptableAvailableBalance
    }

    if (decryptFullAvailableBalance) {
        const decryptedAvailableBalance = decryptAvailableBalanceEthers(signedDenom, ctAccount)
        data.availableBalance = decryptedAvailableBalance.toString()
    }

    return data
}

/**
 * Initializes a confidential account on chain with zero balance.
 *
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param address - 0x or sei address of the account.
 * @param denom - The denomination (e.g., "usei").
 * @param contractRunner - The signer to send the transaction.
 * @returns The transaction receipt of the initializeAccount call.
 */
export async function initializeAccountEthers(signedDenom: string, address: string, denom: string, contractRunner: ContractRunner) {
    const api = new ConfidentialTransfersWrapper();
    await api.initialize();

    const signedDenomArray = getBytes(signedDenom)
    const initializePayload = api.createInitialize(
        signedDenomArray,
        address,
        denom,
    );

    return executeInitialize(initializePayload, contractRunner)
}

async function executeInitialize(initializePayload: MsgInitializeAccount, contractRunner: ContractRunner) {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)
    let encodedPendingBalanceLo = Encoder.confidentialtransfers.Ciphertext.encode(initializePayload.pending_balance_lo!).finish()
    let encodedPendingBalanceHi = Encoder.confidentialtransfers.Ciphertext.encode(initializePayload.pending_balance_hi!).finish()
    let encodedAvailableBalance = Encoder.confidentialtransfers.Ciphertext.encode(initializePayload.available_balance!).finish()
    const encodedProofs = Encoder.confidentialtransfers.InitializeAccountMsgProofs.encode(initializePayload.proofs!).finish()

    // Estimate gas
    const estimatedGas = await confidentialPrecompile.initializeAccount.estimateGas(
        initializePayload.from_address,
        initializePayload.denom,
        initializePayload.public_key,
        initializePayload.decryptable_balance,
        encodedPendingBalanceLo,
        encodedPendingBalanceHi,
        encodedAvailableBalance,
        encodedProofs
    );

    // Optional: Add buffer (e.g. +10%)
    const gasLimit = estimatedGas * BigInt(110) / BigInt(100)
    
    const tx = await confidentialPrecompile.initializeAccount(
        initializePayload.from_address,
        initializePayload.denom,
        initializePayload.public_key,
        initializePayload.decryptable_balance,
        encodedPendingBalanceLo,
        encodedPendingBalanceHi,
        encodedAvailableBalance,
        encodedProofs,
        {
            gasLimit, // be generous with gas for local dev
        }
    );

    let receipt = await tx.wait();
    return receipt
}

/**
 * Deposits a visible balance into the confidential account.
 *
 * @param denom - Denomination to deposit into (e.g., "usei").
 * @param amount - Amount in base units (e.g., 1 SEI = 1_000_000).
 * @param contractRunner - The signer to send the transaction.
 * @returns The transaction receipt.
 */
export async function depositEthers(denom: string, amount: number, contractRunner: ContractRunner) {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)

    const estimatedGas = await confidentialPrecompile.deposit.estimateGas(
        denom,
        amount
    )

    const gasLimit = estimatedGas * BigInt(110) / BigInt(100)

    const deposit_tx = await confidentialPrecompile.deposit(
        denom,
        amount,
        {
            gasLimit, // be generous with gas for local dev
        }
    );

    const receipt = await deposit_tx.wait();

    return receipt
}

/**
 * Applies pending balance into available balance for a confidential account.
 *
 * @param address - 0x or sei address of the account holder.
 * @param denom - The denomination.
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param contractRunner - Signer to execute the transaction.
 * @returns The transaction receipt or null if account is missing.
 */
export async function applyPendingBalanceEthers(address: string, denom: string, signedDenom: string, contractRunner: ContractRunner) {
    const api = new ConfidentialTransfersWrapper();
    await api.initialize();

    const ctAccount = await queryAccountEthers(address, denom, contractRunner)
    if (ctAccount == null) {
        return null
    }

    let availableBalanceBase64 = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.available_balance!).finish()
    let pendingBalanceLoBase64 = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.pending_balance_lo!).finish()
    let pendingBalanceHiBase64 = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.pending_balance_hi!).finish()

    const signedDenomArray = getBytes(signedDenom)
    const applyPendingBalancePayload = api.createApplyPendingBalance(
        signedDenomArray,
        address,
        denom,
        ctAccount?.pending_balance_credit_counter,
        ctAccount?.decryptable_available_balance,
        availableBalanceBase64,
        pendingBalanceLoBase64,
        pendingBalanceHiBase64
    );

    return executeApplyPendingBalance(applyPendingBalancePayload, contractRunner)
}

async function executeApplyPendingBalance(applyPendingBalancePayload: MsgApplyPendingBalance, contractRunner: ContractRunner) {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)
    
    const encodedAvailableBalance = Encoder.confidentialtransfers.Ciphertext.encode(applyPendingBalancePayload.current_available_balance!).finish()
    const estimatedGas = await confidentialPrecompile.applyPendingBalance.estimateGas(
        applyPendingBalancePayload.denom,
        applyPendingBalancePayload.new_decryptable_available_balance,
        applyPendingBalancePayload.current_pending_balance_counter,
        encodedAvailableBalance,
    )

    const gasLimit = estimatedGas * BigInt(110) / BigInt(100)
    
    const apply_pending_balance_tx = await confidentialPrecompile.applyPendingBalance(
        applyPendingBalancePayload.denom,
        applyPendingBalancePayload.new_decryptable_available_balance,
        applyPendingBalancePayload.current_pending_balance_counter,
        encodedAvailableBalance,
        {
            gasLimit
        }
    );

    const receipt = await apply_pending_balance_tx.wait();
    return receipt
}

/**
 * Withdraws a specified amount from the available balance.
 *
 * @param address - 0x or sei address to withdraw from.
 * @param denom - The denomination (e.g., "usei").
 * @param amount - Amount to withdraw in base units.
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param contractRunner - Signer to submit the transaction.
 * @returns Transaction receipt or null if account not found.
 */
export async function withdrawEthers(address: string, denom: string, amount: number, signedDenom: string, contractRunner: ContractRunner) {
    const api = new ConfidentialTransfersWrapper();
    await api.initialize();

    const ctAccount = await queryAccountEthers(address, denom, contractRunner)
    if (ctAccount == null) {
        return null
    }

    let availableBalanceBase64 = Encoder.confidentialtransfers.Ciphertext.encode(ctAccount.available_balance!).finish()

    const signedDenomArray = getBytes(signedDenom)
    const withdrawPayload = api.createWithdraw(
        signedDenomArray,
        amount,
        address,
        denom,
        ctAccount.decryptable_available_balance,
        availableBalanceBase64
    );

    return executeWithdraw(withdrawPayload, contractRunner)
}

async function executeWithdraw(withdrawPayload: MsgWithdraw, contractRunner: ContractRunner) {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)
    const encodedAvailableBalance = Encoder.confidentialtransfers.Ciphertext.encode(withdrawPayload.remaining_balance_commitment!).finish()
    const proofs = Encoder.confidentialtransfers.WithdrawMsgProofs.encode(withdrawPayload.proofs!).finish()

    const estimatedGas = await confidentialPrecompile.withdraw.estimateGas(
        withdrawPayload.denom,
        withdrawPayload.amount,
        withdrawPayload.decryptable_balance,
        encodedAvailableBalance,
        proofs
    )

    const gasLimit = estimatedGas * BigInt(110) / BigInt(100)

    const withdraw_tx = await confidentialPrecompile.withdraw(
        withdrawPayload.denom,
        withdrawPayload.amount,
        withdrawPayload.decryptable_balance,
        encodedAvailableBalance,
        proofs,
        {
            gasLimit
        }
    );

    const receipt = await withdraw_tx.wait();

    return receipt
}

/**
 * Transfers funds from one confidential account to another.
 *
 * @param senderAddress - 0x or sei address of the sender.
 * @param recipientAddress - 0x or sei address of the recipient.
 * @param denom - The denomination of the transfer.
 * @param amount - Amount to transfer (in base units).
 * @param signedDenom - Signature of the sender over the hashed denom.
 * @param contractRunner - Signer to send the transaction.
 * @returns Transaction receipt or null if accounts not found.
 */
export async function transferEthers(senderAddress: string, recipientAddress: string, denom: string, amount: number, signedDenom: string, contractRunner: ContractRunner) {
    const api = new ConfidentialTransfersWrapper();
    await api.initialize();

    const senderAccount = await queryAccountEthers(senderAddress, denom, contractRunner)
    if (senderAccount == null) {
        return null
    }

    const recipientAccount = await queryAccountEthers(recipientAddress, denom, contractRunner)
    if (recipientAccount == null) {
        return null
    }

    let availableBalanceBase64 = Encoder.confidentialtransfers.Ciphertext.encode(senderAccount.available_balance!).finish()

    const signedDenomArray = getBytes(signedDenom)
    const transferPayload = api.createTransfer(
        signedDenomArray,
        amount,
        senderAddress,
        recipientAddress,
        denom,
        senderAccount.decryptable_available_balance,
        availableBalanceBase64,
        recipientAccount.public_key
    );

    return executeTransfer(transferPayload, contractRunner)
}

async function executeTransfer(transferPayload: MsgTransfer, contractRunner: ContractRunner) {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)

    const encodedFromAmountLo = Encoder.confidentialtransfers.Ciphertext.encode(transferPayload.from_amount_lo!).finish()
    const encodedFromAmountHi = Encoder.confidentialtransfers.Ciphertext.encode(transferPayload.from_amount_hi!).finish()
    const encodedToAmountLo = Encoder.confidentialtransfers.Ciphertext.encode(transferPayload.to_amount_lo!).finish()
    const encodedToAmountHi = Encoder.confidentialtransfers.Ciphertext.encode(transferPayload.to_amount_hi!).finish()
    const encodedRemainingBalance = Encoder.confidentialtransfers.Ciphertext.encode(transferPayload.remaining_balance!).finish()

    const proofs = Encoder.confidentialtransfers.TransferMsgProofs.encode(transferPayload.proofs!).finish()

    const estimatedGas = await confidentialPrecompile.transfer.estimateGas(
        transferPayload.to_address,
        transferPayload.denom,
        encodedFromAmountLo,
        encodedFromAmountHi,
        encodedToAmountLo,
        encodedToAmountHi,
        encodedRemainingBalance,
        transferPayload.decryptable_balance,
        proofs
    )

    const gasLimit = estimatedGas * BigInt(110) / BigInt(100)

    const transfer_tx = await confidentialPrecompile.transfer(
        transferPayload.to_address,
        transferPayload.denom,
        encodedFromAmountLo,
        encodedFromAmountHi,
        encodedToAmountLo,
        encodedToAmountHi,
        encodedRemainingBalance,
        transferPayload.decryptable_balance,
        proofs,
        {
            gasLimit
        }
    );

    const receipt = await transfer_tx.wait();
    return receipt
}

/**
 * Closes a confidential account and deletes all associated data on chain.
 *
 * @param address - 0x or sei address of the account.
 * @param denom - Denomination to close.
 * @param signedDenom - Signature over the hashed denom generated by getDenomToSignEthers.
 * @param contractRunner - Signer authorized to close the account.
 * @returns Transaction receipt or null if the account does not exist.
 */
export async function closeAccountEthers(address: string, denom: string, signedDenom: string, contractRunner: ContractRunner) {
    const api = new ConfidentialTransfersWrapper();
    await api.initialize();

    const account = await queryAccountEthers(address, denom, contractRunner)
    if (account == null) {
        return null
    }

    const availableBalanceBase64 = Encoder.confidentialtransfers.Ciphertext.encode(account.available_balance!).finish()
    const pendingBalanceLoBase64 = Encoder.confidentialtransfers.Ciphertext.encode(account.pending_balance_lo!).finish()
    const pendingBalanceHiBase64 = Encoder.confidentialtransfers.Ciphertext.encode(account.pending_balance_hi!).finish()
    const signedDenomArray = getBytes(signedDenom)

    const closeAccountPayload = await api.createCloseAccount(
        signedDenomArray,
        address,
        denom,
        availableBalanceBase64,
        pendingBalanceLoBase64,
        pendingBalanceHiBase64
    )

    return executeCloseAccount(closeAccountPayload, contractRunner)
}

async function executeCloseAccount(closeAccountPayload: MsgCloseAccount, contractRunner: ContractRunner) {
    const confidentialPrecompile = getConfidentialTransfersPrecompileEthersV6Contract(contractRunner)

    const proofs = Encoder.confidentialtransfers.CloseAccountMsgProofs.encode(closeAccountPayload.proofs!).finish()
    
    const estimatedGas = await confidentialPrecompile.closeAccount.estimateGas(
        closeAccountPayload.denom,
        proofs,
    )
    
    const gasLimit = estimatedGas * BigInt(110) / BigInt(100)

    const close_tx = await confidentialPrecompile.closeAccount(
        closeAccountPayload.denom,
        proofs,
        {
            gasLimit
        }
    );
    
    const receipt = await close_tx.wait();
    return receipt
}

/**
 * Hashes a denom into the format expected by the signing process ("ct:" + denom).
 * Signing this hash generates a secret from which the confidential balances' private keypair can be derived.
 *
 * @param denom - The denom string (e.g., "usei").
 * @returns A keccak256 hash of the prefixed denom, ready to sign.
 */
export function getDenomToSignEthers(denom: string) {
    const appendedDenom = "ct:" + denom
    const result = keccak256(toUtf8Bytes(appendedDenom))
    return result;
}

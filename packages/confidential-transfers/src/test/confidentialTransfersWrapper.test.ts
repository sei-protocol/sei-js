import { ConfidentialTransfersWrapper } from '../payload/confidentialApi';
import { getBytes } from 'ethers';
import { Encoder } from '@sei-js/cosmos/encoding';
import { CtAccount } from '@sei-js/cosmos/types/confidentialtransfers';
import sampleAccount from './testData.json';

describe('ConfidentialTransfersWrapper', () => {
  let wrapper: ConfidentialTransfersWrapper;
  let account: CtAccount;
  let signedDenom: Uint8Array;
  let recipientPubkey: Uint8Array;

  beforeEach(async () => {
    wrapper = new ConfidentialTransfersWrapper();
    await wrapper.initialize();
    // Initialize the account from sampleAccount.json
    account = {
      public_key: new Uint8Array(sampleAccount.public_key),
      pending_balance_lo: {
        c: new Uint8Array(sampleAccount.pending_balance_lo.c),
        d: new Uint8Array(sampleAccount.pending_balance_lo.d),
      },
      pending_balance_hi: {
        c: new Uint8Array(sampleAccount.pending_balance_hi.c),
        d: new Uint8Array(sampleAccount.pending_balance_hi.d),
      },
      pending_balance_credit_counter: sampleAccount.pending_balance_credit_counter,
      available_balance: {
        c: new Uint8Array(sampleAccount.available_balance.c),
        d: new Uint8Array(sampleAccount.available_balance.d),
      },
      decryptable_available_balance: sampleAccount.decryptable_available_balance,
    } as CtAccount;

    signedDenom = getBytes(sampleAccount.signedDenom);
    recipientPubkey = new Uint8Array(sampleAccount.recipientPubkey);
  });

  test('createInitialize should create a valid MsgInitializeAccount', async () => {

    const result = wrapper.createInitialize(signedDenom, sampleAccount.address, sampleAccount.denom);

    expect(result.from_address).toBe(sampleAccount.address);
    expect(result.denom).toBe(sampleAccount.denom);

    const decryptedBalance = wrapper.decryptAesCiphertext(signedDenom, result.decryptable_balance);
    expect(decryptedBalance).toBe(0n);

    const pendingBalanceLo = Encoder.confidentialtransfers.Ciphertext.encode(result.pending_balance_lo!).finish();
    const pendingBalanceLoDecrypted = wrapper.decryptCiphertext(signedDenom, pendingBalanceLo);
    expect(pendingBalanceLoDecrypted).toBe(0n);

    const pendingBalanceHi = Encoder.confidentialtransfers.Ciphertext.encode(result.pending_balance_hi!).finish();
    const pendingBalanceHiDecrypted = wrapper.decryptCiphertext(signedDenom, pendingBalanceHi);
    expect(pendingBalanceHiDecrypted).toBe(0n);

    const availableBalance = Encoder.confidentialtransfers.Ciphertext.encode(result.available_balance!).finish();
    const availableBalanceDecrypted = wrapper.decryptCiphertext(signedDenom, availableBalance);
    expect(availableBalanceDecrypted).toBe(0n);
  });

  test('createWithdraw should create a valid MsgWithdraw', async () => {
    const amount = 20000;
    const currentAvailableBalanceEncoded = Encoder.confidentialtransfers.Ciphertext.encode(account.available_balance!).finish();

    const result = wrapper.createWithdraw(
      signedDenom,
      amount,
      sampleAccount.address,
      sampleAccount.denom,
      account.decryptable_available_balance,
      currentAvailableBalanceEncoded
    );

    expect(result.from_address).toBe(sampleAccount.address);
    expect(result.denom).toBe(sampleAccount.denom);
    expect(result.amount).toBe(amount.toString());

    const newDecryptableBalance = wrapper.decryptAesCiphertext(signedDenom, result.decryptable_balance);
    const expectedRemainingBalance = BigInt(100000 - amount);
    expect(newDecryptableBalance).toBe(expectedRemainingBalance);

    const remainingBalanceCommitment = Encoder.confidentialtransfers.Ciphertext.encode(result.remaining_balance_commitment!).finish();
    const remainaingBalanceCommitmentDecrypted = wrapper.decryptCiphertext(signedDenom, remainingBalanceCommitment);
    expect(remainaingBalanceCommitmentDecrypted).toBe(expectedRemainingBalance);
  });

  test('createApplyPendingBalance should create a valid MsgApplyPendingBalance', async () => {
    const currentAvailableBalanceEncoded = Encoder.confidentialtransfers.Ciphertext.encode(account.available_balance!).finish();
    const pendingBalanceLoEncoded = Encoder.confidentialtransfers.Ciphertext.encode(account.pending_balance_lo!).finish();
    const pendingBalanceHiEncoded = Encoder.confidentialtransfers.Ciphertext.encode(account.pending_balance_hi!).finish();
    
    const result = wrapper.createApplyPendingBalance(
      signedDenom,
      sampleAccount.address,
      sampleAccount.denom,
      account.pending_balance_credit_counter,
      account.decryptable_available_balance,
      currentAvailableBalanceEncoded,
      pendingBalanceLoEncoded,
      pendingBalanceHiEncoded
    );

    expect(result.address).toBe(sampleAccount.address);
    expect(result.denom).toBe(sampleAccount.denom);
    expect(result.current_pending_balance_counter).toBe(account.pending_balance_credit_counter);
    
    const encodedCurrentAvailableBalance = Encoder.confidentialtransfers.Ciphertext.encode(account.available_balance!).finish();
    expect(encodedCurrentAvailableBalance).toStrictEqual(currentAvailableBalanceEncoded);

    const newDecryptableBalance = wrapper.decryptAesCiphertext(signedDenom, result.new_decryptable_available_balance);
    expect(newDecryptableBalance).toBe(300000n)
  });

  test('createTransfer should create a valid MsgTransfer', async () => {
    const amount = 30000; // Example transfer amount

    const currentAvailableBalanceEncoded = Encoder.confidentialtransfers.Ciphertext.encode(account.available_balance!).finish();

    const result = wrapper.createTransfer(
      signedDenom,
      amount,
      sampleAccount.address,
      sampleAccount.recipientAddress,
      sampleAccount.denom,
      account.decryptable_available_balance,
      currentAvailableBalanceEncoded,
      recipientPubkey
    );

    expect(result.from_address).toBe(sampleAccount.address);
    expect(result.to_address).toBe(sampleAccount.recipientAddress);
    expect(result.denom).toBe(sampleAccount.denom);

    const newDecryptableBalance = wrapper.decryptAesCiphertext(signedDenom, result.decryptable_balance);
    const expectedRemainingBalance = BigInt(100000 - amount); // Assuming initial available balance is 100000
    expect(newDecryptableBalance).toBe(expectedRemainingBalance);

    const remainingBalanceCommitment = Encoder.confidentialtransfers.Ciphertext.encode(result.remaining_balance!).finish();
    const remainingBalanceCommitmentDecrypted = wrapper.decryptCiphertext(signedDenom, remainingBalanceCommitment);
    expect(remainingBalanceCommitmentDecrypted).toBe(expectedRemainingBalance);

    const fromAmountLo = Encoder.confidentialtransfers.Ciphertext.encode(result.from_amount_lo!).finish();
    const fromAmountLoDecrypted = wrapper.decryptCiphertext(signedDenom, fromAmountLo);

    const fromAmountHi = Encoder.confidentialtransfers.Ciphertext.encode(result.from_amount_hi!).finish();
    const fromAmountHiDecrypted = wrapper.decryptCiphertext(signedDenom, fromAmountHi);

    expect(fromAmountHiDecrypted * BigInt(2^16) + fromAmountLoDecrypted).toBe(BigInt(amount));
    // TODO: Probably add a test for to_amount_lo and to_amount_hi if we add Encryption to the wasm library.
  });
});

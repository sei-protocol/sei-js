export interface DecryptedAccount {
  publicKey: `0x${string}` | string, // serialized public key
  pendingBalanceLo: bigint,  // lo bits of the pending balance
  pendingBalanceHi: bigint, // hi bits of the pending balance
  totalPendingBalance: bigint,
  pendingBalanceCreditCounter: number,
  availableBalance: string // elgamal encoded balance
  decryptableAvailableBalance: bigint // aes encoded balance
}

export interface DecryptedPendingBalances {
    pendingBalanceLo: bigint
    pendingBalanceHi: bigint
    totalPendingBalance: bigint
}
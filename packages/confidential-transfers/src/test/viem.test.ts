import {
  queryAccountViem,
  decryptPendingBalancesViem,
  decryptDecryptableAvailableBalanceViem,
  decryptAvailableBalanceViem,
  decryptAccountViem,
  getInitializeAccountViemArgs,
  getDepositViemArgs,
  getApplyPendingBalancesViemArgs,
  getWithdrawViemArgs,
  getTransferViemArgs,
  CtAccountResponse,
} from '../interface/viem'
import { PublicClient } from 'viem'
import sampleAccount from './testData.json';

const validAddress = sampleAccount.address as `0x${string}`
const invalidAddress = '0x123'
const validDenom = sampleAccount.denom
const invalidDenom = ''
const validSignedDenom = sampleAccount.signedDenom as `0x${string}`
const invalidSignedDenom = '0x' + 'a'.repeat(128) as `0x${string}`
const validAmount = BigInt(1000)
const invalidAmount = BigInt(0)

const mockClient = {} as PublicClient
const mockCtAccountResponse = {} as CtAccountResponse

describe('Sanity checks for viem.ts functions', () => {
  describe('queryAccountViem', () => {
    test('throws on invalid address', async () => {
      await expect(queryAccountViem(mockClient, invalidAddress, validDenom)).rejects.toThrow('Invalid address format')
    })

    test('throws on empty denom', async () => {
      await expect(queryAccountViem(mockClient, validAddress, invalidDenom)).rejects.toThrow('Denom cannot be empty')
    })
  })

  describe('decryptPendingBalancesViem', () => {
    test('throws on invalid signedDenom', async () => {
      await expect(decryptPendingBalancesViem(invalidSignedDenom, mockCtAccountResponse)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('decryptDecryptableAvailableBalanceViem', () => {
    test('throws on invalid signedDenom', async () => {
      await expect(decryptDecryptableAvailableBalanceViem(invalidSignedDenom, mockCtAccountResponse)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('decryptAvailableBalanceViem', () => {
    test('throws on invalid signedDenom', async () => {
      await expect(decryptAvailableBalanceViem(invalidSignedDenom, mockCtAccountResponse)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('decryptAccountViem', () => {
    test('throws on invalid signedDenom', async () => {
      await expect(decryptAccountViem(invalidSignedDenom, mockCtAccountResponse, false)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('getInitializeAccountViemArgs', () => {
    test('throws on invalid address', async () => {
      await expect(getInitializeAccountViemArgs(validSignedDenom, invalidAddress, validDenom)).rejects.toThrow('Invalid address format')
    })

    test('throws on invalid signedDenom', async () => {
      await expect(getInitializeAccountViemArgs(invalidSignedDenom, validAddress, validDenom)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('getDepositViemArgs', () => {
    test('throws on invalid amount', () => {
      expect(() => getDepositViemArgs(validAddress, validDenom, invalidAmount)).toThrow('Amount must be a positive number')
    })

    test('throws on empty denom', () => {
      expect(() => getDepositViemArgs(validAddress, '', validAmount)).toThrow('Denom cannot be empty')
    })
  })

  describe('getApplyPendingBalancesViemArgs', () => {
    test('throws on invalid address', async () => {
      await expect(getApplyPendingBalancesViemArgs(invalidAddress, validDenom, mockClient, validSignedDenom)).rejects.toThrow('Invalid address format')
    })

    test('throws on invalid signedDenom', async () => {
      await expect(getApplyPendingBalancesViemArgs(validAddress, validDenom, mockClient, invalidSignedDenom)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('getWithdrawViemArgs', () => {
    test('throws on zero amount', async () => {
      await expect(getWithdrawViemArgs(validAddress, validDenom, 0, mockClient, validSignedDenom)).rejects.toThrow('Amount must be a positive number')
    })

    test('throws on empty denom', async () => {
      await expect(getWithdrawViemArgs(validAddress, '', 100, mockClient, validSignedDenom)).rejects.toThrow('Denom cannot be empty')
    })

    test('throws on invalid signedDenom', async () => {
      await expect(getWithdrawViemArgs(validAddress, validDenom, 100, mockClient, invalidSignedDenom)).rejects.toThrow('Invalid signedDenom format')
    })
  })

  describe('getTransferViemArgs', () => {
    test('throws on invalid sender address', async () => {
      await expect(getTransferViemArgs(invalidAddress, validAddress, validDenom, 100, mockClient, validSignedDenom)).rejects.toThrow('Invalid sender address format')
    })

    test('throws on invalid recipient address', async () => {
      await expect(getTransferViemArgs(validAddress, invalidAddress, validDenom, 100, mockClient, validSignedDenom)).rejects.toThrow('Invalid recipient address format')
    })

    test('throws on invalid signedDenom', async () => {
      await expect(getTransferViemArgs(validAddress, validAddress, validDenom, 100, mockClient, invalidSignedDenom)).rejects.toThrow('Invalid signedDenom format')
    })

    test('throws on empty denom', async () => {
      await expect(getTransferViemArgs(validAddress, validAddress, '', 100, mockClient, validSignedDenom)).rejects.toThrow('Denom cannot be empty')
    })

    test('throws on zero amount', async () => {
      await expect(getTransferViemArgs(validAddress, validAddress, validDenom, 0, mockClient, validSignedDenom)).rejects.toThrow('Amount must be a positive number')
    })
  })
})

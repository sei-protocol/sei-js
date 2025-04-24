import {
    queryAccountEthers,
    decryptPendingBalancesEthers,
    decryptDecryptableAvailableBalanceEthers,
    decryptAvailableBalanceEthers,
    decryptAccountEthers,
    initializeAccountEthers,
    depositToPrivateBalanceEthers,
    applyPendingBalanceEthers,
    withdrawFromPrivateBalanceEthers,
    confidentialTransferEthers,
    closeAccountEthers,
    getDenomToSignEthers
} from '../interface/ethers'

import { CtAccount } from '@sei-js/cosmos/types/confidentialtransfers'
import { ContractRunner } from 'ethers'
import sampleAccount from './testData.json';

const validAddress = sampleAccount.address
const invalidAddress = '0x123'
const validDenom = sampleAccount.denom
const invalidDenom = ''
const validSignedDenom = sampleAccount.signedDenom
const invalidSignedDenom = '0x' + 'a'.repeat(128)
const validAmount = 1000
const invalidAmount = 0

const mockContractRunner = {} as ContractRunner
const mockCtAccount = {} as CtAccount

describe('Sanity checks for ethers.ts functions', () => {
    describe('queryAccountEthers', () => {
        test('throws on invalid address', async () => {
            await expect(queryAccountEthers(invalidAddress, validDenom, mockContractRunner)).rejects.toThrow('Invalid address format')
        })

        test('throws on empty denom', async () => {
            await expect(queryAccountEthers(validAddress, invalidDenom, mockContractRunner)).rejects.toThrow('Denom cannot be empty')
        })
    })

    describe('decryptPendingBalancesEthers', () => {
        test('throws on invalid signedDenom', async () => {
            await expect(decryptPendingBalancesEthers(invalidSignedDenom, mockCtAccount)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('decryptDecryptableAvailableBalanceEthers', () => {
        test('throws on invalid signedDenom', async () => {
            await expect(decryptDecryptableAvailableBalanceEthers(invalidSignedDenom, mockCtAccount)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('decryptAvailableBalanceEthers', () => {
        test('throws on invalid signedDenom', async () => {
            await expect(decryptAvailableBalanceEthers(invalidSignedDenom, mockCtAccount)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('decryptAccountEthers', () => {
        test('throws on invalid signedDenom', async () => {
            await expect(decryptAccountEthers(invalidSignedDenom, mockCtAccount, false)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('initializeAccountEthers', () => {
        test('throws on invalid address', async () => {
            await expect(initializeAccountEthers(validSignedDenom, invalidAddress, validDenom, mockContractRunner)).rejects.toThrow('Invalid address format')
        })

        test('throws on empty denom', async () => {
            await expect(initializeAccountEthers(validSignedDenom, validAddress, invalidDenom, mockContractRunner)).rejects.toThrow('Denom cannot be empty')
        })

        test('throws on invalid signedDenom', async () => {
            await expect(initializeAccountEthers(invalidSignedDenom, validAddress, validDenom, mockContractRunner)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('depositToPrivateBalanceEthers', () => {
        test('throws on empty denom', async () => {
            await expect(depositToPrivateBalanceEthers(invalidDenom, validAmount, mockContractRunner)).rejects.toThrow('Denom cannot be empty')
        })

        test('throws on invalid amount', async () => {
            await expect(depositToPrivateBalanceEthers(validDenom, invalidAmount, mockContractRunner)).rejects.toThrow('Amount must be a positive number')
        })
    })

    describe('applyPendingBalanceEthers', () => {
        test('throws on invalid address', async () => {
            await expect(applyPendingBalanceEthers(invalidAddress, validDenom, validSignedDenom, mockContractRunner)).rejects.toThrow('Invalid address format')
        })

        test('throws on empty denom', async () => {
            await expect(applyPendingBalanceEthers(validAddress, invalidDenom, validSignedDenom, mockContractRunner)).rejects.toThrow('Denom cannot be empty')
        })

        test('throws on invalid signedDenom', async () => {
            await expect(applyPendingBalanceEthers(validAddress, validDenom, invalidSignedDenom, mockContractRunner)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('withdrawFromPrivateBalanceEthers', () => {
        test('throws on invalid address', async () => {
            await expect(withdrawFromPrivateBalanceEthers(invalidAddress, validDenom, validAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Invalid address format')
        })

        test('throws on empty denom', async () => {
            await expect(withdrawFromPrivateBalanceEthers(validAddress, invalidDenom, validAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Denom cannot be empty')
        })

        test('throws on invalid amount', async () => {
            await expect(withdrawFromPrivateBalanceEthers(validAddress, validDenom, invalidAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Amount must be a positive number')
        })

        test('throws on invalid signedDenom', async () => {
            await expect(withdrawFromPrivateBalanceEthers(validAddress, validDenom, validAmount, invalidSignedDenom, mockContractRunner)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('confidentialTransferEthers', () => {
        test('throws on invalid sender address', async () => {
            await expect(confidentialTransferEthers(invalidAddress, validAddress, validDenom, validAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Invalid sender address format')
        })

        test('throws on invalid recipient address', async () => {
            await expect(confidentialTransferEthers(validAddress, invalidAddress, validDenom, validAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Invalid recipient address format')
        })

        test('throws on empty denom', async () => {
            await expect(confidentialTransferEthers(validAddress, validAddress, invalidDenom, validAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Invalid denomination')
        })

        test('throws on invalid amount', async () => {
            await expect(confidentialTransferEthers(validAddress, validAddress, validDenom, invalidAmount, validSignedDenom, mockContractRunner)).rejects.toThrow('Amount must be a positive number')
        })

        test('throws on invalid signedDenom', async () => {
            await expect(confidentialTransferEthers(validAddress, validAddress, validDenom, validAmount, invalidSignedDenom, mockContractRunner)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('closeAccountEthers', () => {
        test('throws on invalid address', async () => {
            await expect(closeAccountEthers(invalidAddress, validDenom, validSignedDenom, mockContractRunner)).rejects.toThrow('Invalid address format')
        })

        test('throws on empty denom', async () => {
            await expect(closeAccountEthers(validAddress, invalidDenom, validSignedDenom, mockContractRunner)).rejects.toThrow('Denom cannot be empty')
        })

        test('throws on invalid signedDenom', async () => {
            await expect(closeAccountEthers(validAddress, validDenom, invalidSignedDenom, mockContractRunner)).rejects.toThrow('Invalid signedDenom format')
        })
    })

    describe('getDenomToSignEthers', () => {
        test('throws on empty denom', () => {
            expect(() => getDenomToSignEthers('')).toThrow('Denom cannot be empty')
        })
    })
})

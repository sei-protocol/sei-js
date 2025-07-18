/**
 * The address of the Confidential Transfers precompile contract.
 * This contract facilitates the interaction with the Confidential Transfers module using the EVM.
 * @category Address
 */
export const CONFIDENTIAL_TRANSFERS_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001010';

/**
 * The ABI for the Confidential Transfers precompile contract.
 * @category ABI
 */
export const CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'string', name: 'fromAddress', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'bytes', name: 'publicKey', type: 'bytes' },
			{ internalType: 'string', name: 'decryptableBalance', type: 'string' },
			{ internalType: 'bytes', name: 'pendingBalanceLo', type: 'bytes' },
			{ internalType: 'bytes', name: 'pendingBalanceHi', type: 'bytes' },
			{ internalType: 'bytes', name: 'availableBalance', type: 'bytes' },
			{ internalType: 'bytes', name: 'proofs', type: 'bytes' }
		],
		name: 'initializeAccount',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'bytes', name: 'fromAmountLo', type: 'bytes' },
			{ internalType: 'bytes', name: 'fromAmountHi', type: 'bytes' },
			{ internalType: 'bytes', name: 'toAmountLo', type: 'bytes' },
			{ internalType: 'bytes', name: 'toAmountHi', type: 'bytes' },
			{ internalType: 'bytes', name: 'remainingBalance', type: 'bytes' },
			{ internalType: 'string', name: 'decryptableBalance', type: 'string' },
			{ internalType: 'bytes', name: 'proofs', type: 'bytes' }
		],
		name: 'transfer',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'bytes', name: 'fromAmountLo', type: 'bytes' },
			{ internalType: 'bytes', name: 'fromAmountHi', type: 'bytes' },
			{ internalType: 'bytes', name: 'toAmountLo', type: 'bytes' },
			{ internalType: 'bytes', name: 'toAmountHi', type: 'bytes' },
			{ internalType: 'bytes', name: 'remainingBalance', type: 'bytes' },
			{ internalType: 'string', name: 'decryptableBalance', type: 'string' },
			{ internalType: 'bytes', name: 'proofs', type: 'bytes' },
			{
				components: [
					{ internalType: 'string', name: 'auditorAddress', type: 'string' },
					{
						internalType: 'bytes',
						name: 'encryptedTransferAmountLo',
						type: 'bytes'
					},
					{
						internalType: 'bytes',
						name: 'encryptedTransferAmountHi',
						type: 'bytes'
					},
					{
						internalType: 'bytes',
						name: 'transferAmountLoValidityProof',
						type: 'bytes'
					},
					{
						internalType: 'bytes',
						name: 'transferAmountHiValidityProof',
						type: 'bytes'
					},
					{
						internalType: 'bytes',
						name: 'transferAmountLoEqualityProof',
						type: 'bytes'
					},
					{
						internalType: 'bytes',
						name: 'transferAmountHiEqualityProof',
						type: 'bytes'
					}
				],
				internalType: 'struct ICT.Auditor[]',
				name: 'auditors',
				type: 'tuple[]'
			}
		],
		name: 'transferWithAuditors',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint64', name: 'amount', type: 'uint64' }
		],
		name: 'deposit',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'string', name: 'decryptableBalance', type: 'string' },
			{
				internalType: 'uint32',
				name: 'pendingBalanceCreditCounter',
				type: 'uint32'
			},
			{ internalType: 'bytes', name: 'availableBalance', type: 'bytes' }
		],
		name: 'applyPendingBalance',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'string', name: 'decryptableBalance', type: 'string' },
			{
				internalType: 'bytes',
				name: 'remainingBalanceCommitment',
				type: 'bytes'
			},
			{ internalType: 'bytes', name: 'proofs', type: 'bytes' }
		],
		name: 'withdraw',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'bytes', name: 'proofs', type: 'bytes' }
		],
		name: 'closeAccount',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'addr', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' }
		],
		name: 'account',
		outputs: [
			{
				components: [
					{ internalType: 'bytes', name: 'publicKey', type: 'bytes' },
					{ internalType: 'bytes', name: 'pendingBalanceLo', type: 'bytes' },
					{ internalType: 'bytes', name: 'pendingBalanceHi', type: 'bytes' },
					{
						internalType: 'uint32',
						name: 'pendingBalanceCreditCounter',
						type: 'uint32'
					},
					{ internalType: 'bytes', name: 'availableBalance', type: 'bytes' },
					{
						internalType: 'string',
						name: 'decryptableAvailableBalance',
						type: 'string'
					}
				],
				internalType: 'struct CtAccount',
				name: 'ctAccount',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

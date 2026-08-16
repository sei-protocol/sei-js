import type { Abi } from 'viem';

/**
 * The address of the Distribution precompile contract.
 * @category Address
 */
export const DISTRIBUTION_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001007';

/**
 * The ABI for the Distribution precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/distribution/legacy/v66/abi.json
 * @category ABI
 */
export const DISTRIBUTION_PRECOMPILE_ABI = [
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
			{ indexed: false, internalType: 'string', name: 'validator', type: 'string' },
			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'DelegationRewardsWithdrawn',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
			{ indexed: false, internalType: 'string[]', name: 'validators', type: 'string[]' },
			{ indexed: false, internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' }
		],
		name: 'MultipleDelegationRewardsWithdrawn',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'string', name: 'validator', type: 'string' },
			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'ValidatorCommissionWithdrawn',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'withdrawAddr', type: 'address' }
		],
		name: 'WithdrawAddressSet',
		type: 'event'
	},
	{
		inputs: [{ internalType: 'address', name: 'delegatorAddress', type: 'address' }],
		name: 'rewards',
		outputs: [
			{
				components: [
					{
						components: [
							{
								components: [
									{ internalType: 'uint256', name: 'amount', type: 'uint256' },
									{ internalType: 'uint256', name: 'decimals', type: 'uint256' },
									{ internalType: 'string', name: 'denom', type: 'string' }
								],
								internalType: 'struct IDistr.Coin[]',
								name: 'coins',
								type: 'tuple[]'
							},
							{ internalType: 'string', name: 'validator_address', type: 'string' }
						],
						internalType: 'struct IDistr.Reward[]',
						name: 'rewards',
						type: 'tuple[]'
					},
					{
						components: [
							{ internalType: 'uint256', name: 'amount', type: 'uint256' },
							{ internalType: 'uint256', name: 'decimals', type: 'uint256' },
							{ internalType: 'string', name: 'denom', type: 'string' }
						],
						internalType: 'struct IDistr.Coin[]',
						name: 'total',
						type: 'tuple[]'
					}
				],
				internalType: 'struct IDistr.Rewards',
				name: 'rewards',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'withdrawAddr', type: 'address' }],
		name: 'setWithdrawAddress',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'validator', type: 'string' }],
		name: 'withdrawDelegationRewards',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string[]', name: 'validators', type: 'string[]' }],
		name: 'withdrawMultipleDelegationRewards',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'withdrawValidatorCommission',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const satisfies Abi;

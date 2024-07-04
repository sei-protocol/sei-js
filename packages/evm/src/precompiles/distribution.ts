/**
 * The address of the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const DISTRIBUTION_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001007';

/**
 * The ABI for the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const DISTRIBUTION_PRECOMPILE_ABI = [
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
	}
] as const;

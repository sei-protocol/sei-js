/**
 * The address of the Governance precompile contract.
 * @category Cosmos Interoperability
 */
export const GOVERNANCE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001006';

/**
 * The ABI for the Governance precompile contract.
 * @category Cosmos Interoperability
 */
export const GOVERNANCE_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'uint64', name: 'proposalID', type: 'uint64' }],
		name: 'deposit',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint64', name: 'proposalID', type: 'uint64' },
			{ internalType: 'int32', name: 'option', type: 'int32' }
		],
		name: 'vote',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;

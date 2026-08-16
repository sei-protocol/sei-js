import type { Abi } from 'viem';

/**
 * The address of the Governance precompile contract.
 * @category Address
 */
export const GOVERNANCE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001006';

/**
 * The ABI for the Governance precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/gov/legacy/v66/abi.json
 * @category ABI
 */
export const GOVERNANCE_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'proposalJSON', type: 'string' }],
		name: 'submitProposal',
		outputs: [{ internalType: 'uint64', name: 'proposalID', type: 'uint64' }],
		stateMutability: 'payable',
		type: 'function'
	},
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
	},
	{
		inputs: [
			{ internalType: 'uint64', name: 'proposalID', type: 'uint64' },
			{
				components: [
					{ internalType: 'int32', name: 'option', type: 'int32' },
					{ internalType: 'string', name: 'weight', type: 'string' }
				],
				internalType: 'struct WeightedVoteOption[]',
				name: 'options',
				type: 'tuple[]'
			}
		],
		name: 'voteWeighted',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const satisfies Abi;

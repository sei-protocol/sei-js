/**
 * The address of the Solo precompile contract.
 * @category Cosmos Migration
 */
export const SOLO_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100C';

/**
 * The ABI for the Solo precompile contract.
 * @category Cosmos Migration
 */
export const SOLO_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'bytes', name: 'payload', type: 'bytes' }],
		name: 'claim',
		outputs: [{ internalType: 'bool', name: 'response', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes', name: 'payload', type: 'bytes' }],
		name: 'claimSpecific',
		outputs: [{ internalType: 'bool', name: 'response', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;

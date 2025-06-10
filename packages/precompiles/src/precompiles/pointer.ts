/**
 * The address of the Pointer precompile contract.
 * @category Cosmos Interoperability
 */
export const POINTER_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100B';

/**
 * The ABI for the Pointer precompile contract.
 * @category Cosmos Interoperability
 */
export const POINTER_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'addCW20Pointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'addCW721Pointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'token', type: 'string' }],
		name: 'addNativePointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	}
] as const;

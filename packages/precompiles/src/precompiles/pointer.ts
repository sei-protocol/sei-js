/**
 * The address of the Pointer precompile contract.
 * @category Address
 */
export const POINTER_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100B';

/**
 * The ABI for the Pointer precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/pointer/legacy/v66/abi.json
 * @category ABI
 */
export const POINTER_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'addCW1155Pointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	},
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

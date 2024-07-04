/**
 * The address of the Address precompile contract.
 * This contract gets associated Sei and EVM addresses.
 * @category Cosmos Interoperability
 */
export const ADDRESS_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001004';

/**
 * The ABI for the Address precompile contract.
 * @category Cosmos Interoperability
 */
export const ADDRESS_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'addr', type: 'string' }],
		name: 'getEvmAddr',
		outputs: [{ internalType: 'address', name: 'response', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
		name: 'getSeiAddr',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

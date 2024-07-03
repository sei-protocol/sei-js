/**
 * The address of the Address precompile contract, which is be used for interoperability between the EVM and Cosmos.
 * It can be used to get the associated EVM address for a given Cosmos address and vice versa.
 *
 * @category Cosmos Interoperability
 */
export const ADDRESS_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001004';

/**
 * The ABI for the address precompile contract which can be used for interoperability between the EVM and Cosmos.
 * It can be used to get the associated EVM address for a given Cosmos address and vice versa.
 *
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

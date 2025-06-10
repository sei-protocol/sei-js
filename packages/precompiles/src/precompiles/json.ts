/**
 * The address of the JSON precompile contract.
 * @category Cosmos Interoperability
 */
export const JSON_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001003';

/**
 * The ABI for the JSON precompile contract.
 * @category Cosmos Interoperability
 */
export const JSON_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'string', name: 'key', type: 'string' }
		],
		name: 'extractAsBytes',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'string', name: 'key', type: 'string' }
		],
		name: 'extractAsBytesList',
		outputs: [{ internalType: 'bytes[]', name: 'response', type: 'bytes[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'string', name: 'key', type: 'string' }
		],
		name: 'extractAsUint256',
		outputs: [{ internalType: 'uint256', name: 'response', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

/**
 * The address of the Pointerview precompile contract.
 * @category Cosmos Interoperability
 */
export const POINTERVIEW_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100A';

/**
 * The ABI for the Pointerview precompile contract.
 * @category Cosmos Interoperability
 */
export const POINTERVIEW_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'getCW20Pointer',
		outputs: [
			{ internalType: 'address', name: 'addr', type: 'address' },
			{ internalType: 'uint16', name: 'version', type: 'uint16' },
			{ internalType: 'bool', name: 'exists', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'getCW721Pointer',
		outputs: [
			{ internalType: 'address', name: 'addr', type: 'address' },
			{ internalType: 'uint16', name: 'version', type: 'uint16' },
			{ internalType: 'bool', name: 'exists', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'token', type: 'string' }],
		name: 'getNativePointer',
		outputs: [
			{ internalType: 'address', name: 'addr', type: 'address' },
			{ internalType: 'uint16', name: 'version', type: 'uint16' },
			{ internalType: 'bool', name: 'exists', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

import type { Abi } from 'viem';

/**
 * The address of the Pointerview precompile contract.
 * @category Address
 */
export const POINTERVIEW_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100A';

/**
 * The ABI for the Pointerview precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/pointerview/legacy/v66/abi.json
 * @category ABI
 */
export const POINTERVIEW_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'getCW1155Pointer',
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
] as const satisfies Abi;

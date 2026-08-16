import type { Abi } from 'viem';

/**
 * The address of the JSON precompile contract.
 * @category Address
 */
export const JSON_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001003';

/**
 * The ABI for the JSON precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/json/legacy/v66/abi.json
 * @category ABI
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
	},
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'uint16', name: 'arrayIndex', type: 'uint16' }
		],
		name: 'extractAsBytesFromArray',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const satisfies Abi;

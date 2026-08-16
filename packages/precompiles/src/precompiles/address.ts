/**
 * The address of the Address precompile contract.
 * @category Address
 */
export const ADDRESS_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001004';

/**
 * The ABI for the Address precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/addr/legacy/v66/abi.json
 * @category ABI
 */
export const ADDRESS_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'string', name: 'v', type: 'string' },
			{ internalType: 'string', name: 'r', type: 'string' },
			{ internalType: 'string', name: 's', type: 'string' },
			{ internalType: 'string', name: 'customMessage', type: 'string' }
		],
		name: 'associate',
		outputs: [
			{ internalType: 'string', name: 'seiAddr', type: 'string' },
			{ internalType: 'address', name: 'evmAddr', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'pubKeyHex', type: 'string' }],
		name: 'associatePubKey',
		outputs: [
			{ internalType: 'string', name: 'seiAddr', type: 'string' },
			{ internalType: 'address', name: 'evmAddr', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
		name: 'getSeiAddr',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'addr', type: 'string' }],
		name: 'getEvmAddr',
		outputs: [{ internalType: 'address', name: 'response', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

/**
 * The address of the Wasm precompile contract.
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the Wasm precompile contract.
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'string', name: 'contractAddress', type: 'string' },
			{ internalType: 'bytes', name: 'msg', type: 'bytes' },
			{ internalType: 'bytes', name: 'coins', type: 'bytes' }
		],
		name: 'execute',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{ internalType: 'string', name: 'contractAddress', type: 'string' },
					{ internalType: 'bytes', name: 'msg', type: 'bytes' },
					{ internalType: 'bytes', name: 'coins', type: 'bytes' }
				],
				internalType: 'struct IWasmd.ExecuteMsg[]',
				name: 'executeMsgs',
				type: 'tuple[]'
			}
		],
		name: 'execute_batch',
		outputs: [{ internalType: 'bytes[]', name: 'responses', type: 'bytes[]' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint64', name: 'codeID', type: 'uint64' },
			{ internalType: 'string', name: 'admin', type: 'string' },
			{ internalType: 'bytes', name: 'msg', type: 'bytes' },
			{ internalType: 'string', name: 'label', type: 'string' },
			{ internalType: 'bytes', name: 'coins', type: 'bytes' }
		],
		name: 'instantiate',
		outputs: [
			{ internalType: 'string', name: 'contractAddr', type: 'string' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'contractAddress', type: 'string' },
			{ internalType: 'bytes', name: 'req', type: 'bytes' }
		],
		name: 'query',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

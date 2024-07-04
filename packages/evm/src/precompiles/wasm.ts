/**
 * The address of the WASM precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const associatedSeiAddress = useReadContract({ abi: WASM_PRECOMPILE_ABI, address: WASM_PRECOMPILE_ADDRESS, functionName: 'query', args: [CW_CONTRACT_ADDRESS, REQUEST] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = getWasmPrecompileEthersV6Contract(WASM_PRECOMPILE_ADDRESS, signer);
 *
 * const queryResponse = await addressPrecompileContract.connect().query(CW_CONTRACT_ADDRESS, REQUEST);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const associatedSeiAddress = useReadContract({ abi: WASM_PRECOMPILE_ABI, address: WASM_PRECOMPILE_ADDRESS, functionName: 'query', args: [CW_CONTRACT_ADDRESS, REQUEST] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, WasmPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = new ethers.Contract(WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, signer) as WasmPrecompileContract;
 *
 * const queryResponse = await addressPrecompileContract.connect().query(CW_CONTRACT_ADDRESS, REQUEST);
 * ```
 *
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

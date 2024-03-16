import { ethers } from 'ethers';

interface WasmPrecompileFunctions {
	execute(contractAddress: string, msg: Uint8Array, coins: Uint8Array): Promise<{ response: Uint8Array }>;
	instantiate(codeID: bigint, admin: string, msg: Uint8Array, label: string, coins: Uint8Array): Promise<{ contractAddr: string; data: Uint8Array }>;
	query(contractAddress: string, req: Uint8Array): Promise<{ response: Uint8Array }>;
}

type WasmPrecompileContract = ethers.Contract & WasmPrecompileFunctions;

/**
 * The address of the WASM precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, signer);
 * ```
 *
 * @category WASM Precompile
 */
export const ARCTIC_1_WASM_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, signer);
 * ```
 * @category WASM Precompile
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
		stateMutability: 'nonpayable',
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
		stateMutability: 'nonpayable',
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

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getWasmPrecompileEthersV6Contract, ARCTIC_1_WASM_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 *
 * const ethersContract = getWasmPrecompileEthersV6Contract(ARCTIC_1_WASM_PRECOMPILE_ADDRESS);
 * ```
 *
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category WASM Precompile
 */
export const getWasmPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, WASM_PRECOMPILE_ABI) as WasmPrecompileContract;
};

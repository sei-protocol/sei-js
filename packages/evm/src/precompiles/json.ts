import { ethers } from 'ethers';

interface JSONPrecompileFunctions {
	extractAsBytes(input: string, key: string): Promise<{ response: string }>;
	extractAsBytesList(input: string, key: string): Promise<{ response: string[] }>;
	extractAsUint256(input: string, key: string): Promise<{ response: ethers.BigNumberish }>;
}

type JSONPrecompileContract = ethers.Contract & JSONPrecompileFunctions;

/**
 * The address of the JSON precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI, signer);
 * ```
 * @category JSON Precompile
 */
export const ARCTIC_1_JSON_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001003';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersContract = new ethers.Contract(ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI, signer);
 * ```
 * @category JSON Precompile
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

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getJSONPrecompileEthersV6Contract, ARCTIC_1_JSON_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 *
 * const ethersJSContract = getJSONPrecompileEthersV6Contract(ARCTIC_1_JSON_PRECOMPILE_ADDRESS);
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category JSON Precompile
 */
export const getJSONPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer): JSONPrecompileContract => {
	return new ethers.Contract(precompileAddress, JSON_PRECOMPILE_ABI) as JSONPrecompileContract;
};

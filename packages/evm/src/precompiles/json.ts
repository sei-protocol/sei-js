import { ethers } from 'ethers';

/**
 * @category JSON Precompile
 */
export const ARCTIC_1_JSON_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001003';

/**
 * The ABI for the precompile contract.
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
];

/**
 * Creates and returns a `JSONPrecompileContract` instance with the provided signer.
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category JSON Precompile
 */
export const getJSONPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, JSON_PRECOMPILE_ABI, signer);
};

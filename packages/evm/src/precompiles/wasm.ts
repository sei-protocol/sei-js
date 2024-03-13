import { ethers } from 'ethers';

/**
 * @category WASM Precompile
 */
export const ARCTIC_1_WASM_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the precompile contract.
 * @category WASM Precompile
 */
export const WASM_PRECOMPILE_ABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: 'contractAddress',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'msg',
				type: 'bytes'
			},
			{
				internalType: 'bytes',
				name: 'coins',
				type: 'bytes'
			}
		],
		name: 'execute',
		outputs: [
			{
				internalType: 'bytes',
				name: 'response',
				type: 'bytes'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'codeID',
				type: 'uint64'
			},
			{
				internalType: 'string',
				name: 'admin',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'msg',
				type: 'bytes'
			},
			{
				internalType: 'string',
				name: 'label',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'coins',
				type: 'bytes'
			}
		],
		name: 'instantiate',
		outputs: [
			{
				internalType: 'string',
				name: 'contractAddr',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'contractAddress',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'req',
				type: 'bytes'
			}
		],
		name: 'query',
		outputs: [
			{
				internalType: 'bytes',
				name: 'response',
				type: 'bytes'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns a `StakingPrecompileContract` instance with the provided signer.
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category WASM Precompile
 */
export const getWasmPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, WASM_PRECOMPILE_ABI, signer);
};

import { ethers } from 'ethers';

export const WASM_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001002';

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

export const getWasmPrecompileEthersV6Contract = (signer: ethers.Signer) => {
	return new ethers.Contract(WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, signer);
};

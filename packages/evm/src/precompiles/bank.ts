import { ethers } from 'ethers';

export const BANK_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001001';

export const BANK_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'address', name: 'acc', type: 'address' },
			{ internalType: 'string', name: 'denom', type: 'string' }
		],
		name: 'balance',
		outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'decimals',
		outputs: [{ internalType: 'uint8', name: 'response', type: 'uint8' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'name',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'fromAddress', type: 'address' },
			{ internalType: 'address', name: 'toAddress', type: 'address' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'send',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'supply',
		outputs: [{ internalType: 'uint256', name: 'response', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'symbol',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'toNativeAddress', type: 'string' }],
		name: 'sendNative',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	}
];

export const getBankPrecompileEthersV6Contract = (signer: ethers.Signer) => {
	return new ethers.Contract(BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI, signer);
};

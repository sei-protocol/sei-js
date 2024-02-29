import { ethers } from 'ethers';

export const STAKING_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001005';

export const STAKING_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'valAddress', type: 'string' }],
		name: 'delegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'srcAddress', type: 'string' },
			{ internalType: 'string', name: 'dstAddress', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'redelegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'valAddress', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'undelegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

export const getStakingPrecompileEthersV6Contract = (signer: ethers.Signer) => {
	return new ethers.Contract(STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI, signer);
};

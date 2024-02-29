import { ethers } from 'ethers';

export const DISTRIBUTION_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001007';

export const DISTRIBUTION_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'address', name: 'withdrawAddr', type: 'address' }],
		name: 'setWithdrawAddress',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'validator', type: 'string' }],
		name: 'withdrawDelegationRewards',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

export const getDistributionPrecompileEthersV6Contract = (signer: ethers.Signer) => {
	return new ethers.Contract(DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI, signer);
};

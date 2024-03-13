import { ethers } from 'ethers';

/**
 * @category Distribution Precompile
 */
export const ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001007';

/**
 * The ABI for the precompile contract.
 * @category Distribution Precompile
 */
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

/**
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The 'ethers' signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Distribution Precompile
 */
export const getDistributionPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, DISTRIBUTION_PRECOMPILE_ABI, signer);
};

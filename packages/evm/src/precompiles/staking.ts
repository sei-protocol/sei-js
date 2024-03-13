import { ethers } from 'ethers';

/**
 * @category Staking Precompile
 */
export const ARCTIC_1_STAKING_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001005';

/**
 * The ABI for the precompile contract.
 * @category Staking Precompile
 */
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

/**
 * Creates and returns a `StakingPrecompileContract` instance with the provided signer.
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Staking Precompile
 */
export const getStakingPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, STAKING_PRECOMPILE_ABI, signer);
};

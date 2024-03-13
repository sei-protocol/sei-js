import { ethers } from 'ethers';

/**
 * @category Governance Precompile
 * */
export const ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001006';

/**
 * The ABI for the precompile contract.
 * @category Governance Precompile
 * */
export const GOVERNANCE_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'uint64', name: 'proposalID', type: 'uint64' }],
		name: 'deposit',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint64', name: 'proposalID', type: 'uint64' },
			{ internalType: 'int32', name: 'option', type: 'int32' }
		],
		name: 'vote',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

/**
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The 'ethers' signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Governance Precompile
 */
export const getGovernancePrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, GOVERNANCE_PRECOMPILE_ABI, signer);
};

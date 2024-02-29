import { ethers } from 'ethers';

export const GOVERNANCE_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001006';

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

export const getGovernancePrecompileEthersV6Contract = (signer: ethers.Signer) => {
	return new ethers.Contract(GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI, signer);
};

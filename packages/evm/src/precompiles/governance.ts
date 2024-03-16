import { ethers } from 'ethers';

interface GovernancePrecompileFunctions {
	deposit(proposalID: ethers.BigNumberish): Promise<{ success: boolean }>;
	vote(proposalID: ethers.BigNumberish, option: ethers.BigNumberish): Promise<{ success: boolean }>;
}

type GovernancePrecompileContract = ethers.Contract & GovernancePrecompileFunctions;

/**
 * The address of the GOVERNANCE precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI, signer);
 * ```
 * @category Governance Precompile
 * */
export const ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001006';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI, signer);
 * ```
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
] as const;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 *
 * const ethersJSContract = getGovernancePrecompileEthersV6Contract(ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS);
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The 'ethers' signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Governance Precompile
 */
export const getGovernancePrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer) => {
	return new ethers.Contract(precompileAddress, GOVERNANCE_PRECOMPILE_ABI) as GovernancePrecompileContract;
};

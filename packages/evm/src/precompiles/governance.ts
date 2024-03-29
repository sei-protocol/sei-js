import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

/**
 * Represents the functions available in the Governance precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface GovernancePrecompileFunctions {
	/**
	 * Deposits funds into a governance proposal.
	 * @param proposalID The ID of the proposal to deposit funds into.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	deposit(proposalID: ethers.BigNumberish): Promise<{ success: boolean }>;
	/**
	 * Votes on a governance proposal.
	 * @param proposalID The ID of the proposal to vote on.
	 * @param option The option to vote for.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	vote(proposalID: ethers.BigNumberish, option: ethers.BigNumberish): Promise<{ success: boolean }>;
}

/** Represents the typed contract instance for the GOVERNANCE precompile contract.
 * @category Cosmos Interoperability
 * */
export type GovernancePrecompileContract = ethers.Contract & GovernancePrecompileFunctions;

/**
 * The address of the GOVERNANCE precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi
 * ```tsx
 * import { ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 **
 * const depositResponse = useContractFunction(
 *   ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS,
 *   GOVERNANCE_PRECOMPILE_ABI,
 *   'deposit'
 * );
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = getGovernancePrecompileEthersV6Contract(ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, signer);
 *
 * //Surround with try/catch for detailed errors
 * const depositResponse = await governancePrecompileContract.connect(signer).deposit('1', { value: parseSei(1) });
 * ```
 *
 * @category Cosmos Interoperability
 * */
export const ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001006';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi
 * ```tsx
 * import { ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * const depositResponse = useContractFunction(
 *   ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS,
 *   GOVERNANCE_PRECOMPILE_ABI,
 *   'deposit'
 * );
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = new ethers.Contract(ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI, signer) as GovernancePrecompileContract;
 *
 * const depositResponse = await governancePrecompileContract.connect().deposit('PROPOSAL_ID', { value: parseSei(1) });
 * ```
 * @category Cosmos Interoperability
 * */
export const GOVERNANCE_PRECOMPILE_ABI: Abi = [
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
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = getGovernancePrecompileEthersV6Contract(ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS, signer);
 *
 * //Surround with try/catch for detailed errors
 * const depositResponse = await governancePrecompileContract.connect(signer).deposit('1', { value: parseSei(1) });
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getGovernancePrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner) => {
	return new ethers.Contract(precompileAddress, GOVERNANCE_PRECOMPILE_ABI as InterfaceAbi, runner) as GovernancePrecompileContract;
};

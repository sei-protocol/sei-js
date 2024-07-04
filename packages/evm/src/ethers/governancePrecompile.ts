import { BigNumberish, Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { GOVERNANCE_PRECOMPILE_ABI, GOVERNANCE_PRECOMPILE_ADDRESS } from '../precompiles';

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
	deposit(proposalID: BigNumberish): Promise<{ success: boolean }>;
	/**
	 * Votes on a governance proposal.
	 * @param proposalID The ID of the proposal to vote on.
	 * @param option The option to vote for.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	vote(proposalID: BigNumberish, option: BigNumberish): Promise<{ success: boolean }>;
}

/** Represents the typed contract instance for the GOVERNANCE precompile contract.
 * @category Cosmos Interoperability
 * */
export type GovernancePrecompileContract = Contract & GovernancePrecompileFunctions;

/**
 * The ABI for the governance precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, GOVERNANCE_PRECOMPILE_ADDRESS, ETHERS_GOVERNANCE_PRECOMPILE_ABI, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = new ethers.Contract(GOVERNANCE_PRECOMPILE_ADDRESS, ETHERS_GOVERNANCE_PRECOMPILE_ABI, signer) as GovernancePrecompileContract;
 *
 * const depositResponse = await governancePrecompileContract.connect().deposit('PROPOSAL_ID', { value: parseSei(1) });
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_GOVERNANCE_PRECOMPILE_ABI = GOVERNANCE_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = getGovernancePrecompileEthersV6Contract(signer);
 *
 * //Surround with try/catch for detailed errors
 * const depositResponse = await governancePrecompileContract.connect(signer).deposit('1', { value: parseSei(1) });
 * ```
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getGovernancePrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(GOVERNANCE_PRECOMPILE_ADDRESS, ETHERS_GOVERNANCE_PRECOMPILE_ABI, runner) as GovernancePrecompileContract;
};

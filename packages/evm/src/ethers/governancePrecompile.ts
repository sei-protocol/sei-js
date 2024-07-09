import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { GOVERNANCE_PRECOMPILE_ABI, GOVERNANCE_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Governance precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_GOVERNANCE_PRECOMPILE_ABI = GOVERNANCE_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Governance precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, parseSei } from '@sei-js/evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = getGovernancePrecompileEthersV6Contract(signer);
 *
 * // Surround with try/catch for detailed errors
 * const depositResponse = await governancePrecompileContract.connect(signer).deposit('1', { value: parseSei(1) });
 * console.log('Deposit Response:', depositResponse);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Governance precompile contract.
 * @category Cosmos Interoperability
 */
export const getGovernancePrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(GOVERNANCE_PRECOMPILE_ADDRESS, ETHERS_GOVERNANCE_PRECOMPILE_ABI, runner);
};

import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '../precompiles';

/**
 * Represents the functions available in the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export interface DistributionPrecompileFunctions {
	/**
	 * Sets the withdrawal address for rewards.
	 * @param withdrawAddress The address to set as the withdrawal address.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	setWithdrawAddress(withdrawAddress: string): Promise<{ success: boolean }>;
	/**
	 * Withdraws delegation rewards for a given validator.
	 * @param validator The validator for which to withdraw delegation rewards.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	withdrawDelegationRewards(validator: string): Promise<{ success: boolean }>;
	/**
	 * Withdraws delegation rewards for a given validators.
	 * @param validators The validators for which to withdraw delegation rewards.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	withdrawMultipleDelegationRewards(validators: string[]): Promise<{ success: boolean }>;
}

/**
 * Type for the Distribution precompile contract, combining the base Contract and DistributionPrecompileFunctions.
 * @category Cosmos Interoperability
 */
export type DistributionPrecompileContract = Contract & DistributionPrecompileFunctions;

/**
 * The ABI for the Distribution precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_DISTRIBUTION_PRECOMPILE_ABI = DISTRIBUTION_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Distribution precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getDistributionPrecompileEthersV6Contract } from '@sei-js/evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = getDistributionPrecompileEthersV6Contract(signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * console.log('Response:', response);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const getDistributionPrecompileEthersV6Contract = (runner: ContractRunner): DistributionPrecompileContract => {
	return new Contract(DISTRIBUTION_PRECOMPILE_ADDRESS, ETHERS_DISTRIBUTION_PRECOMPILE_ABI, runner) as DistributionPrecompileContract;
};

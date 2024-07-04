import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '../precompiles';

/**
 * Represents the functions available in the Distribution precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
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

/** Represents the typed contract instance for the DISTRIBUTION precompile contract.
 * @category Cosmos Interoperability
 * */
export type DistributionPrecompileContract = Contract & DistributionPrecompileFunctions;

/**
 * The ABI for the distribution precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { DISTRIBUTION_PRECOMPILE_ADDRESS, ETHERS_DISTRIBUTION_PRECOMPILE_ABI, DistributionPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = new ethers.Contract(DISTRIBUTION_PRECOMPILE_ADDRESS, ETHERS_DISTRIBUTION_PRECOMPILE_ABI, signer) as DistributionPrecompileContract;
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_DISTRIBUTION_PRECOMPILE_ABI = DISTRIBUTION_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { getDistributionPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = getDistributionPrecompileEthersV6Contract(signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getDistributionPrecompileEthersV6Contract = (runner: ContractRunner): DistributionPrecompileContract => {
	return new Contract(DISTRIBUTION_PRECOMPILE_ADDRESS, ETHERS_DISTRIBUTION_PRECOMPILE_ABI, runner) as DistributionPrecompileContract;
};

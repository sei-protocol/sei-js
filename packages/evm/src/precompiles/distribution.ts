import { ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

/**
 * Represents the functions available in the Distribution precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Distribution Precompile
 */
export interface DistributionPrecompileFunctions {
	/**
	 * Sets the withdrawal address for rewards.
	 * @param withdrawAddress The address to set as the withdrawal address.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Distribution Precompile
	 */
	setWithdrawAddress(withdrawAddress: string): Promise<{ success: boolean }>;
	/**
	 * Withdraws delegation rewards for a given validator.
	 * @param validator The validator for which to withdraw delegation rewards.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Distribution Precompile
	 */
	withdrawDelegationRewards(validator: string): Promise<{ success: boolean }>;
}

/** Represents the typed contract instance for the DISTRIBUTION precompile contract.
 * @category Distribution Precompile
 * */
export type DistributionPrecompileContract = ethers.Contract & DistributionPrecompileFunctions;

/**
 * The address of the DISTRIBUTION precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * const response = useContractFunction(
 *   ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS,
 *   DISTRIBUTION_PRECOMPILE_ABI,
 *   'setWithdrawAddress'
 * );
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.providers.JsonRpcProvider();
 * const signer = provider.getSigner();
 *
 * const contract = new ethers.Contract(ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI, signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```

 * @category Distribution Precompile
 */
export const ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001007';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * const response = useContractFunction(
 *   ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS,
 *   DISTRIBUTION_PRECOMPILE_ABI,
 *   'setWithdrawAddress'
 * );
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.providers.JsonRpcProvider();
 * const signer = provider.getSigner();
 *
 * const contract = new ethers.Contract(ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI, signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```
 * @category Distribution Precompile
 */
export const DISTRIBUTION_PRECOMPILE_ABI: Abi = [
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
] as const;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getDistributionPrecompileEthersV6Contract, ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.providers.JsonRpcProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = getDistributionPrecompileEthersV6Contract(ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The 'ethers' signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Distribution Precompile
 */
export const getDistributionPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer): DistributionPrecompileContract => {
	return new ethers.Contract(precompileAddress, DISTRIBUTION_PRECOMPILE_ABI as InterfaceAbi) as DistributionPrecompileContract;
};

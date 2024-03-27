import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

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
}

/** Represents the typed contract instance for the DISTRIBUTION precompile contract.
 * @category Cosmos Interoperability
 * */
export type DistributionPrecompileContract = ethers.Contract & DistributionPrecompileFunctions;

/**
 * The address of the DISTRIBUTION precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useWriteContract` hook to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { writeContract, data: hash } = useWriteContract();
 * const { address } = useAccount();
 * const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });
 *
 * // Wherever you want to call the contract function
 * writeContract({
 *   abi: DISTRIBUTION_PRECOMPILE_ABI,
 *   address: ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS,
 *   functionName: 'setWithdrawAddress',
 *   args: [accounts[0]]
 * });
 *
 * console.log({ hash, isConfirming, isConfirmed });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = getDistributionPrecompileEthersV6Contract(ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```

 * @category Cosmos Interoperability
 */
export const ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001007';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useWriteContract` hook to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { writeContract, data: hash } = useWriteContract();
 * const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * writeContract({
 *   abi: DISTRIBUTION_PRECOMPILE_ABI,
 *   address: ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS,
 *   functionName: 'setWithdrawAddress',
 *   args: [accounts[0]]
 * });
 *
 * console.log({ hash, isConfirming, isConfirmed });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI, DistributionPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = new ethers.Contract(ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI, signer) as DistributionPrecompileContract;
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```
 *
 * @category Cosmos Interoperability
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
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { getDistributionPrecompileEthersV6Contract, ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = getDistributionPrecompileEthersV6Contract(ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await contract.setWithdrawAddress('0xADDRESS');
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getDistributionPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): DistributionPrecompileContract => {
	return new ethers.Contract(precompileAddress, DISTRIBUTION_PRECOMPILE_ABI as InterfaceAbi, runner) as DistributionPrecompileContract;
};

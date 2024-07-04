import { BigNumberish, Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { STAKING_PRECOMPILE_ABI, STAKING_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export interface StakingPrecompileFunctions {
	/**
	 * Delegates tokens to the specified validator.
	 * @param valAddress The address of the validator to delegate tokens to.
	 * @returns A Promise resolving to an object indicating the success of the delegation transaction.
	 * @category Cosmos Interoperability
	 */
	delegate(valAddress: string): Promise<{ success: boolean }>;

	/**
	 * Re-delegates tokens from the source validator to the destination validator.
	 * @param srcAddress The address of the source validator.
	 * @param dstAddress The address of the destination validator.
	 * @param amount The amount of tokens to redelegate.
	 * @returns A Promise resolving to an object indicating the success of the re-delegation transaction.
	 * @category Cosmos Interoperability
	 */
	redelegate(srcAddress: string, dstAddress: string, amount: BigNumberish): Promise<{ success: boolean }>;

	/**
	 * Un-delegates tokens from the specified validator.
	 * @param valAddress The address of the validator from which to undelegate tokens.
	 * @param amount The amount of tokens to undelegate.
	 * @returns A Promise resolving to an object indicating the success of the undelegation transaction.
	 * @category Cosmos Interoperability
	 */
	undelegate(valAddress: string, amount: BigNumberish): Promise<{ success: boolean }>;
}

/**
 * Type for the Staking precompile contract, combining the base Contract and StakingPrecompileFunctions.
 * @category Cosmos Interoperability
 */
export type StakingPrecompileContract = Contract & StakingPrecompileFunctions;

/**
 * The ABI for the Staking precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_STAKING_PRECOMPILE_ABI = STAKING_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Staking precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getStakingPrecompileEthersV6Contract, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const contract = getStakingPrecompileEthersV6Contract(signer);
 *
 * const response = await contract.delegate('0xVALIDATOR_ADDRESS', parseSei(1));
 * console.log('Delegate Response:', response);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const getStakingPrecompileEthersV6Contract = (runner: ContractRunner): StakingPrecompileContract => {
	return new Contract(STAKING_PRECOMPILE_ADDRESS, ETHERS_STAKING_PRECOMPILE_ABI, runner) as StakingPrecompileContract;
};

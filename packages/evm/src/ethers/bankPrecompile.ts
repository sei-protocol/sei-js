import { BigNumberish, Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { BANK_PRECOMPILE_ABI, BANK_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the Bank precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface BankPrecompileFunctions {
	/**
	 * Retrieves the balance of the specified account for the given denomination.
	 * @param acc The account address for which to retrieve the balance.
	 * @param denom The denomination of the balance to retrieve.
	 * @returns A Promise resolving to an object containing the balance amount.
	 * @category Cosmos Interoperability
	 */
	balance(acc: string, denom: string): Promise<{ amount: BigNumberish }>;
	/**
	 * Retrieves the number of decimal places for the specified denomination.
	 * @param denom The denomination for which to retrieve the number of decimal places.
	 * @returns A Promise resolving to an object containing the number of decimal places.
	 * @category Cosmos Interoperability
	 */
	decimals(denom: string): Promise<{ response: BigNumberish }>;
	/**
	 * Retrieves the name of the specified denomination.
	 * @param denom The denomination for which to retrieve the name.
	 * @returns A Promise resolving to an object containing the denomination name.
	 * @category Cosmos Interoperability
	 */
	name(denom: string): Promise<{ response: string }>;
	/**
	 * Sends tokens from one address to another.
	 * @param fromAddress The sender's address.
	 * @param toAddress The recipient's address.
	 * @param denom The denomination of the tokens to send.
	 * @param amount The amount of tokens to send.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	send(fromAddress: string, toAddress: string, denom: string, amount: number): Promise<{ success: boolean }>;
	/**
	 * Retrieves the total supply of tokens for the specified denomination.
	 * @param denom The denomination for which to retrieve the total supply.
	 * @returns A Promise resolving to an object containing the total supply.
	 * @category Cosmos Interoperability
	 */
	supply(denom: string): Promise<{ response: BigNumberish }>;
	/**
	 * Retrieves the symbol of the specified denomination.
	 * @param denom The denomination for which to retrieve the symbol.
	 * @returns A Promise resolving to an object containing the denomination symbol.
	 * @category Cosmos Interoperability
	 */
	symbol(denom: string): Promise<{ response: string }>;
	/**
	 * Sends native tokens to a specified address.
	 * @param toNativeAddress The recipient's native address.
	 * @param value The amount of native tokens to send.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	sendNative(toNativeAddress: string, value: BigNumberish): Promise<{ success: boolean }>;
}

/** Represents the typed contract instance for the BANK precompile contract.
 * @category Cosmos Interoperability
 * */
export type BankPrecompileContract = Contract & BankPrecompileFunctions;

/**
 * The Ethers ABI for the bank precompile contract.
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_BANK_PRECOMPILE_ABI = BANK_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an Ethers contract instance with the provided signer.
 *
 * @example
 * ```tsx
 * import { getBankPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const bankPrecompileContract = getBankPrecompileEthersV6Contract(signer);
 *
 * const balance = await bankPrecompileContract.balance(accounts[0], 'usei');
 * ```
 *
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getBankPrecompileEthersV6Contract = (runner: ContractRunner): BankPrecompileContract => {
	return new Contract(BANK_PRECOMPILE_ADDRESS, ETHERS_BANK_PRECOMPILE_ABI, runner) as BankPrecompileContract;
};

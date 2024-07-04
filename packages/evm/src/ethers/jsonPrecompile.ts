import { BigNumberish, Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { JSON_PRECOMPILE_ABI, JSON_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the JSON precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface JSONPrecompileFunctions {
	/**
	 * Extracts data as bytes from the input using the specified key.
	 * @param input The input data from which to extract bytes.
	 * @param key The key to use for extraction.
	 * @returns A Promise resolving to an object containing the extracted bytes.
	 * @category Cosmos Interoperability
	 */
	extractAsBytes(input: string, key: string): Promise<{ response: string }>;

	/**
	 * Extracts data as a list of bytes from the input using the specified key.
	 * @param input The input data from which to extract a list of bytes.
	 * @param key The key to use for extraction.
	 * @returns A Promise resolving to an object containing the extracted list of bytes.
	 * @category Cosmos Interoperability
	 */
	extractAsBytesList(input: string, key: string): Promise<{ response: string[] }>;

	/**
	 * Extracts data as a uint256 from the input using the specified key.
	 * @param input The input data from which to extract a uint256.
	 * @param key The key to use for extraction.
	 * @returns A Promise resolving to an object containing the extracted uint256.
	 * @category Cosmos Interoperability
	 */
	extractAsUint256(input: string, key: string): Promise<{ response: BigNumberish }>;
}

/** Represents the typed contract instance for the JSON precompile contract.
 * @category Cosmos Interoperability
 */
export type JSONPrecompileContract = Contract & JSONPrecompileFunctions;

/**
 * The ABI for the JSON precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6
 * ```tsx
 * import { JSON_PRECOMPILE_ADDRESS, ETHERS_JSON_PRECOMPILE_ABI, JSONPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 **
 * const jsonPrecompileContract = new ethers.Contract(JSON_PRECOMPILE_ADDRESS, ETHERS_JSON_PRECOMPILE_ABI, signer) as JSONPrecompileContract;
 *
 * const response = await jsonPrecompileContract.connect().extractAsBytes('0xINPUT', 'KEY');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_JSON_PRECOMPILE_ABI = JSON_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getJSONPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const jsonPrecompileContract = getJSONPrecompileEthersV6Contract(signer);
 *
 * const response = await jsonPrecompileContract.connect().extractAsBytes('0xINPUT', 'KEY');
 * ```
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getJSONPrecompileEthersV6Contract = (runner: ContractRunner): JSONPrecompileContract => {
	return new Contract(JSON_PRECOMPILE_ADDRESS, ETHERS_JSON_PRECOMPILE_ABI, runner) as JSONPrecompileContract;
};

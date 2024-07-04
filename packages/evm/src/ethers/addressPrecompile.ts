import { ContractRunner, Contract, InterfaceAbi } from 'ethers';
import { ADDRESS_PRECOMPILE_ABI, ADDRESS_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the Address precompile contract, facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface AddressPrecompileFunctions {
	/**
	 * Retrieves the associated EVM address for a given Cosmos address.
	 * @param addr The Cosmos address for which to retrieve the associated EVM address.
	 * @returns A Promise resolving to an object containing the associated EVM address.
	 * @category Cosmos Interoperability
	 */
	getEvmAddr(addr: string): Promise<string>;
	/**
	 * Retrieves the associated Cosmos address for a given EVM address.
	 * @param addr The EVM address for which to retrieve the associated Cosmos address.
	 * @returns A Promise resolving to an object containing the associated Cosmos address.
	 * @category Cosmos Interoperability
	 */
	getSeiAddr(addr: string): Promise<string>;
}

/** Represents the typed contract instance for the ADDRESS precompile contract.
 * @category Cosmos Interoperability
 * */
type AddressPrecompileContract = Contract & AddressPrecompileFunctions;

/**
 * The ABI for the address precompile contract, which can be used to create an Ethers contract.
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_ADDRESS_PRECOMPILE_ABI = ADDRESS_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an Ethers contract instance with the provided signer.
 *
 * @example
 * ```tsx
 * import { getAddressPrecompileEthersV6Contract } from '@sei-js/evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const addressPrecompileContract = getAddressPrecompileEthersV6Contract(signer);
 *
 * const seiAddr = await addressPrecompileContract.getSeiAddr(accounts[0]);
 * ```
 *
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export function getAddressPrecompileEthersV6Contract(runner: ContractRunner): AddressPrecompileContract {
	return new Contract(ADDRESS_PRECOMPILE_ADDRESS, ETHERS_ADDRESS_PRECOMPILE_ABI, runner) as AddressPrecompileContract;
}

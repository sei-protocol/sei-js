import { ContractRunner, Contract, InterfaceAbi } from 'ethers';
import { ADDRESS_PRECOMPILE_ABI, ADDRESS_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Address precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_ADDRESS_PRECOMPILE_ABI = ADDRESS_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Address precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
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
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the precompile contract.
 * @category Cosmos Interoperability
 */
export function getAddressPrecompileEthersV6Contract(runner: ContractRunner) {
	return new Contract(ADDRESS_PRECOMPILE_ADDRESS, ETHERS_ADDRESS_PRECOMPILE_ABI, runner);
}

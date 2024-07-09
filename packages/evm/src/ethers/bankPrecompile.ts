import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { BANK_PRECOMPILE_ABI, BANK_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Bank precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_BANK_PRECOMPILE_ABI = BANK_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Bank precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getBankPrecompileEthersV6Contract } from '@sei-js/evm/ethers';
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
 * console.log('Balance:', balance);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Bank precompile contract.
 * @category Cosmos Interoperability
 */
export const getBankPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI, runner);
};

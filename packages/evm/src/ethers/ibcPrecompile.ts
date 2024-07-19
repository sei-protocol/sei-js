import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { IBC_PRECOMPILE_ABI, IBC_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the IBC precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_IBC_PRECOMPILE_ABI = IBC_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the IBC precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getIbcPrecompileEthersV6Contract } from '@sei-js/evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const ibcPrecompileContract = getIbcPrecompileEthersV6Contract(signer);
 * const cosmosAddress = 'cosmos1...';
 *
 * const bool = await ibcPrecompileContract.transfer(cosmosAddress, 'transfer', 'channel-0', 'usei', 100, 1n, 1n, 1n, 'memo');
 * console.log('Transfer successful:', bool);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the IBC precompile contract.
 * @category Cosmos Interoperability
 */
export const getIbcPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(IBC_PRECOMPILE_ADDRESS, ETHERS_IBC_PRECOMPILE_ABI, runner);
};

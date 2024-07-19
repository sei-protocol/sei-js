import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { POINTER_PRECOMPILE_ABI, POINTER_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Pointer precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_POINTER_PRECOMPILE_ABI = POINTER_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Pointer precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getPointerPrecompileEthersV6Contract } from '@sei-js/evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerPrecompileContract = getPointerPrecompileEthersV6Contract(signer);
 *
 * const tx = await pointerPrecompileContract.addCW20Pointer('CW20_CONTRACT_ADDRESS', { value: ethers.utils.parseEther('0.01') });
 * console.log('Transaction:', tx);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Pointer precompile contract.
 * @category Cosmos Interoperability
 */
export const getPointerPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(POINTER_PRECOMPILE_ADDRESS, ETHERS_POINTER_PRECOMPILE_ABI, runner);
};

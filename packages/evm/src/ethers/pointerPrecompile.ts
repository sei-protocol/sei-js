import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { POINTER_PRECOMPILE_ABI, POINTER_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the Pointer precompile contract.
 * @category Cosmos Interoperability
 */
export interface PointerPrecompileFunctions {
	/**
	 * Adds a CW20 pointer for the contract.
	 * @param cwAddr The CW20 contract address to add.
	 * @returns A Promise resolving to the Ethereum address of the pointer.
	 * @category Cosmos Interoperability
	 */
	addCW20Pointer(cwAddr: string): Promise<string>;

	/**
	 * Adds a CW721 pointer for the contract.
	 * @param cwAddr The CW721 contract address to add.
	 * @returns A Promise resolving to the Ethereum address of the pointer.
	 * @category Cosmos Interoperability
	 */
	addCW721Pointer(cwAddr: string): Promise<string>;

	/**
	 * Adds a native pointer for the contract.
	 * @param token The native token to add.
	 * @returns A Promise resolving to the Ethereum address of the pointer.
	 * @category Cosmos Interoperability
	 */
	addNativePointer(token: string): Promise<string>;
}

/**
 * Type for the Pointer precompile contract, combining the base Contract and PointerPrecompileFunctions.
 * @category Cosmos Interoperability
 */
export type PointerPrecompileContract = Contract & PointerPrecompileFunctions;

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
export const getPointerPrecompileEthersV6Contract = (runner: ContractRunner): PointerPrecompileContract => {
	return new Contract(POINTER_PRECOMPILE_ADDRESS, ETHERS_POINTER_PRECOMPILE_ABI, runner) as PointerPrecompileContract;
};

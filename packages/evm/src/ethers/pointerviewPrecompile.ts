import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { POINTERVIEW_PRECOMPILE_ABI, POINTERVIEW_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the Pointer precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface PointerviewPrecompileFunctions {
	/**
	 * Retrieves the pointer address, version, and existence status for the specified CW20 contract address.
	 * @param cwAddr The CW20 contract address to query.
	 * @returns A Promise resolving to an object containing the address, version, and existence status.
	 * @category Cosmos Interoperability
	 */
	getCW20Pointer(cwAddr: string): Promise<{ addr: string; version: number; exists: boolean }>;

	/**
	 * Retrieves the pointer address, version, and existence status for the specified CW721 contract address.
	 * @param cwAddr The CW721 contract address to query.
	 * @returns A Promise resolving to an object containing the address, version, and existence status.
	 * @category Cosmos Interoperability
	 */
	getCW721Pointer(cwAddr: string): Promise<{ addr: string; version: number; exists: boolean }>;

	/**
	 * Retrieves the pointer address, version, and existence status for the specified native token.
	 * @param token The native token to query.
	 * @returns A Promise resolving to an object containing the address, version, and existence status.
	 * @category Cosmos Interoperability
	 */
	getNativePointer(token: string): Promise<{ addr: string; version: number; exists: boolean }>;
}

/** Represents the typed contract instance for the Pointer precompile contract.
 * @category Cosmos Interoperability
 */
export type PointerviewPrecompileContract = Contract & PointerviewPrecompileFunctions;

/**
 * The ABI for the pointerview precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the pointer of a CW20 contract.
 * ```tsx
 * import { POINTERVIEW_PRECOMPILE_ADDRESS, ETHERS_POINTERVIEW_PRECOMPILE_ABI, PointerviewPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerviewPrecompileContract = new ethers.Contract(POINTERVIEW_PRECOMPILE_ADDRESS, ETHERS_POINTERVIEW_PRECOMPILE_ABI, signer) as PointerviewPrecompileContract;
 *
 * const pointer = await pointerviewPrecompileContract.getCW20Pointer('CW20_CONTRACT_ADDRESS');
 * console.log(pointer);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_POINTERVIEW_PRECOMPILE_ABI = POINTERVIEW_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getPointerviewPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerviewPrecompileContract = getPointerviewPrecompileEthersV6Contract(signer);
 *
 * const pointer = await pointerviewPrecompileContract.getCW20Pointer('CW20_CONTRACT_ADDRESS');
 * console.log(pointer);
 * ```
 *
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getPointerviewPrecompileEthersV6Contract = (runner: ContractRunner): PointerviewPrecompileContract => {
	return new Contract(POINTERVIEW_PRECOMPILE_ADDRESS, ETHERS_POINTERVIEW_PRECOMPILE_ABI, runner) as PointerviewPrecompileContract;
};

import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { WASM_PRECOMPILE_ABI, WASM_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * Represents the functions available in the WASM precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface WasmPrecompileFunctions {
	/**
	 * Executes a message on the specified contract with provided coins.
	 * @param contractAddress The address of the contract to execute the message on.
	 * @param msg The message to execute.
	 * @returns A Promise resolving to an object containing the response.
	 * @category Cosmos Interoperability
	 */
	execute(contractAddress: string, msg: Uint8Array): Promise<{ response: Uint8Array }>;
	/**
	 * Instantiates a new contract with the specified code ID, admin, and coins.
	 * @param codeID The code ID of the contract to instantiate.
	 * @param admin The admin address for the new contract.
	 * @param msg The initialization message for the new contract.
	 * @param label The label for the new contract.
	 * @returns A Promise resolving to an object containing the contract address and data.
	 * @category Cosmos Interoperability
	 */
	instantiate(codeID: bigint, admin: string, msg: Uint8Array, label: string): Promise<{ contractAddr: string; data: Uint8Array }>;
	/**
	 * Queries the specified contract with the provided request.
	 * @param contractAddress The address of the contract to query.
	 * @param req The request to send for querying.
	 * @returns A Promise resolving to an object containing the response.
	 * @category Cosmos Interoperability
	 */
	query(contractAddress: string, req: Uint8Array): Promise<{ response: Uint8Array }>;
}

/** Represents the typed contract instance for the WASM precompile contract.
 * @category Cosmos Interoperability
 * */
export type WasmPrecompileContract = Contract & WasmPrecompileFunctions;

export const ETHERS_WASM_PRECOMPILE_ABI = WASM_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { getWasmPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = getWasmPrecompileEthersV6Contract(signer);
 *
 * const queryResponse = await addressPrecompileContract.connect().query(CONTRACT_ADDRESS, REQUEST);
 * ```
 *
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getWasmPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(WASM_PRECOMPILE_ADDRESS, ETHERS_WASM_PRECOMPILE_ABI, runner) as WasmPrecompileContract;
};

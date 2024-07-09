import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { WASM_PRECOMPILE_ABI, WASM_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Wasm precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_WASM_PRECOMPILE_ABI = WASM_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Wasm precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getWasmPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = getWasmPrecompileEthersV6Contract(signer);
 *
 * const queryResponse = await wasmPrecompileContract.query(CONTRACT_ADDRESS, REQUEST);
 * console.log('Query Response:', queryResponse);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Wasm precompile contract.
 * @category Cosmos Interoperability
 */
export const getWasmPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(WASM_PRECOMPILE_ADDRESS, ETHERS_WASM_PRECOMPILE_ABI, runner);
};

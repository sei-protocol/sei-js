import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';
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
export type WasmPrecompileContract = ethers.Contract & WasmPrecompileFunctions;

/**
 * The address of the WASM precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const associatedSeiAddress = useReadContract({ abi: WASM_PRECOMPILE_ABI, address: WASM_PRECOMPILE_ADDRESS, functionName: 'query', args: [CW_CONTRACT_ADDRESS, REQUEST] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = getWasmPrecompileEthersV6Contract(WASM_PRECOMPILE_ADDRESS, signer);
 *
 * const queryResponse = await addressPrecompileContract.connect().query(CW_CONTRACT_ADDRESS, REQUEST);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const associatedSeiAddress = useReadContract({ abi: WASM_PRECOMPILE_ABI, address: WASM_PRECOMPILE_ADDRESS, functionName: 'query', args: [CW_CONTRACT_ADDRESS, REQUEST] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, WasmPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = new ethers.Contract(WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, signer) as WasmPrecompileContract;
 *
 * const queryResponse = await addressPrecompileContract.connect().query(CW_CONTRACT_ADDRESS, REQUEST);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const WASM_PRECOMPILE_ABI: Abi = [
	{
		inputs: [
			{ internalType: 'string', name: 'contractAddress', type: 'string' },
			{ internalType: 'bytes', name: 'msg', type: 'bytes' },
			{ internalType: 'bytes', name: 'coins', type: 'bytes' }
		],
		name: 'execute',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint64', name: 'codeID', type: 'uint64' },
			{ internalType: 'string', name: 'admin', type: 'string' },
			{ internalType: 'bytes', name: 'msg', type: 'bytes' },
			{ internalType: 'string', name: 'label', type: 'string' },
			{ internalType: 'bytes', name: 'coins', type: 'bytes' }
		],
		name: 'instantiate',
		outputs: [
			{ internalType: 'string', name: 'contractAddr', type: 'string' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'contractAddress', type: 'string' },
			{ internalType: 'bytes', name: 'req', type: 'bytes' }
		],
		name: 'query',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { WASM_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const wasmPrecompileContract = getWasmPrecompileEthersV6Contract(WASM_PRECOMPILE_ADDRESS, signer);
 *
 * const queryResponse = await addressPrecompileContract.connect().query(CONTRACT_ADDRESS, REQUEST);
 * ```
 *
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getWasmPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner) => {
	return new ethers.Contract(precompileAddress, WASM_PRECOMPILE_ABI as InterfaceAbi, runner) as WasmPrecompileContract;
};

import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

/**
 * Represents the functions available in the JSON precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface JSONPrecompileFunctions {
	/**
	 * Extracts data as bytes from the input using the specified key.
	 * @param input The input data from which to extract bytes.
	 * @param key The key to use for extraction.
	 * @returns A Promise resolving to an object containing the extracted bytes.
	 * @category Cosmos Interoperability
	 */
	extractAsBytes(input: string, key: string): Promise<{ response: string }>;

	/**
	 * Extracts data as a list of bytes from the input using the specified key.
	 * @param input The input data from which to extract a list of bytes.
	 * @param key The key to use for extraction.
	 * @returns A Promise resolving to an object containing the extracted list of bytes.
	 * @category Cosmos Interoperability
	 */
	extractAsBytesList(input: string, key: string): Promise<{ response: string[] }>;

	/**
	 * Extracts data as a uint256 from the input using the specified key.
	 * @param input The input data from which to extract a uint256.
	 * @param key The key to use for extraction.
	 * @returns A Promise resolving to an object containing the extracted uint256.
	 * @category Cosmos Interoperability
	 */
	extractAsUint256(input: string, key: string): Promise<{ response: ethers.BigNumberish }>;
}

/** Represents the typed contract instance for the JSON precompile contract.
 * @category Cosmos Interoperability
 */
export type JSONPrecompileContract = ethers.Contract & JSONPrecompileFunctions;

/**
 * The address of the JSON precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 * const extractedBytes = useReadContract({ abi: JSON_PRECOMPILE_ABI, address: ARCTIC_1_JSON_PRECOMPILE_ADDRESS, functionName: 'extractAsBytes', args: ['0xINPUT', 'KEY'] });
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 **
 * const jsonPrecompileContract = getJSONPrecompileEthersV6Contract(ARCTIC_1_JSON_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await jsonPrecompileContract.connect().extractAsBytes('0xINPUT', 'KEY');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ARCTIC_1_JSON_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001003';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 * const extractedBytes = useReadContract({ abi: JSON_PRECOMPILE_ABI, address: ARCTIC_1_JSON_PRECOMPILE_ADDRESS, functionName: 'extractAsBytes', args: ['0xINPUT', 'KEY'] });
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI, JSONPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 **
 * const jsonPrecompileContract = new ethers.Contract(ARCTIC_1_JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI, signer) as JSONPrecompileContract;
 *
 * const response = await jsonPrecompileContract.connect().extractAsBytes('0xINPUT', 'KEY');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const JSON_PRECOMPILE_ABI: Abi = [
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'string', name: 'key', type: 'string' }
		],
		name: 'extractAsBytes',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'string', name: 'key', type: 'string' }
		],
		name: 'extractAsBytesList',
		outputs: [{ internalType: 'bytes[]', name: 'response', type: 'bytes[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes', name: 'input', type: 'bytes' },
			{ internalType: 'string', name: 'key', type: 'string' }
		],
		name: 'extractAsUint256',
		outputs: [{ internalType: 'uint256', name: 'response', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_JSON_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const jsonPrecompileContract = getJSONPrecompileEthersV6Contract(ARCTIC_1_JSON_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await jsonPrecompileContract.connect().extractAsBytes('0xINPUT', 'KEY');
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getJSONPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): JSONPrecompileContract => {
	return new ethers.Contract(precompileAddress, JSON_PRECOMPILE_ABI as InterfaceAbi, runner) as JSONPrecompileContract;
};

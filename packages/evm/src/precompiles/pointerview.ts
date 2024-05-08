import { Abi } from 'viem';
import { ContractRunner, ethers, InterfaceAbi } from 'ethers';

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
export type PointerviewPrecompileContract = ethers.Contract & PointerviewPrecompileFunctions;

/**
 * The address of the Pointer precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the pointer of a CW20 contract.
 * ```tsx
 * import { POINTERVIEW_PRECOMPILE_ADDRESS, POINTERVIEW_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { data } = useReadContract({
 *    abi: POINTERVIEW_PRECOMPILE_ABI,
 *    address: POINTERVIEW_PRECOMPILE_ADDRESS,
 *    functionName: 'getCW20Pointer',
 *    args: ['CW20_CONTRACT_ADDRESS']
 * });
 *
 * console.log(data);
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the pointer of a CW20 contract.
 * ```tsx
 * import { POINTERVIEW_PRECOMPILE_ADDRESS, getPointerviewPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerviewPrecompileContract = getPointerviewPrecompileEthersV6Contract(POINTERVIEW_PRECOMPILE_ADDRESS, signer);
 *
 * const pointer = await pointerviewPrecompileContract.getCW20Pointer('CW20_CONTRACT_ADDRESS');
 * console.log(pointer);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const POINTERVIEW_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100A';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the pointer of a CW20 contract.
 * ```tsx
 * import { POINTERVIEW_PRECOMPILE_ADDRESS, POINTERVIEW_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { data } = useReadContract({
 *    abi: POINTERVIEW_PRECOMPILE_ABI,
 *    address: POINTERVIEW_PRECOMPILE_ADDRESS,
 *    functionName: 'getCW20Pointer',
 *    args: ['CW20_CONTRACT_ADDRESS']
 * });
 *
 * console.log(data);
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the pointer of a CW20 contract.
 * ```tsx
 * import { POINTERVIEW_PRECOMPILE_ADDRESS, POINTERVIEW_PRECOMPILE_ABI, PointerviewPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerviewPrecompileContract = new ethers.Contract(POINTERVIEW_PRECOMPILE_ADDRESS, POINTERVIEW_PRECOMPILE_ABI, signer) as PointerviewPrecompileContract;
 *
 * const pointer = await pointerviewPrecompileContract.getCW20Pointer('CW20_CONTRACT_ADDRESS');
 * console.log(pointer);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const POINTERVIEW_PRECOMPILE_ABI: Abi = [
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'getCW20Pointer',
		outputs: [
			{ internalType: 'address', name: 'addr', type: 'address' },
			{ internalType: 'uint16', name: 'version', type: 'uint16' },
			{ internalType: 'bool', name: 'exists', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'getCW721Pointer',
		outputs: [
			{ internalType: 'address', name: 'addr', type: 'address' },
			{ internalType: 'uint16', name: 'version', type: 'uint16' },
			{ internalType: 'bool', name: 'exists', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'token', type: 'string' }],
		name: 'getNativePointer',
		outputs: [
			{ internalType: 'address', name: 'addr', type: 'address' },
			{ internalType: 'uint16', name: 'version', type: 'uint16' },
			{ internalType: 'bool', name: 'exists', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { POINTERVIEW_PRECOMPILE_ADDRESS, getPointerviewPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerviewPrecompileContract = getPointerviewPrecompileEthersV6Contract(POINTERVIEW_PRECOMPILE_ADDRESS, signer);
 *
 * const pointer = await pointerviewPrecompileContract.getCW20Pointer('CW20_CONTRACT_ADDRESS');
 * console.log(pointer);
 * ```
 *
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getPointerviewPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): PointerviewPrecompileContract => {
	return new ethers.Contract(precompileAddress, POINTERVIEW_PRECOMPILE_ABI as InterfaceAbi, runner) as PointerviewPrecompileContract;
};

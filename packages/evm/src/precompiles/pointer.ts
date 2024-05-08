import { Abi } from 'viem';
import { ContractRunner, ethers, InterfaceAbi } from 'ethers';

/**
 * Represents the functions available in the Pointer precompile contract,
 * facilitating interoperability between the EVM and Cosmos for tokens.
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

/** Represents the typed contract instance for the Pointer precompile contract.
 * @category Cosmos Interoperability
 */
export type PointerPrecompileContract = ethers.Contract & PointerPrecompileFunctions;

/**
 * The address of the Pointer precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useWriteContract` hook to add a CW20 pointer.
 * ```tsx
 * import { POINTER_PRECOMPILE_ADDRESS, POINTER_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useWriteContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { write } = useWriteContract({
 *    abi: POINTER_PRECOMPILE_ABI,
 *    address: POINTER_PRECOMPILE_ADDRESS,
 *    functionName: 'addCW20Pointer',
 *    args: ['CW20_CONTRACT_ADDRESS'],
 *    value: ethers.utils.parseEther('0.01')
 * });
 *
 * write();
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to add a CW20 pointer.
 * ```tsx
 * import { POINTER_PRECOMPILE_ADDRESS, getPointerPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerPrecompileContract = getPointerPrecompileEthersV6Contract(POINTER_PRECOMPILE_ADDRESS, signer);
 *
 * const tx = await pointerPrecompileContract.addCW20Pointer('CW20_CONTRACT_ADDRESS', { value: ethers.utils.parseEther('0.01') });
 * console.log(tx);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const POINTER_PRECOMPILE_ADDRESS: `0x${string}` = '0x000000000000000000000000000000000000100B';

/**
 * The ABI for the Pointer precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useWriteContract` hook to add a CW20 pointer.
 * ```tsx
 * import { POINTER_PRECOMPILE_ADDRESS, POINTER_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useWriteContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { write } = useWriteContract({
 *    abi: POINTER_PRECOMPILE_ABI,
 *    address: POINTER_PRECOMPILE_ADDRESS,
 *    functionName: 'addCW20Pointer',
 *    args: ['CW20_CONTRACT_ADDRESS'],
 *    value: ethers.utils.parseEther('0.01')
 * });
 *
 * write();
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to add a CW20 pointer.
 * ```tsx
 * import { POINTER_PRECOMPILE_ADDRESS, POINTER_PRECOMPILE_ABI, PointerPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerPrecompileContract = new ethers.Contract(POINTER_PRECOMPILE_ADDRESS, POINTER_PRECOMPILE_ABI, signer) as PointerPrecompileContract;
 *
 * const tx = await pointerPrecompileContract.addCW20Pointer('CW20_CONTRACT_ADDRESS', { value: ethers.utils.parseEther('0.01') });
 * console.log(tx);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const POINTER_PRECOMPILE_ABI: Abi = [
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'addCW20Pointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'cwAddr', type: 'string' }],
		name: 'addCW721Pointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'token', type: 'string' }],
		name: 'addNativePointer',
		outputs: [{ internalType: 'address', name: 'ret', type: 'address' }],
		stateMutability: 'payable',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { POINTER_PRECOMPILE_ADDRESS, getPointerPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const pointerPrecompileContract = getPointerPrecompileEthersV6Contract(POINTER_PRECOMPILE_ADDRESS, signer);
 *
 * const tx = await pointerPrecompileContract.addCW20Pointer('CW20_CONTRACT_ADDRESS', { value: ethers.utils.parseEther('0.01') });
 * console.log(tx);
 * ```
 *
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getPointerPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): PointerPrecompileContract => {
	return new ethers.Contract(precompileAddress, POINTER_PRECOMPILE_ABI as InterfaceAbi, runner) as PointerPrecompileContract;
};

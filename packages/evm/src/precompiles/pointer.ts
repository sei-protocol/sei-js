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
export const POINTER_PRECOMPILE_ABI = [
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
] as const;

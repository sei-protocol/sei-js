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
 * The ABI for the pointerview precompile contract, which can be used for interoperability between the EVM and Cosmos.
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
export const POINTERVIEW_PRECOMPILE_ABI = [
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
] as const;

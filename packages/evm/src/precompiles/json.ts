/**
 * The address of the JSON precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 * const extractedBytes = useReadContract({ abi: JSON_PRECOMPILE_ABI, address: JSON_PRECOMPILE_ADDRESS, functionName: 'extractAsBytes', args: ['0xINPUT', 'KEY'] });
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { JSON_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 **
 * const jsonPrecompileContract = getJSONPrecompileEthersV6Contract(JSON_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await jsonPrecompileContract.connect().extractAsBytes('0xINPUT', 'KEY');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const JSON_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001003';

/**
 * The ABI for the JSON precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 * const extractedBytes = useReadContract({ abi: JSON_PRECOMPILE_ABI, address: JSON_PRECOMPILE_ADDRESS, functionName: 'extractAsBytes', args: ['0xINPUT', 'KEY'] });
 * ```
 *
 * @category Cosmos Interoperability
 */
export const JSON_PRECOMPILE_ABI = [
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
] as const;

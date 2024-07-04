/**
 * The address of the IBC precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to transfer funds from the associated address to another Cosmos waller on a different chain.
 * ```tsx
 * import { IBC_PRECOMPILE_ADDRESS, IBC_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const isSuccessful = useReadContract({ abi: IBC_PRECOMPILE_ABI, address: IBC_PRECOMPILE_ADDRESS, functionName: 'transfer', args: [COSMOS_ADDRESS, PORT, ... ] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { IBC_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const ibcPrecompileContract = getIbcPrecompileEthersV6Contract(IBC_PRECOMPILE_ADDRESS, signer);
 *
 * const queryResponse = await ibcPrecompileContract.transfer(cosmosAddress, 'transfer', 'channel-0', 'usei', 100, 1n, 1n, 1n, 'memo');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const IBC_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001009';

/**
 * The ABI for the IBC precompile contract.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to transfer funds from the associated address to another Cosmos waller on a different chain.
 * ```tsx
 * import { IBC_PRECOMPILE_ADDRESS, IBC_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const isSuccessful = useReadContract({ abi: IBC_PRECOMPILE_ABI, address: IBC_PRECOMPILE_ADDRESS, functionName: 'transfer', args: [COSMOS_ADDRESS, PORT, ... ] });
 * ```
 *
 * @category Cosmos Interoperability
 */
export const IBC_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'port', type: 'string' },
			{ internalType: 'string', name: 'channel', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint64', name: 'revisionNumber', type: 'uint64' },
			{ internalType: 'uint64', name: 'revisionHeight', type: 'uint64' },
			{ internalType: 'uint64', name: 'timeoutTimestamp', type: 'uint64' },
			{ internalType: 'string', name: 'memo', type: 'string' }
		],
		name: 'transfer',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'port', type: 'string' },
			{ internalType: 'string', name: 'channel', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'string', name: 'memo', type: 'string' }
		],
		name: 'transferWithDefaultTimeout',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	}
] as const;

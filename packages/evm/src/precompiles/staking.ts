/**
 * The address of the STAKING precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useWriteContract` hook to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { writeContract, data: hash } = useWriteContract();
 * const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * writeContract({
 *   abi: STAKING_PRECOMPILE_ABI,
 *   address: STAKING_PRECOMPILE_ADDRESS,
 *   functionName: 'delegate',
 *   args: ['0xVALIDATOR_ADDRESS', parseSei(1)]
 * });
 *
 * console.log({ hash, isConfirming, isConfirmed });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { STAKING_PRECOMPILE_ADDRESS, StakingPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = getStakingPrecompileEthersV6Contract(STAKING_PRECOMPILE_ADDRESS, signer);
 * *
 * const response = await contract.connect().delegate('0xVALIDATOR_ADDRESS', parseSei(1));
 * ```
 *
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001005';

/**
 * The ABI for the staking precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useWriteContract` hook to set the withdrawal address for rewards for the connected account.
 * ```tsx
 * import { STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { writeContract, data: hash } = useWriteContract();
 * const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * writeContract({
 *   abi: STAKING_PRECOMPILE_ABI,
 *   address: STAKING_PRECOMPILE_ADDRESS,
 *   functionName: 'delegate',
 *   args: ['0xVALIDATOR_ADDRESS', parseSei(1)]
 * });
 *
 * console.log({ hash, isConfirming, isConfirmed });
 * ```
 *
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'valAddress', type: 'string' }],
		name: 'delegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'srcAddress', type: 'string' },
			{ internalType: 'string', name: 'dstAddress', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'redelegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'valAddress', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'undelegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;

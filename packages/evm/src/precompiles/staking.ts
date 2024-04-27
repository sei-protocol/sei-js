import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

/**
 * Represents the functions available in the Staking precompile contract,
 * facilitating token delegation, re-delegation, and un-delegation.
 * @category Cosmos Interoperability
 */
export interface StakingPrecompileFunctions {
	/**
	 * Delegates tokens to the specified validator.
	 * @param valAddress The address of the validator to delegate tokens to.
	 * @returns A Promise resolving to an object indicating the success of the delegation transaction.
	 * @category Cosmos Interoperability
	 */
	delegate(valAddress: string): Promise<{ success: boolean }>;

	/**
	 * Re-delegates tokens from the source validator to the destination validator.
	 * @param srcAddress The address of the source validator.
	 * @param dstAddress The address of the destination validator.
	 * @param amount The amount of tokens to redelegate.
	 * @returns A Promise resolving to an object indicating the success of the re-delegation transaction.
	 * @category Cosmos Interoperability
	 */
	redelegate(srcAddress: string, dstAddress: string, amount: ethers.BigNumberish): Promise<{ success: boolean }>;

	/**
	 * Un-delegates tokens from the specified validator.
	 * @param valAddress The address of the validator from which to undelegate tokens.
	 * @param amount The amount of tokens to undelegate.
	 * @returns A Promise resolving to an object indicating the success of the undelegation transaction.
	 * @category Cosmos Interoperability
	 */
	undelegate(valAddress: string, amount: ethers.BigNumberish): Promise<{ success: boolean }>;
}

/** Represents the typed contract instance for the STAKING precompile contract.
 * @category Cosmos Interoperability
 * */
export type StakingPrecompileContract = ethers.Contract & StakingPrecompileFunctions;

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
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
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
 * ```tsx
 * import { STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI, StakingPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const contract = new ethers.Contract(STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI, signer) as StakingPrecompileContract;
 *
 * const response = await contract.connect().delegate('0xVALIDATOR_ADDRESS', parseSei(1));
 * ```
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ABI: Abi = [
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
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { STAKING_PRECOMPILE_ADDRESS, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);

 * const contract = getStakingPrecompileEthersV6Contract(STAKING_PRECOMPILE_ADDRESS, signer);
 *
 * const response = await contract.connect().delegate('0xVALIDATOR_ADDRESS', parseSei(1));
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getStakingPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): StakingPrecompileContract => {
	return new ethers.Contract(precompileAddress, STAKING_PRECOMPILE_ABI as InterfaceAbi, runner) as StakingPrecompileContract;
};

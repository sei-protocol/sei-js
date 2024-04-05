import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

/**
 * Represents the functions available in the IBC precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface IbcPrecompileFunctions {
	/**
	 * Transfers tokens from the caller's address to another on a different (IBC compatible) chain.
	 * @param toAddress The recipient's address on the other chain
	 * @param port IBC port in source chain (e.g. 'transfer')
	 * @param channel IBC channel in source chain (e.g. 'channel-0')
	 * @param denom The denomination of the tokens to send
	 * @param amount The amount of tokens to send
	 * @param revisionNumber The revision number of the source chain
	 * @param revisionHeight The revision height of the source chain
	 * @param timeoutTimestamp The timeout timestamp of the source chain
	 */
	transfer(toAddress: string, port: string, channel: string, denom: string, amount: ethers.BigNumberish,
					 revisionNumber: BigInt, revisionHeight: BigInt, timeoutTimestamp: BigInt): Promise<{ success: boolean }>;

}

/**
 * Represents the typed contract instance for the IBC precompile contract.
 * @category Cosmos Interoperability
 * */
export type IbcPrecompileContract = ethers.Contract & IbcPrecompileFunctions;

/**
 * The address of the IBC precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to transfer funds from the associated address to another Cosmos waller on a different chain.
 * ```tsx
 * import { ARCTIC_1_IBC_PRECOMPILE_ADDRESS, IBC_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const isSuccessful = useReadContract({ abi: IBC_PRECOMPILE_ABI, address: ARCTIC_1_IBC_PRECOMPILE_ADDRESS, functionName: 'transfer', args: [COSMOS_ADDRESS, PORT, ... ] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_IBC_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const ibcPrecompileContract = getIbcPrecompileEthersV6Contract(ARCTIC_1_IBC_PRECOMPILE_ADDRESS, signer);
 *
 * const queryResponse = await ibcPrecompileContract.transfer(cosmosAddress, 'transfer', 'channel-0', 'usei', 100, 1n, 1n, 1n);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ARCTIC_1_IBC_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001009';

/**
 * The ABI for the IBC precompile contract.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to transfer funds from the associated address to another Cosmos waller on a different chain.
 * ```tsx
 * import { ARCTIC_1_IBC_PRECOMPILE_ADDRESS, IBC_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const isSuccessful = useReadContract({ abi: IBC_PRECOMPILE_ABI, address: ARCTIC_1_IBC_PRECOMPILE_ADDRESS, functionName: 'transfer', args: [COSMOS_ADDRESS, PORT, ... ] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_IBC_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const ibcPrecompileContract = getIbcPrecompileEthersV6Contract(ARCTIC_1_IBC_PRECOMPILE_ADDRESS, signer);
 *
 * const queryResponse = await ibcPrecompileContract.transfer(cosmosAddress, 'transfer', 'channel-0', 'usei', 100, 1n, 1n, 1n);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const IBC_PRECOMPILE_ABI: Abi = [
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'port', type: 'string' },
			{ internalType: 'string', name: 'channel', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint64', name: 'revisionNumber', type: 'uint64' },
			{ internalType: 'uint64', name: 'revisionHeight', type: 'uint64' },
			{ internalType: 'uint64', name: 'timeoutTimestamp', type: 'uint64' }
		],
		name: 'transfer',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_IBC_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const ibcPrecompileContract = getIbcPrecompileEthersV6Contract(ARCTIC_1_IBC_PRECOMPILE_ADDRESS, signer);
 * const cosmosAddress = 'cosmos1...';
 *
 * const bool = await ibcPrecompileContract.transfer(cosmosAddress, 'transfer', 'channel-0', 'usei', 100, 1n, 1n, 1n);
 * ```
 *
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getIbcPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): IbcPrecompileContract => {
	return new ethers.Contract(precompileAddress, IBC_PRECOMPILE_ABI as InterfaceAbi, runner) as IbcPrecompileContract;
};

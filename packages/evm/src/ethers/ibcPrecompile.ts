import { BigNumberish, Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { IBC_PRECOMPILE_ABI, IBC_PRECOMPILE_ADDRESS } from '../precompiles';

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
	 * @param memo The memo to include in the transaction, if no memo is needed, pass an empty string
	 */
	transfer(
		toAddress: string,
		port: string,
		channel: string,
		denom: string,
		amount: BigNumberish,
		revisionNumber: BigInt,
		revisionHeight: BigInt,
		timeoutTimestamp: BigInt,
		memo: string
	): Promise<{ success: boolean }>;

	/**
	 * Transfers tokens from the caller's address to another on a different (IBC compatible) chain.
	 * Calculates the timeout height/timestamp based on the current block timestamp.
	 * @param toAddress The recipient's address on the other chain
	 * @param port IBC port in source chain (e.g. 'transfer')
	 * @param channel IBC channel in source chain (e.g. 'channel-0')
	 * @param denom The denomination of the tokens to send
	 * @param amount The amount of tokens to send
	 * @param memo The memo to include in the transaction, if no memo is needed, pass an empty string
	 */
	transferWithDefaultTimeout(toAddress: string, port: string, channel: string, denom: string, amount: BigNumberish, memo: string): Promise<{ success: boolean }>;
}

/**
 * Represents the typed contract instance for the IBC precompile contract.
 * @category Cosmos Interoperability
 * */
export type IbcPrecompileContract = Contract & IbcPrecompileFunctions;

/**
 * The ABI for the IBC precompile contract.
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
export const ETHERS_IBC_PRECOMPILE_ABI = IBC_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getIbcPrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const ibcPrecompileContract = getIbcPrecompileEthersV6Contract(signer);
 * const cosmosAddress = 'cosmos1...';
 *
 * const bool = await ibcPrecompileContract.transfer(cosmosAddress, 'transfer', 'channel-0', 'usei', 100, 1n, 1n, 1n, 'memo');
 * ```
 *
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getIbcPrecompileEthersV6Contract = (runner: ContractRunner): IbcPrecompileContract => {
	return new Contract(IBC_PRECOMPILE_ADDRESS, ETHERS_IBC_PRECOMPILE_ABI, runner) as IbcPrecompileContract;
};

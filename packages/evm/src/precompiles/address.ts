import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { type Abi } from 'viem';

/**
 * Represents the functions available in the Address precompile contract, facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface AddressPrecompileFunctions {
	/**
	 * Retrieves the associated EVM address for a given Cosmos address.
	 * @param addr The Cosmos address for which to retrieve the associated EVM address.
	 * @returns A Promise resolving to an object containing the associated EVM address.
	 * @category Cosmos Interoperability
	 */
	getEvmAddr(addr: string): Promise<{ response: string }>;
	/**
	 * Retrieves the associated Cosmos address for a given EVM address.
	 * @param addr The EVM address for which to retrieve the associated Cosmos address.
	 * @returns A Promise resolving to an object containing the associated Cosmos address.
	 * @category Cosmos Interoperability
	 */
	getSeiAddr(addr: string): Promise<{ response: string }>;
}

/** Represents the typed contract instance for the ADDRESS precompile contract.
 * @category Cosmos Interoperability
 * */
export type AddressPrecompileContract = ethers.Contract & AddressPrecompileFunctions;

/**
 * The address of the Address precompile contract, which can be used for interoperability between the EVM and Cosmos.
 * It can be used to get the associated EVM address for a given Cosmos address and vice versa.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, ADDRESS_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 * const associatedSeiAddress = useReadContract({ abi: ADDRESS_PRECOMPILE_ABI, address: ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, functionName: 'getSeiAddr', args: [address] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const addressPrecompileContract = getAddressPrecompileEthersV6Contract(ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, signer);
 *
 * const associatedSeiAddress = await addressPrecompileContract.getSeiAddr(accounts[0]);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001004';

/**
 * The ABI for the precompile contract which can be used for interoperability between the EVM and Cosmos.
 * It can be used to get the associated EVM address for a given Cosmos address and vice versa.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, ADDRESS_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 * const associatedSeiAddress = useReadContract({ abi: ADDRESS_PRECOMPILE_ABI, address: ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, functionName: 'getSeiAddr', args: [address] });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, AddressPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const addressPrecompileContract = new ethers.Contract(ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, ADDRESS_PRECOMPILE_ABI, signer) as AddressPrecompileContract;
 *
 * const associatedSeiAddress = await addressPrecompileContract.getSeiAddr(accounts[0]);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ADDRESS_PRECOMPILE_ABI: Abi = [
	{
		inputs: [{ internalType: 'string', name: 'addr', type: 'string' }],
		name: 'getEvmAddr',
		outputs: [{ internalType: 'address', name: 'response', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
		name: 'getSeiAddr',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 * It can be used to get the associated EVM address for a given Cosmos address and vice versa.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the associated Cosmos address for the connected account.
 * ```tsx
 * import { ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const addressPrecompileContract = getAddressPrecompileEthersV6Contract(ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, signer);
 *
 * const associatedSeiAddress = await addressPrecompileContract.connect().getSeiAddr(accounts[0]);
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the ADDRESS precompile contract.
 * @category Cosmos Interoperability
 */
export function getAddressPrecompileEthersV6Contract(precompileAddress: `0x${string}`, runner: ContractRunner): AddressPrecompileContract {
	return new ethers.Contract(precompileAddress, ADDRESS_PRECOMPILE_ABI as InterfaceAbi, runner) as AddressPrecompileContract;
}

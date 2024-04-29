import { ContractRunner, ethers, InterfaceAbi } from 'ethers';
import { Abi } from 'viem';

/**
 * Represents the functions available in the Bank precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface BankPrecompileFunctions {
	/**
	 * Retrieves the balance of the specified account for the given denomination.
	 * @param acc The account address for which to retrieve the balance.
	 * @param denom The denomination of the balance to retrieve.
	 * @returns A Promise resolving to an object containing the balance amount.
	 * @category Cosmos Interoperability
	 */
	balance(acc: string, denom: string): Promise<{ amount: ethers.BigNumberish }>;
	/**
	 * Retrieves the number of decimal places for the specified denomination.
	 * @param denom The denomination for which to retrieve the number of decimal places.
	 * @returns A Promise resolving to an object containing the number of decimal places.
	 * @category Cosmos Interoperability
	 */
	decimals(denom: string): Promise<{ response: ethers.BigNumberish }>;
	/**
	 * Retrieves the name of the specified denomination.
	 * @param denom The denomination for which to retrieve the name.
	 * @returns A Promise resolving to an object containing the denomination name.
	 * @category Cosmos Interoperability
	 */
	name(denom: string): Promise<{ response: string }>;
	/**
	 * Sends tokens from one address to another.
	 * @param fromAddress The sender's address.
	 * @param toAddress The recipient's address.
	 * @param denom The denomination of the tokens to send.
	 * @param amount The amount of tokens to send.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	send(fromAddress: string, toAddress: string, denom: string, amount: number): Promise<{ success: boolean }>;
	/**
	 * Retrieves the total supply of tokens for the specified denomination.
	 * @param denom The denomination for which to retrieve the total supply.
	 * @returns A Promise resolving to an object containing the total supply.
	 * @category Cosmos Interoperability
	 */
	supply(denom: string): Promise<{ response: ethers.BigNumberish }>;
	/**
	 * Retrieves the symbol of the specified denomination.
	 * @param denom The denomination for which to retrieve the symbol.
	 * @returns A Promise resolving to an object containing the denomination symbol.
	 * @category Cosmos Interoperability
	 */
	symbol(denom: string): Promise<{ response: string }>;
	/**
	 * Sends native tokens to a specified address.
	 * @param toNativeAddress The recipient's native address.
	 * @param value The amount of native tokens to send.
	 * @returns A Promise resolving to an object indicating the success of the transaction.
	 * @category Cosmos Interoperability
	 */
	sendNative(toNativeAddress: string, value: ethers.BigNumberish): Promise<{ success: boolean }>;
}

/** Represents the typed contract instance for the BANK precompile contract.
 * @category Cosmos Interoperability
 * */
export type BankPrecompileContract = ethers.Contract & BankPrecompileFunctions;

/**
 * The address of the BANK precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the balance of the connected account.
 * ```tsx
 * import { BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 *  const { data } = useReadContract({
 *    abi: BANK_PRECOMPILE_ABI,
 *    address: BANK_PRECOMPILE_ADDRESS,
 *    functionName: 'balance',
 *    args: [address, 'usei']
 *  });
 *
 *  console.log({ balance: data.balance });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the balance of the connected account.
 * ```tsx
 * import { BANK_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const bankPrecompileContract = getBankPrecompileEthersV6Contract(BANK_PRECOMPILE_ADDRESS, signer);
 *
 * const balance = await bankPrecompileContract.balance(accounts[0], 'usei');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const BANK_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001001';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the balance of the connected account.
 * ```tsx
 * import { BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { address } = useAccount();
 *
 *  const { data } = useReadContract({
 *    abi: BANK_PRECOMPILE_ABI,
 *    address: BANK_PRECOMPILE_ADDRESS,
 *    functionName: 'balance',
 *    args: [address, 'usei']
 *  });
 *
 *  console.log({ balance: data.balance });
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the balance of the connected account.
 * ```tsx
 * import { BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI, BankPrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const bankPrecompileContract = new ethers.Contract(BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI, signer) as BankPrecompileContract;
 *
 * const balance = await bankPrecompileContract.balance(accounts[0], 'usei');
 * ```
 *
 * @category Cosmos Interoperability
 */
export const BANK_PRECOMPILE_ABI: Abi = [
	{
		inputs: [
			{ internalType: 'address', name: 'acc', type: 'address' },
			{ internalType: 'string', name: 'denom', type: 'string' }
		],
		name: 'balance',
		outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'decimals',
		outputs: [{ internalType: 'uint8', name: 'response', type: 'uint8' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'name',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'fromAddress', type: 'address' },
			{ internalType: 'address', name: 'toAddress', type: 'address' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'send',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'supply',
		outputs: [{ internalType: 'uint256', name: 'response', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'denom', type: 'string' }],
		name: 'symbol',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: 'toNativeAddress', type: 'string' }],
		name: 'sendNative',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	}
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { BANK_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const bankPrecompileContract = getBankPrecompileEthersV6Contract(BANK_PRECOMPILE_ADDRESS, signer);
 *
 * const balance = await bankPrecompileContract.balance(accounts[0], 'usei');
 * ```
 *
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getBankPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): BankPrecompileContract => {
	return new ethers.Contract(precompileAddress, BANK_PRECOMPILE_ABI as InterfaceAbi, runner) as BankPrecompileContract;
};

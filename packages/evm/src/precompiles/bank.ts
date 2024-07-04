/**
 * The address of the Bank precompile contract, which can be used for interoperability between the EVM and Cosmos.
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
 * The ABI for the bank precompile contract, which can be used for interoperability between the EVM and Cosmos.
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
 * @category Cosmos Interoperability
 */
export const BANK_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'address', name: 'acc', type: 'address' }],
		name: 'all_balances',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					{ internalType: 'string', name: 'denom', type: 'string' }
				],
				internalType: 'struct IBank.Coin[]',
				name: 'response',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
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
		inputs: [{ internalType: 'string', name: 'toNativeAddress', type: 'string' }],
		name: 'sendNative',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
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
	}
] as const;

/**
 * The address of the Oracle precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the exchange rates.
 * ```tsx
 * import { ORACLE_PRECOMPILE_ADDRESS, ORACLE_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { data } = useReadContract({
 *    abi: ORACLE_PRECOMPILE_ABI,
 *    address: ORACLE_PRECOMPILE_ADDRESS,
 *    functionName: 'getExchangeRates'
 * });
 *
 * console.log(data);
 * ```
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the exchange rates.
 * ```tsx
 * import { ORACLE_PRECOMPILE_ADDRESS, getOraclePrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const oraclePrecompileContract = getOraclePrecompileEthersV6Contract(ORACLE_PRECOMPILE_ADDRESS, signer);
 *
 * const exchangeRates = await oraclePrecompileContract.getExchangeRates();
 * console.log(exchangeRates);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ORACLE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001002';

/**
 * The ABI for the Oracle precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi: Use the `useReadContract` hook to read the exchange rates.
 * ```tsx
 * import { ORACLE_PRECOMPILE_ADDRESS, ORACLE_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 *
 * // Make sure your component is wrapped in a WagmiProvider
 * const { data } = useReadContract({
 *    abi: ORACLE_PRECOMPILE_ABI,
 *    address: ORACLE_PRECOMPILE_ADDRESS,
 *    functionName: 'getExchangeRates'
 * });
 *
 * console.log(data);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ORACLE_PRECOMPILE_ABI = [
	{
		inputs: [],
		name: 'getExchangeRates',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'denom', type: 'string' },
					{
						components: [
							{ internalType: 'string', name: 'exchangeRate', type: 'string' },
							{ internalType: 'string', name: 'lastUpdate', type: 'string' },
							{ internalType: 'int64', name: 'lastUpdateTimestamp', type: 'int64' }
						],
						internalType: 'struct IOracle.OracleExchangeRate',
						name: 'oracleExchangeRateVal',
						type: 'tuple'
					}
				],
				internalType: 'struct IOracle.DenomOracleExchangeRatePair[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint64', name: 'lookback_seconds', type: 'uint64' }],
		name: 'getOracleTwaps',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'denom', type: 'string' },
					{ internalType: 'string', name: 'twap', type: 'string' },
					{ internalType: 'int64', name: 'lookbackSeconds', type: 'int64' }
				],
				internalType: 'struct IOracle.OracleTwap[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

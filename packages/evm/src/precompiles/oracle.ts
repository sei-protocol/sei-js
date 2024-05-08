import { Abi } from 'viem';
import { ContractRunner, ethers, InterfaceAbi } from 'ethers';

/**
 * Represents the functions available in the Oracle precompile contract,
 * facilitating interoperability between the EVM and Cosmos.
 * @category Cosmos Interoperability
 */
export interface OraclePrecompileFunctions {
	/**
	 * Retrieves the exchange rates for all denominations.
	 * @returns A Promise resolving to an array of denomination and exchange rate pairs.
	 * @category Cosmos Interoperability
	 */
	getExchangeRates(): Promise<
		{
			denom: string;
			oracleExchangeRateVal: {
				exchangeRate: string;
				lastUpdate: string;
				lastUpdateTimestamp: number;
			};
		}[]
	>;

	/**
	 * Retrieves Oracle Time-Weighted Average Prices (TWAPs) for the specified lookback period.
	 * @param lookbackSeconds The number of seconds to look back for the TWAP calculation.
	 * @returns A Promise resolving to an array of denomination and TWAP pairs.
	 * @category Cosmos Interoperability
	 */
	getOracleTwaps(lookbackSeconds: number): Promise<
		{
			denom: string;
			twap: string;
			lookbackSeconds: number;
		}[]
	>;
}

/** Represents the typed contract instance for the Oracle precompile contract.
 * @category Cosmos Interoperability
 */
export type OraclePrecompileContract = ethers.Contract & OraclePrecompileFunctions;

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
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the exchange rates.
 * ```tsx
 * import { ORACLE_PRECOMPILE_ADDRESS, ORACLE_PRECOMPILE_ABI, OraclePrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const oraclePrecompileContract = new ethers.Contract(ORACLE_PRECOMPILE_ADDRESS, ORACLE_PRECOMPILE_ABI, signer) as OraclePrecompileContract;
 *
 * const exchangeRates = await oraclePrecompileContract.getExchangeRates();
 * console.log(exchangeRates);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ORACLE_PRECOMPILE_ABI: Abi = [
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
];

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
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
 * @param precompileAddress The 0X address of the precompile contract.
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getOraclePrecompileEthersV6Contract = (precompileAddress: `0x${string}`, runner: ContractRunner): OraclePrecompileContract => {
	return new ethers.Contract(precompileAddress, ORACLE_PRECOMPILE_ABI as InterfaceAbi, runner) as OraclePrecompileContract;
};

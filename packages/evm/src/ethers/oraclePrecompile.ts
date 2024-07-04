import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { ORACLE_PRECOMPILE_ABI, ORACLE_PRECOMPILE_ADDRESS } from '../precompiles';

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
export type OraclePrecompileContract = Contract & OraclePrecompileFunctions;

/**
 * The ABI for the Oracle precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ethers v6: Use the `ethers` library and precompiles to read the exchange rates.
 * ```tsx
 * import { ORACLE_PRECOMPILE_ADDRESS, ETHERS_ORACLE_PRECOMPILE_ABI, OraclePrecompileContract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const oraclePrecompileContract = new ethers.Contract(ORACLE_PRECOMPILE_ADDRESS, ETHERS_ORACLE_PRECOMPILE_ABI, signer) as OraclePrecompileContract;
 *
 * const exchangeRates = await oraclePrecompileContract.getExchangeRates();
 * console.log(exchangeRates);
 * ```
 *
 * @category Cosmos Interoperability
 */
export const ETHERS_ORACLE_PRECOMPILE_ABI = ORACLE_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getOraclePrecompileEthersV6Contract } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const oraclePrecompileContract = getOraclePrecompileEthersV6Contract(signer);
 *
 * const exchangeRates = await oraclePrecompileContract.getExchangeRates();
 * console.log(exchangeRates);
 * ```
 *
 * @param runner a [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Cosmos Interoperability
 */
export const getOraclePrecompileEthersV6Contract = (runner: ContractRunner): OraclePrecompileContract => {
	return new Contract(ORACLE_PRECOMPILE_ADDRESS, ETHERS_ORACLE_PRECOMPILE_ABI, runner) as OraclePrecompileContract;
};

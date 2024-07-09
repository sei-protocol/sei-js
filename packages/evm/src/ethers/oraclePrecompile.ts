import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { ORACLE_PRECOMPILE_ABI, ORACLE_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Oracle precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_ORACLE_PRECOMPILE_ABI = ORACLE_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Oracle precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getOraclePrecompileEthersV6Contract } from '@sei-js/evm/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const oraclePrecompileContract = getOraclePrecompileEthersV6Contract(signer);
 *
 * const exchangeRates = await oraclePrecompileContract.getExchangeRates();
 * console.log('Exchange Rates:', exchangeRates);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Oracle precompile contract.
 * @category Cosmos Interoperability
 */
export const getOraclePrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(ORACLE_PRECOMPILE_ADDRESS, ETHERS_ORACLE_PRECOMPILE_ABI, runner);
};

import { Contract, ContractRunner, InterfaceAbi } from 'ethers';
import { STAKING_PRECOMPILE_ABI, STAKING_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Staking precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_STAKING_PRECOMPILE_ABI = STAKING_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Staking precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getStakingPrecompileEthersV6Contract, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const contract = getStakingPrecompileEthersV6Contract(signer);
 *
 * const response = await contract.delegate('0xVALIDATOR_ADDRESS', parseSei(1));
 * console.log('Delegate Response:', response);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const getStakingPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(STAKING_PRECOMPILE_ADDRESS, ETHERS_STAKING_PRECOMPILE_ABI, runner);
};

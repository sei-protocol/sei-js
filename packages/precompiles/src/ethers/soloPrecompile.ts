import { Contract, type ContractRunner, type InterfaceAbi } from 'ethers';
import { SOLO_PRECOMPILE_ABI, SOLO_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Solo precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_SOLO_PRECOMPILE_ABI = SOLO_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Solo precompile contract.
 * This contract is used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getSoloPrecompileEthersV6Contract } from '@sei-js/precompiles/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const soloPrecompileContract = getSoloPrecompileEthersV6Contract(signer);
 *
 * const claim = await soloPrecompileContract.claim();
 * console.log('Claim:', claim);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the Oracle precompile contract.
 * @category Cosmos Interoperability
 */
export const getSoloPrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(SOLO_PRECOMPILE_ADDRESS, ETHERS_SOLO_PRECOMPILE_ABI, runner);
};

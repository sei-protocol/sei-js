import { Contract, type ContractRunner, type InterfaceAbi } from 'ethers';
import { CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI, CONFIDENTIAL_TRANSFERS_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the Confidential Transfers precompile contract, used to create an Ethers contract.
 * @category Cosmos Interoperability
 */
export const ETHERS_CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI = CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates and returns a typed Ethers v6 contract instance for the Confidential Transfers precompile contract.
 * This contract is used for interacting with the Confidential Transfers module while using the EVM.
 *
 * @example
 * ```tsx
 * import { getConfidentialTransfersPrecompileEthersV6Contract } from '@sei-js/precompiles/ethers';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
 * const signer = await provider.getSigner();
 *
 * const accounts = await provider.send('eth_requestAccounts', []);
 *
 * const confidentialTransfersPrecompileContract = getConfidentialTransfersPrecompileEthersV6Contract(signer);
 *
 * const seiAddr = await confidentialTransfersPrecompileContract.initializeAccount(props);
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) (read-only) or ethers.Signer to use with the contract.
 * @returns The typed contract instance for interacting with the precompile contract.
 * @category Cosmos Interoperability
 */
export function getConfidentialTransfersPrecompileEthersV6Contract(runner: ContractRunner) {
	return new Contract(CONFIDENTIAL_TRANSFERS_PRECOMPILE_ADDRESS, ETHERS_CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI, runner);
}

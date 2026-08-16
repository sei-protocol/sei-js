import { Contract, type ContractRunner, type InterfaceAbi } from 'ethers';
import { P256_PRECOMPILE_ABI, P256_PRECOMPILE_ADDRESS } from '../precompiles';

/**
 * The ABI for the P256 precompile contract, used to create an Ethers contract.
 * @category ABI
 */
export const ETHERS_P256_PRECOMPILE_ABI = P256_PRECOMPILE_ABI as InterfaceAbi;

/**
 * Creates an Ethers v6 contract instance for the P256 signature verification precompile.
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) or ethers.Signer to use with the contract.
 * @returns The contract instance for interacting with the P256 precompile.
 * @category Contract Factory
 */
export const getP256PrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(P256_PRECOMPILE_ADDRESS, ETHERS_P256_PRECOMPILE_ABI, runner);
};

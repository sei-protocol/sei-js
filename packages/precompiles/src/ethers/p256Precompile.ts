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
 * Invalid signatures return no data on-chain, which makes Ethers reject the high-level
 * call with `BAD_DATA`. Treat that error as a failed verification, but rethrow other errors.
 *
 * @example
 * ```ts
 * import { concat, isError, zeroPadValue } from 'ethers';
 * import { getP256PrecompileEthersV6Contract } from '@sei-js/precompiles/ethers';
 *
 * const p256 = getP256PrecompileEthersV6Contract(provider);
 *
 * const verifyP256 = async (digest: string, r: string, s: string, publicKeyX: string, publicKeyY: string) => {
 *   const input = concat([digest, r, s, publicKeyX, publicKeyY].map((value) => zeroPadValue(value, 32)));
 *
 *   try {
 *     return (await p256.verify(input)) === zeroPadValue('0x01', 32);
 *   } catch (error) {
 *     if (isError(error, 'BAD_DATA')) return false;
 *     throw error;
 *   }
 * };
 * ```
 *
 * @param runner A [Provider](https://docs.ethers.org/v6/api/providers/) or ethers.Signer to use with the contract.
 * @returns The contract instance for interacting with the P256 precompile.
 * @category Contract Factory
 */
export const getP256PrecompileEthersV6Contract = (runner: ContractRunner) => {
	return new Contract(P256_PRECOMPILE_ADDRESS, ETHERS_P256_PRECOMPILE_ABI, runner);
};

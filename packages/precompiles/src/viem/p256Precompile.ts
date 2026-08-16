import type { Abi } from 'viem';
import { P256_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the P256 precompile contract.
 * @category ABI
 */
export const VIEM_P256_PRECOMPILE_ABI = P256_PRECOMPILE_ABI as Abi;

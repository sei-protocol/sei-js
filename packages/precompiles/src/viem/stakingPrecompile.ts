import type { Abi } from 'viem';
import { STAKING_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Staking precompile contract.
 * @category ABI
 */
export const VIEM_STAKING_PRECOMPILE_ABI = STAKING_PRECOMPILE_ABI as Abi;

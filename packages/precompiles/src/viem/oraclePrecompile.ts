import type { Abi } from 'viem';
import { ORACLE_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Oracle precompile contract.
 * @category ABI
 */
export const VIEM_ORACLE_PRECOMPILE_ABI = ORACLE_PRECOMPILE_ABI as Abi;

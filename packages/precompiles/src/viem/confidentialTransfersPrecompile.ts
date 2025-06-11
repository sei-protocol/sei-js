import type { Abi } from 'viem';
import { CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Confidential Transfers precompile contract.
 * @category ABI
 */
export const VIEM_CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI = CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI as Abi;

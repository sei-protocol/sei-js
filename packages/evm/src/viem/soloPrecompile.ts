import type { Abi } from 'viem';
import { SOLO_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Solo precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_SOLO_PRECOMPILE_ABI = SOLO_PRECOMPILE_ABI as Abi;

import { Abi } from 'viem';
import { STAKING_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_STAKING_PRECOMPILE_ABI = STAKING_PRECOMPILE_ABI as Abi;

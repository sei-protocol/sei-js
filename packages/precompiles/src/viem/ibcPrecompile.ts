import type { Abi } from 'viem';
import { IBC_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the IBC precompile contract.
 * @category ABI
 */
export const VIEM_IBC_PRECOMPILE_ABI = IBC_PRECOMPILE_ABI as Abi;

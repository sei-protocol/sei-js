import type { Abi } from 'viem';
import { ADDRESS_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Address precompile contract.
 * @category ABI
 */
export const VIEM_ADDRESS_PRECOMPILE_ABI = ADDRESS_PRECOMPILE_ABI as Abi;

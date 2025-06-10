import { Abi } from 'viem';
import { BANK_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Bank precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_BANK_PRECOMPILE_ABI = BANK_PRECOMPILE_ABI as Abi;

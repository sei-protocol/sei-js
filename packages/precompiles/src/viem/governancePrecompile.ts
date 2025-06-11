import type { Abi } from 'viem';
import { GOVERNANCE_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Governance precompile contract.
 * @category ABI
 */
export const VIEM_GOVERNANCE_PRECOMPILE_ABI = GOVERNANCE_PRECOMPILE_ABI as Abi;

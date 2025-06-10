import { Abi } from 'viem';
import { GOVERNANCE_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Governance precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_GOVERNANCE_PRECOMPILE_ABI = GOVERNANCE_PRECOMPILE_ABI as Abi;

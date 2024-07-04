import { Abi } from 'viem';
import { WASM_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the Wasm precompile contract.
 * @category Cosmos Interoperability
 */
export const VIEM_WASM_PRECOMPILE_ABI = WASM_PRECOMPILE_ABI as Abi;

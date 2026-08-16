import type { Abi } from 'viem';

/**
 * The address of the P256 precompile contract.
 * @category Address
 */
export const P256_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001011';

/**
 * The ABI for the P256 precompile contract.
 *
 * `verify` expects exactly 160 bytes containing five 32-byte values in this order:
 * message digest, signature `r`, signature `s`, public-key `x`, and public-key `y`.
 * A valid signature decodes to 32 bytes ending in `01`. An invalid signature returns
 * no data, so high-level clients can throw while decoding instead of returning `false`.
 *
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/p256/legacy/v66/abi.json
 * @see https://docs.sei.io/evm/precompiles/p256-precompile
 * @category ABI
 */
export const P256_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'bytes', name: 'signature', type: 'bytes' }],
		name: 'verify',
		outputs: [{ internalType: 'bytes', name: 'response', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const satisfies Abi;

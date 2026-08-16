/**
 * The address of the P256 precompile contract.
 * @category Address
 */
export const P256_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001011';

/**
 * The ABI for the P256 precompile contract.
 * Synced from the frozen Sei Chain v6.6.1 precompile snapshot.
 * @see https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/p256/legacy/v66/abi.json
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
] as const;

import type { AbiEvent, Address, GetLogsReturnType, PublicClient } from 'viem';

/**
 * The largest `fromBlock`..`toBlock` span Sei's public EVM RPC accepts for a
 * single `eth_getLogs` call.
 *
 * The range is **inclusive of both ends**, so the check the node applies is
 * `toBlock - fromBlock + 1 <= 2000`. Measured against both public endpoints on
 * 2026-08-28: a 2000-block span succeeds and a 2001-block span is rejected with
 *
 * ```
 * block range too large (2001), maximum allowed is 2000 blocks
 * ```
 *
 * The inclusive boundary is the part worth encoding. Writing the loop as
 * `to = from + MAX` rather than `from + MAX - 1` asks for 2001 blocks and fails
 * on every chunk, and writing it as `from + 1000` works but doubles the number
 * of round trips a backfill needs.
 *
 * @category Logs
 */
export const MAX_GET_LOGS_BLOCK_RANGE = 2000n;

/**
 * Options for {@link getLogsInRange}.
 *
 * @category Logs
 */
export interface GetLogsInRangeOptions<TAbiEvent extends AbiEvent | undefined = undefined> {
	/** Contract to read. Omit to read every address, as `eth_getLogs` does. */
	address?: Address | Address[];
	/** A single event to decode. Omit for raw logs. */
	event?: TAbiEvent;
	/** First block to include. Inclusive. */
	fromBlock: bigint;
	/** Last block to include. Inclusive. Defaults to the current head. */
	toBlock?: bigint;
	/**
	 * Blocks per request. Defaults to {@link MAX_GET_LOGS_BLOCK_RANGE}.
	 *
	 * Lower it for a provider with a smaller cap than the public endpoints, or
	 * when a range that wide returns more logs than you want to hold at once.
	 */
	chunkSize?: bigint;
	/**
	 * Called after each chunk, for progress on a long backfill.
	 *
	 * A backfill over months of history is thousands of requests; without a
	 * progress signal it is indistinguishable from a hang.
	 */
	onChunk?: (progress: { fromBlock: bigint; toBlock: bigint; head: bigint; logs: number }) => void;
}

/**
 * Read logs across a block range, in requests the node will accept.
 *
 * `eth_getLogs` is capped per call, so any history longer than the cap has to
 * be walked in chunks. That loop is small but easy to get wrong in two ways
 * that both look like a working indexer: an off-by-one on the inclusive range
 * that fails every request, and a chunk size that silently truncates on a
 * provider with a tighter limit.
 *
 * Sei needs **no confirmation depth**. Its consensus finalises a block as it is
 * produced, so there is no reorg window to wait out and reading to head is
 * safe. Most EVM indexing code carries a `confirmations` setting defaulted to
 * something like 12 because Ethereum needs it; on Sei that is pure added
 * latency. This reads to head, and a caller who wants a lag can pass an
 * explicit `toBlock`.
 *
 * @example
 * ```ts
 * import { createPublicClient, http, parseAbiItem } from 'viem';
 * import { getLogsInRange, seiTestnet } from '@sei-js/precompiles';
 *
 * const client = createPublicClient({ chain: seiTestnet, transport: http() });
 *
 * const logs = await getLogsInRange(client, {
 *   address: '0x…',
 *   event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'),
 *   fromBlock: 267_000_000n,
 *   onChunk: ({ toBlock, head }) => console.log(`${toBlock}/${head}`)
 * });
 * ```
 *
 * @category Logs
 */
export async function getLogsInRange<TAbiEvent extends AbiEvent | undefined = undefined>(
	client: PublicClient,
	options: GetLogsInRangeOptions<TAbiEvent>
): Promise<GetLogsReturnType<TAbiEvent>> {
	const chunkSize = options.chunkSize ?? MAX_GET_LOGS_BLOCK_RANGE;
	if (chunkSize < 1n) {
		throw new Error(`chunkSize must be at least 1, received ${chunkSize}`);
	}

	const head = options.toBlock ?? (await client.getBlockNumber());
	const out = [] as unknown as GetLogsReturnType<TAbiEvent>;
	if (options.fromBlock > head) return out;

	for (let from = options.fromBlock; from <= head; from += chunkSize) {
		// INCLUSIVE on both ends, which is why this is `- 1n`. Without it every
		// request asks for chunkSize + 1 blocks and the node rejects all of them.
		const last = from + chunkSize - 1n;
		const to = last > head ? head : last;

		const logs = await client.getLogs({
			...(options.address === undefined ? {} : { address: options.address }),
			...(options.event === undefined ? {} : { event: options.event }),
			fromBlock: from,
			toBlock: to
		} as Parameters<PublicClient['getLogs']>[0]);

		out.push(...(logs as typeof out));
		options.onChunk?.({ fromBlock: from, toBlock: to, head, logs: logs.length });
	}

	return out;
}

/**
 * The block ranges {@link getLogsInRange} would request, without making any.
 *
 * Useful for planning a backfill — how many requests it will take, or to drive
 * a bounded worker pool rather than one sequential loop.
 *
 * @example
 * ```ts
 * const chunks = [...blockRanges(1_000_000n, 1_006_000n)];
 * // [{ fromBlock: 1000000n, toBlock: 1001999n }, … ]
 * ```
 *
 * @category Logs
 */
export function* blockRanges(
	fromBlock: bigint,
	toBlock: bigint,
	chunkSize: bigint = MAX_GET_LOGS_BLOCK_RANGE
): Generator<{ fromBlock: bigint; toBlock: bigint }> {
	if (chunkSize < 1n) {
		throw new Error(`chunkSize must be at least 1, received ${chunkSize}`);
	}
	for (let from = fromBlock; from <= toBlock; from += chunkSize) {
		const last = from + chunkSize - 1n;
		yield { fromBlock: from, toBlock: last > toBlock ? toBlock : last };
	}
}

import type { AbiEvent, Address, Chain, Client, GetLogsReturnType, MaybeAbiEventName, MaybeExtractEventArgsFromAbi, Transport } from 'viem';
import { getBlockNumber, getLogs } from 'viem/actions';
import { getAction } from 'viem/utils';

/**
 * The default `fromBlock`..`toBlock` span of one `eth_getLogs` request.
 *
 * 2000 is the `max_blocks_for_log` default in sei-chain
 * (`evmrpc/config/config.go`) and what both public endpoints enforce. The span
 * is **inclusive of both ends**: the node computes it as
 * `toBlock - fromBlock + 1` (`evmrpc/filter.go`), so a 2000-block span passes
 * and a 2001-block span is refused with
 *
 * ```
 * block range too large (2001), maximum allowed is 2000 blocks
 * ```
 *
 * Writing the loop as `to = from + MAX` rather than `from + MAX - 1` asks for
 * 2001 blocks and fails on every request, and writing it as `from + 1000` works
 * but doubles the round trips a backfill needs.
 *
 * Operators can change `max_blocks_for_log`, so this is a default rather than a
 * protocol constant. {@link streamLogsInRange} reads a tighter maximum out of
 * the node's refusal and walks at that instead.
 *
 * @category Logs
 */
export const MAX_GET_LOGS_BLOCK_RANGE: bigint = 2000n;

/**
 * What to match, as viem's `getLogs` takes it, minus the block bounds the walk
 * owns: `address`, then one `event` with optional indexed `args`, or several
 * `events`, and `strict`.
 *
 * To share one filter between calls, check it with
 * `satisfies LogsInRangeFilter<typeof event>` rather than annotating the
 * variable, which widens it and loses the event type the call infers from.
 *
 * @category Logs
 */
export type LogsInRangeFilter<
	abiEvent extends AbiEvent | undefined = undefined,
	abiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = abiEvent extends AbiEvent ? [abiEvent] : undefined,
	strict extends boolean | undefined = undefined
> = {
	/** Contract or contracts to read. Omit to read every address, as `eth_getLogs` does. */
	address?: Address | Address[] | undefined;
} & (
	| {
			/** One event to match and decode. */
			event: abiEvent;
			events?: undefined;
			/** Indexed arguments to match, filtered by the node rather than after the fact. */
			args?: MaybeExtractEventArgsFromAbi<abiEvents, MaybeAbiEventName<abiEvent>> | undefined;
			/** Only return logs whose indexed and non-indexed arguments match `event` exactly. */
			strict?: strict | undefined;
	  }
	| {
			event?: undefined;
			/**
			 * Several events to match in one request, each decoded against its own
			 * entry. A whole contract ABI works too: its functions and errors are
			 * left out of the request.
			 */
			events: abiEvents;
			args?: undefined;
			/** Only return logs whose indexed and non-indexed arguments match their event exactly. */
			strict?: strict | undefined;
	  }
	| {
			event?: undefined;
			events?: undefined;
			args?: undefined;
			strict?: undefined;
	  }
);

/**
 * Parameters for {@link streamLogsInRange}.
 *
 * @category Logs
 */
export type StreamLogsInRangeParameters<
	abiEvent extends AbiEvent | undefined = undefined,
	abiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = abiEvent extends AbiEvent ? [abiEvent] : undefined,
	strict extends boolean | undefined = undefined
> = LogsInRangeFilter<abiEvent, abiEvents, strict> & {
	/** First block to include. Inclusive. */
	fromBlock: bigint;
	/** Last block to include. Inclusive. Defaults to the head when the walk starts. */
	toBlock?: bigint | undefined;
	/**
	 * The widest span to request, and the width the walk starts at. Defaults to
	 * {@link MAX_GET_LOGS_BLOCK_RANGE}.
	 */
	chunkSize?: bigint | undefined;
	/** How many times to retry a range the node refused as busy or rate limited. Defaults to 3. */
	retryCount?: number | undefined;
	/** Milliseconds before the first retry, doubling on each one after. Defaults to 500. */
	retryDelay?: number | undefined;
};

/**
 * An inclusive span of blocks.
 *
 * @category Logs
 */
export type BlockRange = {
	/** First block. Inclusive. */
	fromBlock: bigint;
	/** Last block. Inclusive. */
	toBlock: bigint;
};

/**
 * One contiguous piece of a walk.
 *
 * @category Logs
 */
export type LogsChunk<
	abiEvent extends AbiEvent | undefined = undefined,
	abiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = abiEvent extends AbiEvent ? [abiEvent] : undefined,
	strict extends boolean | undefined = undefined
> = {
	/** First block this chunk covers. */
	fromBlock: bigint;
	/** Last block this chunk covers. A resumed walk starts at `toBlock + 1n`. */
	toBlock: bigint;
	/** Last block of the whole walk: the `toBlock` passed in, or the head it resolved to. */
	endBlock: bigint;
	/** The logs in `fromBlock`..`toBlock`, in the order the node returned them. */
	logs: GetLogsReturnType<abiEvent, abiEvents, strict>;
};

/**
 * Parameters for {@link getLogsInRange}.
 *
 * @category Logs
 */
export type GetLogsInRangeParameters<
	abiEvent extends AbiEvent | undefined = undefined,
	abiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = abiEvent extends AbiEvent ? [abiEvent] : undefined,
	strict extends boolean | undefined = undefined
> = StreamLogsInRangeParameters<abiEvent, abiEvents, strict> & {
	/**
	 * Called with each chunk as it lands, and awaited before the next request,
	 * for progress on a long read. A handler kept outside the call should be
	 * typed `LogsChunk<typeof event>`, or take only the fields it reads, so it
	 * doesn't pin the event type to `undefined`.
	 */
	onChunk?: ((chunk: LogsChunk<abiEvent, abiEvents, strict>) => unknown) | undefined;
};

/** Sei applies its large query rate limit only to spans wider than this (`RPSLimitThreshold`, `evmrpc/filter.go`). */
const RATE_LIMIT_FREE_SPAN = 100n;

/** Successes in a row before the walk asks again for a span the node refused. */
const PROBE_AFTER = 8;

/** Client timeouts in a row the walk splits on before it treats the endpoint as down. */
const TIMEOUT_SPLITS = 3;

/** The longest single wait between retries, unless `retryDelay` itself is longer. */
const MAX_RETRY_WAIT = 30_000;

/**
 * Walk a block range with `eth_getLogs`, yielding each chunk as it lands.
 *
 * Every request carries both bounds and is sized so the node answers it:
 *
 * - No span is wider than `chunkSize`, counted inclusively the way the node
 *   counts it.
 * - A span too heavy to answer is halved and asked again. From sei-chain v6.7
 *   a node refuses a request matching more than `max_log_no_block` logs
 *   (10000 by default) or its byte budget with `query matches too many logs`.
 *   Before v6.7 it serves a bounded request whole, and on a busy range that can
 *   pass viem's 10 MiB `maxResponseBodySize` instead. A node that times out on
 *   the span, or a client timeout once the endpoint has answered at least one
 *   chunk, is treated the same way. A single block still too heavy can't be
 *   split, so that error is thrown, and the fix is a narrower filter.
 * - After a heavy span, the walk holds below it and only asks for it again
 *   after a run of successes, so a steadily dense range isn't refused on every
 *   other request.
 * - When the node refuses a span as too wide for its own `max_blocks_for_log`,
 *   the walk drops to the maximum the refusal names and stays at or under it.
 * - Sei's transient refusals (`server too busy`, `server I/O saturated`,
 *   `system overloaded` and the large query rate limit) are retried
 *   `retryCount` times with exponential backoff. They arrive as JSON-RPC
 *   `-32000`, which viem's transport doesn't retry on its own. The rate limit
 *   only applies to spans over 100 blocks, so when it outlasts the retries the
 *   walk steps down to 100 rather than giving up.
 * - Without a `toBlock`, a final chunk refused as `after latest available
 *   block` is retried the same way, since a node behind a load balancer can
 *   trail the one that reported the head.
 *
 * Anything else, such as a `fromBlock` older than the node retains, is thrown
 * as is. Always sending `toBlock` matters on its own: nodes before sei-chain
 * v6.7 silently cut a request missing either bound off at `max_log_no_block`
 * logs, which looks exactly like a quiet range.
 *
 * Chunks are contiguous, each starting at the block after the last one ended,
 * so a caller that stores `toBlock` alongside the logs can resume a failed walk
 * from `toBlock + 1n`. The walk waits for the consumer between chunks, so
 * storing each chunk before asking for the next keeps one chunk in memory at a
 * time.
 *
 * Sei needs **no confirmation depth**. Its consensus finalises a block as it is
 * produced, so there is no reorg window to wait out, and without `toBlock` this
 * reads to the head as it was when the walk started. A caller who wants to lag
 * head passes an explicit `toBlock`.
 *
 * This reads `eth_getLogs`, which leaves out the logs Sei synthesises for
 * CosmWasm and pointer activity. `sei_getLogs` includes those.
 *
 * @example
 * ```ts
 * import { createPublicClient, http, parseAbi } from 'viem';
 * import { sei, streamLogsInRange } from '@sei-js/precompiles/viem';
 *
 * const client = createPublicClient({ chain: sei, transport: http() });
 * const events = parseAbi([
 *   'event Transfer(address indexed from, address indexed to, uint256 value)',
 *   'event Approval(address indexed owner, address indexed spender, uint256 value)'
 * ]);
 *
 * for await (const chunk of streamLogsInRange(client, { address: '0x…', events, fromBlock: cursor + 1n })) {
 *   await save(chunk.logs, chunk.toBlock);
 * }
 * ```
 *
 * @category Logs
 */
export async function* streamLogsInRange<
	chain extends Chain | undefined,
	const abiEvent extends AbiEvent | undefined = undefined,
	const abiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = abiEvent extends AbiEvent ? [abiEvent] : undefined,
	strict extends boolean | undefined = undefined
>(
	client: Client<Transport, chain>,
	parameters: StreamLogsInRangeParameters<abiEvent, abiEvents, strict>
): AsyncGenerator<LogsChunk<abiEvent, abiEvents, strict>, void, undefined> {
	const { fromBlock, toBlock, chunkSize = MAX_GET_LOGS_BLOCK_RANGE, retryCount = 3, retryDelay = 500, ...filter } = parameters;
	assertBlock('fromBlock', fromBlock);
	if (toBlock !== undefined) assertBlock('toBlock', toBlock);
	assertChunkSize(chunkSize);
	if (!Number.isInteger(retryCount) || retryCount < 0) {
		throw new TypeError(`retryCount must be a non-negative integer, received ${describe(retryCount)}`);
	}
	if (typeof retryDelay !== 'number' || !Number.isFinite(retryDelay) || retryDelay < 0) {
		throw new TypeError(`retryDelay must be a non-negative number of milliseconds, received ${describe(retryDelay)}`);
	}
	// viem takes a blockHash in place of the range, so one passed through here
	// would read that single block for every chunk and never read the range.
	if ((filter as { blockHash?: unknown }).blockHash !== undefined) {
		throw new TypeError('streamLogsInRange reads a block range, so blockHash is not supported');
	}
	let match = filter;
	if (filter.events !== undefined) {
		// Keep only the events, as viem's getContractEvents does, so a whole
		// contract ABI can be passed straight in. getLogs throws "Event not found
		// on ABI" at the first function it meets.
		const events = (filter.events as readonly unknown[]).filter(isEventEntry) as unknown as abiEvents & readonly unknown[];
		if (events.length === 0) {
			throw new TypeError('events has no event entries, so there is nothing to match');
		}
		match = { ...filter, events } as typeof filter;
	}

	// A fresh head, not viem's cached one, which trails by the client's polling
	// interval (four seconds by default, about eight Sei blocks).
	const endBlock = toBlock ?? (await getAction(client, getBlockNumber, 'getBlockNumber')({ cacheTime: 0 }));
	const request = getAction(client, getLogs<chain, abiEvent, abiEvents, strict, bigint, bigint>, 'getLogs');

	let ceiling = chunkSize;
	let width = chunkSize;
	// A span the node refused for its weight. The walk holds below it until
	// PROBE_AFTER chunks in a row succeed, then asks for it again.
	let heavy: bigint | undefined;
	let streak = 0;
	let retries = 0;
	let timeouts = 0;
	let answered = false;
	let from = fromBlock;
	while (from <= endBlock) {
		const to = rangeEnd(from, width, endBlock);
		const span = to - from + 1n;
		let logs: GetLogsReturnType<abiEvent, abiEvents, strict>;
		try {
			logs = await request({ ...match, fromBlock: from, toBlock: to });
		} catch (error) {
			const kind = classifyRefusal(error);
			// A client timeout counts as heavy only once this endpoint has answered,
			// and only a few times running, so an endpoint that is down still fails
			// about as fast as viem alone would.
			const splitOnTimeout = kind === 'client-timeout' && answered && timeouts < TIMEOUT_SPLITS;
			if ((kind === 'heavy' || splitOnTimeout) && span > 1n) {
				if (splitOnTimeout) timeouts += 1;
				heavy = span;
				width = span / 2n;
				streak = 0;
				retries = 0;
				continue;
			}
			if (kind instanceof RangeRefusal && span > 1n) {
				// Take the node's own maximum when it names one below what was asked,
				// and halve otherwise, so a node that counts differently still shrinks
				// the span on every refusal.
				const named = kind.maximum;
				width = named !== undefined && named >= 1n && named < span ? named : span / 2n;
				if (width < ceiling) ceiling = width;
				retries = 0;
				continue;
			}
			const transient = kind === 'busy' || kind === 'rate-limited' || (kind === 'behind' && toBlock === undefined);
			if (transient && retries < retryCount) {
				await sleep(Math.min(retryDelay * 2 ** retries, Math.max(retryDelay, MAX_RETRY_WAIT)));
				retries += 1;
				continue;
			}
			if (kind === 'rate-limited' && span > RATE_LIMIT_FREE_SPAN) {
				heavy = RATE_LIMIT_FREE_SPAN + 1n;
				width = RATE_LIMIT_FREE_SPAN;
				streak = 0;
				retries = 0;
				continue;
			}
			throw error;
		}
		answered = true;
		retries = 0;
		timeouts = 0;
		streak += 1;
		yield { fromBlock: from, toBlock: to, endBlock, logs };
		from = to + 1n;
		let next = width * 2n > ceiling ? ceiling : width * 2n;
		if (heavy !== undefined && next >= heavy) {
			if (streak < PROBE_AFTER) next = width;
			else heavy = undefined;
		}
		width = next;
	}
}

/**
 * Read logs across a block range, in requests the node will answer.
 *
 * Collects {@link streamLogsInRange} into one array, so it has the same sizing,
 * halving and retry behaviour. It suits a range whose logs fit comfortably in
 * memory. For a long backfill, use the stream and store each chunk as it lands,
 * so a failure part way through doesn't take the chunks already read with it.
 *
 * @example
 * ```ts
 * import { createPublicClient, http, parseAbiItem } from 'viem';
 * import { getLogsInRange, sei } from '@sei-js/precompiles/viem';
 *
 * const client = createPublicClient({ chain: sei, transport: http() });
 * const head = await client.getBlockNumber();
 *
 * const logs = await getLogsInRange(client, {
 *   address: '0x…',
 *   event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'),
 *   args: { to: '0x…' },
 *   fromBlock: head - 20_000n,
 *   toBlock: head,
 *   onChunk: ({ toBlock, endBlock }) => console.log(`${toBlock}/${endBlock}`)
 * });
 * ```
 *
 * @category Logs
 */
export async function getLogsInRange<
	chain extends Chain | undefined,
	const abiEvent extends AbiEvent | undefined = undefined,
	const abiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = abiEvent extends AbiEvent ? [abiEvent] : undefined,
	strict extends boolean | undefined = undefined
>(
	client: Client<Transport, chain>,
	parameters: GetLogsInRangeParameters<abiEvent, abiEvents, strict>
): Promise<GetLogsReturnType<abiEvent, abiEvents, strict>> {
	const { onChunk, ...rest } = parameters;
	const out: GetLogsReturnType<abiEvent, abiEvents, strict> = [];
	for await (const chunk of streamLogsInRange(client, rest as StreamLogsInRangeParameters<abiEvent, abiEvents, strict>)) {
		// One at a time rather than push(...logs), which passes every log as an
		// argument and overflows the stack on a large enough chunk.
		for (const log of chunk.logs) out.push(log);
		await onChunk?.(chunk);
	}
	return out;
}

/**
 * The fixed-width ranges covering `fromBlock`..`toBlock`, without making any
 * requests.
 *
 * These are the ranges {@link streamLogsInRange} starts from, before it splits
 * any the node can't answer. Useful for planning a backfill (how many requests
 * it will take at best) or for handing ranges to a bounded worker pool, where
 * each worker calls {@link getLogsInRange} with an explicit `toBlock` and so
 * keeps the halving and retries within its own range. Keep a pool against a
 * public endpoint to a few workers: a node allows about 30 requests a second
 * over 100 blocks, shared by every client it serves.
 *
 * @example
 * ```ts
 * import { blockRanges } from '@sei-js/precompiles/viem';
 *
 * const chunks = [...blockRanges(1_000_000n, 1_006_000n)];
 * // [{ fromBlock: 1000000n, toBlock: 1001999n }, … ]
 * ```
 *
 * @category Logs
 */
export function* blockRanges(fromBlock: bigint, toBlock: bigint, chunkSize: bigint = MAX_GET_LOGS_BLOCK_RANGE): Generator<BlockRange, void, undefined> {
	assertBlock('fromBlock', fromBlock);
	assertBlock('toBlock', toBlock);
	assertChunkSize(chunkSize);
	for (let from = fromBlock; from <= toBlock; ) {
		const to = rangeEnd(from, chunkSize, toBlock);
		yield { fromBlock: from, toBlock: to };
		from = to + 1n;
	}
}

/**
 * The last block of a span starting at `from`, at most `width` blocks wide and
 * never past `last`. INCLUSIVE on both ends, which is why it is `- 1n`: without
 * it every request asks for `width + 1` blocks and the node refuses all of them.
 */
function rangeEnd(from: bigint, width: bigint, last: bigint): bigint {
	const end = from + width - 1n;
	return end > last ? last : end;
}

class RangeRefusal {
	constructor(readonly maximum: bigint | undefined) {}
}

type Refusal = 'heavy' | 'client-timeout' | 'busy' | 'rate-limited' | 'behind' | RangeRefusal;

/**
 * Which way a failed `eth_getLogs` can be answered differently, if any.
 *
 * Sei's refusals are matched on the node's own wording (`evmrpc/filter.go`,
 * `sei-db/ledger_db/receipt`), and viem's own errors by name. viem reports every
 * node refusal as `InvalidInputRpcError` with the generic short message "Missing
 * or invalid parameters" and keeps the node's text in `details`, so every name
 * and message along the cause chain is read.
 */
function classifyRefusal(error: unknown): Refusal | undefined {
	const { names, text } = describeError(error);
	// Checked before the text, whose details read "The request timed out.".
	if (names.includes('TimeoutError')) return 'client-timeout';
	// "query matches too many logs" and "query matches too many log bytes",
	// viem's response size cap, and a node that timed out on the span.
	if (names.includes('ResponseBodyTooLargeError') || /query matches too many log|request timed out/i.test(text)) return 'heavy';
	const range = /block range too large \(\d+\), maximum allowed is (\d+) blocks/i.exec(text);
	if (range) return new RangeRefusal(range[1] === undefined ? undefined : BigInt(range[1]));
	if (/log query rate limit exceeded/i.test(text)) return 'rate-limited';
	if (/server too busy|server I\/O saturated|system overloaded/i.test(text)) return 'busy';
	if (/is after latest available block/i.test(text)) return 'behind';
	return undefined;
}

function describeError(error: unknown): { names: string[]; text: string } {
	const names: string[] = [];
	const parts: string[] = [];
	let current: unknown = error;
	for (let depth = 0; current !== undefined && current !== null && depth < 8; depth += 1) {
		if (typeof current !== 'object') {
			parts.push(String(current));
			break;
		}
		const { name, message, details, shortMessage, cause } = current as {
			name?: unknown;
			message?: unknown;
			details?: unknown;
			shortMessage?: unknown;
			cause?: unknown;
		};
		if (typeof name === 'string') names.push(name);
		for (const part of [message, details, shortMessage]) {
			if (typeof part === 'string') parts.push(part);
		}
		current = cause;
	}
	return { names, text: parts.join('\n') };
}

function isEventEntry(entry: unknown): boolean {
	return typeof entry === 'object' && entry !== null && (entry as { type?: unknown }).type === 'event';
}

function assertBlock(name: string, value: unknown): asserts value is bigint {
	if (typeof value !== 'bigint' || value < 0n) {
		throw new TypeError(`${name} must be a non-negative bigint block number, received ${describe(value)}`);
	}
}

function assertChunkSize(value: unknown): asserts value is bigint {
	if (typeof value !== 'bigint' || value < 1n) {
		throw new TypeError(`chunkSize must be a bigint of at least 1n, received ${describe(value)}`);
	}
}

function describe(value: unknown): string {
	if (typeof value === 'bigint') return `${value}n`;
	if (typeof value === 'string') return `'${value}'`;
	return String(value);
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

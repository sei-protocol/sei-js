import type { Address, PublicClient } from 'viem';
import {
	createClient,
	createPublicClient,
	createWalletClient,
	custom,
	http,
	InvalidInputRpcError,
	parseAbi,
	parseAbiItem,
	publicActions,
	ResourceUnavailableRpcError,
	ResponseBodyTooLargeError,
	RpcRequestError,
	TimeoutError
} from 'viem';
import * as packageRoot from '../../index';
import * as viemEntryPoint from '../index';
import { blockRanges, getLogsInRange, MAX_GET_LOGS_BLOCK_RANGE, streamLogsInRange } from '../logs';

type Request = Record<string, unknown> & { fromBlock: bigint; toBlock: bigint };

/**
 * A client that records what it was asked for, so the tests assert on the
 * REQUESTS rather than on a node's answers. `respond` decides each answer and
 * can throw to play a refusing node; by default every request returns one log.
 *
 * It answers in microtasks only, which bun's per-test timeout can't interrupt,
 * so a walk that stops making progress would hang the suite rather than fail
 * it. The request budget turns that into a failure.
 */
function recordingClient(head: bigint, respond: (request: Request, index: number) => unknown[] = (r) => [{ blockNumber: r.fromBlock }]) {
	const calls: Array<{ fromBlock: bigint; toBlock: bigint }> = [];
	const requests: Request[] = [];
	const headReads: unknown[] = [];
	const client = {
		getBlockNumber: async (args?: unknown) => {
			headReads.push(args);
			return head;
		},
		getLogs: async (request: Request) => {
			if (requests.length >= 20_000) throw new Error('recordingClient: request budget spent, the walk is not converging');
			calls.push({ fromBlock: request.fromBlock, toBlock: request.toBlock });
			requests.push(request);
			return respond(request, requests.length - 1);
		}
	} as unknown as PublicClient;
	return { client, calls, requests, headReads };
}

/** A refusal shaped the way viem hands a node's `-32000` to the caller. */
function nodeRefusal(message: string) {
	return new InvalidInputRpcError(new RpcRequestError({ body: { method: 'eth_getLogs' }, error: { code: -32000, message }, url: 'http://node.test' }));
}

/** The node's own timeout on a span it couldn't finish, which viem maps to `-32002`. */
const nodeTimeout = () =>
	new ResourceUnavailableRpcError(
		new RpcRequestError({ body: { method: 'eth_getLogs' }, error: { code: -32002, message: 'request timed out' }, url: 'http://node.test' })
	);

/** viem giving up on the response before the node answered. */
const clientTimeout = () => new TimeoutError({ body: { method: 'eth_getLogs' }, url: 'http://node.test' });

/** viem refusing a response over its `maxResponseBodySize`, which is how a dense range fails before sei-chain v6.7. */
const tooLarge = () => new ResponseBodyTooLargeError({ maxSize: 10_485_760, size: 13_000_000 });

/** Run a test body with setTimeout firing at once, recording the delays asked for. */
async function withInstantTimers(body: (delays: number[]) => Promise<void>) {
	const delays: number[] = [];
	const spy = jest.spyOn(globalThis, 'setTimeout').mockImplementation(((fn: () => void, ms?: number) => {
		delays.push(ms ?? 0);
		fn();
		return 0;
	}) as unknown as typeof setTimeout);
	try {
		await body(delays);
	} finally {
		spy.mockRestore();
	}
}

const tooManyLogs = (cap: number) =>
	nodeRefusal(`query matches too many logs: result exceeds the maximum of ${cap} logs; narrow the block range or filter criteria`);

/**
 * A node holding `density(block)` logs per block that refuses any request
 * matching more than `cap` of them, as sei-chain does from v6.7.
 */
function denseNode(head: bigint, cap: number, density: (block: bigint) => number) {
	return recordingClient(head, ({ fromBlock, toBlock }) => {
		const logs: Array<{ blockNumber: bigint }> = [];
		for (let b = fromBlock; b <= toBlock; b++) {
			for (let i = 0; i < density(b); i++) logs.push({ blockNumber: b });
		}
		if (logs.length > cap) throw tooManyLogs(cap);
		return logs;
	});
}

/** The requests that succeeded, which are the chunks the caller sees. */
async function drain(stream: AsyncGenerator<{ fromBlock: bigint; toBlock: bigint; logs: unknown[] }>) {
	const chunks: Array<{ fromBlock: bigint; toBlock: bigint; logs: number }> = [];
	for await (const chunk of stream) chunks.push({ fromBlock: chunk.fromBlock, toBlock: chunk.toBlock, logs: chunk.logs.length });
	return chunks;
}

function expectContiguous(chunks: Array<{ fromBlock: bigint; toBlock: bigint }>, fromBlock: bigint, toBlock: bigint) {
	// A gap silently drops logs; an overlap silently duplicates them. Both look
	// like a working indexer.
	expect(chunks[0]!.fromBlock).toBe(fromBlock);
	expect(chunks[chunks.length - 1]!.toBlock).toBe(toBlock);
	for (let i = 1; i < chunks.length; i++) {
		expect(chunks[i]!.fromBlock).toBe(chunks[i - 1]!.toBlock + 1n);
	}
}

const span = (r: { fromBlock: bigint; toBlock: bigint }) => r.toBlock - r.fromBlock + 1n;

const transfer = parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)');
const erc20Events = parseAbi([
	'event Transfer(address indexed from, address indexed to, uint256 value)',
	'event Approval(address indexed owner, address indexed spender, uint256 value)'
]);
const someone: Address = '0x000000000000000000000000000000000000dEaD';

describe('MAX_GET_LOGS_BLOCK_RANGE', () => {
	it('is the 2000 the public endpoints enforce', () => {
		expect(MAX_GET_LOGS_BLOCK_RANGE).toBe(2000n);
	});

	it('is exported, with the functions, from the viem entry point and the package root', () => {
		for (const barrel of [viemEntryPoint, packageRoot]) {
			expect(barrel.MAX_GET_LOGS_BLOCK_RANGE).toBe(MAX_GET_LOGS_BLOCK_RANGE);
			expect(barrel.getLogsInRange).toBe(getLogsInRange);
			expect(barrel.streamLogsInRange).toBe(streamLogsInRange);
			expect(barrel.blockRanges).toBe(blockRanges);
		}
	});
});

describe('blockRanges', () => {
	it('spans are INCLUSIVE, so a full chunk is exactly the maximum', () => {
		// The node checks `toBlock - fromBlock + 1 <= 2000`. A range built as
		// `from + MAX` asks for 2001 blocks and every request is rejected.
		const [first] = [...blockRanges(0n, 10_000n)];
		expect(first).toEqual({ fromBlock: 0n, toBlock: 1999n });
		expect(span(first!)).toBe(MAX_GET_LOGS_BLOCK_RANGE);
	});

	it('never emits a range wider than the chunk size', () => {
		for (const r of blockRanges(0n, 10_005n)) {
			expect(span(r)).toBeLessThanOrEqual(MAX_GET_LOGS_BLOCK_RANGE);
		}
	});

	it('covers the whole span with no gaps and no overlap', () => {
		expectContiguous([...blockRanges(100n, 5_100n)], 100n, 5_100n);
	});

	it('handles a single block', () => {
		expect([...blockRanges(7n, 7n)]).toEqual([{ fromBlock: 7n, toBlock: 7n }]);
	});

	it('yields nothing when the range is empty', () => {
		expect([...blockRanges(10n, 9n)]).toEqual([]);
	});

	it('rejects a chunk size below one rather than looping forever', () => {
		expect(() => [...blockRanges(0n, 10n, 0n)]).toThrow(/at least 1n, received 0n/);
	});

	it('rejects a number where a bigint belongs, for callers without types', () => {
		// `2000 < 1n` is false, so a bare relational guard lets a number through
		// to the arithmetic, which then throws "Cannot mix BigInt and other types".
		expect(() => [...blockRanges(0n, 10n, 2000 as unknown as bigint)]).toThrow(/chunkSize must be a bigint/);
		expect(() => [...blockRanges(0 as unknown as bigint, 10n)]).toThrow(/fromBlock must be a non-negative bigint/);
	});
});

describe('streamLogsInRange', () => {
	it('requests spans the node will accept', async () => {
		const { client, calls } = recordingClient(4_500n);
		await drain(streamLogsInRange(client, { fromBlock: 0n }));
		expect(calls).toEqual([
			{ fromBlock: 0n, toBlock: 1999n },
			{ fromBlock: 2000n, toBlock: 3999n },
			{ fromBlock: 4000n, toBlock: 4500n }
		]);
	});

	it('requests exactly the ranges blockRanges plans, when nothing is refused', async () => {
		// The arithmetic lives in one place, but this pins the two entry points
		// to each other so a change to either shows up here.
		let seed = 7;
		const next = (limit: number) => {
			seed = (seed * 1_103_515_245 + 12_345) % 2_147_483_648;
			return BigInt(seed % limit);
		};
		for (let i = 0; i < 50; i++) {
			const fromBlock = next(1_000_000);
			const toBlock = fromBlock + next(12_000);
			const chunkSize = 1n + next(3_000);
			const { client, calls } = recordingClient(toBlock);
			await drain(streamLogsInRange(client, { fromBlock, toBlock, chunkSize }));
			expect(calls).toEqual([...blockRanges(fromBlock, toBlock, chunkSize)]);
		}
	});

	it('reads to a fresh head when no toBlock is given', async () => {
		// Sei finalises as it produces, so there is no confirmation depth to
		// subtract. viem caches the block number for the polling interval by
		// default, which would trail head by several blocks.
		const { client, calls, headReads } = recordingClient(1_234n);
		await drain(streamLogsInRange(client, { fromBlock: 0n }));
		expect(headReads).toEqual([{ cacheTime: 0 }]);
		expect(calls[calls.length - 1]!.toBlock).toBe(1_234n);
	});

	it('asks for no head when toBlock is given', async () => {
		const { client, calls, headReads } = recordingClient(9_999n);
		await drain(streamLogsInRange(client, { fromBlock: 0n, toBlock: 100n }));
		expect(headReads).toEqual([]);
		expect(calls).toEqual([{ fromBlock: 0n, toBlock: 100n }]);
	});

	it('reads the head block itself when the walk starts there', async () => {
		// The steady state of a poller: one new block since the last read.
		const { client, calls } = recordingClient(500n);
		await drain(streamLogsInRange(client, { fromBlock: 500n }));
		expect(calls).toEqual([{ fromBlock: 500n, toBlock: 500n }]);
	});

	it('makes no request when the range is empty', async () => {
		const { client, calls } = recordingClient(100n);
		expect(await drain(streamLogsInRange(client, { fromBlock: 500n }))).toEqual([]);
		expect(calls).toEqual([]);
	});

	it('yields each chunk with its logs and stops asking when the consumer stops', async () => {
		const { client, calls } = recordingClient(10_000n);
		const stream = streamLogsInRange(client, { fromBlock: 0n });
		const first = await stream.next();
		expect(first.value as unknown).toEqual({ fromBlock: 0n, toBlock: 1999n, endBlock: 10_000n, logs: [{ blockNumber: 0n }] });
		await stream.return(undefined);
		expect(calls.length).toBe(1);
	});

	describe('when a span is too heavy to answer', () => {
		it('halves the span until the node accepts it, and misses nothing', async () => {
			const { client, calls } = denseNode(9_999n, 10_000, () => 12);
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expectContiguous(chunks, 0n, 9_999n);
			expect(chunks.reduce((n, c) => n + c.logs, 0)).toBe(12 * 10_000);
			for (const c of chunks) expect(c.logs).toBeLessThanOrEqual(10_000);
			// 2000 blocks is 24,000 logs, 1000 is 12,000, and 500 is the first width
			// under the cap.
			expect(calls.slice(0, 3).map(span)).toEqual([2000n, 1000n, 500n]);
		});

		it('halves the span it asked for, not the width, when the last chunk was clamped', async () => {
			let refused = false;
			const { client, calls } = recordingClient(1_499n, (request) => {
				if (!refused) {
					refused = true;
					throw tooManyLogs(10_000);
				}
				return [{ blockNumber: request.fromBlock }];
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([1500n, 750n, 750n]);
		});

		it('holds below a refused span, so a steadily dense range is not refused on every other request', async () => {
			// 12 logs a block settles at 500 blocks. Growing straight back to 1000
			// after every success would make half of all requests refusals.
			let refusals = 0;
			const { client, calls } = recordingClient(199_999n, ({ fromBlock, toBlock }) => {
				if ((toBlock - fromBlock + 1n) * 12n > 10_000n) {
					refusals += 1;
					throw tooManyLogs(10_000);
				}
				return [];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expectContiguous(chunks, 0n, 199_999n);
			expect(chunks.length).toBe(400);
			expect(refusals / calls.length).toBeLessThan(0.15);
		});

		it('grows back towards chunkSize once the range thins out', async () => {
			const { client } = denseNode(40_000n, 10_000, (b) => (b < 4_000n ? 40 : 1));
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expectContiguous(chunks, 0n, 40_000n);
			expect(chunks.reduce((n, c) => n + c.logs, 0)).toBe(4_000 * 40 + 36_001);
			expect(span(chunks[chunks.length - 2]!)).toBe(2000n);
			for (const c of chunks) expect(span(c)).toBeLessThanOrEqual(2000n);
		});

		it('never grows past chunkSize, however deep the halving went', async () => {
			// Six halvings from 2000 end at 31, and doubling 31 back up passes 2000
			// at 3968 unless growth is clamped.
			for (const chunkSize of [2000n, 3000n]) {
				const { client, calls } = denseNode(100_000n, 10_000, (b) => (b < 1_000n ? 300 : 0));
				await drain(streamLogsInRange(client, { fromBlock: 0n, chunkSize }));
				expect(calls.some((c) => span(c) < 40n)).toBe(true);
				for (const c of calls) expect(span(c)).toBeLessThanOrEqual(chunkSize);
			}
		});

		it('halves on the byte budget as well as the count', async () => {
			let refused = false;
			const { client, calls } = recordingClient(1_999n, (request) => {
				if (!refused) {
					refused = true;
					throw nodeRefusal('query matches too many log bytes: result exceeds the maximum of 67108864 bytes; narrow the block range or filter criteria');
				}
				return [{ blockNumber: request.fromBlock }];
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([2000n, 1000n, 1000n]);
		});

		it('halves when the response passes viem’s size limit, which is how a dense range fails before v6.7', async () => {
			let refused = false;
			const { client, calls } = recordingClient(1_999n, () => {
				if (refused) return [];
				refused = true;
				throw tooLarge();
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([2000n, 1000n, 1000n]);
		});

		it('does not take a gateway saying "request timed out" for the node timing out', async () => {
			// Only the node's own -32002 means the span was the problem. The same
			// words from a proxy in front of a dead endpoint would otherwise halve
			// all the way down before throwing.
			const { client, calls } = recordingClient(1_999n, () => {
				throw new Error('502 Bad Gateway: upstream request timed out');
			});
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n }))).rejects.toThrow(/upstream request timed out/);
			expect(calls.length).toBe(1);
		});

		it('halves when the node times out on the span', async () => {
			let refused = false;
			const { client, calls } = recordingClient(1_999n, () => {
				if (refused) return [];
				refused = true;
				throw nodeTimeout();
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([2000n, 1000n, 1000n]);
		});

		it('throws when a single block is still over the cap, since a range cannot split it', async () => {
			const { client, calls } = denseNode(100n, 10_000, (b) => (b === 42n ? 10_001 : 0));
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n }))).rejects.toThrow(/query matches too many logs/);
			expect(calls[calls.length - 1]).toEqual({ fromBlock: 42n, toBlock: 42n });
		});
	});

	describe('when the client times out', () => {
		it('throws straight away if the endpoint has answered nothing yet, since it may simply be down', async () => {
			const { client, calls } = recordingClient(9_999n, () => {
				throw clientTimeout();
			});
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n }))).rejects.toThrow(/took too long to respond/);
			expect(calls.length).toBe(1);
		});

		it('halves once the endpoint has answered, since the span is then the likelier cause', async () => {
			const { client, calls } = recordingClient(3_999n, (_, index) => {
				if (index === 1) throw clientTimeout();
				return [];
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([2000n, 2000n, 1000n, 1000n]);
		});

		it('stops halving after a few timeouts in a row', async () => {
			const { client, calls } = recordingClient(3_999n, (_, index) => {
				if (index > 0) throw clientTimeout();
				return [];
			});
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n }))).rejects.toThrow(/took too long to respond/);
			expect(calls.map(span)).toEqual([2000n, 2000n, 1000n, 500n, 250n]);
		});
	});

	describe('when the node refuses a range as too wide', () => {
		it('walks at the maximum the node names and never above it', async () => {
			// A node whose operator set max_blocks_for_log to 500.
			const { client, calls } = recordingClient(4_999n, (request) => {
				const blocks = span(request);
				if (blocks > 500n) throw nodeRefusal(`block range too large (${blocks}), maximum allowed is 500 blocks`);
				return [];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expectContiguous(chunks, 0n, 4_999n);
			expect(calls.length).toBe(11);
			for (const c of chunks) expect(span(c)).toBe(500n);
		});

		it('still shrinks when the named maximum is no smaller than what it refused', async () => {
			// A provider that counts the range differently to sei-chain.
			const { client, calls } = recordingClient(1_999n, (request) => {
				if (span(request) >= 2000n) throw nodeRefusal('block range too large (2000), maximum allowed is 2000 blocks');
				return [];
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([2000n, 1000n, 1000n]);
		});
	});

	describe('when the node is busy', () => {
		it('retries the same range with backoff', async () => {
			const { client, calls } = recordingClient(1_999n, (request, index) => {
				if (index < 2) throw nodeRefusal('server too busy, rejecting new request (pending: 900, threshold: 800)');
				return [{ blockNumber: request.fromBlock }];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }));
			expect(calls).toEqual([
				{ fromBlock: 0n, toBlock: 1999n },
				{ fromBlock: 0n, toBlock: 1999n },
				{ fromBlock: 0n, toBlock: 1999n }
			]);
			expect(chunks.length).toBe(1);
		});

		it('waits retryDelay, doubling each time, and caps a single wait', async () => {
			await withInstantTimers(async (delays) => {
				const { client } = recordingClient(1_999n, (_, index) => {
					if (index < 3) throw nodeRefusal('server too busy, rejecting new request (pending: 900, threshold: 800)');
					return [];
				});
				await drain(streamLogsInRange(client, { fromBlock: 0n }));
				expect(delays).toEqual([500, 1000, 2000]);
			});
			await withInstantTimers(async (delays) => {
				const { client } = recordingClient(1_999n, (_, index) => {
					if (index < 8) throw nodeRefusal('server too busy, rejecting new request (pending: 900, threshold: 800)');
					return [];
				});
				await drain(streamLogsInRange(client, { fromBlock: 0n, retryCount: 8 }));
				expect(delays).toEqual([500, 1000, 2000, 4000, 8000, 16_000, 30_000, 30_000]);
			});
		});

		it('gives up after retryCount retries', async () => {
			const { client, calls } = recordingClient(1_999n, () => {
				throw nodeRefusal('server too busy, rejecting new request (pending: 900, threshold: 800)');
			});
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n, retryCount: 2, retryDelay: 0 }))).rejects.toThrow(/server too busy/);
			expect(calls.length).toBe(3);
		});

		it('gives every chunk its own retries', async () => {
			// Two refusals on each of three chunks, with two retries allowed.
			const { client } = recordingClient(5_999n, (_, index) => {
				if (index % 3 !== 2) throw nodeRefusal('server too busy, rejecting new request (pending: 900, threshold: 800)');
				return [];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n, retryCount: 2, retryDelay: 0 }));
			expect(chunks.length).toBe(3);
		});

		it('gives a range split for weight its own retries', async () => {
			const answers = ['busy', 'heavy', 'busy', 'ok', 'ok'];
			const { client } = recordingClient(1_999n, (_, index) => {
				const answer = answers[index];
				if (answer === 'busy') throw nodeRefusal('server I/O saturated, rejecting new request (semaphore: 52/64 in use)');
				if (answer === 'heavy') throw tooManyLogs(10_000);
				return [];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n, retryCount: 1, retryDelay: 0 }));
			expect(chunks.map(span)).toEqual([1000n, 1000n]);
		});

		it('recognises every busy refusal Sei sends', async () => {
			for (const message of [
				'server too busy, rejecting new request (pending: 900, threshold: 800)',
				'server I/O saturated, rejecting new request (semaphore: 52/64 in use)',
				'system overloaded, please reduce request frequency: worker pool queue is full'
			]) {
				let refused = false;
				const { client, calls } = recordingClient(99n, () => {
					if (refused) return [];
					refused = true;
					throw nodeRefusal(message);
				});
				await drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }));
				expect(calls.length).toBe(2);
			}
		});

		it('steps under the rate limit, which only applies above 100 blocks, once retrying it runs out', async () => {
			const { client, calls } = recordingClient(1_999n, (request) => {
				if (span(request) > 100n) throw nodeRefusal('log query rate limit exceeded for large queries, please try again later');
				return [];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }));
			expectContiguous(chunks, 0n, 1_999n);
			expect(calls.slice(0, 5).map(span)).toEqual([2000n, 2000n, 2000n, 2000n, 100n]);
			for (const c of chunks) expect(span(c)).toBeLessThanOrEqual(100n);
		});

		it('steps straight back down when a later probe over 100 blocks meets the rate limit again', async () => {
			// The backoff is paid once. After that, each probe back up costs one
			// refused request rather than another round of waiting.
			const { client, calls } = recordingClient(1_999n, (request) => {
				if (span(request) > 100n) throw nodeRefusal('log query rate limit exceeded for large queries, please try again later');
				return [];
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }));
			const spans = calls.map(span);
			expect(spans.filter((s) => s === 200n).length).toBe(2);
			for (let i = 0; i < spans.length - 1; i++) {
				if (spans[i] === 200n) expect(spans[i + 1]).toBe(100n);
			}
			expect(calls.length).toBe(4 + 20 + 2);
		});

		it('waits out a later spell of throttling again once a probe over 100 blocks has got through', async () => {
			// Throttled for the first four requests, clear for a stretch, then
			// throttled again from the eighteenth on.
			const { client, calls } = recordingClient(19_999n, (request, index) => {
				if (span(request) > 100n && (index < 4 || index >= 18)) {
					throw nodeRefusal('log query rate limit exceeded for large queries, please try again later');
				}
				return [];
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }));
			const spans = calls.map(span);
			// Stepped down, eight chunks at 100, then a probe at 200 that gets through.
			expect(spans.slice(0, 13)).toEqual([2000n, 2000n, 2000n, 2000n, ...Array(8).fill(100n), 200n]);
			// So the second spell is retried at the same span before stepping down.
			expect(spans.slice(18, 23)).toEqual([2000n, 2000n, 2000n, 2000n, 100n]);
		});
	});

	describe('when aborted', () => {
		it('makes no request when the signal is already aborted', async () => {
			const { client, calls, headReads } = recordingClient(9_999n);
			const controller = new AbortController();
			controller.abort(new Error('shutting down'));
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n, signal: controller.signal }))).rejects.toThrow('shutting down');
			expect(calls).toEqual([]);
			expect(headReads).toEqual([]);
		});

		it('stops before the next request', async () => {
			const { client, calls } = recordingClient(9_999n);
			const controller = new AbortController();
			await expect(
				getLogsInRange(client, {
					fromBlock: 0n,
					signal: controller.signal,
					onChunk: () => controller.abort(new Error('shutting down'))
				})
			).rejects.toThrow('shutting down');
			expect(calls.length).toBe(1);
		});

		it('stops part way through a wait between retries', async () => {
			// The wait here never ends on its own: scheduling it aborts the walk
			// instead, so the signal is the only way out of it. A walk that ignores
			// the signal would sit in the wait forever, and with setTimeout mocked
			// bun's own test timeout can't fire either, so a real timer fails it.
			const realSetTimeout = globalThis.setTimeout;
			const { client, calls } = recordingClient(1_999n, () => {
				throw nodeRefusal('server too busy, rejecting new request (pending: 900, threshold: 800)');
			});
			const controller = new AbortController();
			const waits: number[] = [];
			let stuckTimer: ReturnType<typeof setTimeout> | undefined;
			const stuck = new Promise<never>((_, reject) => {
				stuckTimer = realSetTimeout(() => reject(new Error('the wait ignored the signal')), 1_000);
			});
			const spy = jest.spyOn(globalThis, 'setTimeout').mockImplementation(((_fn: () => void, ms?: number) => {
				waits.push(ms ?? 0);
				controller.abort(new Error('shutting down'));
				return 0;
			}) as unknown as typeof setTimeout);
			try {
				await expect(Promise.race([drain(streamLogsInRange(client, { fromBlock: 0n, signal: controller.signal })), stuck])).rejects.toThrow('shutting down');
			} finally {
				spy.mockRestore();
				clearTimeout(stuckTimer);
			}
			expect(waits).toEqual([500]);
			expect(calls.length).toBe(1);
		});
	});

	describe('when the node that answers trails the one that reported the head', () => {
		const behind = (head: bigint) => nodeRefusal(`requested toBlock ${head} is after latest available block ${head - 1n}`);

		it('retries the final chunk when the walk read the head itself', async () => {
			const { client, calls } = recordingClient(3_999n, (_, index) => {
				if (index === 1) throw behind(3_999n);
				return [];
			});
			const chunks = await drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }));
			expect(chunks.length).toBe(2);
			expect(calls.length).toBe(3);
		});

		it('throws when the caller asked for a toBlock past the head', async () => {
			const { client, calls } = recordingClient(3_999n, () => {
				throw behind(3_999n);
			});
			await expect(drain(streamLogsInRange(client, { fromBlock: 0n, toBlock: 3_999n, retryDelay: 0 }))).rejects.toThrow(/after latest available block/);
			expect(calls.length).toBe(1);
		});
	});

	it('throws any other refusal straight away, without halving or retrying', async () => {
		const { client, calls } = recordingClient(1_999n, () => {
			throw nodeRefusal('requested fromBlock 0 is before earliest available block 1');
		});
		await expect(drain(streamLogsInRange(client, { fromBlock: 0n, retryDelay: 0 }))).rejects.toThrow(/before earliest available block/);
		expect(calls.length).toBe(1);
	});

	it('finds the node’s wording anywhere along the cause chain', async () => {
		const wording = 'query matches too many logs: result exceeds the maximum of 10000 logs';
		const shapes: unknown[] = [
			new Error(wording),
			new Error('eth_getLogs failed', { cause: new Error(wording) }),
			Object.assign(new Error('RPC Request failed.'), { details: wording }),
			{ message: 'wrapped', cause: wording },
			wording
		];
		for (const shape of shapes) {
			let refused = false;
			const { client, calls } = recordingClient(1_999n, () => {
				if (refused) return [];
				refused = true;
				throw shape;
			});
			await drain(streamLogsInRange(client, { fromBlock: 0n }));
			expect(calls.map(span)).toEqual([2000n, 1000n, 1000n]);
		}
	});

	it('rejects bad input before touching the node', async () => {
		const cases: Array<[Record<string, unknown>, RegExp]> = [
			[{ fromBlock: 0n, chunkSize: 0n }, /at least 1n/],
			[{ fromBlock: 0n, chunkSize: 2000 }, /chunkSize must be a bigint/],
			[{ fromBlock: 0 }, /fromBlock must be a non-negative bigint/],
			[{ fromBlock: -1n }, /fromBlock must be a non-negative bigint/],
			// A JS caller passing viem's tag would otherwise get [] with no request made.
			[{ fromBlock: 0n, toBlock: 'latest' }, /toBlock must be a non-negative bigint block number, received 'latest'/],
			[{ fromBlock: 0n, retryCount: -1 }, /retryCount must be a non-negative integer/],
			[{ fromBlock: 0n, retryCount: 1.5 }, /retryCount must be a non-negative integer/],
			[{ fromBlock: 0n, retryDelay: Number.NaN }, /retryDelay must be a non-negative number/],
			[{ fromBlock: 0n, retryDelay: Number.POSITIVE_INFINITY }, /retryDelay must be a non-negative number/],
			[{ fromBlock: 0n, retryDelay: -1 }, /retryDelay must be a non-negative number/],
			// viem reads a blockHash in place of the range, so every chunk would
			// re-read that one block.
			[{ fromBlock: 0n, blockHash: `0x${'ab'.repeat(32)}` }, /blockHash is not supported/],
			[{ fromBlock: 0n, events: [] }, /no event entries/],
			[{ fromBlock: 0n, events: parseAbi(['function cashOf(address) view returns (uint64)']) }, /no event entries/]
		];
		for (const [parameters, message] of cases) {
			const { client, calls, headReads } = recordingClient(10n);
			await expect(drain(streamLogsInRange(client, parameters as never))).rejects.toThrow(message);
			expect(calls).toEqual([]);
			expect(headReads).toEqual([]);
		}
	});

	it('forwards the filter to getLogs untouched', async () => {
		const { client, requests } = recordingClient(10n);
		await drain(streamLogsInRange(client, { address: someone, event: transfer, args: { to: someone }, strict: true, fromBlock: 0n }));
		expect(requests).toEqual([{ address: someone, event: transfer, args: { to: someone }, strict: true, fromBlock: 0n, toBlock: 10n }]);
	});

	it('forwards several events in one request', async () => {
		const { client, requests } = recordingClient(10n);
		await drain(streamLogsInRange(client, { address: [someone], events: erc20Events, fromBlock: 0n }));
		expect(requests).toEqual([{ address: [someone], events: erc20Events, fromBlock: 0n, toBlock: 10n }]);
	});

	it('takes a whole contract ABI as events and sends only its events', async () => {
		// The shape viem's getContractEvents takes, and what a caller moving off it
		// will pass. getLogs itself throws "Event not found on ABI" at the first
		// function.
		const abi = parseAbi([
			'event Trade(address indexed player, uint16 indexed ticker, uint256 packed)',
			'function cashOf(address) view returns (uint64)',
			'event Mined(address indexed player, uint64 amount, uint64 cashAfter, uint64 indexed sessionId)'
		]);
		const { client, requests } = recordingClient(10n);
		await drain(streamLogsInRange(client, { events: abi, fromBlock: 0n }));
		expect(requests[0]!.events).toEqual([abi[0], abi[2]]);
	});

	it('keeps its own options out of the request, and omits what was not given', async () => {
		// Passing `address: undefined` through to eth_getLogs is not the same as
		// omitting it on every provider.
		const { client, requests } = recordingClient(10n);
		await drain(streamLogsInRange(client, { fromBlock: 0n, chunkSize: 5n, retryCount: 1, retryDelay: 0 }));
		expect(Object.keys(requests[0]!).sort()).toEqual(['fromBlock', 'toBlock']);
	});

	describe('against a real viem client', () => {
		/** A transport that answers like a node and records every JSON-RPC call. */
		function node(head: bigint) {
			const calls: Array<{ method: string; params: unknown }> = [];
			const transport = custom({
				request: async ({ method, params }: { method: string; params?: unknown }) => {
					calls.push({ method, params });
					if (method === 'eth_blockNumber') return `0x${head.toString(16)}`;
					if (method === 'eth_getLogs') return [];
					throw new Error(`unexpected ${method}`);
				}
			});
			return { transport, calls };
		}

		it('sends eth_getLogs with hex bounds and the indexed args as topics', async () => {
			const { transport, calls } = node(2_500n);
			const client = createPublicClient({ transport });
			await getLogsInRange(client, { address: someone, event: transfer, args: { from: someone }, fromBlock: 0n });
			expect(calls.map((c) => c.method)).toEqual(['eth_blockNumber', 'eth_getLogs', 'eth_getLogs']);
			const [first] = calls[1]!.params as [Record<string, unknown>];
			expect(first.fromBlock).toBe('0x0');
			expect(first.toBlock).toBe('0x7cf');
			expect(first.address).toBe(someone);
			// [Transfer, from, to]: `to` left open as a null topic.
			expect((first.topics as unknown[]).slice(1)).toEqual([`0x${'0'.repeat(24)}${someone.slice(2).toLowerCase()}`, null]);
		});

		it('works through a client without public actions, and asks for a fresh head every walk', async () => {
			// getAction falls back to viem's own actions when the client has none,
			// and cacheTime 0 stops viem answering the second head from its cache.
			const { transport, calls } = node(10n);
			const client = createClient({ transport });
			await getLogsInRange(client, { fromBlock: 0n });
			await getLogsInRange(client, { fromBlock: 0n });
			expect(calls.map((c) => c.method)).toEqual(['eth_blockNumber', 'eth_getLogs', 'eth_blockNumber', 'eth_getLogs']);
		});
	});
});

describe('getLogsInRange', () => {
	it('concatenates the logs from every chunk', async () => {
		const { client } = recordingClient(4_500n);
		const logs = await getLogsInRange(client, { fromBlock: 0n });
		expect(logs.length).toBe(3);
	});

	it('collects everything a halving walk reads', async () => {
		const { client } = denseNode(9_999n, 10_000, () => 12);
		const logs = await getLogsInRange(client, { fromBlock: 0n });
		expect(logs.length).toBe(120_000);
	});

	it('hands each chunk to onChunk, with its logs', async () => {
		// A backfill over long history is thousands of requests; with no signal
		// it is indistinguishable from a hang.
		const { client } = recordingClient(4_500n);
		const seen: Array<{ toBlock: bigint; endBlock: bigint; logs: number }> = [];
		await getLogsInRange(client, {
			fromBlock: 0n,
			onChunk: ({ toBlock, endBlock, logs }) => {
				seen.push({ toBlock, endBlock, logs: logs.length });
			}
		});
		expect(seen).toEqual([
			{ toBlock: 1999n, endBlock: 4500n, logs: 1 },
			{ toBlock: 3999n, endBlock: 4500n, logs: 1 },
			{ toBlock: 4500n, endBlock: 4500n, logs: 1 }
		]);
	});

	it('awaits onChunk before the next request, and before resolving', async () => {
		const order: string[] = [];
		const { client } = recordingClient(3_999n, (request) => {
			order.push(`request ${request.fromBlock}`);
			return [];
		});
		await getLogsInRange(client, {
			fromBlock: 0n,
			onChunk: async ({ toBlock }) => {
				await new Promise((resolve) => setTimeout(resolve, 5));
				order.push(`stored ${toBlock}`);
			}
		});
		order.push('resolved');
		expect(order).toEqual(['request 0', 'stored 1999', 'request 2000', 'stored 3999', 'resolved']);
	});

	it('lets onChunk return whatever the store it calls returns', async () => {
		// A database insert resolves to a result, not to void.
		const { client } = recordingClient(3_999n);
		const inserted: bigint[] = [];
		const insert = async (toBlock: bigint) => inserted.push(toBlock);
		await getLogsInRange(client, { fromBlock: 0n, onChunk: ({ toBlock }) => insert(toBlock) });
		expect(inserted).toEqual([1999n, 3999n]);
	});

	it('rejects when onChunk rejects, rather than leaving it unhandled', async () => {
		const { client, calls } = recordingClient(3_999n);
		await expect(
			getLogsInRange(client, {
				fromBlock: 0n,
				onChunk: async () => {
					throw new Error('checkpoint write failed');
				}
			})
		).rejects.toThrow('checkpoint write failed');
		expect(calls.length).toBe(1);
	});

	it('honours a smaller chunk size for a stricter provider', async () => {
		const { client, calls } = recordingClient(2_500n);
		await getLogsInRange(client, { fromBlock: 0n, chunkSize: 1_000n });
		expect(calls.length).toBe(3);
		expect(calls[0]).toEqual({ fromBlock: 0n, toBlock: 999n });
	});

	it('rejects a chunk size below one', async () => {
		const { client } = recordingClient(10n);
		await expect(getLogsInRange(client, { fromBlock: 0n, chunkSize: 0n })).rejects.toThrow(/at least 1/);
	});

	it('types the decoded logs the way viem getLogs does', async () => {
		// Checked by `bun run typecheck`; at runtime these only need to not throw.
		const { client } = recordingClient(10n, () => []);

		const decoded = await getLogsInRange(client, { event: transfer, args: { from: someone }, fromBlock: 0n });
		const to: Address | undefined = decoded[0]?.args.to;
		const block: bigint | undefined = decoded[0]?.blockNumber;

		// `strict` makes every argument present, so no `undefined` to narrow away.
		const exact = await getLogsInRange(client, { event: transfer, strict: true, fromBlock: 0n });
		const strictValue = (logs: typeof exact): bigint => logs[0]!.args.value;
		const value = exact.length > 0 ? strictValue(exact) : undefined;

		const several = await getLogsInRange(client, { events: erc20Events, fromBlock: 0n });
		const name: 'Transfer' | 'Approval' | undefined = several[0]?.eventName;

		// @ts-expect-error viem takes one of `event` or `events`, not both
		await getLogsInRange(client, { event: transfer, events: erc20Events, fromBlock: 0n });
		// @ts-expect-error `args` only narrows a single `event`
		await getLogsInRange(client, { events: erc20Events, args: { to: someone }, fromBlock: 0n });
		// @ts-expect-error Transfer has no `owner`
		await getLogsInRange(client, { event: transfer, args: { owner: someone }, fromBlock: 0n });
		// @ts-expect-error block numbers are bigints, not tags
		await getLogsInRange(client, { fromBlock: 0n, toBlock: 'latest' }).catch(() => []);

		expect([to, block, value, name]).toEqual([undefined, undefined, undefined, undefined]);
	});

	it('accepts a client that carries an account', () => {
		// Type level only: an app that already has a wallet client extended with
		// public actions should not need a second client to read logs.
		const wallet = createWalletClient({ account: someone, transport: http('http://node.test') }).extend(publicActions);
		const read = () => getLogsInRange(wallet, { fromBlock: 0n, toBlock: 0n });
		expect(typeof read).toBe('function');
	});
});

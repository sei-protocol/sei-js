import type { PublicClient } from 'viem';
import * as packageRoot from '../../index';
import * as viemEntryPoint from '../index';
import { blockRanges, getLogsInRange, MAX_GET_LOGS_BLOCK_RANGE } from '../logs';

/**
 * A client that records the ranges it was asked for and returns one log per
 * call, so the tests assert on the REQUESTS rather than on a node's answers.
 * The behaviour worth pinning here is the chunking arithmetic, which is where
 * this goes wrong in practice.
 */
function recordingClient(head: bigint) {
	const calls: Array<{ fromBlock: bigint; toBlock: bigint }> = [];
	const client = {
		getBlockNumber: async () => head,
		getLogs: async (args: { fromBlock: bigint; toBlock: bigint }) => {
			calls.push({ fromBlock: args.fromBlock, toBlock: args.toBlock });
			return [{ blockNumber: args.fromBlock }];
		}
	} as unknown as PublicClient;
	return { client, calls };
}

describe('MAX_GET_LOGS_BLOCK_RANGE', () => {
	it('is the 2000 the public endpoints enforce', () => {
		expect(MAX_GET_LOGS_BLOCK_RANGE).toBe(2000n);
	});

	it('is exported from the viem entry point and the package root', () => {
		expect(viemEntryPoint.MAX_GET_LOGS_BLOCK_RANGE).toBe(MAX_GET_LOGS_BLOCK_RANGE);
		expect(packageRoot.MAX_GET_LOGS_BLOCK_RANGE).toBe(MAX_GET_LOGS_BLOCK_RANGE);
	});
});

describe('blockRanges', () => {
	it('spans are INCLUSIVE, so a full chunk is exactly the maximum', () => {
		// The node checks `toBlock - fromBlock + 1 <= 2000`. A range built as
		// `from + MAX` asks for 2001 blocks and every request is rejected.
		const [first] = [...blockRanges(0n, 10_000n)];
		expect(first).toEqual({ fromBlock: 0n, toBlock: 1999n });
		expect(first!.toBlock - first!.fromBlock + 1n).toBe(MAX_GET_LOGS_BLOCK_RANGE);
	});

	it('never emits a range wider than the chunk size', () => {
		for (const r of blockRanges(0n, 10_005n)) {
			expect(r.toBlock - r.fromBlock + 1n).toBeLessThanOrEqual(MAX_GET_LOGS_BLOCK_RANGE);
		}
	});

	it('covers the whole span with no gaps and no overlap', () => {
		// A gap silently drops logs; an overlap silently duplicates them. Both
		// look like a working indexer.
		const ranges = [...blockRanges(100n, 5_100n)];
		expect(ranges[0]!.fromBlock).toBe(100n);
		expect(ranges[ranges.length - 1]!.toBlock).toBe(5_100n);
		for (let i = 1; i < ranges.length; i++) {
			expect(ranges[i]!.fromBlock).toBe(ranges[i - 1]!.toBlock + 1n);
		}
	});

	it('handles a single block', () => {
		expect([...blockRanges(7n, 7n)]).toEqual([{ fromBlock: 7n, toBlock: 7n }]);
	});

	it('yields nothing when the range is empty', () => {
		expect([...blockRanges(10n, 9n)]).toEqual([]);
	});

	it('rejects a chunk size below one rather than looping forever', () => {
		expect(() => [...blockRanges(0n, 10n, 0n)]).toThrow(/at least 1/);
	});
});

describe('getLogsInRange', () => {
	it('requests spans the node will accept', async () => {
		const { client, calls } = recordingClient(4_500n);
		await getLogsInRange(client, { fromBlock: 0n });
		expect(calls).toEqual([
			{ fromBlock: 0n, toBlock: 1999n },
			{ fromBlock: 2000n, toBlock: 3999n },
			{ fromBlock: 4000n, toBlock: 4500n }
		]);
		for (const c of calls) {
			expect(c.toBlock - c.fromBlock + 1n).toBeLessThanOrEqual(MAX_GET_LOGS_BLOCK_RANGE);
		}
	});

	it('reads to head when no toBlock is given', async () => {
		// Sei finalises as it produces, so there is no reorg window to wait out
		// and no confirmation depth to subtract.
		const { client, calls } = recordingClient(1_234n);
		await getLogsInRange(client, { fromBlock: 0n });
		expect(calls[calls.length - 1]!.toBlock).toBe(1_234n);
	});

	it('stops at an explicit toBlock rather than at head', async () => {
		const { client, calls } = recordingClient(9_999n);
		await getLogsInRange(client, { fromBlock: 0n, toBlock: 100n });
		expect(calls).toEqual([{ fromBlock: 0n, toBlock: 100n }]);
	});

	it('concatenates the logs from every chunk', async () => {
		const { client } = recordingClient(4_500n);
		const logs = await getLogsInRange(client, { fromBlock: 0n });
		expect(logs.length).toBe(3);
	});

	it('makes no request when the range is empty', async () => {
		const { client, calls } = recordingClient(100n);
		const logs = await getLogsInRange(client, { fromBlock: 500n });
		expect(calls).toEqual([]);
		expect(logs).toEqual([]);
	});

	it('reports progress per chunk', async () => {
		// A backfill over long history is thousands of requests; with no signal
		// it is indistinguishable from a hang.
		const { client } = recordingClient(4_500n);
		const seen: Array<{ toBlock: bigint; head: bigint; logs: number }> = [];
		await getLogsInRange(client, {
			fromBlock: 0n,
			onChunk: ({ toBlock, head, logs }) => seen.push({ toBlock, head, logs })
		});
		expect(seen.length).toBe(3);
		expect(seen[0]).toEqual({ toBlock: 1999n, head: 4500n, logs: 1 });
		expect(seen[seen.length - 1]!.toBlock).toBe(4_500n);
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

	it('omits address and event from the request when not given', async () => {
		// Passing `address: undefined` through to eth_getLogs is not the same as
		// omitting it on every provider.
		let received: Record<string, unknown> = {};
		const client = {
			getBlockNumber: async () => 10n,
			getLogs: async (args: Record<string, unknown>) => {
				received = args;
				return [];
			}
		} as unknown as PublicClient;
		await getLogsInRange(client, { fromBlock: 0n });
		expect('address' in received).toBe(false);
		expect('event' in received).toBe(false);
	});
});

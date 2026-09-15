---
'@sei-js/precompiles': minor
---

Add `getLogsInRange`, `blockRanges` and `MAX_GET_LOGS_BLOCK_RANGE` for reading logs across a block range.

`eth_getLogs` is capped per call, so reading any history longer than the cap means walking it in chunks. That loop is short but has two failure modes that both look like a working indexer, and every project that needs logs writes it again.

The first is the inclusive boundary. The public endpoints allow 2000 blocks and apply the check as `toBlock - fromBlock + 1 <= 2000`, so a range built as `from + 2000` asks for 2001 blocks and is rejected on every chunk with `block range too large (2001), maximum allowed is 2000 blocks`. Measured on both networks: 2000 succeeds, 2001 does not. Writing the loop conservatively at half the cap works but doubles the round trips a backfill needs.

The second is the confirmation depth most EVM indexing code carries by default. Sei finalises a block as it is produced, so there is no reorg window to wait out; a default lag copied from an Ethereum-shaped library is latency with nothing behind it. `getLogsInRange` reads to head, and a caller who wants to lag head passes an explicit `toBlock`.

`blockRanges` exposes the same arithmetic as a generator without making requests, so a caller can plan a backfill or drive a bounded worker pool instead of one sequential loop. `onChunk` reports progress, because a backfill over long history is thousands of requests and is otherwise indistinguishable from a hang.

No dependency or peer range changes: this uses the `viem` peer already declared, and `PublicClient` is accepted rather than constructed so it works with whatever transport and chain the caller has configured.

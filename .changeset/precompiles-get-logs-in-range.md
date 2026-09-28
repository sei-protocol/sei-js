---
'@sei-js/precompiles': minor
---

Add `getLogsInRange`, `streamLogsInRange`, `blockRanges` and `MAX_GET_LOGS_BLOCK_RANGE` for reading logs across a block range.

`eth_getLogs` is capped per request, so reading more history than one request allows means walking it in chunks, and every project that needs logs writes that loop again. This walk only sends requests a Sei node can answer. Spans are counted inclusively the way the node counts them (2000 blocks passes, 2001 is refused). A span too heavy to answer is halved and asked again, whether the node refuses it for matching more than `max_log_no_block` logs (sei-chain v6.7 and later), the response passes viem's size limit (before v6.7, when bounded requests are served whole), or the span times out. A node whose refusal names a smaller `max_blocks_for_log` is walked at that, and busy or rate limited refusals are retried with backoff. Every request carries an explicit `toBlock`, because nodes before v6.7 silently cut an open-ended request off at the log cap.

`streamLogsInRange` yields each chunk with its logs, so a backfill can store as it goes and resume from the last `toBlock`. `getLogsInRange` collects the walk into one array and awaits an optional `onChunk` for each chunk. Both take viem's `getLogs` filter (`address`, `event` with `args`, `events`, `strict`), accept a whole contract ABI as `events`, and take any viem `Client`, including one that carries an account. Without a `toBlock` they read to the head, since Sei finalises a block as it is produced. `blockRanges` gives the fixed-width plan without making requests.

No dependency or peer range changes: this uses the `viem` peer already declared.

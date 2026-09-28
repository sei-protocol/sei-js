<div align="center">

# @sei-js/precompiles

[![npm version](https://badge.fury.io/js/@sei-js%2Fprecompiles.svg)](https://badge.fury.io/js/@sei-js%2Fprecompiles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

TypeScript ABIs, addresses, and Ethers/Viem helpers for Sei precompiles.

[GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/precompiles) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## Install

```bash
npm install @sei-js/precompiles
```

## Sei Chain compatibility

The exported ABIs match [Sei Chain v6.6.1](https://github.com/sei-protocol/sei-chain/tree/v6.6.1/precompiles). The `legacy/v66` directory is a frozen historical snapshot for that release, not a moving view of the current chain surface. Chain and package versions are independent; adopting a later Sei Chain minor snapshot is treated as at least a minor release of `@sei-js/precompiles`.

This package exports:

- Bank at `0x0000000000000000000000000000000000001001`
- CosmWasm at `0x0000000000000000000000000000000000001002`
- JSON at `0x0000000000000000000000000000000000001003`
- Address association at `0x0000000000000000000000000000000000001004`
- Staking at `0x0000000000000000000000000000000000001005`
- Governance at `0x0000000000000000000000000000000000001006`
- Distribution at `0x0000000000000000000000000000000000001007`
- Pointer view at `0x000000000000000000000000000000000000100A`
- Pointer registration at `0x000000000000000000000000000000000000100B`
- Solo migration at `0x000000000000000000000000000000000000100C`
- P256 verification at `0x0000000000000000000000000000000000001011`

Oracle and IBC are intentionally excluded: the [v6.6.1 Oracle implementation returns a retired error for every query](https://github.com/sei-protocol/sei-chain/blob/v6.6.1/precompiles/oracle/oracle.go#L85-L104), and [SIP-03 disabled IBC in both directions](https://docs.sei.io/learn/sip-03-migration#ibc-is-disabled). Calls to either cannot succeed on live Sei. Some ABI methods can also be disabled by chain governance. Check the [Sei precompile docs](https://docs.sei.io/evm/precompiles/example-usage) before using a deprecated module or method.

## Usage

Addresses and raw `as const` ABIs are available from the package root and the `precompiles` and `viem` entrypoints. They work directly with Viem and preserve full type inference. Ethers factories are available from the `ethers` entrypoint.

```ts
import { STAKING_PRECOMPILE_ABI, STAKING_PRECOMPILE_ADDRESS } from '@sei-js/precompiles';
import { getStakingPrecompileEthersV6Contract } from '@sei-js/precompiles/ethers';
```

With a configured Viem public client, the v6.6 staking query methods can be called directly:

```ts
const result = await publicClient.readContract({
	address: STAKING_PRECOMPILE_ADDRESS,
	abi: STAKING_PRECOMPILE_ABI,
	functionName: 'validators',
	args: ['BOND_STATUS_BONDED', '0x']
});

console.log(result.validators, result.nextKey);
```

## Sei chain definitions

Import the canonical Sei mainnet and testnet definitions from the package root or the `viem` entrypoint:

```ts
import { sei, seiTestnet } from '@sei-js/precompiles';
// or: import { sei, seiTestnet } from '@sei-js/precompiles/viem';
```

## Reading logs across a block range

`eth_getLogs` is capped per request, so reading more history than one request
allows means walking it in chunks. `getLogsInRange` walks a range and returns
every log in it, and `streamLogsInRange` yields each chunk as it lands. Both
take a viem client and the same filter viem's `getLogs` takes (`address`,
`event` with `args`, `events`, `strict`):

```ts
import { createPublicClient, http, parseAbiItem } from 'viem';
import { getLogsInRange, sei } from '@sei-js/precompiles/viem';

const client = createPublicClient({ chain: sei, transport: http() });
const head = await client.getBlockNumber();

const logs = await getLogsInRange(client, {
	address: '0x…',
	event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'),
	args: { to: '0x…' },
	fromBlock: head - 20_000n,
	toBlock: head
});
```

For a long backfill, use the stream and store each chunk before asking for the
next. Memory then holds one chunk at a time, and a walk that fails part way
through resumes from the block after the last `toBlock` you stored. `events`
takes a whole contract ABI as well, keeping only its events:

```ts
import { streamLogsInRange } from '@sei-js/precompiles/viem';

for await (const chunk of streamLogsInRange(client, { address: '0x…', events: abi, fromBlock: cursor + 1n })) {
	await save(chunk.logs, chunk.toBlock);
}
```

What the walk handles so you don't have to:

- **The inclusive boundary.** `MAX_GET_LOGS_BLOCK_RANGE` is `2000n`, the
  `max_blocks_for_log` default both public endpoints enforce. The node counts a
  span as `toBlock - fromBlock + 1`, so 2000 blocks passes and 2001 is refused
  with `block range too large (2001), maximum allowed is 2000 blocks`. If a node
  allows fewer, the walk drops to the maximum its refusal names.
- **Heavy spans.** From sei-chain v6.7 a node refuses a request matching more
  than `max_log_no_block` logs (10,000 by default) with `query matches too many
  logs`. Before v6.7 it serves a bounded request whole, and on a busy range that
  can pass viem's 10 MiB `maxResponseBodySize` instead. Either way, and when the
  node or the client times out on a span, the walk halves the span and asks
  again. It then holds below the span that failed and only tries it again after
  a run of successes, so a steadily dense range isn't refused on every other
  request. A single block still too heavy can't be split, so that's thrown and
  the fix is a narrower filter.
- **Busy nodes.** Sei's `server too busy`, `server I/O saturated` and `system
  overloaded` refusals and its large query rate limit are retried with backoff
  (`retryCount`, `retryDelay`). viem's transport doesn't retry these itself,
  because they arrive as JSON-RPC `-32000`. The rate limit only applies to
  spans over 100 blocks, so when it outlasts the retries the walk steps down to
  100 rather than giving up.
- **Open-ended requests.** Every request carries an explicit `toBlock`. Nodes
  before sei-chain v6.7 silently cut a request missing either bound off at the
  log cap, which reads exactly like a quiet range.

Without a `toBlock`, the walk reads to the head. Sei finalises a block as it is
produced, so there's no reorg window to wait out and no confirmation depth to
subtract. Pass an explicit `toBlock` to lag head deliberately.

Public endpoints prune history, and the public mainnet endpoint keeps well under
a day of it. A `fromBlock` older than a node keeps is refused with
`requested fromBlock … is before earliest available block …`, so a backfill
over months of history needs an archive node. The walk reads `eth_getLogs`,
which leaves out the logs Sei synthesises for CosmWasm and pointer activity;
`sei_getLogs` includes those.

`blockRanges` gives the same fixed-width plan without making any requests, for
estimating a backfill or handing ranges to a bounded worker pool where each
worker calls `getLogsInRange` with an explicit `toBlock`. Keep a pool against a
public endpoint to a few workers, since a node allows about 30 requests a
second over 100 blocks, shared by every client it serves:

```ts
import { blockRanges } from '@sei-js/precompiles/viem';

const chunks = [...blockRanges(1_000_000n, 1_006_000n)];
// [{ fromBlock: 1000000n, toBlock: 1001999n }, … ]
```

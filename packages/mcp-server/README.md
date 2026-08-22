<div align="center">

# @sei-js/mcp-server

[![npm version](https://badge.fury.io/js/@sei-js%2Fmcp-server.svg)](https://badge.fury.io/js/@sei-js%2Fmcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

**Enable AI assistants to interact with the Sei blockchain**

[Setup](#quick-start) • [GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/mcp-server) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## Requirements

Node.js 20 or newer.

## Quick Start

### Basic Setup (Read-Only)

Start with read-only blockchain data access:

```json
{
  "mcpServers": {
    "sei": {
      "command": "npx",
      "args": ["-y", "@sei-js/mcp-server"]
    }
  }
}
```

Wallet functionality is disabled by default.

### Full Setup (With Wallet)

To enable transactions and wallet tools, set `WALLET_MODE` to `private-key` and provide a private key:

```json
{
  "mcpServers": {
    "sei": {
      "command": "npx",
      "args": ["-y", "@sei-js/mcp-server"],
      "env": {
        "WALLET_MODE": "private-key",
        "PRIVATE_KEY": "0x123..."
      }
    }
  }
}
```

`PRIVATE_KEY` must be a valid 32-byte secp256k1 private key; the `0x` prefix is optional. Startup fails instead of silently disabling wallet tools when private-key mode is misconfigured. Use a dedicated wallet with limited funds and never commit its private key.

Wallet mode is supported only with the default stdio transport. HTTP transports reject `WALLET_MODE=private-key` because exposing signing tools over HTTP would allow unsafe cross-origin requests.

Wallet-disabled mode still includes every non-signing tool, including contract reads, contract detection, gas estimates, token/NFT metadata, balances, and ownership checks. Only signing or broadcasting operations are hidden.

## HTTP Transports

Transport selection is configured with `SERVER_TRANSPORT`; transport flags such as `--http`, `--streamable-http`, and `--http-sse` are not supported.

From a repository checkout, build the package and use the provided scripts:

```bash
bun run --cwd packages/mcp-server build
bun run --cwd packages/mcp-server start:http       # Streamable HTTP
bun run --cwd packages/mcp-server start:http-sse   # Legacy HTTP/SSE
```

To run the published package directly:

```bash
# Recommended: Streamable HTTP at http://localhost:8080/mcp
SERVER_TRANSPORT=streamable-http npx -y @sei-js/mcp-server

# Legacy HTTP/SSE: GET http://localhost:8080/mcp for the event stream,
# POST http://localhost:8080/mcp/message?sessionId=<id> for client messages
SERVER_TRANSPORT=http-sse npx -y @sei-js/mcp-server
```

Customize the listener with environment variables:

```bash
SERVER_TRANSPORT=streamable-http \
SERVER_HOST=127.0.0.1 \
SERVER_PORT=3001 \
SERVER_PATH=/api/mcp \
npx -y @sei-js/mcp-server
```

HTTP transports do not authenticate callers or validate `Origin`/`Host`. Bind to `127.0.0.1` for local use, and put any public exposure behind an authenticating reverse proxy.

`http-sse` is retained for older clients; use `streamable-http` for new integrations.

Each legacy SSE connection has an isolated MCP server session. Both HTTP transports close active MCP request/session resources during graceful shutdown, and listener startup failures (including an occupied port) terminate startup with a nonzero exit status.

## Configuration

- `SERVER_TRANSPORT`: `stdio` (default), `streamable-http`, or `http-sse`
- `SERVER_HOST`: Nonempty HTTP listener host (default: `localhost`)
- `SERVER_PORT`: HTTP listener port (default: `8080`)
- `SERVER_PATH`: HTTP endpoint path (default: `/mcp`). For `http-sse`, this is the GET event stream; clients POST messages to `{SERVER_PATH}/message?sessionId=<id>`.
- `WALLET_MODE`: `disabled` (default) or `private-key`
- `PRIVATE_KEY`: Private key used when `WALLET_MODE=private-key`
- `MAINNET_RPC_URL`: Optional custom Sei mainnet RPC URL
- `TESTNET_RPC_URL`: Optional custom Sei testnet RPC URL

Network arguments accept only the supported canonical names and chain ID strings:

- Sei mainnet: `sei`, `1329`, or `0x531`
- Sei testnet: `sei-testnet`, `1328`, or `0x530`

Unknown selectors are rejected and never fall back to mainnet. Configured RPC URLs are used only for upstream connections; MCP chain-info responses omit them, and upstream errors redact URLs and credential-bearing details.

Run `npx -y @sei-js/mcp-server --help` for the current configuration reference.

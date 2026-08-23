---
'@sei-js/mcp-server': minor
---

Harden MCP transport lifecycle and startup behavior. Chain-info responses no longer expose `rpcUrl`, and credential-bearing RPC errors redact URLs and configured secrets. Unsupported networks now reject instead of falling back, while supported names and decimal/hex chain IDs normalize consistently.

NFT ownership lookup failures now propagate instead of reporting `false`. ERC-721 transfers now use `safeTransferFrom`, so contract recipients must implement `onERC721Received`.

Wallet-disabled servers retain the complete explicit read-only tool surface while signing and broadcasting tools remain hidden. HTTP listeners validate their host and concurrency limits, cap both SSE sessions and Streamable HTTP requests, and avoid allocating an unused bootstrap MCP server. Wallet-enabled HTTP still exits immediately before listen. For other startup failures, embedded `main()` callers receive the exception while the packaged `runCli()` path reports a sanitized error and exits nonzero.

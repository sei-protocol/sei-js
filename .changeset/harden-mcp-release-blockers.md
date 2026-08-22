---
'@sei-js/mcp-server': minor
---

Harden MCP transport lifecycle and startup behavior. Chain-info responses no longer expose `rpcUrl`, and credential-bearing RPC errors redact URLs and configured secrets. Unsupported networks now reject instead of falling back, while supported names and decimal/hex chain IDs normalize consistently.

NFT ownership lookup failures now propagate instead of reporting `false`. ERC-721 transfers now use `safeTransferFrom`, so contract recipients must implement `onERC721Received`.

Wallet-disabled servers retain the complete explicit read-only tool surface while signing and broadcasting tools remain hidden. Invalid host, wallet mode, and private-key configuration now fail startup; direct CLI startup errors terminate nonzero after cleanup while embedded callers receive the exception.

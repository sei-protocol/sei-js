---
'@sei-js/mcp-server': major
'@sei-js/registry': major
---

Remove Sei devnet support. The MCP server no longer accepts `sei-devnet`, chain ID `713715`, or `DEVNET_RPC_URL`. Registry exports now contain only `pacific-1` and `atlantic-2`, and `CHAIN_IDS.devnet` has been removed.

---
"@sei-js/mcp-server": patch
---

Fix session binding and response isolation in the HTTP SSE transport.

- POST handler now validates `sessionId` on every request — rejects missing session IDs (400) and unknown session IDs (404)
- Each POST is routed to the transport instance that owns the matching session ID, preventing cross-client request injection
- Session IDs now use the MCP SDK's `transport.sessionId` rather than `Date.now()`
---
'@sei-js/mcp-server': patch
---

Align `zod` with `@modelcontextprotocol/sdk` so both resolve the same schema types. Raise the SDK floor to `^1.23.0`, the first release that declares zod 4 support, so the pairing is unresolvable rather than silently broken.

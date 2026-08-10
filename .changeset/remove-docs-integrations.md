---
'@sei-js/mcp-server': minor
---

Remove the `search_sei_js_docs` tool and route the remaining `search_docs` tool through the official docs.sei.io MCP endpoint instead of the legacy Mintlify/Trieve backends. Reconnect and retry once when the remote docs session expires so callers do not see a transient 404 or 410 error. Remove the obsolete `docs/` rule from the package's `.npmignore`.

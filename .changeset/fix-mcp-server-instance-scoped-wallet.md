---
'@sei-js/mcp-server': patch
---

Keep each MCP runtime on the wallet configuration that passed its security check.

A later programmatic `main()` could overwrite the process-wide config object while an HTTP listener started earlier was still serving requests. New sessions on that listener then built their tool list from the updated singleton, so a wallet-disabled HTTP server could expose signing tools after a trusted stdio start in the same process. No shipped CLI or host spawn does that, but the public lifecycle returned independent runtimes without isolating their keys.

`parseArgs()` now returns a frozen `AppConfig` snapshot. HTTP transports close their `serverFactory` and request/session handling over that snapshot, `stop()` drops the process-wide wallet provider memo, and both HTTP transports keep wallet tools hidden after a subsequent private-key `initializeConfig()`. Direct wallet-on-HTTP startup still exits 1.

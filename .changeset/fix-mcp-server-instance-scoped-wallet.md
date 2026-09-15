---
'@sei-js/mcp-server': patch
---

Keep each MCP runtime on the wallet configuration that passed its security check.

A later programmatic `main()` could overwrite the process-wide config object while an HTTP listener started earlier was still serving requests. New sessions on that listener then built their tool list from the updated singleton, so a wallet-disabled HTTP server could expose signing tools after a trusted stdio start in the same process. No shipped CLI or host spawn does that, but the public lifecycle returned independent runtimes without isolating their keys.

`parseArgs()` now returns a frozen `AppConfig` snapshot, and every transport handles requests against that snapshot. Stopping one runtime releases only its provider, while other runtimes keep their original signer. HTTP transports require that snapshot, derive signing policy from it, and reject conflicting legacy `walletMode` options.

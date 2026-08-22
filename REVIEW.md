# Review guidelines for AI agents

Repo-specific conventions for automated PR review (Codex, Cursor, Claude, and
any other AI reviewer). This is a Bun workspace that publishes five
independently versioned `@sei-js/*` packages to npm, so a defect ships to every
downstream dApp that upgrades rather than to a single deployment we control.
Calibrate accordingly: a wrong precompile address or a weakened wallet guard is
far more valuable to catch than a style nit, and several patterns below look
like bugs in isolation but are deliberate.

## 1. `packages/mcp-server` is the security surface

This package hands blockchain capabilities to an LLM client, so it is the one
place in the repo where a subtle regression can cost users funds. Two
invariants are load-bearing and are enforced in code rather than by convention:

- **Wallet mode is stdio-only.** `validateSecurityConfig()` in
  `src/server/transport/security.ts` throws before any listener is opened when
  the wallet is enabled and the transport is `streamable-http` or `http-sse`.
  The direct packaged CLI catches the propagated startup failure, prints a
  sanitized concise diagnostic, and calls `process.exit(1)`. Embedded callers
  receive the exception after cleanup, with no running transport or reachable
  signing surface. HTTP transports are reachable cross-origin, so a signing
  key behind one is a drain-the-wallet primitive. Any change that narrows this
  check, moves it after listener startup, or adds a transport that bypasses it
  is a finding.
- **SSE messages are bound to their session.**
  `src/server/transport/http-sse.ts` keys `connections` by
  `transport.sessionId` and requires a matching `?sessionId=` on
  `POST {path}/message` (400 when absent, 404 when unknown). This replaced an
  implementation that routed to the first connection in the map, which let one
  client inject into another's stream. Treat any reintroduction of positional
  or implicit session lookup as a regression, and keep the isolation tests in
  `src/tests/server/transport/http-sse.test.ts` meaningful.

Beyond those, scrutinise anything that widens what a caller controls: contract
ABIs reach `JSON.parse` from tool arguments in `src/core/tools.ts`, addresses
and call arguments arrive unvalidated from the model, and RPC endpoints are
overridable through `MAINNET_RPC_URL` / `TESTNET_RPC_URL` in `src/core/chains.ts`.
Private keys are read from the environment in
`src/core/config.ts` and must never reach a log line, an error message, or a
tool response.

## 2. Precompile addresses and ABIs are hand-maintained source

`packages/precompiles/src/precompiles/*.ts` is not generated — there is no
codegen step or ABI pipeline in this repo. An address or ABI entry changed
there is a change to the source of truth, and a wrong value silently misroutes
every consumer's calls. You usually cannot settle these from the diff alone, so
when a value looks suspect, ask for the authoritative source rather than
asserting it is wrong: link what you checked (`docs.sei.io`, `sei-chain`,
Seiscan) and say what disagrees. An unsourced change to an existing documented
address, chain ID, or ABI signature is worth raising on its own.

## 3. A publishable change needs a changeset

`.changeset/config.json` sets `fixed: []` and `linked: []`, so every package
versions independently — do not expect or request a coordinated bump. Merging
to `main` opens a "Version Packages" PR, and merging that publishes. A
user-facing change to a published package with no `.changeset/*.md` file ships
the code without releasing it, which is the common miss on this repo.

Ask for a changeset when a published package's behaviour, types, or
dependencies change. Docs-only, CI-only, and changes confined to
`packages/create-sei/templates/**` generally don't need one, though the repo
has deliberately added patch changesets across all five packages for
release-note visibility. Absence of a changeset on that kind of PR is a
question, not a defect.

## 4. Known non-issues — do not flag these

- **`console.error` used for informational messages.** Under the stdio
  transport, stdout carries the JSON-RPC frames, so anything written there
  corrupts the protocol. `console.error('MCP Server ready (stdio transport)')`
  in `src/server/transport/stdio.ts` is correct. Never suggest converting
  these to `console.log`. The inverse *is* a finding: a new `console.log` on a
  path reachable from stdio breaks the transport.
- **The CORS middleware sets no `Access-Control-Allow-Origin`.**
  `createCorsMiddleware()` answers preflights with a bare 204 and no CORS
  headers. The *absence of a permissive wildcard* is deliberate, so don't file
  it as a misconfiguration. Note the limit of that guarantee: it only binds
  browsers that honour the missing header. Neither `http-sse.ts` nor
  `streamable-http.ts` validates `Origin` or `Host`, so a non-browser client or
  a DNS-rebinding attack still reaches the tool surface — that gap is a
  separate question and is fair to raise.
- **The split wallet/HTTP failure contract.** `validateSecurityConfig()` throws
  before listener startup so it remains testable and safe for embedding.
  `packages/mcp-server/bin/mcp-server.js` invokes the direct-CLI wrapper, which
  sanitizes the diagnostic and calls `process.exit(1)` after cleanup. Do not
  request `process.exit()` inside the validator, and do not replace the
  packaged CLI's fatal path with the embedder-facing `main()` call.
- **`packages/registry/chain-registry` and `.../community-assetlist` are
  missing from the tree.** Both are git submodules (`.gitmodules`) and are
  listed in `.gitignore`. Workflows that build the registry check them out with
  `submodules: recursive`; local source builds must initialize them explicitly.
  Their JSON is vendored upstream — review the TypeScript wrappers, not the
  data.
- **Biome is enforced in CI.** `bun run check` runs in `.github/workflows/checks.yml`
  with tabs, 160-column lines, single quotes and no trailing commas. Match that
  style; formatting-only findings that `biome check` already catches do not
  need a separate review comment.
- **Test file naming is inconsistent across packages.** `mcp-server` and
  `create-sei` use `*.test.ts`; `precompiles`, `registry` and
  `sei-global-wallet` use `*.spec.ts` under `__tests__/`. Follow the
  convention of the package being changed rather than proposing a repo-wide
  rename.
- **`mcp-server` and `create-sei` have no Codecov target.** `codecov.yml`
  defines 80% project targets for the three library packages with meaningful
  source coverage. Thin coverage elsewhere is worth mentioning on its merits,
  but it does not fail a gate.
- **`noImplicitAny: false` in `tsconfig.base.json`.** This is a deliberate
  repo-wide setting. Flag an untyped value when it actually causes an unsound
  path, not because the compiler permitted it.
- **The `create-sei` templates and extensions are excluded from the root Biome
  config** and carry their own toolchain. Do not apply root formatting rules to
  scaffold sources under `packages/create-sei/{templates,extensions}/`.

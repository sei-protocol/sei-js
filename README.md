# SeiJS

SeiJS is a monorepo that contains multiple NPM libraries for writing applications that interact with Sei.

## Packages

SeiJS consists of smaller NPM packages within the @sei-js namespace. See the package READMEs below for usage details.

| Package                                                 | Description                                                                                                                    |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [@sei-js/precompiles](packages/precompiles)             | Typescript library containing helper functions for interacting with Sei's precompile contracts.                                |
| [@sei-js/create-sei](packages/create-sei)               | CLI Tool used to quickly spin up Sei Projects and dApps in either the cosmos or EVM ecosystem                                  |
| [@sei-js/mcp-server](packages/mcp-server)               | MCP server for interacting with Sei via LLM's and agents                                                                       |
| [@sei-js/sei-global-wallet](packages/sei-global-wallet) | A global wallet conforming to EIP-6963 allowing for AA across dApps.                                                           |
| [@sei-js/registry](packages/registry)                   | TypeScript library for Sei chain constants and assets.                                                                         |

## Development

This project uses [Bun](https://bun.sh) for package management, tests, and scripts. Packages are still published to npm as ESM-only libraries.

### Prerequisites

Install Bun 1.3.x: https://bun.sh/docs/installation

### Install, build, test

```bash
bun install
bun run build
bun test
```

Lint and format with Biome:

```bash
bun run check
```

### Publishing

Releases still go through Changesets and publish to npm (OIDC). Merging to `main` opens a Version Packages PR; merging that publishes.

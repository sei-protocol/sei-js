# SeiJS

SeiJS is a monorepo of npm packages for building EVM applications on Sei.

## Packages

SeiJS consists of packages within the `@sei-js` namespace. See the package READMEs below for usage details.

| Package                                                 | Description                                                                       |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [@sei-js/precompiles](packages/precompiles)             | TypeScript ABIs, addresses, and Ethers/Viem helpers for Sei EVM precompiles.       |
| [@sei-js/create-sei](packages/create-sei)               | CLI for scaffolding Sei EVM applications and dApps.                               |
| [@sei-js/mcp-server](packages/mcp-server)               | MCP server that lets AI assistants and agents interact with Sei EVM.              |
| [@sei-js/sei-global-wallet](packages/sei-global-wallet) | Global wallet integration for EIP-6963 and account abstraction across dApps.      |
| [@sei-js/registry](packages/registry)                   | TypeScript library for Sei chain constants and assets.                            |

## Development

This project uses [Bun](https://bun.sh) for package management, tests, and scripts. Packages are still published to npm as ESM-only libraries.

### Prerequisites

Install Bun 1.3.14: https://bun.sh/docs/installation

Node.js 24 is pinned in `.nvmrc` for npm package validation and OIDC publishing; Bun remains the workspace package manager and test runner.

### Install, build, test

```bash
git submodule update --init --recursive
bun install
bun run build
bun run test
```

Lint and format with Biome:

```bash
bun run check
```

### Publishing

Releases still go through Changesets and publish to npm (OIDC). Merging to `main` opens a Version Packages PR; merging that publishes.

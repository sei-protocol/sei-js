# SeiJS

SeiJS is a monorepo that contains multiple NPM libraries for writing applications that interact with Sei.

## Packages

SeiJS consists of smaller NPM packages within the @sei-js namespace. See the package READMEs below for usage details.

| Package                                                 | Description                                                                                                                     |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [@sei-js/precompiles](packages/precompiles)             | Typescript library containing helper functions for interacting with Sei's precompile contracts.                                  |
| [@sei-js/create-sei](packages/create-sei)               | CLI Tool used to quickly spin up Sei Projects and dApps in either the cosmos or EVM ecosystem                                   |
| [@sei-js/mcp-server](packages/mcp-server)               | MCP server for interacting with Sei via LLM's and agents                                                                        |
| [@sei-js/sei-global-wallet](packages/sei-global-wallet) | A global wallet conforming to EIP-6963 allowing for AA across dApps.                                                            |

## Development

### Prerequisites

This project uses Yarn 4.7.0 with Corepack for package management. To get started:

1. **Enable Corepack** (if not already enabled):
   ```bash
   corepack enable
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

The correct Yarn version will be automatically used thanks to the `packageManager` field in `package.json` and Corepack.

### Building

To build all packages, run `pnpm install` then `pnpm build:all`

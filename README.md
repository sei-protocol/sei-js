# SeiJS

SeiJS is a monorepo that contains multiple NPM libraries for writing applications that interact with Sei.

## Documentation

Please check [our documentation](https://sei-js.docs.sei.io) for notes on how to get up and running. 

## Packages

SeiJS consists of smaller NPM packages within the @sei-js namespace. For more detailed documentation on each package,
please refer to the table below.

| Package                                                 | Description                                                                                                                     |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [@sei-js/precompiles](packages/precompiles)             | Typescript library containing helper functions for interacting with Sei's precompile contracts.                                  |
| [@sei-js/create-sei](packages/create-sei)               | CLI Tool used to quickly spin up Sei Projects and dApps in either the cosmos or EVM ecosystem                                   |
| [@sei-js/mcp-server](packages/mcp-server)               | MCP server for interacting with Sei via LLM's and agents                                                                        |
| [@sei-js/sei-global-wallet](packages/sei-global-wallet) | A global wallet conforming to EIP-6963 allowing for AA across dApps.                                                            |
| [@sei-js/ledger](packages/ledger)                       | TypeScript library transacting on Sei using a Ledger device.                                                                    |

## Development

### Prerequisites

This project uses [Bun](https://bun.sh) for package management and testing. To get started:

1. **Install Bun** (if not already installed):
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

### Building

To build all packages, run:
```bash
bun run build
```

### Testing

```bash
bun test packages/*
```

### Linting & Formatting

This project uses [Biome](https://biomejs.dev) for linting and formatting:
```bash
bun run check      # lint + format check
bun run check:fix  # lint + format fix
```

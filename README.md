# SeiJS

SeiJS is a monorepo that contains multiple NPM libraries for writing applications that interact with Sei.

## Documentation

Please check [our documentation](https://docs.sei.io) for notes on how to get up and running. The tutorial has examples on how to connect to a Sei wallet, query an RPC endpoint, transfer tokens, IBC transfer, and interact with contracts.

You can also refer to the [typedoc documentation](https://sei-protocol.github.io/sei-js/) for reference on the contents of the @sei-js/core and @sei-js/react library.


## Packages

SeiJS consists of smaller NPM packages within the @sei-js namespace. For more detailed documentation on each package, please refer to the table below.

| Package                                                 | Description                                                                                                                     |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [@sei-js/evm](packages/evm)                             | Typescript library containing helper functions for interacting with the EVM on Sei.                                             |
| [@sei-js/create-sei](packages/create-sei)               | CLI Tool used to quickly spin up Sei Projects and dApps in either the cosmos or EVM ecosystem                                   |
| [@sei-js/sei-global-wallet](packages/sei-global-wallet) | A global wallet conforming to EIP-6963 allowing for AA across dApps.                                                            |
| [@sei-js/cosmjs](packages/cosmjs)                       | TypeScript library containing helper functions for wallet connection, transaction signing, and RPC querying using cosmjs.       |
| [@sei-js/cosmos](packages/cosmos)                       | TypeScript library for Sei protobuf encoding and decoding, a REST query client, and Typescript types for everything Sei Cosmos. |
| [@sei-js/ledger](packages/ledger)                       | TypeScript library transacting on Sei using a Ledger device.                                                                    |

## Development
To build all packages and docs, run `yarn install` then `yarn build:all`


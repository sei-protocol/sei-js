# @sei-js/core

A library for Sei written in Typescript.

## Installation

```shell
yarn add @sei-js/core

# or

npm install @sei-js/core
```

## Getting Started

### Connecting to a wallet

In order to interact with a Sei node, you'll need a wallet to sign transactions. The wallet extensions that are currently supported can be found in `SUPPORTED_WALLETS`.

```javascript
import { connect, SUPPORTED_WALLETS } from '@sei-js/core';

// Connecting to a Keplr wallet
const { connectedWallet, offlineSigner } = await connect('keplr', 'atlantic-2');
```

### Client

#### LCD Query Client

The LCD query client can be used to query data via REST endpoints.

```javascript
import { getQueryClient } from '@sei-js/core';

const queryClient = await getQueryClient(REST_URL);
// Getting the market summary from the Sei dex module
queryClient.seiprotocol.seichain.dex.getMarketSummary(params);
// Getting user balances from the Cosmos bank module
queryClient.cosmos.bank.v1beta1.allBalances({ address });
```

#### Signing Client

The signing client can be used to create, sign, and broadcast transactions.

```javascript
import { getSigningClient } from '@sei-js/core';

const client = await getSigningClient({
  rpcEndpoint,
  signer, // OfflineSigner
});
```


#### CosmWasmClient and SigningCosmWasmClient

The `SeiSigningCosmWasmClient` and `SeiCosmWasmClient` can be used to interact with CosmWasm smart contracts. Typically, you need the `SeiSigningCosmWasmClient` to execute contract messages and the `SeiCosmWasmClient` to query contract state, though contract states can also be queried using the signing client.

```typescript
import { getSigningCosmWasmClient, getCosmWasmClient, connect } from '@sei-js/core';

const cosmWasmClient = await getCosmWasmClient(RPC_URL);

const { offlineSigner } = await connect('keplr', 'atlantic-2');
const signingCosmWasmClient = await getSigningCosmWasmClient(RPC_URL, offlineSigner);
```

## Related packages

[@sei-js/react](https://www.npmjs.com/package/@sei-js/react) - A react helper library for common @sei-js/core functions

[@sei-js/proto](https://www.npmjs.com/package/@sei-js/proto) - TypeScript library for Sei protobufs generated using Telescope

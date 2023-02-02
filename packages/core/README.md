# @sei-js/core
A library for Sei written in Typescript.

## Installation
```yarn add @sei-js/core``` or ```npm install @sei-js/core```

## Modules
| Module | Link                  |
|--------|-----------------------|
| Wallet | [learn more](#wallet) |
| Client | [learn more](#client) |

### Wallet
```import { connect, SUPPORTED_WALLETS } from '@sei-js/core/wallet```

| Property          | Type                                                            | Description                                                                                                                                   |
|-------------------|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| connect()         | (walletKey: string) => { accounts, offlineSigner}               | Async function to connect to input wallet                                                                                                     |
| SUPPORTED_WALLETS | string[]                                                        | A list of currently supported wallets which can be passed to connect()                                                                        |
| getChainSuggest   | (chainId?: string, restUrl?: string, rpcUrl?: string) -> object | A pre defined object to be passed to a wallets experimentalChainSuggest function. Takes optional parameters for chainId, restUrl, and rpcUrl. |

### Client
#### Query Client
The query client is used to query data from modules via REST endpoints.

```javascript
import { QueryClient } from '@sei-js/core';

const queryClient = await QueryClient.getQueryClient(rpcEndpoint);

// Getting the market summary from the Sei dex module
queryClient.seiprotocol.seichain.dex.getMarketSummary(params)

// Getting user balances from the Cosmos bank module
queryClient.cosmos.bank.v1beta1.allBalances({ address})
```

#### Signing Client
The signing client provides a way to sign and broadcast transactions on Sei.

Use `getSigningClient` to get your `SigningStargateClient`, with the Sei proto/amino messages loaded in.

```javascript
import { SigningClient } from '@sei-js/core';

const client = await SigningClient.getSigningClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```


## Related packages
[@sei-js/react](https://www.npmjs.com/package/@sei-js/react) - A react helper library for common @sei-js/core functions

[@sei-js/proto](https://www.npmjs.com/package/@sei-js/proto) - TypeScript library for Sei protobufs generated using Telescope

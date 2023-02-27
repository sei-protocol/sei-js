# @sei-js/react

A React helper library for [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) written in Typescript.

## Tutorial

For an in depth tutorial, please see [our documentation](https://docs.seinetwork.io/front-end-development/javascript-tutorial).

## Installation

```shell
yarn add @sei-js/react
```

# WalletProvider
The first step is to wrap your entire application in a Sei wallet provider and pass in a chainId, rest url, and rpc url.
```javascript
<SeiWalletProvider
  chainConfiguration={{
    chainId: 'sei-devnet-3',
    restUrl: 'https://rest.sei-devnet-3.seinetwork.io/',
    rpcUrl: 'https://rpc.sei-devnet-3.seinetwork.io'
  }}>
      <YourApp />
</SeiWalletProvider>
```

# Hooks

| Hook                                          | Params                |
|-----------------------------------------------|-----------------------|
| [useWallet](#useWallet)                       | ---                   |
| [useQueryClient](#useQueryClient)             | (rpcAddress?: string) |
| [useSigningClient](#useSigningClient)         | (rpcAddress?: string) |
| [useSeiCosmWasmClient](#useSeiCosmWasmClient) | ---                   |

## useWallet

A hook to connect one of our supported wallets to your application.


```javascript
import { useWallet } from '@sei-js/react';

const { offlineSigner, accounts, connectedWallet } = useWallet();
```

### Return Values

| Property         | Type      | Description                                             |
|------------------|-----------|---------------------------------------------------------|
| connectedWallet  | string?   | The currently connected wallet                          |
| supportedWallets | string[]  | List of supported wallets                               |
| installedWallets | string[]  | List of wallets installed                               |
| chainId          | string    | Sei chain id                                            |
| restUrl          | string    | The rest url associated with the connected wallet       |
| rpcUrl           | string    | The rpc url associated with the connected wallet        |
| offlineSigner    | object?   | The offline signer associated with the connected wallet |
| accounts         | object[]? | The accounts associated with the connected wallet       |

## useQueryClient

```javascript
import { useQueryClient } from '@sei-js/react';

const { queryClient, isLoading } = useQueryClient();
```

| Property    | Type                   | Description                                             |
|-------------|------------------------|---------------------------------------------------------|
| queryClient | StargateSigningClient? | A stargate signing client.                              |
| isLoading   | boolean                | Boolean value for when the initial loading is happening |

## useSigningClient

```javascript
import { useSigningClient } from '@sei-js/react';

const { signingClient, isLoading } = useSigningClient();
```

| Property      | Type                   | Description                                             |
|---------------|------------------------|---------------------------------------------------------|
| signingClient | StargateSigningClient? | A stargate signing client.                              |
| isLoading     | boolean                | Boolean value for when the initial loading is happening |

## useSeiCosmWasmClient

```javascript
import { useSeiCosmWasmClient } from '@sei-js/react';

const { cosmWasmClient } = useSeiCosmWasmClient();
```

| Property       | Type            | Description                             |
|----------------|-----------------|-----------------------------------------|
| cosmWasmClient | CosmWasmClient? | A cosm wasm client for smart contracts. |

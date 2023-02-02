# @sei-js/react

A set of React hooks for [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) written in Typescript.

## Tutorial

For an in depth tutorial, please see [our documentation](https://docs.seinetwork.io/front-end-development/javascript-tutorial).

## Installation

```shell
yarn add @sei-js/react
```

# Hooks

| Hook                                  | Params                                   |
| ------------------------------------- | ---------------------------------------- |
| [useWallet](#usewallet)               | (window: any, config: object)            |
| [useQueryClient](#useQueryClient)     | (rpcAddress: string)                     |
| [useSigningClient](#useSigningClient) | (rpcAddress: string, offlineSigner: any) |

## useWallet

A hook to connect one of our supported wallets to your application.

### Input Props

| Hook          | Params                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------- |
| window        | The client side `window` object which has access to wallet providers injected code.                 |
| walletOptions | [UseWalletOptions](https://github.com/sei-protocol/js-react/blob/main/src/hooks/useWallet/types.ts) |

```javascript
import { useWallet } from '@sei-js/react';

const { offlineSigner } = useWallet(window, {
  inputWallet: 'leap',
  autoconnect: true,
  chainConfiguration: 'testnet',
});
```

### Return Values

| Property         | Type               | Description                                             |
| ---------------- | ------------------ | ------------------------------------------------------- |
| connectedWallet  | string?            | The currently connected wallet                          |
| connect          | () => Promise<any> | Async function to connect to input wallet               |
| disconnect       | () => void         | Function to disconnect from input wallet                |
| supportedWallets | string[]           | List of supported wallets                               |
| installedWallets | string[]           | List of wallets installed                               |
| error            | string?            | Error message                                           |
| chainId          | string             | Sei chain id                                            |
| restUrl          | string             | The rest url associated with the connected wallet       |
| rpcUrl           | string             | The rpc url associated with the connected wallet        |
| offlineSigner    | object?            | The offline signer associated with the connected wallet |
| accounts         | object[]?          | The accounts associated with the connected wallet       |

## useQueryClient

```javascript
import { useQueryClient } from '@sei-js/react';

const { queryClient, isLoading } = useQueryClient('rest_url');
```

| Property    | Type                   | Description                                             |
| ----------- | ---------------------- | ------------------------------------------------------- |
| queryClient | StargateSigningClient? | A stargate signing client.                              |
| isLoading   | boolean                | Boolean value for when the initial loading is happening |

## useSigningClient

```javascript
import { useWallet, useSigningClient } from '@sei-js/react';

const { offlineSigner } = useWallet(window, {
  inputWallet: 'keplr',
  autoconnect: true,
  chainConfiguration: 'testnet',
});
const { signingClient, isLoading } = useSigningClient(
  'rpc_address',
  offlineSigner
);
```

| Property      | Type                   | Description                                             |
| ------------- | ---------------------- | ------------------------------------------------------- |
| signingClient | StargateSigningClient? | A stargate signing client.                              |
| isLoading     | boolean                | Boolean value for when the initial loading is happening |

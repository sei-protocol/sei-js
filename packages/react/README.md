# @sei-js/react

A React helper library for [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) written in Typescript.

## Tutorial

For an in depth tutorial, please see [our documentation](https://docs.seinetwork.io/front-end-development/react-tutorial).

## Installation

```shell
yarn add @sei-js/react
```

# WalletProvider
The first step is to wrap your entire application in a Sei wallet provider and pass in a chainId, rest url, and rpc url.
```javascript
<SeiWalletProvider
  chainConfiguration={{
    chainId: 'atlantic-2',
    restUrl: 'https://rest.atlantic-2.seinetwork.io/',
    rpcUrl: 'https://rpc.atlantic-2.seinetwork.io'
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

# UI Components
This package contains two helpful UI components for connecting to a wallet provider.

## \<WalletConnectButton />
This component renders a button that will open a modal to connect to a wallet provider.

```javascript
import React from "react";
import {useWallet, WalletConnectButton} from "../lib";

const Component = () => {
  const { connectedWallet } = useWallet();

  return (
     <div>
         <WalletConnectButton />
         <p>Connected wallet: {connectedWallet?.walletInfo?.name || "---"}</p>
     </div>
  );
};

export default Component;

```


| Property        | Type         | Description                                                                 |
|-----------------|--------------|-----------------------------------------------------------------------------|
| wallets         | SeiWallet[]? | A stargate signing client.                                                  |
| buttonClassName | string       | A css class name for styling the button                                     |
| primaryColor    | string       | A hex value of the color you want to tint the text and icons with           |
| secondaryColor  | string       | A secondary hex value of the color you want to tint the text and icons with |
| backgroundColor | string       | A hex value of the color you want to use as a background                    |

*If your page has a <WalletConnectButton/> on the page it can be opened programmatically by calling the hook "useSelectWallet"*


## useSelectWallet()
This hook allows you to programmatically open and close the wallet modal.

```javascript
import React from "react";
import { useWallet, useSelectWallet } from "../lib";

const Component = () => {
  const { connectedWallet } = useWallet();
  const { openModal, closeModal } = useSelectWallet();

  return (
     <div>
         <button onClick={openModal}>Open Modal</button>
         <p>Connected wallet: {connectedWallet?.walletInfo?.name || "---"}</p>
      </div>
  );
};

export default Component;

```

### Other helpful packages

- [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) - TypeScript library containing helper functions for wallet connection, transaction sig
ning, and RPC querying.
- [@sei-js/proto](https://www.npmjs.com/package/@sei-js/proto) - TypeScript library for Sei protobufs generated using Telescope

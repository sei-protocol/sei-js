# @sei-js/react

A set of React hooks for [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) written in Typescript.

## Tutorial

For an in depth tutorial, please see [our documentation](https://docs.seinetwork.io/front-end-development/getting-started).

## Installation

```shell
yarn add @sei-js/react

# or

npm install @sei-js/react
```

## Getting Started

### Wrap your app in the wallet provider

```tsx
import { SeiWalletProvider } from '@sei-js/react';

<SeiWalletProvider
  chainConfiguration={{
    chainId: 'sei-devnet-3',
    restUrl: 'https://rest.sei-devnet-3.seinetwork.io/',
    rpcUrl: 'https://rpc.sei-devnet-3.seinetwork.io',
  }}
>
  <App />
</SeiWalletProvider>;
```

### Add the `WalletSelectButton` component

Once you've wrapped your app in the `SeiWalletProvider`, you'll be able to render the `WalletSelectButton` component in your app to add a button that allows users to connect their wallet.

```tsx
import { WalletSelectButton } from '@sei-js/react';

const MyComponent = () => {
  return (
    <div>
      <WalletSelectButton />
    </div>
  );
};
```

### Use hooks

You can use the provided hooks to get details about the connected wallet, get a query client, or request signatures from wallets using the signing client.

```tsx
const { accounts, offlineSigner, connectedWallet } = useWallet();
const { cosmWasmClient } = useSeiCosmWasmClient();
const { signingClient } = useSigningClient();
const { queryClient } = useQueryClient();
```

## Related packages

[@sei-js/core](https://www.npmjs.com/package/@sei-js/core) - TypeScript library containing helper functions for wallet connection, transaction signing, and RPC querying.

[@sei-js/proto](https://www.npmjs.com/package/@sei-js/proto) - TypeScript library for Sei protobufs generated using Telescope

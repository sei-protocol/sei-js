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
import { WalletConnectButton } from '@sei-js/react';

const MyComponent = () => {
  return (
    <div>
      <WalletConnectButton buttonClassName="your-class-name" />
    </div>
  );
};
```

```tsx
const { accounts, offlineSigner, connectedWallet } = useWallet();
const { cosmWasmClient } = useSeiCosmWasmClient();
const { signingClient } = useSigningClient();
const { queryClient } = useQueryClient();
```



## Step 1: Wallet provider
The first step in integrating Sei into your React project is to wrap the root of your project with the `<SeiWalletProvider/>` component. This wallet provider requires a chain configuration input for the target chainId, rpcUrl, and restUrl. This provider allows you to easily use hooks for signing, broadcasting, interacting with smart contracts, querying RPC endpoints, and more.

```tsx
import { SeiWalletProvider } from "@sei-js/react";

<SeiWalletProvider chainConfiguration={{ chainId, restUrl, rpcUrl }}>
    <YourApp />
</SeiWalletProvider>
```

## Step 2: Wallet select button
Once you have wrapped your application in the SeiWalletProvider component, you need to tell the wallet provider which supported wallet you want to connect to. There are currently two ways to do this.

### Option A: Pre built button and UI

Use the built-in `<WalletConnectButton/>` component, which is a button that allows users to connect to one of the supported wallets, copy their account address, and disconnect/change their connected wallet. This component accepts optional styling via class names or inline styles.

```tsx
import { WalletConnectButton } from "@sei-js/react";

<div>
    <WalletConnectButton />
</div>
```

### Option B: Create your own UI

Create your own wallet connection UI or automatically connect to a specific wallet by using the connect or disconnect functions in the exported `SeiWalletContext`. Both connect and disconnect functions accept a WalletWindowKey as an input parameter. The available wallet keys can be found in the supportedWallets and installedWallets variables from this context.

```tsx
import { SeiWalletContext } from "@sei-js/react";

const {
supportedWallets,
connect,
disconnect,
installedWallets
} = useContext(SeiWalletContext);
```

## Step 3: Use the hooks


## useWallet
In order to interact with the blockchain, you often need an offline signer. The `useWallet` hook helps you connect to pre-configured wallet providers to get an offlineSigner and contains other helpful functions and constants.

```tsx
import { useWallet } from '@sei-js/react';

const { connectedWallet, offlineSigner, accounts } = useWallet();
```

### Custom Node connection
The useWallet hook accepts optional parameters in case you require a one-off wallet for a specific chainId, restUrl, or rpcUrl. In most cases you will want to use the wallet values from the chainConfiguration set in your <SeiWalletProvider/>.
```tsx
import { useWallet } from '@sei-js/react';

const SeiWallet = useWallet({ chainId: 'atlantic-1', restUrl: '', rpcUrl: ''})
```

## useQueryClient
In order to query RPC endpoints you need a `queryClient` connected to the RPC endpoint.

```tsx
import { useQueryClient, useWallet } from '@sei-js/react';

const { accounts } = useWallet();
const { queryClient } = useQueryClient()

// Query balances for the users address using an rpc query client
const { balances } = await queryClient.cosmos.bank.v1beta1.allBalances({ address: accounts[0].address })
```

## useSigningClient
To sign transactions or execute contracts you need a signing client. Using the offline signer and rpcUrl from the useWallet hook you can easily get a signing client for your connected wallet.

### Token Transfer
```tsx
import { useWallet, useSigningClient } from '@sei-js/react';
import { calculateFee, GasPrice } from '@cosmjs/stargate';

const { accounts } = useWallet();
const { signingClient } = useSigningClient();

const fee = calculateFee(150000, GasPrice.fromString('3750usei'));
const transferAmount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const sendResponse = await signingClient.sendTokens(accounts[0], DESTINATION_ADDRESSS, [transferAmount], fee);
```

### IBC Transfer
IBC transfers require relayers to be set up and require you to have the target channel id before transfer.
```tsx
import { useWallet, useSigningClient } from '@sei-js/react';
import { calculateFee, GasPrice } from '@cosmjs/stargate';

const { accounts } = useWallet();
const { signingClient } = useSigningClient();

const fee = calculateFee(150000, GasPrice.fromString('3750usei'));
const transferAmount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const ibcResponse = await signingClient.sendIbcTokens(accounts[0].address, DESTINATION_ADDRESSS, transferAmount, 'transfer', CHANNEL_ID, undefined, undefined, fee)
```

## useSigningCosmWasmClient
Execute a contract (mint)
```tsx
import { useWallet, useSigningCosmWasmClient } from '@sei-js/react';

const { accounts } = useWallet();
const { signingCosmWasmClient } = useSigningCosmWasmClient();

const account = accounts[0];

const fee = calculateFee(150000, "0.1usei");
const msg = { mint: {} };

const result = await signingCosmWasmClient.execute(account.address, CONTRACT_ADDRESS, msg, fee);
```
## useCosmWasmClient
Query a smart contract

```tsx
import { useWallet, useCosmWasmClient } from '@sei-js/react';

const { cosmWasmClient } = useCosmWasmClient();

const query = { tokens: { owner: OWNER_ADDRESS } };

const { tokens } = await client.queryContractSmart(CONTRACT_ADDRESS, query);
```


### Other helpful packages

[@sei-js/core](https://www.npmjs.com/package/@sei-js/core) - TypeScript library containing helper functions for wallet connection, transaction signing, and RPC querying.

[@sei-js/proto](https://www.npmjs.com/package/@sei-js/proto) - TypeScript library for Sei protobufs generated using Telescope

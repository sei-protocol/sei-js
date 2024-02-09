# Sei-JS Javascript Reference
This document shows examples of common javascript interactions for Sei using libraries in the @sei-js repo.

## Getting Started 
Please review our [Getting Started](https://docs.sei.io/develop/get-started) page to set up your environment. 
We have created a sample project that has many of the most common functions needed while interacting with Sei. Cloning and running our [js-examples](https://github.com/sei-protocol/js-examples) repo is a great place to start for anyone new to Sei.
For additional helpful functions and components or to learn more about the functions used in this reference please see the [@sei-js/core](https://www.npmjs.com/package/@sei-js/core) and [@sei-js/react](https://www.npmjs.com/package/@sei-js/react) packages themselves.
​
## Connecting to a Wallet
In order to interact with Sei you must have a `DirectSecp256k1HdWallet` which can be accessed through a clients installed wallet extension, generated, or restored by using a mnemonic seed phrase.

### Extension (React)
To use this extension, You must wrap your entire app in the `<SeiWalletProvider>` component and pass the proper configuration into it.

```tsx
import { SeiWalletProvider } from '@sei-js/react';

// App.tsx
const App = () => {
    const rpcUrl = 'YOUR_RPC_URL';
    const restUrl = 'YOUR_REST_URL';
    const chainId = 'atlantic-2';
    
    return (
        //Alternatively you can define your own custom wallet (see Keplr tab)
        <SeiWalletProvider chainConfiguration={{ chainId, restUrl, rpcUrl }} wallets={['compass', 'fin']}>
            <Home/>
        </SeiWalletProvider>
    );
};
```

Option 1: Use the pre-built wallet connection button and modal to easily connect to the one of the official Sei wallet providers.
```tsx
import { useWallet, WalletConnectButton } from '@sei-js/react';

// Home.tsx
const Home = () => {
    // Within any component that is a child of <SeiWalletProvider>
    const { offlineSigner, connectedWallet, accounts } = useWallet();
    return (
        <div>
            {!connectedWallet ? <WalletConnectButton /> : <p>connected to: {connectedWallet}</p>}
        </div>
    )
};
```

Option 2: Create your own wallet connection UI and pass the correct wallet key into the autoconnect prop in the `<SeiWalletProvider/>` component.
```tsx
// App.tsx
<SeiWalletProvider autoconnect='compass' >
    <Home/>
</SeiWalletProvider>
```

### Extension (Javascript/Typescript)
```tsx
import { COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET } from "@sei-js/core";

//Alternatively you can define your own custom wallet (see Keplr tab)

await COMPASS_WALLET.connect(chainId);
const offlineSigner = await COMPASS_WALLET.getOfflineSigner(chainId);
const accounts = await COMPASS_WALLET.getAccounts(chainId);
await COMPASS_WALLET.disconnect(chainId);
```

### Generating or Restoring a Wallet
In some circumstances it is necessary to generate a  new wallet or to restore a wallet from a given seed phrase.
```tsx
import { generateWallet, restoreWallet } from "@sei-js/core";

// 12 word mnemonic by default
const generatedWallet = await generateWallet();
console.log('generated mnemonic', generatedWallet.mnemonic);

// or restore a wallet given a seed phrase
const restoredWallet = await restoreWallet(SEED_PHRASE);
console.log('restored mnemonic', restoredWallet.mnemonic);

//Both the above functions have optional parameters for selecting a certain account index in a given wallet

...
```

### Custom Wallet (Keplr example)
If you would like to connect to an unofficial wallet extension such as Keplr you can define an object of type SeiWallet and use it throughout the @sei-js/react library the same as an official wallet.

```tsx

const CUSTOM_WALLET: SeiWallet = {
  getAccounts: async (chainId) => {
    const offlineSigner = await window?.['keplr']?.getOfflineSignerAuto(chainId);
    return offlineSigner?.getAccounts() || [];
  },
  connect: async (chainId) => await window?.['keplr']?.enable(chainId),
  disconnect: async (chainId) => await window?.['keplr']?.disable(chainId),
  getOfflineSigner: async (chainId) => window?.['keplr']?.getOfflineSignerAuto(chainId),
  signArbitrary: async (chainId, signer, message) => window?.['keplr']?.signArbitrary(chainId, signer, message),
  verifyArbitrary: async (chainId, signingAddress, data, signature) => window?.['keplr']?.verifyArbitrary(chainId, signingAddress, data, signature),
  walletInfo: {
    windowKey: 'keplr',
    name: 'Keplr',
    website: 'https://www.keplr.app/download',
    icon: 'https://assets.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63edd5d1a40b9a48841ac1d2_Keplr%20Logo.svg'
  },
  isMobileSupported: false
};

// Then pass this into <SeiWalletProvider /> if using React, or use it's functions if using node or another js library
<SeiWalletProvider wallets={['fin', 'compass', CUSTOM_WALLET]} autoconnect={CUSTOM_WALLET} />
```

## Querying a Module
When querying a Sei chain it is helpful to use a query client from @sei-js in order to have the correct registry and amino types. It is recommended that you do not use common web2 request libraries (fetch, axios, request) as they will not have typed query and response types.

### Getting a Client

Using React:
```tsx
import { useQueryClient } from "@sei-js/react";
 
...

// Within any component that is a child of <SeiWalletProvider>
const { queryClient, isLoading } = useQueryClient();
 
...
```

Using Javascript/Typescript:
```tsx
import { getQueryClient } from '@sei-js/core';

...

const queryClient = await getQueryClient(REST_URL);

...
```

### Common Queries:
```tsx
...

// Getting the market summary from the Sei dex module
const dexMarketSummary = await queryClient.seiprotocol.seichain.dex.getMarketSummary(params);

// Query the bank balance of a given address
const balances = await queryClient.cosmos.bank.v1beta1.allBalances({ address });

// Query a specific transaction hash
const txInfo = await queryClient.cosmos.tx.v1beta1.getTx({ hash });

...
```

## Signing Transactions
@sei-js contains helper functions to get a SigningStargateClient with default Sei protocol registry and amino types.

### Getting a Signing Client
Using React:
```tsx
import { useSigningClient } from '@sei-js/react';

...

// Within any component that is a child of <SeiWalletProvider>
const { signingClient, isLoading } = useSigningClient();

...
```

Using Javascript/Typescript:
```tsx
import { getSigningClient, COMPASS_WALLET } from '@sei-js/core';

// Don't forget to connect if using a wallet extension
// or create a wallet from a mnemonic (See above)
await COMPASS_WALLET.connect(chainId);
const offlineSigner = await COMPASS_WALLET.getOfflineSigner(chainId);

const signingClient = await getSigningClient(RPC_URL, offlineSigner);

...
```

Using Custom Registry or Amino Types:
```tsx
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";
import { getSigningClient } from '@sei-js/core';
import { seiprotocol, seiprotocolProtoRegistry } from "@sei-js/proto";

...

// Set up Sei proto registry
const registry = new Registry([
  ...defaultRegistryTypes,
  ...seiprotocolProtoRegistry,
]);

// Create a client with registry
const signingClient = await getSigningClient(RPC_URL, offlineSigner, { registry });

...
```

### Common Transactions

Transfer tokens (Bank send):
```tsx
import { calculateFee } from '@cosmjs/stargate';

...

const fee = calculateFee(100000, "0.1usei");
const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const sendResponse = await signingClient.sendTokens(SENDER_ADDRESS, DESTINATION_ADDRESS, [amount], fee);
```

IBC Transfer:
```tsx
import { calculateFee } from '@cosmjs/stargate';

...

const fee = calculateFee(150000, "0.1usei");
const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const ibcResponse = await signingClient.sendIbcTokens(SENDER_ADDRESS, DESTINATION_ADDRESSS, amount, 'transfer', CHANNEL_ID, undefined, undefined, fee)
```

Using types from @sei-js/proto

```tsx
import { seiprotocol } from "@sei-js/proto";

...

// Create message to place an order
const { placeOrders } = seiprotocol.seichain.dex.MessageComposer.withTypeUrl;
const msg = placeOrders({ contractAddr, creator, funds, orders });
const fee = calculateFee(150000, "0.1usei");

// Sign and broadcast the message
const response = signingClient.signAndBroadcast(firstAccount.address, [msg], fee);
```
Please take a look at the @sei-js/proto library for more examples of Typescript generated proto

## Querying Smart Contracts
@sei-js contains helper functions to get a `CosmWasmClient`. Thi should be used for querying smart contracts only. If you need to call a contracts execute msg, see the `SigningCosmWasmClient` below.

### Getting a Client
Using React:
```tsx
import { useCosmWasmClient } from "@sei-js/react";
 
...

// Within any component that is a child of <SeiWalletProvider>
const { cosmWasmClient } = useSeiCosmWasmClient();

...
```

Using Javascript/Typescript:
```tsx
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getCosmWasmClient } from "@sei-js/core";

// Create a CosmWasmClient
const cosmWasmClient = await getCosmWasmClient(RPC_URL);

...
```

### Querying a Contract
Build the `queryMsg` according to the contracts specific query specifications.
```tsx
...

// Create the query msg json based on contract specific query specifications
const queryMsg = {
    tokens: {
        owner: address,
    },
};

// Query a smart contract state
const queryResponse = cosmWasmClient.queryContractSmart(CONTRACT_ADDR, queryMsg);
```

## Executing Smart Contracts
This package contains helper functions to get a `SigningCosmWasmClient` with Sei registry and amino types from @sei-js/proto used for smart contract execute messages.

### Getting a client
Using React:
```tsx
import { useSigningCosmWasmClient } from '@sei-js/react';

...

// Within any component that is a child of <SeiWalletProvider>
const { signingCosmWasmClient, isLoading } = useSigningCosmWasmClient();

...
```

Using Javascript/Typescript:
```tsx
import { getSigningCosmWasmClient } from "@sei-js/core";

...

// Create a CosmWasmClient
const signingCosmWasmClient = await getSigningCosmWasmClient(RPC_URL, offlineSigner);

...
```

### Execute Example: Mint an NFT
```tsx
...

// Execute a message on a smart contract
const fee = calculateFee(150000, "0.1usei");
const msg = { mint: {} };

const result = await signingCosmWasmClient.execute(SENDER_ADDRESS, CONTRACT_ADDRESS, msg, fee);
```

## Address Validation
You can validate that a given string is a valid Sei address:
```tsx
import { isValidSeiAddress } from '@sei-js/core';

const isValidSeiAddress = isValidSeiAddress(ADDRESS_TO_TEST);
```

## Arbitrary String Signing and Verification
Sometimes it it necessary to prove account ownership without executing anything on chain. To achieve this verification you can use the signArbitrary function in all official Sei wallets to create a StdSignature which can be verified using the `verifyArbitrary` function from @sei-js/core

```tsx
import { COMPASS_WALLET, verifyArbitrary } from "@sei-js/core";

// If using @sei-js/core
const stdSignature = await COMPASS_WALLET.signArbitrary('atlantic-2', SEI_ADDRESS, "Message to sign"); // or FIN_WALLET, KEPLR_WALLET, LEAP_WALLET

// If using @sei-js/react
const { connectedWallet } = useWallet(); // Requires wrapping app in <SeiWalletProvider/>
const stdSignature = connectedWallet.signArbitrary('atlantic-2', SEI_ADDRESS, "Message to sign");

const isVerified = await verifyArbitrary(SEI_ADDRESS, "My signed message", stdSignature); // true
```

## Multi-Sig Signing and Broadcasting

### Step 1: Query the multi-sig account on chain
In order to sign a transaction for a multi-sig transaction you must know the sequence and account number of the multi-sig account on chain. Start by querying that on chain.
```tsx
const broadcaster = await StargateClient.connect(rpcUrl);
const multiSigAccount = await broadcaster.getAccount(multiSigAccountAddress);
const multiSigPubkey = account.pubkey as unknown as MultisigThresholdPubkey;

// If the account has not broadcasted any transactions, the pubkey will not be available.
if (!isMultisigThresholdPubkey(multiSigPubkey)) {
     console.log('The account address you entered is not a multi-sig account that exists on chain.');
}
```
Note that if the multi sig account has neither broadcasted a transaction nor received funds, the call to `broadcaster.getAccount(multiSigAccountAddress) will fail since the account information will not exist on chain.

### Step 2: Sign a transaction with custom sign options
Repeat this step by signing the exact same msg, with the same fee across all the required accounts in the multi-sig.
```tsx
import { COMPASS_WALLET } from '@sei-js/core';

const offlineAminoSigner = await COMPASS_WALLET.getOfflineSignerAmino(chainId); // Or use another way to get the offline amino signer

const signingClient = await getSigningClient(rpcUrl, offlineAminoSigner); // Or use another way to get a StargateSigningClient

const accounts = await offlineAminoSigner.getAccounts();

const response = await signingClient.sign(accounts[0].address, [YOUR_TX_MSG], YOUR_TX_FEE, '', {
			accountNumber: multiSigAccount.accountNumber, // from step 1
			sequence: multiSigAccount.sequence, // from step 1
			chainId
});
```

### Step 3: Aggregate signatures and broadcast transaction
Once all the signatures have been collected, we can broadcast the transaction from the multi-sig account.
```tsx
const broadcaster = await StargateClient.connect(rpcUrl);
const multiSigAccount = await broadcaster.getAccount(multiSigAccountAddress);
const multiSigPubkey = multiSigAccount.pubkey as unknown as MultisigThresholdPubkey;

const signatures = new Map<string, Uint8Array>([
	[firstAddress, firstSignResponse.signatures[0]],
	[secondAddress, secondSignResponse.signatures[0]],
	// Repeat for however many signatures are required
]);

const multiSignedTxBytes = makeMultisignedTxBytes(
	multiSigPubkey,
	multiSigAccount.sequence,
	TX_FEE,
	firstSignResponse.bodyBytes, // or any signature since all signatures sign the same body
	signatures
);

const result = await broadcaster.broadcastTx(multiSignedTxBytes);
```
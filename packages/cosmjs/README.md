# @sei-js/cosmjs

The `@sei-js/cosmjs` package contains helper functions for wallet connection, transaction signing, and RPC querying using cosmjs.

## Introduction to development on Sei
When first developing an application on Sei, you must first choose which RPC interface you want to use. This package is designed to work with cosmjs and the Cosmos ecosystem. If you would like to use EVM RPC, you should use the [`@sei-js/evm`](/sei-js/docs/modules/evm.html) package.

### Cosmos SDK
When building a dApp on Sei, it is important to understand the Cosmos SDK. Specifically, it is important to know how transactions are structured with different messages, gas fees, and signers. For an in-depth overview of the Cosmos SDK, see the [Cosmos SDK documentation](https://docs.cosmos.network/main/learn/intro/overview).

### CosmJS
CosmJS is a JavaScript/TypeScript library for building applications on the Cosmos network. It provides a set of tools for interacting with the Cosmos network, including wallet management, transaction signing, and RPC querying. For more information, see the [CosmJS documentation](https://cosmos.github.io/cosmjs/).


## Installation

```bash
yarn add @sei-js/cosmjs
```

## Wallet Connection
In order to sign and broadcast transactions, you must first connect to a wallet. This package contains helper functions to connect to the Sei wallet extension, or to create a wallet from a seed phrase.

### Cosmos Kit
Cosmos Kit is a helpful library for connecting to various Sei wallet extensions. It is recommended to use this library and to take advantage of all the useful hooks, utilities, and UI components it provides. For more information, see the [Cosmos Kit documentation](https://docs.cosmoskit.com/)


### Connecting directly to a wallet extension
If you prefer to manage wallet connections manually, you can use the native interface of the wallet extension to connect to a wallet. [See the Compass documentation](https://docs.leapwallet.io/cosmos/sei-dapps/connect-to-compass) for more information on how to connect to a wallet extension.

### Generating or Restoring a Wallet
In some circumstances it is necessary to generate a new wallet or to restore a wallet from a given seed phrase.
```tsx
import { generateWallet, restoreWallet } from "@sei-js/cosmjs";

// 12 word mnemonic by default
const generatedWallet = await generateWallet();
console.log('generated mnemonic', generatedWallet.mnemonic);

// or restore a wallet given a seed phrase
const restoredWallet = await restoreWallet(SEED_PHRASE);
console.log('restored mnemonic', restoredWallet.mnemonic);

//Both the above functions have optional parameters for selecting a certain account index in a given wallet
```

## Common Use Cases

### Querying a Module
When querying a Sei chain it is helpful to use a query client from @sei-js in order to have the correct registry and amino types. It is recommended that you do not use common web2 request libraries (fetch, axios, request) as they will not have typed query and response types.

#### Usage
```tsx
import { getQueryClient } from '@sei-js/cosmjs';

const queryClient = await getQueryClient(REST_URL);

// Getting the market summary from the Sei dex module
const dexMarketSummary = await queryClient.seiprotocol.seichain.dex.getMarketSummary(params);

// Query the bank balance of a given address
const balances = await queryClient.cosmos.bank.v1beta1.allBalances({ address });

// Query a specific transaction hash
const txInfo = await queryClient.cosmos.tx.v1beta1.getTx({ hash });
```


### Signing Transactions
@sei-js contains helper functions to get a SigningStargateClient with default Sei protocol registry and amino types.

#### Getting a Signing Client
```tsx
import { getSigningStargateClient } from '@sei-js/cosmjs';

// Don't forget to connect if using a wallet extension
// or create a wallet from a mnemonic (See above)
await window.compass.connect(chainId);

const offlineSigner = await window.compass.getOfflineSigner(chainId);

const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner);
```

Using Custom Registry or Amino Types:
```tsx
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";
import { getSigningStargateClient } from '@sei-js/cosmjs';
import { seiprotocol, seiprotocolProtoRegistry } from "@sei-js/proto";

// Set up Sei proto registry
const registry = new Registry([
  ...defaultRegistryTypes,
  ...seiprotocolProtoRegistry,
]);

// Create a client with registry
const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner, { registry });
```

### Common Transactions

#### Transfer tokens (Bank send):
```tsx
import { calculateFee } from '@cosmjs/stargate';

const fee = calculateFee(100000, "0.1usei");
const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const sendResponse = await signingClient.sendTokens(SENDER_ADDRESS, DESTINATION_ADDRESS, [amount], fee);
```

#### IBC Transfer:
```tsx
import { calculateFee } from '@cosmjs/stargate';

const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const ibcResponse = await signingClient.sendIbcTokens(SENDER_ADDRESS, DESTINATION_ADDRESSS, amount, 'transfer', CHANNEL_ID, undefined, undefined, fee)

// Create message to place an order
const { placeOrders } = seiprotocol.seichain.dex.MessageComposer.withTypeUrl;
const msg = placeOrders({ contractAddr, creator, funds, orders });
const fee = calculateFee(150000, "0.1usei");

// Sign and broadcast the message
const response = signingClient.signAndBroadcast(firstAccount.address, [msg], fee);
```


### Querying Smart Contracts
@sei-js contains helper functions to get a `CosmWasmClient`. Thi should be used for querying smart contracts only. If you need to call a contracts execute msg, see the `SigningCosmWasmClient` below.

#### Getting a Client
```tsx
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getCosmWasmClient } from "@sei-js/cosmjs";

// Create a CosmWasmClient
const cosmWasmClient = await getCosmWasmClient(RPC_URL);
```

#### Querying a Contract
Build the `queryMsg` according to the contracts specific query specifications. Each contract will define its own queryable state, so check the contract documentation for the correct query message format by examining the contract source code or documentation.
```tsx
// Create the query msg json based on contract specific query specifications
const queryMsg = {
    tokens: {
        owner: address,
    },
};

// Query a smart contract state
const queryResponse = cosmWasmClient.queryContractSmart(CONTRACT_ADDR, queryMsg);
```

### Executing Smart Contracts
This package contains helper functions to get a `SigningCosmWasmClient` with Sei registry and amino types from @sei-js/proto used for smart contract execute messages.

#### Getting a client
```tsx
import { getSigningCosmWasmClient } from "@sei-js/cosmjs";


// Create a CosmWasmClient
const signingCosmWasmClient = await getSigningCosmWasmClient(RPC_URL, offlineSigner);
```

#### Execute Example: Mint an NFT
Build the `executeMsg` according to the contracts specific specifications. Each contract will define its own execute functions, so check the contract documentation for the correct execute message format by examining the contract source code or documentation.

```tsx
import { getSigningCosmWasmClient } from "@sei-js/cosmjs";

// Create a CosmWasmClient
const signingCosmWasmClient = await getSigningCosmWasmClient(RPC_URL, offlineSigner);

// Execute a message on a smart contract
const fee = calculateFee(150000, "0.1usei");
const msg = { mint: {} };

const result = await signingCosmWasmClient.execute(SENDER_ADDRESS, CONTRACT_ADDRESS, msg, fee);
```

### Address Validation
You can validate that a given string is a valid Sei address:
```tsx
import { isValidSeiAddress } from '@sei-js/cosmjs';

const isValidSeiAddress = isValidSeiAddress(ADDRESS_TO_TEST);
```

### Arbitrary String Signing and Verification
Sometimes it is necessary to prove account ownership without executing anything on chain. To achieve this verification you can use the signArbitrary function in all official Sei wallets to create a StdSignature which can be verified using the `verifyArbitrary` function from @sei-js/cosmjs

```tsx
import { verifyArbitrary } from "@sei-js/cosmjs";

const stdSignature = await window.compass.signArbitrary('atlantic-2', SEI_ADDRESS, "Message to sign"); // or FIN_WALLET, KEPLR_WALLET, LEAP_WALLET
```

### Multi-Sig Signing and Broadcasting

#### Step 1: Query the multi-sig account on chain
In order to sign a transaction for a multi-sig transaction you must know the sequence and account number of the multi-sig account on chain. Start by querying that on chain.

```tsx
import { getStargateClient } from '@sei-js/cosmjs';

const broadcaster = await getStargateClient(rpcUrl);
const multiSigAccount = await broadcaster.getAccount(multiSigAccountAddress);
const multiSigPubkey = account.pubkey as unknown as MultisigThresholdPubkey;

// If the account has not broadcasted any transactions, the pubkey will not be available.
if (!isMultisigThresholdPubkey(multiSigPubkey)) {
  console.log('The account address you entered is not a multi-sig account that exists on chain.');
}
```
Note that if the multi sig account has neither broadcasted a transaction nor received funds, the call to `broadcaster.getAccount(multiSigAccountAddress) will fail since the account information will not exist on chain.

#### Step 2: Sign a transaction with custom sign options
Repeat this step by signing the exact same msg, with the same fee across all the required accounts in the multi-sig.
```tsx
import { getSigningStargateClient } from '@sei-js/cosmjs';

const offlineAminoSigner = await window.compass.getOfflineSignerAmino(chainId); // Or use another way to get the offline amino signer

const signingClient = await getSigningStargateClient(rpcUrl, offlineAminoSigner); // Or use another way to get a StargateSigningClient

const accounts = await offlineAminoSigner.getAccounts();

const response = await signingClient.sign(accounts[0].address, [YOUR_TX_MSG], YOUR_TX_FEE, '', {
			accountNumber: multiSigAccount.accountNumber, // from step 1
			sequence: multiSigAccount.sequence, // from step 1
			chainId
});
```

#### Step 3: Aggregate signatures and broadcast transaction
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

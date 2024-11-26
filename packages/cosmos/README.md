# @sei-js/cosmos

`@sei-js/cosmos` is a set of TypeScript libraries for interaction with Sei, using Cosmos standards and interfaces. It provides:

> **For EVM Developers**: @sei-js/cosmos/types provides TypeScript types for all custom Sei modules, simplifying integration between Cosmos and EVM ecosystems.

### Installation
Install the package using Yarn: `yarn add @sei-js/cosmos`

### Exported Packages
- [@sei-js/cosmos/types](#sei-jscosmostypes): TypeScript types for all modules and types.
- [@sei-js/cosmos/encoding](#sei-jscosmosencoding): Protobuf encoding/decoding utilities.
- [@sei-js/cosmos/rest](#sei-jscosmosrest): REST client for querying Sei chain state through the Cosmos REST interface.

## `@sei-js/cosmos/types`
Provides TypeScript types, enums, and interfaces for all Sei modules, including transaction messages, queries, coins, and REST and gRPC request/response types.

## Features
- Msg, Query, and enum types for all Sei modules and transactions

> **Usage with other packages**: Works with `@sei-js/cosmos/rest`, `@sei-js/cosmos/encoding`, `@sei-js/cosmjs` and `@cosmjs/stargate`.

### Example Usage

#### Ex.) Bank Send Tx Msg
```typescript
// Import the MsgSend type from the bank module
import { MsgSend } from '@sei-js/cosmos/types/cosmos/bank/v1beta1';

// Create an object that conforms to the MsgSend type
const msgSend: MsgSend = {
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9',
  amount: [{ denom: 'usei', amount: '100' }]
};
```

#### Ex.) TokenFactory Tx Msg's
```typescript
// Import the MsgCreateDenom and MsgMint types from tokenfactory module
import type { MsgCreateDenom, MsgMint } from "@sei-js/cosmos/types/tokenfactory";

// Create an object that conforms to the MsgCreateDenom type
const msgCreateDenom: MsgCreateDenom = {
  sender: accounts[0].address,
  subdenom: "mytoken",
  allow_list: {
    addresses: ["sei123..."],
  }
}

// Create an object that conforms to the MsgMint type
const msgMint: MsgMint = {
  sender: accounts[0].address,
  amount: { denom: "usei", amount: "100000" },
}

// Do what you want with the messages
```

## `@sei-js/cosmos/encoding`

The @sei-js/cosmos/encoding package provides utilities for encoding/decoding Sei transactions using Protobuf. It also includes amino converters and a type URL registry for gRPC and legacy Cosmos SDK interactions.

> **gRPC interface only**: This package is meant for usage with gRPC interfaces. For REST interfaces, use `@sei-js/cosmos/rest`.

### Features

- Protobuf encoding/decoding for all Sei native transactions and queries
- Aggregated message typeUrl registry for usage `@cosmjs/stargate` clients
- Amino message converters for use with Ledger or legacy Cosmos signing
- Uses official types from `@sei-js/cosmos/types`


### Importing
```typescript
// Import Encoder, then follow the path to the desired module
import { Encoder } from '@sei-js/cosmos/encoding';

// Import Amino converters for legacy Cosmos SDK support
import { aminoConverters } from "@sei-js/cosmos/encoding/stargate";

// Import typeUrl registry for Stargate clients
import { seiProtoRegistry } from "@sei-js/cosmos/encoding/stargate";
```

### Encoding/Decoding and getting type URLs.
Cosmos gRPC transactions are encoded using protobuf. This library exports encoding and decoding classes for all valid Sei Msg types.

```typescript
import { Encoder } from '@sei-js/cosmos/encoding';

// Follow the path to the desired module and message type
const msgSend = Encoder.cosmos.bank.v1beta1.MsgSend.fromPartial({
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9',
  amount: [{ denom: 'usei', amount: '100' }]
});


// Or use @sei-js/cosmos/types to create the message, see below.

// Encode the message
const encoded = Encoder.cosmos.bank.v1beta1.MsgSend.encode(msgSend).finish();

// Or if you have an encoded message, you can decode it
const decoded = Encoder.cosmos.bank.v1beta1.MsgSend.decode(encoded);

// Create the proto message using the typeUrl and encoded message
const protoMsgSend = { typeUrl: `/${MsgSend.$type}`, value: encoded };
```

### Usage with @cosmjs/stargate

The package provides pre-built registries and amino converters for usage with `@cosmjs/stargate`. These can be used to set up Stargate clients to sign and broadcast Sei transactions.

```typescript
import { Encoder } from '@sei-js/cosmos/encoding';
import { seiProtoRegistry } from "@sei-js/cosmos/encoding/stargate";

import {SigningStargateClient} from "@cosmjs/stargate";
import {Registry} from "@cosmjs/proto-signing";

// or any other way to get an offline signer
const offlineSigner = await window.compass.getOfflineSigner("arctic-1");
const accounts = await offlineSigner.getAccounts();

// Create a @cosmjs/stargate registry with the Sei proto registry
const registry = new Registry(seiProtoRegistry);

// Create a Stargate client with the registry and amino types
const stargateClient = await SigningStargateClient.connectWithSigner(
  "https://rpc-arctic-1.sei-apis.com",
  offlineSigner,
  { registry },
);

// Create a MsgSend object
const msgSend = Encoder.cosmos.bank.v1beta1.MsgSend.fromPartial({
  from_address: accounts[0].address,
  to_address: "sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9",
  amount: [{ denom: "usei", amount: "10" }]
});

// Create a message object with the typeUrl and value. (For Stargate clients the value isn't encoded, but gRPC clients typically require it to be encoded)
const message = { typeUrl: `/${Encoder.cosmos.bank.v1beta1.MsgSend.$type}`, value: msgSend };

  
const txResponse = await stargateClient.signAndBroadcast(accounts[0].address, [message], {
  amount: [{ denom: "usei", amount: "100000" }],
  gas: "200000",
});

console.log(txResponse.transactionHash);
```

### Interoperability with @sei-js/cosmos/types

The `@sei-js/cosmos/encoding` package is built to work seamlessly with the `@sei-js/cosmos/types` package. You can use the types from `@sei-js/cosmos/types` directly if needed. However, in most cases, you don't need to import `@sei-js/cosmos/types` separately when using `@sei-js/cosmos/encoding`, as the values returned from the encoding functions are already typed correctly.

#### Recommended: Using @sei-js/cosmos/encoding
```typescript
import { Encoder } from '@sei-js/cosmos/encoding';

// Encoder.cosmos.bank.v1beta1.MsgSend is already typed using the `MsgSend` type from the @sei-js/cosmos/types package
const msgSend = Encoder.cosmos.bank.v1beta1.MsgSend.fromPartial({
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9'
});

// Encode the message
const encoded = Encoder.cosmos.bank.v1beta1.MsgSend.encode(msgSend).finish();

// Or if you have an encoded message, you can decode it
const decoded = Encoder.cosmos.bank.v1beta1.MsgSend.decode(encoded);

// Create the proto message using the typeUrl and encoded message
const protoMsgSend = { typeUrl: `/${MsgSend.$type}`, value: encoded };
```

#### Optional: Using @sei-js/cosmos/types directly
```typescript
import { MsgSend } from '@sei-js/cosmos/types/cosmos/bank/v1beta1';

// This type can be used to create the proto message directly
const msgSend: MsgSend = {
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9',
  amount: [{ denom: 'usei', amount: '100' }]
};

// Encode the message
const encoded = Encoder.cosmos.bank.v1beta1.MsgSend.encode(msgSend).finish();

// Or if you have an encoded message, you can decode it
const decoded = Encoder.cosmos.bank.v1beta1.MsgSend.decode(encoded);

// Create the proto message using the typeUrl and encoded message
const protoMsgSend = { typeUrl: `/${MsgSend.$type}`, value: encoded };
```

### Usage with Ledger
```typescript
import {createTransportAndApp, SeiLedgerOfflineAminoSigner} from "@sei-js/ledger";

import { Encoder } from '@sei-js/cosmos/encoding';

import { aminoConverters } from "@sei-js/cosmos/encoding/stargate";

import { AminoTypes, SigningStargateClient, coin } from "@cosmjs/stargate";

const hdPath = "m/44'/60'/0'/0/0"
const validatorAddress = "seivaloper1r0tmhjhxmvwlzq5sy3z83qnyvc74uvs9ykek9l";

const { app } = await createTransportAndApp();

const cosmosAddressData = await app.getCosmosAddress(hdPath, false);

const ledgerOfflineAminoSigner = new SeiLedgerOfflineAminoSigner(app, hdPath);
const aminoTypes = new AminoTypes(aminoConverters);
const signingStargateClient = await SigningStargateClient.connectWithSigner(
  rpcUrl,
  ledgerOfflineAminoSigner,
  { aminoTypes },
);

const fee = {
  amount: [{denom: "usei", amount: "20000"}],
  gas: "200000",
};

const msgDelegate = Encoder.cosmos.staking.v1beta1.MsgDelegate.fromPartial({
  delegator_address: cosmosAddressData.address,
  validator_address: validatorAddress,
  amount: coin(2000, "usei"),
});

const protoMessage = { typeUrl: `/${Encoder.cosmos.staking.v1beta1.MsgDelegate.$type}`, value: msgDelegate };

// This will automatically get converted to the correct amino type due to the aminoTypes registry passed to the SigningStargateClient
const result = await signingStargateClient.signAndBroadcast(cosmosAddressData.address, [protoMessage], fee, memo)

if (result.code === 0) {
  console.log("Transaction broadcast successfully:", result);
} else {
  console.error("Error broadcasting transaction:", result.rawLog);
}
```

## `@sei-js/cosmos/rest`

Provides a REST client for all Sei REST endpoints. It uses types from `@sei-js/cosmos/types` for easy use across your stack.

> **Looking for REST endpoints?**: You can view the full list of available REST endpoints in the [Sei Cosmos REST docs](https://www.docs.sei.io/endpoints/cosmos) if you prefer to manually make a call using fetch or another request library.


### Example Usage
Import the Querier and follow the path to the desired module and message type. Request and response types are automatically typed using `@sei-js/cosmos/types`.

#### Ex.) Querying user balances
```typescript
import { Querier } from '@sei-js/cosmos/rest';

// Follow the path to the desired module and message type
const { balances } = await Querier.cosmos.bank.v1beta1.AllBalances({ address: seiAddress }, { pathPrefix: chainConfig.restUrl });
```

## Local Package Development

### Pre-requisites
- Buf installed on your machine. https://buf.build/docs/installation

This package is generated using buf.build. To regenerate the types, run `yarn generate` which builds the types from proto files with the buf build `ts-proto` and `protoc-gen-grpc-gateway-ts` plugins. From there, typescript is used in a postprocessing script to extract the necessary types and perform any formatting required.

### Regenerating Packages
To regenerate the packages, run `yarn generate`. This will rebuild the libraries using the scripts in this repo.

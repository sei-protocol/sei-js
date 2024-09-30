# @sei-js/cosmos/types

**@sei-js/types** contains the official Sei TypeScript types, interfaces, and enums used throughout the Sei chain. It includes request and response types for queries REST, RPC, and gRPC queries, as well as types for all transaction messages.

## Installation

`yarn add @sei-js/types`

## Features
- Msg, Query, and enum types for all Sei modules
- Works with `@sei-js/rest` and `@sei-js/encoding` and `@cosmjs/stargate`

## Example Usage

### Ex.) Bank Send Tx Msg
```typescript
import { MsgSend } from '@sei-js/types/cw/cosmos/bank/v1beta1';

const msgSend: MsgSend = {
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9',
  amount: [{ denom: 'usei', amount: '100' }]
};
```

### Ex.) TokenFactory Tx Msgs
```typescript
import type { MsgCreateDenom, MsgMint } from "@sei-js/types/cw/tokenfactory";

const msgCreateDenom: MsgCreateDenom = {
  sender: accounts[0].address,
  subdenom: "mytoken",
  allow_list: {
    addresses: ["sei123..."],
  }
}

const msgMint: MsgMint = {
  sender: accounts[0].address,
  amount: { denom: "usei", amount: "100000" },
}
```

## Development
This package is generated using buf.build. To regenerate the types, run `yarn generate` which builds the types from proto files with the buf build `ts-proto` plugin. From there, typescript is used in a postprocessing script to extract the necessary types and perform any formatting required.

# @sei-js/cosmos/encoding

The `@sei-js/encoding` package provides protobuf encoding/decoding, proto encoding type urls. It also contains amino converters and registries for @cosmjs/stargate clients.

## Installation
```bash
yarn add @sei-js/encoding
```

## Features

- Protobuf encoding/decoding for Cosmos transactions
- Aggregated message typeUrl registry for `@cosmjs/stargate` clients
- Amino message converters for use with Ledger or legacy Cosmos signing
- Uses official types from `@sei-js/types`

## Usage

### Importing
```typescript
// Import Msg and Query types
import { MsgSend } from '@sei-js/encoding/cw/cosmos/bank/v1beta1';
import { QueryValidatorsRequest } from '@sei-js/encoding/cw/cosmos/staking/v1beta1';

// Import Amino converters for legacy Cosmos SDK support
import { aminoConverters } from "@sei-js/encoding/cw/stargate";

// Import typeUrl registry for Stargate clients
import { seiProtoRegistry } from "@sei-js/encoding/cw/stargate";
```

### Proto Encoding and Type Urls

Cosmos gRPC transactions are encoded using protobuf. This library exports encoding and decoding classes for all valid Sei Msg types.

```typescript
import { MsgSend } from '@sei-js/encoding/cw/cosmos/bank/v1beta1';

const msgSend = new MsgSend({
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9',
  amount: [{ denom: 'usei', amount: '100' }]
});

const encoded = MsgSend.encode(msgSend).finish();
const decoded = MsgSend.decode(encoded);

const protoMsgSend = { typeUrl: `/${MsgSend.$type}`, value: encoded };
```

### Usage with @cosmjs/stargate

The package provides pre-built registries and amino converters for usage with `@cosmjs/stargate`. These can be used to set up Stargate clients to sign and broadcast Sei transactions.

```typescript
import { MsgSend } from '@sei-js/encoding/cw/cosmos/bank/v1beta1';
import { seiProtoRegistry } from "@sei-js/encoding/cw/stargate";

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
const msgSend = MsgSend.fromPartial({
  from_address: accounts[0].address,
  to_address: "sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9",
  amount: [{ denom: "usei", amount: "10" }]
});

// Create a message object with the typeUrl and value. (For Stargate clients the value isn't encoded, but gRPC clients typically require it to be encoded)
const message = { typeUrl: `/${MsgSend.$type}`, value: msgSend };

  
const txResponse = await stargateClient.signAndBroadcast(accounts[0].address, [message], {
  amount: [{ denom: "usei", amount: "100000" }],
  gas: "200000",
});

console.log(txResponse.transactionHash);
```

### Interoperability with @sei-js/types

The `@sei-js/encoding` package is built to work seamlessly with the `@sei-js/types` package. You can use the types from `@sei-js/types` directly if needed. However, in most cases, you don't need to import `@sei-js/types` separately when using `@sei-js/encoding`, as the values returned from the encoding functions are already typed correctly.
```typescript
import { MsgSend } from '@sei-js/encoding/cw/cosmos/bank/v1beta1';

const msgSend = MsgSend.fromPartial({
  from_address: 'sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2',
  to_address: 'sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9'
});

// msgSend is already typed as @sei-js/type/cosmos/bank/v1beta1/
```

### Usage with Ledger
```typescript
import {createTransportAndApp, SeiLedgerOfflineAminoSigner} from "@sei-js/ledger";

import { MsgDelegate } from "@sei-js/encoding/cw/cosmos/staking/v1beta1";

import { aminoConverters } from "@sei-js/encoding/cw/stargate";

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

const msgDelegate = MsgDelegate.fromPartial({
  delegator_address: cosmosAddressData.address,
  validator_address: validatorAddress,
  amount: coin(2000, "usei"),
});

const protoMessage = { typeUrl: `/${MsgDelegate.$type}`, value: msgDelegate };

// This will automatically get converted to the correct amino type due to the aminoTypes registry passed to the SigningStargateClient
const result = await signingStargateClient.signAndBroadcast(cosmosAddressData.address, [protoMessage], fee, memo)

if (result.code === 0) {
  console.log("Transaction broadcast successfully:", result);
} else {
  console.error("Error broadcasting transaction:", result.rawLog);
}
```

# @sei-js/cosmos/rest

The `@sei-js/rest` package provides a REST client for the Sei chain. It is built on top of `@cosmjs/rest` and provides a more user-friendly interface for interacting with the Sei chain. It supports all Sei cosmos RPC endpoints and provides a more user-friendly interface for querying a Sei chain.

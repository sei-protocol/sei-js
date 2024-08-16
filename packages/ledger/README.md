# @sei-js/ledger

## Installation
```bash
yarn add @sei-js/ledger
```

## Usage
```typescript
import {
  coin,
  StargateClient,
  StdFee
} from "@cosmjs/stargate";
import {
  AminoMsg,
} from "@cosmjs/amino";

import {
  createTransportAndApp,
  getAddresses,
  createSignDoc,
  signAndBroadcast
} from "@sei-js/ledger";

const testApp = async () => {
  const validatorAddress = "seivaloper1sq7x0r2mf3gvwr2l9amtlye0yd3c6dqa4th95v";
  const rpcUrl = "https://rpc-testnet.sei-apis.com/";
  const client = await StargateClient.connect(rpcUrl);
  const chainId = "atlantic-2";
  const memo = "Delegation";
  const path = "m/44'/60'/0'/0/0";

  const {app} = await createTransportAndApp();
  const {nativeAddress} = await getAddresses(app, path);
  const account = await client.getAccount(nativeAddress.address);
  if (!account) {
    throw new Error("Account not found");
  }

  const aminoMsg: AminoMsg = {
    type: "cosmos-sdk/MsgDelegate",
    value: {
      delegator_address: nativeAddress.address,
      validator_address: validatorAddress,
      amount: coin("1000", "usei"),
    },
  };

  const fee: StdFee = {
    amount: [{denom: "usei", amount: "20000"}],
    gas: "200000",
  };

  const signDoc = createSignDoc(aminoMsg, fee, chainId, memo, account);
  const broadcastResponse = await signAndBroadcast(app, path, signDoc, client, nativeAddress);

  console.log("Broadcast result:", broadcastResponse);
};

testApp();

```

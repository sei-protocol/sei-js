# @sei-js/ledger

## Installation
```bash
yarn add @sei-js/ledger
```

## Usage
```typescript
import {
  coins,
  SigningStargateClient,
  StdFee
} from "@cosmjs/stargate";

import {
  createTransportAndApp,
  getAddresses,
  SeiLedgerOfflineAminoSigner
} from "@sei-js/ledger";

const testApp = async () => {
  const validatorAddress = "seivaloper1sq7x0r2mf3gvwr2l9amtlye0yd3c6dqa4th95v";
  const rpcUrl = "https://rpc-testnet.sei-apis.com/";
  const memo = "Delegation";
  const path = "m/44'/60'/0'/0/0";

  const {app} = await createTransportAndApp();
  const {nativeAddress} = await getAddresses(app, path);
  const ledgerSigner = new SeiLedgerOfflineAminoSigner(app, path)
  const signingStargateClient = await SigningStargateClient.connectWithSigner(rpcUrl, ledgerSigner)

  const msgDelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: {
      delegatorAddress: nativeAddress.address,
      validatorAddress: validatorAddress,
      amount: coins(500, "usei"),
    },
  };

  const fee: StdFee = {
    amount: [{denom: "usei", amount: "20000"}],
    gas: "200000",
  };

  const result = await signingStargateClient.signAndBroadcast(nativeAddress.address, [msgDelegate], fee, memo)
  console.log("Broadcast result:", result);
};

testApp();
```

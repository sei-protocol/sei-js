> **⚠️ DEPRECATION NOTICE**: According to [SIP-3](https://github.com/sei-protocol/sips/blob/main/sips/sip-3.md), Cosmos functionality has been deprecated in favor of EVM. This package (`@sei-js/cosmjs`) will be deprecated in future releases.

# @sei-js/cosmjs

The `@sei-js/cosmjs` package contains helper functions for wallet connection, transaction signing, RPC querying, and more for those using cosmjs. 

## Table of Contents
- [Installation](#installation)
- [Wallets](#wallets)
  - [Generating or Restoring a Wallet](#generating-or-restoring-a-wallet)
  - [Cosmos Kit Configs](#cosmos-kit)
  - [Chain Suggestion](#chain-suggestion)
- [Signing Client](#signing-client)
- [Utils](#utils)
  - [Address](#address)
    - [`deriveAddressesFromPrivateKey`](#pubkeytokeypair)
    - [`pubKeyToKeyPair`](#pubkeytokeypair)
    - [`pubKeyToBytes`](#pubkeytobytes)
    - [`compressedPubKeyToAddress`](#compressedpubkeytoaddress)
    - [`getAddressHashFromPubKey`](#getaddresshashfrompubkey)
    - [`verifyDigest32`](#verifydigest32)
    - [`isValidSeiCosmosAddress`](#isvalidseicosmosaddress)
    - [`truncateSeiAddress`](#truncateseiaddress)
  - [Bech32](#bech32)
    - [`toBech32`](#tobech32)
  - [Hash](#hash)
    - [`sha256`](#sha256)
  - [Serialize](#serialize)
    - [`serializeDirectSignDoc`](#serializedirectsigndoc)
    - [`serializeAminoSignDoc`](#serializeaminosigndoc)
  - [Signing](#signing)
    - [`makeADR36AminoSignDoc`](#makeadr36aminosigndoc)
    - [`verifyArbitrary`](#verifyarbitrary)
  - [Common Examples](#common-examples)
    - [Transfer tokens (Bank send)](#transfer-tokens-bank-send)
    - [IBC Transfer](#ibc-transfer)
    - [Querying Smart Contracts](#querying-smart-contracts)
    - [Executing Smart Contracts](#executing-smart-contracts)
    - [Address Validation](#address-validation)
    - [Arbitrary String Signing and Verification](#arbitrary-string-signing-and-verification)
    - [Multi-Sig Signing and Broadcasting](#multi-sig-signing-and-broadcasting)

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

## Wallets
In order to sign and broadcast transactions, you must first connect to a wallet. This package contains helper functions to connect to the Sei wallet extension, or to create a wallet from a seed phrase.

### Connecting directly to a wallet extension
If you prefer to manage wallet connections manually, you can use the native interface of the wallet extension to connect to a wallet. [See the Compass documentation](https://docs.leapwallet.io/cosmos/sei-dapps/connect-to-compass) for more information on how to connect to a wallet extension.

### Generating or Restoring a Wallet
In some circumstances it is necessary to generate a new wallet or to restore a wallet from a given seed phrase.
```tsx
import { getHdPath, generateWallet, restoreWallet } from "@sei-js/cosmjs";

const cosmosHdPath = getHdPath(0, 118); // This is the default path for Sei wallets account index 0
const evmHdPath = getHdPath(0, 60); // This is the default path for EVM wallets account index 0

// 12 word mnemonic by default
const generatedWallet = await generateWallet(24, cosmosHdPath);
console.log('generated mnemonic', generatedWallet.mnemonic);

// or restore a wallet given a seed phrase and coin type 60 HD path
const restoredWallet = await restoreWallet(SEED_PHRASE, evmHdPath);
console.log('restored mnemonic', restoredWallet.mnemonic);
```

### Cosmos Kit
Cosmos Kit is a helpful library for connecting to various Sei wallet extensions. It is recommended to use this library and to take advantage of all the useful hooks, utilities, and UI components it provides. For more information, see the [Cosmos Kit documentation](https://docs.hyperweb.io/cosmos-kit/get-started)

#### Importing CosmosKit Configs
```tsx
import { COSMOS_KIT_ASSET_LIST, PACIFIC_1_SEI_COSMOS_KIT_CHAIN, ATLANTIC_2_SEI_COSMOS_KIT_CHAIN, ARCTIC_1_SEI_COSMOS_KIT_CHAIN } from '@sei-js/cosmjs'
import { wallets } from '@cosmos-kit/keplr';

function CosmosApp() {
  return (
    <ChainProvider
      chains={[PACIFIC_1_SEI_COSMOS_KIT_CHAIN, ATLANTIC_2_SEI_COSMOS_KIT_CHAIN, ARCTIC_1_SEI_COSMOS_KIT_CHAIN]}
      assetLists={[COSMOS_KIT_ASSET_LIST]}
      wallets={wallets} // whatever wallets you prefer
    >
    <YourWalletRelatedComponents />
    </ChainProvider>
  );
}
```

### Chain Suggestion
If you are using a generic wallet like Keplr, you can suggest a chain to the user by using the `suggestChain` function. This will prompt the user to add the chain to their wallet.
```tsx
import { getChainSuggest } from '@sei-js/cosmjs';

const chainSuggest = getChainSuggest();
await window.keplr.suggestChain(chainSuggest); // See the Keplr API docs for more information on chain suggestion.

```

## Signing Client
@sei-js contains helper functions to get a SigningStargateClient with default Sei protocol registry and amino types. In order to interact with this, you need a Sei RPC URL from a provider.

### Getting a Signing Client
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

## Utils

### Address

#### `deriveAddressesFromPrivateKey`
Derives and returns an address for the given private key.

- **Parameters:**
  - `privateKeyHex` (`0x{string}`): A hex-encoded private key string.

- **Returns:** `stringr` - An address from the given private key.

- **Usage:**
```tsx
import { deriveAddressesFromPrivateKey } from '@sei-js/cosmjs';

const seiAddress = deriveAddressesFromPrivateKey(PRIVATE_KEY);
```

#### `pubKeyToKeyPair`
Creates a hex-encoded ECC KeyPair given a public key.

- **Parameters:**
  - `pubKey` (`Uint8Array`): A byte array representing a public key.

- **Returns:** `EllipticCurve.KeyPair` - A hex-encoded ECC KeyPair.

- **Usage:**
```tsx
import { pubKeyToKeyPair } from '@sei-js/cosmjs';

const keyPair = pubKeyToKeyPair(new Uint8Array([/* public key bytes */]));
console.log(keyPair);
```

#### `pubKeyToBytes`
Converts the given public key to a bytestring.

- **Parameters:**
  - `pubKey` (`Uint8Array`): The public key to convert.
  - `uncompressed?` (`boolean`): Whether the public key should be uncompressed.

- **Returns:** `Uint8Array` - The converted public key as a byte array.

- **Usage:**
```tsx
import { pubKeyToBytes } from '@sei-js/cosmjs';

const bytes = pubKeyToBytes(new Uint8Array([/* public key bytes */]));
console.log(bytes);
```

#### `compressedPubKeyToAddress`
Gets the corresponding address from a byte array representing a compressed public key.

- **Parameters:**
  - `publicKey` (`Uint8Array`): A byte array representing a compressed public key.

- **Returns:** `string` - The corresponding Bech32 address.

- **Usage:**
```tsx
import { compressedPubKeyToAddress } from '@sei-js/cosmjs';

const address = compressedPubKeyToAddress(new Uint8Array([/* public key bytes */]));
console.log(address);
```

#### `getAddressHashFromPubKey`
Gets the corresponding SHA-256 hashed address for a given compressed public key.

- **Parameters:**
  - `compressedPublicKey` (`Uint8Array`): A byte array representing a compressed public key.

- **Returns:** `Uint8Array` - The hashed address.

- **Usage:**
```tsx
import { getAddressHashFromPubKey } from '@sei-js/cosmjs';

const hashedAddress = getAddressHashFromPubKey(new Uint8Array([/* compressed public key */]));
console.log(hashedAddress);
```

#### `verifyDigest32`
Verifies a digest signed with a private key using the corresponding public key.

- **Parameters:**
  - `digest` (`Uint8Array`): The digest to verify.
  - `signature` (`Uint8Array`): The digital signature.
  - `pubKey` (`Uint8Array`): The public key of the signer.

- **Returns:** `boolean` - `true` if the digest is verified.

- **Usage:**
```tsx
import { verifyDigest32 } from '@sei-js/cosmjs';

const isValid = verifyDigest32(new Uint8Array([/* digest */]), new Uint8Array([/* signature */]), new Uint8Array([/* public key */]));
console.log(isValid);
```

#### `isValidSeiCosmosAddress`
Checks if a given string is a valid Sei address.

- **Parameters:**
  - `address` (`string`): The address to verify.

- **Returns:** `boolean` - `true` if the address is valid.

- **Usage:**
```tsx
import { isValidSeiCosmosAddress } from '@sei-js/cosmjs';

const isValid = isValidSeiCosmosAddress('sei123...');
console.log(isValid);
```

#### `truncateSeiAddress`
Shortens a Sei address to display it in the format `sei...xxxxx`, where `xxxxx` is the last five characters of the address.

- **Parameters:**
  - `address` (`string`): The address to truncate.

- **Returns:** `string` - The truncated address.

- **Usage:**
```tsx
import { truncateSeiAddress } from '@sei-js/cosmjs';

const truncated = truncateSeiAddress('sei123456789abcdefghijk');
console.log(truncated);
```

### Bech32

#### `toBech32`
Converts a given address to Bech32 format.

- **Parameters:**
  - `address` (`Uint8Array`): The address to convert.

- **Returns:** `string` - The Bech32 formatted address.

- **Usage:**
```tsx
import { toBech32 } from '@sei-js/cosmjs';

const bech32Address = toBech32(new Uint8Array([/* address bytes */]));
console.log(bech32Address);
```

### Hash

#### `sha256`
Returns the SHA-256 encoded hash of the given data.

- **Parameters:**
  - `data` (`Uint8Array`): The data to encode.

- **Returns:** `Uint8Array` - The SHA-256 encoded hash.

- **Usage:**
```tsx
import { sha256 } from '@sei-js/cosmjs';

const hash = sha256(new Uint8Array([/* data */]));
console.log(hash);
```

### Serialize

#### `serializeDirectSignDoc`
Serializes the given signDoc object.

- **Parameters:**
  - `signDoc` (`SignDoc`): The SignDoc object to be serialized.

- **Returns:** `Uint8Array` - The serialized SignDoc.

- **Usage:**
```tsx
import { serializeDirectSignDoc } from '@sei-js/cosmjs';

const serialized = serializeDirectSignDoc({ /* SignDoc object */ });
console.log(serialized);
```

#### `serializeAminoSignDoc`
Serializes the given StdSignDoc object.

- **Parameters:**
  - `signDoc` (`StdSignDoc`): The StdSignDoc object to be serialized.

- **Returns:** `Uint8Array` - The serialized StdSignDoc.

- **Usage:**
```tsx
import { serializeAminoSignDoc } from '@sei-js/cosmjs';

const serialized = serializeAminoSignDoc({ /* StdSignDoc object */ });
console.log(serialized);
```

### Signing

#### `makeADR36AminoSignDoc`
Creates a StdSignDoc for an [ADR-36](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md) object.

- **Parameters:**
  - `signer` (`string`): The address of the signer.
  - `data` (`string | Uint8Array`): The payload to be signed.

- **Returns:** `StdSignDoc` - A valid ADR-36 StdSignDoc.

- **Usage:**
```tsx
import { makeADR36AminoSignDoc } from '@sei-js/cosmjs';

const signDoc = makeADR36AminoSignDoc('sei123...', 'Hello, Sei!');
console.log(signDoc);
```

#### `verifyArbitrary`
Verifies a StdSignature object against the given signer address and expected message.

- **Parameters:**
  - `signerAddress` (`string`): The signer's address.
  - `expectedMessage` (`string`): The expected message that was signed.
  - `signatureToVerify` (`StdSignature`): The StdSignature object to verify.

- **Returns:** `Promise<boolean>` - `true` if the signature is valid.

- **Usage:**
```tsx
import { verifyArbitrary } from '@sei-js/cosmjs';

const isVerified = await verifyArbitrary('sei123...', 'Hello, Sei!', {
  pub_key: { type: 'tendermint/PubKeySecp256k1', value: 'A1B2C3...' },
  signature: 'D4E5F6...'
});
console.log(isVerified);
```

## Common Examples

#### Transfer tokens (Bank send):
```tsx
import { calculateFee } from '@cosmjs/stargate';
import { getSigningStargateClient } from '@sei-js/cosmjs';

// Don't forget to connect if using a wallet extension
// or create a wallet from a mnemonic (See above)
await window.compass.connect(chainId);

const offlineSigner = await window.compass.getOfflineSigner(chainId);

const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner);

const fee = calculateFee(100000, "0.1usei");
const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };

const sendResponse = await signingClient.sendTokens(SENDER_ADDRESS, DESTINATION_ADDRESS, [amount], fee);
```

#### IBC Transfer:
```tsx
import { calculateFee } from '@cosmjs/stargate';
import { getSigningStargateClient } from '@sei-js/cosmjs';

// Don't forget to connect if using a wallet extension
// or create a wallet from a mnemonic (See above)
await window.compass.connect(chainId);

const offlineSigner = await window.compass.getOfflineSigner(chainId);

const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner);

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

const offlineSigner = await window.compass.getOfflineSigner(chainId);

// Create a CosmWasmClient
const signingCosmWasmClient = await getSigningCosmWasmClient(RPC_URL, offlineSigner);
```

#### Execute Example: Mint an NFT
Build the `executeMsg` according to the contracts specific specifications. Each contract will define its own execute functions, so check the contract documentation for the correct execute message format by examining the contract source code or documentation.

```tsx
import { getSigningCosmWasmClient } from "@sei-js/cosmjs";

const offlineSigner = await window.compass.getOfflineSigner(chainId);

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

const SEI_ADDRESS = "sei1...";
const message = "Message to sign";
const stdSignature = await window.compass.signArbitrary('atlantic-2', SEI_ADDRESS, message); // or FIN_WALLET, KEPLR_WALLET, LEAP_WALLET
const isValid = await verifyArbitrary(SEI_ADDRESS, message, stdSignature);
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

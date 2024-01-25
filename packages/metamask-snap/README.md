# Sei Metamask Snap

This documentation describes the functions and RPC request handler used in a MetaMask Snap to handle cryptocurrency transactions and account management using BIP44 standards.

### `onRpcRequest`

An RPC request handler that processes different request methods including `signDirect`, `signAmino`, and `getPrivateKey`. It handles the signing of transactions both in Amino and Direct mode, and also retrieves the private key.

- **Syntax**: `onRpcRequest({ request }): Promise<TransactionSignature | PrivateKey>`
- **Parameters**:
  - `request`: An object representing the RPC request.
- **Returns**: A Promise that resolves to a `TransactionSignature` or `PrivateKey`.

## RPC Methods

### `signDirect`

Signs a transaction in Direct mode.

- **Parameters**:
  - `account_index`: The bip44 coin type 118 account index to use for signing.
  - `signerAddress`: The address of the signer.
  - `signDoc`: The document to be signed.
- **Error Handling**: Throws an error if the private key is not available or if the user denies the transaction.

### `signAmino`

Signs a transaction in Amino mode.

- **Parameters**:
  - `account_index`: The bip44 coin type 118 account index to use for signing.
  - `signerAddress`: The address of the signer.
  - `signDoc`: The document to be signed.
  - `enableExtraEntropy`: Boolean flag for extra entropy.
  - `isADR36`: Boolean flag for ADR-36 compliance.
- **Error Handling**: Throws an error if the private key is not available or if the user denies the transaction.


### `getPrivateKey`

Retrieves the private key for a specified account index using MetaMask's `snap_getBip44Entropy` method and BIP44 standards and coin type 118.

- **Syntax**: `getPrivateKey(account_index: number = 0): Promise<PrivateKey>`
- **Parameters**:
  - `account_index` (number, optional): The index of the account, defaulting to 0.
- **Returns**: A Promise resolving to a `PrivateKey`.


## Local development and testing

### Setup
Run `yarn` to install dependencies.

### Running the snap locally
In order to run the snap locally simply run `yarn start` and the snap will be served at `localhost:8080`.

### Testing the snap

#### Test UI
This package has a helpful UI for testing all the exposed functions.

`cd` into the `./test-ui` directory and run `yarn` to install dependencies. Then run `yarn dev` to start the test UI. The test UI will be served at `localhost:3000`. Please checkout the README.md in that directory to learn how to set the snap ID.

#### Unit tests
Run `yarn test` to run the unit tests.

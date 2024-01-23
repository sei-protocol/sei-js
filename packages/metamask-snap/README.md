## Sei Metamask Snap

This snap is under active development and is not yet ready for use until this packages has been properly audited by a third party.

## Testing

### Setup
Run `yarn` to install dependencies.

### Running the snap locally
In order to run the snap locally simply run `yarn start` and the snap will be served at `localhost:8080`.

### Testing the snap

#### Test UI
`cd` into the `./test-ui` directory and run `yarn` to install dependencies. Then run `yarn dev` to start the test UI. The test UI will be served at `localhost:3000`. Please checkout the README.md in that directory to learn how to set the snap ID.

#### Unit tests
Run `yarn test` to run the unit tests.

## Usage

The snap exports three functions: `signAmino`, `signDirect`, and `getPrivateKey`. These functions can be used to create a SeiWallet interface for use with the `@sei-js` packages. `@sei-js/core` has a function to do this called `getMetaMaskSnapSeiWallet` 

# @sei-js/evm

Typescript library containing helper functions for interacting with the EVM on Sei.

## Installation

```bash
yarn add @sei-js/evm
```

<br>
<br>

## Wallet Connection
This package provides exports for easily interacting with wagmi, viem, and ethers.js. You can interact with the Sei EVM using all the same hooks and helper functions these tools offer. Read the [Wagmi]('https://wagmi.sh/), [viem]('https://viem.sh/'), and [ethers v6]('https://docs.ethers.org/v6/) documentation for more information on how to use these tools.

### Wallet network setup
Ensure that your EVM wallet has the Sei network enabled. Learn more on how to [set up your wallet]('https://v2.docs.sei.io/setting-up-a-wallet').

<br>

### Connection with Wagmi
The WagmiProvider is a React context provider that allows you to easily interact with the EVM. It provides many useful hooks for reading and writing on Sei via the EVM JSON-RPC.
```tsx
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ARCTIC_1_VIEM_CHAIN, createWagmiConfig } from '@sei-js/evm';

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: { children: ReactNode }) => {
 return (
   <WagmiProvider config={createWagmiConfig([ARCTIC_1_VIEM_CHAIN])}>
     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   </WagmiProvider>
 );
};
```

<br>

### Connection with ethers v6
The 'ethers' package is a popular library for interacting with the Ethereum blockchain. This package provides a helper function for creating an ethers provider that is connected to the Sei EVM.
```tsx
import { ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS } from '@sei-js/evm';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum); // or any other provider
const signer = await provider.getSigner();

const accounts = await provider.send('eth_requestAccounts', []);

const contract = getAddressPrecompileEthersV6Contract(ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS, signer);

const cosmosAddress = await contract.getSeiAddr(accounts[0]);
```

<br>

### Usage with viem
This package exports `viem` Chains and precompile ABI's for Sei. The ABI used in the ethers example above is a viem ABI instance and the `ARCTIC_1_VIEM_CHAIN` is a `viem Chain` instance.

<br>
<br>


## Utils
This package also exports a set of utility functions for interacting with the EVM on Sei.

### `parseSei`
Parses an amount of Sei to the smallest unit of Sei (uSei).
```ts
import { parseSei } from '@sei-js/evm';

const amount = parseSei('1000000');
console.log(amount); // 1000000000000000000
```

<br>
<br>

## Interoperability with Cosmos
Sei v2 supports both EVM JSON-RPC and Cosmos RPC interfaces. In order to easily interact with certain Cosmos modules, Sei v2 has a set of precompiled contracts that can be called from the EVM.

| Precompile                                          | Description                                                                                  |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------|
| [Address Precompile](#address-precompile)           | Enables the retrieval of associated EVM addresses for given Cosmos addresses and vice versa. |
| [Bank Precompile](#bank-precompile)                 | Provides functionalities for managing balances, supply, symbols, and more.                   |
| [Distribution Precompile](#distribution-precompile) | Facilitates operations related to rewards withdrawal and distribution.                       |
| [Governance Precompile](#governance-precompile)     | Supports actions such as depositing funds into proposals and voting.                         |
| [JSON Precompile](#json-precompile)                 | Facilitates interoperability between the EVM and Cosmos.                                     |
| [Staking Precompile](#staking-precompile)           | Enables staking functionalities like delegation and undelegation.                            |
| [WASM Precompile](#wasm-precompile)                 | Provides functionalities for executing WebAssembly (WASM) code.                              |

<br>

### Interoperability using Wagmi, viem, and ethers
Each precompile has contract exports a typed 'ethers' contracts and provides the ABI and contract addresses for each precompile for usage with Wagmi and viem.

<br>
<br>


### Address Precompile

The Address precompile contract enables the retrieval of associated EVM addresses for given Cosmos addresses and vice versa.
#### Functions

| Function Name                                                                          | Input Parameters  | Return Value           | Description                                                      |
|----------------------------------------------------------------------------------------|-------------------|------------------------|------------------------------------------------------------------|
| [`getEvmAddr`](/sei-js/docs/interfaces/evm.AddressPrecompileFunctions.html#getEvmAddr) | `addr: ` `string` | `{ response: string }` | Retrieves the associated EVM address for a given Cosmos address. |
| [`getSeiAddr`](/sei-js/docs/interfaces/evm.AddressPrecompileFunctions.html#getSeiAddr) | `addr: ` `string` | `{ response: string }` | Retrieves the associated Cosmos address for a given EVM address. |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS.html)

<br>
<br>

### Bank Precompile

The Bank precompile contract provides functionalities for managing balances, supply, symbols, and more.
#### Functions

| Function Name                                                                       | Input Parameters                                                                          | Return Value           | Description                                                                |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------|
| [`balance`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#balance)       | `acc: ` `string`, `denom: ` `string`                                                      | `{ amount: string }`   | Retrieves the balance of the specified account for the given denomination. |
| [`decimals`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#decimals)     | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the number of decimal places for the specified denomination.     |
| [`name`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#name)             | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the name of the specified denomination.                          |
| [`send`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#send)             | `fromAddress: ` `string`, `toAddress: ` `string`, `denom: ` `string`, `amount: ` `number` | `{ success: boolean }` | Sends tokens from one address to another.                                  |
| [`supply`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#supply)         | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the total supply of tokens for the specified denomination.       |
| [`symbol`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#symbol)         | `denom: ` `string`                                                                        | `{ response: string }` | Retrieves the symbol of the specified denomination.                        |
| [`sendNative`](/sei-js/docs/interfaces/evm.BankPrecompileFunctions.html#sendNative) | `toNativeAddress: ` `string`, `value: ` `string`                                          | `{ success: boolean }` | Sends native tokens to a specified address.                                |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_BANK_PRECOMPILE_ADDRESS.html)

<br>
<br>

### Distribution Precompile

The Distribution precompile contract facilitates operations related to rewards withdrawal and distribution.

#### Functions

| Function Name                                                                                                             | Input Parameters             | Return Value           | Description                                         |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------|------------------------|-----------------------------------------------------|
| [`setWithdrawAddress`](/sei-js/docs/interfaces/evm.DistributionPrecompileFunctions.html#setWithdrawAddress)               | `withdrawAddress: ` `string` | `{ success: boolean }` | Sets the withdrawal address for rewards.            |
| [`withdrawDelegationRewards`](/sei-js/docs/interfaces/evm.DistributionPrecompileFunctions.html#withdrawDelegationRewards) | `validator: ` `string`       | `{ success: boolean }` | Withdraws delegation rewards for a given validator. |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_DISTRIBUTION_PRECOMPILE_ADDRESS.html)

<br>
<br>

### Governance Precompile

The Governance precompile contract supports actions to deposit funds into proposals and vote on them.
#### Functions

| Function Name                                                                       | Input Parameters                             | Return Value           | Description                                |
|-------------------------------------------------------------------------------------|----------------------------------------------|------------------------|--------------------------------------------|
| [`deposit`](/sei-js/docs/interfaces/evm.GovernancePrecompileFunctions.html#deposit) | `proposalID: ` `string`                      | `{ success: boolean }` | Deposits funds into a governance proposal. |
| [`vote`](/sei-js/docs/interfaces/evm.GovernancePrecompileFunctions.html#vote)       | `proposalID: ` `string`, `option: ` `string` | `{ success: boolean }` | Votes on a governance proposal.            |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_GOVERNANCE_PRECOMPILE_ADDRESS.html)

<br>
<br>

### JSON Precompile

The JSON precompile contract facilitates interoperability between the EVM and Cosmos by providing functions to extract data in various formats.
#### Functions

| Function Name                                                                                       | Input Parameters                     | Return Value             | Description                                                              |
|-----------------------------------------------------------------------------------------------------|--------------------------------------|--------------------------|--------------------------------------------------------------------------|
| [`extractAsBytes`](/sei-js/docs/interfaces/evm.JSONPrecompileFunctions.html#extractAsBytes)         | `input: ` `string`, `key: ` `string` | `{ response: string }`   | Extracts data as bytes from the input using the specified key.           |
| [`extractAsBytesList`](/sei-js/docs/interfaces/evm.JSONPrecompileFunctions.html#extractAsBytesList) | `input: ` `string`, `key: ` `string` | `{ response: string[] }` | Extracts data as a list of bytes from the input using the specified key. |
| [`extractAsUint256`](/sei-js/docs/interfaces/evm.JSONPrecompileFunctions.html#extractAsUint256)     | `input: ` `string`, `key: ` `string` | `{ response: string }`   | Extracts data as a uint256 from the input using the specified key.       |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_JSON_PRECOMPILE_ADDRESS.html)

<br>
<br>

### Staking Precompile

The Staking precompile contract provides functions for delegation, re-delegation, and un-delegation staking operations.

#### Functions

| Function Name                                                                          | Input Parameters                                                      | Return Value           | Description                                                                |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------|
| [`delegate`](/sei-js/docs/interfaces/evm.StakingPrecompileFunctions.html#delegate)     | `valAddress: ` `string`                                               | `{ success: boolean }` | Delegates tokens to the specified validator.                               |
| [`redelegate`](/sei-js/docs/interfaces/evm.StakingPrecompileFunctions.html#redelegate) | `srcAddress: ` `string`, `dstAddress: ` `string`, `amount: ` `string` | `{ success: boolean }` | Redelegates tokens from the source validator to the destination validator. |
| [`undelegate`](/sei-js/docs/interfaces/evm.StakingPrecompileFunctions.html#undelegate) | `valAddress: ` `string`, `amount: ` `string`                          | `{ success: boolean }` | Undelegates tokens from the specified validator.                           |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_STAKING_PRECOMPILE_ADDRESS.html)

<br>
<br>

### WASM Precompile

The WASM precompile contract facilitates execution, instantiation, and querying of WebAssembly (WASM) contracts on the Sei platform.
#### Functions

| Function Name                                                                         | Input Parameters                                                                                          | Return Value                                 | Description                                                               |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------|
| [`execute`](/sei-js/docs/interfaces/evm.WasmPrecompileFunctions.html#execute)         | `contractAddress: ` `string`, `msg: ` `Uint8Array`, `coins: ` `Uint8Array`                                | `{ response: Uint8Array }`                   | Executes a message on the specified contract with provided coins.         |
| [`instantiate`](/sei-js/docs/interfaces/evm.WasmPrecompileFunctions.html#instantiate) | `codeID: ` `string`, `admin: ` `string`, `msg: ` `Uint8Array`, `label: ` `string`, `coins: ` `Uint8Array` | `{ contractAddr: string; data: Uint8Array }` | Instantiates a new contract with the specified code ID, admin, and coins. |
| [`query`](/sei-js/docs/interfaces/evm.WasmPrecompileFunctions.html#query)             | `contractAddress: ` `string`, `req: ` `Uint8Array`                                                        | `{ response: Uint8Array }`                   | Queries the specified contract with the provided request.                 |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_WASM_PRECOMPILE_ADDRESS.html)

<br>
<br>

### IBC Precompile

The IBC precompile contract facilitates messages exchange between Sei and other IBC compatible blockchains.
#### Functions

| Function Name                                                                  | Input Parameters                                                                                                                                                                                               | Return Value           | Description                                                                                  |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------------------------|
| [`transfer`](/sei-js/docs/interfaces/evm.IbcPrecompileFunctions.html#transfer) | `toAddress: ` `string`, `port: ` `string`, `channel: ` `string`, `denom: ` `string`, `amount: ` `ethers.BigNumberish`, `revisionNumber: ` `BigInt`, `revisionHeight: ` `BigInt`, `timeoutTimestamp: ` `BigInt` | `{ success: boolean }` | Transfers tokens from the caller's address to another on a different (IBC compatible) chain. |

#### Precompile Addresses
- [arctic-1](/sei-js/docs/variables/evm.ARCTIC_1_IBC_PRECOMPILE_ADDRESS.html)

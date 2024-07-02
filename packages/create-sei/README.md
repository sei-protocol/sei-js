# Create Sei App

This repository contains various templates for kick starting a Sei application out of the box, as well as a CLI (Command Line Interface) tool that can be used to create projects using the given templates.

You can use either:
- Next.js
- Vite.js

to scaffold your project.

## Getting Started
1. Install dependencies by running `yarn` or `npm`

2. Install this package globally by running `npm install -g @sei-js/create-sei`

3. Run `create-sei` and follow the prompts

## EVM Applications (Reccommended)
Building on our EVM (Ethereum Virtual Machine) is the easiest way to get your dApp kick started on Sei! The mature EVM ecosystem provides many tools out of the box to help developers build faster, including deploying smart contracts and other helpful connection libraries.

This tool will offer multiple variants of EVM tooling, including
- [Wagmi](https://wagmi.sh/core/getting-started) ([Viem](https://viem.sh/)): Recommended
- [Ethers](https://docs.ethers.org/v6/)

Both variants use [@sei-js/evm](https://sei-protocol.github.io/sei-js/modules/evm.html)

If you are new to Web3 development, we reccommend using Wagmi since it provides helpful hooks out of the box.

## Cosmos Applications
Cosmos based Sei Applications interact with the CosmWasm VM on the chain. Use this if you are a seasoned CosmWasm developer, or if you intend to interact with CosmWasm Smart Contracts, as well as other chains in the Cosmos ecosystem.

If you think your app might require interaction with native Cosmos modules, you should check the list of [precompiles](https://www.docs.sei.io/dev-interoperability/precompiles/addr) to determine if the same support can be offered by the EVM.

Cosmos Applications use
- [CosmosKit](https://cosmology.zone/products/cosmos-kit)
- [@sei-js/cosmjs](https://sei-protocol.github.io/sei-js/modules/cosmjs.html)
- [Cosmjs](https://github.com/cosmos/cosmjs)

## Contributing
We love contributions from the amazing Sei community! If you have a dApp template to contribute, do make a Pull Request into the [sei-js](https://github.com/sei-protocol/sei-js) repository.
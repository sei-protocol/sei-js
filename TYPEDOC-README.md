<div align="center">
<img src="https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png" alt="SEI Logo" width="200">
<h1 style="margin: 0">@sei-js</h1>
</div>

<br><br>

**@sei-js** is a collection of TypeScript libraries designed to streamline development on the Sei platform. Whether you're building decentralized applications, interacting with Sei via the EVM or Cosmos interfaces, or working with protocol buffers, **@sei-js** has you covered.

## Packages

| Package                                        | Description                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [evm](/sei-js/docs/modules/evm.html)           | The `/evm` package provides utilities, functions, wrappers, and configurations for seamless interaction with Sei via the Ethereum Virtual Machine (EVM). If you're building smart contracts or integrating Sei with Ethereum-based tooling, or interacting with EVM contacts like ERC20 tokens this package contains all the configs needed. |
| [cosmjs](/sei-js/docs/modules/cosmjs.html)     | The `/cosmjs` package offers similar functionality to the `/evm` package but tailored for interactions with Sei via the Cosmos interfaces. It includes utilities, functions, wrappers, and configurations specifically designed for CosmWasm and Rust development.                                                                           |
| [proto](/sei-js/docs/modules/proto.html)       | The `/proto` package contains Sei client libraries and types generated using protocol buffers. If you're working with Sei's protocol buffer definitions or building clients for Sei services, this package will be invaluable.                                                                                                               |
| [registry](/sei-js/docs/modules/registry.html) | The `/registry` package contains exports data from the [Sei chain-registry](https://github.com/sei-protocol/chain-registry) and the [community asset list](https://github.com/Sei-Public-Goods/sei-assetlist) as constants in typescript.                                                                                                    |

## Resources

- [Sei Documentation](https://docs.sei.io)
- [Sei Developers Hub](https://www.sei.io/developers)

Feel free to explore each package for detailed documentation and examples. We're excited to see what you build on Sei!

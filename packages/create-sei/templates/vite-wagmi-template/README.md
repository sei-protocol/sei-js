# Vite-Wagmi Sei App Template

This repo provides a basic framework for an application that interacts with Sei via EVM endpoints.

It is based on the React Typescript Vite template.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Repository Basics
This repository includes basic features that allow you to connect to a wallet and use the wallet to interact with the chain.

Additionally, basic examples and links to documentation are provided on the example homepage in `src/app/components/Homepage`.

### Web3 Provider
This component is a Sei specific wrapper around CosmosKit Provider that should wrap the application. Wrapping the application in this provider will enable it to access hooks in CosmosKit. These hooks are enable connection to a wallet and interaction with the chain.

To change the list of supported wallets, as well as connection configurations you can modify the `src/app/components/Web3Provider.tsx` component.

### Wallet Connect Button
This component provides an interface to connect your wallet to the application. It utilizies CosmosKit's hooks and modal.

To customize the wallet connect button or connection logic, you can modify the `src/app/components/WalletConnectButton.tsx` component.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

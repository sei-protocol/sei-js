# Vite-Cosmos Sei App Template

This repo provides a basic framework for an application that interacts with Sei via Cosmos endpoints.

It is based on the React Typescript Vite template.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

Install dependencies by running
```bash
npm install
#or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

## Repository Basics
This repository includes basic features that allow you to connect to a wallet and use the wallet to interact with the chain.

Additionally, basic examples and links to documentation are provided on the example homepage in `src/components/Homepage`.

### Web3 Provider
This component is a Sei specific wrapper around Wagmi's Provider that should wrap the application. Wrapping the application in this provider will enable it to access hooks in Wagmi. These hooks are enable connection to a wallet and interaction with the chain.

To change the list of supported wallets, as well as connection configurations you can modify the `src/components/Web3Provider.tsx` component.

### Wallet Connect Button
This component utilizies Rainbowkit's pre built wallet connect button, which uses hooks in Wagmi.

### Changing the Chain
This application connects to the arctic-1 devnet by default

To change the chain the app connects to, edit the `selectedChain` variable in the `chain.ts` file in `src/constants`

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


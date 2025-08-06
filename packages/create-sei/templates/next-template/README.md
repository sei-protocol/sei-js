This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Repository Basics
This repository includes basic features that allow you to connect to a wallet and use the wallet to interact with the chain.

Additionally, basic examples and links to documentation are provided on the example homepage in `src/app/components/Homepage`.

This repository uses helper methods from [@sei-js/evm/viem](https://github.com/sei-protocol/sei-js/tree/main/packages/evm/src/viem)

### Web3 Provider
This component is a Sei specific wrapper around a Wagmi Provider that should wrap the application. Wrapping the application in this provider will enable it to access hooks in Wagmi. These hooks are enable connection to a wallet and interaction with the chain.

In addition, this app uses [RainbowKit](https://www.rainbowkit.com/docs/wallet-button) which provides wallet connect functionality out of the box.

To change the list of supported wallets, as well as connection configurations you can modify the `src/app/components/Web3Provider.tsx` component.

### Changing the Chain
This application connects to the arctic-1 devnet by default, using chain configurations uploaded to viem.

To change the chain the app connects to, edit the `selectedChain` variable in the `chain.ts` file in `src/app/constants`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

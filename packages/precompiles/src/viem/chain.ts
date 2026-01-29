import { defineChain } from "viem";

/**
 * The Viem chain definition for the Sei local chain.
 * @category Chain
 */
export const seiLocal = defineChain({
  id: 713714,
  name: "Sei Local",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://localhost:8545"],
    },
  },
});

export const seiTestnet = defineChain({
  id: 1328,
  name: "Sei Testnet",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc-testnet.sei-apis.com"],
    },
  },
});

export const seiMainnet = defineChain({
  id: 1329,
  name: "Sei Mainnet",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc.sei-apis.com"],
    },
  },
});

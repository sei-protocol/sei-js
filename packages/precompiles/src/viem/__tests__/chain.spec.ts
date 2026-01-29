import { seiLocal, seiMainnet, seiTestnet } from "../chain";

describe("seiLocal chain", () => {
  it("should be a valid chain definition", () => {
    expect(seiLocal).toMatchObject({
      id: 713714,
      name: "Sei Local",
      nativeCurrency: {
        name: "Sei",
        symbol: "SEI",
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: ["http://localhost:8545"],
        },
      },
    });
  });
});

describe("seiTestnet chain", () => {
  it("should be a valid chain definition", () => {
    expect(seiTestnet).toMatchObject({
      id: 1328,
      name: "Sei Testnet",
      nativeCurrency: {
        name: "Sei",
        symbol: "SEI",
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: ["https://evm-rpc-testnet.sei-apis.com"],
        },
      },
    });
  });
});

describe("seiMainnet chain", () => {
  it("should be a valid chain definition", () => {
    expect(seiMainnet).toMatchObject({
      id: 1329,
      name: "Sei Mainnet",
      nativeCurrency: {
        name: "Sei",
        symbol: "SEI",
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: ["https://evm-rpc.sei-apis.com"],
        },
      },
    });
  });
});

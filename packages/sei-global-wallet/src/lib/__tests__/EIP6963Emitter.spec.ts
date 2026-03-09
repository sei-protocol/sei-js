import { describe, expect, it, type Mock, mock } from "bun:test";

mock.module("@dynamic-labs/global-wallet-client/ethereum", () => ({
  announceEip6963Provider: mock(),
  createEIP1193Provider: mock(),
}));

mock.module("../wallet", () => ({
  default: {},
}));
mock.module("../config", () => ({
  config: {
    walletIcon: "icon-url",
    environmentId: "env-id",
    walletName: "SEI Wallet",
    eip6963: {
      rdns: "com.sei.wallet",
    },
  },
}));

import { announceEip6963Provider, createEIP1193Provider } from "@dynamic-labs/global-wallet-client/ethereum";
import { EIP6963Emitter } from "../EIP6963Emitter";
import Wallet from "../wallet";

describe("EIP6963Emitter", () => {
  it("should announce the provider with correct config and provider instance", () => {
    const mockProvider = { foo: "bar" } as unknown as ReturnType<typeof createEIP1193Provider>;
    (createEIP1193Provider as Mock<typeof createEIP1193Provider>).mockReturnValue(mockProvider);

    EIP6963Emitter();

    expect(createEIP1193Provider).toHaveBeenCalledWith(Wallet);
    expect(announceEip6963Provider).toHaveBeenCalledWith({
      info: {
        icon: "icon-url",
        uuid: "env-id",
        name: "SEI Wallet",
        rdns: "com.sei.wallet",
      },
      provider: mockProvider,
    });
  });
});

import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import * as viemModule from "viem";
import { getBalance, getERC20Balance, getERC721Balance, getERC1155Balance, isNFTOwner } from "../../../core/services";
import * as clientsModule from "../../../core/services/clients.js";
import * as contractsModule from "../../../core/services/contracts.js";

// Create valid test addresses with proper type assertions
const VALID_ADDRESS = "0x1234567890123456789012345678901234567890" as `0x${string}`;
const VALID_TOKEN_ADDRESS = "0xabcdef1234567890123456789012345678901234" as `0x${string}`;
const VALID_OWNER_ADDRESS = "0x0987654321098765432109876543210987654321" as `0x${string}`;

describe("Balance Service", () => {
  const spies: { mockRestore(): void }[] = [];

  beforeEach(() => {
    spies.length = 0;
  });

  afterEach(() => {
    for (const s of spies) s.mockRestore();
  });

  describe("getBalance", () => {
    test("should return the native token balance", async () => {
      const mockClient = {
        getBalance: mock().mockImplementation(() => Promise.resolve(BigInt("1000000000000000000"))),
      };

      spies.push(spyOn(clientsModule, "getPublicClient").mockReturnValue(mockClient as never));
      spies.push(spyOn(viemModule, "formatEther").mockReturnValue("1"));

      const result = await getBalance(VALID_ADDRESS);

      expect(result).toEqual({
        wei: BigInt(1000000000000000000),
        sei: "1",
      });
    });
  });

  describe("getERC20Balance", () => {
    test("should return the ERC20 token balance with metadata", async () => {
      const mockContract = {
        read: {
          balanceOf: mock().mockImplementation(() => Promise.resolve(BigInt("1000000000"))),
          symbol: mock().mockImplementation(() => Promise.resolve("TOKEN")),
          decimals: mock().mockImplementation(() => Promise.resolve(9)),
        },
      };

      spies.push(spyOn(clientsModule, "getPublicClient").mockReturnValue({} as never));
      spies.push(spyOn(viemModule, "getContract").mockReturnValue(mockContract as never));
      spies.push(spyOn(viemModule, "formatUnits").mockReturnValue("1"));

      const result = await getERC20Balance(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS);

      expect(result).toEqual({
        raw: BigInt(1000000000),
        formatted: "1",
        token: {
          symbol: "TOKEN",
          decimals: 9,
        },
      });
    });
  });

  describe("isNFTOwner", () => {
    test("should return true if address owns the NFT", async () => {
      spies.push(spyOn(contractsModule, "readContract").mockImplementation(() => Promise.resolve(VALID_OWNER_ADDRESS) as never));

      const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, BigInt(1));

      expect(result).toBe(true);
    });

    test("should return false if address does not own the NFT", async () => {
      spies.push(spyOn(contractsModule, "readContract").mockImplementation(() => Promise.resolve("0xDifferentAddress" as `0x${string}`) as never));

      const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, BigInt(1));

      expect(result).toBe(false);
    });

    test("should return false if there is an error", async () => {
      spies.push(
        spyOn(contractsModule, "readContract").mockImplementation(() => {
          throw new Error("NFT does not exist");
        }),
      );

      const originalConsoleError = console.error;
      console.error = () => {};

      const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, BigInt(1));

      expect(result).toBe(false);

      console.error = originalConsoleError;
    });

    test("should return false if there is a non-Error object thrown", async () => {
      spies.push(
        spyOn(contractsModule, "readContract").mockImplementation(() => {
          throw "String error message";
        }),
      );

      const originalConsoleError = console.error;
      console.error = () => {};

      const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, BigInt(1));

      expect(result).toBe(false);

      console.error = originalConsoleError;
    });
  });

  describe("getERC721Balance", () => {
    test("should return the ERC721 token balance with metadata", async () => {
      spies.push(spyOn(contractsModule, "readContract").mockResolvedValue(BigInt("5") as never));

      const result = await getERC721Balance(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS);

      expect(result).toBe(BigInt(5));
    });
  });

  describe("getERC1155Balance", () => {
    test("should return the balance of the ERC1155 token", async () => {
      spies.push(spyOn(contractsModule, "readContract").mockImplementation(() => Promise.resolve(BigInt("10")) as never));

      const result = await getERC1155Balance(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, BigInt(2));

      expect(result).toBe(BigInt(10));
    });
  });
});

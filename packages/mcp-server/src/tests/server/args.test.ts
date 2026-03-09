import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";

// Mock dotenv to prevent .env file from polluting tests
mock.module("dotenv", () => ({
  config: mock(),
}));

import { parseArgs } from "../../server/args.js";

describe("parseArgs", () => {
  const originalEnv = { ...process.env };
  const originalArgv = [...process.argv];
  let exitSpy: ReturnType<typeof spyOn>;
  let errorSpy: ReturnType<typeof spyOn>;

  beforeEach(() => {
    // Reset env to clean state (remove all SERVER_* and WALLET_* vars)
    for (const key of Object.keys(process.env)) {
      if (key.startsWith("SERVER_") || key.startsWith("WALLET_") || key === "PRIVATE_KEY" || key.endsWith("_RPC_URL")) {
        delete process.env[key];
      }
    }
    // Commander reads process.argv — provide minimal args so it doesn't error
    process.argv = ["node", "test"];

    // Mock process.exit to prevent test termination
    exitSpy = spyOn(process, "exit").mockImplementation(() => {
      throw new Error("process.exit called");
    });
    errorSpy = spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    process.argv = [...originalArgv];
    exitSpy.mockRestore();
    errorSpy.mockRestore();
  });

  describe("defaults", () => {
    test("should return stdio transport with default config", () => {
      const config = parseArgs();

      expect(config).toEqual({
        mode: "stdio",
        port: 8080,
        host: "localhost",
        path: "/mcp",
        walletMode: "disabled",
      });
    });
  });

  describe("transport mode", () => {
    test("should use streamable-http when SERVER_TRANSPORT is set", () => {
      process.env.SERVER_TRANSPORT = "streamable-http";
      const config = parseArgs();
      expect(config.mode).toBe("streamable-http");
    });

    test("should use http-sse when SERVER_TRANSPORT is set", () => {
      process.env.SERVER_TRANSPORT = "http-sse";
      const config = parseArgs();
      expect(config.mode).toBe("http-sse");
    });

    test("should throw on invalid transport mode", () => {
      process.env.SERVER_TRANSPORT = "invalid";
      expect(() => parseArgs()).toThrow("Invalid transport mode");
    });
  });

  describe("port", () => {
    test("should use custom port from SERVER_PORT", () => {
      process.env.SERVER_PORT = "3001";
      const config = parseArgs();
      expect(config.port).toBe(3001);
    });

    test("should fall back to default port for non-numeric SERVER_PORT", () => {
      process.env.SERVER_PORT = "not-a-number";
      const config = parseArgs();
      expect(config.port).toBe(8080);
    });

    test("should throw on port below 1", () => {
      process.env.SERVER_PORT = "0";
      expect(() => parseArgs()).toThrow("Invalid port");
    });

    test("should throw on port above 65535", () => {
      process.env.SERVER_PORT = "70000";
      expect(() => parseArgs()).toThrow("Invalid port");
    });
  });

  describe("host", () => {
    test("should use custom host from SERVER_HOST", () => {
      process.env.SERVER_HOST = "0.0.0.0";
      const config = parseArgs();
      expect(config.host).toBe("0.0.0.0");
    });
  });

  describe("path", () => {
    test("should use custom path from SERVER_PATH", () => {
      process.env.SERVER_PATH = "/api/mcp";
      const config = parseArgs();
      expect(config.path).toBe("/api/mcp");
    });

    test("should normalize path without leading slash", () => {
      process.env.SERVER_PATH = "api/mcp";
      const config = parseArgs();
      expect(config.path).toBe("/api/mcp");
    });
  });

  describe("wallet mode", () => {
    test("should use private-key wallet mode when set", () => {
      process.env.WALLET_MODE = "private-key";
      const config = parseArgs();
      expect(config.walletMode).toBe("private-key");
    });

    test("should default to disabled wallet mode", () => {
      const config = parseArgs();
      expect(config.walletMode).toBe("disabled");
    });

    test("should throw on invalid wallet mode", () => {
      process.env.WALLET_MODE = "invalid";
      expect(() => parseArgs()).toThrow("Invalid wallet mode");
    });
  });

  describe("combined configuration", () => {
    test("should handle all env vars together", () => {
      process.env.SERVER_TRANSPORT = "http-sse";
      process.env.SERVER_PORT = "3000";
      process.env.SERVER_HOST = "0.0.0.0";
      process.env.SERVER_PATH = "/custom";
      process.env.WALLET_MODE = "disabled";

      const config = parseArgs();

      expect(config).toEqual({
        mode: "http-sse",
        port: 3000,
        host: "0.0.0.0",
        path: "/custom",
        walletMode: "disabled",
      });
    });
  });
});

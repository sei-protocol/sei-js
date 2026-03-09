import { HttpSseTransport } from "./http-sse.js";
import { StdioTransport } from "./stdio.js";
import { StreamableHttpTransport } from "./streamable-http.js";
import type { McpTransport, TransportConfig } from "./types.js";

export const createTransport = (config: TransportConfig): McpTransport => {
  switch (config.mode) {
    case "stdio":
      return new StdioTransport();

    case "streamable-http":
      return new StreamableHttpTransport(config.port, config.host, config.path, config.walletMode);

    case "http-sse":
      return new HttpSseTransport(config.port, config.host, config.path, config.walletMode);

    default:
      throw new Error(`Unsupported transport mode: ${config.mode}`);
  }
};

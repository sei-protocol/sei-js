import type { NextFunction, Request, RequestHandler, Response } from "express";
import type { TransportMode, WalletMode } from "./types.js";

/**
 * Creates CORS middleware with secure defaults.
 * By default, no CORS headers are set (same-origin only).
 */
export function createCorsMiddleware(): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    // Handle preflight - reject cross-origin by default
    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
    next();
  };
}

/**
 * Validates that wallet mode is not used with HTTP transports
 * Throws an error if unsafe configuration detected
 */
export function validateSecurityConfig(transportMode: TransportMode, walletMode: WalletMode): void {
  const isHttpTransport = transportMode === "streamable-http" || transportMode === "http-sse";
  const isWalletEnabled = walletMode !== "disabled";

  if (isHttpTransport && isWalletEnabled) {
    throw new Error(
      "SECURITY ERROR: Wallet mode cannot be used with HTTP transports! " +
        "HTTP transports expose the server to cross-origin requests, " +
        "allowing malicious websites to steal funds from your wallet. " +
        "Use stdio transport instead (default, works with Claude): " +
        "$ WALLET_MODE=private-key PRIVATE_KEY=... npx @sei-js/mcp-server",
    );
  }
}

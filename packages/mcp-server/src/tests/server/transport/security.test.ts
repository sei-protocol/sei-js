import { describe, expect, it, spyOn } from "bun:test";
import type { NextFunction, Request, Response } from "express";
import { createCorsMiddleware, validateSecurityConfig } from "../../../server/transport/security.js";

describe("Security Module", () => {
  describe("createCorsMiddleware", () => {
    it("should return a middleware function", () => {
      const middleware = createCorsMiddleware();
      expect(typeof middleware).toBe("function");
    });

    it("should return 204 for OPTIONS preflight requests", () => {
      const middleware = createCorsMiddleware();

      const mockReq = { method: "OPTIONS" } as Request;
      const mockRes = {
        sendStatus: (() => mockRes) as unknown,
      } as Response;
      const sendStatusSpy = spyOn(mockRes, "sendStatus" as never);
      const mockNext = (() => {}) as NextFunction;

      middleware(mockReq, mockRes, mockNext);

      expect(sendStatusSpy).toHaveBeenCalledWith(204);
    });

    it("should call next() for non-OPTIONS requests", () => {
      const middleware = createCorsMiddleware();

      const mockReq = { method: "POST" } as Request;
      const mockRes = {} as Response;
      let nextCalled = false;
      const mockNext = (() => {
        nextCalled = true;
      }) as NextFunction;

      middleware(mockReq, mockRes, mockNext);

      expect(nextCalled).toBe(true);
    });

    it("should call next() for GET requests", () => {
      const middleware = createCorsMiddleware();

      const mockReq = { method: "GET" } as Request;
      const mockRes = {} as Response;
      let nextCalled = false;
      const mockNext = (() => {
        nextCalled = true;
      }) as NextFunction;

      middleware(mockReq, mockRes, mockNext);

      expect(nextCalled).toBe(true);
    });
  });

  describe("validateSecurityConfig", () => {
    describe("safe configurations", () => {
      it("should allow stdio transport with wallet enabled", () => {
        expect(() => {
          validateSecurityConfig("stdio", "private-key");
        }).not.toThrow();
      });

      it("should allow streamable-http transport with wallet disabled", () => {
        expect(() => {
          validateSecurityConfig("streamable-http", "disabled");
        }).not.toThrow();
      });

      it("should allow http-sse transport with wallet disabled", () => {
        expect(() => {
          validateSecurityConfig("http-sse", "disabled");
        }).not.toThrow();
      });

      it("should allow stdio transport with wallet disabled", () => {
        expect(() => {
          validateSecurityConfig("stdio", "disabled");
        }).not.toThrow();
      });
    });

    describe("unsafe configurations", () => {
      it("should throw for streamable-http with wallet enabled", () => {
        expect(() => {
          validateSecurityConfig("streamable-http", "private-key");
        }).toThrow("SECURITY ERROR");
      });

      it("should throw for http-sse with wallet enabled", () => {
        expect(() => {
          validateSecurityConfig("http-sse", "private-key");
        }).toThrow("SECURITY ERROR");
      });

      it("should include wallet security details in error message", () => {
        expect(() => {
          validateSecurityConfig("streamable-http", "private-key");
        }).toThrow("Wallet mode cannot be used with HTTP transports");
      });
    });

    describe("wallet mode variations", () => {
      it("should block private-key wallet mode on streamable-http", () => {
        expect(() => {
          validateSecurityConfig("streamable-http", "private-key");
        }).toThrow("SECURITY ERROR");
      });

      it("should block private-key wallet mode on http-sse", () => {
        expect(() => {
          validateSecurityConfig("http-sse", "private-key");
        }).toThrow("SECURITY ERROR");
      });

      it("should allow disabled wallet mode on all transports", () => {
        expect(() => {
          validateSecurityConfig("stdio", "disabled");
          validateSecurityConfig("streamable-http", "disabled");
          validateSecurityConfig("http-sse", "disabled");
        }).not.toThrow();
      });
    });
  });
});

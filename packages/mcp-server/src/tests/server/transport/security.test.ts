import { jest } from '@jest/globals';
import type { Request, Response, NextFunction } from 'express';

describe('Security Module', () => {
	let createCorsMiddleware: typeof import('../../../server/transport/security.js').createCorsMiddleware;
	let validateSecurityConfig: typeof import('../../../server/transport/security.js').validateSecurityConfig;
	let consoleErrorSpy: jest.SpyInstance;
	let processExitSpy: jest.SpyInstance;

	beforeEach(async () => {
		jest.clearAllMocks();
		
		// Spy on console.error
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
		
		// Spy on process.exit to prevent actual exit
		processExitSpy = jest.spyOn(process, 'exit').mockImplementation((code?: number | string | null | undefined) => {
			throw new Error(`process.exit called with code ${code}`);
		});

		// Import the module
		const securityModule = await import('../../../server/transport/security.js');
		createCorsMiddleware = securityModule.createCorsMiddleware;
		validateSecurityConfig = securityModule.validateSecurityConfig;
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
		processExitSpy.mockRestore();
	});

	describe('createCorsMiddleware', () => {
		it('should return a middleware function', () => {
			const middleware = createCorsMiddleware();
			expect(typeof middleware).toBe('function');
		});

		it('should return 204 for OPTIONS preflight requests', () => {
			const middleware = createCorsMiddleware();
			
			const mockReq = { method: 'OPTIONS' } as Request;
			const mockRes = {
				sendStatus: jest.fn().mockReturnThis()
			} as unknown as Response;
			const mockNext = jest.fn() as NextFunction;

			middleware(mockReq, mockRes, mockNext);

			expect(mockRes.sendStatus).toHaveBeenCalledWith(204);
			expect(mockNext).not.toHaveBeenCalled();
		});

		it('should call next() for non-OPTIONS requests', () => {
			const middleware = createCorsMiddleware();
			
			const mockReq = { method: 'POST' } as Request;
			const mockRes = {
				sendStatus: jest.fn()
			} as unknown as Response;
			const mockNext = jest.fn() as NextFunction;

			middleware(mockReq, mockRes, mockNext);

			expect(mockRes.sendStatus).not.toHaveBeenCalled();
			expect(mockNext).toHaveBeenCalled();
		});

		it('should call next() for GET requests', () => {
			const middleware = createCorsMiddleware();
			
			const mockReq = { method: 'GET' } as Request;
			const mockRes = {} as Response;
			const mockNext = jest.fn() as NextFunction;

			middleware(mockReq, mockRes, mockNext);

			expect(mockNext).toHaveBeenCalled();
		});
	});

	describe('validateSecurityConfig', () => {
		describe('safe configurations', () => {
			it('should allow stdio transport with wallet enabled', () => {
				expect(() => {
					validateSecurityConfig('stdio', 'private-key');
				}).not.toThrow();

				expect(processExitSpy).not.toHaveBeenCalled();
			});

			it('should allow streamable-http transport with wallet disabled', () => {
				expect(() => {
					validateSecurityConfig('streamable-http', 'disabled');
				}).not.toThrow();

				expect(processExitSpy).not.toHaveBeenCalled();
			});

			it('should allow http-sse transport with wallet disabled', () => {
				expect(() => {
					validateSecurityConfig('http-sse', 'disabled');
				}).not.toThrow();

				expect(processExitSpy).not.toHaveBeenCalled();
			});

			it('should allow stdio transport with wallet disabled', () => {
				expect(() => {
					validateSecurityConfig('stdio', 'disabled');
				}).not.toThrow();

				expect(processExitSpy).not.toHaveBeenCalled();
			});
		});

		describe('unsafe configurations', () => {
			it('should exit with code 1 for streamable-http with wallet enabled', () => {
				expect(() => {
					validateSecurityConfig('streamable-http', 'private-key');
				}).toThrow('process.exit called with code 1');

				expect(processExitSpy).toHaveBeenCalledWith(1);
				expect(consoleErrorSpy).toHaveBeenCalled();
			});

			it('should exit with code 1 for http-sse with wallet enabled', () => {
				expect(() => {
					validateSecurityConfig('http-sse', 'private-key');
				}).toThrow('process.exit called with code 1');

				expect(processExitSpy).toHaveBeenCalledWith(1);
				expect(consoleErrorSpy).toHaveBeenCalled();
			});

			it('should log security error message for unsafe config', () => {
				expect(() => {
					validateSecurityConfig('streamable-http', 'private-key');
				}).toThrow();

				// Verify error messages were logged
				expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('SECURITY ERROR'));
				expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Wallet mode cannot be used with HTTP transports'));
			});
		});

		describe('edge cases', () => {
			it('should handle unknown transport modes as non-HTTP (safe)', () => {
				expect(() => {
					validateSecurityConfig('unknown-transport', 'private-key');
				}).not.toThrow();

				expect(processExitSpy).not.toHaveBeenCalled();
			});

			it('should handle unknown wallet modes as enabled', () => {
				// Any wallet mode other than 'disabled' should be considered enabled
				expect(() => {
					validateSecurityConfig('streamable-http', 'some-other-mode');
				}).toThrow('process.exit called with code 1');

				expect(processExitSpy).toHaveBeenCalledWith(1);
			});

			it('should handle empty strings', () => {
				expect(() => {
					validateSecurityConfig('', '');
				}).not.toThrow();

				expect(processExitSpy).not.toHaveBeenCalled();
			});
		});
	});
});


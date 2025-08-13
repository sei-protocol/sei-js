import { jest } from '@jest/globals';
import type { Request, Response } from 'express';
import type { Server } from 'node:http';

// Mock dependencies
jest.mock('express', () => {
	const mockApp = {
		use: jest.fn(),
		post: jest.fn(),
		listen: jest.fn()
	};
	const express = jest.fn(() => mockApp);
	express.json = jest.fn();
	return express;
});

jest.mock('@modelcontextprotocol/sdk/server/streamableHttp.js', () => ({
	StreamableHTTPServerTransport: jest.fn()
}));

jest.mock('../../../server/server.js', () => ({
	getServer: jest.fn()
}));

describe('StreamableHttpTransport', () => {
	let StreamableHttpTransport: any;
	let mockExpress: jest.MockedFunction<any>;
	let mockApp: any;
	let mockServer: any;
	let mockGetServer: jest.MockedFunction<() => Promise<any>>;
	let mockStreamableTransport: any;
	let mockMcpServer: any;
	let consoleErrorSpy: jest.SpyInstance;
	let consoleLogSpy: jest.SpyInstance;

	beforeEach(async () => {
		jest.clearAllMocks();

		// Import mocked modules
		const expressModule = await import('express');
		const serverModule = await import('../../../server/server.js');
		const { StreamableHTTPServerTransport } = await import('@modelcontextprotocol/sdk/server/streamableHttp.js');

		mockExpress = expressModule.default as jest.MockedFunction<any>;
		mockGetServer = serverModule.getServer as jest.MockedFunction<() => Promise<any>>;

		// Setup mock objects
		mockApp = {
			use: jest.fn(),
			post: jest.fn(),
			listen: jest.fn()
		};
		mockServer = {
			on: jest.fn(),
			close: jest.fn()
		};
		mockMcpServer = {
			connect: jest.fn(),
			close: jest.fn()
		};
		mockStreamableTransport = {
			handleRequest: jest.fn(),
			close: jest.fn()
		};

		// Setup default mocks
		mockExpress.mockReturnValue(mockApp);
		mockExpress.json = jest.fn();
		mockApp.listen.mockReturnValue(mockServer);
		mockGetServer.mockResolvedValue(mockMcpServer);
		(StreamableHTTPServerTransport as jest.Mock).mockImplementation(() => mockStreamableTransport);

		// Setup spies
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

		// Import the class after mocks are set up
		const transportModule = await import('../../../server/transport/streamable-http.js');
		StreamableHttpTransport = transportModule.StreamableHttpTransport;
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
		consoleLogSpy.mockRestore();
	});

	describe('Constructor', () => {
		it('should initialize with default values', () => {
			const transport = new StreamableHttpTransport();
			expect(transport.mode).toBe('streamable-http');
		});

		it('should initialize with custom values', () => {
			const transport = new StreamableHttpTransport(3000, '0.0.0.0', '/custom');
			expect(transport.mode).toBe('streamable-http');
		});
	});

	describe('start', () => {
		it('should start server successfully', async () => {
			const transport = new StreamableHttpTransport();
			const mockServerParam = { mock: 'server' };

			await transport.start(mockServerParam);

			// Verify express setup
			expect(mockExpress).toHaveBeenCalled();
			expect(mockExpress.json).toHaveBeenCalled();
			expect(mockApp.use).toHaveBeenCalledWith(mockExpress.json());

			// Verify CORS middleware setup
			expect(mockApp.use).toHaveBeenCalledWith(expect.any(Function));

			// Verify POST route setup
			expect(mockApp.post).toHaveBeenCalledWith('/mcp', expect.any(Function));

			// Verify server listen
			expect(mockApp.listen).toHaveBeenCalledWith(8080, 'localhost', expect.any(Function));

			// Verify server error handler
			expect(mockServer.on).toHaveBeenCalledWith('error', expect.any(Function));
		});

		it('should handle CORS preflight requests', () => {
			const transport = new StreamableHttpTransport();
			transport.start();

			// Get the middleware function
			const middlewareFunction = mockApp.use.mock.calls[1][0];

			// Mock request and response for OPTIONS request
			const mockReq = { method: 'OPTIONS' } as any as Request;
			const mockRes = { 
				header: jest.fn(),
				sendStatus: jest.fn()
			} as any as Response;
			mockRes.sendStatus.mockReturnValue(mockRes);
			const mockNext = jest.fn();

			// Call the middleware
			middlewareFunction(mockReq, mockRes, mockNext);

			// Verify CORS headers are set
			expect(mockRes.header).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
			expect(mockRes.header).toHaveBeenCalledWith('Access-Control-Allow-Methods', 'POST, OPTIONS');
			expect(mockRes.header).toHaveBeenCalledWith('Access-Control-Allow-Headers', 'Content-Type');
			expect(mockRes.sendStatus).toHaveBeenCalledWith(200);
			expect(mockNext).not.toHaveBeenCalled();
		});

		it('should call next for non-OPTIONS requests', async () => {
			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			// Get the CORS middleware function
			const corsMiddleware = mockApp.use.mock.calls.find(call => 
				typeof call[0] === 'function' && call[0].length === 3
			)?.[0];

			const mockReq = { method: 'POST' } as Request;
			const mockRes = { header: jest.fn() } as any as Response;
			const mockNext = jest.fn();

			corsMiddleware(mockReq, mockRes, mockNext);

			expect(mockNext).toHaveBeenCalled();
		});

		it('should handle successful MCP requests', async () => {
			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			// Get the POST handler
			const postHandler = mockApp.post.mock.calls[0][1];

			const mockReq = { body: { test: 'data' } } as Request;
			const mockRes = { 
				on: jest.fn(),
				headersSent: false 
			} as any as Response;

			await postHandler(mockReq, mockRes);

			expect(mockGetServer).toHaveBeenCalled();
			expect(mockMcpServer.connect).toHaveBeenCalledWith(mockStreamableTransport);
			expect(mockStreamableTransport.handleRequest).toHaveBeenCalledWith(mockReq, mockRes, mockReq.body);
		});

		it('should handle request close events', async () => {
			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			const postHandler = mockApp.post.mock.calls[0][1];
			const mockReq = { body: {} } as Request;
			const mockRes = { 
				on: jest.fn(),
				headersSent: false 
			} as any as Response;

			await postHandler(mockReq, mockRes);

			// Get the close event handler
			const closeHandler = mockRes.on.mock.calls.find(call => call[0] === 'close')?.[1];
			expect(closeHandler).toBeDefined();

			// Trigger close event
			closeHandler();

			expect(consoleLogSpy).toHaveBeenCalledWith('Request closed');
			expect(mockStreamableTransport.close).toHaveBeenCalled();
			expect(mockMcpServer.close).toHaveBeenCalled();
		});

		it('should handle MCP request errors', async () => {
			const testError = new Error('MCP error');
			mockGetServer.mockRejectedValue(testError);

			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			const postHandler = mockApp.post.mock.calls[0][1];
			const mockReq = { body: {} } as Request;
			const mockRes = { 
				on: jest.fn(),
				headersSent: false,
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			} as any as Response;

			await postHandler(mockReq, mockRes);

			expect(consoleErrorSpy).toHaveBeenCalledWith('Error handling MCP request:', testError);
			expect(mockRes.status).toHaveBeenCalledWith(500);
			expect(mockRes.json).toHaveBeenCalledWith({
				jsonrpc: '2.0',
				error: {
					code: -32603,
					message: 'Internal server error'
				},
				id: null
			});
		});

		it('should not send error response if headers already sent', async () => {
			const testError = new Error('MCP error');
			mockGetServer.mockRejectedValue(testError);

			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			const postHandler = mockApp.post.mock.calls[0][1];
			const mockReq = { body: {} } as Request;
			const mockRes = { 
				on: jest.fn(),
				headersSent: true,
				status: jest.fn(),
				json: jest.fn()
			} as any as Response;

			await postHandler(mockReq, mockRes);

			expect(consoleErrorSpy).toHaveBeenCalledWith('Error handling MCP request:', testError);
			expect(mockRes.status).not.toHaveBeenCalled();
			expect(mockRes.json).not.toHaveBeenCalled();
		});

		it('should log server ready message', () => {
			const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

			// Mock the listen method to accept a callback as the third parameter
			mockApp.listen.mockImplementation((port, host, callback) => {
				if (typeof callback === 'function') {
					callback();
				}
				return mockServer;
			});

			const transport = new StreamableHttpTransport(3000, '0.0.0.0', '/test');
			transport.start();

			expect(consoleErrorSpy).toHaveBeenCalledWith('MCP Server ready (streamable-http transport on 0.0.0.0:3000/test)');
		});

		it('should handle server startup errors', async () => {
			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			// Get the error handler
			const errorHandler = mockServer.on.mock.calls.find(call => call[0] === 'error')?.[1];
			const testError = new Error('Server startup error');

			errorHandler(testError);

			expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting server:', testError);
		});
	});

	describe('stop', () => {
		it('should stop server successfully', async () => {
			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			const closeCallback = jest.fn();
			mockServer.close.mockImplementation((callback) => callback());

			await transport.stop();

			expect(mockServer.close).toHaveBeenCalledWith(expect.any(Function));
		});

		it('should resolve immediately if no server', async () => {
			const transport = new StreamableHttpTransport();
			// Don't call start(), so server remains undefined
			await expect(transport.stop()).resolves.toBeUndefined();
		});

		it('should resolve immediately if server is null', async () => {
			const transport = new StreamableHttpTransport();
			transport.start();
			// Manually set server to null to test the else branch
			(transport as any).server = null;
			await expect(transport.stop()).resolves.toBeUndefined();
		});

		it('should handle server becoming null during stop process', async () => {
			const transport = new StreamableHttpTransport();
			transport.start();
			
			// Mock the server to become null after the outer if check but before inner if check
			const originalServer = (transport as any).server;
			let callCount = 0;
			Object.defineProperty(transport, 'server', {
				get: () => {
					callCount++;
					// First call (outer if) returns server, second call (inner if) returns null
					return callCount === 1 ? originalServer : null;
				},
				set: (value) => {
					// Allow setting to undefined in the callback
				},
				configurable: true
			});

			await expect(transport.stop()).resolves.toBeUndefined();
		});

		it('should handle server close with undefined server in callback', async () => {
			const transport = new StreamableHttpTransport();
			await transport.start({ mock: 'server' });

			// Mock server.close to call callback after server is set to undefined
			mockServer.close.mockImplementation((callback) => {
				// Simulate server being undefined in the callback
				(transport as any).server = undefined;
				callback();
			});

			await transport.stop();

			expect(mockServer.close).toHaveBeenCalled();
		});
	});
});

import { jest } from '@jest/globals';
import type { Request, Response } from 'express';
import type { Server } from 'node:http';

// Mock dependencies
jest.mock('express', () => {
	const mockApp = {
		use: jest.fn(),
		options: jest.fn(),
		get: jest.fn(),
		post: jest.fn(),
		listen: jest.fn()
	};
	const express = jest.fn(() => mockApp);
	express.json = jest.fn();
	return express;
});

jest.mock('../../../server/transport/security.js', () => ({
	createCorsMiddleware: jest.fn(() => 'cors-middleware'),
	validateSecurityConfig: jest.fn()
}));

jest.mock('@modelcontextprotocol/sdk/server/sse.js', () => ({
	SSEServerTransport: jest.fn()
}));

describe('HttpSseTransport', () => {
	let HttpSseTransport: any;
	let mockExpress: jest.MockedFunction<any>;
	let mockApp: any;
	let mockServer: any;
	let mockCreateCorsMiddleware: jest.MockedFunction<any>;
	let mockValidateSecurityConfig: jest.MockedFunction<any>;
	let mockSSEServerTransport: jest.MockedFunction<any>;
	let mockTransport: any;
	let mockMcpServer: any;
	let consoleErrorSpy: jest.SpyInstance;

	beforeEach(async () => {
		jest.clearAllMocks();

		// Import mocked modules
		const expressModule = await import('express');
		const securityModule = await import('../../../server/transport/security.js');
		const { SSEServerTransport } = await import('@modelcontextprotocol/sdk/server/sse.js');

		mockExpress = expressModule.default as jest.MockedFunction<any>;
		mockCreateCorsMiddleware = securityModule.createCorsMiddleware as jest.MockedFunction<any>;
		mockValidateSecurityConfig = securityModule.validateSecurityConfig as jest.MockedFunction<any>;
		mockSSEServerTransport = SSEServerTransport as jest.MockedFunction<any>;

		// Setup mock objects
		mockApp = {
			use: jest.fn(),
			options: jest.fn(),
			get: jest.fn(),
			post: jest.fn(),
			listen: jest.fn()
		};

		mockServer = {
			on: jest.fn(),
			close: jest.fn()
		};

		mockTransport = {
			handleMessage: jest.fn()
		};

		mockMcpServer = {
			connect: jest.fn()
		};

		// Configure mocks
		mockExpress.mockReturnValue(mockApp);
		mockExpress.json = jest.fn().mockReturnValue('json-middleware');
		mockCreateCorsMiddleware.mockReturnValue('cors-middleware');
		mockSSEServerTransport.mockImplementation(() => mockTransport);

		// Import the class after mocks are set up
		const { HttpSseTransport: ImportedHttpSseTransport } = await import('../../../server/transport/http-sse.js');
		HttpSseTransport = ImportedHttpSseTransport;

		// Spy on console.error
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
	});

	describe('Constructor', () => {
		it('should initialize with http-sse mode', () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			expect(transport.mode).toBe('http-sse');
		});

		it('should create express app and setup middleware and routes', () => {
			new HttpSseTransport(3000, 'localhost', '/sse');
			
			expect(mockExpress).toHaveBeenCalled();
			expect(mockApp.use).toHaveBeenCalledWith('json-middleware');
			expect(mockCreateCorsMiddleware).toHaveBeenCalled();
			expect(mockApp.use).toHaveBeenCalledWith('cors-middleware');
			expect(mockApp.get).toHaveBeenCalledWith('/health', expect.any(Function));
			expect(mockApp.get).toHaveBeenCalledWith('/sse', expect.any(Function));
			expect(mockApp.post).toHaveBeenCalledWith('/sse/message', expect.any(Function));
		});
	});

	describe('Health endpoint', () => {
		it('should respond with status ok', () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			const mockReq = {};
			const mockRes = { json: jest.fn() };
			
			// Get the health endpoint handler
			const healthHandler = mockApp.get.mock.calls.find(call => call[0] === '/health')[1];
			healthHandler(mockReq, mockRes);
			
			expect(mockRes.json).toHaveBeenCalledWith({
				status: 'ok',
				timestamp: expect.any(String)
			});
		});
	});

	describe('SSE endpoint', () => {
		it('should create SSE transport and connect to MCP server', () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Mock MCP server
			(transport as any).mcpServer = mockMcpServer;
			
			const mockReq = { 
				ip: '127.0.0.1',
				on: jest.fn()
			};
			const mockRes = {};
			
			// Get the SSE endpoint handler
			const sseHandler = mockApp.get.mock.calls.find(call => call[0] === '/sse')[1];
			sseHandler(mockReq, mockRes);
			
			expect(consoleErrorSpy).toHaveBeenCalledWith('SSE connection from 127.0.0.1');
			expect(mockMcpServer.connect).toHaveBeenCalledWith(mockTransport);
			expect(mockReq.on).toHaveBeenCalledWith('close', expect.any(Function));
		});

		it('should handle connection without MCP server', () => {
			new HttpSseTransport(3000, 'localhost', '/sse');
			
			const mockReq = { 
				ip: '127.0.0.1',
				on: jest.fn()
			};
			const mockRes = {};
			
			// Get the SSE endpoint handler
			const sseHandler = mockApp.get.mock.calls.find(call => call[0] === '/sse')[1];
			sseHandler(mockReq, mockRes);
			
			expect(consoleErrorSpy).toHaveBeenCalledWith('SSE connection from 127.0.0.1');
			expect(mockMcpServer.connect).not.toHaveBeenCalled();
		});

		it('should clean up connection on close', () => {
			new HttpSseTransport(3000, 'localhost', '/sse');
			
			const mockReq = { 
				ip: '127.0.0.1',
				on: jest.fn()
			};
			const mockRes = {};
			
			// Get the SSE endpoint handler
			const sseHandler = mockApp.get.mock.calls.find(call => call[0] === '/sse')[1];
			sseHandler(mockReq, mockRes);
			
			// Get the close handler
			const closeHandler = mockReq.on.mock.calls.find(call => call[0] === 'close')[1];
			closeHandler();
			
			expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringMatching(/SSE connection closed for session \d+/));
		});
	});

	describe('Message endpoint', () => {
		it('should handle message with active transport', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Add a connection to the transport
			(transport as any).connections.set('test-session', mockTransport);
			
			const mockReq = { body: { test: 'message' } };
			const mockRes = { 
				status: jest.fn().mockReturnThis(),
				end: jest.fn(),
				json: jest.fn()
			};
			
			// Get the message endpoint handler
			const messageHandler = mockApp.post.mock.calls.find(call => call[0] === '/sse/message')[1];
			await messageHandler(mockReq, mockRes);
			
			expect(mockTransport.handleMessage).toHaveBeenCalledWith({ test: 'message' });
			expect(mockRes.status).toHaveBeenCalledWith(200);
			expect(mockRes.end).toHaveBeenCalled();
		});

		it('should return 404 when no active transport', async () => {
			new HttpSseTransport(3000, 'localhost', '/sse');
			
			const mockReq = { body: { test: 'message' } };
			const mockRes = { 
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			
			// Get the message endpoint handler
			const messageHandler = mockApp.post.mock.calls.find(call => call[0] === '/sse/message')[1];
			await messageHandler(mockReq, mockRes);
			
			expect(mockRes.status).toHaveBeenCalledWith(404);
			expect(mockRes.json).toHaveBeenCalledWith({ error: 'No active SSE connection' });
		});

		it('should handle transport errors', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Add a connection that will throw an error
			mockTransport.handleMessage.mockRejectedValue(new Error('Transport error'));
			(transport as any).connections.set('test-session', mockTransport);
			
			const mockReq = { body: { test: 'message' } };
			const mockRes = { 
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			
			// Get the message endpoint handler
			const messageHandler = mockApp.post.mock.calls.find(call => call[0] === '/sse/message')[1];
			await messageHandler(mockReq, mockRes);
			
			expect(consoleErrorSpy).toHaveBeenCalledWith('Error handling message:', expect.any(Error));
			expect(mockRes.status).toHaveBeenCalledWith(500);
			expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal server error' });
		});
	});

	describe('start', () => {
		it('should start server and resolve on success', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Mock successful server start
			mockApp.listen.mockImplementation((port, host, callback) => {
				callback();
				return mockServer;
			});
			
			await transport.start(mockMcpServer);
			
			expect(mockApp.listen).toHaveBeenCalledWith(3000, 'localhost', expect.any(Function));
			expect(consoleErrorSpy).toHaveBeenCalledWith('MCP Server ready (http-sse transport on localhost:3000/sse)');
			expect(mockServer.on).toHaveBeenCalledWith('error', expect.any(Function));
		});

		it('should reject on server error', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			const testError = new Error('Server start error');
			
			// Mock server error during start
			mockApp.listen.mockImplementation(() => {
				return mockServer;
			});
			
			const startPromise = transport.start(mockMcpServer);
			
			// Trigger the error handler
			const errorHandler = mockServer.on.mock.calls.find(call => call[0] === 'error')[1];
			errorHandler(testError);
			
			await expect(startPromise).rejects.toThrow('Server start error');
			expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting server:', testError);
		});

		it('should setup process signal handlers', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			const processOnSpy = jest.spyOn(process, 'on').mockImplementation();
			
			mockApp.listen.mockImplementation((port, host, callback) => {
				callback();
				return mockServer;
			});
			
			await transport.start(mockMcpServer);
			
			expect(processOnSpy).toHaveBeenCalledWith('SIGINT', expect.any(Function));
			expect(processOnSpy).toHaveBeenCalledWith('SIGTERM', expect.any(Function));
			
			processOnSpy.mockRestore();
		});

		it('should handle cleanup on SIGINT', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			const processOnSpy = jest.spyOn(process, 'on').mockImplementation();
			
			mockApp.listen.mockImplementation((port, host, callback) => {
				callback();
				return mockServer;
			});
			
			await transport.start(mockMcpServer);
			
			// Get the SIGINT handler
			const sigintHandler = processOnSpy.mock.calls.find(call => call[0] === 'SIGINT')[1];
			sigintHandler();
			
			expect(consoleErrorSpy).toHaveBeenCalledWith('Shutting down HTTP SSE server...');
			expect(mockServer.close).toHaveBeenCalled();
			
			processOnSpy.mockRestore();
		});

		it('should handle cleanup when httpServer is null', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			const processOnSpy = jest.spyOn(process, 'on').mockImplementation();
			
			// Don't start the server, so httpServer remains null
			
			// Get the SIGINT handler by calling start but without actually starting
			mockApp.listen.mockImplementation((port, host, callback) => {
				callback();
				return mockServer;
			});
			
			await transport.start(mockMcpServer);
			
			// Manually set httpServer to null to test the branch
			(transport as any).httpServer = null;
			
			// Get the SIGINT handler
			const sigintHandler = processOnSpy.mock.calls.find(call => call[0] === 'SIGINT')[1];
			sigintHandler();
			
			expect(consoleErrorSpy).toHaveBeenCalledWith('Shutting down HTTP SSE server...');
			// Should not attempt to close server when it's null
			expect(mockServer.close).not.toHaveBeenCalled();
			
			processOnSpy.mockRestore();
		});
	});

	describe('stop', () => {
		it('should close server and resolve', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Set up server
			(transport as any).httpServer = mockServer;
			mockServer.close.mockImplementation((callback) => {
				callback();
			});
			
			await transport.stop();
			
			expect(mockServer.close).toHaveBeenCalledWith(expect.any(Function));
			expect(consoleErrorSpy).toHaveBeenCalledWith('HTTP SSE server stopped');
		});

		it('should resolve immediately if no server', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			await transport.stop();
			
			expect(mockServer.close).not.toHaveBeenCalled();
		});

		it('should handle server close without callback', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Set up server that doesn't call callback
			(transport as any).httpServer = mockServer;
			mockServer.close.mockImplementation(() => {
				// Don't call callback
			});
			
			// This should still resolve due to the promise structure
			const stopPromise = transport.stop();
			
			// Manually trigger callback to test the path
			const closeCallback = mockServer.close.mock.calls[0][0];
			closeCallback();
			
			await stopPromise;
			expect(consoleErrorSpy).toHaveBeenCalledWith('HTTP SSE server stopped');
		});
	});

	describe('integration scenarios', () => {
		it('should handle complete start-stop lifecycle', async () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			
			// Mock successful server start
			mockApp.listen.mockImplementation((port, host, callback) => {
				callback();
				return mockServer;
			});
			mockServer.close.mockImplementation((callback) => {
				callback();
			});
			
			await transport.start(mockMcpServer);
			await transport.stop();
			
			expect(mockApp.listen).toHaveBeenCalled();
			expect(mockServer.close).toHaveBeenCalled();
		});

		it('should handle multiple connections and cleanup', () => {
			const transport = new HttpSseTransport(3000, 'localhost', '/sse');
			(transport as any).mcpServer = mockMcpServer;
			
			// Mock Date.now to return different values for different connections
			const originalDateNow = Date.now;
			let callCount = 0;
			Date.now = jest.fn(() => {
				callCount++;
				return 1000 + callCount; // Return different timestamps
			});
			
			// Simulate multiple SSE connections
			const mockReq1 = { ip: '127.0.0.1', on: jest.fn() };
			const mockReq2 = { ip: '127.0.0.2', on: jest.fn() };
			const mockRes1 = {};
			const mockRes2 = {};
			
			const sseHandler = mockApp.get.mock.calls.find(call => call[0] === '/sse')[1];
			sseHandler(mockReq1, mockRes1);
			sseHandler(mockReq2, mockRes2);
			
			expect((transport as any).connections.size).toBe(2);
			
			// Close first connection
			const closeHandler1 = mockReq1.on.mock.calls.find(call => call[0] === 'close')[1];
			closeHandler1();
			
			expect((transport as any).connections.size).toBe(1);
			
			// Restore Date.now
			Date.now = originalDateNow;
		});
	});
});

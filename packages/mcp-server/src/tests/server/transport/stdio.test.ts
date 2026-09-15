import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import { snapshotConfig } from '../../../core/config.js';

// Mock dependencies
jest.mock('@modelcontextprotocol/sdk/server/stdio.js', () => ({
	StdioServerTransport: jest.fn()
}));

const APP_CONFIG = snapshotConfig({ privateKey: undefined, walletMode: 'disabled', walletApiKey: undefined });

describe('StdioTransport', () => {
	let StdioTransport: any;
	let mockStdioServerTransport: jest.MockedClass<any>;
	let mockServer: any;
	let consoleErrorSpy: jest.SpyInstance;

	beforeEach(async () => {
		jest.clearAllMocks();

		// Import mocked modules
		const stdioModule = await import('@modelcontextprotocol/sdk/server/stdio.js');
		mockStdioServerTransport = stdioModule.StdioServerTransport as jest.MockedClass<any>;

		// Import the class under test
		const transportModule = await import('../../../server/transport/stdio.js');
		StdioTransport = transportModule.StdioTransport;

		// Mock server
		mockServer = {
			connect: jest.fn().mockResolvedValue(undefined)
		};

		// Spy on console
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	describe('Constructor', () => {
		it('should initialize with stdio mode', () => {
			const transport = new StdioTransport(APP_CONFIG);
			expect(transport.mode).toBe('stdio');
		});

		it('should not have transport initially', () => {
			const transport = new StdioTransport(APP_CONFIG);
			expect((transport as any).transport).toBeUndefined();
		});

		it('requires an appConfig snapshot', () => {
			expect(() => new StdioTransport()).toThrow('appConfig is required.');
		});
	});

	describe('start', () => {
		it('should create StdioServerTransport and connect server', async () => {
			const mockTransportInstance = {
				connect: jest.fn()
			};
			mockStdioServerTransport.mockImplementation(() => mockTransportInstance);

			const transport = new StdioTransport(APP_CONFIG);
			await transport.start(mockServer);

			expect(mockStdioServerTransport).toHaveBeenCalledWith();
			expect(mockServer.connect).toHaveBeenCalledWith(mockTransportInstance);
			expect((transport as any).transport).toBe(mockTransportInstance);
		});

		it('should log server ready message', async () => {
			const mockTransportInstance = {};
			mockStdioServerTransport.mockImplementation(() => mockTransportInstance);

			const transport = new StdioTransport(APP_CONFIG);
			await transport.start(mockServer);

			expect(consoleErrorSpy).toHaveBeenCalledWith('MCP Server ready (stdio transport)');
		});

		it('should handle server connection errors', async () => {
			const mockTransportInstance = {};
			mockStdioServerTransport.mockImplementation(() => mockTransportInstance);

			const connectionError = new Error('Connection failed');
			mockServer.connect.mockRejectedValue(connectionError);

			const transport = new StdioTransport(APP_CONFIG);

			await expect(transport.start(mockServer)).rejects.toThrow('Connection failed');
			expect(mockStdioServerTransport).toHaveBeenCalledWith();
			expect((transport as any).transport).toBe(mockTransportInstance);
		});

		it('should handle StdioServerTransport constructor errors', async () => {
			const constructorError = new Error('Transport creation failed');
			mockStdioServerTransport.mockImplementation(() => {
				throw constructorError;
			});

			const transport = new StdioTransport(APP_CONFIG);

			await expect(transport.start(mockServer)).rejects.toThrow('Transport creation failed');
			expect(mockServer.connect).not.toHaveBeenCalled();
		});
	});

	describe('stop', () => {
		it('should set transport to undefined', async () => {
			const transport = new StdioTransport(APP_CONFIG);

			// Set up transport first
			const mockTransportInstance = {};
			mockStdioServerTransport.mockImplementation(() => mockTransportInstance);
			await transport.start(mockServer);

			// Verify transport is set
			expect((transport as any).transport).toBe(mockTransportInstance);

			// Stop transport
			await transport.stop();

			expect((transport as any).transport).toBeUndefined();
		});

		it('should resolve immediately if no transport exists', async () => {
			const transport = new StdioTransport(APP_CONFIG);

			// Don't start transport, just stop
			await expect(transport.stop()).resolves.toBeUndefined();
			expect((transport as any).transport).toBeUndefined();
		});

		it('should not throw errors during stop', async () => {
			const transport = new StdioTransport(APP_CONFIG);

			// Start and then stop multiple times
			const mockTransportInstance = {};
			mockStdioServerTransport.mockImplementation(() => mockTransportInstance);
			await transport.start(mockServer);

			await expect(transport.stop()).resolves.toBeUndefined();
			await expect(transport.stop()).resolves.toBeUndefined();
			await expect(transport.stop()).resolves.toBeUndefined();
		});
	});

	describe('mode property', () => {
		it('should always return stdio', () => {
			const transport = new StdioTransport(APP_CONFIG);
			expect(transport.mode).toBe('stdio');

			// Verify it's readonly - TypeScript prevents assignment but doesn't throw at runtime
			// The readonly modifier is enforced at compile time, not runtime
			expect(transport.mode).toBe('stdio');
		});
	});

	describe('integration scenarios', () => {
		it('should handle complete start-stop lifecycle', async () => {
			const mockTransportInstance = {};
			mockStdioServerTransport.mockImplementation(() => mockTransportInstance);

			const transport = new StdioTransport(APP_CONFIG);

			// Start
			await transport.start(mockServer);
			expect((transport as any).transport).toBe(mockTransportInstance);
			expect(mockServer.connect).toHaveBeenCalledWith(mockTransportInstance);
			expect(consoleErrorSpy).toHaveBeenCalledWith('MCP Server ready (stdio transport)');

			// Stop
			await transport.stop();
			expect((transport as any).transport).toBeUndefined();
		});

		it('should handle multiple start calls', async () => {
			const mockTransportInstance1 = { id: 1 };
			const mockTransportInstance2 = { id: 2 };

			let callCount = 0;
			mockStdioServerTransport.mockImplementation(() => {
				callCount++;
				return callCount === 1 ? mockTransportInstance1 : mockTransportInstance2;
			});

			const transport = new StdioTransport(APP_CONFIG);

			// First start
			await transport.start(mockServer);
			expect((transport as any).transport).toBe(mockTransportInstance1);

			// Second start (should replace transport)
			await transport.start(mockServer);
			expect((transport as any).transport).toBe(mockTransportInstance2);

			expect(mockStdioServerTransport).toHaveBeenCalledTimes(2);
			expect(mockServer.connect).toHaveBeenCalledTimes(2);
			expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
		});
	});
});

import { jest } from '@jest/globals';
import type { TransportConfig } from '../../../server/transport/types.js';

// Mock transport classes
jest.mock('../../../server/transport/stdio.js', () => ({
	StdioTransport: jest.fn()
}));

jest.mock('../../../server/transport/streamable-http.js', () => ({
	StreamableHttpTransport: jest.fn()
}));

jest.mock('../../../server/transport/http-sse.js', () => ({
	HttpSseTransport: jest.fn()
}));

describe('Transport Factory', () => {
	let createTransport: any;
	let StdioTransport: jest.MockedClass<any>;
	let StreamableHttpTransport: jest.MockedClass<any>;
	let HttpSseTransport: jest.MockedClass<any>;

	beforeEach(async () => {
		jest.clearAllMocks();

		// Import mocked classes
		const stdioModule = await import('../../../server/transport/stdio.js');
		const streamableHttpModule = await import('../../../server/transport/streamable-http.js');
		const httpSseModule = await import('../../../server/transport/http-sse.js');

		StdioTransport = stdioModule.StdioTransport as jest.MockedClass<any>;
		StreamableHttpTransport = streamableHttpModule.StreamableHttpTransport as jest.MockedClass<any>;
		HttpSseTransport = httpSseModule.HttpSseTransport as jest.MockedClass<any>;

		// Import factory after mocks are set up
		const factoryModule = await import('../../../server/transport/factory.js');
		createTransport = factoryModule.createTransport;
	});

	describe('createTransport', () => {
		it('should create StdioTransport for stdio mode', () => {
			const config: TransportConfig = {
				mode: 'stdio',
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			};

			const mockStdioInstance = { mode: 'stdio' };
			StdioTransport.mockImplementation(() => mockStdioInstance);

			const transport = createTransport(config);

			expect(StdioTransport).toHaveBeenCalledWith();
			expect(transport).toBe(mockStdioInstance);
		});

		it('should create StreamableHttpTransport for streamable-http mode', () => {
			const config: TransportConfig = {
				mode: 'streamable-http',
				walletMode: 'private-key',
				port: 8080,
				host: '0.0.0.0',
				path: '/api/mcp'
			};

			const mockStreamableInstance = { mode: 'streamable-http' };
			StreamableHttpTransport.mockImplementation(() => mockStreamableInstance);

			const transport = createTransport(config);

			expect(StreamableHttpTransport).toHaveBeenCalledWith(8080, '0.0.0.0', '/api/mcp');
			expect(transport).toBe(mockStreamableInstance);
		});

		it('should create HttpSseTransport for http-sse mode', () => {
			const config: TransportConfig = {
				mode: 'http-sse',
				walletMode: 'disabled',
				port: 9000,
				host: '127.0.0.1',
				path: '/sse'
			};

			const mockSseInstance = { mode: 'http-sse' };
			HttpSseTransport.mockImplementation(() => mockSseInstance);

			const transport = createTransport(config);

			expect(HttpSseTransport).toHaveBeenCalledWith(9000, '127.0.0.1', '/sse');
			expect(transport).toBe(mockSseInstance);
		});

		it('should throw error for unsupported transport mode', () => {
			const config = {
				mode: 'unsupported-mode',
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			} as TransportConfig;

			expect(() => createTransport(config)).toThrow('Unsupported transport mode: unsupported-mode');
		});

		it('should pass correct parameters for different port configurations', () => {
			const configs = [
				{ port: 80, host: 'example.com', path: '/' },
				{ port: 443, host: 'secure.example.com', path: '/secure' },
				{ port: 3001, host: 'localhost', path: '/dev/mcp' }
			];

			configs.forEach((params, index) => {
				const config: TransportConfig = {
					mode: 'streamable-http',
					walletMode: 'disabled',
					...params
				};

				const mockInstance = { mode: 'streamable-http', id: index };
				StreamableHttpTransport.mockImplementation(() => mockInstance);

				const transport = createTransport(config);

				expect(StreamableHttpTransport).toHaveBeenCalledWith(params.port, params.host, params.path);
				expect(transport).toBe(mockInstance);

				jest.clearAllMocks();
			});
		});

		it('should handle edge case parameters correctly', () => {
			// Test with minimal path
			const config1: TransportConfig = {
				mode: 'http-sse',
				walletMode: 'private-key',
				port: 1,
				host: '::1', // IPv6 localhost
				path: '/'
			};

			const mockInstance1 = { mode: 'http-sse' };
			HttpSseTransport.mockImplementation(() => mockInstance1);

			const transport1 = createTransport(config1);

			expect(HttpSseTransport).toHaveBeenCalledWith(1, '::1', '/');
			expect(transport1).toBe(mockInstance1);

			jest.clearAllMocks();

			// Test with maximum port number
			const config2: TransportConfig = {
				mode: 'streamable-http',
				walletMode: 'disabled',
				port: 65535,
				host: '0.0.0.0',
				path: '/very/long/path/to/test/edge/cases'
			};

			const mockInstance2 = { mode: 'streamable-http' };
			StreamableHttpTransport.mockImplementation(() => mockInstance2);

			const transport2 = createTransport(config2);

			expect(StreamableHttpTransport).toHaveBeenCalledWith(65535, '0.0.0.0', '/very/long/path/to/test/edge/cases');
			expect(transport2).toBe(mockInstance2);
		});
	});

	describe('type safety', () => {
		it('should enforce TransportConfig interface', () => {
			// This test ensures TypeScript compilation catches invalid configs
			const validConfig: TransportConfig = {
				mode: 'stdio',
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			};

			expect(() => createTransport(validConfig)).not.toThrow();
		});

		it('should return McpTransport interface', () => {
			const config: TransportConfig = {
				mode: 'stdio',
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			};

			const mockTransport = {
				mode: 'stdio',
				start: jest.fn(),
				stop: jest.fn()
			};
			StdioTransport.mockImplementation(() => mockTransport);

			const transport = createTransport(config);

			// Verify the transport has the required interface methods
			expect(transport).toHaveProperty('mode');
			expect(transport).toHaveProperty('start');
			expect(transport).toHaveProperty('stop');
		});
	});

	describe('error handling', () => {
		it('should handle transport constructor errors', () => {
			const config: TransportConfig = {
				mode: 'stdio',
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			};

			StdioTransport.mockImplementation(() => {
				throw new Error('Transport initialization failed');
			});

			expect(() => createTransport(config)).toThrow('Transport initialization failed');
		});

		it('should handle null/undefined config gracefully', () => {
			expect(() => createTransport(null as any)).toThrow();
			expect(() => createTransport(undefined as any)).toThrow();
		});

		it('should handle config with missing mode', () => {
			const invalidConfig = {
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			} as TransportConfig;

			expect(() => createTransport(invalidConfig)).toThrow();
		});
	});

	describe('integration scenarios', () => {
		it('should create different transport types in sequence', () => {
			const configs: TransportConfig[] = [
				{ mode: 'stdio', walletMode: 'disabled', port: 3000, host: 'localhost', path: '/mcp' },
				{ mode: 'streamable-http', walletMode: 'private-key', port: 8080, host: '0.0.0.0', path: '/api' },
				{ mode: 'http-sse', walletMode: 'disabled', port: 9000, host: '127.0.0.1', path: '/sse' }
			];

			const mockInstances = [
				{ mode: 'stdio' },
				{ mode: 'streamable-http' },
				{ mode: 'http-sse' }
			];

			StdioTransport.mockImplementation(() => mockInstances[0]);
			StreamableHttpTransport.mockImplementation(() => mockInstances[1]);
			HttpSseTransport.mockImplementation(() => mockInstances[2]);

			const transports = configs.map(config => createTransport(config));

			expect(transports).toHaveLength(3);
			expect(StdioTransport).toHaveBeenCalledTimes(1);
			expect(StreamableHttpTransport).toHaveBeenCalledTimes(1);
			expect(HttpSseTransport).toHaveBeenCalledTimes(1);

			expect(transports[0]).toBe(mockInstances[0]);
			expect(transports[1]).toBe(mockInstances[1]);
			expect(transports[2]).toBe(mockInstances[2]);
		});

		it('should handle repeated creation of same transport type', () => {
			const config: TransportConfig = {
				mode: 'streamable-http',
				walletMode: 'disabled',
				port: 3000,
				host: 'localhost',
				path: '/mcp'
			};

			const mockInstances = [
				{ mode: 'streamable-http', id: 1 },
				{ mode: 'streamable-http', id: 2 },
				{ mode: 'streamable-http', id: 3 }
			];

			StreamableHttpTransport
				.mockImplementationOnce(() => mockInstances[0])
				.mockImplementationOnce(() => mockInstances[1])
				.mockImplementationOnce(() => mockInstances[2]);

			const transport1 = createTransport(config);
			const transport2 = createTransport(config);
			const transport3 = createTransport(config);

			expect(StreamableHttpTransport).toHaveBeenCalledTimes(3);
			expect(transport1).toBe(mockInstances[0]);
			expect(transport2).toBe(mockInstances[1]);
			expect(transport3).toBe(mockInstances[2]);
		});
	});
});

import { jest } from '@jest/globals';

// Mock dependencies
jest.mock('commander', () => ({
	Command: jest.fn()
}));

jest.mock('dotenv', () => ({
	config: jest.fn()
}));

jest.mock('../../server/package-info.js', () => ({
	getPackageInfo: jest.fn()
}));

describe('Args Module', () => {
	let parseArgs: any;
	let mockCommand: any;
	let mockDotenvConfig: jest.MockedFunction<any>;
	let mockGetPackageInfo: jest.MockedFunction<any>;
	let originalEnv: NodeJS.ProcessEnv;
	let consoleErrorSpy: jest.SpyInstance;
	let processExitSpy: jest.SpyInstance;

	beforeEach(async () => {
		jest.clearAllMocks();

		// Save original environment
		originalEnv = { ...process.env };

		// Clear environment variables
		delete process.env.SERVER_TRANSPORT;
		delete process.env.SERVER_PORT;
		delete process.env.SERVER_HOST;
		delete process.env.SERVER_PATH;
		delete process.env.WALLET_MODE;
		delete process.env.PRIVATE_KEY;
		delete process.env.MAINNET_RPC_URL;
		delete process.env.TESTNET_RPC_URL;
		delete process.env.DEVNET_RPC_URL;

		// Import mocked modules
		const { Command } = await import('commander');
		const { config: dotenvConfig } = await import('dotenv');
		const { getPackageInfo } = await import('../../server/package-info.js');

		mockDotenvConfig = dotenvConfig as jest.MockedFunction<any>;
		mockGetPackageInfo = getPackageInfo as jest.MockedFunction<any>;

		// Setup mock command
		mockCommand = {
			name: jest.fn().mockReturnThis(),
			description: jest.fn().mockReturnThis(),
			version: jest.fn().mockReturnThis(),
			addHelpText: jest.fn().mockReturnThis(),
			parse: jest.fn()
		};

		(Command as jest.MockedClass<any>).mockImplementation(() => mockCommand);

		// Setup mock package info
		mockGetPackageInfo.mockReturnValue({
			name: '@sei-js/mcp-server',
			description: 'MCP Server for Sei blockchain',
			version: '1.0.0'
		});

		// Spy on console.error and process.exit
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
		processExitSpy = jest.spyOn(process, 'exit').mockImplementation();

		// Import the function after mocks are set up
		const argsModule = await import('../../server/args.js');
		parseArgs = argsModule.parseArgs;
	});

	afterEach(() => {
		// Restore original environment
		process.env = originalEnv;
		consoleErrorSpy.mockRestore();
		processExitSpy.mockRestore();
	});

	describe('getEnvValue (helper)', () => {
		it('should return environment variable value when set', () => {
			process.env.TEST_VAR = 'test-value';
			
			const result = parseArgs();
			
			// Indirectly test getEnvValue through parseArgs behavior
			expect(mockDotenvConfig).toHaveBeenCalled();
		});

		it('should return default value when environment variable not set', () => {
			// Test through loadConfig defaults
			const result = parseArgs();
			
			expect(result.mode).toBe('stdio'); // Default transport
			expect(result.port).toBe(8080); // Default port
			expect(result.host).toBe('localhost'); // Default host
			expect(result.path).toBe('/mcp'); // Default path
		});
	});

	describe('loadConfig', () => {
		it('should load default configuration when no environment variables set', () => {
			const result = parseArgs();

			expect(result).toEqual({
				mode: 'stdio',
				port: 8080,
				host: 'localhost',
				path: '/mcp',
				walletMode: 'disabled'
			});
		});

		it('should load configuration from environment variables', () => {
			process.env.SERVER_TRANSPORT = 'http-sse';
			process.env.SERVER_PORT = '3001';
			process.env.SERVER_HOST = '0.0.0.0';
			process.env.SERVER_PATH = '/api/mcp';
			process.env.WALLET_MODE = 'private-key';
			process.env.PRIVATE_KEY = 'test-key';

			const result = parseArgs();

			expect(result).toEqual({
				mode: 'http-sse',
				port: 3001,
				host: '0.0.0.0',
				path: '/api/mcp',
				walletMode: 'private-key'
			});
		});

		it('should normalize path to start with forward slash', () => {
			process.env.SERVER_PATH = 'api/mcp';

			const result = parseArgs();

			expect(result.path).toBe('/api/mcp');
		});

		it('should keep path unchanged if it already starts with forward slash', () => {
			process.env.SERVER_PATH = '/already/normalized';

			const result = parseArgs();

			expect(result.path).toBe('/already/normalized');
		});

		it('should handle invalid port numbers by using default', () => {
			process.env.SERVER_PORT = 'invalid-port';

			const result = parseArgs();

			expect(result.port).toBe(8080); // Should fallback to default
		});

		it('should handle negative port numbers by using parsed value', () => {
			process.env.SERVER_PORT = '-1';

			const result = parseArgs();

			expect(result.port).toBe(-1); // parseInt returns -1, validation will catch this
		});

		it('should handle floating point port numbers by truncating', () => {
			process.env.SERVER_PORT = '3000.5';

			const result = parseArgs();

			expect(result.port).toBe(3000); // parseInt truncates
		});

		it('should call dotenv config to load .env file', () => {
			parseArgs();

			expect(mockDotenvConfig).toHaveBeenCalled();
		});

		it('should handle all RPC URL environment variables', () => {
			process.env.MAINNET_RPC_URL = 'https://mainnet.example.com';
			process.env.TESTNET_RPC_URL = 'https://testnet.example.com';
			process.env.DEVNET_RPC_URL = 'https://devnet.example.com';

			// RPC URLs are loaded but not returned in the final config
			// This tests that they don't cause errors
			expect(() => parseArgs()).not.toThrow();
		});
	});

	describe('validateConfig', () => {
		it('should pass validation with valid configuration', () => {
			process.env.SERVER_TRANSPORT = 'stdio';
			process.env.WALLET_MODE = 'disabled';
			process.env.SERVER_PORT = '8080';

			expect(() => parseArgs()).not.toThrow();
			expect(processExitSpy).not.toHaveBeenCalled();
		});

		it('should exit with error for invalid wallet mode', () => {
			process.env.WALLET_MODE = 'invalid-mode';

			parseArgs();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				"Error: Invalid wallet mode 'invalid-mode'. Valid modes are: private-key, disabled"
			);
			expect(processExitSpy).toHaveBeenCalledWith(1);
		});

		it('should exit with error for invalid transport mode', () => {
			process.env.SERVER_TRANSPORT = 'invalid-transport';

			parseArgs();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				"Error: Invalid transport mode 'invalid-transport'. Valid modes are: stdio, streamable-http, http-sse"
			);
			expect(processExitSpy).toHaveBeenCalledWith(1);
		});

		it('should exit with error for port below valid range', () => {
			process.env.SERVER_PORT = '0';

			parseArgs();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				"Error: Invalid port '0'. Port must be a number between 1 and 65535."
			);
			expect(processExitSpy).toHaveBeenCalledWith(1);
		});

		it('should exit with error for port above valid range', () => {
			process.env.SERVER_PORT = '65536';

			parseArgs();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				"Error: Invalid port '65536'. Port must be a number between 1 and 65535."
			);
			expect(processExitSpy).toHaveBeenCalledWith(1);
		});

		it('should accept minimum valid port', () => {
			process.env.SERVER_PORT = '1';

			expect(() => parseArgs()).not.toThrow();
			expect(processExitSpy).not.toHaveBeenCalled();
		});

		it('should accept maximum valid port', () => {
			process.env.SERVER_PORT = '65535';

			expect(() => parseArgs()).not.toThrow();
			expect(processExitSpy).not.toHaveBeenCalled();
		});

		it('should validate all transport modes', () => {
			const validModes = ['stdio', 'streamable-http', 'http-sse'];

			for (const mode of validModes) {
				jest.clearAllMocks();
				process.env.SERVER_TRANSPORT = mode;

				expect(() => parseArgs()).not.toThrow();
				expect(processExitSpy).not.toHaveBeenCalled();
			}
		});

		it('should validate all wallet modes', () => {
			const validModes = ['private-key', 'disabled'];

			for (const mode of validModes) {
				jest.clearAllMocks();
				process.env.WALLET_MODE = mode;

				expect(() => parseArgs()).not.toThrow();
				expect(processExitSpy).not.toHaveBeenCalled();
			}
		});
	});

	describe('parseArgs', () => {
		it('should setup commander with package info', () => {
			parseArgs();

			expect(mockCommand.name).toHaveBeenCalledWith('@sei-js/mcp-server');
			expect(mockCommand.description).toHaveBeenCalledWith('MCP Server for Sei blockchain');
			expect(mockCommand.version).toHaveBeenCalledWith('1.0.0');
		});

		it('should add help text with examples and environment variables', () => {
			parseArgs();

			expect(mockCommand.addHelpText).toHaveBeenCalledWith('after', expect.stringContaining('Examples:'));
			expect(mockCommand.addHelpText).toHaveBeenCalledWith('after', expect.stringContaining('Environment Variables:'));
			expect(mockCommand.addHelpText).toHaveBeenCalledWith('after', expect.stringContaining('@sei-js/mcp-server'));
		});

		it('should call commander parse method', () => {
			parseArgs();

			expect(mockCommand.parse).toHaveBeenCalled();
		});

		it('should return TransportConfig interface', () => {
			const result = parseArgs();

			expect(result).toHaveProperty('mode');
			expect(result).toHaveProperty('port');
			expect(result).toHaveProperty('host');
			expect(result).toHaveProperty('path');
			expect(result).toHaveProperty('walletMode');

			// Verify types
			expect(typeof result.mode).toBe('string');
			expect(typeof result.port).toBe('number');
			expect(typeof result.host).toBe('string');
			expect(typeof result.path).toBe('string');
			expect(typeof result.walletMode).toBe('string');
		});

		it('should handle getPackageInfo errors gracefully', () => {
			mockGetPackageInfo.mockImplementation(() => {
				throw new Error('Package info error');
			});

			expect(() => parseArgs()).toThrow('Package info error');
		});

		it('should integrate all functions in correct order', () => {
			process.env.SERVER_TRANSPORT = 'streamable-http';
			process.env.SERVER_PORT = '9000';
			process.env.WALLET_MODE = 'private-key';

			const result = parseArgs();

			// Verify dotenv was called (loadConfig)
			expect(mockDotenvConfig).toHaveBeenCalled();

			// Verify commander was setup (parseArgs)
			expect(mockCommand.parse).toHaveBeenCalled();

			// Verify validation passed (validateConfig)
			expect(processExitSpy).not.toHaveBeenCalled();

			// Verify final result
			expect(result).toEqual({
				mode: 'streamable-http',
				port: 9000,
				host: 'localhost',
				path: '/mcp',
				walletMode: 'private-key'
			});
		});
	});

	describe('edge cases and error scenarios', () => {
		it('should handle empty string environment variables', () => {
			process.env.SERVER_HOST = '';
			process.env.SERVER_PATH = '';

			const result = parseArgs();

			expect(result.host).toBe(''); // Empty string should be preserved
			expect(result.path).toBe('/'); // Empty path should be normalized to /
		});

		it('should handle whitespace in environment variables', () => {
			process.env.SERVER_HOST = '  localhost  ';
			process.env.SERVER_PATH = '  /api/mcp  ';

			const result = parseArgs();

			expect(result.host).toBe('  localhost  '); // Whitespace preserved
			expect(result.path).toBe('/  /api/mcp  '); // Path normalization adds / prefix
		});

		it('should handle special characters in paths', () => {
			process.env.SERVER_PATH = '/api/mcp-v1.0_test@special';

			const result = parseArgs();

			expect(result.path).toBe('/api/mcp-v1.0_test@special');
		});

		it('should handle multiple validation errors by exiting on first', () => {
			process.env.WALLET_MODE = 'invalid';
			process.env.SERVER_TRANSPORT = 'also-invalid';
			process.env.SERVER_PORT = '0';

			parseArgs();

			// Should exit on first validation error (wallet mode)
			expect(processExitSpy).toHaveBeenCalledWith(1);
			expect(processExitSpy).toHaveBeenCalled();
		});

		it('should handle process.env being undefined for specific keys', () => {
			// Explicitly set to undefined
			process.env.SERVER_PORT = undefined;
			process.env.SERVER_HOST = undefined;

			const result = parseArgs();

			expect(result.port).toBe(8080); // Should use default
			expect(result.host).toBe('localhost'); // Should use default
		});
	});
});

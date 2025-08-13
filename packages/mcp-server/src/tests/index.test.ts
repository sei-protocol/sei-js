import { describe, it, expect, jest, beforeEach } from '@jest/globals';

// Mock all dependencies
jest.mock('../server/server.js', () => ({
	getServer: jest.fn()
}));

jest.mock('../server/transport/index.js', () => ({
	createTransport: jest.fn()
}));

jest.mock('../core/config.js', () => ({
	isWalletEnabled: jest.fn()
}));

jest.mock('../server/args.js', () => ({
	parseArgs: jest.fn()
}));

describe('index', () => {
	let mockGetServer: jest.MockedFunction<() => Promise<unknown>>;
	let mockCreateTransport: jest.MockedFunction<(config: unknown) => unknown>;
	let mockIsWalletEnabled: jest.MockedFunction<() => boolean>;
	let mockParseArgs: jest.MockedFunction<() => unknown>;
	let mockTransport: { start: jest.Mock };
	let mockServer: unknown;
	let consoleErrorSpy: jest.SpyInstance;
	let processExitSpy: jest.SpyInstance;

	beforeEach(async () => {
		// Clear all mocks
		jest.clearAllMocks();

		// Import mocked modules
		const serverModule = await import('../server/server.js');
		const transportModule = await import('../server/transport/index.js');
		const configModule = await import('../core/config.js');
		const argsModule = await import('../server/args.js');

		mockGetServer = serverModule.getServer as jest.MockedFunction<() => Promise<unknown>>;
		mockCreateTransport = transportModule.createTransport as jest.MockedFunction<(config: unknown) => unknown>;
		mockIsWalletEnabled = configModule.isWalletEnabled as jest.MockedFunction<() => boolean>;
		mockParseArgs = argsModule.parseArgs as jest.MockedFunction<() => unknown>;

		// Setup mock objects
		mockServer = { mock: 'server' };
		mockTransport = {
			start: jest.fn().mockResolvedValue(void 0)
		};

		// Setup default mock implementations
		mockParseArgs.mockReturnValue({ transport: 'stdio' });
		mockGetServer.mockResolvedValue(mockServer);
		mockCreateTransport.mockReturnValue(mockTransport);
		mockIsWalletEnabled.mockReturnValue(true);

		// Spy on console and process
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
			throw new Error('process.exit called');
		});
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
		processExitSpy.mockRestore();
	});

	it('should start server successfully with wallet enabled', async () => {
		// Import and call the main function
		const indexModule = await import('../index.js');
		await indexModule.main();

		expect(mockParseArgs).toHaveBeenCalled();
		expect(mockGetServer).toHaveBeenCalled();
		expect(mockCreateTransport).toHaveBeenCalled();
		expect(mockTransport.start).toHaveBeenCalledWith(mockServer);
		expect(mockIsWalletEnabled).toHaveBeenCalled();
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});

	it('should log warning when wallet is disabled', async () => {
		mockIsWalletEnabled.mockReturnValue(false);

		const indexModule = await import('../index.js');
		await indexModule.main();

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			'Wallet functionality is disabled. Wallet-dependent tools will not be available.'
		);
	});

	it('should handle server startup errors', async () => {
		const testError = new Error('Server startup failed');
		mockGetServer.mockRejectedValue(testError);

		const indexModule = await import('../index.js');
		
		try {
			await indexModule.main();
		} catch (error) {
			// Expected to throw due to process.exit mock
			expect(error).toEqual(new Error('process.exit called'));
		}

		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', testError);
		expect(processExitSpy).toHaveBeenCalledWith(1);
	});

	it('should handle transport creation errors', async () => {
		const testError = new Error('Transport creation failed');
		mockCreateTransport.mockImplementation(() => {
			throw testError;
		});

		const indexModule = await import('../index.js');
		
		try {
			await indexModule.main();
		} catch (error) {
			// Expected to throw due to process.exit mock
			expect(error).toEqual(new Error('process.exit called'));
		}

		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', testError);
		expect(processExitSpy).toHaveBeenCalledWith(1);
	});

	it('should handle transport start errors', async () => {
		const testError = new Error('Transport start failed');
		mockTransport.start.mockRejectedValue(testError);

		const indexModule = await import('../index.js');
		
		try {
			await indexModule.main();
		} catch (error) {
			// Expected to throw due to process.exit mock
			expect(error).toEqual(new Error('process.exit called'));
		}

		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', testError);
		expect(processExitSpy).toHaveBeenCalledWith(1);
	});


});

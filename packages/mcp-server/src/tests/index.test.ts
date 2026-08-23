import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';

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
	let mockTransport: { start: jest.Mock; stop: jest.Mock };
	let mockServer: { close: jest.Mock };
	let consoleErrorSpy: jest.SpyInstance;
	let processExitSpy: jest.SpyInstance;
	let originalExitCode: number | string | null | undefined;

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
		originalExitCode = process.exitCode;
		process.exitCode = undefined;
		mockServer = { close: jest.fn().mockResolvedValue(undefined) };
		mockTransport = {
			start: jest.fn().mockResolvedValue(void 0),
			stop: jest.fn().mockResolvedValue(void 0)
		};

		// Setup default mock implementations
		mockParseArgs.mockReturnValue({ mode: 'stdio' });
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
		process.exitCode = typeof originalExitCode === 'number' ? originalExitCode : 0;
	});

	it('does not execute a stale or missing entrypoint path', async () => {
		const indexModule = await import('../index.js');
		expect(indexModule.isDirectExecution(import.meta.url, '/__sei_js_missing_entrypoint__')).toBe(false);
	});

	it('should start server successfully with wallet enabled', async () => {
		// Import and call the main function
		const indexModule = await import('../index.js');
		const runtime = await indexModule.main();

		expect(mockParseArgs).toHaveBeenCalled();
		expect(mockGetServer).toHaveBeenCalled();
		expect(mockCreateTransport).toHaveBeenCalled();
		expect(mockTransport.start).toHaveBeenCalledWith(mockServer);
		expect(mockIsWalletEnabled).toHaveBeenCalled();
		expect(consoleErrorSpy).not.toHaveBeenCalled();
		await runtime?.stop();
	});

	it('should log warning when wallet is disabled', async () => {
		mockIsWalletEnabled.mockReturnValue(false);

		const indexModule = await import('../index.js');
		const runtime = await indexModule.main();

		expect(consoleErrorSpy).toHaveBeenCalledWith('Wallet functionality is disabled. Signing and broadcasting tools are not available.');
		await runtime?.stop();
	});

	it('should handle server startup errors', async () => {
		const testError = new Error('Server startup failed');
		mockGetServer.mockRejectedValue(testError);

		const indexModule = await import('../index.js');

		await expect(indexModule.main()).rejects.toBe(testError);

		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', 'Server startup failed');
		expect(processExitSpy).not.toHaveBeenCalled();
	});

	it('should handle transport creation errors', async () => {
		const testError = new Error('Transport creation failed');
		mockCreateTransport.mockImplementation(() => {
			throw testError;
		});

		const indexModule = await import('../index.js');

		await expect(indexModule.main()).rejects.toBe(testError);

		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', 'Transport creation failed');
		expect(mockServer.close).toHaveBeenCalled();
		expect(processExitSpy).not.toHaveBeenCalled();
	});

	it('sets a nonzero exit code when HTTP startup rejects EADDRINUSE', async () => {
		const testError = Object.assign(new Error('listen EADDRINUSE'), { code: 'EADDRINUSE' });
		mockParseArgs.mockReturnValue({ mode: 'streamable-http' });
		mockTransport.start.mockRejectedValue(testError);

		const indexModule = await import('../index.js');

		await expect(indexModule.main()).rejects.toBe(testError);

		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', 'listen EADDRINUSE');
		expect(mockTransport.stop).toHaveBeenCalled();
		expect(mockGetServer).not.toHaveBeenCalled();
		expect(mockServer.close).not.toHaveBeenCalled();
		expect(processExitSpy).not.toHaveBeenCalled();
	});

	it('does not construct an unused bootstrap server for HTTP transports', async () => {
		mockParseArgs.mockReturnValue({ mode: 'http-sse' });
		const indexModule = await import('../index.js');
		const runtime = await indexModule.main();

		expect(mockGetServer).not.toHaveBeenCalled();
		expect(mockTransport.start).toHaveBeenCalledWith(undefined);
		await runtime?.stop();
		expect(mockServer.close).not.toHaveBeenCalled();
	});

	it('terminates direct CLI startup after cleanup while embedders receive exceptions', async () => {
		const testError = new Error('unsafe HTTP wallet configuration');
		mockTransport.start.mockRejectedValue(testError);
		const indexModule = await import('../index.js');

		await expect(indexModule.runCli()).rejects.toThrow('process.exit called');

		expect(mockTransport.stop).toHaveBeenCalled();
		expect(mockServer.close).toHaveBeenCalled();
		expect(processExitSpy).toHaveBeenCalledWith(1);
		expect(consoleErrorSpy).toHaveBeenCalledWith('Error starting MCP server:', 'unsafe HTTP wallet configuration');
	});

	it('attempts all shutdown operations and aggregates their failures', async () => {
		mockTransport.stop.mockRejectedValue(new Error('transport stop failed'));
		mockServer.close.mockRejectedValue(new Error('server close failed'));
		const indexModule = await import('../index.js');
		const runtime = await indexModule.main();

		await expect(runtime?.stop()).rejects.toBeInstanceOf(AggregateError);
		expect(mockTransport.stop).toHaveBeenCalledTimes(1);
		expect(mockServer.close).toHaveBeenCalledTimes(1);
	});

	it('runs graceful shutdown once and allows signal handlers to be removed', async () => {
		const callbacks = new Map<string, () => void>();
		const onceSpy = jest.spyOn(process, 'once').mockImplementation(((event: string, listener: () => void) => {
			callbacks.set(event, listener);
			return process;
		}) as typeof process.once);
		const offSpy = jest.spyOn(process, 'off').mockImplementation(() => process);
		const stop = jest.fn().mockResolvedValue(undefined);
		const { registerShutdownHandlers } = await import('../index.js');
		const remove = registerShutdownHandlers(stop);

		callbacks.get('SIGINT')?.();
		callbacks.get('SIGTERM')?.();
		await Promise.resolve();

		expect(stop).toHaveBeenCalledTimes(1);
		remove();
		expect(offSpy).toHaveBeenCalledWith('SIGINT', callbacks.get('SIGINT'));
		expect(offSpy).toHaveBeenCalledWith('SIGTERM', callbacks.get('SIGTERM'));

		onceSpy.mockRestore();
		offSpy.mockRestore();
	});
});

import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Mock all dependencies
jest.mock('@modelcontextprotocol/sdk/server/mcp.js', () => ({
	McpServer: jest.fn()
}));

jest.mock('../../core/tools.js', () => ({
	registerEVMTools: jest.fn()
}));

jest.mock('../../core/resources.js', () => ({
	registerEVMResources: jest.fn()
}));

jest.mock('../../core/prompts.js', () => ({
	registerEVMPrompts: jest.fn()
}));

jest.mock('../../docs/index.js', () => ({
	createDocsSearchTool: jest.fn()
}));

jest.mock('../../server/package-info.js', () => ({
	getPackageInfo: jest.fn()
}));

jest.mock('../../core/chains.js', () => ({
	getSupportedNetworks: jest.fn(),
	rpcUrlMap: {}
}));

type GetServerFunction = () => Promise<McpServer>;

describe('Server Module', () => {
	let getServer: GetServerFunction;
	let MockMcpServer: jest.MockedClass<typeof McpServer>;
	let mockRegisterEVMTools: jest.MockedFunction<any>;
	let mockRegisterEVMResources: jest.MockedFunction<any>;
	let mockRegisterEVMPrompts: jest.MockedFunction<any>;
	let mockCreateDocsSearchTool: jest.MockedFunction<any>;
	let mockGetPackageInfo: jest.MockedFunction<any>;
	let mockGetSupportedNetworks: jest.MockedFunction<any>;
	let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;
	let processExitSpy: jest.SpiedFunction<typeof process.exit>;
	let mockServerInstance: any;

	beforeEach(async () => {
		jest.clearAllMocks();

		// Create mock server instance
		mockServerInstance = {
			name: '@sei-js/mcp-server',
			version: '1.0.0'
		};

		// Import mocked functions first
		const toolsModule = await import('../../core/tools.js');
		const resourcesModule = await import('../../core/resources.js');
		const promptsModule = await import('../../core/prompts.js');
		const docsModule = await import('../../docs/index.js');
		const packageInfoModule = await import('../../server/package-info.js');
		const chainsModule = await import('../../core/chains.js');

		mockRegisterEVMTools = toolsModule.registerEVMTools as jest.MockedFunction<any>;
		mockRegisterEVMResources = resourcesModule.registerEVMResources as jest.MockedFunction<any>;
		mockRegisterEVMPrompts = promptsModule.registerEVMPrompts as jest.MockedFunction<any>;
		mockCreateDocsSearchTool = docsModule.createDocsSearchTool as jest.MockedFunction<any>;
		mockGetPackageInfo = packageInfoModule.getPackageInfo as jest.MockedFunction<any>;
		mockGetSupportedNetworks = chainsModule.getSupportedNetworks as jest.MockedFunction<any>;

		// Setup mock implementations
		MockMcpServer = McpServer as jest.MockedClass<typeof McpServer>;
		// Use mockReturnValue for constructor mocks
		(MockMcpServer as any).mockReturnValue(mockServerInstance);

		// Setup default mock returns
		mockGetPackageInfo.mockReturnValue({
			name: '@sei-js/mcp-server',
			version: '1.0.0'
		});
		mockGetSupportedNetworks.mockReturnValue(['sei', 'sei-testnet']);

		// Spy on console.error and process.exit
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
			throw new Error('process.exit called');
		});

		// Import the function after mocks are set up
		const serverModule = await import('../../server/server.js');
		getServer = serverModule.getServer;
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
		processExitSpy.mockRestore();
	});

	describe('getServer', () => {
		it('should call all initialization functions', async () => {
			await getServer();

			expect(mockGetPackageInfo).toHaveBeenCalled();
			expect(mockRegisterEVMResources).toHaveBeenCalled();
			expect(mockRegisterEVMTools).toHaveBeenCalled();
			expect(mockRegisterEVMPrompts).toHaveBeenCalled();
			expect(mockCreateDocsSearchTool).toHaveBeenCalledWith(expect.anything(), {
				name: '@sei-js/mcp-server',
				version: '1.0.0'
			});
			expect(mockGetSupportedNetworks).toHaveBeenCalled();
		});

		it('should log supported networks', async () => {
			const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

			await getServer();

			expect(consoleErrorSpy).toHaveBeenCalledWith('Supported networks:', 'sei, sei-testnet');
		});

		it('should sanitize and propagate server initialization errors', async () => {
			const testError = new Error('Initialization failed');
			mockGetPackageInfo.mockImplementation(() => {
				throw testError;
			});

			await expect(getServer()).rejects.toThrow('Initialization failed');

			expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to initialize server:', 'Initialization failed');
			expect(processExitSpy).not.toHaveBeenCalled();
		});
	});
});

import { jest, describe, it, expect, beforeEach, afterEach } from '@jest/globals';
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

jest.mock('../../mintlify/search.js', () => ({
	createSeiJSDocsSearchTool: jest.fn()
}));

jest.mock('../../server/package-info.js', () => ({
	getPackageInfo: jest.fn()
}));

jest.mock('../../core/chains.js', () => ({
	getSupportedNetworks: jest.fn()
}));

jest.mock('../../docs/index.js', () => ({
	createDocsSearchTool: jest.fn()
}));

type GetServerFunction = () => Promise<McpServer>;

describe('Server Module', () => {
	let getServer: GetServerFunction;
	let MockMcpServer: jest.MockedClass<typeof McpServer>;
	let mockRegisterEVMTools: jest.MockedFunction<any>;
	let mockRegisterEVMResources: jest.MockedFunction<any>;
	let mockRegisterEVMPrompts: jest.MockedFunction<any>;
	let mockCreateSeiJSDocsSearchTool: jest.MockedFunction<any>;
	let mockGetPackageInfo: jest.MockedFunction<any>;
	let mockGetSupportedNetworks: jest.MockedFunction<any>;
	let mockCreateDocsSearchTool: jest.MockedFunction<any>;
	let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;
	let processExitSpy: jest.SpiedFunction<typeof process.exit>;
	let mockServerInstance: any;

	beforeEach(async () => {
		jest.clearAllMocks();
		jest.resetModules();

		// Create mock server instance
		mockServerInstance = {
			name: '@sei-js/mcp-server',
			version: '1.0.0'
		};

		// Import mocked functions first
		const toolsModule = await import('../../core/tools.js');
		const resourcesModule = await import('../../core/resources.js');
		const promptsModule = await import('../../core/prompts.js');
		const mintlifyModule = await import('../../mintlify/search.js');
		const packageInfoModule = await import('../../server/package-info.js');
		const chainsModule = await import('../../core/chains.js');
		const docsModule = await import('../../docs/index.js');

		mockRegisterEVMTools = toolsModule.registerEVMTools as jest.MockedFunction<any>;
		mockRegisterEVMResources = resourcesModule.registerEVMResources as jest.MockedFunction<any>;
		mockRegisterEVMPrompts = promptsModule.registerEVMPrompts as jest.MockedFunction<any>;
		mockCreateSeiJSDocsSearchTool = mintlifyModule.createSeiJSDocsSearchTool as jest.MockedFunction<any>;
		mockGetPackageInfo = packageInfoModule.getPackageInfo as jest.MockedFunction<any>;
		mockGetSupportedNetworks = chainsModule.getSupportedNetworks as jest.MockedFunction<any>;
		mockCreateDocsSearchTool = docsModule.createDocsSearchTool as jest.MockedFunction<any>;

		// Setup mock implementations
		MockMcpServer = McpServer as jest.MockedClass<typeof McpServer>;
		// Use mockReturnValue for constructor mocks
		(MockMcpServer as any).mockReturnValue(mockServerInstance);

		// Setup default mock returns
		mockGetPackageInfo.mockReturnValue({
			name: '@sei-js/mcp-server',
			version: '1.0.0'
		});
		mockGetSupportedNetworks.mockReturnValue(['sei', 'sei-testnet', 'sei-devnet']);
		mockCreateSeiJSDocsSearchTool.mockResolvedValue(undefined);
		mockCreateDocsSearchTool.mockResolvedValue(undefined);

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
			expect(mockCreateSeiJSDocsSearchTool).toHaveBeenCalled();
			expect(mockCreateDocsSearchTool).toHaveBeenCalled();
			expect(mockGetSupportedNetworks).toHaveBeenCalled();
		});



		it('should log supported networks', async () => {
			const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

			await getServer();

			expect(consoleErrorSpy).toHaveBeenCalledWith('Supported networks:', 'sei, sei-testnet, sei-devnet');
		});

		it('should handle createDocsSearchTool error gracefully', async () => {
			const testError = new Error('API rate limited');
			mockCreateDocsSearchTool.mockRejectedValue(testError);

			await getServer();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Warning: Failed to initialize documentation search tools (API rate limited?):',
				'API rate limited'
			);
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Server will continue without documentation search functionality.'
			);
		});

		it('should handle createDocsSearchTool non-Error exception', async () => {
			mockCreateDocsSearchTool.mockRejectedValue('string error');

			await getServer();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Warning: Failed to initialize documentation search tools (API rate limited?):',
				'string error'
			);
		});

		it('should handle server initialization error and exit', async () => {
			const testError = new Error('Initialization failed');
			mockGetPackageInfo.mockImplementation(() => {
				throw testError;
			});

			await expect(getServer()).rejects.toThrow('process.exit called');

			expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to initialize server:', testError);
			expect(processExitSpy).toHaveBeenCalledWith(1);
		});
	});
});

import { afterEach, describe, expect, it, jest } from 'bun:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { config, initializeConfig, isWalletEnabled, snapshotConfig } from '../../../core/config.js';
import { resetWalletProvider } from '../../../core/wallet/index.js';
import { HttpSseTransport } from '../../../server/transport/http-sse.js';
import { StreamableHttpTransport } from '../../../server/transport/streamable-http.js';

const HOST = '127.0.0.1';
const PATH = '/mcp';
const PRIVATE_KEY = '1'.repeat(64);
const WALLET_TOOLS = new Set([
	'approve_token_spending',
	'deploy_contract',
	'get_address_from_private_key',
	'transfer_erc1155',
	'transfer_erc20',
	'transfer_nft',
	'transfer_sei',
	'transfer_token',
	'write_contract'
]);

type HttpMode = 'http-sse' | 'streamable-http';

async function listWalletTools(mode: HttpMode, url: URL): Promise<string[]> {
	const client = new Client({ name: `wallet-isolation-${mode}`, version: '1.0.0' });
	const transport = mode === 'http-sse' ? new SSEClientTransport(url) : new StreamableHTTPClientTransport(url);
	await client.connect(transport);
	try {
		const listed = await client.listTools();
		return listed.tools
			.map((tool) => tool.name)
			.filter((name) => WALLET_TOOLS.has(name))
			.sort();
	} finally {
		await client.close();
	}
}

describe('HTTP wallet isolation across later starts', () => {
	const transports: Array<HttpSseTransport | StreamableHttpTransport> = [];
	let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;
	const originalConfig = { ...config };

	afterEach(async () => {
		await Promise.allSettled(transports.splice(0).map((transport) => transport.stop()));
		consoleErrorSpy?.mockRestore();
		Object.assign(config, originalConfig);
		resetWalletProvider();
		delete process.env.WALLET_MODE;
		delete process.env.PRIVATE_KEY;
	});

	it.each(['http-sse', 'streamable-http'] as const)('keeps %s sessions read-only after a later private-key initializeConfig', async (mode) => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const appConfig = snapshotConfig({
			privateKey: undefined,
			walletMode: 'disabled',
			walletApiKey: undefined
		});
		const transport =
			mode === 'http-sse'
				? new HttpSseTransport({ port: 0, host: HOST, path: PATH, walletMode: 'disabled', appConfig })
				: new StreamableHttpTransport({ port: 0, host: HOST, path: PATH, walletMode: 'disabled', appConfig });
		transports.push(transport);
		await transport.start();

		const url = new URL(`http://${HOST}:${transport.getListeningPort()}${PATH}`);
		expect(await listWalletTools(mode, url)).toEqual([]);

		process.env.WALLET_MODE = 'private-key';
		process.env.PRIVATE_KEY = PRIVATE_KEY;
		expect(await listWalletTools(mode, url)).toEqual([]);
		expect(isWalletEnabled()).toBe(false);

		initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: PRIVATE_KEY });
		process.env.WALLET_MODE = 'disabled';
		delete process.env.PRIVATE_KEY;
		expect(isWalletEnabled()).toBe(true);
		expect(await listWalletTools(mode, url)).toEqual([]);
	});

	it.each(['http-sse', 'streamable-http'] as const)('snapshots %s at construction when appConfig is omitted', async (mode) => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		Object.assign(config, { privateKey: undefined, walletMode: 'disabled', walletApiKey: undefined });
		const transport =
			mode === 'http-sse'
				? new HttpSseTransport({ port: 0, host: HOST, path: PATH, walletMode: 'disabled' })
				: new StreamableHttpTransport({ port: 0, host: HOST, path: PATH, walletMode: 'disabled' });
		transports.push(transport);
		await transport.start();

		initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: PRIVATE_KEY });
		const url = new URL(`http://${HOST}:${transport.getListeningPort()}${PATH}`);
		expect(isWalletEnabled()).toBe(true);
		expect(await listWalletTools(mode, url)).toEqual([]);
	});

	it('still terminates a direct private-key HTTP start before listen', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const processExit = jest.spyOn(process, 'exit').mockImplementation((code) => {
			throw new Error(`process.exit called with code ${code}`);
		});
		const listenFactory = jest.fn();
		const streamable = new StreamableHttpTransport({ port: 8080, host: HOST, path: PATH, walletMode: 'private-key' }, { listenFactory });
		const sse = new HttpSseTransport({ port: 8080, host: HOST, path: PATH, walletMode: 'private-key' }, { listenFactory });

		await expect(streamable.start()).rejects.toThrow('process.exit called with code 1');
		await expect(sse.start()).rejects.toThrow('process.exit called with code 1');
		expect(processExit).toHaveBeenCalledWith(1);
		expect(listenFactory).not.toHaveBeenCalled();
		processExit.mockRestore();
	});
});

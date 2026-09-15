import { afterEach, describe, expect, it, jest } from 'bun:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { privateKeyToAccount } from 'viem/accounts';
import { config, initializeConfig, isWalletEnabled, runWithAppConfig, snapshotConfig } from '../../../core/config.js';
import { getWalletProvider, resetWalletProvider } from '../../../core/wallet/index.js';
import { getServer } from '../../../server/server.js';
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

async function deriveAddressFromPrivateKey(client: Client): Promise<string> {
	const result = await client.callTool({ name: 'get_address_from_private_key', arguments: {} });
	expect(result.isError).toBeFalsy();
	if (!('content' in result)) throw new Error('Expected an immediate tool result');
	const content = (result as { content: Array<{ type: string; text?: string }> }).content[0];
	if (content?.type !== 'text' || content.text === undefined) throw new Error('Expected a text tool result');
	return JSON.parse(content.text).address;
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

	it.each(['http-sse', 'streamable-http'] as const)('snapshots a mutable %s appConfig at construction', async (mode) => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const appConfig = { privateKey: undefined as string | undefined, walletMode: 'disabled' as 'disabled' | 'private-key', walletApiKey: undefined };
		const transport =
			mode === 'http-sse'
				? new HttpSseTransport({ port: 0, host: HOST, path: PATH, appConfig })
				: new StreamableHttpTransport({ port: 0, host: HOST, path: PATH, appConfig });
		transports.push(transport);
		await transport.start();

		appConfig.walletMode = 'private-key';
		appConfig.privateKey = `0x${PRIVATE_KEY}`;
		const url = new URL(`http://${HOST}:${transport.getListeningPort()}${PATH}`);
		expect(await listWalletTools(mode, url)).toEqual([]);
	});

	it('still terminates a direct private-key HTTP start before listen', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const processExit = jest.spyOn(process, 'exit').mockImplementation((code) => {
			throw new Error(`process.exit called with code ${code}`);
		});
		const listenFactory = jest.fn();
		const appConfig = snapshotConfig({ privateKey: `0x${PRIVATE_KEY}`, walletMode: 'private-key', walletApiKey: undefined });
		const streamable = new StreamableHttpTransport({ port: 8080, host: HOST, path: PATH, walletMode: 'private-key', appConfig }, { listenFactory });
		const sse = new HttpSseTransport({ port: 8080, host: HOST, path: PATH, walletMode: 'private-key', appConfig }, { listenFactory });

		await expect(streamable.start()).rejects.toThrow('process.exit called with code 1');
		await expect(sse.start()).rejects.toThrow('process.exit called with code 1');
		expect(processExit).toHaveBeenCalledWith(1);
		expect(listenFactory).not.toHaveBeenCalled();
		processExit.mockRestore();
	});

	it.each(['http-sse', 'streamable-http'] as const)('rejects %s when appConfig enables the wallet and walletMode is omitted', async (mode) => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const processExit = jest.spyOn(process, 'exit').mockImplementation((code) => {
			throw new Error(`process.exit called with code ${code}`);
		});
		const listenFactory = jest.fn();
		const appConfig = snapshotConfig({
			privateKey: `0x${PRIVATE_KEY}`,
			walletMode: 'private-key',
			walletApiKey: undefined
		});
		const options = { port: 8080, host: HOST, path: PATH, appConfig };
		const transport = mode === 'http-sse' ? new HttpSseTransport(options, { listenFactory }) : new StreamableHttpTransport(options, { listenFactory });

		await expect(transport.start()).rejects.toThrow('process.exit called with code 1');
		expect(processExit).toHaveBeenCalledWith(1);
		expect(listenFactory).not.toHaveBeenCalled();
		processExit.mockRestore();
	});

	it.each(['http-sse', 'streamable-http'] as const)('rejects conflicting compatibility walletMode for %s at construction', (mode) => {
		const appConfig = snapshotConfig({
			privateKey: `0x${PRIVATE_KEY}`,
			walletMode: 'private-key',
			walletApiKey: undefined
		});
		const options = { port: 8080, host: HOST, path: PATH, walletMode: 'disabled' as const, appConfig };

		expect(() => (mode === 'http-sse' ? new HttpSseTransport(options) : new StreamableHttpTransport(options))).toThrow(
			'walletMode must match appConfig.walletMode.'
		);
	});

	it.each(['http-sse', 'streamable-http'] as const)('requires an explicit appConfig for %s', (mode) => {
		const options = { port: 8080, host: HOST, path: PATH };

		expect(() => (mode === 'http-sse' ? new HttpSseTransport(options as never) : new StreamableHttpTransport(options as never))).toThrow(
			'appConfig is required.'
		);
	});
});

describe('stdio wallet isolation after another runtime stop', () => {
	let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;
	const originalConfig = { ...config };

	afterEach(() => {
		consoleErrorSpy?.mockRestore();
		Object.assign(config, originalConfig);
		resetWalletProvider();
		delete process.env.WALLET_MODE;
		delete process.env.PRIVATE_KEY;
	});

	it('keeps signing with the stdio snapshot after resetWalletProvider and a later initializeConfig', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const keyA = '1'.repeat(64);
		const keyB = '2'.repeat(64);
		const expectedAddress = privateKeyToAccount(`0x${keyA}`).address;
		const otherAddress = privateKeyToAccount(`0x${keyB}`).address;

		initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: keyA });
		const appConfig = snapshotConfig();
		const server = await getServer(appConfig);
		// The real SDK transport verifies that registered handlers carry the
		// snapshot without relying on transport.onmessage interception.
		const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
		const client = new Client({ name: 'stdio-wallet-isolation', version: '1.0.0' });
		await Promise.all([client.connect(clientTransport), server.connect(serverTransport)]);

		try {
			const listed = await client.listTools();
			expect(listed.tools.filter((tool) => WALLET_TOOLS.has(tool.name))).not.toEqual([]);
			expect(await deriveAddressFromPrivateKey(client)).toBe(expectedAddress);

			initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: keyB });
			const otherAppConfig = snapshotConfig();
			runWithAppConfig(otherAppConfig, () => getWalletProvider());
			resetWalletProvider(otherAppConfig);
			expect(isWalletEnabled()).toBe(true);
			expect(config.privateKey).toBe(`0x${keyB}`);

			expect(await deriveAddressFromPrivateKey(client)).toBe(expectedAddress);
			expect(otherAddress).not.toBe(expectedAddress);
		} finally {
			await client.close();
			await server.close();
		}
	});
});

import { afterEach, describe, expect, it, jest } from 'bun:test';
import { createServer, type Server } from 'node:http';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import type { Request, Response } from 'express';
import { StreamableHttpTransport } from '../../../server/transport/streamable-http.js';

const HOST = '127.0.0.1';
const PATH = '/mcp';

async function listenOnRandomPort(server: Server): Promise<number> {
	await new Promise<void>((resolve, reject) => {
		server.once('error', reject);
		server.listen(0, HOST, resolve);
	});
	const address = server.address();
	if (!address || typeof address === 'string') throw new Error('Expected a TCP listener');
	return address.port;
}

async function closeServer(server: Server): Promise<void> {
	if (!server.listening) return;
	await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}

async function withTimeout<T>(promise: Promise<T>, label: string): Promise<T> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	try {
		return await Promise.race([
			promise,
			new Promise<never>((_resolve, reject) => {
				timer = setTimeout(() => reject(new Error(`${label} timed out`)), 5_000);
			})
		]);
	} finally {
		if (timer) clearTimeout(timer);
	}
}

describe('StreamableHttpTransport', () => {
	const transports: StreamableHttpTransport[] = [];
	const occupiedServers: Server[] = [];
	const clients: Client[] = [];
	const bootstrapServers: McpServer[] = [];
	let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;

	afterEach(async () => {
		await Promise.allSettled(clients.splice(0).map((client) => client.close()));
		await Promise.allSettled(transports.splice(0).map((transport) => transport.stop()));
		await Promise.allSettled(occupiedServers.splice(0).map((server) => closeServer(server)));
		await Promise.allSettled(bootstrapServers.splice(0).map((server) => server.close()));
		consoleErrorSpy?.mockRestore();
	});

	it('resolves start only after listening and rejects an empty host', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const bootstrap = { close: jest.fn() } as unknown as McpServer;
		const transport = new StreamableHttpTransport(0, HOST, PATH);
		transports.push(transport);

		await transport.start(bootstrap);
		const port = transport.getListeningPort();
		expect(typeof port).toBe('number');
		const health = await fetch(`http://${HOST}:${port}/health`);
		expect(health.status).toBe(200);
		expect(await health.json()).toMatchObject({ status: 'ok' });

		const invalidHost = new StreamableHttpTransport(8080, '   ', PATH);
		await expect(invalidHost.start(bootstrap)).rejects.toThrow('SERVER_HOST must not be empty');
	});

	it('serves a real local MCP client request', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const transport = new StreamableHttpTransport(0, HOST, PATH, 'disabled', async () => {
			const server = new McpServer({ name: 'request-server', version: '1.0.0' });
			server.tool('local_identity', 'Return a local test response', {}, async () => ({
				content: [{ type: 'text', text: 'local-streamable-response' }]
			}));
			return server;
		});
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);

		const client = new Client({ name: 'streamable-client', version: '1.0.0' });
		clients.push(client);
		await client.connect(new StreamableHTTPClientTransport(new URL(`http://${HOST}:${transport.getListeningPort()}${PATH}`)));
		const result = await client.callTool({ name: 'local_identity', arguments: {} });

		if (!('content' in result) || !Array.isArray(result.content)) throw new Error('Expected an immediate tool result');
		expect(result.content[0]).toMatchObject({ type: 'text', text: 'local-streamable-response' });
	});

	it('rejects EADDRINUSE when the configured port is occupied', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const occupied = createServer();
		occupiedServers.push(occupied);
		const port = await listenOnRandomPort(occupied);
		const transport = new StreamableHttpTransport(port, HOST, PATH);
		transports.push(transport);

		try {
			await transport.start({ close: jest.fn() } as unknown as McpServer);
			throw new Error('Expected the occupied port to reject');
		} catch (error) {
			expect((error as NodeJS.ErrnoException).code).toBe('EADDRINUSE');
		}
		expect(transport.getListeningPort()).toBeUndefined();
	});

	it('closes active request transports and MCP servers during shutdown', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let requestStarted!: () => void;
		const started = new Promise<void>((resolve) => {
			requestStarted = resolve;
		});
		let releaseRequest: (() => void) | undefined;

		const requestServer = {
			connect: jest.fn().mockResolvedValue(undefined),
			close: jest.fn().mockResolvedValue(undefined)
		} as unknown as McpServer;
		const requestTransport = {
			close: jest.fn(async () => {
				releaseRequest?.();
			}),
			handleRequest: jest.fn(async () => {
				requestStarted();
				await new Promise<void>((resolve) => {
					releaseRequest = resolve;
				});
			})
		} as unknown as StreamableHTTPServerTransport;

		const transport = new StreamableHttpTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => requestServer,
			() => requestTransport
		);
		transports.push(transport);
		await transport.start({ close: jest.fn() } as unknown as McpServer);
		const request = fetch(`http://${HOST}:${transport.getListeningPort()}${PATH}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ jsonrpc: '2.0', method: 'initialize', id: 1, params: {} })
		}).catch(() => undefined);

		await withTimeout(started, 'request startup');
		await withTimeout(transport.stop(), 'transport shutdown');
		void request;

		expect(requestTransport.close).toHaveBeenCalled();
		expect(requestServer.close).toHaveBeenCalled();
		expect(transport.getListeningPort()).toBeUndefined();
	});

	it('handles repeated response errors with exactly-once request cleanup', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let incomingRequest: Request | undefined;
		let response: Response | undefined;
		let requestStarted!: () => void;
		const started = new Promise<void>((resolve) => {
			requestStarted = resolve;
		});
		let releaseRequest: (() => void) | undefined;
		const requestServerClose = jest.fn().mockResolvedValue(undefined);
		const requestServer = {
			connect: jest.fn().mockResolvedValue(undefined),
			close: requestServerClose
		} as unknown as McpServer;
		const requestTransport = {
			close: jest.fn(async () => releaseRequest?.()),
			handleRequest: jest.fn(async (request: Request, requestResponse: Response) => {
				incomingRequest = request;
				response = requestResponse;
				requestStarted();
				await new Promise<void>((resolve) => {
					releaseRequest = resolve;
				});
			})
		} as unknown as StreamableHTTPServerTransport;
		const transport = new StreamableHttpTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => requestServer,
			() => requestTransport
		);
		transports.push(transport);
		await transport.start({ close: jest.fn() } as unknown as McpServer);
		const request = fetch(`http://${HOST}:${transport.getListeningPort()}${PATH}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ jsonrpc: '2.0', method: 'initialize', id: 1, params: {} })
		}).catch(() => undefined);

		await withTimeout(started, 'request startup');
		response?.emit('error', new Error('simulated response failure'));
		response?.emit('error', new Error('repeated response failure'));
		incomingRequest?.emit('error', new Error('simulated request failure'));
		incomingRequest?.socket.emit('error', new Error('simulated socket failure'));
		await withTimeout(
			(async () => {
				while (requestServerClose.mock.calls.length === 0) await Bun.sleep(5);
			})(),
			'response error cleanup'
		);

		expect(requestTransport.close).toHaveBeenCalledTimes(1);
		expect(requestServerClose).toHaveBeenCalledTimes(1);
		await transport.stop();
		void request;
	});

	it('cancels pending startup and supports a clean restart', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const delayedServer = createServer();
		let delayedCloseCount = 0;
		delayedServer.close = ((callback?: (error?: Error) => void) => {
			delayedCloseCount++;
			queueMicrotask(() => callback?.());
			return delayedServer;
		}) as typeof delayedServer.close;
		let listenCount = 0;
		const transport = new StreamableHttpTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => new McpServer({ name: 'request', version: '1.0.0' }),
			() => ({ close: jest.fn() }) as unknown as StreamableHTTPServerTransport,
			(app, port, host) => (listenCount++ === 0 ? delayedServer : app.listen(port, host))
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);

		const starting = transport.start(bootstrap);
		const stopping = transport.stop();
		await expect(withTimeout(starting, 'cancelled Streamable HTTP startup')).rejects.toThrow('stopped during startup');
		await withTimeout(stopping, 'Streamable HTTP stop during startup');
		expect(delayedCloseCount).toBe(1);

		await withTimeout(transport.start(bootstrap), 'restarted Streamable HTTP startup');
		expect(transport.getListeningPort()).toBeNumber();
		await withTimeout(transport.stop(), 'restarted Streamable HTTP shutdown');
	});

	it('attempts every request close and aggregates shutdown failures', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let requestStarted!: () => void;
		const started = new Promise<void>((resolve) => {
			requestStarted = resolve;
		});
		const requestServer = {
			connect: jest.fn().mockResolvedValue(undefined),
			close: jest.fn().mockRejectedValue(new Error('server close failed'))
		} as unknown as McpServer;
		const requestTransport = {
			close: jest.fn().mockRejectedValue(new Error('transport close failed')),
			handleRequest: jest.fn(async () => {
				requestStarted();
				await new Promise(() => {});
			})
		} as unknown as StreamableHTTPServerTransport;
		const transport = new StreamableHttpTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => requestServer,
			() => requestTransport
		);
		transports.push(transport);
		await transport.start({ close: jest.fn() } as unknown as McpServer);
		const request = fetch(`http://${HOST}:${transport.getListeningPort()}${PATH}`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ jsonrpc: '2.0', method: 'initialize', id: 1, params: {} })
		}).catch(() => undefined);
		await withTimeout(started, 'request startup');

		await expect(transport.stop()).rejects.toBeInstanceOf(AggregateError);
		expect(requestTransport.close).toHaveBeenCalledTimes(1);
		expect(requestServer.close).toHaveBeenCalledTimes(1);
		await expect(transport.stop()).resolves.toBeUndefined();
		void request;
	});
});

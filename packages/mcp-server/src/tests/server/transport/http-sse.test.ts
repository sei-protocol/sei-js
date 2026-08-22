import { afterEach, describe, expect, it, jest } from 'bun:test';
import { createServer } from 'node:http';
import { createConnection } from 'node:net';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import type { Response } from 'express';
import { HttpSseTransport } from '../../../server/transport/http-sse.js';

const HOST = '127.0.0.1';
const PATH = '/mcp';

function textOf(result: Awaited<ReturnType<Client['callTool']>>): string {
	if (!('content' in result)) throw new Error('Expected an immediate tool result');
	const content = (result as { content: Array<{ type: string; text?: string }> }).content[0];
	if (content?.type !== 'text') throw new Error('Expected a text tool result');
	if (content.text === undefined) throw new Error('Expected text content');
	return content.text;
}

async function waitFor(predicate: () => boolean): Promise<void> {
	const deadline = Date.now() + 5_000;
	while (!predicate()) {
		if (Date.now() >= deadline) throw new Error('Timed out waiting for SSE cleanup');
		await Bun.sleep(5);
	}
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

describe('HttpSseTransport', () => {
	const clients: Client[] = [];
	const transports: HttpSseTransport[] = [];
	const bootstrapServers: McpServer[] = [];
	let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;

	afterEach(async () => {
		await Promise.allSettled(clients.splice(0).map((client) => client.close()));
		await Promise.allSettled(transports.splice(0).map((transport) => transport.stop()));
		await Promise.allSettled(bootstrapServers.splice(0).map((server) => server.close()));
		consoleErrorSpy?.mockRestore();
	});

	it('terminates wallet-enabled HTTP before invoking the listener', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const processExit = jest.spyOn(process, 'exit').mockImplementation((code) => {
			throw new Error(`process.exit called with code ${code}`);
		});
		const listenFactory = jest.fn();
		const transport = new HttpSseTransport({ port: 8080, host: HOST, path: PATH, walletMode: 'private-key' }, { listenFactory });

		await expect(transport.start()).rejects.toThrow('process.exit called with code 1');
		expect(processExit).toHaveBeenCalledWith(1);
		expect(listenFactory).not.toHaveBeenCalled();
		processExit.mockRestore();
	});

	it('isolates two concurrent clients and closes every session on shutdown', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const sessionServerCloseCounts: number[] = [];
		const sessionTransportCloseCounts: number[] = [];
		let nextSession = 0;

		const transport = new HttpSseTransport(
			{ port: 0, host: HOST, path: PATH },
			{
				serverFactory: async () => {
					const sessionIndex = nextSession++;
					sessionServerCloseCounts[sessionIndex] = 0;
					const server = new McpServer({ name: `session-${sessionIndex}`, version: '1.0.0' });
					server.tool('session_identity', 'Return the server session identity', {}, async () => ({
						content: [{ type: 'text', text: `session-${sessionIndex}` }]
					}));
					const originalClose = server.close.bind(server);
					server.close = async () => {
						sessionServerCloseCounts[sessionIndex]++;
						await originalClose();
					};
					return server;
				},
				transportFactory: (endpoint, response) => {
					const sessionIndex = sessionTransportCloseCounts.length;
					sessionTransportCloseCounts[sessionIndex] = 0;
					const sessionTransport = new SSEServerTransport(endpoint, response);
					const originalClose = sessionTransport.close.bind(sessionTransport);
					sessionTransport.close = async () => {
						sessionTransportCloseCounts[sessionIndex]++;
						await originalClose();
					};
					return sessionTransport;
				}
			}
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);

		const sigintListeners = process.listenerCount('SIGINT');
		const sigtermListeners = process.listenerCount('SIGTERM');
		await transport.start(bootstrap);
		expect(process.listenerCount('SIGINT')).toBe(sigintListeners);
		expect(process.listenerCount('SIGTERM')).toBe(sigtermListeners);

		const port = transport.getListeningPort();
		expect(port).toBeNumber();
		const url = new URL(`http://${HOST}:${port}${PATH}`);
		const clientA = new Client({ name: 'client-a', version: '1.0.0' });
		const clientB = new Client({ name: 'client-b', version: '1.0.0' });
		clients.push(clientA, clientB);

		await Promise.all([clientA.connect(new SSEClientTransport(url)), clientB.connect(new SSEClientTransport(url))]);
		const [firstA, firstB] = await Promise.all([
			clientA.callTool({ name: 'session_identity', arguments: {} }),
			clientB.callTool({ name: 'session_identity', arguments: {} })
		]);
		const identityA = textOf(firstA);
		const identityB = textOf(firstB);

		expect(new Set([identityA, identityB])).toEqual(new Set(['session-0', 'session-1']));
		const [secondA, secondB] = await Promise.all([
			clientA.callTool({ name: 'session_identity', arguments: {} }),
			clientB.callTool({ name: 'session_identity', arguments: {} })
		]);
		expect(textOf(secondA)).toBe(identityA);
		expect(textOf(secondB)).toBe(identityB);

		await transport.stop();
		expect(sessionServerCloseCounts).toHaveLength(2);
		expect(sessionTransportCloseCounts).toHaveLength(2);
		expect(sessionServerCloseCounts.every((count) => count >= 1)).toBe(true);
		expect(sessionTransportCloseCounts.every((count) => count >= 1)).toBe(true);
		expect(transport.getListeningPort()).toBeUndefined();
	});

	it('caps concurrent sessions with 503 and releases capacity on disconnect', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let serverCount = 0;
		const transport = new HttpSseTransport(
			{ port: 0, host: HOST, path: PATH, maxSessions: 1 },
			{
				serverFactory: async () => {
					serverCount++;
					return new McpServer({ name: `limited-session-${serverCount}`, version: '1.0.0' });
				}
			}
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);

		const port = transport.getListeningPort();
		if (port === undefined) throw new Error('SSE transport did not start');
		const url = new URL(`http://${HOST}:${port}${PATH}`);
		const firstClient = new Client({ name: 'limited-a', version: '1.0.0' });
		clients.push(firstClient);
		await firstClient.connect(new SSEClientTransport(url));

		const rejected = await fetch(url, { headers: { accept: 'text/event-stream' } });
		expect(rejected.status).toBe(503);
		expect(await rejected.json()).toEqual({ error: 'Maximum SSE sessions reached' });
		expect(serverCount).toBe(1);

		await firstClient.close();
		clients.splice(clients.indexOf(firstClient), 1);
		await waitFor(() => (transport as unknown as { activeSessionSlots: number }).activeSessionSlots === 0);

		const secondClient = new Client({ name: 'limited-b', version: '1.0.0' });
		clients.push(secondClient);
		await secondClient.connect(new SSEClientTransport(url));
		expect(serverCount).toBe(2);
	});

	it('closes both session resources when an SSE response disconnects', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let serverCloseCount = 0;
		let transportCloseCount = 0;
		const transport = new HttpSseTransport(
			{ port: 0, host: HOST, path: PATH },
			{
				serverFactory: async () => {
					const server = new McpServer({ name: 'disconnect-session', version: '1.0.0' });
					const originalClose = server.close.bind(server);
					server.close = async () => {
						serverCloseCount++;
						await originalClose();
					};
					return server;
				},
				transportFactory: (endpoint, response) => {
					const sessionTransport = new SSEServerTransport(endpoint, response);
					const originalClose = sessionTransport.close.bind(sessionTransport);
					sessionTransport.close = async () => {
						transportCloseCount++;
						await originalClose();
					};
					return sessionTransport;
				}
			}
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);

		const port = transport.getListeningPort();
		if (port === undefined) throw new Error('SSE transport did not start');
		const socket = createConnection({ host: HOST, port });
		await new Promise<void>((resolve, reject) => {
			let response = '';
			socket.once('error', reject);
			socket.on('data', (chunk) => {
				response += chunk.toString();
				if (response.includes('event: endpoint')) resolve();
			});
			socket.once('connect', () => {
				socket.write(`GET ${PATH} HTTP/1.1\r\nHost: ${HOST}:${port}\r\nAccept: text/event-stream\r\n\r\n`);
			});
		});
		const socketClosed = new Promise<void>((resolve) => socket.once('close', resolve));
		socket.destroy();
		await socketClosed;
		await waitFor(() => serverCloseCount >= 1 && transportCloseCount >= 1);
	});

	it('handles repeated response errors with exactly-once session cleanup', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let response: Response | undefined;
		const sessionServerClose = jest.fn().mockResolvedValue(undefined);
		const sessionServer = {
			connect: jest.fn(async (sessionTransport: SSEServerTransport) => sessionTransport.start()),
			close: sessionServerClose
		} as unknown as McpServer;
		const sessionTransportClose = jest.fn().mockRejectedValue(new Error('simulated transport cleanup failure'));
		const transport = new HttpSseTransport(
			{ port: 0, host: HOST, path: PATH },
			{
				serverFactory: async () => sessionServer,
				transportFactory: (endpoint, sessionResponse) => {
					response = sessionResponse;
					const sessionTransport = new SSEServerTransport(endpoint, sessionResponse);
					sessionTransport.close = sessionTransportClose;
					return sessionTransport;
				}
			}
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);

		const port = transport.getListeningPort();
		if (port === undefined) throw new Error('SSE transport did not start');
		const socket = createConnection({ host: HOST, port });
		socket.once('connect', () => {
			socket.write(`GET ${PATH} HTTP/1.1\r\nHost: ${HOST}:${port}\r\nAccept: text/event-stream\r\n\r\n`);
		});
		await waitFor(() => response !== undefined);
		response?.emit('error', new Error('simulated response failure'));
		response?.emit('error', new Error('repeated response failure'));
		response?.socket?.emit('error', new Error('simulated socket failure'));
		await waitFor(() => sessionServerClose.mock.calls.length === 1);

		expect(sessionServerClose).toHaveBeenCalledTimes(1);
		expect(sessionTransportClose).toHaveBeenCalledTimes(1);
		expect(consoleErrorSpy).toHaveBeenCalledWith('Error closing SSE session:', 'Failed to close all SSE session resources.');
		socket.destroy();
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
		const transport = new HttpSseTransport(
			{ port: 0, host: HOST, path: PATH },
			{
				serverFactory: async () => new McpServer({ name: 'session', version: '1.0.0' }),
				transportFactory: (endpoint, sessionResponse) => new SSEServerTransport(endpoint, sessionResponse),
				listenFactory: (app, port, host) => (listenCount++ === 0 ? delayedServer : app.listen(port, host))
			}
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);

		const starting = transport.start(bootstrap);
		const stopping = transport.stop();
		await expect(withTimeout(starting, 'cancelled SSE startup')).rejects.toThrow('stopped during startup');
		await withTimeout(stopping, 'SSE stop during startup');
		expect(delayedCloseCount).toBe(1);

		await withTimeout(transport.start(bootstrap), 'restarted SSE startup');
		expect(transport.getListeningPort()).toBeNumber();
		await withTimeout(transport.stop(), 'restarted SSE shutdown');
	});

	it('rejects occupied ports and serves health checks after startup', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const occupied = createServer();
		await new Promise<void>((resolve, reject) => {
			occupied.once('error', reject);
			occupied.listen(0, HOST, resolve);
		});
		const address = occupied.address();
		if (!address || typeof address === 'string') throw new Error('Expected an occupied TCP port');

		const blocked = new HttpSseTransport({ port: address.port, host: HOST, path: PATH });
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await expect(blocked.start(bootstrap)).rejects.toMatchObject({ code: 'EADDRINUSE' });
		await new Promise<void>((resolve, reject) => occupied.close((error) => (error ? reject(error) : resolve())));

		const transport = new HttpSseTransport({ port: 0, host: HOST, path: PATH });
		transports.push(transport);
		await transport.start(bootstrap);
		const health = await fetch(`http://${HOST}:${transport.getListeningPort()}/health`);
		expect(health.status).toBe(200);
		expect(await health.json()).toMatchObject({ status: 'ok' });
	});

	it('releases a reserved slot when SSE transport creation fails', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const transportFactory = jest.fn(() => {
			throw new Error('simulated SSE constructor failure');
		});
		const transport = new HttpSseTransport({ port: 0, host: HOST, path: PATH, maxSessions: 1 }, { transportFactory });
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);
		const url = `http://${HOST}:${transport.getListeningPort()}${PATH}`;

		expect((await fetch(url)).status).toBe(500);
		expect((await fetch(url)).status).toBe(500);
		expect(transportFactory).toHaveBeenCalledTimes(2);
	});

	it('attempts every session close and aggregates shutdown failures', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const sessionServerClose = jest.fn().mockRejectedValue(new Error('server close failed'));
		const sessionServer = {
			connect: jest.fn(async (sessionTransport: SSEServerTransport) => sessionTransport.start()),
			close: sessionServerClose
		} as unknown as McpServer;
		const sessionTransportClose = jest.fn().mockRejectedValue(new Error('transport close failed'));
		const transport = new HttpSseTransport(
			{ port: 0, host: HOST, path: PATH },
			{
				serverFactory: async () => sessionServer,
				transportFactory: (endpoint, response) => {
					const sessionTransport = new SSEServerTransport(endpoint, response);
					sessionTransport.close = sessionTransportClose;
					return sessionTransport;
				}
			}
		);
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);

		const port = transport.getListeningPort();
		if (port === undefined) throw new Error('SSE transport did not start');
		const socket = createConnection({ host: HOST, port });
		socket.on('error', () => {});
		await new Promise<void>((resolve) => {
			let response = '';
			socket.on('data', (chunk) => {
				response += chunk.toString();
				if (response.includes('event: endpoint')) resolve();
			});
			socket.once('connect', () => {
				socket.write(`GET ${PATH} HTTP/1.1\r\nHost: ${HOST}:${port}\r\nAccept: text/event-stream\r\n\r\n`);
			});
		});
		await expect(transport.stop()).rejects.toBeInstanceOf(AggregateError);

		expect(sessionTransportClose).toHaveBeenCalledTimes(1);
		expect(sessionServerClose).toHaveBeenCalledTimes(1);
		await expect(transport.stop()).resolves.toBeUndefined();
		socket.destroy();
	});

	it('rejects messages without a valid session and validates a nonempty host', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const invalidHost = new HttpSseTransport({ port: 8080, host: '   ', path: PATH });
		const unused = new McpServer({ name: 'unused', version: '1.0.0' });
		bootstrapServers.push(unused);
		await expect(invalidHost.start(unused)).rejects.toThrow('SERVER_HOST must not be empty');
		const invalidLimit = new HttpSseTransport({ port: 8080, host: HOST, path: PATH, maxSessions: 0 });
		await expect(invalidLimit.start(unused)).rejects.toThrow('SSE_MAX_SESSIONS must be a positive integer');

		const transport = new HttpSseTransport({ port: 0, host: HOST, path: PATH });
		transports.push(transport);
		const bootstrap = new McpServer({ name: 'bootstrap', version: '1.0.0' });
		bootstrapServers.push(bootstrap);
		await transport.start(bootstrap);
		const baseUrl = `http://${HOST}:${transport.getListeningPort()}${PATH}/message`;

		const missing = await fetch(baseUrl, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ jsonrpc: '2.0', method: 'ping', id: 1 })
		});
		const unknown = await fetch(`${baseUrl}?sessionId=unknown`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ jsonrpc: '2.0', method: 'ping', id: 2 })
		});

		expect(missing.status).toBe(400);
		expect(unknown.status).toBe(404);
	});
});

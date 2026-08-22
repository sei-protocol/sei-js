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
	const deadline = Date.now() + 1_000;
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
				timer = setTimeout(() => reject(new Error(`${label} timed out`)), 1_000);
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

	it('isolates two concurrent clients and closes every session on shutdown', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const sessionServerCloseCounts: number[] = [];
		const sessionTransportCloseCounts: number[] = [];
		let nextSession = 0;

		const transport = new HttpSseTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => {
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
			(endpoint, response) => {
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

	it('closes both session resources when an SSE response disconnects', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		let serverCloseCount = 0;
		let transportCloseCount = 0;
		const transport = new HttpSseTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => {
				const server = new McpServer({ name: 'disconnect-session', version: '1.0.0' });
				const originalClose = server.close.bind(server);
				server.close = async () => {
					serverCloseCount++;
					await originalClose();
				};
				return server;
			},
			(endpoint, response) => {
				const sessionTransport = new SSEServerTransport(endpoint, response);
				const originalClose = sessionTransport.close.bind(sessionTransport);
				sessionTransport.close = async () => {
					transportCloseCount++;
					await originalClose();
				};
				return sessionTransport;
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
		const sessionTransportClose = jest.fn().mockResolvedValue(undefined);
		const transport = new HttpSseTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => sessionServer,
			(endpoint, sessionResponse) => {
				response = sessionResponse;
				const sessionTransport = new SSEServerTransport(endpoint, sessionResponse);
				sessionTransport.close = sessionTransportClose;
				return sessionTransport;
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
			0,
			HOST,
			PATH,
			'disabled',
			async () => new McpServer({ name: 'session', version: '1.0.0' }),
			(endpoint, sessionResponse) => new SSEServerTransport(endpoint, sessionResponse),
			(app, port, host) => (listenCount++ === 0 ? delayedServer : app.listen(port, host))
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

	it('attempts every session close and aggregates shutdown failures', async () => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		const sessionServerClose = jest.fn().mockRejectedValue(new Error('server close failed'));
		const sessionServer = {
			connect: jest.fn(async (sessionTransport: SSEServerTransport) => sessionTransport.start()),
			close: sessionServerClose
		} as unknown as McpServer;
		const sessionTransportClose = jest.fn().mockRejectedValue(new Error('transport close failed'));
		const transport = new HttpSseTransport(
			0,
			HOST,
			PATH,
			'disabled',
			async () => sessionServer,
			(endpoint, response) => {
				const sessionTransport = new SSEServerTransport(endpoint, response);
				sessionTransport.close = sessionTransportClose;
				return sessionTransport;
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
		const invalidHost = new HttpSseTransport(8080, '   ', PATH);
		const unused = new McpServer({ name: 'unused', version: '1.0.0' });
		bootstrapServers.push(unused);
		await expect(invalidHost.start(unused)).rejects.toThrow('SERVER_HOST must not be empty');

		const transport = new HttpSseTransport(0, HOST, PATH);
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

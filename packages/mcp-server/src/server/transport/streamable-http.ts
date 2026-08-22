import type { Server } from 'node:http';
import type { Socket } from 'node:net';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import express, { type Request, type Response } from 'express';
import { sanitizeError } from '../../core/errors.js';
import { getServer } from '../server.js';
import { closeHttpServer, collectOperationErrors, runAllOperations, throwCollectedErrors } from './lifecycle.js';
import { createCorsMiddleware, validateSecurityConfig } from './security.js';
import type { McpTransport, TransportMode, WalletMode } from './types.js';

export type StreamableServerFactory = () => Promise<McpServer>;
export type StreamableTransportFactory = () => StreamableHTTPServerTransport;
export type StreamableListenFactory = (app: express.Application, port: number, host: string) => Server;
type LifecycleState = 'idle' | 'starting' | 'running' | 'stopping';

interface ActiveRequest {
	server: McpServer;
	transport: StreamableHTTPServerTransport;
	closing?: Promise<void>;
}

export class StreamableHttpTransport implements McpTransport {
	public readonly mode: TransportMode = 'streamable-http';
	private app?: express.Express;
	private httpServer?: Server;
	private readonly activeRequests = new Set<ActiveRequest>();
	private readonly sockets = new Set<Socket>();
	private stopping = false;
	private state: LifecycleState = 'idle';
	private startPromise: Promise<void> | undefined;
	private stopPromise: Promise<void> | undefined;
	private rejectStartup: ((reason: Error) => void) | undefined;
	private cleanupStartupListeners: (() => void) | undefined;
	private runtimeErrorHandler: ((error: Error) => void) | undefined;
	private connectionHandler: ((socket: Socket) => void) | undefined;

	constructor(
		private readonly port = 8080,
		private readonly host = 'localhost',
		private readonly path = '/mcp',
		private readonly walletMode: WalletMode = 'disabled',
		private readonly serverFactory: StreamableServerFactory = getServer,
		private readonly transportFactory: StreamableTransportFactory = () =>
			new StreamableHTTPServerTransport({
				sessionIdGenerator: undefined
			}),
		private readonly listenFactory: StreamableListenFactory = (app, port, host) => app.listen(port, host)
	) {}

	private async closeRequest(request: ActiveRequest): Promise<void> {
		if (!request.closing) {
			request.closing = runAllOperations(
				[() => request.transport.close(), () => request.server.close()],
				'Failed to close all Streamable HTTP request resources.'
			).finally(() => {
				this.activeRequests.delete(request);
			});
		}
		await request.closing;
	}

	getListeningPort(): number | undefined {
		const address = this.httpServer?.address();
		return address && typeof address === 'object' ? address.port : undefined;
	}

	async start(_server: McpServer): Promise<void> {
		validateSecurityConfig(this.mode, this.walletMode);
		if (this.host.trim().length === 0) {
			throw new Error('SERVER_HOST must not be empty.');
		}
		if (this.state === 'starting' && this.startPromise) {
			await this.startPromise;
			return;
		}
		if (this.state === 'stopping' && this.stopPromise) {
			await this.stopPromise;
			return this.start(_server);
		}
		if (this.state === 'running') {
			throw new Error('Streamable HTTP transport is already started.');
		}

		this.stopping = false;
		this.state = 'starting';
		this.app = express();
		this.app.use(express.json());
		this.app.use(createCorsMiddleware());

		this.app.get('/health', (_req: Request, res: Response) => {
			res.json({ status: 'ok', timestamp: new Date().toISOString() });
		});

		this.app.post(this.path, async (req: Request, res: Response) => {
			if (this.stopping) {
				res.status(503).json({ error: 'Server is shutting down' });
				return;
			}

			let activeRequest: ActiveRequest | undefined;
			let requestServer: McpServer | undefined;
			try {
				const server = await this.serverFactory();
				requestServer = server;
				const transport = this.transportFactory();
				activeRequest = { server, transport };
				this.activeRequests.add(activeRequest);

				let cleanupStarted = false;
				const removeErrorListeners = () => {
					res.off('error', cleanup);
					req.off('error', cleanup);
					req.socket.off('error', cleanup);
				};
				const cleanup = (error?: Error) => {
					if (cleanupStarted) return;
					cleanupStarted = true;
					if (error) console.error('Streamable HTTP request error:', sanitizeError(error));
					if (activeRequest) {
						void this.closeRequest(activeRequest).catch((closeError) => {
							console.error('Error closing Streamable HTTP request:', sanitizeError(closeError));
						});
					}
				};
				const complete = () => {
					cleanup();
					res.off('finish', complete);
					res.off('close', complete);
					removeErrorListeners();
				};
				res.once('finish', complete);
				res.once('close', complete);
				res.on('error', cleanup);
				req.on('error', cleanup);
				req.socket.on('error', cleanup);

				if (this.stopping) {
					await this.closeRequest(activeRequest);
					if (!res.headersSent) {
						res.status(503).json({ error: 'Server is shutting down' });
					}
					return;
				}

				await server.connect(transport);
				await transport.handleRequest(req, res, req.body);
			} catch (error) {
				console.error('Error handling MCP request:', sanitizeError(error));
				if (!res.headersSent) {
					res.status(500).json({
						jsonrpc: '2.0',
						error: {
							code: -32603,
							message: 'Internal server error'
						},
						id: null
					});
				}
				if (activeRequest) {
					try {
						await this.closeRequest(activeRequest);
					} catch (closeError) {
						console.error('Error closing failed Streamable HTTP request:', sanitizeError(closeError));
					}
				} else if (requestServer) {
					try {
						await runAllOperations([() => requestServer?.close()], 'Failed to close an incomplete Streamable HTTP request.');
					} catch (closeError) {
						console.error('Error closing incomplete Streamable HTTP request:', sanitizeError(closeError));
					}
				}
			}
		});

		let httpServer: Server;
		try {
			httpServer = this.listenFactory(this.app, this.port, this.host);
		} catch (error) {
			this.state = 'idle';
			this.app = undefined;
			throw error;
		}
		this.httpServer = httpServer;
		this.connectionHandler = (socket) => {
			this.sockets.add(socket);
			socket.once('close', () => this.sockets.delete(socket));
		};
		httpServer.on('connection', this.connectionHandler);

		const startPromise = new Promise<void>((resolve, reject) => {
			const onListening = () => {
				if (this.state !== 'starting') return;
				httpServer.off('error', onStartupError);
				this.cleanupStartupListeners = undefined;
				this.rejectStartup = undefined;
				this.state = 'running';
				this.runtimeErrorHandler = onRuntimeError;
				httpServer.on('error', this.runtimeErrorHandler);
				console.error(`MCP Server ready (streamable-http transport on ${this.host}:${this.port}${this.path})`);
				resolve();
			};
			const onStartupError = (error: Error) => {
				httpServer.off('listening', onListening);
				this.cleanupStartupListeners = undefined;
				this.rejectStartup = undefined;
				this.httpServer = undefined;
				this.app = undefined;
				this.state = 'idle';
				reject(error);
			};
			const onRuntimeError = (error: Error) => {
				console.error('Streamable HTTP server error:', sanitizeError(error));
			};

			httpServer.once('listening', onListening);
			httpServer.once('error', onStartupError);
			this.cleanupStartupListeners = () => {
				httpServer.off('listening', onListening);
				httpServer.off('error', onStartupError);
			};
			this.rejectStartup = reject;
		});
		this.startPromise = startPromise;
		void startPromise.catch(() => {});
		try {
			await startPromise;
		} finally {
			if (this.startPromise === startPromise) this.startPromise = undefined;
		}
	}

	async stop(): Promise<void> {
		if (this.state === 'stopping' && this.stopPromise) {
			return this.stopPromise;
		}
		if (this.state === 'idle' && !this.httpServer && this.activeRequests.size === 0) {
			this.stopping = false;
			this.app = undefined;
			return;
		}

		this.stopping = true;
		const wasStarting = this.state === 'starting';
		this.state = 'stopping';
		const httpServer = this.httpServer;
		this.httpServer = undefined;
		if (wasStarting) {
			this.cleanupStartupListeners?.();
			this.cleanupStartupListeners = undefined;
			this.rejectStartup?.(new Error('Streamable HTTP transport stopped during startup.'));
			this.rejectStartup = undefined;
		}
		if (httpServer && this.runtimeErrorHandler) httpServer.off('error', this.runtimeErrorHandler);
		if (httpServer && this.connectionHandler) httpServer.off('connection', this.connectionHandler);
		this.runtimeErrorHandler = undefined;
		this.connectionHandler = undefined;

		let stopPromise!: Promise<void>;
		stopPromise = (async () => {
			const requests = [...this.activeRequests];
			const serverClose = closeHttpServer(httpServer);
			try {
				httpServer?.closeAllConnections?.();
				for (const socket of this.sockets) socket.destroy();
				const errors = await collectOperationErrors([...requests.map((request) => () => this.closeRequest(request)), () => serverClose]);
				throwCollectedErrors(errors, 'Failed to stop all Streamable HTTP resources.');
			} finally {
				this.activeRequests.clear();
				this.sockets.clear();
				this.app = undefined;
				this.state = 'idle';
				this.stopping = false;
				if (this.stopPromise === stopPromise) this.stopPromise = undefined;
			}
		})();
		this.stopPromise = stopPromise;
		return stopPromise;
	}
}

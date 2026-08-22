import type { Server } from 'node:http';
import type { Socket } from 'node:net';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express, { type Request, type Response } from 'express';
import { sanitizeError } from '../../core/errors.js';
import { getServer } from '../server.js';
import { closeHttpServer, collectOperationErrors, runAllOperations, throwCollectedErrors } from './lifecycle.js';
import { createCorsMiddleware, validateSecurityConfig } from './security.js';
import type { McpTransport, WalletMode } from './types.js';

export type McpServerFactory = () => Promise<McpServer>;
export type SseServerTransportFactory = (endpoint: string, response: Response) => SSEServerTransport;
export type SseListenFactory = (app: express.Application, port: number, host: string) => Server;
export const DEFAULT_MAX_SSE_SESSIONS = 100;
type LifecycleState = 'idle' | 'starting' | 'running' | 'stopping';

export interface HttpSseTransportOptions {
	port: number;
	host: string;
	path: string;
	walletMode?: WalletMode;
	maxSessions?: number;
}

export interface HttpSseTransportDependencies {
	serverFactory?: McpServerFactory;
	transportFactory?: SseServerTransportFactory;
	listenFactory?: SseListenFactory;
}

interface SseSession {
	server: McpServer;
	transport: SSEServerTransport;
	releaseSlot: () => void;
	closing?: Promise<void>;
}

export class HttpSseTransport implements McpTransport {
	readonly mode = 'http-sse' as const;
	private readonly app: express.Application;
	private httpServer: Server | undefined;
	private readonly connections = new Map<string, SseSession>();
	private readonly sockets = new Set<Socket>();
	private state: LifecycleState = 'idle';
	private startPromise: Promise<void> | undefined;
	private stopPromise: Promise<void> | undefined;
	private rejectStartup: ((reason: Error) => void) | undefined;
	private cleanupStartupListeners: (() => void) | undefined;
	private runtimeErrorHandler: ((error: Error) => void) | undefined;
	private connectionHandler: ((socket: Socket) => void) | undefined;
	private activeSessionSlots = 0;
	private readonly port: number;
	private readonly host: string;
	private readonly path: string;
	private readonly walletMode: WalletMode;
	private readonly serverFactory: McpServerFactory;
	private readonly transportFactory: SseServerTransportFactory;
	private readonly listenFactory: SseListenFactory;
	private readonly maxSessions: number;

	constructor(options: HttpSseTransportOptions, dependencies: HttpSseTransportDependencies = {}) {
		this.port = options.port;
		this.host = options.host;
		this.path = options.path;
		this.walletMode = options.walletMode ?? 'disabled';
		this.maxSessions = options.maxSessions ?? DEFAULT_MAX_SSE_SESSIONS;
		this.serverFactory = dependencies.serverFactory ?? getServer;
		this.transportFactory = dependencies.transportFactory ?? ((endpoint, response) => new SSEServerTransport(endpoint, response));
		this.listenFactory = dependencies.listenFactory ?? ((app, port, host) => app.listen(port, host));
		this.app = express();
		this.setupMiddleware();
		this.setupRoutes();
	}

	private setupMiddleware(): void {
		this.app.use(express.json());
		this.app.use(createCorsMiddleware());
	}

	private setupRoutes(): void {
		this.app.get('/health', (_req: Request, res: Response) => {
			res.json({ status: 'ok', timestamp: new Date().toISOString() });
		});

		this.app.get(this.path, async (req: Request, res: Response) => {
			if (this.state !== 'running') {
				res.status(503).json({ error: 'Server is shutting down' });
				return;
			}
			if (this.activeSessionSlots >= this.maxSessions) {
				res.status(503).json({ error: 'Maximum SSE sessions reached' });
				return;
			}

			this.activeSessionSlots++;
			let slotReleased = false;
			const releaseSlot = () => {
				if (slotReleased) return;
				slotReleased = true;
				this.activeSessionSlots--;
			};
			let transport: SSEServerTransport;
			try {
				transport = this.transportFactory(`${this.path}/message`, res);
			} catch (error) {
				releaseSlot();
				console.error('Error creating SSE transport:', sanitizeError(error));
				res.status(500).json({ error: 'Internal server error' });
				return;
			}
			const sessionId = transport.sessionId;
			let session: SseSession | undefined;
			let disconnected = false;

			const removeCloseListeners = () => {
				res.off('close', onDisconnect);
				req.socket.off('close', onDisconnect);
			};
			const removeErrorListeners = () => {
				res.off('error', onDisconnect);
				req.off('error', onDisconnect);
				req.socket.off('error', onDisconnect);
			};
			const onDisconnect = (error?: Error) => {
				if (disconnected) return;
				disconnected = true;
				removeCloseListeners();
				if (error) console.error('SSE connection error:', sanitizeError(error));
				void this.closeSession(sessionId)
					.catch((closeError) => {
						console.error('Error closing SSE session:', sanitizeError(closeError));
					})
					.finally(removeErrorListeners);
			};
			res.once('close', onDisconnect);
			req.socket.once('close', onDisconnect);
			res.on('error', onDisconnect);
			req.on('error', onDisconnect);
			req.socket.on('error', onDisconnect);

			try {
				const server = await this.serverFactory();
				session = { server, transport, releaseSlot };

				if (this.state !== 'running' || disconnected) {
					await this.closeDetachedSession(session);
					return;
				}

				this.connections.set(sessionId, session);
				await server.connect(transport);

				if (this.state !== 'running' || disconnected) {
					await this.closeSession(sessionId);
				}
			} catch (error) {
				console.error('Error establishing SSE session:', sanitizeError(error));
				try {
					if (session) {
						if (this.connections.has(sessionId)) await this.closeSession(sessionId);
						else await this.closeDetachedSession(session);
					} else {
						await runAllOperations([() => transport.close()], 'Failed to close an incomplete SSE session.').finally(releaseSlot);
					}
				} catch (closeError) {
					console.error('Error closing failed SSE session:', sanitizeError(closeError));
				}
				if (!res.headersSent) {
					res.status(500).json({ error: 'Internal server error' });
				} else if (!res.writableEnded) {
					res.end();
				}
			}
		});

		this.app.post(`${this.path}/message`, async (req: Request, res: Response) => {
			const sessionId = typeof req.query.sessionId === 'string' ? req.query.sessionId : undefined;
			if (!sessionId) {
				res.status(400).json({ error: 'Missing sessionId' });
				return;
			}

			const session = this.connections.get(sessionId);
			if (!session) {
				res.status(404).json({ error: 'Session not found' });
				return;
			}

			try {
				await session.transport.handlePostMessage(req, res, req.body);
			} catch (error) {
				console.error('Error handling SSE message:', sanitizeError(error));
				if (!res.headersSent) {
					res.status(500).json({ error: 'Internal server error' });
				}
			}
		});
	}

	private closeDetachedSession(session: SseSession): Promise<void> {
		if (!session.closing) {
			session.closing = runAllOperations([() => session.transport.close(), () => session.server.close()], 'Failed to close all SSE session resources.').finally(
				session.releaseSlot
			);
		}
		return session.closing;
	}

	private async closeSession(sessionId: string): Promise<void> {
		const session = this.connections.get(sessionId);
		if (!session) return;

		this.connections.delete(sessionId);
		await this.closeDetachedSession(session);
	}

	getListeningPort(): number | undefined {
		const address = this.httpServer?.address();
		return address && typeof address === 'object' ? address.port : undefined;
	}

	async start(_server?: McpServer): Promise<void> {
		validateSecurityConfig(this.mode, this.walletMode);
		if (this.host.trim().length === 0) {
			throw new Error('SERVER_HOST must not be empty.');
		}
		if (!Number.isInteger(this.maxSessions) || this.maxSessions < 1) {
			throw new Error('SSE_MAX_SESSIONS must be a positive integer.');
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
			throw new Error('HTTP SSE transport is already started.');
		}

		this.state = 'starting';
		let httpServer: Server;
		try {
			httpServer = this.listenFactory(this.app, this.port, this.host);
		} catch (error) {
			this.state = 'idle';
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
				console.error(`MCP Server ready (http-sse transport on ${this.host}:${this.port}${this.path})`);
				resolve();
			};
			const onStartupError = (error: Error) => {
				httpServer.off('listening', onListening);
				this.cleanupStartupListeners = undefined;
				this.rejectStartup = undefined;
				this.httpServer = undefined;
				this.state = 'idle';
				reject(error);
			};
			const onRuntimeError = (error: Error) => {
				console.error('HTTP SSE server error:', sanitizeError(error));
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
		if (this.state === 'idle' && !this.httpServer && this.connections.size === 0) {
			return;
		}

		const wasStarting = this.state === 'starting';
		this.state = 'stopping';
		const httpServer = this.httpServer;
		this.httpServer = undefined;
		if (wasStarting) {
			this.cleanupStartupListeners?.();
			this.cleanupStartupListeners = undefined;
			this.rejectStartup?.(new Error('HTTP SSE transport stopped during startup.'));
			this.rejectStartup = undefined;
		}
		if (httpServer && this.runtimeErrorHandler) httpServer.off('error', this.runtimeErrorHandler);
		if (httpServer && this.connectionHandler) httpServer.off('connection', this.connectionHandler);
		this.runtimeErrorHandler = undefined;
		this.connectionHandler = undefined;

		let stopPromise!: Promise<void>;
		stopPromise = (async () => {
			const sessions = [...this.connections.values()];
			this.connections.clear();
			const serverClose = closeHttpServer(httpServer);
			try {
				httpServer?.closeAllConnections?.();
				for (const socket of this.sockets) socket.destroy();
				const errors = await collectOperationErrors([...sessions.map((session) => () => this.closeDetachedSession(session)), () => serverClose]);
				throwCollectedErrors(errors, 'Failed to stop all HTTP SSE resources.');
			} finally {
				this.connections.clear();
				this.sockets.clear();
				this.state = 'idle';
				if (this.stopPromise === stopPromise) this.stopPromise = undefined;
			}
		})();
		this.stopPromise = stopPromise;
		return stopPromise;
	}
}

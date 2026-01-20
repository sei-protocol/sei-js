import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express, { type Request, type Response } from 'express';
import type { Server } from 'node:http';
import type { McpTransport } from './types.js';
import { createCorsMiddleware, validateSecurityConfig } from './security.js';

export class HttpSseTransport implements McpTransport {
	readonly mode = 'http-sse' as const;
	private app: express.Application;
	private httpServer: Server | null = null;
	private connections = new Map<string, SSEServerTransport>();
	private mcpServer: McpServer | null = null;
	private walletMode: string;

	constructor(
		private port: number,
		private host: string,
		private path: string,
		walletMode = 'disabled'
	) {
		this.walletMode = walletMode;
		this.app = express();
		this.setupMiddleware();
		this.setupRoutes();
	}

	private setupMiddleware() {
		this.app.use(express.json());
		
		// Secure CORS - no cross-origin allowed by default
		this.app.use(createCorsMiddleware());
	}

	private setupRoutes() {
		// Health check endpoint
		this.app.get('/health', (req: Request, res: Response) => {
			res.json({ status: 'ok', timestamp: new Date().toISOString() });
		});

		this.app.get(this.path, (req: Request, res: Response) => {
			console.error(`SSE connection from ${req.ip}`);
			
			// Create SSE transport - it will handle headers automatically
			const transport = new SSEServerTransport(`${this.path}/message`, res);
			const sessionId = Date.now().toString();
			this.connections.set(sessionId, transport);
			
			// Connect transport to MCP server
			if (this.mcpServer) {
				this.mcpServer.connect(transport);
			}

			// Clean up on disconnect
			req.on('close', () => {
				this.connections.delete(sessionId);
				console.error(`SSE connection closed for session ${sessionId}`);
			});
		});

		// Message endpoint for SSE transport
		this.app.post(`${this.path}/message`, async (req: Request, res: Response) => {
			try {
				// Find the first available transport (simple approach for now)
				const transport = Array.from(this.connections.values())[0];
				if (!transport) {
					res.status(404).json({ error: 'No active SSE connection' });
					return;
				}

				await transport.handleMessage(req.body);
				res.status(200).end();
			} catch (error) {
				console.error('Error handling message:', error);
				res.status(500).json({ error: 'Internal server error' });
			}
		});
	}

	async start(server: McpServer): Promise<void> {
		// Block wallet mode on HTTP transports
		validateSecurityConfig(this.mode, this.walletMode);

		this.mcpServer = server;
		return new Promise((resolve, reject) => {
			this.httpServer = this.app.listen(this.port, this.host, () => {
				console.error(`MCP Server ready (http-sse transport on ${this.host}:${this.port}${this.path})`);
				resolve();
			});

			this.httpServer.on('error', (error: Error) => {
				console.error('Error starting server:', error);
				reject(error);
			});

			// Handle graceful shutdown
			const cleanup = () => {
				console.error('Shutting down HTTP SSE server...');
				this.connections.clear();
				if (this.httpServer) {
					this.httpServer.close();
				}
			};

			process.on('SIGINT', cleanup);
			process.on('SIGTERM', cleanup);
		});
	}

	async stop(): Promise<void> {
		return new Promise((resolve) => {
			if (this.httpServer) {
				this.httpServer.close(() => {
					console.error('HTTP SSE server stopped');
					resolve();
				});
			} else {
				resolve();
			}
		});
	}
}

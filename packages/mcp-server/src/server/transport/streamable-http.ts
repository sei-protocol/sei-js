import express, { type Request, type Response } from 'express';
import type { Server } from 'node:http';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { McpTransport, TransportMode } from './types.js';
import {getServer} from '../server.js';

export class StreamableHttpTransport implements McpTransport {
	public readonly mode: TransportMode = 'streamable-http';
	private port: number;
	private host: string;
	private path: string;
	private app?: express.Express;
	private server?: Server;

	constructor(port = 8080, host = 'localhost', path = '/mcp') {
		this.port = port;
		this.host = host;
		this.path = path;
	}

	// Note: server parameter ignored for now as this is a stateless server
	// TODO: allow creating both stateless and stateful remote MCP servers
	async start(_server: McpServer): Promise<void> {
		this.app = express();
		this.app.use(express.json());
		this.app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
			res.header('Access-Control-Allow-Headers', 'Content-Type');
			if (req.method === 'OPTIONS') {
				return res.sendStatus(200);
			}
			next();
		});


		this.app.post(this.path, async (req: Request, res: Response) => {
			try {
				// Create fresh MCP server for this request (stateless design)
				const mcpServer = await getServer();
				
				const transport = new StreamableHTTPServerTransport({
					sessionIdGenerator: undefined // For stateless servers
				});

				res.on('close', () => {
					console.log('Request closed');
					transport.close();
					mcpServer.close();
				});

				await mcpServer.connect(transport);
				await transport.handleRequest(req, res, req.body);
			} catch (error) {
				console.error('Error handling MCP request:', error);
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
			}
		});

		this.server = this.app.listen(this.port, this.host, () => {
			console.error(`MCP Server ready (streamable-http transport on ${this.host}:${this.port}${this.path})`);
		});
		this.server.on('error', (error) => {
			console.error('Error starting server:', error);
		});
	}

	async stop(): Promise<void> {
		if (this.server) {
			return new Promise<void>((resolve) => {
				if (this.server) {
					this.server.close(() => {
						this.server = undefined;
						this.app = undefined;
						resolve();
					});
				} else {
					resolve();
				}
			});
		}
	}
}

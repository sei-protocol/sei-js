import { Command } from 'commander';
import { config as dotenvConfig } from 'dotenv';
import { initializeConfig } from '../core/config.js';
import { validatePrivateKeyConfiguration } from '../core/private-key.js';
import { getPackageInfo } from './package-info.js';
import type { TransportConfig, TransportMode } from './transport/types.js';

const DEFAULT_CONFIG = {
	server: {
		port: 8080,
		host: 'localhost',
		path: '/mcp',
		transport: 'stdio' as const,
		sseMaxSessions: 100,
		streamableMaxRequests: 100
	},
	wallet: {
		mode: 'disabled' as const,
		privateKey: ''
	},
	rpc: {
		mainnet: '',
		testnet: ''
	}
};

// Helper to get env value with default
const getEnvValue = (key: string, defaultValue: string) => {
	const value = process.env[key];
	return value === undefined || value.trim().length === 0 ? defaultValue : value;
};

const loadConfig = () => {
	// Load .env file
	dotenvConfig();

	// Parse numeric values
	const port = Number(getEnvValue('SERVER_PORT', DEFAULT_CONFIG.server.port.toString()));
	const sseMaxSessions = Number(getEnvValue('SSE_MAX_SESSIONS', DEFAULT_CONFIG.server.sseMaxSessions.toString()));
	const streamableMaxRequests = Number(getEnvValue('STREAMABLE_HTTP_MAX_REQUESTS', DEFAULT_CONFIG.server.streamableMaxRequests.toString()));

	// Normalize path to ensure it starts with /
	const rawPath = getEnvValue('SERVER_PATH', DEFAULT_CONFIG.server.path);
	const normalizedPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

	const config = {
		server: {
			port,
			host: getEnvValue('SERVER_HOST', DEFAULT_CONFIG.server.host),
			path: normalizedPath,
			transport: getEnvValue('SERVER_TRANSPORT', DEFAULT_CONFIG.server.transport) as TransportMode,
			sseMaxSessions,
			streamableMaxRequests
		},
		wallet: {
			mode: getEnvValue('WALLET_MODE', DEFAULT_CONFIG.wallet.mode) as 'private-key' | 'disabled',
			privateKey: getEnvValue('PRIVATE_KEY', DEFAULT_CONFIG.wallet.privateKey)
		},
		rpc: {
			mainnet: getEnvValue('MAINNET_RPC_URL', DEFAULT_CONFIG.rpc.mainnet),
			testnet: getEnvValue('TESTNET_RPC_URL', DEFAULT_CONFIG.rpc.testnet)
		}
	};

	return config;
};

const validateConfig = (config: ReturnType<typeof loadConfig>) => {
	// Validate wallet mode
	const validWalletModes = ['private-key', 'disabled'];
	if (!validWalletModes.includes(config.wallet.mode)) {
		throw new Error(`Invalid wallet mode '${config.wallet.mode}'. Valid modes are: ${validWalletModes.join(', ')}`);
	}

	// Validate transport mode
	const validTransportModes = ['stdio', 'streamable-http', 'http-sse'];
	if (!validTransportModes.includes(config.server.transport)) {
		throw new Error(`Invalid transport mode '${config.server.transport}'. Valid modes are: ${validTransportModes.join(', ')}`);
	}

	const isHttpTransport = config.server.transport === 'streamable-http' || config.server.transport === 'http-sse';
	if (isHttpTransport && (!Number.isInteger(config.server.port) || config.server.port < 1 || config.server.port > 65535)) {
		throw new Error(`Invalid port '${config.server.port}'. Port must be a number between 1 and 65535.`);
	}
	if (isHttpTransport && config.server.host.trim().length === 0) {
		throw new Error('SERVER_HOST must not be empty.');
	}
	if (config.server.transport === 'http-sse' && (!Number.isInteger(config.server.sseMaxSessions) || config.server.sseMaxSessions < 1)) {
		throw new Error(`Invalid SSE_MAX_SESSIONS '${config.server.sseMaxSessions}'. Value must be a positive integer.`);
	}
	if (config.server.transport === 'streamable-http' && (!Number.isInteger(config.server.streamableMaxRequests) || config.server.streamableMaxRequests < 1)) {
		throw new Error(`Invalid STREAMABLE_HTTP_MAX_REQUESTS '${config.server.streamableMaxRequests}'. Value must be a positive integer.`);
	}

	validatePrivateKeyConfiguration(config.wallet.mode, config.wallet.privateKey);
};

export const parseArgs = (): TransportConfig => {
	const packageInfo = getPackageInfo();
	const program = new Command()
		.name(packageInfo.name)
		.description(packageInfo.description)
		.version(packageInfo.version)
		.addHelpText(
			'after',
			`
Examples:
  Default (STDIO transport):
    $ npx ${packageInfo.name}
    
  HTTP SSE transport on port 3001:
    $ SERVER_TRANSPORT=http-sse SERVER_PORT=3001 npx ${packageInfo.name}
    
  Streamable HTTP transport with custom path:
    $ SERVER_TRANSPORT=streamable-http SERVER_PORT=8080 SERVER_PATH=/api/mcp npx ${packageInfo.name}
    
  With wallet enabled (STDIO transport only):
    $ WALLET_MODE=private-key PRIVATE_KEY=your_private_key_here npx ${packageInfo.name}

Environment Variables:
  SERVER_TRANSPORT    Transport mode: stdio, streamable-http, http-sse (default: stdio)
  SERVER_PORT         Server port for HTTP transports (default: 8080)
  SERVER_HOST         Server host (default: localhost)
  SERVER_PATH         Server path for HTTP transports (default: /mcp)
  SSE_MAX_SESSIONS    Maximum concurrent legacy SSE sessions (default: 100)
  STREAMABLE_HTTP_MAX_REQUESTS
                      Maximum concurrent Streamable HTTP requests (default: 100)
  PRIVATE_KEY         Required valid 32-byte key when WALLET_MODE=private-key
  WALLET_MODE         Wallet mode: private-key, disabled (default: disabled)
  MAINNET_RPC_URL     Custom RPC URL for Sei mainnet (optional)
  TESTNET_RPC_URL     Custom RPC URL for Sei testnet (optional)

Supported Network Selectors:
  Mainnet: sei, 1329, 0x531
  Testnet: sei-testnet, 1328, 0x530
  Unknown selectors are rejected and never fall back to mainnet.

Security Note:
  Wallet mode is only supported with stdio transport. HTTP transports block
  wallet mode to prevent cross-origin attacks from malicious websites. HTTP
  transports do not authenticate callers; bind locally or use a secure proxy.
`
		);

	program.parse();

	const config = loadConfig();

	validateConfig(config);
	initializeConfig(process.env);

	return {
		mode: config.server.transport,
		port: Number.isNaN(config.server.port) ? DEFAULT_CONFIG.server.port : config.server.port,
		host: config.server.host,
		path: config.server.path,
		walletMode: config.wallet.mode,
		maxSseSessions:
			Number.isInteger(config.server.sseMaxSessions) && config.server.sseMaxSessions > 0 ? config.server.sseMaxSessions : DEFAULT_CONFIG.server.sseMaxSessions,
		maxStreamableRequests:
			Number.isInteger(config.server.streamableMaxRequests) && config.server.streamableMaxRequests > 0
				? config.server.streamableMaxRequests
				: DEFAULT_CONFIG.server.streamableMaxRequests
	};
};

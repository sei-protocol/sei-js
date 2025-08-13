import { Command } from 'commander';
import { config as dotenvConfig } from 'dotenv';
import { getPackageInfo } from '../core/package-info.js';
import type { TransportConfig, TransportMode } from './transport/types.js';

const DEFAULT_CONFIG = {
	server: {
		port: 8080,
		host: 'localhost',
		path: '/mcp',
		transport: 'stdio' as const
	},
	wallet: {
		mode: 'disabled' as const,
		privateKey: ''
	},
	rpc: {
		mainnet: '',
		testnet: '',
		devnet: ''
	}
};

// Helper to get env value with default
const getEnvValue = (key: string, defaultValue: string) => {
	return process.env[key] ?? defaultValue;
};

const loadConfig = () => {
	// Load .env file
	dotenvConfig();

	// Parse numeric values
	const port = Number.parseInt(getEnvValue('SERVER_PORT', DEFAULT_CONFIG.server.port.toString()), 10);
	
	// Normalize path to ensure it starts with /
	const rawPath = getEnvValue('SERVER_PATH', DEFAULT_CONFIG.server.path);
	const normalizedPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
	
	const config = {
		server: {
			port: Number.isNaN(port) ? DEFAULT_CONFIG.server.port : port,
			host: getEnvValue('SERVER_HOST', DEFAULT_CONFIG.server.host),
			path: normalizedPath,
			transport: getEnvValue('SERVER_TRANSPORT', DEFAULT_CONFIG.server.transport) as TransportMode
		},
		wallet: {
			mode: getEnvValue('WALLET_MODE', DEFAULT_CONFIG.wallet.mode) as 'private-key' | 'disabled',
			privateKey: getEnvValue('PRIVATE_KEY', DEFAULT_CONFIG.wallet.privateKey)
		},
		rpc: {
			mainnet: getEnvValue('MAINNET_RPC_URL', DEFAULT_CONFIG.rpc.mainnet),
			testnet: getEnvValue('TESTNET_RPC_URL', DEFAULT_CONFIG.rpc.testnet),
			devnet: getEnvValue('DEVNET_RPC_URL', DEFAULT_CONFIG.rpc.devnet)
		}
	};
	
	return config;
};

const validateConfig = (config: ReturnType<typeof loadConfig>) => {
	// Validate wallet mode
	const validWalletModes = ['private-key', 'disabled'];
	if (!validWalletModes.includes(config.wallet.mode)) {
		console.error(`Error: Invalid wallet mode '${config.wallet.mode}'. Valid modes are: ${validWalletModes.join(', ')}`);
		process.exit(1);
	}
	
	// Validate transport mode
	const validTransportModes = ['stdio', 'streamable-http', 'http-sse'];
	if (!validTransportModes.includes(config.server.transport)) {
		console.error(`Error: Invalid transport mode '${config.server.transport}'. Valid modes are: ${validTransportModes.join(', ')}`);
		process.exit(1);
	}
	
	// Validate port
	if (config.server.port < 1 || config.server.port > 65535) {
		console.error(`Error: Invalid port '${config.server.port}'. Port must be a number between 1 and 65535.`);
		process.exit(1);
	}
};

export const parseArgs = (): TransportConfig => {
	const packageInfo = getPackageInfo();
	const program = new Command()
		.name(packageInfo.name)
		.description(packageInfo.description)
		.version(packageInfo.version)
		.addHelpText('after', `
Examples:
  Default (STDIO transport):
    $ npx ${packageInfo.name}
    
  HTTP SSE transport on port 3001:
    $ SERVER_TRANSPORT=http-sse SERVER_PORT=3001 npx ${packageInfo.name}
    
  Streamable HTTP transport with custom path:
    $ SERVER_TRANSPORT=streamable-http SERVER_PORT=8080 SERVER_PATH=/api/mcp npx ${packageInfo.name}
    
  With wallet enabled:
    $ WALLET_MODE=private-key PRIVATE_KEY=your_private_key_here npx ${packageInfo.name}

Environment Variables:
  SERVER_TRANSPORT    Transport mode: stdio, streamable-http, http-sse (default: stdio)
  SERVER_PORT         Server port for HTTP transports (default: 8080)
  SERVER_HOST         Server host (default: localhost)
  SERVER_PATH         Server path for HTTP transports (default: /mcp)
  PRIVATE_KEY         Private key for wallet operations (optional)
  WALLET_MODE         Wallet mode: private-key, disabled (default: disabled)
`);

	program.parse();
	
	const config = loadConfig();
	
	validateConfig(config);

	return { 
		mode: config.server.transport, 
		port: config.server.port, 
		host: config.server.host, 
		path: config.server.path,
		walletMode: config.wallet.mode
	};
};

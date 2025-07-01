#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Parse command line arguments
const args = process.argv.slice(2);
const httpMode = args.includes('--http') || args.includes('-h');

// Parse wallet mode argument
let walletMode = null;
const walletModeIndex = args.findIndex(arg => arg === '--wallet-mode');
if (walletModeIndex !== -1 && walletModeIndex + 1 < args.length) {
  walletMode = args[walletModeIndex + 1];
}

// Set environment variables based on CLI arguments
if (walletMode) {
  const validModes = ['private-key', 'disabled'];
  if (validModes.includes(walletMode)) {
    process.env.WALLET_MODE = walletMode;
  } else {
    console.error(`Invalid wallet mode: ${walletMode}. Valid modes are: ${validModes.join(', ')}`);
    process.exit(1);
  }
}

// Determine which file to execute
const scriptPath = resolve(__dirname, '../dist/esm', httpMode ? '/server/http-server.js' : 'index.js');

try {
  // Check if the built files exist
  require.resolve(scriptPath);

  // Execute the server
  const server = spawn('node', [scriptPath], {
    stdio: 'inherit',
    shell: false
  });

  server.on('error', (err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });

  // Handle clean shutdown
  const cleanup = () => {
    if (!server.killed) {
      server.kill();
    }
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('exit', cleanup);

} catch (error) {
  console.error('Error: Server files not found. The package may not be built correctly.');
  console.error('Please try reinstalling the package or contact the maintainers.');
  console.error('\nUsage:');
  console.error('  mcp-server                     # Start in STDIO mode (default)');
  console.error('  mcp-server --http              # Start in HTTP mode');
  console.error('  mcp-server --wallet-mode MODE  # Set wallet mode (private-key|dynamic|porto|disabled)');
  console.error(error);
  process.exit(1);
}
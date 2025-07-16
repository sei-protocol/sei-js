<div align="center">

# @sei-js/mcp-server

[![npm version](https://badge.fury.io/js/@sei-js%2Fmcp-server.svg)](https://badge.fury.io/js/@sei-js%2Fmcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

**Enable AI assistants to interact with the Sei blockchain**

[Documentation](https://sei-js.docs.sei.io/mcp-server/introduction) • [GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/mcp-server) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## 🚀 Quick Start

### Basic Setup (Read-Only)

Start with read-only blockchain data access:

```json
{
  "mcpServers": {
    "sei": {
      "command": "npx",
      "args": ["-y", "@sei-js/mcp-server"]
    }
  }
}
```

### Full Setup (With Wallet)

To enable transactions and wallet tools, add the wallet mode flag and private key:

```json
{
  "mcpServers": {
    "sei": {
      "command": "npx",
      "args": ["-y", "@sei-js/mcp-server"],
      "env": {
        "WALLET_MODE": "private-key",
        "PRIVATE_KEY": "0x123..."
      }
    }
  }
}
```

## 📚 Documentation

For complete documentation, examples, and guides, visit:
**[sei-js.docs.sei.io/mcp-server](https://sei-js.docs.sei.io/mcp-server/introduction)**



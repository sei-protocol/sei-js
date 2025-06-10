# @sei-js/precompiles Examples

This package contains working examples that demonstrate all the functionality shown in the [@sei-js/precompiles README](../../packages/precompiles/README.md). Each example is fully functional and can be run against Sei networks.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Run examples:**
   ```bash
   # Run all examples
   yarn dev

   # Run specific examples
   yarn dev viem
   yarn dev ethers
   yarn dev bank
   yarn dev oracle
   yarn dev staking
   ```

4. **Run tests:**
   ```bash
   # Run all tests
   yarn test

   # Run tests with UI
   yarn test:ui
   ```

## 📁 Project Structure

```
src/
├── index.ts              # Main entry point
├── config/
│   ├── networks.ts       # Network configurations
│   └── constants.ts      # Contract addresses and constants
├── examples/
│   ├── viem/            # Viem integration examples
│   │   ├── bank.ts      # Bank precompile with Viem
│   │   ├── oracle.ts    # Oracle precompile with Viem
│   │   └── staking.ts   # Staking precompile with Viem
│   ├── ethers/          # Ethers.js integration examples
│   │   ├── bank.ts      # Bank precompile with Ethers.js
│   │   ├── oracle.ts    # Oracle precompile with Ethers.js
│   │   └── staking.ts   # Staking precompile with Ethers.js
│   └── utils/
│       ├── setup.ts     # Common setup utilities
│       └── helpers.ts   # Helper functions
└── tests/
    ├── viem.test.ts     # Viem examples tests
    ├── ethers.test.ts   # Ethers.js examples tests
    └── integration.test.ts # Integration tests
```

## 🔧 Examples Included

### Viem Integration
- ✅ **Quick Start Example** - Basic setup and configuration
- ✅ **Bank Precompile** - Token operations and balance queries
- ✅ **Oracle Precompile** - Price data and exchange rates
- ✅ **Staking Precompile** - Validator operations and delegation

### Ethers.js Integration
- ✅ **Quick Start Example** - Basic setup and configuration
- ✅ **Bank Precompile** - Token operations using contract factories
- ✅ **Oracle Precompile** - Price queries with typed contracts
- ✅ **Staking Precompile** - Delegation and validator operations

### Additional Examples
- ✅ **Network Configuration** - Setting up different Sei networks
- ✅ **Error Handling** - Proper error handling patterns
- ✅ **Type Safety** - Full TypeScript type safety demonstrations
- ✅ **Best Practices** - Production-ready code patterns

## 🧪 Testing

All examples include comprehensive tests that validate:
- ✅ Contract address validation
- ✅ ABI compatibility
- ✅ Function signature verification
- ✅ Type safety
- ✅ Network connectivity
- ✅ Error handling

## 📚 Documentation

Each example includes:
- **Inline comments** explaining every step
- **Type annotations** for full TypeScript support
- **Error handling** with proper try/catch blocks
- **Console logging** for debugging and learning
- **Real-world patterns** suitable for production use

## 🔗 Related

- **[@sei-js/precompiles](../../packages/precompiles)** - The main precompiles package
- **[Sei Documentation](https://docs.sei.io)** - Official Sei documentation
- **[Viem Documentation](https://viem.sh)** - Viem library documentation
- **[Ethers.js Documentation](https://docs.ethers.org)** - Ethers.js library documentation

## ⚠️ Important Notes

- **Test Network**: Examples are configured for Sei testnet by default
- **Private Keys**: Never commit real private keys to version control
- **Gas Fees**: All transactions require gas fees in SEI tokens
- **Rate Limits**: Be mindful of RPC rate limits when running examples

## 🆘 Support

If you encounter issues with these examples:
1. Check your `.env` configuration
2. Ensure you have testnet SEI tokens
3. Verify network connectivity
4. Review the console logs for detailed error messages

For additional support, visit the [Sei Discord](https://discord.gg/sei) or [create an issue](https://github.com/sei-protocol/sei-js/issues).

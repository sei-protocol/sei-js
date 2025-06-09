# @sei-js/evm Documentation Expansion Outline

## Overview
This document outlines the comprehensive documentation structure for the `@sei-js/evm` package, designed to provide developers with clear, organized, and practical guidance for building EVM applications on Sei.

## Proposed Mintlify Navigation Structure

### Main EVM Documentation Site (`/docs/evm/`)

```json
{
  "navigation": [
    {
      "group": "Getting Started",
      "pages": [
        "introduction",
        "installation",
        "quick-start"
      ]
    },
    {
      "group": "Ethers.js Integration",
      "pages": [
        "ethers/overview",
        "ethers/setup",
        "ethers/wallet-connection",
        "ethers/precompile-contracts",
        "ethers/examples"
      ]
    },
    {
      "group": "Viem Integration", 
      "pages": [
        "viem/overview",
        "viem/setup",
        "viem/chain-configuration",
        "viem/precompile-contracts",
        "viem/examples"
      ]
    },
    {
      "group": "Precompile Contracts",
      "pages": [
        "precompiles/overview",
        "precompiles/address",
        "precompiles/bank",
        "precompiles/staking",
        "precompiles/governance",
        "precompiles/distribution",
        "precompiles/ibc",
        "precompiles/wasm",
        "precompiles/oracle",
        "precompiles/json",
        "precompiles/pointer",
        "precompiles/pointerview",
        "precompiles/confidential-transfers"
      ]
    },
    {
      "group": "Guides & Tutorials",
      "pages": [
        "guides/wallet-integration",
        "guides/token-operations",
        "guides/staking-delegation",
        "guides/governance-participation",
        "guides/cross-chain-transfers",
        "guides/cosmwasm-interaction",
        "guides/price-feeds",
        "guides/privacy-features"
      ]
    },
    {
      "group": "Framework Integration",
      "pages": [
        "frameworks/react",
        "frameworks/nextjs",
        "frameworks/vue",
        "frameworks/wagmi",
        "frameworks/rainbowkit"
      ]
    },
    {
      "group": "Advanced Topics",
      "pages": [
        "advanced/custom-chains",
        "advanced/error-handling",
        "advanced/performance-optimization",
        "advanced/security-best-practices",
        "advanced/testing"
      ]
    },
    {
      "group": "Reference",
      "pages": [
        "reference/api-overview",
        "reference/type-definitions",
        "reference/contract-addresses",
        "reference/migration-guide"
      ]
    }
  ]
}
```

## Detailed Page Content Structure

### 1. Getting Started Group

#### `introduction.mdx`
- What is @sei-js/evm
- Key features and capabilities
- Comparison with other EVM libraries
- When to use this package
- Architecture overview

#### `installation.mdx`
- NPM/Yarn installation
- Peer dependencies
- TypeScript setup
- Environment configuration
- Troubleshooting common installation issues

#### `quick-start.mdx`
- 5-minute setup guide
- Basic wallet connection
- Simple precompile interaction
- First transaction example
- Next steps

### 2. Ethers.js Integration Group

#### `ethers/overview.mdx`
- Ethers.js compatibility
- Package exports and structure
- Core concepts
- Benefits of using with Sei

#### `ethers/setup.mdx`
- Provider configuration
- Signer setup
- Network configuration
- Connection examples

#### `ethers/wallet-connection.mdx`
- MetaMask integration
- WalletConnect setup
- Browser wallet detection
- Mobile wallet support
- Error handling

#### `ethers/precompile-contracts.mdx`
- Contract factory functions
- ABI usage
- Type safety
- Common patterns
- Best practices

#### `ethers/examples.mdx`
- Complete working examples
- Real-world use cases
- Code snippets
- Interactive demos

### 3. Viem Integration Group

#### `viem/overview.mdx`
- Viem compatibility and benefits
- Type-safe contract interactions
- Performance advantages
- Package structure

#### `viem/setup.mdx`
- Client configuration
- Transport setup
- Account management
- Chain configuration

#### `viem/chain-configuration.mdx`
- Sei chain definitions
- Custom chain setup
- RPC configuration
- Network switching

#### `viem/precompile-contracts.mdx`
- Typed ABI usage
- Contract interactions
- Read/write operations
- Event handling

#### `viem/examples.mdx`
- Practical examples
- Integration patterns
- Best practices
- Performance tips

### 4. Precompile Contracts Group

#### `precompiles/overview.mdx`
- What are precompiles
- Sei's precompile architecture
- Available contracts
- Use cases and benefits

#### Individual Precompile Pages
Each precompile gets its own detailed page:

**`precompiles/address.mdx`**
- Address association functionality
- EVM ↔ Sei address mapping
- Association methods
- Code examples for both Ethers and Viem

**`precompiles/bank.mdx`**
- Token balance queries
- Multi-denom support
- Metadata retrieval
- Integration examples

**`precompiles/staking.mdx`**
- Validator delegation
- Undelegation process
- Reward claiming
- Validator queries

**`precompiles/governance.mdx`**
- Proposal voting
- Deposit functionality
- Governance participation
- Vote tracking

**`precompiles/distribution.mdx`**
- Reward distribution
- Commission queries
- Withdrawal operations
- Validator rewards

**`precompiles/ibc.mdx`**
- Cross-chain transfers
- Channel configuration
- Timeout handling
- Transfer tracking

**`precompiles/wasm.mdx`**
- CosmWasm contract interaction
- Contract execution
- Query operations
- Instantiation

**`precompiles/oracle.mdx`**
- Price feed access
- TWAP calculations
- Exchange rate queries
- Oracle data usage

**`precompiles/json.mdx`**
- JSON parsing utilities
- Data extraction
- Type conversion
- Helper functions

**`precompiles/pointer.mdx`**
- Token pointer creation
- ERC20 ↔ Cosmos token mapping
- Pointer management
- Use cases

**`precompiles/pointerview.mdx`**
- Pointer queries
- Token discovery
- Metadata retrieval
- Integration patterns

**`precompiles/confidential-transfers.mdx`**
- Privacy features
- Encrypted transactions
- Key management
- Security considerations

### 5. Guides & Tutorials Group

#### Practical Implementation Guides
- **Wallet Integration**: Complete wallet connection flows
- **Token Operations**: Transfer, balance, allowance management
- **Staking Delegation**: Full staking workflow
- **Governance Participation**: Voting and proposal interaction
- **Cross-chain Transfers**: IBC transfer implementation
- **CosmWasm Interaction**: Smart contract integration
- **Price Feeds**: Oracle data integration
- **Privacy Features**: Confidential transfer implementation

### 6. Framework Integration Group

#### Framework-Specific Guides
- **React**: Hooks, context providers, component patterns
- **Next.js**: SSR considerations, API routes, middleware
- **Vue**: Composition API, reactive patterns
- **Wagmi**: Configuration, hooks, connectors
- **RainbowKit**: Wallet connection UI

### 7. Advanced Topics Group

#### Advanced Implementation Topics
- **Custom Chains**: Adding new networks
- **Error Handling**: Comprehensive error management
- **Performance Optimization**: Best practices for speed
- **Security Best Practices**: Safe contract interaction
- **Testing**: Unit and integration testing strategies

### 8. Reference Group

#### Technical Reference
- **API Overview**: Complete API documentation
- **Type Definitions**: TypeScript interfaces and types
- **Contract Addresses**: All precompile addresses
- **Migration Guide**: Upgrading between versions

## Content Features

### Rich Mintlify Components
- **CardGroup**: Feature overviews and comparisons
- **Steps**: Step-by-step tutorials
- **CodeGroup**: Multi-language/framework examples
- **AccordionGroup**: FAQ and troubleshooting
- **Callout**: Important notes and warnings
- **Tabs**: Framework-specific content

### Code Examples
- Complete, runnable examples
- Both Ethers.js and Viem implementations
- Real-world use cases
- Interactive code snippets
- Copy-paste ready code

### Cross-References
- Links between related concepts
- Integration with main SeiJS docs
- External resource links
- API reference integration

## Implementation Priority

### Phase 1: Core Documentation
1. Getting Started pages
2. Basic Ethers.js integration
3. Basic Viem integration
4. Top 5 precompiles (Address, Bank, Staking, Governance, IBC)

### Phase 2: Comprehensive Coverage
1. All remaining precompiles
2. Framework integration guides
3. Advanced topics
4. Complete examples

### Phase 3: Enhancement
1. Interactive demos
2. Video tutorials
3. Community examples
4. Performance benchmarks

## Success Metrics

### Developer Experience
- Time to first successful transaction
- Documentation completeness score
- Community feedback and contributions
- Support ticket reduction

### Content Quality
- Code example accuracy
- Up-to-date information
- Clear explanations
- Comprehensive coverage

This outline provides a structured approach to creating comprehensive, user-friendly documentation for the @sei-js/evm package that will help developers quickly understand and implement EVM functionality on Sei.

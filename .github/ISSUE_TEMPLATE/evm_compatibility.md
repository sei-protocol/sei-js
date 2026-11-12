---
name: EVM compatibility
about: Report EVM behavior on Sei that differs from what viem, wagmi, ethers, a wallet, or JSON-RPC lead you to expect
title: "[EVM-COMPAT] Issue Title"
labels: evm-compat, linear
assignees: ""

---

Check the [EVM parity matrix](https://docs.sei.io/evm/sei-js/evm-parity) first. Workflows marked **Network-limited** there are intentional Sei differences, and the matrix links to the page that explains each one.

**Library or tool**
Which library, wallet connector, JSON-RPC method, template, or docs page is involved? Include its version.

Library and version:

**Affected `@sei-js` package and version**
Select the package involved, if any:

- [ ] `@sei-js/create-sei`
- [ ] `@sei-js/mcp-server`
- [ ] `@sei-js/precompiles`
- [ ] `@sei-js/registry`
- [ ] `@sei-js/sei-global-wallet`
- [ ] None. I used a standard EVM library directly.

Version:

**Network**

- [ ] Sei Mainnet (chain ID 1329)
- [ ] Sei Testnet (chain ID 1328)
- [ ] Local node (chain ID 713714)
- [ ] Unknown

RPC endpoint, if not the default public endpoint:

**Expected EVM behavior**
What did you expect, and where does that expectation come from? For example, the library docs, an EIP, or the same code on another EVM network.

**Observed Sei behavior**
What happened instead?

**Minimal reproduction**
Provide the smallest code sample, command, or JSON-RPC payload that reproduces the issue. Remove private keys, seed phrases, and other secrets first.

**Error output or transaction hash**
Paste the relevant error, RPC response, transaction hash, or receipt.

**Classification**
If you know it, select one:

- [ ] SDK gap: an `@sei-js` package, template, or docs page needs a change
- [ ] Network issue: the RPC response differs from documented Sei behavior
- [ ] Upstream issue: the behavior comes from viem, wagmi, ethers, or a wallet
- [ ] Docs issue: a docs page is wrong or missing
- [ ] Intentional divergence: Sei documents this difference
- [ ] Not sure

**Additional context**
Add any other context that may help with triage. Maintainers handle these reports under the [EVM compatibility SLA](https://github.com/sei-protocol/sei-js/blob/main/.github/EVM_COMPAT_SLA.md).

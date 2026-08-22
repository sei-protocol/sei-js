<div align="center">

# @sei-js/create-sei

[![npm version](https://badge.fury.io/js/@sei-js%2Fcreate-sei.svg)](https://badge.fury.io/js/@sei-js%2Fcreate-sei)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sei Network](https://img.shields.io/badge/Sei-Network-red)](https://sei.io)

**Scaffold new Sei applications with pre-configured templates and tooling**

[GitHub](https://github.com/sei-protocol/sei-js) • [NPM](https://www.npmjs.com/package/@sei-js/create-sei) • [Telegram](https://t.me/+LPW_1djQwRQwMzlk)

</div>

## 🚀 Quick Start

```bash
npx @sei-js/create-sei app -n my-sei-app
```

Generated applications require Bun 1.3.14 or newer. Their dependency overrides and smoke coverage are Bun-specific; using npm, Yarn, or pnpm can resolve a different, unverified security graph.

## Release verification

Pull requests run `auto` mode in the dedicated create-sei smoke workflow. It uses a local candidate when pending Changesets computes the template's exact `@sei-js/precompiles` pin, or when a Version Packages PR has already set the local manifest to that exact version. Otherwise it validates the exact published npm version. A mismatched source tree is never relabeled as an older package.

After `@sei-js/precompiles` has been staged to npm, dispatch the same workflow in `registry` mode. Registry mode always leaves the generated manifest untouched and verifies npm resolves the exact template pin. Audit findings are report-only in registry mode; local candidate mode blocks only on high or critical findings while reporting lower severities.

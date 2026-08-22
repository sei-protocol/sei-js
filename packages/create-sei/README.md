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

## Release verification

`bun run test:create-sei-release -- --precompiles-source local` builds a candidate `@sei-js/precompiles` tarball at the version computed by Changesets and validates both generated variants. Pull requests run this mode in the dedicated create-sei smoke workflow.

After `@sei-js/precompiles` has been staged to npm, dispatch the same workflow in `registry` mode. Registry mode leaves the generated manifest untouched, verifies npm resolves the exact computed release version, and reports audit findings without blocking verification of install, check, build, and production runtime behavior.

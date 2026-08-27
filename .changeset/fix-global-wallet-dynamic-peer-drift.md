---
'@sei-js/sei-global-wallet': patch
---

Document that `@dynamic-labs/ethereum-aa` has to match the `@dynamic-labs/global-wallet-client` version npm resolves, and keep the release checks on that resolved version instead of a constant.

Dynamic declares `@dynamic-labs/ethereum-aa` as an exact peer of its client and pins its internal packages to the client's version, so the two move together on every patch. `@dynamic-labs/global-wallet-client` is a `^4.96.3` dependency here, which means a Dynamic patch inside that range changes the peer version consumers need. Pinning an older `@dynamic-labs/ethereum-aa` than the resolved client does not fail the install: npm cannot place the client's exact peer beside the older root copy, so it nests the client under this package and duplicates the whole Dynamic runtime. The [Optional peer versions](https://github.com/sei-protocol/sei-js/blob/main/packages/sei-global-wallet/README.md#optional-peer-versions) table now states this and shows how to read the version the resolved client asks for.

The consumer verifier resolved `4.96.3` regardless of what the range resolved to, so Dynamic publishing `@dynamic-labs/global-wallet-client@4.96.4` turned the nightly consumer run red on a duplicated Dynamic subtree rather than on any change in this repository. It now resolves the declared range against the registry, pins that client and the peer version it requests in each full consumer, and reports both, so a Dynamic patch is exercised the way an application receives it while a peer pin moving outside this package's published range still fails. A client that npm nests instead of hoisting is now reported as such, rather than as an unresolved dependency.

No published dependency or peer range changes.

# Registry release runbook

Run commands from the repository root unless a step says otherwise.

## Initialize and inspect submodules
```bash
git submodule update --init --recursive
bun run --cwd packages/registry check:submodules
```

The current reviewed community asset-list values are:
- Remote: `https://github.com/Seitrace/sei-assetlist.git`
- Commit: `964ca87f7cff8d8791ad1e994628fa410faae61e`
- Author and commit date: VuTran1902, 2026-02-01T10:49:02+07:00
- Relationship to the previous `831406ba8cbe41f3f620c4e7a8ddca67405b5512` pin: descendant, 186 commits ahead

`check:submodules` parses each stage-0 gitlink OID from the index and requires the initialized checkout to be at that exact OID with a clean worktree and the expected configured/origin remote. The community gitlink and checkout must also equal the reviewed revision above. A release must not bundle an unstaged gitlink update or local submodule edits.

The registry package `test` script runs this live repository check before unit tests. The root `test` script invokes every package test, so both the Checks and Release workflows enforce it; both workflows must continue using `actions/checkout` with `submodules: recursive`.

## Review and repin the community asset list
Never update the gitlink by blindly checking out a moving branch. Review a candidate commit and then check out its full SHA.

```bash
assetlist=packages/registry/community-assetlist
previous=$(git -C "$assetlist" rev-parse HEAD)

git config --file .gitmodules --get submodule.packages/registry/community-assetlist.url
git -C "$assetlist" remote -v
git ls-remote --symref https://github.com/Seitrace/sei-assetlist.git HEAD refs/heads/main
git -C "$assetlist" fetch origin main

candidate=<full-reviewed-sha>
git -C "$assetlist" show -s --format='%H%n%aI%n%cI%n%an <%ae>%n%s' "$candidate"
git -C "$assetlist" merge-base --is-ancestor "$previous" "$candidate"
git -C "$assetlist" rev-list --count "$previous..$candidate"
git -C "$assetlist" log --reverse --format='%h %cs %s' "$previous..$candidate"
git -C "$assetlist" diff --stat "$previous..$candidate"
git -C "$assetlist" diff "$previous..$candidate" -- assetlist.json schema/assetlist.json
```

Review all supported-network additions, removals, contract addresses, `type_asset` values, `pointer_contract` objects, denomination units, and image URL changes. Record the candidate's exact SHA and commit date in the release change. Only after review:

```bash
git -C "$assetlist" checkout --detach "$candidate"
```

At this point the checkout has moved but the index gitlink has not. `check:submodules` must fail with both OIDs until the reviewed gitlink is staged. For the current remediation, the expected pre-stage mismatch is recorded `831406ba8cbe41f3f620c4e7a8ddca67405b5512` versus checkout/reviewed `964ca87f7cff8d8791ad1e994628fa410faae61e`.

After review, stage only the intended gitlink and verify the exact recorded value before running release checks:

```bash
git add packages/registry/community-assetlist
git ls-files --stage -- packages/registry/community-assetlist packages/registry/chain-registry
git diff --cached --submodule=short -- packages/registry/community-assetlist
bun run --cwd packages/registry check:submodules
```

The community index entry must be mode `160000`, stage `0`, and OID `964ca87f7cff8d8791ad1e994628fa410faae61e`. The chain-registry index OID and checkout must remain `855440d90df49246498d0870c6be5de5af56dada`. Update `REVIEWED_ASSETLIST_REVISION`, deterministic counts and canonical fixtures, this runbook, the README migration notes, and the changeset in the same change.

## Validate schema and filtering
The package validator checks every upstream network entry for the public token shape, allowed asset types, denomination field types, image metadata, and pointer metadata. The deterministic tests then verify supported networks, source and retained counts, canonical assets, IBC/ICS-20 removal, and source/runtime parity.

```bash
bun run --cwd packages/registry test
bun run typecheck
```

Also review the upstream Draft-07 schema itself. At the current pin, that schema requires exactly two denomination units for every token, but upstream's `ForU AI Genesis` ERC-721 intentionally has an empty `denom_units` array. The package retains this non-IBC asset and validates its fields while allowing the non-fungible exception. Do not rewrite pinned upstream metadata during packaging, and do not generalize this exception to malformed fungible assets without a separate review.

The source and esbuild plugin share `filterTokenList`; both reject malformed fields and remove an asset if:
- `base` starts with `ibc/`, case-insensitively;
- any denomination-unit `denom` starts with `ibc/`; or
- `type_asset` is `ics20`, case-insensitively.

The current reviewed source has 53 `pacific-1` and 9 `atlantic-2` entries. The package must retain 46 and 7 respectively, filtering 7 and 2 IBC/ICS-20 entries. No other network key may appear at runtime.

## Build and compare the generated artifact
```bash
bun run --cwd packages/registry build
bun run --cwd packages/registry check:artifact
bun test --isolate scripts/registry-release.test.ts
```

`check:artifact` imports the generated ESM bundle and deep-compares `TOKEN_LIST` with a fresh validation and filtering pass over the pinned submodule source.

The release-script tests use simulated git command results for exact gitlinks, wrong recorded OIDs, mismatched checkouts, dirty worktrees, missing/uninitialized worktrees, and remote mismatches. They do not require the current worktree gitlink to be staged:

```bash
bun test --isolate scripts/registry-release.test.ts
```

## Verify retained image links
Ordinary unit tests validate URL shape and deterministic URL collection without contacting external hosts. Run the live check explicitly for every release:

```bash
bun run --cwd packages/registry check:images
```

The checker probes every unique retained PNG/SVG URL with bounded concurrency and a timeout. It reports each HTTP status or network failure and exits nonzero if any URL fails. Record the number of URLs checked and the result in the release evidence. The current reviewed pin has 48 unique retained image URLs.

Remediation verification on 2026-08-22: all 48 retained image URLs returned successful HTTP responses.

## Verify package quality
```bash
bun run --cwd packages/registry build
(cd packages/registry && bun run publint --pack npm --strict --level warning)
(cd packages/registry && bun run attw --pack . --profile esm-only)
node --input-type=module -e "import('./packages/registry/dist/index.js').then(({ TOKEN_LIST }) => console.log(Object.fromEntries(Object.entries(TOKEN_LIST).map(([network, assets]) => [network, assets.length]))))"
(cd packages/registry && npm pack --dry-run --json)
```

The dry run should contain only package metadata and `dist`; it must not contain either submodule, source data, tests, or operational scripts. `package.json` must not add `prepare`, `prepack`, `postinstall`, or other install/submodule lifecycle hooks.

## Full repository verification
```bash
bun run check
bun run build
bun run test
bun run --cwd packages/registry check:submodules
git -C packages/registry/community-assetlist status --short
git -C packages/registry/chain-registry status --short
git status --short
```

Before release, confirm the only registry changes are the reviewed gitlink, intended source/tests/docs/scripts, and changeset. Re-run the live image check close to publication because external URL health can change independently of the pinned JSON.

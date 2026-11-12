# EVM compatibility issue SLA

How sei-js maintainers triage reports where EVM behavior on Sei differs from what viem, wagmi, ethers, a wallet connector, or JSON-RPC lead a developer to expect. The public [EVM parity matrix](https://docs.sei.io/evm/sei-js/evm-parity) records the outcome of each report.

## Target

No open issue labelled `evm-compat` is older than 14 days.

## Intake

- Reporters use the **EVM compatibility** issue template (`.github/ISSUE_TEMPLATE/evm_compatibility.md`), which applies the `evm-compat` and `linear` labels.
- Add `evm-compat` by hand to any other issue that reports an EVM compatibility gap, such as a bug report about a viem or ethers workflow.

## Required details

Before an issue leaves triage, it has:

- the library or tool, and its version
- the affected `@sei-js` package and version, or a note that none is involved
- the network: Sei Mainnet (1329), Sei Testnet (1328), a local node (713714), or unknown
- the expected EVM behavior, and where that expectation comes from
- the observed Sei behavior
- a minimal reproduction
- the error output, RPC response, or transaction hash
- one classification from the table below

## Classification

| Classification | Meaning | Outcome |
| --- | --- | --- |
| SDK gap | An `@sei-js` package, template, or sei-js docs page needs a change. | Fix it in this repository, then update the matrix cell in sei-docs. |
| Network issue | The RPC response differs from documented Sei behavior. | Transfer the issue to [sei-protocol/sei-chain](https://github.com/sei-protocol/sei-chain/issues). |
| Upstream issue | The behavior comes from viem, wagmi, ethers, or a wallet. | Link the upstream report and document a workaround. |
| Docs issue | A sei-docs page is wrong or missing. | Fix it in [sei-protocol/sei-docs](https://github.com/sei-protocol/sei-docs). |
| Intentional divergence | Sei differs from Ethereum on purpose. | Check that [EVM compatibility](https://docs.sei.io/evm/evm-parity/evm-compatibility) documents it, mark the matrix cell **Network-limited**, and close. |

## Aging rules

| Age | Required action |
| --- | --- |
| 0–2 days | Confirm scope, ask for missing reproduction details, and classify. |
| 3–7 days | Assign an owner and link the matrix row, or add one. |
| 8–13 days | Post status and the next action. Split network or upstream work into its own issue. |
| 14 days | Escalate until the issue is closed, transferred, or converted into tracked work. |

## Closure rules

Close an `evm-compat` issue when one of these is true:

- A fix has merged and a release path is identified.
- The behavior is documented as an intentional Sei divergence.
- The issue belongs to the network and has been transferred to sei-chain.
- The issue belongs upstream and a linked upstream report or workaround exists.
- The reporter cannot provide enough detail to reproduce it after follow-up.

When a closed issue changes a matrix cell, update `evm/sei-js/evm-parity.mdx` in sei-docs in the same week.

## Weekly review

Each week, review:

- the open `evm-compat` issues, and how many are older than 14 days ([oldest first](https://github.com/sei-protocol/sei-js/issues?q=is%3Aissue%20is%3Aopen%20label%3Aevm-compat%20sort%3Acreated-asc))
- matrix rows added or changed because of reports
- the split between SDK, docs, network, and upstream classifications
- release notes needed for resolved issues

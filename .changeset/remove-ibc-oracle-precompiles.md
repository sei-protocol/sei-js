---
'@sei-js/precompiles': major
---

**Breaking:** remove the unsupported IBC and Oracle precompile addresses, ABIs, and Ethers factories.

Neither precompile is supported on Sei any more, so calls to them fail on-chain regardless of where the address and ABI come from. There is no drop-in replacement: re-declaring them locally will not restore working calls, and code still depending on them needs to move off these precompiles.

Also remove the redundant Viem-specific ABI aliases. Import the raw `*_PRECOMPILE_ABI` constants instead; they work directly with Viem and preserve literal types for contract inference. The `viem` subpath re-exports these raw constants alongside the Sei chain definitions.

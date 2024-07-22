/**
 * The address of the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const DISTRIBUTION_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001007';

/**
 * The ABI for the Distribution precompile contract.
 * @category Cosmos Interoperability
 */
export const DISTRIBUTION_PRECOMPILE_ABI = [
  {
    inputs: [{ internalType: 'address', name: 'withdrawAddr', type: 'address' }],
    name: 'setWithdrawAddress',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'validator', type: 'string' }],
    name: 'withdrawDelegationRewards',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string[]', name: 'validators', type: 'string[]' }],
    name: 'withdrawMultipleDelegationRewards',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'delegatorAddress', type: 'address' }],
    name: 'rewards',
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  { internalType: 'uint256', name: 'amount', type: 'uint256' },
                  { internalType: 'uint256', name: 'decimals', type: 'uint256' },
                  { internalType: 'string', name: 'denom', type: 'string' }
                ],
                internalType: 'struct Coin[]', name: 'coins', type: 'tuple[]'
              },
              { internalType: 'string', name: 'validator_address', type: 'string' }
            ],
            internalType: 'struct Reward[]', name: 'rewards', type: 'tuple[]'
          },
          {
            components: [
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'uint256', name: 'decimals', type: 'uint256' },
              { internalType: 'string', name: 'denom', type: 'string' }
            ],
            internalType: 'struct Coin[]', name: 'total', type: 'tuple[]'
          }
        ],
        internalType: 'struct Rewards', name: 'rewards', type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const;

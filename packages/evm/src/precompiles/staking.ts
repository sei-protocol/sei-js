/**
 * The address of the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001005';

/**
 * The ABI for the Staking precompile contract.
 * @category Cosmos Interoperability
 */
export const STAKING_PRECOMPILE_ABI = [
  {
    inputs: [{ internalType: 'string', name: 'valAddress', type: 'string' }],
    name: 'delegate',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'srcAddress', type: 'string' },
      { internalType: 'string', name: 'dstAddress', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'redelegate',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'valAddress', type: 'string' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'undelegate',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegator', type: 'address' },
      { internalType: 'string', name: 'valAddress', type: 'string' }
    ],
    name: 'delegation',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'uint256', name: 'amount', type: 'uint256' },
              { internalType: 'string', name: 'denom', type: 'string' }
            ],
            internalType: 'struct Balance', name: 'balance', type: 'tuple'
          },
          {
            components: [
              { internalType: 'string', name: 'delegator_address', type: 'string' },
              { internalType: 'uint256', name: 'shares', type: 'uint256' },
              { internalType: 'uint256', name: 'decimals', type: 'uint256' },
              { internalType: 'string', name: 'validator_address', type: 'string' }
            ],
            internalType: 'struct DelegationDetails', name: 'delegation', type: 'tuple'
          }
        ],
        internalType: 'struct Delegation', name: 'delegation', type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const;

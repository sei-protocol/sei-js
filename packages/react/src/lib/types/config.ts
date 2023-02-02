export type ChainConfiguration =
  | 'testnet'
  | 'devnet'
  | { chainId: string; restUrl: string; rpcUrl: string };

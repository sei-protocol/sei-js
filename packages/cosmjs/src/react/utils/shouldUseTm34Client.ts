export const shouldUseTm34Client = (chainId: string) => {
  return chainId === 'atlantic-1' || chainId === 'sei-devnet-1';
};

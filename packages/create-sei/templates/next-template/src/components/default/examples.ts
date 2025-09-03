// Code examples for display
export const walletCodeExample = `// Import wallet hooks
import { useAccount, useDisconnect } from 'wagmi';

// Use the hooks
const { address, isConnected } = useAccount();
const { disconnect } = useDisconnect();

// Access wallet info
console.log('Connected:', isConnected);
console.log('Address:', address);

// Disconnect wallet
disconnect();`;

export const balanceCodeExample = `// Import hooks and utilities
import { useAccount, usePublicClient } from 'wagmi';
import { formatEther } from 'viem';

// Use the hooks
const { address } = useAccount();
const publicClient = usePublicClient();

// Get balance
const weiBalance = await publicClient.getBalance({ address });
const seiBalance = formatEther(weiBalance);`;

export const precompileCodeExample = `// Import Sei precompiles
import { VIEM_BANK_PRECOMPILE_ABI, BANK_PRECOMPILE_ADDRESS } from '@sei-js/precompiles';
import { usePublicClient } from 'wagmi';
import { type ReadContractParameters } from 'viem';

// Use the hook
const publicClient = usePublicClient();

// Call precompile
const readContractParams: ReadContractParameters = {
  abi: VIEM_BANK_PRECOMPILE_ABI,
  address: BANK_PRECOMPILE_ADDRESS,
  functionName: 'supply',
  args: ['usei']
};

const result = await publicClient.readContract(readContractParams);`;

export const transactionCodeExample = `// Import transaction hooks
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

// Use the hooks
const { data: hash, sendTransaction, isPending } = useSendTransaction();
const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

// Example recipient address for demonstration
const exampleRecipient = '0x742d35cc6634C0532925a3b8D8C9C6c0C6c0C6c0';

// Send transaction
sendTransaction({
  to: exampleRecipient,
  value: parseEther(amount),
});

// Transaction states: isPending → isConfirming → isConfirmed`;

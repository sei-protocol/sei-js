import { useChain } from '@cosmos-kit/react';

export const WalletConnectButton = () => {
	const seiChain = useChain('sei');

	const { isWalletConnected, connect, openView } = seiChain;

	return <button onClick={() => (isWalletConnected ? openView() : connect())}>{isWalletConnected ? 'Disconnect' : 'Connect'}</button>;
};

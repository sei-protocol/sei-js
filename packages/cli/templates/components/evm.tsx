import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export const WalletConnectButton = () => {
	const { connect } = useConnect();
	const { disconnect } = useDisconnect();
	const { isConnected } = useAccount();

	const onClickConnect = () => {
		if (isConnected) {
			disconnect();
		} else {
			connect({ connector: injected() });
		}
	};
	return <button onClick={onClickConnect}>{isConnected ? 'Disconnect' : 'Connect'}</button>;
};

import { useContext, useEffect, useState } from 'react';
import { SeiWalletContext } from '../../provider';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { SeiCosmWasmClient } from '@sei-js/core';

const useSeiCosmWasmClient = () => {
	const seiWallet = useContext(SeiWalletContext);

	const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient | undefined>(undefined);

	useEffect(() => {
		const connect = async () => {
			try {
				if (!seiWallet?.rpcUrl) return;
				const client = await SeiCosmWasmClient.connect(seiWallet.rpcUrl);
				setCosmWasmClient(client);
			} catch {
				console.error('Error creating SeiCosmWasmClient.');
			}
		};
		connect().then();
	}, [seiWallet, seiWallet?.rpcUrl]);

	return { cosmWasmClient };
};

export default useSeiCosmWasmClient;

// @ts-nocheck
import { ChainProvider } from '@cosmos-kit/react';
import { wallets } from 'cosmos-kit';
import { ReactNode } from 'react';
import { ARCTIC_1_SEI_COSMOS_KIT_CHAIN, COSMOS_KIT_ASSET_LIST } from '@sei-js/cosmjs';

export const WalletProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ChainProvider
			chains={[ARCTIC_1_SEI_COSMOS_KIT_CHAIN]}
			assetLists={[COSMOS_KIT_ASSET_LIST]}
			wallets={wallets.for('compass', 'fin')}
			walletConnectOptions={undefined}
			endpointOptions={{
				endpoints: {
					sei: {
						rpc: ['https://rpc.wallet.arctic-1.sei.io'],
						rest: ['https://rest.wallet.arctic-1.sei.io']
					}
				}
			}}>
			{children}
		</ChainProvider>
	);
};

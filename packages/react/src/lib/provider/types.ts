import { ReactNode } from 'react';
import { ChainConfiguration } from '../types';

export type SeiWalletProviderProps = {
	children: ReactNode;
	chainConfiguration: ChainConfiguration;
};

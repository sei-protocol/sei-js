import IBCInfoJSON from '../../chain-registry/ibc_info.json';
import { Network } from '../index';

export interface ChannelInfo {
	counterparty_chain_name: string;
	dst_channel: string;
	src_channel: string;
	port_id: string;
	client_id: string;
}

export type IBCNetworkInfo = {
	[network in Network]: ChannelInfo[];
};

export const IBCInfo: IBCNetworkInfo = IBCInfoJSON as IBCNetworkInfo;

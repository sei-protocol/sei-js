import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { GetCtAccountRequest, GetCtAccountResponse, GetAllCtAccountsRequest, GetAllCtAccountsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
	getCtAccount(request: GetCtAccountRequest): Promise<GetCtAccountResponse>;
	getAllCtAccounts(request: GetAllCtAccountsRequest): Promise<GetAllCtAccountsResponse>;
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.getCtAccount = this.getCtAccount.bind(this);
		this.getAllCtAccounts = this.getAllCtAccounts.bind(this);
	}
	getCtAccount(request: GetCtAccountRequest): Promise<GetCtAccountResponse> {
		const data = GetCtAccountRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Query', 'GetCtAccount', data);
		return promise.then((data) => GetCtAccountResponse.decode(new BinaryReader(data)));
	}
	getAllCtAccounts(request: GetAllCtAccountsRequest): Promise<GetAllCtAccountsResponse> {
		const data = GetAllCtAccountsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Query', 'GetAllCtAccounts', data);
		return promise.then((data) => GetAllCtAccountsResponse.decode(new BinaryReader(data)));
	}
}
export const createRpcQueryExtension = (base: QueryClient) => {
	const rpc = createProtobufRpcClient(base);
	const queryService = new QueryClientImpl(rpc);
	return {
		getCtAccount(request: GetCtAccountRequest): Promise<GetCtAccountResponse> {
			return queryService.getCtAccount(request);
		},
		getAllCtAccounts(request: GetAllCtAccountsRequest): Promise<GetAllCtAccountsResponse> {
			return queryService.getAllCtAccounts(request);
		}
	};
};
